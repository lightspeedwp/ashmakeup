/**
 * @fileoverview Shadow & Glow Scale — interactive preview of every shadow token
 * @component ShadowSpecimenPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { Cloud } from 'lucide-react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Shadow & Glow Scale');

interface ShadowToken {
  token: string;
  label: string;
  category: 'elevation' | 'neon' | 'focus' | 'action';
}

const SHADOW_TOKENS: ShadowToken[] = [
  { token: '--wp--preset--shadow--sm', label: 'Small', category: 'elevation' },
  { token: '--wp--preset--shadow--md', label: 'Medium', category: 'elevation' },
  { token: '--wp--preset--shadow--lg', label: 'Large', category: 'elevation' },
  { token: '--wp--preset--shadow--xl', label: 'Extra Large', category: 'elevation' },
  { token: '--wp--preset--shadow--2xl', label: '2X Large', category: 'elevation' },
  { token: '--wp--preset--shadow--card', label: 'Card', category: 'elevation' },
  { token: '--wp--preset--shadow--card-hover', label: 'Card Hover', category: 'elevation' },
  { token: '--wp--preset--shadow--neon-sm', label: 'Neon SM', category: 'neon' },
  { token: '--wp--preset--shadow--neon-md', label: 'Neon MD', category: 'neon' },
  { token: '--wp--preset--shadow--neon-lg', label: 'Neon LG', category: 'neon' },
  { token: '--wp--preset--shadow--neon-pink', label: 'Neon Pink', category: 'neon' },
  { token: '--wp--preset--shadow--neon-purple', label: 'Neon Purple', category: 'neon' },
  { token: '--wp--preset--shadow--neon-blue', label: 'Neon Blue', category: 'neon' },
  { token: '--wp--preset--shadow--neon-purple-hover', label: 'Neon Purple Hover', category: 'neon' },
  { token: '--wp--preset--shadow--neon-pink-dot', label: 'Neon Pink Dot', category: 'neon' },
  { token: '--wp--preset--shadow--focus-ring', label: 'Focus Ring', category: 'focus' },
  { token: '--wp--preset--shadow--focus-ring-strong', label: 'Focus Ring Strong', category: 'focus' },
  { token: '--wp--preset--shadow--focus-ring-pink', label: 'Focus Ring Pink', category: 'focus' },
  { token: '--wp--preset--shadow--action-btn', label: 'Action Button', category: 'action' },
  { token: '--wp--preset--shadow--action-btn-hover', label: 'Action Button Hover', category: 'action' },
  { token: '--wp--preset--shadow--action-btn-glow', label: 'Action Button Glow', category: 'action' },
];

const CATEGORY_LABELS: Record<string, string> = {
  elevation: 'Elevation Shadows',
  neon: 'Neon Glow Shadows',
  focus: 'Focus Ring Shadows',
  action: 'Action Button Shadows',
};

const CATEGORIES = ['elevation', 'neon', 'focus', 'action'] as const;

export function ShadowSpecimenPage() {
  useEffect(() => {
    setSEO(devToolsSEO.shadows);
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Shadows</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">Shadow & Glow Scale</h1>
          <p className="specimen-page__hero-desc text-body-p">
            All shadow tokens from elevation shadows to neon glows. Hover each card to compare rest and active states. Neon glows are best viewed in dark mode.
          </p>
        </div>
      </header>

      {CATEGORIES.map((cat) => {
        const tokens = SHADOW_TOKENS.filter((t) => t.category === cat);
        return (
          <section key={cat} className="specimen-section" aria-labelledby={`shadow-${cat}`}>
            <div className="specimen-section__inner">
              <h2 id={`shadow-${cat}`} className="specimen-section__title text-card-h3">
                <Cloud className="specimen-section__title-icon" aria-hidden="true" />
                {CATEGORY_LABELS[cat]}
              </h2>
              <div className="specimen-grid specimen-grid--3">
                {tokens.map((s) => (
                  <div key={s.token} className="specimen-card">
                    <div
                      className="specimen-swatch"
                      style={{ boxShadow: `var(${s.token})`, background: 'var(--wp--preset--color--base)' }}
                    />
                    <p className="specimen-card__label">{s.label}</p>
                    <code className="specimen-card__code">{s.token}</code>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}