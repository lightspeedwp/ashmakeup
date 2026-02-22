/**
 * @fileoverview Border Radius Specimens — every radius token rendered live
 * @component RadiusSpecimenPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { Circle } from 'lucide-react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Border Radius Specimens');

interface RadiusToken {
  token: string;
  label: string;
  value: string;
}

const RADIUS_TOKENS: RadiusToken[] = [
  { token: '--wp--preset--border-radius--sm', label: 'Small', value: '0.25rem (4px)' },
  { token: '--wp--preset--border-radius--md', label: 'Medium', value: '0.5rem (8px)' },
  { token: '--wp--preset--border-radius--lg', label: 'Large', value: '1rem (16px)' },
  { token: '--wp--preset--border-radius--xl', label: 'Extra Large', value: '1.5rem (24px)' },
  { token: '--wp--preset--border-radius--2xl', label: '2X Large', value: '2rem (32px)' },
  { token: '--wp--preset--border-radius--full', label: 'Full (Pill)', value: '9999px' },
];

const LEGACY_ALIASES: { token: string; alias: string; target: string }[] = [
  { token: '--wp--preset--border-radius--400', alias: '400', target: 'md (0.5rem)' },
  { token: '--wp--preset--border-radius--600', alias: '600', target: 'lg (1rem)' },
  { token: '--wp--preset--border-radius--900', alias: '900', target: 'full (9999px)' },
];

export function RadiusSpecimenPage() {
  useEffect(() => {
    setSEO(devToolsSEO.radius);
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Radius</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">Border Radius Specimens</h1>
          <p className="specimen-page__hero-desc text-body-p">
            Every border-radius token in the design system, from subtle rounding to full pill shapes. Each specimen applies the token to a sample element.
          </p>
        </div>
      </header>

      {/* Primary Radii */}
      <section className="specimen-section" aria-labelledby="radius-primary">
        <div className="specimen-section__inner">
          <h2 id="radius-primary" className="specimen-section__title text-card-h3">
            <Circle className="specimen-section__title-icon" aria-hidden="true" />
            Radius Tokens
          </h2>
          <div className="specimen-grid specimen-grid--3">
            {RADIUS_TOKENS.map((r) => (
              <div key={r.token} className="specimen-card">
                <div
                  className="specimen-swatch"
                  style={{
                    borderRadius: `var(${r.token})`,
                    background: 'var(--wp--preset--gradient--cyberpunk)',
                  }}
                />
                <p className="specimen-card__label">{r.label}</p>
                <code className="specimen-card__code">{r.token}</code>
                <span className="specimen-card__meta">{r.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combined Preview */}
      <section className="specimen-section" aria-labelledby="radius-compare">
        <div className="specimen-section__inner">
          <h2 id="radius-compare" className="specimen-section__title text-card-h3">
            <Circle className="specimen-section__title-icon" aria-hidden="true" />
            Side-by-Side Comparison
          </h2>
          <p className="specimen-section__subtitle">All radii applied to identical 100&times;100 squares.</p>
          <div className="specimen-grid specimen-grid--6">
            {RADIUS_TOKENS.map((r) => (
              <div key={`cmp-${r.token}`} className="specimen-card specimen-card--centered">
                <div
                  className="specimen-swatch--fixed"
                  style={{
                    borderRadius: `var(${r.token})`,
                    background: 'var(--wp--preset--gradient--toxic-lime)',
                    flexShrink: 0,
                  }}
                  aria-label={`${r.label} radius preview`}
                />
                <span className="specimen-card__meta">{r.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Aliases */}
      <section className="specimen-section" aria-labelledby="radius-legacy">
        <div className="specimen-section__inner">
          <h2 id="radius-legacy" className="specimen-section__title text-card-h3">
            <Circle className="specimen-section__title-icon" aria-hidden="true" />
            Legacy Aliases
          </h2>
          <p className="specimen-section__subtitle">Numeric aliases preserved for backward compatibility during migration.</p>
          <div className="specimen-grid specimen-grid--3">
            {LEGACY_ALIASES.map((l) => (
              <div key={l.token} className="specimen-card">
                <code className="specimen-card__code">{l.token}</code>
                <span className="specimen-card__meta">Alias {l.alias} → {l.target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}