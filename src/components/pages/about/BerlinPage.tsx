/**
 * @fileoverview Berlin — Ash's creative anchor city
 * @component BerlinPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { berlinPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function BerlinPage() {
  useEffect(() => {
    setSEO(pageSEO.berlin);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--berlin bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={berlinPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {berlinPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {berlinPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {berlinPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {berlinPageData.sections.map((section) => (
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
