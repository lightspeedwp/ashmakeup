/**
 * @fileoverview Videos Page Component
 * 
 * Showcases makeup tutorials, behind-the-scenes, and showcase videos.
 * Features a neon/atomic aesthetic with a responsive grid layout.
 * Supports ?category= query param for pre-filtered views.
 *
 * @version 1.1.0 - Added category filtering via query params
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useSearchParams, useNavigate } from '../../../lib/router';
import { videos, videoCategories } from '../../../data/mock/videos';
import { videosUI } from '../../../data/mock/ui/videos';
import { filtersUI } from '../../../data/mock/ui/filters';
import { Video } from '../../../data/types/videos';
import { VideoModal } from './VideoModal';
import { Play, ArrowRight } from 'lucide-react';
import "../../../styles/blocks/videos-page.css";
import { OptimizedImage } from '../../ui/OptimizedImage';
import { ResponsiveGridSlider } from '../../ui/ResponsiveGridSlider';
import { ArchiveFilters } from '../../ui/ArchiveFilters';
import { FaqSection } from '../../sections/FaqSection';
import { formatDate } from '../../../utils/formatDate';
import { getVideoCategoryCount } from '../../../utils/contentCounts';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';

// Import the video thumbnail image
import videoThumbnail from 'figma:asset/f0c4301e83be5c7dcfa724f611ca2ffcca9bf032.png';

// Map video IDs to their imported thumbnail images
const videoThumbnails: Record<string, string> = {
  'vid-1': videoThumbnail,
};

const SORT_OPTIONS = videosUI.archive.sortOptions;

export function VideosPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategories, setActiveCategories] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('recent');

  /** Seed activeCategories from ?category= query param on mount */
  useEffect(() => {
    // Only set initial state if we are truly mounting/param changed,
    // though navigating to this page usually means empty state.
    const catParam = searchParams.get('category');
    if (catParam) {
      // If we support query params, we should navigate to the route.
      navigate(`/videos/category/${catParam}`, { replace: true });
    }
  }, [searchParams, navigate]);

  useEffect(() => {
    setSEO(pageSEO.videos);
    injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
      'Videos | Makeup Tutorials & Festival Art',
      pageSEO.videos.description,
      '/videos',
      videos.length,
    ));
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, []);

  const categories = useMemo(
    () =>
      videoCategories.map(c => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        count: getVideoCategoryCount(c.name),
      })),
    [],
  );

  const filteredVideos = useMemo(() => {
    let vids = [...videos];

    if (activeCategories.length > 0) {
      vids = vids.filter(v =>
        activeCategories.some(
          slug =>
            v.category.toLowerCase() ===
            (videoCategories.find(c => c.slug === slug)?.name ?? slug).toLowerCase(),
        ),
      );
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

  const handleCategoryToggle = useCallback((slug: string) => {
    navigate(`/videos/category/${slug}`);
  }, [navigate]);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Tiny delay to clear video after animation
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <main id="main-content" role="main" tabIndex={-1} className="videos-page bg-atomic-noise">
      <div className="videos-header">
        <div className="videos-header__content">
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-md">
            {videosUI.archive.title}
          </h1>
          <p className="text-body-guideline mb-fluid-lg videos-header__description">
            {videosUI.archive.description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="container-7xl py-fluid-lg">
        {/* Filters */}
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
            setSortBy('recent');
          }}
        />

        {/* Video Grid */}
        {filteredVideos.length > 0 ? (
          <section className="videos-grid-section">
            <ResponsiveGridSlider
              items={filteredVideos}
              keyExtractor={(video) => video.id}
              desktopColumns={3}
              renderItem={(video) => (
                <div 
                  className="video-card"
                  onClick={() => handleVideoClick(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleVideoClick(video);
                    }
                  }}
                  aria-label={`Play video: ${video.title}`}
                >
                  <div className="video-card__thumbnail-container">
                    <OptimizedImage 
                      src={videoThumbnails[video.id] || video.thumbnailUrl} 
                      alt={video.title} 
                      className="video-card__thumbnail"
                      preset="thumbnail"
                    />
                    <div className="video-card__play-button">
                      <Play className="video-card__play-icon" />
                    </div>
                    <div className="video-card__duration">
                      {video.duration}
                    </div>
                  </div>
                  <div className="video-card__content">
                    <h3 className="video-card__title">{video.title}</h3>
                    <div className="video-card__meta">
                      <span>{video.category}</span>
                      <time dateTime={video.publishedAt}>{formatDate(video.publishedAt)}</time>
                    </div>
                    <p className="video-card__description">{video.description}</p>
                    <button
                      type="button"
                      className="video-card__read-more"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/video/${video.slug}`);
                      }}
                      aria-label={`${filtersUI.readFullPost}: ${video.title}`}
                    >
                      {filtersUI.readFullPost}
                      <ArrowRight className="icon-xs" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              )}
            />
          </section>
        ) : (
          <div className="error-card">
            <Play className="icon-xl" aria-hidden="true" />
            <h3 className="error-title">{videosUI.archive.emptyState}</h3>
          </div>
        )}
      </div>

      <VideoModal 
        video={selectedVideo} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />

      <FaqSection pageId="videos" />
    </main>
  );
}