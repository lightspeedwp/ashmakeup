/**
 * @fileoverview Blog categories and tags
 * Organization system for blog content
 * 
 * @module data/mock/blog/categories
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Removed empty categories and stale hardcoded counts
 */

import { BlogCategory } from '../../types';

/**
 * Blog Categories
 * Main categorization for blog posts
 * Only categories with actual posts are listed.
 * Dynamic counts are computed by /utils/contentCounts.ts
 * 
 * @constant {BlogCategory[]}
 */
export const blogCategories: BlogCategory[] = [
  {
    id: 'makeup-tips',
    name: 'Makeup Tips',
    slug: 'makeup-tips',
    description: 'Expert tips and tricks for creating stunning makeup looks',
    count: 0,
    color: 'var(--wp--preset--color--neon-pink)'
  },
  {
    id: 'tutorials',
    name: 'Tutorials',
    slug: 'tutorials',
    description: 'Step-by-step guides for mastering makeup techniques',
    count: 0,
    color: 'var(--wp--preset--color--neon-purple)'
  },
  {
    id: 'festival-tips',
    name: 'Festival Tips',
    slug: 'festival-tips',
    description: 'Everything you need for festival makeup success',
    count: 0,
    color: 'var(--wp--preset--color--neon-orange)'
  },
  {
    id: 'travel',
    name: 'Travel',
    slug: 'travel',
    description: 'Makeup adventures and experiences from around the world',
    count: 0,
    color: 'var(--wp--preset--color--neon-cyan)'
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    description: 'Learn the theory and science behind great makeup',
    count: 0,
    color: 'var(--wp--preset--color--neon-blue)'
  },
];

/**
 * Popular Blog Tags
 * Tags that appear across multiple blog posts
 * 
 * @constant {string[]}
 */
export const popularTags = [
  'Psytrance',
  'Festival',
  'Thailand',
  'Travel',
  'UV Makeup',
  'Cycling',
  'Tips',
  'Makeup Tips',
  'Long-Lasting',
  'Color Theory',
  'Neon',
  'Eco-Friendly',
];

/**
 * All Available Tags
 * Tags actually used in blog posts
 * 
 * @constant {string[]}
 */
export const allTags = [
  // Makeup Types
  'UV Makeup',
  'Blacklight',
  'Neon',

  // Techniques
  'Tutorial',
  'Tips',
  'Makeup Tips',

  // Products & Tools
  'Long-Lasting',
  'Eco-Friendly',
  'Sustainability',
  'Green',

  // Events & Locations
  'Festival',
  'Psytrance',
  'Rave',
  'Berlin',
  'Thailand',
  'Origin Festival',
  'Travel',
  'Tropical',

  // Activities
  'Cycling',
  'Adventure',

  // Concepts
  'Color Theory',
  'Education',
  'Artistry',

  // Specific Elements
  'Glitter',

  // Essentials
  'Packing List',
  'Essentials',

  // Personal
  'Birthday',
  'Survival',
  'Experience',
];