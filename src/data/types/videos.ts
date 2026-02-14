/**
 * @fileoverview Type definitions for video content
 * @module data/types/videos
 */

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  videoUrl: string;
  platform: 'youtube' | 'vimeo';
  duration?: string;
  category?: string;
  featured?: boolean;
  publishedAt: string;
}
