/**
 * @fileoverview LightSpeed — The Day Job
 * Ash's professional career building LightSpeed, a WordPress agency.
 * 22+ years of web development, from IT support to AI-powered workflows.
 *
 * Neon accent: Blue
 * Phase 5 Polish — integrated PullQuote, Timeline, ContentSection, Accordion
 *
 * @component LightSpeedPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { lightspeedPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { PullQuote } from '../../ui/PullQuote';
import { Timeline } from '../../ui/Timeline';
import { ContentSection } from '../../sections/ContentSection';
import { Accordion } from '../../ui/Accordion';
import '../../../styles/blocks/about-subpage.css';

/**
 * Build timeline events from team data
 */
function buildTeamTimeline() {
  var team = lightspeedPageData.team;
  var events = [];
  for (var i = 0; i < team.length; i++) {
    var member = team[i];
    events.push({
      year: member.joined,
      title: member.name,
      description: member.role,
    });
  }
  return events;
}

/**
 * Build accordion items from body sections
 */
function buildSectionAccordion() {
  var sections = lightspeedPageData.sections;
  var items = [];
  for (var i = 0; i < sections.length; i++) {
    var section = sections[i];
    items.push({
      id: section.id,
      title: section.title,
      content: section.paragraphs,
    });
  }
  return items;
}

export function LightSpeedPage() {
  useEffect(function () {
    setSEO(pageSEO.lightspeed);
  }, []);

  var data = lightspeedPageData;
  var teamTimelineEvents = buildTeamTimeline();
  var accordionItems = buildSectionAccordion();

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--lightspeed bg-atomic-noise"
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
            neonColor="blue"
          />
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="LightSpeed stats"
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

      {/* ── Team Timeline (Phase 3) ── */}
      <div className="about-subpage__body">
        <div className="entrance-fade-up entrance-fade-up--delay-1">
          <ContentSection
            id="team-timeline"
            title="The LightSpeed Team"
            subtitle="13 people who make it happen"
            variant="default"
            colorAccent="blue"
          >
            <Timeline
              events={teamTimelineEvents}
              variant="vertical"
              colorAccent="blue"
            />
          </ContentSection>
        </div>

        {/* ── Sections as Accordion (Phase 3) ── */}
        <div className="entrance-fade-up entrance-fade-up--delay-2">
          <ContentSection
            id="company-story"
            title="The LightSpeed Story"
            variant="default"
            colorAccent="purple"
          >
            <Accordion
              items={accordionItems.map(function (item) {
                return {
                  id: item.id,
                  title: item.title,
                  content: React.createElement(
                    'div',
                    { className: 'about-subpage__section' },
                    item.content.map(function (p, i) {
                      return React.createElement(
                        'p',
                        { key: item.id + '-p-' + i, className: 'about-subpage__section-text' },
                        p
                      );
                    })
                  ),
                };
              })}
              defaultOpen={['origin-story']}
            />
          </ContentSection>
        </div>
      </div>
    </main>
  );
}
