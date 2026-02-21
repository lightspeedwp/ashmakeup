/**
 * @fileoverview LightSpeed — The Day Job
 * Ash's professional career building LightSpeed, a WordPress agency.
 * 22+ years of web development, from IT support to AI-powered workflows.
 *
 * Neon accent: Blue
 *
 * @component LightSpeedPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { lightspeedPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function LightSpeedPage() {
  useEffect(() => {
    setSEO(pageSEO.lightspeed);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--lightspeed bg-atomic-noise"
    >
      {/* -- Hero -- */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={lightspeedPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {lightspeedPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {lightspeedPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {lightspeedPageData.hero.description}
          </p>
        </div>
      </header>

      {/* -- Pull Quote -- */}
      <blockquote className="about-subpage__pull-quote" aria-label="Featured quote">
        <p className="about-subpage__pull-quote-text">
          {lightspeedPageData.pullQuote}
        </p>
      </blockquote>

      {/* -- Stats Grid -- */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="LightSpeed stats"
      >
        {lightspeedPageData.stats.map((stat) => (
          <div key={stat.id} className="about-subpage__fact" role="listitem">
            <span className="about-subpage__fact-label">{stat.label}</span>
            <span className="about-subpage__fact-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* -- Team Grid -- */}
      <div className="about-subpage__destinations" aria-label="LightSpeed team members">
        {lightspeedPageData.team.map((member) => (
          <article key={member.id} className="about-subpage__destination">
            <div className="about-subpage__destination-name">
              {member.name}
            </div>
            <span className="about-subpage__destination-region">
              {member.role}
            </span>
            <p className="about-subpage__destination-desc">
              Joined {member.joined}
            </p>
          </article>
        ))}
      </div>

      {/* -- Sections -- */}
      <div className="about-subpage__body">
        {lightspeedPageData.sections.map((section) => (
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
