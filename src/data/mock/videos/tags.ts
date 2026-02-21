/**
 * @fileoverview Mock data for video tags
 * @module data/mock/videos/tags
 * @version 3.0.0 - Restructured into directory, VideoTag interface moved to /data/types/videos.ts
 */

import { VideoTag } from '../../types/videos';

export const videoTags: VideoTag[] = [
  { id: 'uv', name: 'UV', slug: 'uv', description: 'UV-reactive and blacklight visuals' },
  { id: 'stickers', name: 'Stickers', slug: 'stickers', description: 'Custom sticker designs and merch' },
  { id: 'animation', name: 'Animation', slug: 'animation', description: 'AI and motion-generated animation' },
  { id: 'psytrance', name: 'Psytrance', slug: 'psytrance', description: 'Psytrance culture and visuals' },
  { id: 'neon', name: 'Neon', slug: 'neon', description: 'Neon colour palettes and glow effects' },
];

/**
 * Convert tag name to slug
 */
export function videoTagNameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

/**
 * Find video tag by slug
 */
export function findVideoTagBySlug(slug: string): VideoTag | undefined {
  return videoTags.find(t => t.slug === slug);
}