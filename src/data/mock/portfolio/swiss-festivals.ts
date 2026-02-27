/**
 * @fileoverview Swiss mountain festival portfolio
 * Shankra Festival 2023 and Reiserfieber Switzerland
 * 
 * @module data/mock/portfolio/swiss-festivals
 * @author Ash Shaw Portfolio Team
 * @version 2.1.0 - Fixed figma:asset imports
 */

import { PortfolioEntry } from '../../types';

// Placeholder images — Shankra - Replace with actual images
const festivalConnectionImg = "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&q=80";
const alpineBlissImg = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80";
const mountainRainbowImg = "https://images.unsplash.com/photo-1514866726862-0f081731e63f?w=800&q=80";

// Placeholder images — Reiserfieber - Replace with actual images
const alpineGlowImg = "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&q=80";
const mountainSpiritImg = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80";
const festivalJoyImg = "https://images.unsplash.com/photo-1514866726862-0f081731e63f?w=800&q=80";

/**
 * Shankra Festival 2023 Work
 * Swiss mountain festival in breathtaking alpine settings
 * 
 * @constant {PortfolioEntry[]}
 */
export const shankraWork: PortfolioEntry[] = [
  {
    id: 'festival-connection',
    slug: 'shankra-festival-connection',
    title: 'Festival Connection',
    category: 'Festival Makeup',
    subcategory: 'Shankra Festival 2023',
    images: [
      {
        src: festivalConnectionImg,
        alt: 'Festival Connection - turquoise eye design at Shankra Festival 2023, Switzerland',
        title: 'Festival Connection',
        caption: 'Turquoise Eyes',
        description: 'Joyful festival moment with turquoise eye design and infectious energy',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Shankra Festival 2023, Switzerland',
    event: 'Shankra Festival',
    date: '2023-07-14',
    description: 'Joyful festival moment with turquoise eye design and infectious energy in the Swiss mountains.',
    excerpt: 'Turquoise eye design celebrating Swiss mountain festival energy',
    tags: ['Shankra', 'Switzerland', 'Alpine', 'Connection', 'Turquoise'],
    featured: false,
    order: 1
  },
  {
    id: 'alpine-bliss',
    slug: 'shankra-alpine-bliss',
    title: 'Alpine Bliss',
    category: 'Festival Makeup',
    subcategory: 'Shankra Festival 2023',
    images: [
      {
        src: alpineBlissImg,
        alt: 'Alpine Bliss - golden face paint with turquoise accents at Shankra Festival 2023, Switzerland',
        title: 'Alpine Bliss',
        caption: 'Golden Serenity',
        description: 'Serene golden face paint with turquoise accents',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Shankra Festival 2023, Switzerland',
    event: 'Shankra Festival',
    date: '2023-07-15',
    description: 'Serene golden face paint with turquoise accents, capturing the peaceful mountain festival atmosphere.',
    excerpt: 'Golden serenity in Swiss alpine setting',
    tags: ['Shankra', 'Alpine', 'Golden', 'Peaceful', 'Switzerland'],
    featured: false,
    order: 2
  },
  {
    id: 'mountain-rainbow',
    slug: 'shankra-mountain-rainbow',
    title: 'Mountain Rainbow',
    category: 'Festival Makeup',
    subcategory: 'Shankra Festival 2023',
    images: [
      {
        src: mountainRainbowImg,
        alt: 'Mountain Rainbow - vibrant rainbow face art at Shankra Festival 2023, Switzerland',
        title: 'Mountain Rainbow',
        caption: 'Rainbow Patterns',
        description: 'Vibrant rainbow face art with intricate patterns',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Shankra Festival 2023, Switzerland',
    event: 'Shankra Festival',
    date: '2023-07-16',
    description: 'Vibrant rainbow face art with intricate patterns celebrating the colorful spirit of Swiss festival culture.',
    excerpt: 'Rainbow patterns celebrating Swiss festival spirit',
    tags: ['Shankra', 'Rainbow', 'Colorful', 'Patterns', 'Switzerland'],
    featured: false,
    order: 3
  }
];

/**
 * Reiserfieber Switzerland Work
 * Mountain celebration at Swiss outdoor festival
 * 
 * @constant {PortfolioEntry[]}
 */
export const reiserfieberWork: PortfolioEntry[] = [
  {
    id: 'alpine-glow',
    slug: 'reiserfieber-alpine-glow',
    title: 'Alpine Glow',
    category: 'Festival Makeup',
    subcategory: 'Reiserfieber Switzerland',
    images: [
      {
        src: alpineGlowImg,
        alt: 'Alpine Glow - turquoise and purple face art at Reiserfieber, Switzerland',
        title: 'Alpine Glow',
        caption: 'Delicate Glow',
        description: 'Delicate turquoise and purple face art with glitter accents',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Reiserfieber, Switzerland',
    event: 'Reiserfieber',
    date: '2023-08-25',
    description: 'Delicate turquoise and purple face art with glitter accents creating magical festival vibes in the Swiss mountains.',
    excerpt: 'Magical glitter accents in Swiss mountains',
    tags: ['Reiserfieber', 'Switzerland', 'Alpine', 'Glow', 'Glitter'],
    featured: false,
    order: 1
  },
  {
    id: 'mountain-spirit',
    slug: 'reiserfieber-mountain-spirit',
    title: 'Mountain Spirit',
    category: 'Festival Makeup',
    subcategory: 'Reiserfieber Switzerland',
    images: [
      {
        src: mountainSpiritImg,
        alt: 'Mountain Spirit - rainbow face stripe at Reiserfieber, Switzerland',
        title: 'Mountain Spirit',
        caption: 'Rainbow Stripe',
        description: 'Bold rainbow face stripe with Swiss mountain energy',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Reiserfieber, Switzerland',
    event: 'Reiserfieber',
    date: '2023-08-26',
    description: 'Bold rainbow face stripe embodying the free spirit of Swiss mountain festivals.',
    excerpt: 'Bold rainbow stripe with mountain spirit',
    tags: ['Reiserfieber', 'Rainbow', 'Bold', 'Mountain', 'Swiss'],
    featured: false,
    order: 2
  },
  {
    id: 'festival-joy',
    slug: 'reiserfieber-festival-joy',
    title: 'Festival Joy',
    category: 'Festival Makeup',
    subcategory: 'Reiserfieber Switzerland',
    images: [
      {
        src: festivalJoyImg,
        alt: 'Festival Joy - purple and turquoise eye design at Reiserfieber, Switzerland',
        title: 'Festival Joy',
        caption: 'Joyful Eyes',
        description: 'Joyful purple and turquoise eye design',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Reiserfieber, Switzerland',
    event: 'Reiserfieber',
    date: '2023-08-27',
    description: 'Joyful purple and turquoise eye design radiating positive festival energy.',
    excerpt: 'Joyful eye design with vibrant energy',
    tags: ['Reiserfieber', 'Joy', 'Purple', 'Turquoise', 'Eye Art'],
    featured: false,
    order: 3
  }
];

/**
 * All Swiss Festival Work Combined
 * 
 * @constant {PortfolioEntry[]}
 */
export const swissFestivalWork: PortfolioEntry[] = [
  ...shankraWork,
  ...reiserfieberWork
];
