/**
 * @fileoverview Music — 140 BPM Heartbeat
 * Ash's relationship with psytrance and electronic music: the genres,
 * the DJs, the specific moments when music became medicine.
 *
 * Neon accent: Purple
 *
 * @component MusicPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { musicPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function MusicPage() {
  useEffect(() => {
    setSEO(pageSEO.music);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--music bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={musicPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {musicPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {musicPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {musicPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Pull Quote ── */}
      <blockquote className="about-subpage__pull-quote" aria-label="Featured quote">
        <p className="about-subpage__pull-quote-text">
          {musicPageData.pullQuote}
        </p>
      </blockquote>

      {/* ── Stats Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Music stats"
      >
        {musicPageData.stats.map((stat) => (
          <div key={stat.id} className="about-subpage__fact" role="listitem">
            <span className="about-subpage__fact-label">{stat.label}</span>
            <span className="about-subpage__fact-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* ── Favourite Artists ── */}
      <div className="about-subpage__destinations" aria-label="Favourite artists and sets">
        {musicPageData.artists.map((artist) => (
          <article key={artist.id} className="about-subpage__destination">
            <div className="about-subpage__destination-name">
              {artist.name}
            </div>
            <span className="about-subpage__destination-region">
              {artist.genre}
            </span>
            <p className="about-subpage__destination-desc">
              {artist.description}
            </p>
          </article>
        ))}
      </div>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {musicPageData.sections.map((section) => (
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
