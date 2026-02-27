/**
 * @fileoverview Typography Specimens — all font families, fluid sizes, and heading hierarchy
 * @component TypographySpecimenPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { Type } from '../../../lib/icons';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';
import '../../../styles/blocks/specimen-page.css';

const PANGRAM = 'The quick brown fox jumps over the lazy dog';

const FONT_FAMILIES = [
  {
    id: 'title',
    name: 'Righteous',
    variable: '--wp--preset--font-family--brand-title',
    usage: 'Hero titles & main display text',
    cssClass: 'font-title',
  },
  {
    id: 'heading',
    name: 'Playfair Display',
    variable: '--wp--preset--font-family--brand-heading',
    usage: 'Section headings & card titles',
    cssClass: 'font-heading',
  },
  {
    id: 'body',
    name: 'Inter',
    variable: '--wp--preset--font-family--brand-body',
    usage: 'Body text, labels, captions & UI elements',
    cssClass: 'font-body',
  },
];

const SIZE_TOKENS = [
  { token: '--wp--preset--font-size--100', label: 'Size 100 (Caption)', clamp: 'clamp(0.75rem, 0.65rem + 0.5vw, 0.875rem)' },
  { token: '--wp--preset--font-size--200', label: 'Size 200 (Small)', clamp: 'clamp(1rem, 0.85rem + 0.75vw, 1.125rem)' },
  { token: '--wp--preset--font-size--300', label: 'Size 300 (Body)', clamp: 'clamp(1.125rem, 0.95rem + 0.875vw, 1.25rem)' },
  { token: '--wp--preset--font-size--400', label: 'Size 400 (Large)', clamp: 'clamp(1.25rem, 1rem + 1.25vw, 1.5rem)' },
  { token: '--wp--preset--font-size--500', label: 'Size 500 (H4)', clamp: 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)' },
  { token: '--wp--preset--font-size--600', label: 'Size 600 (H3)', clamp: 'clamp(1.875rem, 1.4rem + 2.375vw, 2.5rem)' },
  { token: '--wp--preset--font-size--700', label: 'Size 700 (H2)', clamp: 'clamp(2.25rem, 1.75rem + 2.5vw, 3rem)' },
  { token: '--wp--preset--font-size--800', label: 'Size 800 (H1)', clamp: 'clamp(2.5rem, 1.9rem + 3vw, 3.5rem)' },
  { token: '--wp--preset--font-size--900', label: 'Size 900 (Display)', clamp: 'clamp(3rem, 2.2rem + 4vw, 4.5rem)' },
  { token: '--wp--preset--font-size--hero', label: 'Hero', clamp: 'clamp(3.5rem, 6vw + 1rem, 6.5rem)' },
  { token: '--wp--preset--font-size--section', label: 'Section', clamp: 'clamp(2rem, 3vw + 1rem, 3.5rem)' },
];

const HEADINGS = [
  { tag: 'h1', className: 'text-hero-h1', label: 'Hero H1' },
  { tag: 'h2', className: 'text-section-h2', label: 'Section H2' },
  { tag: 'h3', className: 'text-card-h3', label: 'Card H3' },
];

export function TypographySpecimenPage() {
  useEffect(() => {
    setSEO(devToolsSEO.typography);
  }, []);

  const BREADCRUMBS = devToolBreadcrumbs('Typography Specimens');

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Typography</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">Typography Specimens</h1>
          <p className="specimen-page__hero-desc text-body-p">
            Every font family, fluid type-size token, and heading class used across the Ash Shaw portfolio — rendered live.
          </p>
        </div>
      </header>

      {/* Font Families */}
      <section className="specimen-section" aria-labelledby="spec-families">
        <div className="specimen-section__inner">
          <h2 id="spec-families" className="specimen-section__title text-card-h3">
            <Type className="specimen-section__title-icon" aria-hidden="true" />
            Font Families
          </h2>
          <div className="specimen-grid specimen-grid--3">
            {FONT_FAMILIES.map((ff) => (
              <div key={ff.id} className="specimen-card">
                <p className="specimen-card__label">{ff.name}</p>
                <code className="specimen-card__code">{ff.variable}</code>
                <p className="specimen-card__meta">{ff.usage}</p>
                <p
                  className="specimen-card__label"
                  style={{ fontFamily: `var(${ff.variable})`, fontSize: 'var(--wp--preset--font-size--500)' }}
                >
                  {PANGRAM}
                </p>
                <p
                  style={{ fontFamily: `var(${ff.variable})`, fontSize: 'var(--wp--preset--font-size--300)' }}
                  className="specimen-card__meta"
                >
                  ABCDEFGHIJKLM NOPQRSTUVWXYZ abcdefghijklm nopqrstuvwxyz 0123456789
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fluid Size Scale */}
      <section className="specimen-section" aria-labelledby="spec-sizes">
        <div className="specimen-section__inner">
          <h2 id="spec-sizes" className="specimen-section__title text-card-h3">
            <Type className="specimen-section__title-icon" aria-hidden="true" />
            Fluid Font-Size Scale
          </h2>
          <p className="specimen-section__subtitle">All sizes use CSS clamp() for viewport-fluid scaling.</p>
          {SIZE_TOKENS.map((st) => (
            <div key={st.token} className="specimen-row">
              <div className="specimen-row__label">
                <code className="specimen-card__code">{st.token}</code>
              </div>
              <div className="specimen-row__value" style={{ fontSize: `var(${st.token})`, fontFamily: 'var(--wp--preset--font-family--brand-body)' }}>
                {st.label} — {PANGRAM}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Heading Classes */}
      <section className="specimen-section" aria-labelledby="spec-headings">
        <div className="specimen-section__inner">
          <h2 id="spec-headings" className="specimen-section__title text-card-h3">
            <Type className="specimen-section__title-icon" aria-hidden="true" />
            Heading Classes
          </h2>
          {HEADINGS.map((h) => (
            <div key={h.tag} className="specimen-card">
              <code className="specimen-card__code">.{h.className}</code>
              <div className={h.className}>{h.label}: {PANGRAM}</div>
            </div>
          ))}
          {/* Gradient heading */}
          <div className="specimen-card">
            <code className="specimen-card__code">.text-gradient-pink-purple-blue</code>
            <div className="text-section-h2 text-gradient-pink-purple-blue">Gradient Heading Demo</div>
          </div>
        </div>
      </section>

      {/* Weight Variants */}
      <section className="specimen-section" aria-labelledby="spec-weights">
        <div className="specimen-section__inner">
          <h2 id="spec-weights" className="specimen-section__title text-card-h3">
            <Type className="specimen-section__title-icon" aria-hidden="true" />
            Font Weight Variants
          </h2>
          <div className="specimen-grid specimen-grid--3">
            {[
              { weight: 400, label: 'Regular (400)' },
              { weight: 500, label: 'Medium (500)' },
              { weight: 600, label: 'Semibold (600)' },
              { weight: 700, label: 'Bold (700)' },
              { weight: 800, label: 'Extra Bold (800)' },
              { weight: 900, label: 'Black (900)' },
            ].map((w) => (
              <div key={w.weight} className="specimen-card">
                <p className="specimen-card__label">{w.label}</p>
                <p style={{ fontWeight: w.weight, fontFamily: 'var(--wp--preset--font-family--brand-body)', fontSize: 'var(--wp--preset--font-size--400)' }}>
                  {PANGRAM}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}