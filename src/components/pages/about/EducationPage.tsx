/**
 * @fileoverview Education — The Unconventional Classroom
 * Ash's educational journey from school in South Africa to self-taught
 * web developer, festival workshops, and the "university of the dancefloor."
 *
 * Neon accent: Orange
 * Phase 5 Polish — PullQuote, Timeline, ContentSection, bundler-safe syntax
 *
 * @component EducationPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { educationPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { PullQuote } from '../../ui/PullQuote';
import { Timeline } from '../../ui/Timeline';
import { ContentSection } from '../../sections/ContentSection';
import '../../../styles/blocks/about-subpage.css';

/**
 * Build timeline events from formal education entries
 */
function buildEducationTimeline() {
  var entries = educationPageData.formalEducation;
  var events = [];
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    events.push({
      year: entry.year,
      title: entry.institution + ' \u2014 ' + entry.qualification,
      description: entry.description,
    });
  }
  return events;
}

export function EducationPage() {
  useEffect(function () {
    setSEO(pageSEO.education);
  }, []);

  var data = educationPageData;
  var educationTimeline = buildEducationTimeline();

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--education bg-atomic-noise"
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
            neonColor="yellow"
          />
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Education stats"
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

      {/* ── Formal Education Timeline (Phase 3) ── */}
      <div className="about-subpage__body">
        <div className="entrance-fade-up entrance-fade-up--delay-1">
          <ContentSection
            id="formal-education"
            title="The Formal Path"
            variant="callout"
            colorAccent="pink"
          >
            <Timeline
              events={educationTimeline}
              variant="vertical"
              colorAccent="pink"
            />
          </ContentSection>
        </div>

        {/* ── Sections (Phase 3 ContentSection) ── */}
        {data.sections.map(function (section, idx) {
          var delayClass = idx < 6 ? ' entrance-fade-up--delay-' + (idx + 2) : '';

          return (
            <div key={section.id} className={'entrance-fade-up' + delayClass}>
              <ContentSection
                id={section.id}
                title={section.title}
                variant="default"
                colorAccent="pink"
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
