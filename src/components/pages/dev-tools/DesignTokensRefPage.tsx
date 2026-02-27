/**
 * @fileoverview Design Tokens Reference — complete single-page token reference
 * with collapsible sections, live swatches, and sticky sidebar nav
 *
 * @component DesignTokensRefPage
 * @version 1.0.0
 */

import React, { useEffect, useCallback } from 'react';
import { ChevronRight, Lightbulb } from '../../../lib/icons';
import { designTokensRefUI } from '../../../data/mock/ui/design-tokens-ref';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/design-tokens-ref.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

/** Determine if a section contains colour tokens (for swatch rendering) */
const COLOR_SECTIONS = new Set([
  'neon-colors',
  'accessible-text',
  'neutral-ramp',
  'semantic-roles',
]);

const GRADIENT_SECTION = 'gradients';
const SHADOW_SECTION = 'shadows';
const RADIUS_SECTION = 'border-radius';
const SPACING_SECTION = 'spacing';

function renderSwatch(sectionId: string, token: string, value: string) {
  if (COLOR_SECTIONS.has(sectionId)) {
    return (
      <div
        className="tokens-ref__swatch"
        style={{ backgroundColor: value.startsWith('#') ? value : `var(${token})` }}
        aria-label={`${value} colour swatch`}
      />
    );
  }

  if (sectionId === GRADIENT_SECTION) {
    return (
      <div
        className="tokens-ref__swatch tokens-ref__swatch--gradient"
        style={{ background: `var(${token})` }}
        aria-label="Gradient swatch"
      />
    );
  }

  if (sectionId === SHADOW_SECTION) {
    return (
      <div
        className="tokens-ref__swatch--shadow"
        style={{ boxShadow: `var(${token})` }}
        aria-label="Shadow preview"
      />
    );
  }

  if (sectionId === RADIUS_SECTION) {
    return (
      <div
        className="tokens-ref__swatch--radius"
        style={{ borderRadius: `var(${token})` }}
        aria-label="Radius preview"
      />
    );
  }

  if (sectionId === SPACING_SECTION) {
    return (
      <div
        className="tokens-ref__swatch--bar"
        style={{ width: `var(${token})` }}
        aria-label="Spacing bar"
      />
    );
  }

  return null;
}

export function DesignTokensRefPage() {
  useEffect(() => {
    setSEO(devToolsSEO.tokens);
  }, []);

  const scrollTo = useCallback((id: string) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById(`section-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
      /* Open the details if closed */
      if (el instanceof HTMLDetailsElement && !el.open) {
        el.open = true;
      }
    }
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page bg-atomic-noise">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={designTokensRefUI.breadcrumbs} centered />
          <span className="specimen-page__hero-badge">
            {designTokensRefUI.hero.badge}
          </span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {designTokensRefUI.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {designTokensRefUI.hero.description}
          </p>
        </div>
      </header>

      {/* Layout: Sidebar + Main */}
      <div className="tokens-ref__layout">
        {/* Sticky sidebar */}
        <nav className="tokens-ref__sidebar" aria-label="Token categories">
          <p className="tokens-ref__sidebar-title">Jump to</p>
          <ul className="tokens-ref__sidebar-list">
            {designTokensRefUI.sections.map((section) => (
              <li key={section.id}>
                <button
                  className="tokens-ref__sidebar-link"
                  onClick={() => scrollTo(section.id)}
                >
                  {section.title}
                  <span className="tokens-ref__section-count">
                    {' '}({section.tokens.length})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main content */}
        <div className="tokens-ref__main">
          {designTokensRefUI.sections.map((section) => {
            const isColorGrid =
              COLOR_SECTIONS.has(section.id) || section.id === GRADIENT_SECTION;

            return (
              <details
                key={section.id}
                id={`section-${section.id}`}
                className="tokens-ref__section"
                open
              >
                <summary className="tokens-ref__section-header">
                  <ChevronRight
                    className="tokens-ref__section-chevron"
                    aria-hidden="true"
                  />
                  <span className="tokens-ref__section-title">
                    {section.title}
                  </span>
                  <span className="tokens-ref__section-count">
                    {section.tokens.length} tokens
                  </span>
                </summary>

                <p className="tokens-ref__section-desc">{section.description}</p>

                <div
                  className={`tokens-ref__grid${
                    isColorGrid ? ' tokens-ref__grid--colors' : ''
                  }${
                    section.id === GRADIENT_SECTION
                      ? ' tokens-ref__grid--gradients'
                      : ''
                  }`}
                >
                  {section.tokens.map((t) => (
                    <div
                      key={t.token}
                      className={`tokens-ref__entry${
                        isColorGrid ? ' tokens-ref__entry--color' : ''
                      }${
                        section.id === GRADIENT_SECTION
                          ? ' tokens-ref__entry--gradient'
                          : ''
                      }`}
                    >
                      {renderSwatch(section.id, t.token, t.value)}
                      <div className="tokens-ref__info">
                        <span className="tokens-ref__token-label">
                          {t.label}
                        </span>
                        <code className="tokens-ref__token-name">
                          {t.token}
                        </code>
                        <span className="tokens-ref__token-value">
                          {t.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </main>
  );
}