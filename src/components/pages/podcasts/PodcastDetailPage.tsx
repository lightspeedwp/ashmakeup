/**
 * @fileoverview Single podcast episode detail page
 * Audio player, rich markdown show notes, clickable category, tags + sharing footer
 *
 * @component PodcastDetailPage
 * @version 2.0.0 - Rich text styling + tags/share layout
 */

import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import {
  ArrowLeft,
  Calendar,
  Clock,
  PlayCircle,
  Mic,
  Tag,
  Share2,
} from 'lucide-react';
import { podcastEpisodes } from '../../../data/mock/podcasts/episodes';
import { podcastCategories } from '../../../data/mock/podcasts/categories';
import { podcastsUI } from '../../../data/mock/ui/podcasts';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { ShareComponent } from '../../ui/ShareComponent';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { formatDate } from '../../../utils/formatDate';
import { markdownToHtml } from '../../../utils/simpleMarkdown';
import { setSEO } from '../../../utils/seo';
import { pageSEO, podcastSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildPodcastEpisodeSchema,
} from '../../../utils/schemaService';
import '../../../styles/blocks/podcasts-page.css';
import '../../../styles/blocks/portfolio-detail-page.css';
import '../../../styles/blocks/blog-page.css';

export function PodcastDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isPlaying, setIsPlaying] = useState(false);

  const episode = useMemo(
    () => podcastEpisodes.find(ep => ep.slug === slug),
    [slug],
  );

  useEffect(() => {
    if (episode) {
      setSEO(podcastSEO(episode.title, episode.description));
      injectSchema(SCHEMA_IDS.podcast, buildPodcastEpisodeSchema(episode));
    } else {
      setSEO(pageSEO.notFound);
    }
    return () => {
      removeSchema(SCHEMA_IDS.podcast);
    };
  }, [episode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  /** Resolve category slug for the link */
  const categorySlug = useMemo(() => {
    if (!episode) return '';
    const cat = podcastCategories.find(
      c => c.name.toLowerCase() === episode.category.toLowerCase(),
    );
    return cat?.slug ?? episode.category.toLowerCase().replace(/\s+/g, '-');
  }, [episode]);

  if (!episode) {
    return (
      <main id="main-content" role="main" tabIndex={-1} className="podcast-detail">
        <div className="podcast-detail__header">
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            Episode Not Found
          </h1>
          <p className="text-body-guideline">
            This podcast episode could not be found.
          </p>
          <button
            type="button"
            className="podcast-detail__back"
            onClick={() => navigate('/podcasts')}
          >
            <ArrowLeft className="icon-sm" />
            {podcastsUI.detail.backLabel}
          </button>
        </div>
      </main>
    );
  }

  /** Parse markdown show notes once */
  const htmlContent = episode.content ? markdownToHtml(episode.content) : '';

  return (
    <main id="main-content" role="main" tabIndex={-1} className="podcast-detail bg-atomic-noise">
      {/* Header */}
      <div className="podcast-detail__header">
        <Breadcrumbs items={podcastDetailBreadcrumbs(episode.title)} centered />
        <button
          type="button"
          className="podcast-detail__back"
          onClick={() => navigate('/podcasts')}
        >
          <ArrowLeft className="icon-sm" />
          {podcastsUI.detail.backLabel}
        </button>

        <div className="podcast-detail__cover">
          <OptimizedImage
            src={episode.coverImage.src}
            alt={episode.coverImage.alt}
            preset="gallery"
          />
        </div>

        {/* Clickable Category */}
        <button
          type="button"
          className="podcast-detail__category-link"
          onClick={() => navigate(`/podcasts/category/${categorySlug}`)}
        >
          {episode.category}
        </button>

        <h1 className="text-section-h2">{episode.title}</h1>

        <div className="podcast-detail__meta">
          <span className="podcast-detail__meta-item">
            <Mic className="icon-xs" aria-hidden="true" />
            {podcastsUI.detail.episodeLabel} {episode.episodeNumber}
            {episode.seasonNumber && (
              <> &middot; {podcastsUI.detail.seasonLabel} {episode.seasonNumber}</>
            )}
          </span>
          <time dateTime={episode.publishedAt} className="podcast-detail__meta-item">
            <Calendar className="icon-xs" aria-hidden="true" />
            {formatDate(episode.publishedAt)}
          </time>
          <span className="podcast-detail__meta-item">
            <Clock className="icon-xs" aria-hidden="true" />
            {episode.duration}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="podcast-detail__body">
        {/* Audio Player */}
        <div className="audio-player" role="region" aria-label="Audio player">
          <button
            type="button"
            className="audio-player__play-btn"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <PlayCircle className="icon-lg" />
          </button>
          <div className="audio-player__progress">
            <div className="audio-player__bar">
              <div
                className="audio-player__bar-fill"
                style={{ width: isPlaying ? '35%' : '0%' }}
              />
            </div>
            <div className="audio-player__time">
              <span>{isPlaying ? '6:32' : '0:00'}</span>
              <span>{episode.duration}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-body-guideline">{episode.description}</p>

        {/* Show Notes — rich markdown */}
        <section aria-labelledby="show-notes-heading">
          <h2 id="show-notes-heading" className="text-card-h3">
            {podcastsUI.detail.showNotesLabel}
          </h2>
          <div
            className="podcast-rich-text"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </section>

        {/* Guests */}
        {episode.guests && episode.guests.length > 0 && (
          <section aria-labelledby="guests-heading">
            <h2 id="guests-heading" className="text-card-h3">
              {podcastsUI.detail.guestsLabel}
            </h2>
            {episode.guests.map((guest, idx) => (
              <p key={idx} className="text-body-p">
                <strong>{guest.name}</strong> — {guest.role}
              </p>
            ))}
          </section>
        )}

        {/* ── Tags + Share Footer ── */}
        <section className="podcast-detail__footer">
          <div className="tags-share-container">

            {/* Tags Section */}
            <div className="tags-section">
              <div className="section-label mb-fluid-sm">
                <Tag className="icon-sm text-neon-purple" />
                <span>Tags:</span>
              </div>

              {episode.tags && episode.tags.length > 0 ? (
                <div className="tags-list">
                  {episode.tags.map(tag => (
                    <button
                      type="button"
                      key={tag}
                      onClick={() =>
                        navigate(`/podcasts/tag/${encodeURIComponent(tag.toLowerCase().replace(/\s+/g, '-'))}`)
                      }
                      className="tag-badge clickable"
                      aria-label={`View podcasts tagged ${tag}`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              ) : (
                <p className="no-tags-text">No tags available</p>
              )}
            </div>

            {/* Share Section */}
            <div className="share-section">
              <div className="section-label mb-fluid-sm">
                <Share2 className="icon-sm text-neon-purple" />
                <span>Share this:</span>
              </div>
              <div className="share-buttons">
                <ShareComponent
                  label=""
                  title={episode.title}
                  description={episode.description}
                  url={typeof window !== 'undefined' ? window.location.href : `https://ashshaw.makeup/podcast/${slug}`}
                  imageUrl={episode.coverImage.src}
                  variant="inline"
                  align="left"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Per-item FAQs — shown only if the episode has item-level FAQs */}
      {episode.faqs && episode.faqs.length > 0 && (
        <FaqSection items={episode.faqs} />
      )}

      {/* Page FAQ */}
      <FaqSection pageId="podcasts" />
    </main>
  );
}