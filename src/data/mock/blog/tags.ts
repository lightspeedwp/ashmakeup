/**
 * @fileoverview Blog tags as structured data with slugs
 * @module data/mock/blog/tags
 */

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  description?: string;
}

/**
 * Structured blog tags with slugs for routing
 */
export const blogTags: BlogTag[] = [
  { id: 'uv-makeup', name: 'UV Makeup', slug: 'uv-makeup', description: 'Glow-in-the-dark and blacklight-reactive makeup' },
  { id: 'tutorial', name: 'Tutorial', slug: 'tutorial', description: 'Step-by-step makeup guides' },
  { id: 'tips', name: 'Tips', slug: 'tips', description: 'Quick tips and tricks' },
  { id: 'travel', name: 'Travel', slug: 'travel', description: 'Makeup adventures around the world' },
  { id: 'psytrance', name: 'Psytrance', slug: 'psytrance', description: 'Psytrance festival culture and events' },
  { id: 'neon', name: 'Neon', slug: 'neon', description: 'Neon colour techniques and inspiration' },
  { id: 'cycling', name: 'Cycling', slug: 'cycling', description: 'Adventure cycling and festival journeys' },
  { id: 'berlin', name: 'Berlin', slug: 'berlin', description: 'Berlin-based art and culture' },
  { id: 'festival', name: 'Festival', slug: 'festival', description: 'Festival culture, tips, and highlights' },
  { id: 'thailand', name: 'Thailand', slug: 'thailand', description: 'Thailand festival season and tropical adventures' },
  { id: 'blacklight', name: 'Blacklight', slug: 'blacklight', description: 'Blacklight and UV-reactive techniques' },
  { id: 'makeup-tips', name: 'Makeup Tips', slug: 'makeup-tips', description: 'Expert makeup tips and tricks' },
  { id: 'long-lasting', name: 'Long-Lasting', slug: 'long-lasting', description: 'Techniques for all-day festival wear' },
  { id: 'color-theory', name: 'Color Theory', slug: 'color-theory', description: 'Colour science and harmony' },
  { id: 'eco-friendly', name: 'Eco-Friendly', slug: 'eco-friendly', description: 'Sustainable and eco-conscious products' },
  { id: 'glitter', name: 'Glitter', slug: 'glitter', description: 'Biodegradable glitter and sparkle techniques' },
  { id: 'packing-list', name: 'Packing List', slug: 'packing-list', description: 'Curated kit lists for festivals' },
  { id: 'essentials', name: 'Essentials', slug: 'essentials', description: 'Must-have products and tools' },
  { id: 'education', name: 'Education', slug: 'education', description: 'Learning resources for aspiring artists' },
  { id: 'rave', name: 'Rave', slug: 'rave', description: 'Underground and electronic music events' },
  { id: 'adventure', name: 'Adventure', slug: 'adventure', description: 'Epic journeys and festival pilgrimages' },
  { id: 'origin-festival', name: 'Origin Festival', slug: 'origin-festival', description: 'Cape Town psytrance gathering' },
  { id: 'birthday', name: 'Birthday', slug: 'birthday', description: 'Birthday celebrations and milestones' },
  { id: 'survival', name: 'Survival', slug: 'survival', description: 'Tips for surviving multi-day festivals' },
  { id: 'tropical', name: 'Tropical', slug: 'tropical', description: 'Sun-drenched festival scenes and inspiration' },
  { id: 'experience', name: 'Experience', slug: 'experience', description: 'Personal stories from festival adventures' },
  { id: 'artistry', name: 'Artistry', slug: 'artistry', description: 'The craft behind standout makeup looks' },
  { id: 'sustainability', name: 'Sustainability', slug: 'sustainability', description: 'Eco-conscious approaches to makeup artistry' },
  { id: 'green', name: 'Green', slug: 'green', description: 'Environmentally responsible beauty practices' },
];

/**
 * Convert tag name to slug
 */
export function tagNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

/**
 * Find tag by slug
 */
export function findBlogTagBySlug(slug: string): BlogTag | undefined {
  return blogTags.find(t => t.slug === slug);
}