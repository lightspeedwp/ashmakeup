/**
 * @fileoverview Music — 140 BPM Heartbeat
 * Ash's relationship with psytrance and electronic music: the genres,
 * the DJs, the specific moments when music became medicine.
 *
 * Neon accent: Blue
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
import { StatCard } from '../../ui/StatCard';
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
      <header className="about-subpage__hero section-spacing px-horizontal-section">
        <div className="about-subpage__hero-content section-container">
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
      <div className="about-subpage__body section-spacing px-horizontal-section">
        <div className="section-container">
          <div className="entrance-fade-up">
            <PullQuote
              quote={data.pullQuote}
              variant="center"
              neonColor="blue"
            />
          </div>

          {/* ── Stats Grid ── */}
          <StatCard
            items={data.stats}
            ariaLabel="Music stats"
          />
        </div>
      </div>

      {/* ── Favourite Artists ── */}
      <div className="about-subpage__body section-spacing px-horizontal-section">
        <div className="section-container about-subpage__destinations" aria-label="Favourite artists and sets">
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
      </div>

      {/* ── Sections (Phase 3 ContentSection) ── */}
      <div className="about-subpage__body section-spacing px-horizontal-section">
        <div className="section-container">
          {data.sections.map(function (section, idx) {
          var delayClass = idx < 6 ? ' entrance-fade-up--delay-' + (idx + 1) : '';

          return (
            <div key={section.id} className={'entrance-fade-up' + delayClass}>
              <ContentSection
                id={section.id}
                title={section.title}
                variant="default"
                colorAccent="blue"
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
      </div>
    </main>
  );
}