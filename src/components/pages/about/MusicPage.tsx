/**
 * @fileoverview Music — 140 BPM Heartbeat
 * Ash's relationship with psytrance and electronic music: the genres,
 * the DJs, the specific moments when music became medicine.
 *
 * Neon accent: Purple
 * Phase 5 Polish — PullQuote + ContentSection, bundler-safe syntax
 *
 * @component MusicPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { musicPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { PullQuote } from '../../ui/PullQuote';
import { ContentSection } from '../../sections/ContentSection';
import '../../../styles/blocks/about-subpage.css';

export function MusicPage() {
  useEffect(function () {
    setSEO(pageSEO.music);
  }, []);

  var data = musicPageData;

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
          <Breadcrumbs items={data.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {data.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {data.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {data.hero.description}
          </p>
        </div>
      </header>

      {/* ── Pull Quote (Phase 3) ── */}
      <div className="about-subpage__body">
        <div className="entrance-fade-up">
          <PullQuote
            quote={data.pullQuote}
            variant="center"
            neonColor="purple"
          />
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Music stats"
      >
        {data.stats.map(function (stat) {
          return (
            <div key={stat.id} className="about-subpage__fact" role="listitem">
              <span className="about-subpage__fact-label">{stat.label}</span>
              <span className="about-subpage__fact-value">{stat.value}</span>
            </div>
          );
        })}
      </div>

      {/* ── Favourite Artists ── */}
      <div className="about-subpage__destinations" aria-label="Favourite artists and sets">
        {data.artists.map(function (artist) {
          return (
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
          );
        })}
      </div>

      {/* ── Sections (Phase 3 ContentSection) ── */}
      <div className="about-subpage__body">
        {data.sections.map(function (section, idx) {
          var delayClass = idx < 6 ? ' entrance-fade-up--delay-' + (idx + 1) : '';

          return (
            <div key={section.id} className={'entrance-fade-up' + delayClass}>
              <ContentSection
                id={section.id}
                title={section.title}
                variant="default"
                colorAccent="purple"
              >
                {section.paragraphs.map(function (p, i) {
                  return (
                    <p key={section.id + '-p-' + i} className="about-subpage__section-text">
                      {p}
                    </p>
                  );
                })}
              </ContentSection>
            </div>
          );
        })}
      </div>
    </main>
  );
}
