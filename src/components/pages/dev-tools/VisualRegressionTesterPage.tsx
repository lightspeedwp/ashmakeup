/**
 * @fileoverview Visual Regression Tester — before/after comparison of component states
 *
 * Provides side-by-side and overlay modes for comparing a component's
 * light vs dark, default vs hover, and normal vs reduced-motion states.
 *
 * @component VisualRegressionTesterPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/snippet-generator.css';
import '../../../styles/blocks/visual-regression.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const breadcrumbs = devToolBreadcrumbs('Visual Regression Tester');

interface ComparisonTest {
  id: string;
  name: string;
  description: string;
  leftLabel: string;
  rightLabel: string;
  leftClass: string;
  rightClass: string;
}

const COMPARISON_TESTS: ComparisonTest[] = [
  {
    id: 'theme',
    name: 'Light vs Dark Theme',
    description: 'Compare component rendering across theme modes.',
    leftLabel: 'Light Mode',
    rightLabel: 'Dark Mode',
    leftClass: '',
    rightClass: 'dark',
  },
  {
    id: 'hover',
    name: 'Default vs Hover State',
    description: 'Compare resting and interactive states of cards and buttons.',
    leftLabel: 'Default',
    rightLabel: 'Hover / Focus',
    leftClass: '',
    rightClass: 'pseudo-hover',
  },
  {
    id: 'size',
    name: 'Small vs Large Viewport',
    description: 'Compare component layout at different viewport widths.',
    leftLabel: 'Mobile (320px)',
    rightLabel: 'Desktop (1440px)',
    leftClass: 'vr-mobile',
    rightClass: 'vr-desktop',
  },
];

/** Sample card for comparison */
function SampleCard({ wrapperClass }: { wrapperClass: string }) {
  return (
    <div className={`vr-sample-card ${wrapperClass}`}>
      <div className="vr-sample-card__inner">
        <span className="vr-sample-card__badge">
          Sample Badge
        </span>
        <h3 className="vr-sample-card__heading">
          Card Heading
        </h3>
        <p className="vr-sample-card__text">
          Body text for visual regression comparison across different states and themes.
        </p>
        <button type="button" className="vr-sample-card__button">
          Ghost Button
        </button>
      </div>
    </div>
  );
}

export function VisualRegressionTesterPage() {
  const [activeTest, setActiveTest] = useState(COMPARISON_TESTS[0].id);
  const viewModeInit: 'side-by-side' | 'overlay' = 'side-by-side';
  const [viewMode, setViewMode] = useState(viewModeInit);
  const [overlayOpacity, setOverlayOpacity] = useState(50);

  useEffect(() => {
    setSEO(devToolsSEO.visualRegression);
  }, []);

  const test = COMPARISON_TESTS.find((t) => t.id === activeTest) || COMPARISON_TESTS[0];

  const takeScreenshotNote = useCallback(() => {
    // In a real environment, this would use html2canvas or similar
    // For now, it serves as a UX placeholder
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={breadcrumbs} centered />
          <span className="specimen-page__hero-badge">Testing</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            Visual Regression Tester
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            Compare component rendering across themes, states, and viewport sizes. Use side-by-side or overlay mode.
          </p>
        </div>
      </header>

      <div className="snippet__content">
        {/* Controls */}
        <div className="snippet__controls">
          <div className="snippet__row">
            <div className="snippet__field">
              <label className="snippet__label" htmlFor="vr-test">Comparison Test</label>
              <select
                id="vr-test"
                className="snippet__select"
                value={activeTest}
                onChange={(e) => setActiveTest(e.target.value)}
              >
                {COMPARISON_TESTS.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
            </div>
            <div className="snippet__field">
              <label className="snippet__label" htmlFor="vr-mode">View Mode</label>
              <select
                id="vr-mode"
                className="snippet__select"
                value={viewMode}
                onChange={(e) => setViewMode(e.target.value as 'side-by-side' | 'overlay')}
              >
                <option value="side-by-side">Side by Side</option>
                <option value="overlay">Overlay</option>
              </select>
            </div>
          </div>
          {viewMode === 'overlay' && (
            <div className="snippet__field">
              <label className="snippet__label" htmlFor="vr-opacity">
                Overlay Opacity: {overlayOpacity}%
              </label>
              <input
                id="vr-opacity"
                type="range"
                className="playground__range"
                min={0}
                max={100}
                value={overlayOpacity}
                onChange={(e) => setOverlayOpacity(Number(e.target.value))}
              />
            </div>
          )}
          <p className="snippet__template-desc">{test.description}</p>
        </div>

        {/* Comparison Area */}
        {viewMode === 'side-by-side' ? (
          <div className="snippet__outputs">
            <div className="snippet__panel">
              <div className="snippet__panel-header">
                <span className="snippet__panel-title">{test.leftLabel}</span>
              </div>
              <SampleCard wrapperClass={test.leftClass} />
            </div>
            <div className="snippet__panel">
              <div className="snippet__panel-header">
                <span className="snippet__panel-title">{test.rightLabel}</span>
              </div>
              <SampleCard wrapperClass={test.rightClass} />
            </div>
          </div>
        ) : (
          <div className="snippet__panel vr-overlay-panel">
            <div className="snippet__panel-header">
              <span className="snippet__panel-title">
                {test.leftLabel} (base) + {test.rightLabel} (overlay at {overlayOpacity}%)
              </span>
            </div>
            <div className="vr-overlay__base">
              <SampleCard wrapperClass={test.leftClass} />
              <div
                className="vr-overlay__layer"
                style={{ opacity: overlayOpacity / 100 }}
              >
                <SampleCard wrapperClass={test.rightClass} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}