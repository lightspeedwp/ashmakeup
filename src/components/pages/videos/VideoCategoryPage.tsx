/**
 * @fileoverview Video category archive page
 * Displays videos filtered by category with ArchiveFilters
 *
 * @component VideoCategoryPage
 * @version 1.0.0
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import { Play } from '../../../lib/icons';
import { videos, videoCategories } from '../../../data/mock/videos';
import { videosUI } from '../../../data/mock/ui/videos';
import { ArchiveFilters } from '../../ui/ArchiveFilters';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { formatDate } from '../../../utils/formatDate';
import { getVideoCategoryCount } from '../../../utils/contentCounts';
import { setSEO } from '../../../utils/seo';
import { videoCategorySEO } from '../../../data/mock/seo';
import { videoCategoryBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';
import '../../../styles/blocks/videos-page.css';

// Import the video thumbnail image
import videoThumbnail from 'figma:asset/f0c4301e83be5c7dcfa724f611ca2ffcca9bf032.png';

const videoThumbnails: Record<string, string> = {
  'vid-1': videoThumbnail,
};

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'featured', label: 'Featured' },
];

export function VideoCategoryPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const category = videoCategories.find(c => c.slug === slug);
  const activeCategoriesInit: string[] = slug ? [slug] : [];
  const [activeCategories, setActiveCategories] = useState(activeCategoriesInit);
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    setActiveCategories(slug ? [slug] : []);
  }, [slug]);

  useEffect(() => {
    if (category) {
      setSEO(videoCategorySEO(category.name));
      const vidCount = filteredVideos ? filteredVideos.length : 0;
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        `${category.name} | Videos`,
        videoCategorySEO(category.name).description,
        `/videos/category/${slug}`,
        vidCount,
      ));
    }
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [category, slug]);

  const categories = useMemo(
    () =>
      videoCategories.map(c => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        count: getVideoCategoryCount(c.name),
      })).filter(c => c.count > 0),
    [],
  );

  const filteredVideos = useMemo(() => {
    let vids = [...videos];

    if (activeCategories.length > 0) {
      const activeCat = videoCategories.find(
        c => c.slug === activeCategories[0],
      );
      if (activeCat) {
        vids = vids.filter(
          v => v.category.toLowerCase() === activeCat.name.toLowerCase(),
        );
      }
    }

    switch (sortBy) {
      case 'recent':
        vids.sort(
          (a, b) =>
            new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
        );
        break;
      case 'alphabetical':
        vids.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        vids.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return vids;
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
        navigate('/videos');
      } else {
        navigate(`/videos/category/${catSlug}`);
      }
    },
    [navigate, activeCategories],
  );

  return (
    <main id="main-content" role="main" tabIndex={-1} className="videos-page bg-atomic-noise">
      <div className="videos-header">
        <div className="videos-header__content">
          <Breadcrumbs items={videoCategoryBreadcrumbs(category ? category.name : 'Category')} centered />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {category ? category.name : 'Videos'}
          </h1>
          {category && category.description && (
            <p className="text-body-guideline videos-header__description">
              {category.description}
            </p>
          )}
        </div>
      </div>

      <div className="container-7xl py-fluid-lg">
        <ArchiveFilters
          contentType="video"
          categories={categories}
          activeCategories={activeCategories}
          sortBy={sortBy}
          sortOptions={SORT_OPTIONS}
          resultCount={filteredVideos.length}
          onCategoryToggle={handleCategoryToggle}
          onSortChange={setSortBy}
          onClearAll={() => {
            setActiveCategories([]);
            navigate('/videos');
          }}
        />

        {filteredVideos.length > 0 ? (
          <div className="videos-grid">
            {filteredVideos.map(video => (
              <article
                key={video.id}
                className="video-card"
                onClick={() => navigate(`/video/${video.slug}`)}
                role="button"
                tabIndex={0}
                onKeyDown={e => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    navigate(`/video/${video.slug}`);
                  }
                }}
                aria-label={`Play video: ${video.title}`}
              >
                <div className="video-card__thumbnail-container">
                  <OptimizedImage
                    src={videoThumbnails[video.id] ? videoThumbnails[video.id] : video.thumbnailUrl}
                    alt={video.title}
                    className="video-card__thumbnail"
                    preset="thumbnail"
                  />
                  <div className="video-card__play-button">
                    <Play className="video-card__play-icon" />
                  </div>
                  <div className="video-card__duration">{video.duration}</div>
                </div>
                <div className="video-card__content">
                  <h3 className="video-card__title">{video.title}</h3>
                  <div className="video-card__meta">
                    <span>{video.category}</span>
                    <time dateTime={video.publishedAt}>{formatDate(video.publishedAt)}</time>
                  </div>
                  <p className="video-card__description">{video.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="error-card">
            <Play className="icon-xl" aria-hidden="true" />
            <h3 className="error-title">{videosUI.archive.emptyState}</h3>
          </div>
        )}
      </div>

      <FaqSection pageId="videos" />
    </main>
  );
}