/**
 * @fileoverview Featured portfolio work for homepage
 * Curated selection of best work across all categories
 * 
 * @module data/mock/portfolio/featured
 * @author Ash Shaw Portfolio Team
 * @version 1.1.0
 */

import { PortfolioEntry } from '../../types';

// Placeholder images - Replace with actual images
const festivalEyeArt = "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&q=80";
const rainbowHeart = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80";
const vibrantFaceArt = "https://images.unsplash.com/photo-1514866726862-0f081731e63f?w=800&q=80";

/**
 * Featured Portfolio Work
 * Standout pieces showcased on the homepage
 * 
 * @constant {PortfolioEntry[]}
 */
export const featuredWork: PortfolioEntry[] = [
  {
    id: 'festival-eye-art',
    slug: 'festival-eye-art',
    title: 'Psytrance Eye Art',
    category: 'Festival Makeup',
    images: [
      {
        src: festivalEyeArt,
        alt: 'Close-up artistic eye makeup with vibrant purple stripe, red metallic lashes and colorful crystal gems',
        title: 'Psytrance Eye Art - Main',
        caption: 'Festival Eye Art',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Koh Phangan, Thailand',
    event: 'Psytrance Jungle Festival',
    date: '2024-10-15',
    description: 'Intricate eye makeup featuring a bold purple stripe design, metallic red lashes, and decorative crystal gems. Designed to catch the light on the psytrance dancefloor.',
    excerpt: 'Bold festival eye art with purple stripes and metallic red lashes',
    tags: ['Eye Art', 'Psytrance', 'Gems', 'Colorful', 'Creative'],
    featured: true,
    order: 1
  },
  {
    id: 'rainbow-heart-love',
    slug: 'rainbow-heart-love',
    title: 'Rainbow Heart Love',
    category: 'Body Art',
    images: [
      {
        src: rainbowHeart,
        alt: 'Joyful festival participant with rainbow heart body paint on chest, smiling radiantly in colorful festival environment',
        title: 'Rainbow Heart Love - Main',
        caption: 'Rainbow Heart Love',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Thailand',
    event: 'Full Moon Psytrance',
    date: '2024-09-20',
    description: 'Beautiful expression of festival joy and connection with rainbow heart body art, capturing the loving and inclusive spirit of the global trance community.',
    excerpt: 'Rainbow heart body art celebrating festival love and connection',
    tags: ['Body Art', 'Rainbow', 'Festival', 'Love', 'Community'],
    featured: true,
    order: 2
  },
  {
    id: 'vibrant-face-art',
    slug: 'vibrant-face-art',
    title: 'Neon Tribal Geometry',
    category: 'Festival Makeup',
    images: [
      {
        src: vibrantFaceArt,
        alt: 'Portrait of person with blonde hair and colorful face paint featuring blue and pink stripes in outdoor festival setting',
        title: 'Neon Tribal Geometry - Main',
        caption: 'Vibrant Face Art',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Outdoor Festival',
    event: 'Open Air Festival',
    date: '2024-08-12',
    description: 'Striking portrait showcasing colorful face paint with blue and pink geometric stripes. A modern take on tribal markings for the electronic music generation.',
    excerpt: 'Geometric face paint with blue and pink stripes',
    tags: ['Face Paint', 'Geometric', 'Psytrance', 'Colorful', 'Bold'],
    featured: true,
    order: 3
  }
];