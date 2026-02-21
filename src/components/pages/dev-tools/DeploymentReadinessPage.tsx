/**
 * @fileoverview Deployment Readiness — pre-deployment validation checklist with score gauge
 *
 * @component DeploymentReadinessPage
 * @version 1.0.0
 */

import React, { useEffect, useMemo } from 'react';
import { CheckCircle, AlertTriangle, XCircle, Gauge, Shield, Search, Lock, Code } from 'lucide-react';
import { deploymentReadinessUI } from '../../../data/mock/ui/deployment-readiness';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/specimen-page.css';
import '@/styles/blocks/deployment-readiness.css';

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  Gauge,
  Shield,
  Search,
  Lock,
  Code,
};

const STATUS_ICONS = {
  pass: CheckCircle,
  warn: AlertTriangle,
  fail: XCircle,
};

export function DeploymentReadinessPage() {
  useEffect(() => {
    setSEO(devToolsSEO.deployment);
  }, []);

  const data = deploymentReadinessUI;

  /** Calculate overall score */
  const { totalChecks, passCount, score } = useMemo(() => {
    let total = 0;
    let passed = 0;
    for (const cat of data.categories) {
      for (const check of cat.checks) {
        total++;
        if (check.status === 'pass') passed++;
      }
    }
    return {
      totalChecks: total,
      passCount: passed,
      score: total > 0 ? Math.round((passed / total) * 100) : 0,
    };
  }, [data.categories]);

  const radius = 72;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const gaugeColorClass =
    score >= 90 ? 'deploy__gauge-fill--green' :
    score >= 70 ? 'deploy__gauge-fill--orange' :
    'deploy__gauge-fill--red';

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={data.breadcrumbs} centered />
          <span className="specimen-page__hero-badge">{data.hero.badge}</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {data.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {data.hero.description}
          </p>
        </div>
      </header>

      {/* Score Gauge */}
      <div className="deploy__score">
        <svg className="deploy__gauge-svg" viewBox="0 0 180 180" aria-label={`Deployment score: ${score}%`}>
          <circle cx="90" cy="90" r={radius} className="deploy__gauge-bg" />
          <circle
            cx="90"
            cy="90"
            r={radius}
            className={`deploy__gauge-fill ${gaugeColorClass}`}
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
          <text x="90" y="90" className="deploy__gauge-text">
            {score}%
          </text>
        </svg>
        <span className="deploy__gauge-label">Deployment Score</span>
        <span className="deploy__gauge-sub">
          {passCount} of {totalChecks} checks passed
        </span>
      </div>

      {/* Audit Categories */}
      <div className="deploy__categories">
        {data.categories.map((cat) => {
          const CatIcon = CATEGORY_ICONS[cat.icon];
          const catPassed = cat.checks.filter((c) => c.status === 'pass').length;
          const catTotal = cat.checks.length;

          return (
            <details key={cat.id} className="deploy__category" open>
              <summary className="deploy__category-header">
                {CatIcon && (
                  <CatIcon className="deploy__category-icon" aria-hidden="true" />
                )}
                <span className="deploy__category-title">{cat.title}</span>
                <span className="deploy__category-summary">
                  {catPassed}/{catTotal} passed
                </span>
              </summary>

              <div className="deploy__checks">
                {cat.checks.map((check) => {
                  const StatusIcon = STATUS_ICONS[check.status];

                  return (
                    <div key={check.id} className="deploy__check">
                      <StatusIcon
                        className={`deploy__check-icon deploy__check-icon--${check.status}`}
                        aria-label={check.status}
                      />
                      <div className="deploy__check-info">
                        <span className="deploy__check-name">{check.name}</span>
                        <span className="deploy__check-rec">{check.recommendation}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </details>
          );
        })}
      </div>
    </main>
  );
}