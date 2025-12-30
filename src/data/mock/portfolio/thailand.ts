/**
 * @fileoverview Thailand portfolio collection
 * Captures tropical festival experiences and Southeast Asian travel
 * 
 * @module data/mock/portfolio/thailand
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Updated with actual Figma assets
 */

import { PortfolioEntry } from '../../types';

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
    images: [
      {
        src: 'figma:asset/e7ee10c85c112ab4acfc9e54087974a5faae5966.png',
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
    images: [
      {
        src: 'figma:asset/3c496f3b8a5671dd00830f80a9a061ddf687e849.png',
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
    images: [
      {
        src: 'figma:asset/2d37a7cd55fe518f7eb8124fa25a2382be67f948.png',
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
    images: [
      {
        src: 'figma:asset/7afa71c7ec4457a1c1983db257703a6c92a9cce7.png',
        alt: 'Jungle Festival Magic - Koh Phangan makeup art',
        title: 'Jungle Festival Magic',
        caption: 'Jungle Vibes',
        description: 'Tropical UV artistry in the heart of Thailand\'s jungle paradise',
        position: 'center',
        aspectRatio: '16:9'
      },
      {
        src: 'figma:asset/1cd08d3825ac7cc423a4672f8ed279139fc99d0a.png',
        alt: 'Jungle Festival Magic - Alternative angle',
        title: 'Jungle Energy',
        caption: 'Wild Energy',
        description: 'Capturing the wild energy and natural beauty',
        position: 'right',
        aspectRatio: '4:3'
      },
      {
        src: 'figma:asset/3eb83eb2d4eb493b80283c1b75770d8893b2fc6a.png',
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
    date: 'Friday 26 September',
    description: 'Tropical UV artistry in the heart of Thailand\'s jungle paradise, blending neon glow with natural island energy.',
    excerpt: 'Wild jungle festival energy with UV artistry',
    tags: ['Koh Phangan', 'Jungle', 'UV', 'Festival', 'Thailand', 'Tropical'],
    featured: true,
    order: 4
  }
];