/**
 * @fileoverview Feedback (testimonials) page
 * Displays all feedback items with filtering by portfolio category and tags.
 * Feedback items are tagged with portfolio taxonomy so they can appear
 * dynamically on relevant portfolio pages too.
 *
 * @component FeedbackPage
 * @version 1.0.0
 */

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import { Search, Star, MapPin, Calendar, Quote } from 'lucide-react';
import { feedbackItems } from '../../../data/mock/feedback';
import type { FeedbackItem } from '../../../data/mock/feedback';
import { feedbackPageUI } from '../../../data/mock/ui/feedback';
import { portfolioCategoryData } from '../../../data/mock/portfolio/categories';
import { portfolioTagData } from '../../../data/mock/portfolio/tags';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { FaqSection } from '../../sections/FaqSection';
import { formatDate } from '../../../utils/formatDate';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { feedbackBreadcrumbs } from "../../../data/mock/ui/breadcrumbs";
import '@/styles/blocks/feedback-page.css';

export function FeedbackPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTag, setActiveTag] = useState('all');

  useEffect(() => {
    setSEO(pageSEO.feedback);
  }, []);

  /** Category chips from portfolio categories */
  const categoryChips = useMemo(() =>
    portfolioCategoryData.map(c => ({
      id: c.slug,
      name: c.name,
      count: feedbackItems.filter(fb => fb.categorySlug === c.slug).length,
    })).filter(c => c.count > 0),
    []
  );

  /** Tag chips from portfolio tags — only those used in feedback */
  const tagChips = useMemo(() => {
    const usedTags = new Set(feedbackItems.flatMap(fb => fb.tags));
    return portfolioTagData
      .filter(t => usedTags.has(t.slug))
      .map(t => ({
        id: t.slug,
        name: t.name,
        count: feedbackItems.filter(fb => fb.tags.includes(t.slug)).length,
      }));
  }, []);

  /** Filtered feedback */
  const filtered = useMemo(() => {
    let result = [...feedbackItems];

    if (activeCategory !== 'all') {
      result = result.filter(fb => fb.categorySlug === activeCategory);
    }

    if (activeTag !== 'all') {
      result = result.filter(fb => fb.tags.includes(activeTag));
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(fb =>
        fb.quote.toLowerCase().includes(q) ||
        fb.name.toLowerCase().includes(q) ||
        fb.location.toLowerCase().includes(q) ||
        (fb.event && fb.event.toLowerCase().includes(q))
      );
    }

    // Featured first, then by date
    return result.sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    });
  }, [activeCategory, activeTag, searchQuery]);

  const handleCategoryChange = useCallback((slug: string) => {
    setActiveCategory(slug);
    setActiveTag('all');
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="feedback-page bg-atomic-noise">
      {/* Header */}
      <div className="feedback-page__header">
        <div className="feedback-page__header-content">
          <Breadcrumbs items={feedbackBreadcrumbs} centered />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-md">
            {feedbackPageUI.title}
          </h1>
          <p className="text-body-guideline mb-fluid-lg feedback-page__subtitle">
            {feedbackPageUI.subtitle}
          </p>
        </div>
      </div>

      <div className="container-7xl py-fluid-lg">
        {/* Controls */}
        <div className="feedback-page__controls">
          {/* Search */}
          <div className="feedback-page__search" role="search">
            <Search className="feedback-page__search-icon" aria-hidden="true" />
            <input
              type="text"
              className="feedback-page__search-input"
              placeholder={feedbackPageUI.searchPlaceholder}
              aria-label={feedbackPageUI.searchPlaceholder}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category chips */}
          <div className="feedback-page__filters">
            <span className="feedback-page__filter-label">Category:</span>
            <div className="feedback-page__chip-row">
              <button
                className={`feedback-page__chip ${activeCategory === 'all' ? 'feedback-page__chip--active' : ''}`}
                onClick={() => handleCategoryChange('all')}
                aria-pressed={activeCategory === 'all'}
              >
                {feedbackPageUI.allCategoriesLabel}
              </button>
              {categoryChips.map(cat => (
                <button
                  key={cat.id}
                  className={`feedback-page__chip ${activeCategory === cat.id ? 'feedback-page__chip--active' : ''}`}
                  onClick={() => handleCategoryChange(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                >
                  {cat.name}
                  <span className="feedback-page__chip-count">{cat.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tag chips */}
          <div className="feedback-page__filters">
            <span className="feedback-page__filter-label">Tags:</span>
            <div className="feedback-page__chip-row">
              <button
                className={`feedback-page__chip ${activeTag === 'all' ? 'feedback-page__chip--active' : ''}`}
                onClick={() => setActiveTag('all')}
                aria-pressed={activeTag === 'all'}
              >
                All
              </button>
              {tagChips.map(tag => (
                <button
                  key={tag.id}
                  className={`feedback-page__chip ${activeTag === tag.id ? 'feedback-page__chip--active' : ''}`}
                  onClick={() => setActiveTag(tag.id)}
                  aria-pressed={activeTag === tag.id}
                >
                  {tag.name}
                  <span className="feedback-page__chip-count">{tag.count}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Result count */}
          <p className="feedback-page__count" aria-live="polite">
            {feedbackPageUI.resultCount(filtered.length)}
          </p>
        </div>

        {/* Feedback cards */}
        {filtered.length > 0 ? (
          <div className="feedback-page__grid">
            {filtered.map(fb => (
              <FeedbackCard key={fb.id} feedback={fb} />
            ))}
          </div>
        ) : (
          <div className="feedback-page__empty">
            <Quote className="feedback-page__empty-icon" aria-hidden="true" />
            <p className="feedback-page__empty-text">{feedbackPageUI.noResults}</p>
          </div>
        )}
      </div>

      <FaqSection pageId="contact" />
    </main>
  );
}

/** Single feedback card */
function FeedbackCard({ feedback }: { feedback: FeedbackItem }) {
  return (
    <article className={`feedback-card${feedback.featured ? ' feedback-card--featured' : ''}`}>
      <div className="feedback-card__quote-mark" aria-hidden="true">
        <Quote className="feedback-card__quote-icon" />
      </div>

      <blockquote className="feedback-card__quote">
        {feedback.quote}
      </blockquote>

      <div className="feedback-card__rating" aria-label={`${feedback.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`feedback-card__star ${i < feedback.rating ? 'feedback-card__star--filled' : ''}`}
          />
        ))}
      </div>

      <div className="feedback-card__footer">
        <div className="feedback-card__author">
          <span className="feedback-card__name">{feedback.name}</span>
          <span className="feedback-card__location">
            <MapPin className="feedback-card__meta-icon" aria-hidden="true" />
            {feedback.location}
          </span>
        </div>
        <div className="feedback-card__meta">
          {feedback.event && (
            <span className="feedback-card__event">{feedback.event}</span>
          )}
          <span className="feedback-card__date">
            <Calendar className="feedback-card__meta-icon" aria-hidden="true" />
            {formatDate(feedback.date)}
          </span>
        </div>
      </div>

      {/* Tag pills */}
      <div className="feedback-card__tags">
        {feedback.tags.map(tag => (
          <span key={tag} className="feedback-card__tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}