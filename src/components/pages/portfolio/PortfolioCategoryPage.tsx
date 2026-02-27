/**
 * @fileoverview Portfolio category archive page
 * Displays portfolio entries filtered by category with ArchiveFilters
 *
 * @component PortfolioCategoryPage
 * @version 1.0.0
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import { Image, Layers } from '../../../lib/icons';
import {
  PORTFOLIO_CATEGORIES,
  UNIFIED_PORTFOLIO_DATA,
} from '../../../utils/portfolioService';
import { portfolioCategoryData } from '../../../data/mock/portfolio/categories';
import { ArchiveFilters } from '../../ui/ArchiveFilters';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { getPortfolioCategoryCount } from '../../../utils/contentCounts';
import '../../../styles/blocks/portfolio-main-page.css';
import '../../../styles/blocks/portfolio-card.css';

import { setSEO } from '../../../utils/seo';
import { portfolioCategorySEO } from '../../../data/mock/seo';
import { portfolioCategoryBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import { emptyStateMessages } from '../../../data/mock/ui/error';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'featured', label: 'Featured' },
];

export function PortfolioCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const category = PORTFOLIO_CATEGORIES.find(c => c.slug === slug);
  const catData = portfolioCategoryData.find(c => c.slug === slug);

  const [activeCategories, setActiveCategories] = useState<string[]>(
    slug ? [slug] : [],
  );
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    if (category) {
      setSEO(portfolioCategorySEO(category.name));
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        `${category.name} | Portfolio`,
        portfolioCategorySEO(category.name).description,
        `/portfolio/category/${slug}`,
        filteredEntries ? filteredEntries.length : 0,
      ));
    }
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [category, slug]);

  const categories = useMemo(
    () =>
      PORTFOLIO_CATEGORIES.filter(c => c.id !== 'all').map(c => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        count: getPortfolioCategoryCount(c.id),
      })).filter(c => c.count > 0),
    [],
  );

  const filteredEntries = useMemo(() => {
    let entries = [...UNIFIED_PORTFOLIO_DATA];

    if (activeCategories.length > 0) {
      const activeCat = PORTFOLIO_CATEGORIES.find(
        c => c.slug === activeCategories[0],
      );
      if (activeCat && activeCat.id !== 'all') {
        entries = entries.filter(e => e.category === activeCat.id);
      }
    }

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
  }, [activeCategories, sortBy]);

  useEffect(() => {
    setActiveCategories(slug ? [slug] : []);
  }, [slug]);

  const handleCategoryToggle = useCallback(
    (catSlug: string) => {
      const isActive = activeCategories.includes(catSlug);
      const newCategories = isActive
        ? activeCategories.filter(s => s !== catSlug)
        : [catSlug];

      setActiveCategories(newCategories);

      if (newCategories.length === 0) {
        navigate('/portfolio');
      } else {
        navigate(`/portfolio/category/${catSlug}`);
      }
    },
    [navigate, activeCategories],
  );

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="portfolio-main bg-atomic-noise"
    >
      <div className="portfolio-main__header">
        <div className="container-7xl">
          <Breadcrumbs items={portfolioCategoryBreadcrumbs(category ? category.name : 'Category')} centered />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {category ? category.name : 'Portfolio'}
          </h1>
          {catData && catData.description ? (
            <p className="text-body-guideline">{catData.description}</p>
          ) : null}
        </div>
      </div>

      <div className="container-7xl py-fluid-lg">
        <ArchiveFilters
          contentType="portfolio"
          categories={categories}
          activeCategories={activeCategories}
          sortBy={sortBy}
          sortOptions={SORT_OPTIONS}
          resultCount={filteredEntries.length}
          onCategoryToggle={handleCategoryToggle}
          onSortChange={setSortBy}
          onClearAll={() => {
            setActiveCategories([]);
            navigate('/portfolio');
          }}
        />

        {filteredEntries.length > 0 ? (
          <div className="portfolio-card-grid">
            {filteredEntries.map(entry => (
              <article
                key={entry.id}
                className="portfolio-card"
                onClick={() =>
                  navigate(`/portfolio/${entry.id}`)
                }
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
              No portfolio entries match the current filters.
            </p>
          </div>
        )}
      </div>

      <FaqSection pageId="portfolio" />
    </main>
  );
}