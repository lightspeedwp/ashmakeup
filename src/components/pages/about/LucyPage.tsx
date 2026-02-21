/**
 * @fileoverview Lucy in the Sky with Diamonds — psychedelic influence on art
 * @component LucyPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { lucyPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function LucyPage() {
  useEffect(() => {
    setSEO(pageSEO.lucy);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--lucy bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={lucyPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {lucyPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {lucyPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {lucyPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {lucyPageData.sections.map((section) => (
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
