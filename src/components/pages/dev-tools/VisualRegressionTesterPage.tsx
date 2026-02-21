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
import '@/styles/blocks/specimen-page.css';
import '@/styles/blocks/snippet-generator.css';

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
    <div className={wrapperClass} style={{
      padding: 'var(--wp--preset--spacing--fluid-md)',
      borderRadius: 'var(--wp--preset--border-radius--md)',
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column' as const,
        gap: 'var(--wp--preset--spacing--fluid-xs)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--wp--preset--border-radius--md)',
        padding: 'var(--wp--preset--spacing--fluid-sm)',
        background: 'var(--wp--preset--color--base)',
      }}>
        <span style={{
          alignSelf: 'flex-start',
          fontSize: '0.6875rem',
          fontWeight: 600,
          textTransform: 'uppercase' as const,
          letterSpacing: '0.06em',
          padding: '0.125rem 0.5rem',
          borderRadius: 'var(--wp--preset--border-radius--full)',
          background: 'rgba(190, 0, 254, 0.08)',
          color: 'var(--wp--preset--color--neon-purple-text)',
        }}>
          Sample Badge
        </span>
        <h3 style={{
          fontFamily: 'var(--wp--preset--font-family--brand-heading)',
          color: 'var(--foreground)',
        }}>
          Card Heading
        </h3>
        <p style={{
          fontFamily: 'var(--wp--preset--font-family--brand-body)',
          fontSize: 'var(--wp--preset--font-size--100)',
          color: 'var(--wp--preset--color--neutral-600)',
        }}>
          Body text for visual regression comparison across different states and themes.
        </p>
        <button type="button" style={{
          alignSelf: 'flex-start',
          padding: '0.375rem 1rem',
          borderRadius: 'var(--wp--preset--border-radius--full)',
          border: '1px solid var(--border)',
          background: 'transparent',
          fontFamily: 'var(--wp--preset--font-family--brand-body)',
          fontSize: 'var(--wp--preset--font-size--100)',
          fontWeight: 600,
          color: 'var(--foreground)',
          cursor: 'pointer',
        }}>
          Ghost Button
        </button>
      </div>
    </div>
  );
}

export function VisualRegressionTesterPage() {
  const [activeTest, setActiveTest] = useState(COMPARISON_TESTS[0].id);
  const [viewMode, setViewMode] = useState<'side-by-side' | 'overlay'>('side-by-side');
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
          <div className="snippet__panel" style={{ position: 'relative' as const }}>
            <div className="snippet__panel-header">
              <span className="snippet__panel-title">
                {test.leftLabel} (base) + {test.rightLabel} (overlay at {overlayOpacity}%)
              </span>
            </div>
            <div style={{ position: 'relative' as const }}>
              <SampleCard wrapperClass={test.leftClass} />
              <div style={{
                position: 'absolute' as const,
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                opacity: overlayOpacity / 100,
                pointerEvents: 'none' as const,
              }}>
                <SampleCard wrapperClass={test.rightClass} />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}