/**
 * @fileoverview Mock data for video categories
 * @module data/mock/videos/categories
 * @version 3.0.0 - Restructured into directory
 */

import { VideoCategory } from '../../types/videos';

export const videoCategories: VideoCategory[] = [
  {
    id: 'creative',
    name: 'Creative',
    slug: 'creative',
    description: 'Creative projects, animations, and experimental visual art.',
    count: 1,
  },
];