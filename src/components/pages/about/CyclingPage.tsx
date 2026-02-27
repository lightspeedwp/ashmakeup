/**
 * @fileoverview Cycling — Two Wheels & UV Paint
 * Ash's lifelong relationship with the bicycle: racing, touring, identity
 *
 * @component CyclingPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { cyclingPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { MapPin } from '../../../lib/icons';
import '../../../styles/blocks/about-subpage.css';

export function CyclingPage() {
  useEffect(() => {
    setSEO(pageSEO.cycling);
  }, []);

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
          <Breadcrumbs items={cyclingPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {cyclingPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {cyclingPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {cyclingPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Stats Grid ── */}
      <div
        className="about-subpage__facts"
        role="list"
        aria-label="Cycling stats"
      >
        {cyclingPageData.stats.map((stat) => (
          <div key={stat.id} className="about-subpage__fact" role="listitem">
            <span className="about-subpage__fact-label">{stat.label}</span>
            <span className="about-subpage__fact-value">{stat.value}</span>
          </div>
        ))}
      </div>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {cyclingPageData.sections.map((section) => (
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

      {/* ── Notable Rides ── */}
      <div className="about-subpage__destinations" aria-label="Notable rides">
        {cyclingPageData.notableRides.map((ride) => (
          <article key={ride.id} className="about-subpage__destination">
            <div className="about-subpage__destination-name">
              <MapPin className="about-subpage__destination-icon" aria-hidden="true" />
              {ride.name}
            </div>
            <span className="about-subpage__destination-region">
              {ride.year} &middot; {ride.distance}
            </span>
            <p className="about-subpage__destination-desc">
              {ride.description}
            </p>
          </article>
        ))}
      </div>

      {/* ── Kit List ── */}
      <div className="about-subpage__steps" aria-label="Festival bike kit list">
        <h2 className="about-subpage__chapters-title">What Fits on the Bike</h2>
        {cyclingPageData.kitList.map((item) => (
          <article key={item.id} className="about-subpage__step">
            <div className="about-subpage__step-number">{item.number}</div>
            <div className="about-subpage__step-body">
              <h3 className="about-subpage__step-title">{item.title}</h3>
              <p className="about-subpage__step-desc">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}