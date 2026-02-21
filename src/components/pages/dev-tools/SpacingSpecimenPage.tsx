/**
 * @fileoverview Spacing Scale — visual bars for every spacing token
 * @component SpacingSpecimenPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { Ruler } from 'lucide-react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '@/styles/blocks/specimen-page.css';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Spacing Scale');

interface SpacingToken {
  token: string;
  label: string;
  clamp: string;
  category: string;
}

const SPACING_TOKENS: SpacingToken[] = [
  { token: '--wp--preset--spacing--fluid-xs', label: 'Fluid XS', clamp: 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)', category: 'Fluid' },
  { token: '--wp--preset--spacing--fluid-sm', label: 'Fluid SM', clamp: 'clamp(0.75rem, 0.5rem + 1vw, 1.25rem)', category: 'Fluid' },
  { token: '--wp--preset--spacing--fluid-md', label: 'Fluid MD', clamp: 'clamp(1rem, 0.6rem + 2vw, 2rem)', category: 'Fluid' },
  { token: '--wp--preset--spacing--fluid-lg', label: 'Fluid LG', clamp: 'clamp(1.5rem, 1rem + 2.5vw, 3rem)', category: 'Fluid' },
  { token: '--wp--preset--spacing--fluid-xl', label: 'Fluid XL', clamp: 'clamp(2rem, 1.2rem + 4vw, 4rem)', category: 'Fluid' },
  { token: '--wp--preset--spacing--fluid-2xl', label: 'Fluid 2XL', clamp: 'clamp(3rem, 1.5rem + 7.5vw, 6rem)', category: 'Fluid' },
  { token: '--wp--preset--spacing--section-horizontal', label: 'Section Horizontal', clamp: 'clamp(1.5rem, 1.35rem + 0.714vw, 2rem)', category: 'Section' },
  { token: '--wp--preset--spacing--section-vertical', label: 'Section Vertical', clamp: 'clamp(2rem, 0.5rem + 4vw, 5rem)', category: 'Section' },
  { token: '--wp--preset--spacing--block-gap', label: 'Block Gap', clamp: 'Alias of fluid-md', category: 'Block' },
];

const CATEGORIES = ['Fluid', 'Section', 'Block'];

const NEON_BAR_COLORS = [
  'linear-gradient(90deg, var(--wp--preset--color--neon-cyan), var(--wp--preset--color--neon-blue))',
  'linear-gradient(90deg, var(--wp--preset--color--neon-pink), var(--wp--preset--color--neon-purple))',
  'linear-gradient(90deg, var(--wp--preset--color--neon-green), var(--wp--preset--color--neon-cyan))',
];

export function SpacingSpecimenPage() {
  useEffect(() => {
    setSEO(devToolsSEO.spacing);
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Spacing</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">Spacing Scale</h1>
          <p className="specimen-page__hero-desc text-body-p">
            Every spacing token used across the portfolio, rendered as proportional bars. All use CSS clamp() for fluid, viewport-responsive spacing.
          </p>
        </div>
      </header>

      {CATEGORIES.map((category, catIdx) => {
        const tokens = SPACING_TOKENS.filter((t) => t.category === category);
        if (tokens.length === 0) return null;

        return (
          <section key={category} className="specimen-section" aria-labelledby={`spacing-${category.toLowerCase()}`}>
            <div className="specimen-section__inner">
              <h2 id={`spacing-${category.toLowerCase()}`} className="specimen-section__title text-card-h3">
                <Ruler className="specimen-section__title-icon" aria-hidden="true" />
                {category} Spacing
              </h2>
              {tokens.map((t) => (
                <div key={t.token} className="specimen-card">
                  <div className="specimen-row" style={{ borderBottom: 'none', padding: 0 }}>
                    <div className="specimen-row__label">
                      <code className="specimen-card__code">{t.token}</code>
                    </div>
                    <span className="specimen-card__meta">{t.label}</span>
                  </div>
                  <p className="specimen-card__meta">{t.clamp}</p>
                  <div
                    className="specimen-bar"
                    style={{
                      width: `var(${t.token})`,
                      minWidth: '8px',
                      background: NEON_BAR_COLORS[catIdx % NEON_BAR_COLORS.length],
                    }}
                    aria-label={`${t.label} visual bar`}
                  />
                </div>
              ))}
            </div>
          </section>
        );
      })}

      {/* Layout Tokens */}
      <section className="specimen-section" aria-labelledby="spacing-layout">
        <div className="specimen-section__inner">
          <h2 id="spacing-layout" className="specimen-section__title text-card-h3">
            <Ruler className="specimen-section__title-icon" aria-hidden="true" />
            Layout Widths
          </h2>
          <div className="specimen-grid specimen-grid--3">
            {[
              { token: '--wp--preset--layout--content', value: '800px', label: 'Content' },
              { token: '--wp--preset--layout--wide', value: '1440px', label: 'Wide' },
              { token: '--wp--preset--layout--full', value: '100%', label: 'Full' },
            ].map((l) => (
              <div key={l.token} className="specimen-card">
                <p className="specimen-card__label">{l.label}</p>
                <code className="specimen-card__code">{l.token}</code>
                <span className="specimen-card__meta">{l.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}