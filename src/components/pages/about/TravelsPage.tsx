/**
 * @fileoverview Travels page — Ash's nomadic festival circuit
 * @component TravelsPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { MapPin } from 'lucide-react';
import { travelsPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/about-subpage.css';

export function TravelsPage() {
  useEffect(() => {
    setSEO(pageSEO.travels);
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--travels bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={travelsPageData.breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {travelsPageData.hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {travelsPageData.hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {travelsPageData.hero.description}
          </p>
        </div>
      </header>

      {/* ── Destinations Grid ── */}
      <div className="about-subpage__destinations" aria-label="Destinations">
        {travelsPageData.destinations.map((dest) => (
          <article key={dest.id} className="about-subpage__destination">
            <h2 className="about-subpage__destination-name">
              <MapPin
                className="about-subpage__destination-icon"
                aria-hidden="true"
              />
              {dest.name}
            </h2>
            <span className="about-subpage__destination-region">{dest.region}</span>
            <p className="about-subpage__destination-desc">{dest.description}</p>
          </article>
        ))}
      </div>

      {/* ── Sections ── */}
      <div className="about-subpage__body">
        {travelsPageData.sections.map((section) => (
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
    </main>
  );
}
