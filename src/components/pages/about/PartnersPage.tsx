/**
 * @fileoverview Partners — The People Along the Way
 * A reflective, tasteful page about the significant relationships that
 * shaped Ash. Not a dating history; a gratitude page.
 *
 * Neon accent: Pink
 *
 * @component PartnersPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { partnersPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function PartnersPage() {
  useEffect(() => {
    setSEO(pageSEO.partners);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--partners bg-atomic-noise"
    >
      {/* -- Hero -- */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={partnersPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {partnersPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {partnersPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {partnersPageData.hero.description}
          </p>
        </div>
      </header>

      {/* -- Pull Quote -- */}
      <blockquote className="about-subpage__pull-quote" aria-label="Featured quote">
        <p className="about-subpage__pull-quote-text">
          {partnersPageData.pullQuote}
        </p>
      </blockquote>

      {/* -- Sections -- */}
      <div className="about-subpage__body">
        {partnersPageData.sections.map((section) => (
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
