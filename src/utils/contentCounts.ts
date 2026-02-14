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