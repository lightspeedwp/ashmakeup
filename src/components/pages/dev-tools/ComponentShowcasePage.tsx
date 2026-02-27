/**
 * @fileoverview Component Showcase — live visual previews of all key UI components
 *
 * @component ComponentShowcasePage
 * @version 1.0.0
 */

import React, { useEffect, useState, useMemo } from 'react';
import { componentShowcaseUI } from '../../../data/mock/ui/component-showcase';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { Logo } from '../../common/Logo';
import { SocialLinks } from '../../common/SocialLinks';
import { ThemeToggle } from '../../common/ThemeToggle';
import { ReadMoreButton } from '../../ui/ReadMoreButton';
import { ShareComponent } from '../../ui/ShareComponent';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/component-showcase.css';

const CATEGORY_LABELS: Record<string, string> = {
  common: 'Common Components',
  ui: 'UI Components',
  section: 'Section Components',
};
const CATEGORY_ORDER = ['common', 'ui', 'section'] as const;

/** Isolated preview for each component */
function ComponentPreview({ id }: { id: string }) {
  switch (id) {
    case 'logo':
      return (
        <div className="showcase__variants">
          <div className="showcase__variant-group">
            <Logo size="sm" />
            <span className="showcase__variant-label">SM</span>
          </div>
          <div className="showcase__variant-group">
            <Logo size="md" />
            <span className="showcase__variant-label">MD</span>
          </div>
          <div className="showcase__variant-group">
            <Logo size="lg" />
            <span className="showcase__variant-label">LG</span>
          </div>
        </div>
      );

    case 'social-links':
      return (
        <div className="showcase__variants">
          <div className="showcase__variant-group">
            <SocialLinks variant="default" />
            <span className="showcase__variant-label">Default</span>
          </div>
          <div className="showcase__variant-group">
            <SocialLinks variant="minimal" />
            <span className="showcase__variant-label">Minimal</span>
          </div>
        </div>
      );

    case 'theme-toggle':
      return (
        <div className="showcase__variants">
          <ThemeToggle />
        </div>
      );

    case 'breadcrumbs':
      return (
        <div className="showcase__variants">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'Neon Collection' },
            ]}
          />
        </div>
      );

    case 'scroll-to-top':
      return (
        <p className="showcase__variant-label">
          Scroll down the page to see the floating ScrollToTop button appear in the bottom-right corner.
        </p>
      );

    case 'read-more':
      return (
        <div className="showcase__variants">
          <div className="showcase__variant-group">
            <ReadMoreButton to="/portfolio" />
            <span className="showcase__variant-label">Default</span>
          </div>
          <div className="showcase__variant-group">
            <ReadMoreButton to="/blog" label="View All Posts" />
            <span className="showcase__variant-label">Custom Label</span>
          </div>
        </div>
      );

    case 'share':
      return (
        <div className="showcase__variants">
          <ShareComponent
            url="https://ashshaw.makeup/portfolio/neon-face-paint"
            title="Neon Face Paint Festival"
          />
        </div>
      );

    case 'search-input':
      return (
        <p className="showcase__variant-label">
          SearchInput is rendered in the Header. Open the site header to see it in action.
        </p>
      );

    case 'portfolio-card':
      return (
        <p className="showcase__variant-label">
          PortfolioCard renders full portfolio entries with image, title, category badge, and tags. Visit /portfolio to see cards in the gallery grid.
        </p>
      );

    case 'section-card':
      return (
        <p className="showcase__variant-label">
          SectionCard wraps content blocks with consistent padding and border. Used throughout pages for grouped content areas.
        </p>
      );

    case 'slider-card':
      return (
        <p className="showcase__variant-label">
          SliderCard is used in the FeaturedSection carousel on the HomePage. Visit the homepage to see it in action.
        </p>
      );

    case 'video-player':
      return (
        <p className="showcase__variant-label">
          VideoPlayer renders YouTube/Vimeo embeds with responsive aspect ratio. Visit /videos to see it in action.
        </p>
      );

    case 'festival-countdown':
      return (
        <p className="showcase__variant-label">
          FestivalCountdown displays an animated timer counting down to the next festival date. Visit the HomePage to see it live.
        </p>
      );

    case 'testimonials':
      return (
        <p className="showcase__variant-label">
          TestimonialsSection renders a rotating carousel of testimonial cards. Visit /feedback or the HomePage to see it.
        </p>
      );

    default:
      return null;
  }
}

export function ComponentShowcasePage() {
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSEO(devToolsSEO.components);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return componentShowcaseUI.components;
    return componentShowcaseUI.components.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
    );
  }, [search]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (var i = 0; i < CATEGORY_ORDER.length; i++) {
      var cat = CATEGORY_ORDER[i];
      const items = filtered.filter((c) => c.category === cat);
      if (items.length > 0) map.set(cat, items);
    }
    return map;
  }, [filtered]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page bg-atomic-noise">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={componentShowcaseUI.breadcrumbs} centered />
          <span className="specimen-page__hero-badge">{componentShowcaseUI.hero.badge}</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {componentShowcaseUI.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {componentShowcaseUI.hero.description}
          </p>
        </div>
      </header>

      {/* Search */}
      <div className="showcase__search">
        <input
          type="search"
          className="showcase__search-input"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search components"
        />
      </div>

      {/* Content */}
      <div className="showcase__content">
        {filtered.length === 0 ? (
          <p className="showcase__empty text-body-p">
            No components found matching &ldquo;{search}&rdquo;.
          </p>
        ) : (
          Array.from(grouped.entries()).map(([cat, items]) => (
            <section key={cat} className="showcase__category" aria-label={CATEGORY_LABELS[cat]}>
              <h2 className="showcase__category-title">
                {CATEGORY_LABELS[cat] ? CATEGORY_LABELS[cat] : cat}
              </h2>
              {items.map((comp) => (
                <div key={comp.id} className="showcase__frame">
                  <div className="showcase__frame-header">
                    <span className="showcase__frame-name">{comp.name}</span>
                    <span className="showcase__frame-badge">{comp.category}</span>
                    <span className="showcase__frame-desc">{comp.description}</span>
                  </div>
                  <div className="showcase__frame-body">
                    <ComponentPreview id={comp.id} />
                  </div>
                </div>
              ))}
            </section>
          ))
        )}
      </div>
    </main>
  );
}