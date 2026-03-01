/**
 * @fileoverview Cycling — Two Wheels & UV Paint
 * Ash's lifelong relationship with the bicycle: racing, touring, identity.
 *
 * Neon accent: Green
 * Phase 5 Polish — Timeline for notable rides, ContentSection, bundler-safe syntax
 *
 * @component CyclingPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { cyclingPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { Timeline } from '../../ui/Timeline';
import { ContentSection } from '../../sections/ContentSection';
import { Accordion } from '../../ui/Accordion';
import '../../../styles/blocks/about-subpage.css';

/**
 * Build timeline events from notable rides
 */
function buildRidesTimeline() {
  var rides = cyclingPageData.notableRides;
  var events = [];
  for (var i = 0; i < rides.length; i++) {
    var ride = rides[i];
    events.push({
      year: ride.year + ' \u00b7 ' + ride.distance,
      title: ride.name,
      description: ride.description,
    });
  }
  return events;
}

/**
 * Build accordion items from kit list
 */
function buildKitAccordion() {
  var kit = cyclingPageData.kitList;
  var items = [];
  for (var i = 0; i < kit.length; i++) {
    var item = kit[i];
    items.push({
      id: 'kit-' + item.id,
      title: item.number + '. ' + item.title,
      content: React.createElement(
        'p',
        { className: 'about-subpage__section-text' },
        item.description
      ),
    });
  }
  return items;
}

export function CyclingPage() {
  useEffect(function () {
    setSEO(pageSEO.cycling);
  }, []);

  var data = cyclingPageData;
  var ridesTimeline = buildRidesTimeline();
  var kitAccordionItems = buildKitAccordion();

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--cycling bg-atomic-noise"
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

      {/* ── Stats Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Cycling stats"
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
                colorAccent="green"
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

      {/* ── Notable Rides Timeline (Phase 3) ── */}
      <div className="about-subpage__body">
        <div className="entrance-fade-up entrance-fade-up--delay-2">
          <ContentSection
            id="notable-rides"
            title="Notable Rides"
            variant="default"
            colorAccent="green"
          >
            <Timeline
              events={ridesTimeline}
              variant="vertical"
              colorAccent="green"
            />
          </ContentSection>
        </div>

        {/* ── Kit List as Accordion (Phase 3) ── */}
        <div className="entrance-fade-up entrance-fade-up--delay-3">
          <ContentSection
            id="kit-list"
            title="What Fits on the Bike"
            variant="default"
            colorAccent="green"
          >
            <Accordion
              items={kitAccordionItems}
              allowMultiple={true}
            />
          </ContentSection>
        </div>
      </div>
    </main>
  );
}
