/**
 * @fileoverview Fitness — The Moving Body
 * How physical movement connects to Ash's creative output, mental health,
 * and ADHD regulation. Cycling, dance, yoga, running, triathlon, Muay Thai.
 *
 * Neon accent: Green
 *
 * @component FitnessPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { fitnessPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/about-subpage.css';

export function FitnessPage() {
  useEffect(() => {
    setSEO(pageSEO.fitness);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--fitness bg-atomic-noise"
    >
      {/* -- Hero -- */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={fitnessPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {fitnessPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {fitnessPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {fitnessPageData.hero.description}
          </p>
        </div>
      </header>

      {/* -- Pull Quote -- */}
      <blockquote className="about-subpage__pull-quote" aria-label="Featured quote">
        <p className="about-subpage__pull-quote-text">
          {fitnessPageData.pullQuote}
        </p>
      </blockquote>

      {/* -- Stats Grid -- */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Fitness stats"
      >
        {fitnessPageData.stats.map((stat) => (
          <div key={stat.id} className="about-subpage__fact" role="listitem">
            <span className="about-subpage__fact-label">{stat.label}</span>
            <span className="about-subpage__fact-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* -- Sports Grid -- */}
      <div className="about-subpage__destinations" aria-label="Sport disciplines">
        {fitnessPageData.sports.map((sport) => (
          <article key={sport.id} className="about-subpage__destination">
            <div className="about-subpage__destination-name">
              {sport.name}
            </div>
            <span className="about-subpage__destination-region">
              Since {sport.since}
            </span>
            <p className="about-subpage__destination-desc">
              {sport.description}
            </p>
          </article>
        ))}
      </div>

      {/* -- Sections -- */}
      <div className="about-subpage__body">
        {fitnessPageData.sections.map((section) => (
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