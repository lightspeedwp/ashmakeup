/**
 * @fileoverview Aquarius — The Aquarian Blueprint
 * Pattern recognition about identity: how Aquarian questioning,
 * ADHD, and expanded awareness combine into one operating system.
 *
 * Neon accent: Cyan
 * Phase 5 Polish — integrated PullQuote & ContentSection components
 *
 * @component AquariusPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { aquariusPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { PullQuote } from '../../ui/PullQuote';
import { ContentSection } from '../../sections/ContentSection';
import '../../../styles/blocks/about-subpage.css';

export function AquariusPage() {
  useEffect(function () {
    setSEO(pageSEO.aquarius);
  }, []);

  var data = aquariusPageData;

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--aquarius bg-atomic-noise"
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

      {/* ── Pull Quote (Phase 3 component) ── */}
      <div className="about-subpage__body">
        <div className="entrance-fade-up">
          <PullQuote
            quote={data.pullQuote}
            variant="center"
            neonColor="blue"
          />
        </div>
      </div>

      {/* ── Traits Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Aquarian traits"
      >
        {data.traits.map(function (trait) {
          return (
            <div key={trait.id} className="about-subpage__fact" role="listitem">
              <span className="about-subpage__fact-label">{trait.label}</span>
              <span className="about-subpage__fact-value">{trait.value}</span>
            </div>
          );
        })}
      </div>

      {/* ── Thread Cards (Aquarius x ...) ── */}
      <div className="about-subpage__destinations" aria-label="Aquarian threads">
        {data.threads.map(function (thread) {
          return (
            <article key={thread.id} className="about-subpage__destination">
              <div className="about-subpage__destination-name">
                {thread.title}
              </div>
              <p className="about-subpage__destination-desc">
                {thread.description}
              </p>
            </article>
          );
        })}
      </div>

      {/* ── Sections (wrapped in ContentSection) ── */}
      <div className="about-subpage__body">
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
    </main>
  );
}
