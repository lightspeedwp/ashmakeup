/**
 * @fileoverview UV/blacklight makeup portfolio
 * Neon and glow-in-the-dark makeup for club and rave environments
 * 
 * @module data/mock/portfolio/uv-makeup
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Updated with actual Figma assets
 */

import { PortfolioEntry } from '../../types';

/**
 * UV Makeup Portfolio
 * Neon, blacklight, and glow-in-the-dark work
 * 
 * @constant {PortfolioEntry[]}
 */
export const uvMakeupWork: PortfolioEntry[] = [
  {
    id: 'neon-warrior',
    slug: 'neon-warrior',
    title: 'Neon Warrior',
    category: 'UV Makeup',
    images: [
      {
        src: 'figma:asset/3f84a682c620ba9434e114f1bed5c08d6f9573d6.png',
        alt: 'Neon Warrior - dramatic green mohawk with UV reactive face paint at Berlin Club',
        title: 'Neon Warrior',
        caption: 'Under UV Light',
        description: 'Dramatic green mohawk with bold UV reactive face paint',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Berlin Club',
    description: 'Bold geometric UV reactive makeup creating a futuristic warrior aesthetic with dramatic green mohawk.',
    excerpt: 'Futuristic UV warrior with geometric patterns',
    tags: ['UV', 'Neon', 'Geometric', 'Warrior', 'Futuristic', 'Mohawk'],
    featured: true,
    order: 1
  },
  {
    id: 'rainbow-lightning',
    slug: 'rainbow-lightning',
    title: 'Rainbow Lightning',
    category: 'UV Makeup',
    images: [
      {
        src: 'figma:asset/4b2d7308e93886e4e6b5b4aecedbcb86af31a46b.png',
        alt: 'Rainbow Lightning - vibrant rainbow face stripe with glowing accessories at UV Party',
        title: 'Rainbow Lightning',
        caption: 'Rainbow Stripe',
        description: 'Vibrant rainbow face stripe with glowing accessories',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'UV Party',
    description: 'Vibrant neon rainbow face stripe with glowing accessories creating electric energy.',
    excerpt: 'Electric rainbow neon stripe',
    tags: ['UV', 'Rainbow', 'Neon', 'Electric', 'Vibrant'],
    featured: false,
    order: 2
  },
  {
    id: 'electric-blue',
    slug: 'electric-blue',
    title: 'Electric Blue',
    category: 'UV Makeup',
    images: [
      {
        src: 'figma:asset/f37bfd287073fd5c8012c4b921e6919bf6b4bbcc.png',
        alt: 'Electric Blue - bold blue UV face paint with geometric patterns at Underground Rave',
        title: 'Electric Blue',
        caption: 'Geometric Blue',
        description: 'Bold blue UV face paint with geometric patterns',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Underground Rave',
    description: 'Bold blue UV reactive face paint with precise geometric patterns for underground rave energy.',
    excerpt: 'Geometric blue UV patterns',
    tags: ['UV', 'Blue', 'Geometric', 'Rave', 'Bold'],
    featured: false,
    order: 3
  }
];