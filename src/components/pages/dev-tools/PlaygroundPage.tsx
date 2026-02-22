/**
 * @fileoverview Design System Playground — interactive token experimentation
 *
 * @component PlaygroundPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/playground.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const breadcrumbs = devToolBreadcrumbs('Design System Playground');

/* ── Token Options ── */
const BG_COLORS = [
  { label: 'White', value: '#ffffff' },
  { label: 'Neutral 50', value: '#f9fafb' },
  { label: 'Neutral 100', value: '#f3f4f6' },
  { label: 'Neutral 800', value: '#1f2937' },
  { label: 'Neutral 900', value: '#111827' },
  { label: 'Atomic Black', value: '#0F0F0F' },
  { label: 'Neon Green', value: '#39FF14' },
  { label: 'Neon Pink', value: '#FF10F0' },
  { label: 'Neon Blue', value: '#1F51FF' },
  { label: 'Neon Purple', value: '#BE00FE' },
  { label: 'Neon Cyan', value: '#00F7FF' },
];

const TEXT_COLORS = [
  { label: 'Atomic Black', value: '#0F0F0F' },
  { label: 'White', value: '#ffffff' },
  { label: 'Neutral 600', value: '#4b5563' },
  { label: 'Neutral 300', value: '#d1d5db' },
  { label: 'Green Text', value: '#008f00' },
  { label: 'Pink Text', value: '#b300a4' },
  { label: 'Blue Text', value: '#002db3' },
  { label: 'Purple Text', value: '#7800a1' },
  { label: 'Neon Green', value: '#39FF14' },
  { label: 'Neon Pink', value: '#FF10F0' },
  { label: 'Neon Purple', value: '#BE00FE' },
];

const FONTS = [
  { label: 'Righteous (Title)', value: 'var(--wp--preset--font-family--brand-title)' },
  { label: 'Playfair Display (Heading)', value: 'var(--wp--preset--font-family--brand-heading)' },
  { label: 'Inter (Body)', value: 'var(--wp--preset--font-family--brand-body)' },
];

const FONT_SIZES = [
  { label: '100', value: 'var(--wp--preset--font-size--100)' },
  { label: '200', value: 'var(--wp--preset--font-size--200)' },
  { label: '300', value: 'var(--wp--preset--font-size--300)' },
  { label: '400', value: 'var(--wp--preset--font-size--400)' },
  { label: '500', value: 'var(--wp--preset--font-size--500)' },
  { label: '600', value: 'var(--wp--preset--font-size--600)' },
  { label: '700', value: 'var(--wp--preset--font-size--700)' },
  { label: '800', value: 'var(--wp--preset--font-size--800)' },
];

const RADII = [
  { label: 'None', value: '0' },
  { label: 'SM (0.25rem)', value: 'var(--wp--preset--border-radius--sm)' },
  { label: 'MD (0.5rem)', value: 'var(--wp--preset--border-radius--md)' },
  { label: 'LG (1rem)', value: 'var(--wp--preset--border-radius--lg)' },
  { label: 'XL (1.5rem)', value: 'var(--wp--preset--border-radius--xl)' },
  { label: '2XL (2rem)', value: 'var(--wp--preset--border-radius--2xl)' },
  { label: 'Full (pill)', value: 'var(--wp--preset--border-radius--full)' },
];

const SHADOWS = [
  { label: 'None', value: 'none' },
  { label: 'SM', value: 'var(--wp--preset--shadow--sm)' },
  { label: 'MD', value: 'var(--wp--preset--shadow--md)' },
  { label: 'LG', value: 'var(--wp--preset--shadow--lg)' },
  { label: 'XL', value: 'var(--wp--preset--shadow--xl)' },
  { label: '2XL', value: 'var(--wp--preset--shadow--2xl)' },
  { label: 'Card', value: 'var(--wp--preset--shadow--card)' },
  { label: 'Card Hover', value: 'var(--wp--preset--shadow--card-hover)' },
  { label: 'Neon Pink', value: 'var(--wp--preset--shadow--neon-pink)' },
  { label: 'Neon Purple', value: 'var(--wp--preset--shadow--neon-purple)' },
  { label: 'Neon Blue', value: 'var(--wp--preset--shadow--neon-blue)' },
];

const GRADIENTS = [
  { label: 'None', value: '' },
  { label: 'Cyberpunk', value: 'var(--wp--preset--gradient--cyberpunk)' },
  { label: 'Toxic Lime', value: 'var(--wp--preset--gradient--toxic-lime)' },
  { label: 'Solar Flare', value: 'var(--wp--preset--gradient--solar-flare)' },
  { label: 'Hyperpop', value: 'var(--wp--preset--gradient--hyperpop)' },
];

const GAP_OPTIONS = [
  { label: 'None', value: '0' },
  { label: 'Fluid XS', value: 'var(--wp--preset--spacing--fluid-xs)' },
  { label: 'Fluid SM', value: 'var(--wp--preset--spacing--fluid-sm)' },
  { label: 'Fluid MD', value: 'var(--wp--preset--spacing--fluid-md)' },
  { label: 'Fluid LG', value: 'var(--wp--preset--spacing--fluid-lg)' },
  { label: 'Fluid XL', value: 'var(--wp--preset--spacing--fluid-xl)' },
];

interface PlaygroundState {
  bgColor: string;
  textColor: string;
  font: string;
  fontSize: number;
  radius: string;
  shadow: string;
  gradient: string;
  gap: string;
}

const DEFAULTS: PlaygroundState = {
  bgColor: '#ffffff',
  textColor: '#0F0F0F',
  font: 'var(--wp--preset--font-family--brand-body)',
  fontSize: 3,
  radius: 'var(--wp--preset--border-radius--md)',
  shadow: 'var(--wp--preset--shadow--card)',
  gradient: 'var(--wp--preset--gradient--cyberpunk)',
  gap: 'var(--wp--preset--spacing--fluid-sm)',
};

export function PlaygroundPage() {
  const [state, setState] = useState<PlaygroundState>({ ...DEFAULTS });
  const [copiedCSS, setCopiedCSS] = useState(false);

  useEffect(() => {
    setSEO(devToolsSEO.playground);
  }, []);

  const set = useCallback(
    <K extends keyof PlaygroundState>(key: K, value: PlaygroundState[K]) => {
      setState((prev) => ({ ...prev, [key]: value }));
    },
    []
  );

  const reset = useCallback(() => setState({ ...DEFAULTS }), []);

  const generateCSS = useCallback(() => {
    const lines = [
      `/* Playground overrides */`,
      `background: ${state.bgColor};`,
      `color: ${state.textColor};`,
      `font-family: ${state.font};`,
      `font-size: ${FONT_SIZES[state.fontSize]?.value || '1rem'};`,
      `border-radius: ${state.radius};`,
      `box-shadow: ${state.shadow};`,
      state.gradient ? `background-image: ${state.gradient};` : '',
      `gap: ${state.gap};`,
    ];
    return lines.filter(Boolean).join('\n');
  }, [state]);

  const copyCSS = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(generateCSS());
      setCopiedCSS(true);
      setTimeout(() => setCopiedCSS(false), 1500);
    } catch {
      if (import.meta.env.DEV) {
        console.log('Clipboard write failed');
      }
    }
  }, [generateCSS]);

  const cardStyle: React.CSSProperties = {
    backgroundColor: state.bgColor,
    color: state.textColor,
    fontFamily: state.font,
    borderRadius: state.radius,
    boxShadow: state.shadow,
    border: `1px solid rgba(128,128,128,0.15)`,
  };

  const ctaStyle: React.CSSProperties = {
    background: state.gradient || state.bgColor,
    color: state.gradient ? '#fff' : state.textColor,
    borderRadius: state.radius,
  };

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page bg-atomic-noise">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={breadcrumbs} centered />
          <span className="specimen-page__hero-badge">Design</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            Design System Playground
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            Experiment with design tokens in real-time. Adjust colours, typography, radius, shadows, and gradients to see live results.
          </p>
        </div>
      </header>

      {/* Layout */}
      <div className="playground__layout">
        {/* Controls */}
        <div className="playground__controls" role="form" aria-label="Token controls">
          <h2 className="playground__controls-title">Controls</h2>

          {/* Background Color */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-bg">Background</label>
            <select
              id="pg-bg"
              className="playground__select"
              value={state.bgColor}
              onChange={(e) => set('bgColor', e.target.value)}
            >
              {BG_COLORS.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Text Color */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-text">Text Colour</label>
            <select
              id="pg-text"
              className="playground__select"
              value={state.textColor}
              onChange={(e) => set('textColor', e.target.value)}
            >
              {TEXT_COLORS.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>

          {/* Font Family */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-font">Font Family</label>
            <select
              id="pg-font"
              className="playground__select"
              value={state.font}
              onChange={(e) => set('font', e.target.value)}
            >
              {FONTS.map((f) => (
                <option key={f.value} value={f.value}>{f.label}</option>
              ))}
            </select>
          </div>

          {/* Font Size */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-size">
              Font Size: {FONT_SIZES[state.fontSize]?.label || '—'}
            </label>
            <input
              id="pg-size"
              type="range"
              className="playground__range"
              min={0}
              max={FONT_SIZES.length - 1}
              value={state.fontSize}
              onChange={(e) => set('fontSize', Number(e.target.value))}
            />
            <span className="playground__value">{FONT_SIZES[state.fontSize]?.value}</span>
          </div>

          {/* Border Radius */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-radius">Border Radius</label>
            <select
              id="pg-radius"
              className="playground__select"
              value={state.radius}
              onChange={(e) => set('radius', e.target.value)}
            >
              {RADII.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>
          </div>

          {/* Shadow */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-shadow">Shadow</label>
            <select
              id="pg-shadow"
              className="playground__select"
              value={state.shadow}
              onChange={(e) => set('shadow', e.target.value)}
            >
              {SHADOWS.map((s) => (
                <option key={s.value} value={s.value}>{s.label}</option>
              ))}
            </select>
          </div>

          {/* Gradient */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-gradient">Gradient (CTA)</label>
            <select
              id="pg-gradient"
              className="playground__select"
              value={state.gradient}
              onChange={(e) => set('gradient', e.target.value)}
            >
              {GRADIENTS.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>

          {/* Gap */}
          <div className="playground__group">
            <label className="playground__label" htmlFor="pg-gap">Gap (spacing)</label>
            <select
              id="pg-gap"
              className="playground__select"
              value={state.gap}
              onChange={(e) => set('gap', e.target.value)}
            >
              {GAP_OPTIONS.map((g) => (
                <option key={g.value} value={g.value}>{g.label}</option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="playground__actions">
            <button type="button" className="playground__btn" onClick={reset}>
              Reset
            </button>
            <button
              type="button"
              className="playground__btn playground__btn--primary"
              onClick={copyCSS}
            >
              {copiedCSS ? 'Copied!' : 'Copy CSS'}
            </button>
          </div>
        </div>

        {/* Preview */}
        <div className="playground__preview" aria-live="polite" aria-label="Live preview">
          <div className="playground__card" style={cardStyle}>
            <div className="playground__card-header" style={{ gap: state.gap }}>
              <span
                className="playground__card-badge"
                style={{
                  background: state.gradient || 'rgba(190,0,254,0.1)',
                  color: state.gradient ? '#fff' : state.textColor,
                  borderRadius: state.radius,
                }}
              >
                Badge
              </span>
            </div>
            <div className="playground__card-body" style={{ gap: state.gap }}>
              <h3
                className="playground__card-title"
                style={{
                  fontFamily: state.font,
                  fontSize: FONT_SIZES[state.fontSize]?.value,
                  color: state.textColor,
                }}
              >
                Card Heading
              </h3>
              <p
                className="playground__card-text"
                style={{
                  fontFamily: 'var(--wp--preset--font-family--brand-body)',
                  fontSize: 'var(--wp--preset--font-size--200)',
                  color: state.textColor,
                  opacity: 0.8,
                }}
              >
                This is a sample card component using the design tokens you have selected. Adjust the controls to experiment.
              </p>
              <button
                type="button"
                className="playground__card-cta"
                style={ctaStyle}
              >
                Call to Action
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}