/**
 * @fileoverview Centralized dynamic content count utility
 *
 * Computes blog category counts, blog tag counts, and portfolio category
 * counts from actual mock data at import time. Every consumer reads from
 * a single source of truth so counts stay consistent site-wide.
 *
 * @module utils/contentCounts
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { blogPosts } from '../data/mock/blog/posts';
import { blogCategories } from '../data/mock/blog/categories';
import {
  PORTFOLIO_CATEGORIES,
  UNIFIED_PORTFOLIO_DATA,
} from './portfolioService';
import { podcastEpisodes } from '../data/mock/podcasts/episodes';
import { podcastCategories } from '../data/mock/podcasts/categories';
import { videos, videoCategories } from '../data/mock/videos';

/* ────────────────────────────────────────────
   Blog Category Counts
   ──────────────────────────────────────────── */

/**
 * Count of blog posts per category name (case-insensitive match).
 * Key = category name exactly as it appears in `blogCategories[].name`.
 */
export const blogCategoryCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  blogCategories.forEach((cat) => {
    counts[cat.name] = 0;
  });

  blogPosts.forEach((post) => {
    const postCat = post.category?.trim();
    if (!postCat) return;

    // Try exact match first
    if (counts[postCat] !== undefined) {
      counts[postCat] += 1;
      return;
    }

    // Fallback: case-insensitive match
    const key = Object.keys(counts).find(
      (k) => k.toLowerCase() === postCat.toLowerCase(),
    );
    if (key) {
      counts[key] += 1;
    }
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given blog category.
 * Falls back to 0 if the category has no posts.
 */
export function getBlogCategoryCount(categoryName: string): number {
  return blogCategoryCounts[categoryName] ?? 0;
}

/* ────────────────────────────────────────────
   Blog Tag Counts
   ──────────────────────────────────────────── */

/**
 * Count of blog posts per tag (case-insensitive match).
 * Key = tag name exactly as used in `blogPosts[].tags[]`.
 */
export const blogTagCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  blogPosts.forEach((post) => {
    (post.tags ?? []).forEach((tag) => {
      const normalised = tag.trim();
      if (!normalised) return;

      // Find or create the canonical key (preserving first-seen casing)
      const existing = Object.keys(counts).find(
        (k) => k.toLowerCase() === normalised.toLowerCase(),
      );
      if (existing) {
        counts[existing] += 1;
      } else {
        counts[normalised] = 1;
      }
    });
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given blog tag.
 * Falls back to 0 if the tag has no posts.
 */
export function getBlogTagCount(tagName: string): number {
  const key = Object.keys(blogTagCounts).find(
    (k) => k.toLowerCase() === tagName.toLowerCase(),
  );
  return key ? blogTagCounts[key] : 0;
}

/* ────────────────────────────────────────────
   Portfolio Category Counts
   ──────────────────────────────────────────── */

/**
 * Count of portfolio entries per category id.
 * Key = PORTFOLIO_CATEGORIES[].id (e.g. "Festival Makeup", "UV Makeup").
 */
export const portfolioCategoryCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  PORTFOLIO_CATEGORIES.forEach((cat) => {
    if (cat.id === 'all') {
      counts[cat.id] = UNIFIED_PORTFOLIO_DATA.length;
    } else {
      counts[cat.id] = UNIFIED_PORTFOLIO_DATA.filter(
        (entry) => entry.category === cat.id,
      ).length;
    }
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given portfolio category.
 * Falls back to 0 if the category has no entries.
 */
export function getPortfolioCategoryCount(categoryId: string): number {
  return portfolioCategoryCounts[categoryId] ?? 0;
}

/* ────────────────────────────────────────────
   Portfolio Tag Counts
   ──────────────────────────────────────────── */

/**
 * Count of portfolio entries per tag (case-insensitive match).
 */
export const portfolioTagCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  UNIFIED_PORTFOLIO_DATA.forEach((entry) => {
    (entry.tags ?? []).forEach((tag) => {
      const normalised = tag.trim();
      if (!normalised) return;

      const existing = Object.keys(counts).find(
        (k) => k.toLowerCase() === normalised.toLowerCase(),
      );
      if (existing) {
        counts[existing] += 1;
      } else {
        counts[normalised] = 1;
      }
    });
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given portfolio tag.
 */
export function getPortfolioTagCount(tagName: string): number {
  const key = Object.keys(portfolioTagCounts).find(
    (k) => k.toLowerCase() === tagName.toLowerCase(),
  );
  return key ? portfolioTagCounts[key] : 0;
}

/* ────────────────────────────────────────────
   Podcast Category Counts
   ──────────────────────────────────────────── */

/**
 * Count of podcast episodes per category name.
 */
export const podcastCategoryCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  podcastCategories.forEach((cat) => {
    counts[cat.name] = 0;
  });

  podcastEpisodes.forEach((ep) => {
    const cat = ep.category?.trim();
    if (!cat) return;

    if (counts[cat] !== undefined) {
      counts[cat] += 1;
      return;
    }

    const key = Object.keys(counts).find(
      (k) => k.toLowerCase() === cat.toLowerCase(),
    );
    if (key) {
      counts[key] += 1;
    }
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given podcast category.
 */
export function getPodcastCategoryCount(categoryName: string): number {
  return podcastCategoryCounts[categoryName] ?? 0;
}

/* ────────────────────────────────────────────
   Video Category Counts
   ──────────────────────────────────────────── */

/**
 * Count of videos per category name.
 */
export const videoCategoryCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  videoCategories.forEach((cat) => {
    counts[cat.name] = 0;
  });

  videos.forEach((v) => {
    const cat = v.category?.trim();
    if (!cat) return;

    if (counts[cat] !== undefined) {
      counts[cat] += 1;
      return;
    }

    const key = Object.keys(counts).find(
      (k) => k.toLowerCase() === cat.toLowerCase(),
    );
    if (key) {
      counts[key] += 1;
    }
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given video category.
 */
export function getVideoCategoryCount(categoryName: string): number {
  return videoCategoryCounts[categoryName] ?? 0;
}

/* ────────────────────────────────────────────
   Video Tag Counts
   ──────────────────────────────────────────── */

/**
 * Count of videos per tag (case-insensitive match).
 */
export const videoTagCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  videos.forEach((v) => {
    (v.tags ?? []).forEach((tag) => {
      const normalised = tag.trim();
      if (!normalised) return;

      const existing = Object.keys(counts).find(
        (k) => k.toLowerCase() === normalised.toLowerCase(),
      );
      if (existing) {
        counts[existing] += 1;
      } else {
        counts[normalised] = 1;
      }
    });
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given video tag.
 */
export function getVideoTagCount(tagName: string): number {
  const key = Object.keys(videoTagCounts).find(
    (k) => k.toLowerCase() === tagName.toLowerCase(),
  );
  return key ? videoTagCounts[key] : 0;
}

/* ────────────────────────────────────────────
   Podcast Tag Counts
   ──────────────────────────────────────────── */

/**
 * Count of podcast episodes per tag (case-insensitive match).
 */
export const podcastTagCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  podcastEpisodes.forEach((ep) => {
    (ep.tags ?? []).forEach((tag) => {
      const normalised = tag.trim();
      if (!normalised) return;

      const existing = Object.keys(counts).find(
        (k) => k.toLowerCase() === normalised.toLowerCase(),
      );
      if (existing) {
        counts[existing] += 1;
      } else {
        counts[normalised] = 1;
      }
    });
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given podcast tag.
 */
export function getPodcastTagCount(tagName: string): number {
  const key = Object.keys(podcastTagCounts).find(
    (k) => k.toLowerCase() === tagName.toLowerCase(),
  );
  return key ? podcastTagCounts[key] : 0;
}

/* ────────────────────────────────────────────
   Event Category Counts
   ──────────────────────────────────────────── */

import { allEvents } from '../data/mock/events';
import { eventCategories as eventCats } from '../data/mock/events/categories';

/**
 * Count of events per category (type) slug.
 */
export const eventCategoryCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};
  eventCats.forEach((cat) => {
    counts[cat.slug] = allEvents.filter((e) => e.type === cat.slug).length;
  });
  return counts;
})();

/**
 * Returns the dynamic count for a given event category slug.
 */
export function getEventCategoryCount(categorySlug: string): number {
  return eventCategoryCounts[categorySlug] ?? 0;
}

/* ────────────────────────────────────────────
   Event Tag Counts
   ──────────────────────────────────────────── */

/**
 * Count of events per tag (case-insensitive match).
 */
export const eventTagCounts: Record<string, number> = (() => {
  const counts: Record<string, number> = {};

  allEvents.forEach((event) => {
    (event.tags ?? []).forEach((tag) => {
      const normalised = tag.trim();
      if (!normalised) return;

      const existing = Object.keys(counts).find(
        (k) => k.toLowerCase() === normalised.toLowerCase(),
      );
      if (existing) {
        counts[existing] += 1;
      } else {
        counts[normalised] = 1;
      }
    });
  });

  return counts;
})();

/**
 * Returns the dynamic count for a given event tag.
 */
export function getEventTagCount(tagName: string): number {
  const key = Object.keys(eventTagCounts).find(
    (k) => k.toLowerCase() === tagName.toLowerCase(),
  );
  return key ? eventTagCounts[key] : 0;
}