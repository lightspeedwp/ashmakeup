/**
 * @fileoverview Podcast archive page
 * Lists all podcast episodes with category filtering
 *
 * @component PodcastsPage
 * @version 1.0.0
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useNavigate, useSearchParams } from '../../../lib/router';
import { Calendar, Clock, PlayCircle, Mic } from 'lucide-react';
import { podcastEpisodes } from '../../../data/mock/podcasts/episodes';
import { podcastCategories } from '../../../data/mock/podcasts/categories';
import { podcastsUI } from '../../../data/mock/ui/podcasts';
import { ArchiveFilters } from '../../ui/ArchiveFilters';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { formatDate } from '../../../utils/formatDate';
import { getPodcastCategoryCount } from '../../../utils/contentCounts';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';
import '../../../styles/blocks/podcasts-page.css';

const SORT_OPTIONS = podcastsUI.archive.sortOptions;

export function PodcastsPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recent');

  /** Seed activeCategories from ?category= query param on mount */
  useEffect(() => {
    // Only set initial state if we are truly mounting/param changed,
    // though navigating to this page usually means empty state.
    const catParam = searchParams.get('category');
    if (catParam) {
      // If we support query params, we should navigate to the route.
      navigate(`/podcasts/category/${catParam}`, { replace: true });
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    setSEO(pageSEO.podcasts);
    injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
      'Podcasts | Neon vs Atomic Black',
      pageSEO.podcasts.description,
      '/podcasts',
      podcastEpisodes.length,
    ));
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, []);

  const categories = useMemo(
    () =>
      podcastCategories.map(c => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        count: getPodcastCategoryCount(c.name),
      })),
    [],
  );

  const filteredEpisodes = useMemo(() => {
    let eps = [...podcastEpisodes];

    if (activeCategories.length > 0) {
      eps = eps.filter(ep =>
        activeCategories.some(
          slug =>
            ep.category.toLowerCase() ===
            (podcastCategories.find(c => c.slug === slug)?.name ?? slug).toLowerCase(),
        ),
      );
    }

    switch (sortBy) {
      case 'recent':
        eps.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
        );
        break;
      case 'alphabetical':
        eps.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        eps.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return eps;
  }, [activeCategories, sortBy]);

  const handleCategoryToggle = useCallback((slug: string) => {
    // Navigate to the category page. The PodcastCategoryPage will handle the filtering state.
    navigate(`/podcasts/category/${slug}`);
  }, [navigate]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="podcasts-archive bg-atomic-noise">
      {/* Header */}
      <div className="podcasts-archive__header">
        <Mic className="icon-xl" aria-hidden="true" />
        <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
          {podcastsUI.archive.title}
        </h1>
        <p className="text-body-guideline">
          {podcastsUI.archive.description}
        </p>
      </div>

      {/* Content */}
      <div className="container-7xl py-fluid-lg">
        {/* Filters */}
        <ArchiveFilters
          contentType="podcast"
          categories={categories}
          activeCategories={activeCategories}
          sortBy={sortBy}
          sortOptions={SORT_OPTIONS}
          resultCount={filteredEpisodes.length}
          onCategoryToggle={handleCategoryToggle}
          onSortChange={setSortBy}
          onClearAll={() => {
            setActiveCategories([]);
            setSortBy('recent');
          }}
        />

        {/* Episode Grid */}
        {filteredEpisodes.length > 0 ? (
          <div className="podcasts-archive__grid">
            {filteredEpisodes.map(ep => (
              <article
                key={ep.id}
                className="podcast-card"
                onClick={() => navigate(`/podcast/${ep.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/podcast/${ep.slug}`);
                  }
                }}
                aria-label={`${ep.title} — Episode ${ep.episodeNumber}`}
              >
                <div className="podcast-card__image-wrap">
                  <OptimizedImage
                    src={ep.coverImage.src}
                    alt={ep.coverImage.alt}
                    className="podcast-card__image"
                    preset="content"
                  />
                  <div className="podcast-card__play-overlay" aria-hidden="true">
                    <PlayCircle className="podcast-card__play-icon" />
                  </div>
                  <span className="podcast-card__episode-badge">
                    EP {ep.episodeNumber}
                  </span>
                </div>

                <div className="podcast-card__body">
                  <h2 className="podcast-card__title">{ep.title}</h2>
                  <p className="podcast-card__excerpt">{ep.description}</p>
                  <div className="podcast-card__meta">
                    <span className="podcast-card__category-chip">
                      {ep.category}
                    </span>
                    <time dateTime={ep.publishedAt}>
                      <Calendar className="icon-xs" aria-hidden="true" />{' '}
                      {formatDate(ep.publishedAt)}
                    </time>
                    <span>
                      <Clock className="icon-xs" aria-hidden="true" />{' '}
                      {ep.duration}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="error-card">
            <Mic className="icon-xl" aria-hidden="true" />
            <h3 className="error-title">{podcastsUI.archive.emptyState}</h3>
          </div>
        )}
      </div>

      <FaqSection pageId="podcasts" />
    </main>
  );
}