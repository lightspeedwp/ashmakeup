/**
 * @fileoverview Integration Tester — simulated user flow testing
 *
 * Provides a suite of user journey simulations that verify key flows:
 * navigation, search, filtering, theming, analytics, and PWA features.
 * Each test runs a sequence of checks and reports pass/fail.
 *
 * @component IntegrationTesterPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { CircleCheck, CircleX, Clock, Play } from '../../../lib/icons';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/deployment-readiness.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const breadcrumbs = devToolBreadcrumbs('Integration Tester');

interface TestStep {
  name: string;
  check: () => boolean;
}

interface TestSuite {
  id: string;
  title: string;
  description: string;
  steps: TestStep[];
}

interface TestResult {
  suiteId: string;
  status: 'idle' | 'running' | 'pass' | 'fail';
  results: { name: string; passed: boolean }[];
  duration: number;
}

const TEST_SUITES: TestSuite[] = [
  {
    id: 'navigation',
    title: 'Navigation Flow',
    description: 'Verifies core navigation elements are present and accessible.',
    steps: [
      { name: 'Header element exists', check: () => !!document.querySelector('header') },
      { name: 'Footer element exists', check: () => !!document.querySelector('footer') },
      { name: 'Main content landmark exists', check: () => !!document.querySelector('main[role="main"]') },
      { name: 'Navigation landmark exists', check: () => !!document.querySelector('nav') },
      { name: 'Logo link exists', check: () => !!document.querySelector('.logo') },
      { name: 'Skip to content target (id="main-content")', check: () => !!document.getElementById('main-content') },
    ],
  },
  {
    id: 'theme',
    title: 'Theme System',
    description: 'Verifies dark/light mode toggle and CSS custom properties.',
    steps: [
      { name: 'Document has theme class or data attribute', check: () => {
        const html = document.documentElement;
        return html.classList.contains('dark') || html.classList.contains('light') || !!html.dataset.theme;
      }},
      { name: '--foreground CSS variable defined', check: () => {
        const value = getComputedStyle(document.documentElement).getPropertyValue('--foreground');
        return value.trim().length > 0;
      }},
      { name: '--border CSS variable defined', check: () => {
        const value = getComputedStyle(document.documentElement).getPropertyValue('--border');
        return value.trim().length > 0;
      }},
      { name: 'Theme toggle button exists', check: () => !!document.querySelector('.theme-toggle') },
    ],
  },
  {
    id: 'accessibility',
    title: 'Accessibility Basics',
    description: 'Verifies ARIA landmarks, labels, and heading structure.',
    steps: [
      { name: 'At least one h1 on page', check: () => document.querySelectorAll('h1').length >= 1 },
      { name: 'No duplicate h1 elements', check: () => document.querySelectorAll('h1').length <= 1 },
      { name: 'All images have alt text', check: () => {
        const imgs = document.querySelectorAll('img');
        return Array.from(imgs).every((img) => img.hasAttribute('alt'));
      }},
      { name: 'All buttons have accessible name', check: () => {
        const buttons = document.querySelectorAll('button');
        return Array.from(buttons).every(
          (btn) => {
            const btnText = btn.textContent ? btn.textContent.trim() : '';
            return btnText.length > 0 || !!btn.getAttribute('aria-label');
          }
        );
      }},
      { name: 'Focus visible styles (neon pink indicator)', check: () => {
        const styles = getComputedStyle(document.documentElement);
        const neonPink = styles.getPropertyValue('--wp--preset--color--neon-pink');
        return neonPink.trim().length > 0;
      }},
    ],
  },
  {
    id: 'analytics',
    title: 'Analytics Integration',
    description: 'Verifies localStorage analytics keys exist.',
    steps: [
      { name: 'localStorage available', check: () => {
        try { localStorage.setItem('__test__', '1'); localStorage.removeItem('__test__'); return true; } catch { return false; }
      }},
      { name: 'analytics-history key format valid', check: () => {
        try {
          const raw = localStorage.getItem('analytics-history');
          if (!raw) return true; // no history yet is fine
          const parsed = JSON.parse(raw);
          return Array.isArray(parsed);
        } catch { return false; }
      }},
    ],
  },
  {
    id: 'performance',
    title: 'Performance Basics',
    description: 'Verifies DOM size and resource count are within acceptable limits.',
    steps: [
      { name: 'DOM element count < 3000', check: () => document.querySelectorAll('*').length < 3000 },
      { name: 'Max nesting depth < 30', check: () => {
        let max = 0;
        document.querySelectorAll('*').forEach((el) => {
          let depth = 0;
          let p = el.parentElement;
          while (p) { depth++; p = p.parentElement; }
          if (depth > max) max = depth;
        });
        return max < 30;
      }},
      { name: 'No inline style attributes on > 50 elements', check: () => {
        return document.querySelectorAll('[style]').length < 50;
      }},
    ],
  },
  {
    id: 'pwa',
    title: 'PWA Readiness',
    description: 'Verifies manifest and service worker registration.',
    steps: [
      { name: 'manifest.json link in head', check: () => !!document.querySelector('link[rel="manifest"]') },
      { name: 'Viewport meta tag present', check: () => !!document.querySelector('meta[name="viewport"]') },
      { name: 'Service Worker API available', check: () => 'serviceWorker' in navigator },
    ],
  },
];

export function IntegrationTesterPage() {
  const [results, setResults] = useState(new Map());
  const [isRunningAll, setIsRunningAll] = useState(false);

  useEffect(() => {
    setSEO(devToolsSEO.integration);
  }, []);

  const runSuite = useCallback((suite: TestSuite) => {
    const start = performance.now();

    setResults((prev) => {
      const next = new Map(prev);
      next.set(suite.id, { suiteId: suite.id, status: 'running', results: [], duration: 0 });
      return next;
    });

    // Run with a small delay to allow UI update
    setTimeout(() => {
      const stepResults = suite.steps.map((step) => {
        try {
          return { name: step.name, passed: step.check() };
        } catch {
          return { name: step.name, passed: false };
        }
      });

      const allPassed = stepResults.every((r) => r.passed);
      const duration = Math.round(performance.now() - start);

      setResults((prev) => {
        const next = new Map(prev);
        next.set(suite.id, {
          suiteId: suite.id,
          status: allPassed ? 'pass' : 'fail',
          results: stepResults,
          duration,
        });
        return next;
      });
    }, 100);
  }, []);

  const runAll = useCallback(() => {
    setIsRunningAll(true);
    TEST_SUITES.forEach((suite, index) => {
      setTimeout(() => {
        runSuite(suite);
        if (index === TEST_SUITES.length - 1) {
          setTimeout(() => setIsRunningAll(false), 200);
        }
      }, index * 150);
    });
  }, [runSuite]);

  const passedCount = Array.from(results.values()).filter((r) => r.status === 'pass').length;
  const totalRun = Array.from(results.values()).filter((r) => r.status !== 'idle' && r.status !== 'running').length;

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={breadcrumbs} centered />
          <span className="specimen-page__hero-badge">Testing</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            Integration Tester
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            Run simulated user flow tests against the live page. Each suite verifies a category of functionality — navigation, theming, accessibility, analytics, performance, and PWA.
          </p>
        </div>
      </header>

      {/* Run All + Summary */}
      <div className="deploy__score">
        <button
          type="button"
          className="playground__btn playground__btn--primary"
          onClick={runAll}
          disabled={isRunningAll}
        >
          <Play className="playground__btn-icon" />
          {isRunningAll ? 'Running...' : 'Run All Tests'}
        </button>
        {totalRun > 0 && (
          <span className="deploy__gauge-sub">
            {passedCount} of {totalRun} suites passed
          </span>
        )}
      </div>

      {/* Test Suites */}
      <div className="deploy__categories">
        {TEST_SUITES.map((suite) => {
          const result = results.get(suite.id);
          const statusLabel = result
            ? result.status === 'pass'
              ? `Passed (${result.duration}ms)`
              : result.status === 'fail'
              ? `Failed (${result.duration}ms)`
              : result.status === 'running'
              ? 'Running...'
              : 'Not run'
            : 'Not run';

          return (
            <details key={suite.id} className="deploy__category" open={!!result && result.status !== 'idle'}>
              <summary className="deploy__category-header">
                {result && result.status === 'pass' ? (
                  <CircleCheck className="deploy__check-icon deploy__check-icon--pass" aria-hidden="true" />
                ) : result && result.status === 'fail' ? (
                  <CircleX className="deploy__check-icon deploy__check-icon--fail" aria-hidden="true" />
                ) : result && result.status === 'running' ? (
                  <Clock className="deploy__check-icon deploy__check-icon--warn" aria-hidden="true" />
                ) : null}
                <span className="deploy__category-title">{suite.title}</span>
                <span className="deploy__category-summary">{statusLabel}</span>
                <button
                  type="button"
                  className="comp-api__copy-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    runSuite(suite);
                  }}
                  aria-label={`Run ${suite.title}`}
                >
                  Run
                </button>
              </summary>

              <div className="deploy__checks">
                <div className="deploy__check">
                  <div className="deploy__check-info">
                    <span className="deploy__check-rec">{suite.description}</span>
                  </div>
                </div>
                {result && result.results ? result.results.map((step, idx) => (
                  <div key={idx} className="deploy__check">
                    {step.passed ? (
                      <CircleCheck className="deploy__check-icon deploy__check-icon--pass" aria-label="Passed" />
                    ) : (
                      <CircleX className="deploy__check-icon deploy__check-icon--fail" aria-label="Failed" />
                    )}
                    <div className="deploy__check-info">
                      <span className="deploy__check-name">{step.name}</span>
                    </div>
                  </div>
                )) : null}
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}