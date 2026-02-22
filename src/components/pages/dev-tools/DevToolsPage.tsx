/**
 * @fileoverview Developer Tools landing page
 *
 * Hub page linking to all internal development tools and references —
 * 23 sub-tools organised into 4 category groups: Design Specimens,
 * Reference & Documentation, Builders & Playground, Testing & Deployment.
 *
 * Features:
 * - Sticky jump-nav for quick category scrolling
 * - Category-specific neon accent colours on dividers and icon wrappers
 * - Responsive 1→2→3→4 column grid
 *
 * @component DevToolsPage
 * @version 6.0.0 — sticky jump-nav + accent colours
 */

import React, { useCallback, useEffect, useMemo } from 'react';
import { useNavigate } from '../../../lib/router';
import {
  Palette,
  Type,
  Ruler,
  Cloud,
  Circle,
  MousePointerClick,
  LayoutGrid,
  Zap,
  Sparkles,
  Shield,
  Gauge,
  ArrowRight,
  Lightbulb,
  Bookmark,
  FileCode,
  Activity,
  Rocket,
  Layers,
  Scissors,
  FileText,
  Eye,
} from 'lucide-react';
import { devToolsPageUI } from '../../../data/mock/ui/dev-tools';
import type { DevTool } from '../../../data/mock/ui/dev-tools';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/dev-tools-page.css';

/** Map tool icon strings to Lucide components */
const TOOL_ICONS: Record<string, React.ElementType> = {
  Palette,
  Type,
  Ruler,
  Cloud,
  Circle,
  MousePointerClick,
  LayoutGrid,
  Zap,
  Sparkles,
  Shield,
  Gauge,
  Lightbulb,
  Bookmark,
  FileCode,
  Activity,
  Rocket,
  Layers,
  Scissors,
  FileText,
  Eye,
};

/** Build a lookup map from the flat tools array */
function useToolMap(): Map<string, DevTool> {
  return useMemo(() => {
    const map = new Map<string, DevTool>();
    for (const tool of devToolsPageUI.tools) {
      map.set(tool.id, tool);
    }
    return map;
  }, []);
}

export function DevToolsPage() {
  const navigate = useNavigate();
  const toolMap = useToolMap();

  useEffect(() => {
    setSEO(devToolsSEO.hub);
  }, []);

  /** Smooth-scroll to a category section */
  const scrollToCategory = useCallback((categoryId: string) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById(`category-${categoryId}`);
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    }
  }, []);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="dev-tools-page bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="dev-tools-page__hero">
        <div className="dev-tools-page__hero-content">
          <Breadcrumbs items={devToolsPageUI.breadcrumbs} centered />

          <span className="dev-tools-page__hero-badge">
            {devToolsPageUI.hero.badge}
          </span>

          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {devToolsPageUI.hero.title}
          </h1>

          <p className="dev-tools-page__hero-desc text-body-p">
            {devToolsPageUI.hero.description}
          </p>
        </div>
      </header>

      {/* ── Sticky Category Jump-Nav ── */}
      <nav
        className="dev-tools-jumpnav"
        aria-label="Jump to category"
      >
        <div className="dev-tools-jumpnav__inner">
          {devToolsPageUI.categories.map((category) => (
            <button
              key={category.id}
              className={`dev-tools-jumpnav__pill dev-tools-jumpnav__pill--${category.accent}`}
              onClick={() => scrollToCategory(category.id)}
              aria-label={`Jump to ${category.title}`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </nav>

      {/* ── Grouped Categories ── */}
      <div className="dev-tools-page__categories">
        {devToolsPageUI.categories.map((category) => {
          const resolvedTools = category.tools
            .map((id) => toolMap.get(id))
            .filter((t): t is DevTool => Boolean(t));

          return (
            <section
              key={category.id}
              className={`dev-tools-category dev-tools-category--${category.accent}`}
              id={`category-${category.id}`}
              aria-labelledby={`category-heading-${category.id}`}
            >
              <div className="dev-tools-category__header">
                <h2
                  id={`category-heading-${category.id}`}
                  className="dev-tools-category__title"
                >
                  {category.title}
                </h2>
                <p className="dev-tools-category__desc">
                  {category.description}
                </p>
              </div>

              <div className="dev-tools-category__grid">
                {resolvedTools.map((tool) => {
                  const Icon = TOOL_ICONS[tool.icon] || Palette;

                  return (
                    <button
                      key={tool.id}
                      className={`dev-tools-card dev-tools-card--${category.accent}`}
                      onClick={() => navigate(tool.href)}
                      aria-label={`Open ${tool.title}`}
                    >
                      <div className="dev-tools-card__header">
                        <div className="dev-tools-card__icon-wrapper">
                          <Icon
                            className="dev-tools-card__icon"
                            aria-hidden="true"
                          />
                        </div>
                        <h3 className="dev-tools-card__title">{tool.title}</h3>
                      </div>

                      <span className="dev-tools-card__badge">
                        {tool.badge}
                      </span>

                      <p className="dev-tools-card__desc">{tool.description}</p>

                      <span className="dev-tools-card__cta" aria-hidden="true">
                        Explore
                        <ArrowRight
                          className="dev-tools-card__cta-icon"
                          aria-hidden="true"
                        />
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}