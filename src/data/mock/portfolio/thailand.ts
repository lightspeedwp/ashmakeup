/**
 * @fileoverview Thailand portfolio collection
 * Captures tropical festival experiences and Southeast Asian travel
 * 
 * @module data/mock/portfolio/thailand
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - Added Chiang Mai mountain temple entry (2024)
 */

import { PortfolioEntry } from '../../types';

// Import Figma assets
import lostParadiseImg from 'figma:asset/e7ee10c85c112ab4acfc9e54087974a5faae5966.png';
import edenParadiseImg from 'figma:asset/3c496f3b8a5671dd00830f80a9a061ddf687e849.png';
import edenShishiImg from 'figma:asset/2d37a7cd55fe518f7eb8124fa25a2382be67f948.png';
import jungleFestival1 from 'figma:asset/7afa71c7ec4457a1c1983db257703a6c92a9cce7.png';
import jungleFestival2 from 'figma:asset/1cd08d3825ac7cc423a4672f8ed279139fc99d0a.png';
import jungleFestival3 from 'figma:asset/3eb83eb2d4eb493b80283c1b75770d8893b2fc6a.png';

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
    title: 'Lost paradise',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-12',
    images: [
      {
        src: lostParadiseImg,
        alt: 'Lost paradise - makeup artistry in Thailand with friend Gabi',
        title: 'Lost paradise - main',
        caption: 'Lost paradise',
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
    title: 'Eden paradise',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-18',
    images: [
      {
        src: edenParadiseImg,
        alt: 'Eden paradise - beautiful party makeup in Thailand',
        title: 'Eden paradise - main',
        caption: 'Party look',
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
    title: 'Eden paradise - Shishi',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-19',
    images: [
      {
        src: edenShishiImg,
        alt: 'Eden paradise - Shishi with radiant makeup in Thailand',
        title: 'Radiant smile',
        caption: 'Radiant smile',
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
    title: 'Jungle festival magic',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    date: '2024-09-26',
    images: [
      {
        src: jungleFestival1,
        alt: 'Jungle festival magic - Koh Phangan makeup art',
        title: 'Jungle festival magic',
        caption: 'Jungle vibes',
        description: 'Tropical UV artistry in the heart of Thailand\'s jungle paradise',
        position: 'center',
        aspectRatio: '16:9'
      },
      {
        src: jungleFestival2,
        alt: 'Jungle festival magic - Alternative angle',
        title: 'Jungle energy',
        caption: 'Wild energy',
        description: 'Capturing the wild energy and natural beauty',
        position: 'right',
        aspectRatio: '4:3'
      },
      {
        src: jungleFestival3,
        alt: 'Jungle festival magic - Detail shot',
        title: 'Jungle details',
        caption: 'Festival details',
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
  },
  {
    id: 'chiang-mai-mountain-temple',
    slug: 'chiang-mai-mountain-temple',
    title: 'Chiang Mai mountain temple',
    category: 'Festival Makeup',
    subcategory: 'Thailand Adventures',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&q=90&fit=crop',
        alt: 'Hot pink and pure yellow temple-inspired design incorporating Thai cultural motifs with respectful artistic interpretation',
        title: 'Chiang Mai mountain temple - main',
        caption: 'Thai temple fusion',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Hot pink and pure yellow design inspired by northern Thai temple architecture'
      }
    ],
    location: 'Chiang Mai, Thailand',
    event: 'Mountain Temple Gathering',
    date: '2024-11-22',
    description: 'Hot pink and pure yellow temple-inspired design created during a northern Thailand psytrance gathering in the mountains. The piece incorporated Thai cultural motifs with respect and artistic interpretation. Northern Thailand\'s temple architecture and mountain energy demanded a design that honored both tradition and transformation.',
    excerpt: 'Thai temple motifs for northern mountain psytrance gathering',
    tags: ['Chiang Mai', 'Thailand', 'Temple', 'Cultural Fusion', 'Mountains'],
    featured: false,
    order: 5
  }
];