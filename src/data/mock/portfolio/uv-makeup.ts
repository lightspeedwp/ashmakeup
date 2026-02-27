/**
 * @fileoverview UV/blacklight makeup portfolio
 * Neon and glow-in-the-dark makeup for club and rave environments
 * 
 * @module data/mock/portfolio/uv-makeup
 * @author Ash Shaw Portfolio Team
 * @version 2.2.0 - Fixed figma:asset imports
 */

import { PortfolioEntry } from '../../types';

// Placeholder images - Replace with actual images
const rainbowLightningImg = "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80";
const electricBlueImg = "https://images.unsplash.com/photo-1514866726862-0f081731e63f?w=800&q=80";

/**
 * UV Makeup Portfolio
 * Neon, blacklight, and glow-in-the-dark work
 * 
 * @constant {PortfolioEntry[]}
 */
export const uvMakeupWork: PortfolioEntry[] = [
  {
    id: 'rainbow-lightning',
    slug: 'rainbow-lightning',
    title: 'Rainbow Lightning',
    category: 'UV Makeup',
    date: '2024-11-02',
    images: [
      {
        src: rainbowLightningImg,
        alt: 'Rainbow Lightning - UV dots under eyes with rainbow body paint',
        title: 'Rainbow Lightning',
        caption: 'Rainbow Dots',
        description: 'Redhead with UV dots under eyes and rainbow body paint',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Psytrance Festival',
    description: 'Vibrant UV dots and rainbow body paint creating electric energy for the main stage.',
    excerpt: 'Electric rainbow UV art',
    tags: ['UV', 'Rainbow', 'Neon', 'Electric', 'Psytrance'],
    featured: false,
    order: 2
  },
  {
    id: 'electric-blue',
    slug: 'electric-blue',
    title: 'Electric Blue',
    category: 'UV Makeup',
    date: '2024-11-15',
    images: [
      {
        src: electricBlueImg,
        alt: 'Electric Blue - rainbow UV face paint with jellyfish ear accessory',
        title: 'Electric Blue',
        caption: 'Rainbow UV',
        description: 'Man with rainbow UV face paint and jellyfish ear accessory',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Berlin Underground',
    description: 'Bold rainbow UV face paint with unique jellyfish accessories, designed for the deep techno bunker.',
    excerpt: 'Playful rainbow UV patterns',
    tags: ['UV', 'Rainbow', 'Creative', 'Techno', 'Bold'],
    featured: false,
    order: 3
  }
];
