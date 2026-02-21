/**
 * @fileoverview Creative process page — how Ash creates makeup art
 * @component ProcessPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { processPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function ProcessPage() {
  useEffect(() => {
    setSEO(pageSEO.process);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--process bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={processPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {processPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {processPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {processPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Steps ── */}
      <div className="about-subpage__steps" aria-label="Creative process steps">
        {processPageData.steps.map((step) => (
          <article key={step.id} className="about-subpage__step">
            <div className="about-subpage__step-number">{step.number}</div>
            <div className="about-subpage__step-body">
              <h2 className="about-subpage__step-title">{step.title}</h2>
              <p className="about-subpage__step-desc">{step.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {processPageData.sections.map((section) => (
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
