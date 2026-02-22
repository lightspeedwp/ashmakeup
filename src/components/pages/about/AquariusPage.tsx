/**
 * @fileoverview Aquarius — The Aquarian Blueprint
 * Pattern recognition about identity: how Aquarian questioning,
 * ADHD, and expanded awareness combine into one operating system.
 *
 * Neon accent: Cyan
 *
 * @component AquariusPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { aquariusPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/about-subpage.css';

export function AquariusPage() {
  useEffect(() => {
    setSEO(pageSEO.aquarius);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--aquarius bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={aquariusPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {aquariusPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {aquariusPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {aquariusPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Pull Quote ── */}
      <blockquote className="about-subpage__pull-quote" aria-label="Featured quote">
        <p className="about-subpage__pull-quote-text">
          {aquariusPageData.pullQuote}
        </p>
      </blockquote>

      {/* ── Traits Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Aquarian traits"
      >
        {aquariusPageData.traits.map((trait) => (
          <div key={trait.id} className="about-subpage__fact" role="listitem">
            <span className="about-subpage__fact-label">{trait.label}</span>
            <span className="about-subpage__fact-value">{trait.value}</span>
          </div>
        ))}
      </div>

      {/* ── Thread Cards (Aquarius × …) ── */}
      <div className="about-subpage__destinations" aria-label="Aquarian threads">
        {aquariusPageData.threads.map((thread) => (
          <article key={thread.id} className="about-subpage__destination">
            <div className="about-subpage__destination-name">
              {thread.title}
            </div>
            <p className="about-subpage__destination-desc">
              {thread.description}
            </p>
          </article>
        ))}
      </div>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {aquariusPageData.sections.map((section) => (
          <section key={section.id} className="about-subpage__section">
            <h2 className="about-subpage__section-title">{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={`${section.id}-p-${i}`} className="about-subpage__section-text">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>
    </main>
  );
}