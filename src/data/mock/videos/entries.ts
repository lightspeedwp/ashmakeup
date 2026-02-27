/**
 * @fileoverview Mock data for video entries
 * @module data/mock/videos/entries
 * @version 3.0.0 - Restructured into directory
 */

import { Video } from '../../types/videos';

export const videos: Video[] = [
  {
    id: 'vid-1',
    slug: 'psytrance-sticker-animation',
    title: 'Psytrance Sticker Animation',
    description: 'AI-animated showcase of my UV-reactive sticker designs, created for the psytrance dancefloor.',
    content: `## About This Animation

This short animation brings my **UV-reactive sticker designs** to life through AI-powered motion. Each sticker was originally hand-drawn and then scanned at high resolution before being fed into a generative animation pipeline.

### Design Inspiration

The designs draw heavily from *sacred geometry* and psytrance visual culture — mandalas, fractals, and third-eye motifs rendered in electric neon palettes that pop under blacklight.

> Art should glow in the dark. If it doesn't catch your eye on the dancefloor, you haven't pushed it far enough.

### Festival Give-Aways

I created these stickers as give-aways at festivals. They are printed on holographic vinyl and glow under UV light, making them perfect for decorating:

- Water bottles and flasks
- Phone cases and laptop covers
- Festival gear and backpacks
- Bike frames and helmets

Each sticker is a tiny piece of the dancefloor you can take home with you.`,
    thumbnailUrl: 'figma:asset/f0c4301e83be5c7dcfa724f611ca2ffcca9bf032.png',
    videoUrl: 'https://www.youtube.com/embed/tSn54dzzVtw',
    platform: 'youtube',
    duration: '00:15',
    category: 'Creative',
    tags: ['uv', 'stickers', 'animation', 'psytrance', 'neon'],
    featured: true,
    publishedAt: '2025-02-04',
    views: 245,
    likes: 38,
    faqs: [
      {
        id: 'vid1-faq-1',
        question: 'What software did you use to create the sticker animation?',
        answer: 'I used an AI-powered generative animation pipeline to bring the hand-drawn sticker designs to life. The original artwork is drawn by hand and scanned at high resolution before being processed through the animation tool.'
      },
      {
        id: 'vid1-faq-2',
        question: 'Are the UV stickers available to buy?',
        answer: 'No — this is a personal art project, not a shop. I give stickers away at festivals as free gifts. If you see me at a party, come say hi and I might have some for you!'
      }
    ]
  },
];

export const featuredVideo = videos.find(v => v.featured) || videos[0];
