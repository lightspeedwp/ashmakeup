/**
 * @fileoverview Podcast page — describes the Neon vs Atomic Black podcast
 *
 * Features show description, format overview, and episode previews.
 *
 * @component PodcastPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { Mic, Headphones } from 'lucide-react';
import { podcastPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/about-subpage.css';

export function PodcastPage() {
  useEffect(() => {
    setSEO(pageSEO.podcast);
  }, []);

  const { hero, breadcrumbs, sections, showName, tagline, format, episodes } = podcastPageData;

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--podcast bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {hero.description}
          </p>
        </div>
      </header>

      {/* ── Show Info ── */}
      <div className="about-subpage__body">
        <section className="about-subpage__section">
          <h2 className="about-subpage__section-title">
            <Mic className="about-subpage__inline-icon" aria-hidden="true" />
            {showName}
          </h2>
          <p className="about-subpage__section-text">{tagline}</p>
        </section>

        {/* ── Format ── */}
        <section className="about-subpage__section">
          <h2 className="about-subpage__section-title">Format</h2>
          {format.map((line, i) => (
            <p key={`format-${i}`} className="about-subpage__section-text">
              {line}
            </p>
          ))}
        </section>

        {/* ── Body Sections ── */}
        {sections.map((section) => (
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

      {/* ── Episode Previews ── */}
      <div className="about-subpage__chapters">
        <h2 className="about-subpage__chapters-title">
          Upcoming Episodes
        </h2>
        {episodes.map((ep) => (
          <article key={ep.id} className="about-subpage__chapter">
            <div className="about-subpage__chapter-number">
              <Headphones className="about-subpage__ep-icon" aria-hidden="true" />
            </div>
            <div className="about-subpage__chapter-body">
              <h3 className="about-subpage__chapter-title">
                EP {ep.number}: {ep.title}
              </h3>
              <p className="about-subpage__chapter-teaser">{ep.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}