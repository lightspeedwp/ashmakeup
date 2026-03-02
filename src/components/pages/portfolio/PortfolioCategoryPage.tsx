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
  const { slug } = useParams();
  const navigate = useNavigate();

  const category = PORTFOLIO_CATEGORIES.find(function (c) { return c.slug === slug; });
  const catData = portfolioCategoryData.find(function (c) { return c.slug === slug; });

  const activeCategoriesInit: string[] = slug ? [slug] : [];
  const [activeCategories, setActiveCategories] = useState(activeCategoriesInit);
  const [sortBy, setSortBy] = useState('recent');

  useEffect(function () {
    if (category) {
      setSEO(portfolioCategorySEO(category.name));
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        category.name + ' | Portfolio',
        portfolioCategorySEO(category.name).description,
        '/portfolio/category/' + slug,
        filteredEntries ? filteredEntries.length : 0,
      ));
    }
    return function () {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [category, slug]);

  var categories = useMemo(
    function () {
      return PORTFOLIO_CATEGORIES.filter(function (c) { return c.id !== 'all'; }).map(function (c) {
        return {
          id: c.id,
          name: c.name,
          slug: c.slug,
          count: getPortfolioCategoryCount(c.id),
        };
      }).filter(function (c) { return c.count > 0; });
    },
    [],
  );

  var filteredEntries = useMemo(function () {
    var entries = [];
    for (var i = 0; i < UNIFIED_PORTFOLIO_DATA.length; i++) {
      entries.push(UNIFIED_PORTFOLIO_DATA[i]);
    }

    if (activeCategories.length > 0) {
      var activeCat = PORTFOLIO_CATEGORIES.find(
        function (c) { return c.slug === activeCategories[0]; },
      );
      if (activeCat && activeCat.id !== 'all') {
        entries = entries.filter(function (e) { return e.category === activeCat.id; });
      }
    }

    switch (sortBy) {
      case 'recent':
        entries.sort(function (a, b) {
          var da = a.date ? new Date(a.date).getTime() : 0;
          var db = b.date ? new Date(b.date).getTime() : 0;
          return db - da;
        });
        break;
      case 'alphabetical':
        entries.sort(function (a, b) { return a.title.localeCompare(b.title); });
        break;
      case 'featured':
        entries.sort(function (a, b) { return (b.featured ? 1 : 0) - (a.featured ? 1 : 0); });
        break;
    }

    return entries;
  }, [activeCategories, sortBy]);

  useEffect(function () {
    setActiveCategories(slug ? [slug] : []);
  }, [slug]);

  var handleCategoryToggle = useCallback(
    function (catSlug: string) {
      var isActive = activeCategories.indexOf(catSlug) !== -1;
      var newCategories = isActive
        ? activeCategories.filter(function (s) { return s !== catSlug; })
        : [catSlug];

      setActiveCategories(newCategories);

      if (newCategories.length === 0) {
        navigate('/portfolio');
      } else {
        navigate('/portfolio/category/' + catSlug);
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
      <div className="portfolio-main__header section-spacing px-horizontal-section">
        <div className="container-wide section-container">
          <Breadcrumbs items={portfolioCategoryBreadcrumbs(category ? category.name : 'Category')} centered />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-0">
            {category ? category.name : 'Portfolio'}
          </h1>
          {catData && catData.description ? (
            <p className="text-body-guideline mb-0">{catData.description}</p>
          ) : null}
        </div>
      </div>

      <div className="portfolio-main-content section-spacing px-horizontal-section">
        <div className="container-wide section-container">
          <ArchiveFilters
            contentType="portfolio"
            categories={categories}
            activeCategories={activeCategories}
            sortBy={sortBy}
            sortOptions={SORT_OPTIONS}
            resultCount={filteredEntries.length}
            onCategoryToggle={handleCategoryToggle}
            onSortChange={setSortBy}
            onClearAll={function () {
              setActiveCategories([]);
              navigate('/portfolio');
            }}
          />

        {filteredEntries.length > 0 ? (
          <div className="portfolio-card-grid">
            {filteredEntries.map(function (entry) {
              return (
                <article
                  key={entry.id}
                  className="portfolio-card"
                  onClick={function () {
                    navigate('/portfolio/' + entry.id);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      navigate('/portfolio/' + entry.id);
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
                        href={(function () {
                          var cat = PORTFOLIO_CATEGORIES.find(function (c) { return c.id === entry.category; });
                          return cat && cat.slug ? '/portfolio/category/' + cat.slug : '/portfolio';
                        })()}
                        className="portfolio-card__category clickable"
                        onClick={function (e) {
                          e.stopPropagation();
                          e.preventDefault();
                          var cat = PORTFOLIO_CATEGORIES.find(function (c) { return c.id === entry.category; });
                          if (cat && cat.slug) {
                            navigate('/portfolio/category/' + cat.slug);
                          }
                        }}
                        aria-label={'View all ' + entry.category + ' portfolio entries'}
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
              );
            })}
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
      </div>

      <FaqSection pageId="portfolio" />
    </main>
  );
}