/**
 * @fileoverview Education — The Unconventional Classroom
 * Ash's educational journey from school in South Africa to self-taught
 * web developer, festival workshops, and the "university of the dancefloor."
 *
 * Neon accent: Orange
 *
 * @component EducationPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { educationPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function EducationPage() {
  useEffect(() => {
    setSEO(pageSEO.education);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--education bg-atomic-noise"
    >
      {/* -- Hero -- */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={educationPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {educationPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {educationPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {educationPageData.hero.description}
          </p>
        </div>
      </header>

      {/* -- Pull Quote -- */}
      <blockquote className="about-subpage__pull-quote" aria-label="Featured quote">
        <p className="about-subpage__pull-quote-text">
          {educationPageData.pullQuote}
        </p>
      </blockquote>

      {/* -- Stats Grid -- */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Education stats"
      >
        {educationPageData.stats.map((stat) => (
          <div key={stat.id} className="about-subpage__fact" role="listitem">
            <span className="about-subpage__fact-label">{stat.label}</span>
            <span className="about-subpage__fact-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* -- Formal Education Timeline (Steps) -- */}
      <div className="about-subpage__steps" aria-label="Formal education timeline">
        {educationPageData.formalEducation.map((entry) => (
          <article key={entry.id} className="about-subpage__step">
            <div className="about-subpage__step-number" aria-hidden="true">
              {entry.year.slice(0, 4)}
            </div>
            <div className="about-subpage__step-body">
              <h3 className="about-subpage__step-title">
                {entry.institution} — {entry.qualification}
              </h3>
              <p className="about-subpage__step-desc">{entry.description}</p>
            </div>
          </article>
        ))}
      </div>

      {/* -- Sections -- */}
      <div className="about-subpage__body">
        {educationPageData.sections.map((section) => (
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
