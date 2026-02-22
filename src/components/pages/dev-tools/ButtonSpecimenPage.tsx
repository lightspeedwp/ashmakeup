/**
 * @fileoverview Button Variants — every button style used across the site
 * @component ButtonSpecimenPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { MousePointerClick, ArrowRight, Heart, Share2, Download, Play, Plus, Trash2 } from 'lucide-react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/button-specimen.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Button Variants');

export function ButtonSpecimenPage() {
  useEffect(() => {
    setSEO(devToolsSEO.buttons);
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Buttons</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">Button Variants</h1>
          <p className="specimen-page__hero-desc text-body-p">
            Every interactive button style — primary gradients, ghost outlines, icon buttons, pill shapes, and disabled states. Hover and focus each to see interaction states.
          </p>
        </div>
      </header>

      {/* Primary / Gradient */}
      <section className="specimen-section" aria-labelledby="btn-primary">
        <div className="specimen-section__inner">
          <h2 id="btn-primary" className="specimen-section__title text-card-h3">
            <MousePointerClick className="specimen-section__title-icon" aria-hidden="true" />
            Primary (Gradient)
          </h2>
          <p className="specimen-section__subtitle">Main CTA buttons with cyberpunk gradient background and neon glow on hover.</p>
          <div className="specimen-btn-row">
            <button type="button" className="btn-specimen btn-specimen--primary">
              Get Started
              <ArrowRight className="btn-specimen__icon" aria-hidden="true" />
            </button>
            <button type="button" className="btn-specimen btn-specimen--primary btn-specimen--lg">
              Large Primary
            </button>
            <button type="button" className="btn-specimen btn-specimen--primary" disabled>
              Disabled
            </button>
          </div>
        </div>
      </section>

      {/* Secondary / Outline */}
      <section className="specimen-section" aria-labelledby="btn-secondary">
        <div className="specimen-section__inner">
          <h2 id="btn-secondary" className="specimen-section__title text-card-h3">
            <MousePointerClick className="specimen-section__title-icon" aria-hidden="true" />
            Secondary (Outline)
          </h2>
          <p className="specimen-section__subtitle">Bordered buttons with transparent background, neon border glow on hover.</p>
          <div className="specimen-btn-row">
            <button type="button" className="btn-specimen btn-specimen--secondary">
              Learn More
            </button>
            <button type="button" className="btn-specimen btn-specimen--secondary btn-specimen--lg">
              Large Secondary
            </button>
            <button type="button" className="btn-specimen btn-specimen--secondary" disabled>
              Disabled
            </button>
          </div>
        </div>
      </section>

      {/* Ghost */}
      <section className="specimen-section" aria-labelledby="btn-ghost">
        <div className="specimen-section__inner">
          <h2 id="btn-ghost" className="specimen-section__title text-card-h3">
            <MousePointerClick className="specimen-section__title-icon" aria-hidden="true" />
            Ghost
          </h2>
          <p className="specimen-section__subtitle">Minimal buttons with no border or background. Neon text colour on hover.</p>
          <div className="specimen-btn-row">
            <button type="button" className="btn-specimen btn-specimen--ghost">
              Ghost Button
            </button>
            <button type="button" className="btn-specimen btn-specimen--ghost">
              View All
              <ArrowRight className="btn-specimen__icon" aria-hidden="true" />
            </button>
            <button type="button" className="btn-specimen btn-specimen--ghost" disabled>
              Disabled
            </button>
          </div>
        </div>
      </section>

      {/* Icon Buttons */}
      <section className="specimen-section" aria-labelledby="btn-icon">
        <div className="specimen-section__inner">
          <h2 id="btn-icon" className="specimen-section__title text-card-h3">
            <MousePointerClick className="specimen-section__title-icon" aria-hidden="true" />
            Icon Buttons
          </h2>
          <p className="specimen-section__subtitle">Compact square buttons for icon-only actions. All require aria-label.</p>
          <div className="specimen-btn-row">
            <button type="button" className="btn-specimen btn-specimen--icon" aria-label="Like">
              <Heart aria-hidden="true" />
            </button>
            <button type="button" className="btn-specimen btn-specimen--icon" aria-label="Share">
              <Share2 aria-hidden="true" />
            </button>
            <button type="button" className="btn-specimen btn-specimen--icon" aria-label="Download">
              <Download aria-hidden="true" />
            </button>
            <button type="button" className="btn-specimen btn-specimen--icon" aria-label="Play">
              <Play aria-hidden="true" />
            </button>
            <button type="button" className="btn-specimen btn-specimen--icon btn-specimen--icon-danger" aria-label="Delete">
              <Trash2 aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      {/* Pill / Chip */}
      <section className="specimen-section" aria-labelledby="btn-pill">
        <div className="specimen-section__inner">
          <h2 id="btn-pill" className="specimen-section__title text-card-h3">
            <MousePointerClick className="specimen-section__title-icon" aria-hidden="true" />
            Pill / Chip Buttons
          </h2>
          <p className="specimen-section__subtitle">Compact rounded-full buttons used for tags, filters, and category chips.</p>
          <div className="specimen-btn-row">
            <button type="button" className="btn-specimen btn-specimen--pill">
              UV Makeup
            </button>
            <button type="button" className="btn-specimen btn-specimen--pill btn-specimen--pill-active">
              Festival
            </button>
            <button type="button" className="btn-specimen btn-specimen--pill">
              Berlin
            </button>
            <button type="button" className="btn-specimen btn-specimen--pill">
              <Plus className="btn-specimen__icon" aria-hidden="true" />
              Add Tag
            </button>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="specimen-section" aria-labelledby="btn-sizes">
        <div className="specimen-section__inner">
          <h2 id="btn-sizes" className="specimen-section__title text-card-h3">
            <MousePointerClick className="specimen-section__title-icon" aria-hidden="true" />
            Size Comparison
          </h2>
          <div className="specimen-btn-row">
            <button type="button" className="btn-specimen btn-specimen--primary btn-specimen--sm">Small</button>
            <button type="button" className="btn-specimen btn-specimen--primary">Default</button>
            <button type="button" className="btn-specimen btn-specimen--primary btn-specimen--lg">Large</button>
          </div>
        </div>
      </section>
    </main>
  );
}