/**
 * @fileoverview Podcast category archive page
 * Displays podcast episodes filtered by category with ArchiveFilters
 *
 * @component PodcastCategoryPage
 * @version 1.0.0
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import { Calendar, Clock, Mic, PlayCircle } from 'lucide-react';
import { podcastEpisodes } from '../../../data/mock/podcasts/episodes';
import { podcastCategories } from '../../../data/mock/podcasts/categories';
import { podcastsUI } from '../../../data/mock/ui/podcasts';
import { ArchiveFilters } from '../../ui/ArchiveFilters';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { formatDate } from '../../../utils/formatDate';
import { getPodcastCategoryCount } from '../../../utils/contentCounts';
import { setSEO } from '../../../utils/seo';
import { podcastCategorySEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';
import '../../../styles/blocks/podcasts-page.css';

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'featured', label: 'Featured' },
];

export function PodcastCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const category = podcastCategories.find(c => c.slug === slug);
  const [activeCategories, setActiveCategories] = useState<string[]>(
    slug ? [slug] : [],
  );
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    setActiveCategories(slug ? [slug] : []);
  }, [slug]);

  useEffect(() => {
    if (category) {
      setSEO(podcastCategorySEO(category.name));
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        `${category.name} | Podcasts`,
        podcastCategorySEO(category.name).description,
        `/podcasts/category/${slug}`,
        filteredEpisodes?.length || 0,
      ));
    }
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [category, slug]);

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
      const activeCat = podcastCategories.find(
        c => c.slug === activeCategories[0],
      );
      if (activeCat) {
        eps = eps.filter(
          ep => ep.category.toLowerCase() === activeCat.name.toLowerCase(),
        );
      }
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

  const handleCategoryToggle = useCallback(
    (catSlug: string) => {
      const isActive = activeCategories.includes(catSlug);
      // Toggle logic: single select behavior implied by routing
      const newCategories = isActive 
        ? activeCategories.filter(s => s !== catSlug) 
        : [catSlug];

      setActiveCategories(newCategories);

      if (newCategories.length === 0) {
        navigate('/podcasts');
      } else {
        navigate(`/podcasts/category/${catSlug}`);
      }
    },
    [navigate, activeCategories],
  );

  return (
    <main id="main-content" role="main" tabIndex={-1} className="podcasts-archive bg-atomic-noise">
      {/* Header */}
      <div className="podcasts-archive__header">
        <Breadcrumbs items={podcastCategoryBreadcrumbs(category?.name ?? 'Category')} centered />
        <Mic className="icon-xl" aria-hidden="true" />
        <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
          {category?.name ?? 'Podcasts'}
        </h1>
        {category?.description && (
          <p className="text-body-guideline">{category.description}</p>
        )}
      </div>

      {/* Content */}
      <div className="container-7xl py-fluid-lg">
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
            navigate('/podcasts');
          }}
        />

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