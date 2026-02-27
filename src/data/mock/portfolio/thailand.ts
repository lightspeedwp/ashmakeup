/**
 * @fileoverview Thailand portfolio collection
 * Captures tropical festival experiences and Southeast Asian travel
 * 
 * @module data/mock/portfolio/thailand
 * @author Ash Shaw Portfolio Team
 * @version 2.1.0 - Fixed figma:asset imports
 */

import { PortfolioEntry } from '../../types';

// Placeholder images - Replace with actual images
const lostParadiseImg = "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&q=80";
const edenParadiseImg = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80";
const edenShishiImg = "https://images.unsplash.com/photo-1514866726862-0f081731e63f?w=800&q=80";
const jungleFestival1 = "https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&q=80";
const jungleFestival2 = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80";
const jungleFestival3 = "https://images.unsplash.com/photo-1514866726862-0f081731e63f?w=800&q=80";

/**
 * Thailand Portfolio Work
 * Makeup artistry during travels through Thailand
 * 
 * @constant {PortfolioEntry[]}
 */
export const thailandWork: PortfolioEntry[] = [
  {
    id: 'lost-paradise',
    slug: 'lost-paradise-thailand',
    title: 'Lost Paradise',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-12',
    images: [
      {
        src: lostParadiseImg,
        alt: 'Lost Paradise - makeup artistry in Thailand with friend Gabi',
        title: 'Lost Paradise - Main',
        caption: 'Lost Paradise',
        description: 'Tropical festival makeup celebrating friendship',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Thailand',
    event: 'Lost Paradise',
    description: 'My dear friend Gabi & sista from another mista!',
    excerpt: 'Festival makeup celebrating friendship in Thailand',
    tags: ['Thailand', 'Festival', 'Friendship', 'Lost Paradise'],
    featured: false,
    order: 1
  },
  {
    id: 'eden-paradise',
    slug: 'eden-paradise-thailand',
    title: 'Eden Paradise',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-18',
    images: [
      {
        src: edenParadiseImg,
        alt: 'Eden Paradise - beautiful party makeup in Thailand',
        title: 'Eden Paradise - Main',
        caption: 'Party Look',
        description: 'Beautiful party person who kindly let me do her makeup',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Thailand',
    event: 'Eden Paradise',
    description: 'Beautiful party person who kindly let me do her makeup.',
    excerpt: 'Vibrant party makeup in Thailand',
    tags: ['Thailand', 'Party', 'Eden Paradise', 'Festival'],
    featured: false,
    order: 2
  },
  {
    id: 'eden-paradise-shishi',
    slug: 'eden-paradise-shishi-thailand',
    title: 'Eden Paradise - Shishi',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-19',
    images: [
      {
        src: edenShishiImg,
        alt: 'Eden Paradise - Shishi with radiant makeup in Thailand',
        title: 'Radiant Smile',
        caption: 'Radiant Smile',
        description: 'Beautiful Shishi smiling radiance and shining bright',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Thailand',
    event: 'Eden Paradise',
    description: 'Beautiful Shishi smiling radiance and shining bright.',
    excerpt: 'Radiant festival makeup with joyful energy',
    tags: ['Thailand', 'Eden Paradise', 'Radiant', 'Joy', 'Festival'],
    featured: false,
    order: 3
  },
  {
    id: 'jungle-festival-koh-phangan',
    slug: 'jungle-festival-koh-phangan',
    title: 'Jungle Festival Magic',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-26',
    images: [
      {
        src: jungleFestival1,
        alt: 'Jungle Festival Magic - Koh Phangan makeup art',
        title: 'Jungle Festival Magic',
        caption: 'Jungle Vibes',
        description: 'Tropical UV artistry in the heart of Thailand\'s jungle paradise',
        position: 'center',
        aspectRatio: '16:9'
      },
      {
        src: jungleFestival2,
        alt: 'Jungle Festival Magic - Alternative angle',
        title: 'Jungle Energy',
        caption: 'Wild Energy',
        description: 'Capturing the wild energy and natural beauty',
        position: 'right',
        aspectRatio: '4:3'
      },
      {
        src: jungleFestival3,
        alt: 'Jungle Festival Magic - Detail shot',
        title: 'Jungle Details',
        caption: 'Festival Details',
        description: 'Intricate details of jungle-inspired makeup',
        position: 'left',
        aspectRatio: '3:4'
      }
    ],
    location: 'Koh Phangan, Thailand',
    event: 'Jungle Festival',
    description: 'Tropical UV artistry in the heart of Thailand\'s jungle paradise, blending neon glow with natural island energy.',
    excerpt: 'Wild jungle festival energy with UV artistry',
    tags: ['Koh Phangan', 'Jungle', 'UV', 'Festival', 'Thailand', 'Tropical'],
    featured: true,
    order: 4
  }
];
