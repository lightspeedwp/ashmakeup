/**
 * @fileoverview History timeline page (stub)
 *
 * Displays a chronological timeline of milestones in Ash Shaw's
 * makeup art journey. Currently a stub with a single entry (July 2019).
 *
 * @component HistoryPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';
import { historyPageData } from '../../../data/mock/pages/history';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/history-page.css';

export function HistoryPage() {
  useEffect(() => {
    setSEO(pageSEO.history);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="history-page bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header 
        className="history-page__hero"
        style={{
            backgroundImage: `radial-gradient(circle at center, rgba(15, 15, 15, 0) 0%, rgba(15, 15, 15, 1) 80%), url('https://images.unsplash.com/photo-1528922087877-3f44f53a8f7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbGlnaHQlMjB0cmFpbCUyMHRpbWVsaW5lJTIwYWJzdHJhY3QlMjBwYXRofGVufDF8fHx8MTc3MTY4NzEwNHww&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      >
        <div className="history-page__hero-content">
          <Breadcrumbs items={historyPageData.breadcrumbs} centered />

          <span className="history-page__hero-badge">
            {historyPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {historyPageData.hero.title}
          </h1>

          <p className="history-page__hero-desc text-body-p">
            {historyPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Timeline ── */}
      <section
        className="history-page__timeline"
        aria-label="Milestones timeline"
      >
        <div className="history-page__timeline-inner">
          {/* Vertical connector line */}
          <div className="history-page__connector" aria-hidden="true" />

          {historyPageData.milestones.map((milestone, index) => (
            <article
              key={milestone.id}
              className={`history-milestone ${index % 2 === 0 ? 'history-milestone--left' : 'history-milestone--right'}`}
            >
              {/* Neon dot */}
              <div className="history-milestone__dot" aria-hidden="true">
                <Clock
                  className="history-milestone__dot-icon"
                  aria-hidden="true"
                />
              </div>

              {/* Content */}
              <div className="history-milestone__body">
                <time className="history-milestone__date">
                  {milestone.date}
                </time>
                <h2 className="history-milestone__title">
                  {milestone.title}
                </h2>
                <p className="history-milestone__desc">
                  {milestone.description}
                </p>
              </div>
            </article>
          ))}

          {/* Coming soon indicator */}
          <div className="history-milestone history-milestone--coming-soon">
            <div
              className="history-milestone__dot history-milestone__dot--muted"
              aria-hidden="true"
            />
            <p className="history-milestone__coming-soon">
              {historyPageData.comingSoon}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}