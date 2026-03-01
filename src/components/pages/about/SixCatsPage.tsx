/**
 * @fileoverview Six Cats Club — Craft Cannabis, Consciously Cultivated
 *
 * Ash Shaw's cannabis club in Cape Town: nearly 20 years of growing
 * experience, a proprietary grading system, sustainable cultivation,
 * and the rescue cats who became the brand's soul.
 *
 * @component SixCatsPage
 * @version 1.0.0
 */

import React, { useEffect, useState } from 'react';
import { sixCatsPageData } from '../../../data/mock/pages/six-cats';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import {
  Leaf,
  Sparkles,
  Zap,
  Clock,
  Scissors,
  Star,
  Heart,
  ChevronDown,
  ChevronUp,
  Layers,
  RefreshCw,
  ExternalLink,
} from '../../../lib/icons';
import '../../../styles/blocks/about-subpage.css';
import '../../../styles/blocks/six-cats-page.css';

/** Map cultivation method IDs to icons */
const CULTIVATION_ICONS: Record<string, React.ElementType> = {
  'living-soil': Leaf,
  'rainwater': Sparkles,
  'companion-planting': Zap,
  'worm-tea': Clock,
};

/** Map harvest phase IDs to icons */
const HARVEST_ICONS: Record<string, React.ElementType> = {
  flushing: Sparkles,
  drying: Scissors,
  'dry-trimming': Star,
  curing: Heart,
};

export function SixCatsPage() {
  const expandedGradeInit: string | null = null;
  const [expandedGrade, setExpandedGrade] = useState(expandedGradeInit);
  const [showMemorial, setShowMemorial] = useState(false);

  useEffect(() => {
    setSEO(pageSEO.sixCats);
  }, []);

  const {
    hero,
    breadcrumbs,
    website,
    vision,
    mission,
    values,
    grades,
    cultivation,
    harvest,
    packaging,
    cats,
    sections,
    a11y,
  } = sixCatsPageData;

  const livingCats = cats.filter((c) => c.status === 'alive');
  const memorialCats = cats.filter((c) => c.status === 'memorial');

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--six-cats six-cats-page bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {hero.description}
          </p>

          <a
            className="six-cats-page__website-link"
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink
              className="six-cats-page__link-icon"
              aria-hidden="true"
            />
            {website.url}
          </a>
        </div>
      </header>

      {/* ── Vision & Mission ── */}
      <section
        className="six-cats-page__vision-mission"
        aria-label={a11y.visionMissionLabel}
      >
        <div className="six-cats-page__vm-card">
          <h2 className="six-cats-page__vm-heading">
            {website.name} &mdash; {website.tagline}
          </h2>
          <div className="six-cats-page__vm-pair">
            <div className="six-cats-page__vm-block">
              <span className="six-cats-page__vm-label">Vision</span>
              <p className="six-cats-page__vm-text">{vision}</p>
            </div>
            <div className="six-cats-page__vm-block">
              <span className="six-cats-page__vm-label">Mission</span>
              <p className="six-cats-page__vm-text">{mission}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Body Sections (Humans, Cats intro, Craft) ── */}
      <div className="about-subpage__body">
        {sections.map((section) => (
          <section key={section.id} className="about-subpage__section">
            <h2 className="about-subpage__section-title">{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p
                key={`${section.id}-p-${i}`}
                className="about-subpage__section-text"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* ── The Cats ── */}
      <section className="six-cats-page__cats" aria-label={a11y.catsListLabel}>
        <h2 className="six-cats-page__section-heading">
          <Layers className="six-cats-page__heading-icon" aria-hidden="true" />
          The Current Pack
        </h2>
        <div className="six-cats-page__cats-grid" role="list">
          {livingCats.map((cat) => (
            <article
              key={cat.id}
              className="six-cats-page__cat-card"
              role="listitem"
            >
              <div className="six-cats-page__cat-header">
                <h3 className="six-cats-page__cat-name">{cat.name}</h3>
                <span className="six-cats-page__cat-nickname">
                  {cat.nickname}
                </span>
              </div>
              <span className="six-cats-page__cat-role">{cat.role}</span>
              <p className="six-cats-page__cat-bio">{cat.bio}</p>
            </article>
          ))}
        </div>

        {/* ── Memorial ── */}
        <div className="six-cats-page__memorial">
          <button
            type="button"
            className="six-cats-page__memorial-toggle"
            onClick={() => setShowMemorial(!showMemorial)}
            aria-expanded={showMemorial}
            aria-controls="memorial-section"
          >
            <Heart
              className="six-cats-page__memorial-icon"
              aria-hidden="true"
            />
            In Memoriam
            {showMemorial ? (
              <ChevronUp
                className="six-cats-page__chevron"
                aria-hidden="true"
              />
            ) : (
              <ChevronDown
                className="six-cats-page__chevron"
                aria-hidden="true"
              />
            )}
          </button>

          {showMemorial && (
            <div
              id="memorial-section"
              className="six-cats-page__cats-grid six-cats-page__cats-grid--memorial"
              role="list"
              aria-label={a11y.memorialLabel}
            >
              {memorialCats.map((cat) => (
                <article
                  key={cat.id}
                  className="six-cats-page__cat-card six-cats-page__cat-card--memorial"
                  role="listitem"
                >
                  <div className="six-cats-page__cat-header">
                    <h3 className="six-cats-page__cat-name">{cat.name}</h3>
                    <span className="six-cats-page__cat-nickname">
                      {cat.nickname}
                    </span>
                  </div>
                  <span className="six-cats-page__cat-role">{cat.role}</span>
                  {cat.datePassed && (
                    <time className="six-cats-page__cat-date">
                      {cat.datePassed}
                    </time>
                  )}
                  <p className="six-cats-page__cat-bio">{cat.bio}</p>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Grading System ── */}
      <section className="six-cats-page__grades" aria-label={a11y.gradesLabel}>
        <h2 className="six-cats-page__section-heading">
          <Star className="six-cats-page__heading-icon" aria-hidden="true" />
          Grading System
        </h2>
        <div className="six-cats-page__grades-list" role="list">
          {grades.map((grade) => (
            <article
              key={grade.id}
              className={`six-cats-page__grade-card ${
                expandedGrade === grade.id
                  ? 'six-cats-page__grade-card--expanded'
                  : ''
              }`}
              role="listitem"
            >
              <button
                type="button"
                className="six-cats-page__grade-header"
                onClick={() =>
                  setExpandedGrade(
                    expandedGrade === grade.id ? null : grade.id
                  )
                }
                aria-expanded={expandedGrade === grade.id}
              >
                <span className="six-cats-page__grade-badge">
                  {grade.grade}
                </span>
                <div className="six-cats-page__grade-info">
                  <span className="six-cats-page__grade-name">
                    {grade.name}
                  </span>
                  <span className="six-cats-page__grade-tagline">
                    {grade.tagline}
                  </span>
                </div>
                {expandedGrade === grade.id ? (
                  <ChevronUp
                    className="six-cats-page__chevron"
                    aria-hidden="true"
                  />
                ) : (
                  <ChevronDown
                    className="six-cats-page__chevron"
                    aria-hidden="true"
                  />
                )}
              </button>
              {expandedGrade === grade.id && (
                <p className="six-cats-page__grade-desc">
                  {grade.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* ── Cultivation ── */}
      <section
        className="six-cats-page__cultivation"
        aria-label={a11y.cultivationLabel}
      >
        <h2 className="six-cats-page__section-heading">
          <Leaf className="six-cats-page__heading-icon" aria-hidden="true" />
          Cultivation
        </h2>
        <div className="six-cats-page__cultivation-grid" role="list">
          {cultivation.map((method) => {
            const IconComp = CULTIVATION_ICONS[method.id] || Leaf;
            return (
              <article
                key={method.id}
                className="six-cats-page__cultivation-card"
                role="listitem"
              >
                <IconComp
                  className="six-cats-page__cultivation-icon"
                  aria-hidden="true"
                />
                <h3 className="six-cats-page__cultivation-title">
                  {method.title}
                </h3>
                <p className="six-cats-page__cultivation-desc">
                  {method.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Harvest ── */}
      <section className="six-cats-page__harvest" aria-label={a11y.harvestLabel}>
        <h2 className="six-cats-page__section-heading">
          <Scissors className="six-cats-page__heading-icon" aria-hidden="true" />
          Harvest Phases
        </h2>
        <div className="six-cats-page__harvest-timeline" role="list">
          {harvest.map((phase, idx) => {
            const IconComp = HARVEST_ICONS[phase.id] || Clock;
            return (
              <article
                key={phase.id}
                className="six-cats-page__harvest-phase"
                role="listitem"
              >
                <div className="six-cats-page__harvest-marker">
                  <span className="six-cats-page__harvest-number">
                    {idx + 1}
                  </span>
                  <IconComp
                    className="six-cats-page__harvest-icon"
                    aria-hidden="true"
                  />
                </div>
                <div className="six-cats-page__harvest-body">
                  <h3 className="six-cats-page__harvest-title">
                    {phase.title}
                  </h3>
                  {phase.paragraphs.map((p, i) => (
                    <p
                      key={`${phase.id}-p-${i}`}
                      className="six-cats-page__harvest-text"
                    >
                      {p}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* ── Packaging ── */}
      <section
        className="six-cats-page__packaging"
        aria-label={a11y.packagingLabel}
      >
        <h2 className="six-cats-page__section-heading">
          <Layers className="six-cats-page__heading-icon" aria-hidden="true" />
          Packaging &amp; Sustainability
        </h2>
        <div className="six-cats-page__packaging-grid">
          {packaging.map((pkg) => (
            <article key={pkg.id} className="six-cats-page__packaging-card">
              {pkg.id === 'glass' ? (
                <RefreshCw
                  className="six-cats-page__packaging-icon"
                  aria-hidden="true"
                />
              ) : (
                <Leaf
                  className="six-cats-page__packaging-icon"
                  aria-hidden="true"
                />
              )}
              <h3 className="six-cats-page__packaging-title">{pkg.title}</h3>
              {pkg.paragraphs.map((p, i) => (
                <p
                  key={`${pkg.id}-p-${i}`}
                  className="six-cats-page__packaging-text"
                >
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>

      {/* ── Values ── */}
      <section className="six-cats-page__values" aria-label={a11y.valuesLabel}>
        <h2 className="six-cats-page__section-heading">
          Our Values
        </h2>
        <div className="six-cats-page__values-grid" role="list">
          {values.map((value) => (
            <article
              key={value.id}
              className="six-cats-page__value-card"
              role="listitem"
            >
              <h3 className="six-cats-page__value-title">{value.title}</h3>
              <p className="six-cats-page__value-desc">{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}