/**
 * @fileoverview Accessibility Tester developer tool
 *
 * Runs a live client-side accessibility audit against the current DOM,
 * checking for common WCAG 2.1 AA violations. Displays results grouped
 * by severity with actionable suggestions.
 *
 * @component AccessibilityTesterPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  TriangleAlert,
  CircleCheck,
  Info,
  CircleX,
  RefreshCw,
  Trash2,
  Shield,
  Lightbulb,
  ChevronDown,
} from '../../../lib/icons';
import { accessibilityTesterUI } from '../../../data/mock/ui/accessibility-tester';
import type { A11yIssue } from '../../../data/mock/ui/accessibility-tester';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/a11y-tester.css';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

/* ── Audit Engine ── */

function runAccessibilityAudit(): A11yIssue[] {
  const issues: A11yIssue[] = [];

  /* 1. Images without alt */
  document.querySelectorAll('img').forEach((img) => {
    if (!img.hasAttribute('alt')) {
      issues.push({
        ruleId: 'img-alt',
        element: '<img>',
        selector: buildSelector(img),
        message: `Image is missing an alt attribute: ${img.src ? img.src.slice(-60) : '(no src)'}`,
        severity: 'critical',
      });
    }
  });

  /* 2. Buttons without accessible name */
  document.querySelectorAll('button, [role="button"]').forEach((btn) => {
    const text = (btn.textContent || '').trim();
    const ariaLabel = btn.getAttribute('aria-label') || '';
    const ariaLabelledby = btn.getAttribute('aria-labelledby') || '';
    if (!text && !ariaLabel && !ariaLabelledby) {
      issues.push({
        ruleId: 'button-label',
        element: '<button>',
        selector: buildSelector(btn),
        message: 'Button has no accessible name (text content, aria-label, or aria-labelledby).',
        severity: 'critical',
      });
    }
  });

  /* 3. Links without discernible text */
  document.querySelectorAll('a[href]').forEach((link) => {
    const text = (link.textContent || '').trim();
    const ariaLabel = link.getAttribute('aria-label') || '';
    const img = link.querySelector('img[alt]');
    if (!text && !ariaLabel && !img) {
      issues.push({
        ruleId: 'link-text',
        element: '<a>',
        selector: buildSelector(link),
        message: 'Link has no discernible text for screen readers.',
        severity: 'critical',
      });
    }
  });

  /* 4. Form inputs without labels */
  document.querySelectorAll('input, select, textarea').forEach((input) => {
    if (input.getAttribute('type') === 'hidden') return;
    const id = input.getAttribute('id');
    const ariaLabel = input.getAttribute('aria-label');
    const ariaLabelledby = input.getAttribute('aria-labelledby');
    const hasLabel = id ? document.querySelector(`label[for="${id}"]`) : false;
    const parentLabel = input.closest('label');
    if (!hasLabel && !parentLabel && !ariaLabel && !ariaLabelledby) {
      issues.push({
        ruleId: 'form-label',
        element: `<${input.tagName.toLowerCase()}>`,
        selector: buildSelector(input),
        message: 'Form control has no associated label, aria-label, or aria-labelledby.',
        severity: 'critical',
      });
    }
  });

  /* 5. Heading hierarchy */
  const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'));
  for (let i = 1; i < headings.length; i++) {
    const prev = parseInt(headings[i - 1].tagName[1], 10);
    const curr = parseInt(headings[i].tagName[1], 10);
    if (curr > prev + 1) {
      issues.push({
        ruleId: 'heading-order',
        element: `<h${curr}>`,
        selector: buildSelector(headings[i]),
        message: `Heading level skipped: <h${prev}> → <h${curr}>. Expected <h${prev + 1}>.`,
        severity: 'warning',
      });
    }
  }

  /* 6. Main landmark */
  const mainEl = document.querySelector('main, [role="main"]');
  if (!mainEl) {
    issues.push({
      ruleId: 'landmark-main',
      element: '<body>',
      selector: 'body',
      message: 'Page is missing a <main> landmark element.',
      severity: 'warning',
    });
  }

  /* 7. Nav landmarks */
  const navEls = document.querySelectorAll('nav');
  navEls.forEach((nav) => {
    if (!nav.getAttribute('aria-label') && !nav.getAttribute('aria-labelledby')) {
      issues.push({
        ruleId: 'landmark-nav',
        element: '<nav>',
        selector: buildSelector(nav),
        message: 'Navigation landmark is missing an aria-label or aria-labelledby.',
        severity: 'info',
      });
    }
  });

  /* 8. Positive tabindex */
  document.querySelectorAll('[tabindex]').forEach((el) => {
    const val = parseInt(el.getAttribute('tabindex') || '0', 10);
    if (val > 0) {
      issues.push({
        ruleId: 'tabindex',
        element: `<${el.tagName.toLowerCase()}>`,
        selector: buildSelector(el),
        message: `Element has tabindex="${val}". Avoid positive tabindex values.`,
        severity: 'warning',
      });
    }
  });

  /* 9. HTML lang */
  const htmlEl = document.documentElement;
  if (!htmlEl.getAttribute('lang')) {
    issues.push({
      ruleId: 'html-lang',
      element: '<html>',
      selector: 'html',
      message: 'The <html> element is missing a lang attribute.',
      severity: 'critical',
    });
  }

  /* 10. Viewport zoom */
  const viewport = document.querySelector('meta[name="viewport"]');
  if (viewport) {
    const content = viewport.getAttribute('content') || '';
    if (content.includes('user-scalable=no') || content.includes('maximum-scale=1')) {
      issues.push({
        ruleId: 'meta-viewport',
        element: '<meta>',
        selector: 'meta[name="viewport"]',
        message: 'Viewport meta disables user zoom (user-scalable=no or maximum-scale=1).',
        severity: 'critical',
      });
    }
  }

  /* 11. Skip link */
  const firstFocusable = document.querySelector('a[href], button, input, select, textarea, [tabindex]');
  const hasSkipLink =
    firstFocusable &&
    firstFocusable.tagName === 'A' &&
    (firstFocusable.textContent || '').toLowerCase().includes('skip');
  if (!hasSkipLink) {
    issues.push({
      ruleId: 'skip-link',
      element: '<body>',
      selector: 'body',
      message: 'No "Skip to content" link found as the first focusable element.',
      severity: 'info',
    });
  }

  return issues;
}

function buildSelector(el: Element): string {
  const tag = el.tagName.toLowerCase();
  const id = el.id ? `#${el.id}` : '';
  const cls = el.className && typeof el.className === 'string'
    ? '.' + el.className.trim().split(/\s+/).slice(0, 2).join('.')
    : '';
  return `${tag}${id}${cls}`.slice(0, 80);
}

/* ── Severity icon helper ── */

function SeverityIcon({ severity }: { severity: 'critical' | 'warning' | 'info' }) {
  switch (severity) {
    case 'critical':
      return <CircleX className="a11y-tester__severity-icon a11y-tester__severity-icon--critical" aria-hidden="true" />;
    case 'warning':
      return <TriangleAlert className="a11y-tester__severity-icon a11y-tester__severity-icon--warning" aria-hidden="true" />;
    case 'info':
      return <Info className="a11y-tester__severity-icon a11y-tester__severity-icon--info" aria-hidden="true" />;
  }
}

/* ── Component ── */

export function AccessibilityTesterPage() {
  const [issues, setIssues] = useState<A11yIssue[]>([]);
  const [hasRun, setHasRun] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set(['critical', 'warning', 'info']));

  useEffect(() => {
    setSEO(devToolsSEO.accessibility);
  }, []);

  const handleRunAudit = useCallback(() => {
    setIsRunning(true);
    // Small delay so the user sees the scanning state
    setTimeout(() => {
      const results = runAccessibilityAudit();
      setIssues(results);
      setHasRun(true);
      setIsRunning(false);
    }, 600);
  }, []);

  const handleClear = useCallback(() => {
    setIssues([]);
    setHasRun(false);
  }, []);

  const toggleGroup = useCallback((group: string) => {
    setExpandedGroups((prev) => {
      const next = new Set(prev);
      if (next.has(group)) {
        next.delete(group);
      } else {
        next.add(group);
      }
      return next;
    });
  }, []);

  /* Group issues by severity */
  const grouped = useMemo(() => {
    const map: Record<string, A11yIssue[]> = { critical: [], warning: [], info: [] };
    issues.forEach((issue) => {
      map[issue.severity].push(issue);
    });
    return map;
  }, [issues]);

  const totalChecks = accessibilityTesterUI.rules.length;
  const issueCount = issues.length;
  const criticalCount = grouped.critical.length;
  const warningCount = grouped.warning.length;
  const infoCount = grouped.info.length;
  const passedCount = Math.max(0, totalChecks - new Set(issues.map((i) => i.ruleId)).size);
  const score = hasRun ? Math.round((passedCount / totalChecks) * 100) : 0;
  
  // Extract nested ternary to avoid bundler issues
  const scoreRatingClass = score >= 90 ? 'good' : score >= 60 ? 'moderate' : 'poor';

  return (
    <main id="main-content" role="main" tabIndex={-1} className="a11y-tester">
      {/* ── Hero ── */}
      <header className="a11y-tester__hero">
        <div className="a11y-tester__hero-content">
          <Breadcrumbs items={accessibilityTesterUI.breadcrumbs} centered />

          <span className="a11y-tester__hero-badge">
            {accessibilityTesterUI.hero.badge}
          </span>

          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {accessibilityTesterUI.hero.title}
          </h1>

          <p className="a11y-tester__hero-desc text-body-p">
            {accessibilityTesterUI.hero.description}
          </p>

          {/* Actions */}
          <div className="a11y-tester__actions">
            <button
              type="button"
              className="a11y-tester__btn a11y-tester__btn--primary"
              onClick={handleRunAudit}
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="a11y-tester__btn-icon a11y-tester__btn-icon--spin" aria-hidden="true" />
                  {accessibilityTesterUI.actions.running}
                </>
              ) : (
                <>
                  <Shield className="a11y-tester__btn-icon" aria-hidden="true" />
                  {hasRun ? accessibilityTesterUI.actions.rerun : accessibilityTesterUI.actions.runAudit}
                </>
              )}
            </button>
            {hasRun && (
              <button
                type="button"
                className="a11y-tester__btn a11y-tester__btn--ghost"
                onClick={handleClear}
              >
                <Trash2 className="a11y-tester__btn-icon" aria-hidden="true" />
                {accessibilityTesterUI.actions.clear}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* ── Summary ── */}
      {hasRun && (
        <section className="a11y-tester__summary" aria-label={accessibilityTesterUI.summary.title}>
          <div className="a11y-tester__summary-inner">
            <h2 className="a11y-tester__summary-title text-card-h3">
              {accessibilityTesterUI.summary.title}
            </h2>

            <div className="a11y-tester__score-ring" role="meter" aria-valuenow={score} aria-valuemin={0} aria-valuemax={100} aria-label={`${accessibilityTesterUI.summary.score}: ${score}%`}>
              <svg className="a11y-tester__score-svg" viewBox="0 0 120 120" aria-hidden="true">
                <circle className="a11y-tester__score-track" cx="60" cy="60" r="52" />
                <circle
                  className={`a11y-tester__score-fill a11y-tester__score-fill--${scoreRatingClass}`}
                  cx="60"
                  cy="60"
                  r="52"
                  strokeDasharray={`${(score / 100) * 327} 327`}
                />
              </svg>
              <span className={`a11y-tester__score-value a11y-tester__score-value--${scoreRatingClass}`}>
                {score}%
              </span>
            </div>

            <div className="a11y-tester__summary-stats">
              <div className="a11y-tester__stat">
                <CircleCheck className="a11y-tester__stat-icon a11y-tester__stat-icon--pass" aria-hidden="true" />
                <span className="a11y-tester__stat-value">{passedCount}</span>
                <span className="a11y-tester__stat-label">{accessibilityTesterUI.summary.passed}</span>
              </div>
              <div className="a11y-tester__stat">
                <CircleX className="a11y-tester__stat-icon a11y-tester__stat-icon--critical" aria-hidden="true" />
                <span className="a11y-tester__stat-value">{criticalCount}</span>
                <span className="a11y-tester__stat-label">{accessibilityTesterUI.summary.critical}</span>
              </div>
              <div className="a11y-tester__stat">
                <TriangleAlert className="a11y-tester__stat-icon a11y-tester__stat-icon--warning" aria-hidden="true" />
                <span className="a11y-tester__stat-value">{warningCount}</span>
                <span className="a11y-tester__stat-label">{accessibilityTesterUI.summary.warning}</span>
              </div>
              <div className="a11y-tester__stat">
                <Info className="a11y-tester__stat-icon a11y-tester__stat-icon--info" aria-hidden="true" />
                <span className="a11y-tester__stat-value">{infoCount}</span>
                <span className="a11y-tester__stat-label">{accessibilityTesterUI.summary.info}</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── Results ── */}
      {hasRun && (
        <section className="a11y-tester__results" aria-labelledby="a11y-results-title">
          <div className="a11y-tester__results-inner">
            <h2 id="a11y-results-title" className="a11y-tester__results-title text-card-h3">
              {accessibilityTesterUI.sections.results}
            </h2>

            {issueCount === 0 ? (
              <div className="a11y-tester__no-issues">
                <CircleCheck className="a11y-tester__no-issues-icon" aria-hidden="true" />
                <p>{accessibilityTesterUI.summary.noIssues}</p>
              </div>
            ) : (
              (['critical', 'warning', 'info'] as const).map((severity) => {
                const items = grouped[severity];
                if (items.length === 0) return null;
                const isExpanded = expandedGroups.has(severity);

                return (
                  <div key={severity} className="a11y-tester__group">
                    <button
                      type="button"
                      className={`a11y-tester__group-header a11y-tester__group-header--${severity}`}
                      onClick={() => toggleGroup(severity)}
                      aria-expanded={isExpanded}
                    >
                      <SeverityIcon severity={severity} />
                      <span className="a11y-tester__group-label">
                        {accessibilityTesterUI.severityLabels[severity]}
                      </span>
                      <span className="a11y-tester__group-count">{items.length}</span>
                      <ChevronDown className={`a11y-tester__group-chevron ${isExpanded ? 'a11y-tester__group-chevron--open' : ''}`} aria-hidden="true" />
                    </button>

                    {isExpanded && (
                      <ul className="a11y-tester__issue-list" role="list">
                        {items.map((issue, idx) => (
                          <li key={`${issue.ruleId}-${idx}`} className="a11y-tester__issue">
                            <p className="a11y-tester__issue-message">{issue.message}</p>
                            <div className="a11y-tester__issue-meta">
                              <code className="a11y-tester__issue-selector">{issue.selector}</code>
                              <span className="a11y-tester__issue-rule">
                                {(() => {
                                  const rule = accessibilityTesterUI.rules.find((r) => r.id === issue.ruleId);
                                  return rule && rule.wcag
                                    ? `WCAG ${rule.wcag}`
                                    : issue.ruleId;
                                })()}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </section>
      )}

      {/* ── Rules Reference ── */}
      <section className="a11y-tester__rules" aria-labelledby="a11y-rules-title">
        <div className="a11y-tester__rules-inner">
          <h2 id="a11y-rules-title" className="a11y-tester__rules-title text-card-h3">
            {accessibilityTesterUI.sections.rules}
          </h2>
          <div className="a11y-tester__rules-grid">
            {accessibilityTesterUI.rules.map((rule) => (
              <div key={rule.id} className="a11y-tester__rule-card">
                <div className="a11y-tester__rule-header">
                  <SeverityIcon severity={rule.severity} />
                  <span className="a11y-tester__rule-name">{rule.name}</span>
                </div>
                <p className="a11y-tester__rule-desc">{rule.description}</p>
                <span className="a11y-tester__rule-wcag">WCAG {rule.wcag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tips ── */}
      <section className="a11y-tester__tips" aria-labelledby="a11y-tips-title">
        <div className="a11y-tester__tips-inner">
          <h2 id="a11y-tips-title" className="a11y-tester__tips-title text-card-h3">
            <Lightbulb className="a11y-tester__tips-icon" aria-hidden="true" />
            {accessibilityTesterUI.sections.tips}
          </h2>
          <div className="a11y-tester__tips-grid">
            {accessibilityTesterUI.tips.map((tip) => (
              <div key={tip.id} className="a11y-tester__tip-card">
                <h3 className="a11y-tester__tip-title">{tip.title}</h3>
                <p className="a11y-tester__tip-desc">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}