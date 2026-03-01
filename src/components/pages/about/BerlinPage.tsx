/**
 * @fileoverview Berlin — Ash's creative anchor city
 *
 * Phase 5 Polish — ContentSection for body, bundler-safe syntax
 *
 * @component BerlinPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { berlinPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { ContentSection } from '../../sections/ContentSection';
import '../../../styles/blocks/about-subpage.css';

export function BerlinPage() {
  useEffect(function () {
    setSEO(pageSEO.berlin);
  }, []);

  var data = berlinPageData;

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--berlin bg-atomic-noise"
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
