/**
 * @fileoverview Code Quality Dashboard — static analysis display with live DOM metrics
 *
 * @component CodeQualityPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { codeQualityUI } from '../../../data/mock/ui/code-quality';
import type { DependencyNode } from '../../../data/mock/ui/code-quality';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/specimen-page.css';
import '@/styles/blocks/code-quality.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

/** Render dependency tree recursively */
function TreeNode({ node }: { node: DependencyNode }) {
  return (
    <li className="code-quality__tree-item">
      <span className="code-quality__tree-name">{node.name}</span>
      <span className="code-quality__tree-path">{node.path}</span>
      {node.children && node.children.length > 0 && (
        <ul className="code-quality__tree">
          {node.children.map((child) => (
            <TreeNode key={child.path} node={child} />
          ))}
        </ul>
      )}
    </li>
  );
}

/** SVG circle gauge */
function ScoreGauge({ score }: { score: number }) {
  const radius = 64;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="code-quality__gauge">
      <svg className="code-quality__gauge-svg" viewBox="0 0 160 160" aria-label={`Overall health score: ${score}%`}>
        <circle cx="80" cy="80" r={radius} className="code-quality__gauge-bg" />
        <circle
          cx="80"
          cy="80"
          r={radius}
          className="code-quality__gauge-fill"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
        />
        <text x="80" y="80" className="code-quality__gauge-text">
          {score}%
        </text>
      </svg>
      <span className="code-quality__gauge-label">Overall Health Score</span>
    </div>
  );
}

export function CodeQualityPage() {
  const [domStats, setDomStats] = useState({ totalElements: '—', maxDepth: '—' });

  useEffect(() => {
    setSEO(devToolsSEO.codeQuality);
  }, []);

  /** Measure live DOM complexity */
  const measureDOM = useCallback(() => {
    const allElements = document.querySelectorAll('*');
    const total = allElements.length;

    let maxDepth = 0;
    allElements.forEach((el) => {
      let depth = 0;
      let parent = el.parentElement;
      while (parent) {
        depth++;
        parent = parent.parentElement;
      }
      if (depth > maxDepth) maxDepth = depth;
    });

    setDomStats({
      totalElements: String(total),
      maxDepth: String(maxDepth),
    });
  }, []);

  useEffect(() => {
    /* Measure after paint */
    const timer = setTimeout(measureDOM, 500);
    return () => clearTimeout(timer);
  }, [measureDOM]);

  const data = codeQualityUI;

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

      {/* Overall Score */}
      <ScoreGauge score={data.overallScore} />

      {/* DOM Complexity (LIVE) */}
      <section className="code-quality__section" aria-labelledby="cq-dom">
        <h2 id="cq-dom" className="code-quality__section-title">{data.domComplexity.title}</h2>
        <p className="code-quality__section-desc">{data.domComplexity.description}</p>
        <div className="code-quality__grid">
          <div className="code-quality__metric">
            <span className="code-quality__metric-label">Total Elements</span>
            <span className="code-quality__metric-value">{domStats.totalElements}</span>
            <span className="code-quality__metric-detail">Live count from document.querySelectorAll(&apos;*&apos;)</span>
          </div>
          <div className="code-quality__metric">
            <span className="code-quality__metric-label">Max Nesting Depth</span>
            <span className="code-quality__metric-value">{domStats.maxDepth}</span>
            <span className="code-quality__metric-detail">Deepest element parent chain</span>
          </div>
        </div>
        <button type="button" className="playground__btn" onClick={measureDOM}>
          Re-measure DOM
        </button>
      </section>

      {/* CSS Stats */}
      <section className="code-quality__section" aria-labelledby="cq-css">
        <h2 id="cq-css" className="code-quality__section-title">{data.cssStats.title}</h2>
        <p className="code-quality__section-desc">{data.cssStats.description}</p>
        <div className="code-quality__grid">
          {data.cssStats.metrics.map((m) => (
            <div key={m.id} className="code-quality__metric">
              <span className="code-quality__metric-label">{m.label}</span>
              <span className="code-quality__metric-value">{m.value}</span>
              <span className={`code-quality__trend code-quality__trend--${m.trend}`}>
                {m.trend === 'up' ? '▲' : m.trend === 'down' ? '▼' : '—'}
              </span>
              <span className="code-quality__metric-detail">{m.detail}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Component Dependency Tree */}
      <section className="code-quality__section" aria-labelledby="cq-tree">
        <h2 id="cq-tree" className="code-quality__section-title">{data.componentTree.title}</h2>
        <p className="code-quality__section-desc">{data.componentTree.description}</p>
        <ul className="code-quality__tree">
          {data.componentTree.tree.map((node) => (
            <TreeNode key={node.path} node={node} />
          ))}
        </ul>
      </section>

      {/* File Size Estimates */}
      <section className="code-quality__section" aria-labelledby="cq-files">
        <h2 id="cq-files" className="code-quality__section-title">{data.fileSizes.title}</h2>
        <p className="code-quality__section-desc">{data.fileSizes.description}</p>
        <div className="code-quality__files">
          {data.fileSizes.files.map((f) => (
            <div key={f.name} className="code-quality__file">
              <span className="code-quality__file-name">{f.name}</span>
              <span className="code-quality__file-size">{f.size}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Lint Summary */}
      <section className="code-quality__section" aria-labelledby="cq-lint">
        <h2 id="cq-lint" className="code-quality__section-title">{data.lintSummary.title}</h2>
        <p className="code-quality__section-desc">{data.lintSummary.description}</p>
        <div className="code-quality__lint-list">
          {data.lintSummary.results.map((r) => (
            <div key={r.tool} className="code-quality__lint-item">
              <span className="code-quality__lint-tool">{r.tool}</span>
              <span className="code-quality__lint-count">
                {r.errors} errors, {r.warnings} warnings
              </span>
              <span className={`code-quality__lint-status code-quality__lint-status--${r.status}`}>
                {r.status === 'pass' ? 'Pass' : r.status === 'warn' ? 'Warn' : 'Fail'}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* External Dependencies */}
      <section className="code-quality__section" aria-labelledby="cq-deps">
        <h2 id="cq-deps" className="code-quality__section-title">{data.externalDeps.title}</h2>
        <p className="code-quality__section-desc">{data.externalDeps.description}</p>
        <div className="code-quality__deps">
          {data.externalDeps.deps.map((d) => (
            <span key={d} className="code-quality__dep">{d}</span>
          ))}
        </div>
      </section>
    </main>
  );
}