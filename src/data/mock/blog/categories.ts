/**
 * @fileoverview Blog categories and tags
 * Organization system for blog content
 * 
 * @module data/mock/blog/categories
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { BlogCategory } from '../../types';

/**
 * Blog Categories
 * Main categorization for blog posts
 * 
 * @constant {BlogCategory[]}
 */
export const blogCategories: BlogCategory[] = [
  {
    id: 'makeup-tips',
    name: 'Makeup Tips',
    slug: 'makeup-tips',
    description: 'Expert tips and tricks for creating stunning makeup looks',
    count: 12,
    color: '#ec4899'
  },
  {
    id: 'tutorials',
    name: 'Tutorials',
    slug: 'tutorials',
    description: 'Step-by-step guides for mastering makeup techniques',
    count: 8,
    color: '#a855f7'
  },
  {
    id: 'festival-tips',
    name: 'Festival Tips',
    slug: 'festival-tips',
    description: 'Everything you need for festival makeup success',
    count: 15,
    color: '#f97316'
  },
  {
    id: 'travel',
    name: 'Travel',
    slug: 'travel',
    description: 'Makeup adventures and experiences from around the world',
    count: 6,
    color: '#14b8a6'
  },
  {
    id: 'education',
    name: 'Education',
    slug: 'education',
    description: 'Learn the theory and science behind great makeup',
    count: 4,
    color: '#3b82f6'
  },
  {
    id: 'product-reviews',
    name: 'Product Reviews',
    slug: 'product-reviews',
    description: 'Honest reviews of makeup products and tools',
    count: 10,
    color: '#22c55e'
  }
];

/**
 * Popular Blog Tags
 * Commonly used tags across blog posts
 * 
 * @constant {string[]}
 */
export const popularTags = [
  'Festival Makeup',
  'UV Makeup',
  'Tutorial',
  'Tips',
  'Product Review',
  'Thailand',
  'Switzerland',
  'Waterproof',
  'Long-Lasting',
  'Color Theory',
  'Neon',
  'Glitter',
  'Eye Makeup',
  'Face Paint',
  'Nail Art'
];

/**
 * All Available Tags
 * Complete list of tags used in blog posts
 * 
 * @constant {string[]}
 */
export const allTags = [
  // Makeup Types
  'Festival Makeup',
  'UV Makeup',
  'Blacklight',
  'Neon',
  'Natural Makeup',
  'Glam Makeup',
  'Face Paint',
  'Body Paint',
  'Eye Makeup',
  'Lip Art',
  'Nail Art',
  
  // Techniques
  'Tutorial',
  'Tips',
  'Guide',
  'How-To',
  'Step-by-Step',
  
  // Products & Tools
  'Product Review',
  'Waterproof',
  'Long-Lasting',
  'Cruelty-Free',
  'Vegan',
  'Eco-Friendly',
  
  // Events & Locations
  'Festival',
  'Rave',
  'Club',
  'Thailand',
  'Switzerland',
  'Koh Phangan',
  'Travel',
  
  // Concepts
  'Color Theory',
  'Skin Care',
  'Beauty',
  'Creativity',
  'Self-Expression',
  
  // Specific Elements
  'Glitter',
  'Gems',
  'Rhinestones',
  'Metallic',
  'Holographic',
  'Iridescent',
  
  // Essentials
  'Packing List',
  'Essentials',
  'Must-Haves',
  'Emergency Kit',
  
  // Skills
  'Education',
  'Theory',
  'Technique',
  'Professional'
];
