/**
 * @fileoverview Card Interactions — every card style with hover/focus states
 * @component CardSpecimenPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { LayoutGrid, Calendar, Tag, Eye, Heart, Play, Mic, ArrowRight } from 'lucide-react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/card-specimen.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Card Interactions');

export function CardSpecimenPage() {
  useEffect(() => {
    setSEO(devToolsSEO.cards);
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Cards</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">Card Interactions</h1>
          <p className="specimen-page__hero-desc text-body-p">
            Every card pattern used across the site — blog cards, portfolio cards, tool cards, and more. Hover each to see lift, glow, and border effects.
          </p>
        </div>
      </header>

      {/* Blog Card */}
      <section className="specimen-section" aria-labelledby="card-blog">
        <div className="specimen-section__inner">
          <h2 id="card-blog" className="specimen-section__title text-card-h3">
            <LayoutGrid className="specimen-section__title-icon" aria-hidden="true" />
            Blog Card
          </h2>
          <p className="specimen-section__subtitle">Content card with image, category badge, meta, and excerpt. Hover lifts with shadow.</p>
          <div className="specimen-grid specimen-grid--3">
            {[
              { title: 'UV Makeup at Origin Festival', cat: 'Festival', date: 'Feb 2026', excerpt: 'A look behind the scenes at this year\'s UV makeup station at Origin Festival in Cape Town.' },
              { title: 'Neon Colour Theory for Beginners', cat: 'Tutorial', date: 'Jan 2026', excerpt: 'Understanding complementary neon palettes and how to make them pop under blacklight.' },
              { title: 'Berlin Club Scene: My Setup', cat: 'Behind the Scenes', date: 'Dec 2025', excerpt: 'The complete kit I bring to every Berlin club night — compact, durable, and ready to glow.' },
            ].map((card) => (
              <div key={card.title} className="card-specimen card-specimen--blog" tabIndex={0}>
                <div className="card-specimen__image card-specimen__image--placeholder" />
                <div className="card-specimen__body">
                  <span className="card-specimen__badge">{card.cat}</span>
                  <h3 className="card-specimen__title">{card.title}</h3>
                  <p className="card-specimen__excerpt">{card.excerpt}</p>
                  <div className="card-specimen__meta">
                    <span className="card-specimen__meta-item">
                      <Calendar className="card-specimen__meta-icon" aria-hidden="true" />
                      {card.date}
                    </span>
                    <span className="card-specimen__meta-item">
                      <Eye className="card-specimen__meta-icon" aria-hidden="true" />
                      1.2k
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tool Card */}
      <section className="specimen-section" aria-labelledby="card-tool">
        <div className="specimen-section__inner">
          <h2 id="card-tool" className="specimen-section__title text-card-h3">
            <LayoutGrid className="specimen-section__title-icon" aria-hidden="true" />
            Tool Card
          </h2>
          <p className="specimen-section__subtitle">Used on the Developer Tools hub. Icon, title, badge, description, and CTA arrow.</p>
          <div className="specimen-grid specimen-grid--2">
            {[
              { title: 'Style Guide', badge: 'Design System', desc: 'Complete design token reference with live previews.' },
              { title: 'Performance Tester', badge: 'Web Vitals', desc: 'Real-time metrics from the browser Performance API.' },
            ].map((card) => (
              <div key={card.title} className="card-specimen card-specimen--tool" tabIndex={0}>
                <div className="card-specimen__tool-header">
                  <div className="card-specimen__tool-icon-wrap">
                    <LayoutGrid className="card-specimen__tool-icon" aria-hidden="true" />
                  </div>
                  <h3 className="card-specimen__title">{card.title}</h3>
                </div>
                <span className="card-specimen__tool-badge">{card.badge}</span>
                <p className="card-specimen__excerpt">{card.desc}</p>
                <span className="card-specimen__cta">
                  Explore
                  <ArrowRight className="card-specimen__cta-icon" aria-hidden="true" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Card */}
      <section className="specimen-section" aria-labelledby="card-video">
        <div className="specimen-section__inner">
          <h2 id="card-video" className="specimen-section__title text-card-h3">
            <LayoutGrid className="specimen-section__title-icon" aria-hidden="true" />
            Video Card
          </h2>
          <p className="specimen-section__subtitle">Thumbnail with play overlay, title, duration, and category.</p>
          <div className="specimen-grid specimen-grid--3">
            {[
              { title: 'Full Face Neon Tutorial', duration: '12:34', cat: 'Tutorial' },
              { title: 'Festival Prep Timelapse', duration: '03:22', cat: 'Behind the Scenes' },
            ].map((card) => (
              <div key={card.title} className="card-specimen card-specimen--video" tabIndex={0}>
                <div className="card-specimen__image card-specimen__image--placeholder">
                  <div className="card-specimen__play-overlay">
                    <Play className="card-specimen__play-icon" aria-hidden="true" />
                  </div>
                  <span className="card-specimen__duration">{card.duration}</span>
                </div>
                <div className="card-specimen__body">
                  <span className="card-specimen__badge">{card.cat}</span>
                  <h3 className="card-specimen__title">{card.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcast Card */}
      <section className="specimen-section" aria-labelledby="card-podcast">
        <div className="specimen-section__inner">
          <h2 id="card-podcast" className="specimen-section__title text-card-h3">
            <LayoutGrid className="specimen-section__title-icon" aria-hidden="true" />
            Podcast Card
          </h2>
          <p className="specimen-section__subtitle">Cover image, episode number, title, and duration.</p>
          <div className="specimen-grid specimen-grid--3">
            <div className="card-specimen card-specimen--podcast" tabIndex={0}>
              <div className="card-specimen__podcast-cover card-specimen__image--placeholder" />
              <div className="card-specimen__body">
                <span className="card-specimen__meta-item">EP 1 &middot; 24:00</span>
                <h3 className="card-specimen__title">Welcome to the Show</h3>
                <p className="card-specimen__excerpt">An introduction to the art, the journey, and the neon glow.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tip Card */}
      <section className="specimen-section" aria-labelledby="card-tip">
        <div className="specimen-section__inner">
          <h2 id="card-tip" className="specimen-section__title text-card-h3">
            <LayoutGrid className="specimen-section__title-icon" aria-hidden="true" />
            Tip Card
          </h2>
          <p className="specimen-section__subtitle">Compact info card with hover border glow. Used in Tips sections.</p>
          <div className="specimen-grid specimen-grid--3">
            {[
              { title: 'Always provide alt text', desc: 'Every image element should have a descriptive alt attribute.' },
              { title: 'Lazy load offscreen images', desc: 'Add loading="lazy" to defer image loading until near the viewport.' },
              { title: 'Respect reduced motion', desc: 'Wrap animations in @media (prefers-reduced-motion: reduce).' },
            ].map((tip) => (
              <div key={tip.title} className="card-specimen card-specimen--tip" tabIndex={0}>
                <h3 className="card-specimen__title">{tip.title}</h3>
                <p className="card-specimen__excerpt">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}