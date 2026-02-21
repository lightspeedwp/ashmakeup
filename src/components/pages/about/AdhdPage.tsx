/**
 * @fileoverview ADHD — Wired Different
 * Ash's experience with ADHD: honest, personal, anti-stigma
 *
 * @component AdhdPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { adhdPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function AdhdPage() {
  useEffect(() => {
    setSEO(pageSEO.adhd);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--adhd bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={adhdPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {adhdPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {adhdPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {adhdPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Pull Quote ── */}
      <blockquote className="about-subpage__pull-quote" aria-label="Featured quote">
        <p className="about-subpage__pull-quote-text">
          {adhdPageData.pullQuote}
        </p>
      </blockquote>

      {/* ── Quick Facts ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="ADHD quick facts"
      >
        {adhdPageData.quickFacts.map((fact) => (
          <div key={fact.id} className="about-subpage__fact" role="listitem">
            <span className="about-subpage__fact-label">{fact.label}</span>
            <span className="about-subpage__fact-value">{fact.value}</span>
          </div>
        ))}
      </div>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {adhdPageData.sections.map((section) => (
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
