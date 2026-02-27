/**
 * @fileoverview Video tag archive page
 * Displays videos filtered by tag, following the blog/portfolio tag page pattern
 *
 * @component VideoTagPage
 * @version 1.0.0
 */

import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import { Play, Tag } from '../../../lib/icons';
import { videos, findVideoTagBySlug } from '../../../data/mock/videos';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { formatDate } from '../../../utils/formatDate';
import { setSEO } from '../../../utils/seo';
import { videoTagSEO } from '../../../data/mock/seo';
import { videoTagBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import { emptyStateMessages } from '../../../data/mock/ui/error';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';
import '../../../styles/blocks/videos-page.css';
import '../../../styles/blocks/archive-filters.css';

// Placeholder video thumbnail
const videoThumbnail = "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&q=80";

const videoThumbnails: Record<string, string> = {
  'vid-1': videoThumbnail,
};

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'featured', label: 'Featured' },
];

export function VideoTagPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const tag = findVideoTagBySlug(slug ? slug : '');
  const [sortBy, setSortBy] = React.useState('recent');

  useEffect(() => {
    if (tag) {
      setSEO(videoTagSEO(tag.name));
      const vidCount = filteredVideos ? filteredVideos.length : 0;
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        `${tag.name} | Videos`,
        videoTagSEO(tag.name).description,
        `/videos/tag/${slug}`,
        vidCount,
      ));
    }
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [tag, slug]);

  const filteredVideos = useMemo(() => {
    if (!slug) return [];
    const tagName = tag ? tag.name : slug.replace(/-/g, ' ');
    let vids = videos.filter(v => {
      const vTags = v.tags ? v.tags : [];
      return vTags.some(t => t.toLowerCase() === tagName.toLowerCase());
    });

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
  }, [slug, tag, sortBy]);

  /** Related tags from the matching videos */
  const relatedTags = useMemo(() => {
    const tagSet = new Set();
    const currentTagName = tag ? tag.name : '';
    filteredVideos.forEach(v => {
      const vTags = v.tags ? v.tags : [];
      vTags.forEach(t => {
        if (t.toLowerCase() !== currentTagName.toLowerCase()) {
          tagSet.add(t);
        }
      });
    });
    return Array.from(tagSet).slice(0, 8);
  }, [filteredVideos, tag]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="videos-page bg-atomic-noise">
      {/* Header */}
      <div className="videos-header">
        <div className="videos-header__content">
          <Breadcrumbs items={videoTagBreadcrumbs(tag ? tag.name : (slug ? slug : ''))} centered />
          <Tag className="icon-xl" aria-hidden="true" />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {tag ? tag.name : slug}
          </h1>
          {tag && tag.description && (
            <p className="text-body-guideline">{tag.description}</p>
          )}
          <p className="text-body-p">
            {filteredVideos.length} video{filteredVideos.length === 1 ? '' : 's'}
          </p>
        </div>
      </div>

      <div className="container-7xl py-fluid-lg">
        {/* Sort pills */}
        <div className="archive-filters__sort">
          {SORT_OPTIONS.map(opt => (
            <button
              type="button"
              key={opt.value}
              className={`archive-filters__chip ${sortBy === opt.value ? 'archive-filters__chip--active' : ''}`}
              onClick={() => setSortBy(opt.value)}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Related tags */}
        {relatedTags.length > 0 && (
          <div className="archive-filters__categories">
            {relatedTags.map(rt => (
              <button
                type="button"
                key={rt}
                className="archive-filters__chip"
                onClick={() =>
                  navigate(
                    `/videos/tag/${rt.toLowerCase().replace(/\s+/g, '-')}`,
                  )
                }
              >
                {rt}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
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
            <h3 className="error-title">{emptyStateMessages.videos.title}</h3>
            <p className="error-message">
              No videos match the tag &ldquo;{tag ? tag.name : slug}&rdquo;.
            </p>
          </div>
        )}
      </div>

      <FaqSection pageId="videos" />
    </main>
  );
}