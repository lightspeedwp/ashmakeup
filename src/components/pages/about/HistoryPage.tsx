/**
 * @fileoverview History timeline page
 *
 * Displays a chronological timeline of milestones in Ash Shaw's
 * makeup art journey. Phase 5 Polish — replaced custom timeline with
 * Phase 3 Timeline component, removed inline styles, bundler-safe syntax.
 *
 * @component HistoryPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { historyPageData } from '../../../data/mock/pages/history';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { Timeline } from '../../ui/Timeline';
import { ContentSection } from '../../sections/ContentSection';
import '../../../styles/blocks/history-page.css';

/**
 * Build timeline events from milestones
 */
function buildMilestonesTimeline() {
  var milestones = historyPageData.milestones;
  var events = [];
  for (var i = 0; i < milestones.length; i++) {
    var m = milestones[i];
    events.push({
      year: m.date,
      title: m.title,
      description: m.description,
    });
  }
  return events;
}

export function HistoryPage() {
  useEffect(function () {
    setSEO(pageSEO.history);
  }, []);

  var hero = historyPageData.hero;
  var timelineEvents = buildMilestonesTimeline();

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="history-page bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="history-page__hero section-spacing px-horizontal-section">
        <div className="history-page__hero-content section-container">
          <Breadcrumbs items={historyPageData.breadcrumbs} centered />

          <span className="history-page__hero-badge">
            {hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {hero.title}
          </h1>

          <p className="history-page__hero-desc text-body-p">
            {hero.description}
          </p>
        </div>
      </header>

      {/* ── Timeline (Phase 3 component) ── */}
      <div className="history-page__body section-spacing px-horizontal-section">
        <div className="section-container">
          <div className="entrance-fade-up">
            <ContentSection
              id="milestones"
              title="The Journey So Far"
              subtitle="Key milestones from Berlin to international stages"
              variant="default"
              colorAccent="yellow"
            >
              <Timeline
                events={timelineEvents}
                variant="vertical"
                colorAccent="yellow"
              />
            </ContentSection>
          </div>

          {/* ── Coming Soon ── */}
          <div className="history-page__coming-soon entrance-fade-up entrance-fade-up--delay-1">
            <p className="history-page__coming-soon-text">
              {historyPageData.comingSoon}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}