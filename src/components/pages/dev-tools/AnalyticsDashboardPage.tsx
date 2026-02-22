/**
 * @fileoverview Analytics Dashboard — content engagement tracking and visitor behaviour
 *
 * Combines live session data from localStorage (via analyticsService) with
 * mock historical data for trends, device breakdowns, and referral sources.
 *
 * @component AnalyticsDashboardPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  getTotalViews,
  getHistory,
} from '../../../utils/analyticsService';
import type { HistoryEntry, AnalyticsContentType } from '../../../utils/analyticsService';
import { analyticsDashboardUI } from '../../../data/mock/ui/analytics-dashboard';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/analytics-dashboard.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Analytics Dashboard');

/** Format seconds into "Xm Ys" */
function formatTime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return secs > 0 ? `${mins}m ${secs}s` : `${mins}m`;
}

/** Format a timestamp as relative time */
function timeAgo(timestamp: number): string {
  const diff = Math.floor((Date.now() - timestamp) / 1000);
  if (diff < 60) return 'Just now';
  if (diff < 3600) return `${Math.floor(diff / 60)}m ago`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}h ago`;
  return `${Math.floor(diff / 86400)}d ago`;
}

export function AnalyticsDashboardPage() {
  const [liveViews, setLiveViews] = useState({
    blog: 0,
    portfolio: 0,
    video: 0,
    podcast: 0,
  });
  const [history, setHistory] = useState<HistoryEntry[]>([]);

  useEffect(() => {
    setSEO(devToolsSEO.analytics);
  }, []);

  /** Load live data from localStorage */
  const refreshLiveData = useCallback(() => {
    setLiveViews({
      blog: getTotalViews('blog'),
      portfolio: getTotalViews('portfolio'),
      video: getTotalViews('video'),
      podcast: getTotalViews('podcast'),
    });
    setHistory(getHistory());
  }, []);

  useEffect(() => {
    refreshLiveData();
  }, [refreshLiveData]);

  const totalLiveViews = useMemo(
    () => liveViews.blog + liveViews.portfolio + liveViews.video + liveViews.podcast,
    [liveViews]
  );

  const topContentType = useMemo(() => {
    const entries = Object.entries(liveViews) as [string, number][];
    entries.sort((a, b) => b[1] - a[1]);
    return entries[0]?.[0] || 'portfolio';
  }, [liveViews]);

  const data = analyticsDashboardUI;
  const maxBarValue = Math.max(...data.weeklyTrend.map((d) => d.value), 1);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">{data.hero.badge}</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {data.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {data.hero.description}
          </p>
        </div>
      </header>

      {/* ── Summary Cards (live from localStorage) ── */}
      <div className="analytics__summary">
        <div className="analytics__summary-card">
          <span className="analytics__summary-label">{data.summaryLabels.totalViews}</span>
          <span className="analytics__summary-value analytics__summary-value--neon">
            {totalLiveViews}
          </span>
          <span className="analytics__summary-sub">This session (localStorage)</span>
        </div>
        <div className="analytics__summary-card">
          <span className="analytics__summary-label">{data.summaryLabels.uniqueContent}</span>
          <span className="analytics__summary-value">{history.length}</span>
          <span className="analytics__summary-sub">Distinct items viewed</span>
        </div>
        <div className="analytics__summary-card">
          <span className="analytics__summary-label">{data.summaryLabels.topContentType}</span>
          <span className="analytics__summary-value">
            {topContentType.charAt(0).toUpperCase() + topContentType.slice(1)}
          </span>
          <span className="analytics__summary-sub">Most viewed type</span>
        </div>
        <div className="analytics__summary-card">
          <span className="analytics__summary-label">{data.summaryLabels.recentHistory}</span>
          <span className="analytics__summary-value">{history.length > 0 ? history.length : '—'}</span>
          <span className="analytics__summary-sub">Items in browsing history</span>
        </div>
      </div>

      <div className="analytics__sections">
        {/* ── Live Session Per-Type Breakdown ── */}
        <section className="analytics__section" aria-labelledby="an-live">
          <h2 id="an-live" className="analytics__section-title">
            {data.sectionTitles.liveSession}
          </h2>
          <div className="analytics__two-col">
            <div className="analytics__breakdown-card">
              <h3 className="analytics__breakdown-card-title">Views by Content Type</h3>
              {(['portfolio', 'blog', 'video', 'podcast'] as AnalyticsContentType[]).map((type) => {
                const count = liveViews[type];
                const pct = totalLiveViews > 0 ? Math.round((count / totalLiveViews) * 100) : 0;
                const colorMap: Record<string, string> = {
                  portfolio: 'var(--wp--preset--color--neon-green)',
                  blog: 'var(--wp--preset--color--neon-pink)',
                  video: 'var(--wp--preset--color--neon-blue)',
                  podcast: 'var(--wp--preset--color--neon-purple)',
                };
                return (
                  <div key={type} className="analytics__h-bar-row">
                    <span className="analytics__h-bar-label">
                      {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
                    <div className="analytics__h-bar-track">
                      <div
                        className="analytics__h-bar-fill"
                        style={{ width: `${pct}%`, background: colorMap[type] }}
                      />
                    </div>
                    <span className="analytics__h-bar-pct">{count}</span>
                  </div>
                );
              })}
            </div>

            {/* Refresh button */}
            <div className="analytics__breakdown-card">
              <h3 className="analytics__breakdown-card-title">Session Controls</h3>
              <p className="analytics__empty">
                Analytics data is stored in your browser&apos;s localStorage. Navigate the site to
                generate view data, then return here to see updated stats.
              </p>
              <button
                type="button"
                className="playground__btn playground__btn--primary"
                onClick={refreshLiveData}
              >
                Refresh Live Data
              </button>
            </div>
          </div>
        </section>

        {/* ── Weekly Trend (mock) ── */}
        <section className="analytics__section" aria-labelledby="an-trend">
          <h2 id="an-trend" className="analytics__section-title">
            {data.sectionTitles.weeklyTrend}
          </h2>
          <div className="analytics__bar-chart" aria-label="Weekly page view trend">
            {data.weeklyTrend.map((point) => {
              const heightPct = Math.max(5, (point.value / maxBarValue) * 100);
              return (
                <div key={point.label} className="analytics__bar-col">
                  <span className="analytics__bar-value">{point.value}</span>
                  <div
                    className="analytics__bar"
                    style={{ height: `${heightPct}%` }}
                    role="img"
                    aria-label={`${point.label}: ${point.value} views`}
                  />
                  <span className="analytics__bar-label">{point.label}</span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Top Content (mock) ── */}
        <section className="analytics__section" aria-labelledby="an-top">
          <h2 id="an-top" className="analytics__section-title">
            {data.sectionTitles.topContent}
          </h2>
          <div className="analytics__table-wrap">
            <table className="analytics__table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Type</th>
                  <th>Views</th>
                  <th>Likes</th>
                  <th>Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {data.topContent.map((item, index) => (
                  <tr key={item.slug}>
                    <td>{index + 1}</td>
                    <td className="analytics__content-title">{item.title}</td>
                    <td>
                      <span className={`analytics__type-badge analytics__type-badge--${item.type}`}>
                        {item.type}
                      </span>
                    </td>
                    <td>{item.views}</td>
                    <td>{item.likes}</td>
                    <td>{formatTime(item.avgTimeSeconds)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Device + Referral (mock, side by side) ── */}
        <div className="analytics__two-col">
          {/* Devices */}
          <section className="analytics__breakdown-card" aria-labelledby="an-devices">
            <h2 id="an-devices" className="analytics__breakdown-card-title">
              {data.sectionTitles.devices}
            </h2>
            {data.devices.map((device) => (
              <div key={device.device} className="analytics__h-bar-row">
                <span className="analytics__h-bar-label">{device.device}</span>
                <div className="analytics__h-bar-track">
                  <div
                    className="analytics__h-bar-fill"
                    style={{ width: `${device.percentage}%`, background: device.color }}
                  />
                </div>
                <span className="analytics__h-bar-pct">{device.percentage}%</span>
              </div>
            ))}
          </section>

          {/* Referrals */}
          <section className="analytics__breakdown-card" aria-labelledby="an-referrals">
            <h2 id="an-referrals" className="analytics__breakdown-card-title">
              {data.sectionTitles.referrals}
            </h2>
            {data.referrals.map((ref) => (
              <div key={ref.source} className="analytics__h-bar-row">
                <span className="analytics__h-bar-label">{ref.source}</span>
                <div className="analytics__h-bar-track">
                  <div
                    className="analytics__h-bar-fill"
                    style={{
                      width: `${ref.percentage}%`,
                      background: 'var(--wp--preset--gradient--toxic-lime)',
                    }}
                  />
                </div>
                <span className="analytics__h-bar-pct">{ref.percentage}%</span>
              </div>
            ))}
          </section>
        </div>

        {/* ── Popular Search Queries (mock) ── */}
        <section className="analytics__section" aria-labelledby="an-search">
          <h2 id="an-search" className="analytics__section-title">
            {data.sectionTitles.searches}
          </h2>
          <div className="analytics__search-chips">
            {data.popularSearches.map((search) => (
              <span key={search.query} className="analytics__search-chip">
                &ldquo;{search.query}&rdquo;
                <span className="analytics__search-count">{search.count}</span>
              </span>
            ))}
          </div>
        </section>

        {/* ── Viewing History (live from localStorage) ── */}
        <section className="analytics__section" aria-labelledby="an-history">
          <h2 id="an-history" className="analytics__section-title">
            {data.sectionTitles.history}
          </h2>
          {history.length === 0 ? (
            <p className="analytics__empty">
              No viewing history yet. Browse the portfolio, blog, or videos, then return here.
            </p>
          ) : (
            <div className="analytics__history-list">
              {history.slice(0, 10).map((entry, index) => (
                <div key={`${entry.type}-${entry.slug}-${index}`} className="analytics__history-item">
                  <span className={`analytics__type-badge analytics__type-badge--${entry.type}`}>
                    {entry.type}
                  </span>
                  <span className="analytics__history-title">{entry.title}</span>
                  <span className="analytics__history-time">{timeAgo(entry.timestamp)}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}