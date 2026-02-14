/**
 * @fileoverview Mock data for video content
 * @module data/mock/videos
 */

import { Video } from '../../types';

export const videos: Video[] = [
  {
    id: 'vid-1',
    title: 'Psytrance Sticker Animation',
    description: 'AI-animated showcase of my UV-reactive sticker designs, created for the psytrance dancefloor.',
    thumbnailUrl: 'figma:asset/f0c4301e83be5c7dcfa724f611ca2ffcca9bf032.png',
    videoUrl: 'https://www.youtube.com/embed/tSn54dzzVtw',
    platform: 'youtube',
    duration: '00:15',
    category: 'Creative',
    featured: true,
    publishedAt: '2025-02-04'
  }
];

export const featuredVideo = videos.find(v => v.featured) || videos[0];
