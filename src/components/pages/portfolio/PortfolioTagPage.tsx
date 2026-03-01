/**
 * @fileoverview Portfolio tag archive page
 * Displays portfolio entries filtered by tag
 *
 * @component PortfolioTagPage
 * @version 2.0.0 - Proper BEM taxonomy archive styling
 */

import React, { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import { Image, Layers, Tag } from '../../../lib/icons';
import { UNIFIED_PORTFOLIO_DATA, PORTFOLIO_CATEGORIES } from '../../../utils/portfolioService';
import {
  portfolioTagData,
  findPortfolioTagBySlug,
} from '../../../data/mock/portfolio/tags';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/portfolio-main-page.css';
import '../../../styles/blocks/portfolio-card.css';
import '../../../styles/blocks/archive-filters.css';

import { setSEO } from '../../../utils/seo';
import { portfolioTagSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';

import { portfolioTagBreadcrumbs } from "../../../data/mock/ui/breadcrumbs";
import { emptyStateMessages } from "../../../data/mock/ui/error";

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'featured', label: 'Featured' },
];

export function PortfolioTagPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const tag = findPortfolioTagBySlug(slug ? slug : '');
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    if (tag) {
      setSEO(portfolioTagSEO(tag.name));
      const entryCount = filteredEntries ? filteredEntries.length : 0;
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        `${tag.name} | Portfolio`,
        portfolioTagSEO(tag.name).description,
        `/portfolio/tag/${slug}`,
        entryCount,
      ));
    }
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [tag, slug]);

  const filteredEntries = useMemo(() => {
    const tagName = tag ? tag.name : (slug ? slug : '');
    let entries = UNIFIED_PORTFOLIO_DATA.filter(entry => {
      const entryTags = entry.tags ? entry.tags : [];
      return entryTags.some(
        t => t.toLowerCase() === tagName.toLowerCase(),
      );
    });

    switch (sortBy) {
      case 'recent':
        entries.sort((a, b) => {
          const da = a.date ? new Date(a.date).getTime() : 0;
          const db = b.date ? new Date(b.date).getTime() : 0;
          return db - da;
        });
        break;
      case 'alphabetical':
        entries.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        entries.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return entries;
  }, [tag, slug, sortBy]);

  /** Related tags from the matching entries */
  const relatedTags = useMemo(() => {
    const tagSet = new Set();
    const currentTagName = tag ? tag.name : '';
    filteredEntries.forEach(e => {
      const eTags = e.tags ? e.tags : [];
      eTags.forEach(t => {
        if (t.toLowerCase() !== currentTagName.toLowerCase()) {
          tagSet.add(t);
        }
      });
    });
    return Array.from(tagSet).slice(0, 8);
  }, [filteredEntries, tag]);

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="portfolio-main bg-atomic-noise"
    >
      {/* ── Hero header ── */}
      <div className="portfolio-main__header">
        <div className="container-7xl">
          <Breadcrumbs items={portfolioTagBreadcrumbs(tag ? tag.name : (slug ? slug : ''))} centered />
          <Tag className="portfolio-main__header-icon" aria-hidden="true" />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {tag ? tag.name : slug}
          </h1>
          {tag && tag.description && (
            <p className="text-body-guideline">{tag.description}</p>
          )}
          <p className="portfolio-main__count">
            <strong>{filteredEntries.length}</strong>{' '}
            {filteredEntries.length === 1 ? 'entry' : 'entries'}
          </p>
        </div>
      </div>

      {/* ── Content area ── */}
      <div className="container-7xl py-fluid-lg">

        {/* Sort & related tags toolbar */}
        <div className="portfolio-main__toolbar">
          {/* Sort pills */}
          <div className="portfolio-main__sort-chips" role="group" aria-label="Sort portfolio entries">
            <span className="portfolio-main__sort-label">Sort by</span>
            {SORT_OPTIONS.map(opt => (
              <button
                type="button"
                key={opt.value}
                className={`archive-filters__chip ${sortBy === opt.value ? 'archive-filters__chip--active' : ''}`}
                onClick={() => setSortBy(opt.value)}
                aria-pressed={sortBy === opt.value}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Related tags */}
          {relatedTags.length > 0 && (
            <div className="portfolio-main__related-tags">
              <span className="portfolio-main__related-label">Related tags</span>
              <div className="portfolio-main__related-chips">
                {relatedTags.map(rt => (
                  <button
                    type="button"
                    key={rt}
                    className="archive-filters__chip"
                    onClick={() =>
                      navigate(
                        `/portfolio/tag/${rt.toLowerCase().replace(/\s+/g, '-')}`,
                      )
                    }
                  >
                    {rt}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <hr className="portfolio-main__divider" aria-hidden="true" />

        {/* Card grid */}
        {filteredEntries.length > 0 ? (
          <div className="portfolio-card-grid">
            {filteredEntries.map(entry => (
              <article
                key={entry.id}
                className="portfolio-card"
                onClick={() => navigate(`/portfolio/${entry.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/portfolio/${entry.id}`);
                  }
                }}
                aria-label={entry.title}
              >
                <div className="portfolio-card__image-container">
                  {entry.images[0] ? (
                    <OptimizedImage
                      src={entry.images[0].src}
                      alt={entry.images[0].alt}
                      className="portfolio-card__image"
                      preset="thumbnail"
                    />
                  ) : (
                    <div className="portfolio-card__placeholder">
                      <Image className="icon-xl" />
                    </div>
                  )}
                  <div className="portfolio-card__overlay">
                    <a
                      href={(() => {
                        const cat = PORTFOLIO_CATEGORIES.find(c => c.id === entry.category);
                        return cat && cat.slug ? `/portfolio/category/${cat.slug}` : '/portfolio';
                      })()}
                      className="portfolio-card__category clickable"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        const cat = PORTFOLIO_CATEGORIES.find(c => c.id === entry.category);
                        if (cat && cat.slug) {
                          navigate(`/portfolio/category/${cat.slug}`);
                        }
                      }}
                      aria-label={`View all ${entry.category} portfolio entries`}
                    >
                      {entry.category}
                    </a>
                  </div>
                </div>
                <div className="portfolio-card__content">
                  <h2 className="portfolio-card__title">{entry.title}</h2>
                  <p className="portfolio-card__subtitle">{entry.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="error-card">
            <Layers className="icon-xl" aria-hidden="true" />
            <h3 className="error-title">{emptyStateMessages.portfolio.title}</h3>
            <p className="error-message">
              No portfolio entries match the tag &ldquo;{tag ? tag.name : slug}&rdquo;.
            </p>
          </div>
        )}
      </div>

      <FaqSection pageId="portfolio" />
    </main>
  );
}