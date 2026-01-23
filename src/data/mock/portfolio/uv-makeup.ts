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
        src: 'figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png',
        alt: 'Neon Warrior - UV face paint with vibrant rainbow streaks at festival',
        title: 'Neon Warrior',
        caption: 'Under UV Light',
        description: 'Beautiful woman with rainbow UV face paint streaks and bright smile',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Festival',
    description: 'Bold UV reactive makeup creating vibrant rainbow streaks with festival energy.',
    excerpt: 'Vibrant UV rainbow warrior',
    tags: ['UV', 'Neon', 'Rainbow', 'Warrior', 'Festival'],
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
        src: 'figma:asset/d99e9e671329d5df41ad0f55042fb3f135e30fdf.png',
        alt: 'Rainbow Lightning - UV dots under eyes with rainbow body paint',
        title: 'Rainbow Lightning',
        caption: 'Rainbow Dots',
        description: 'Redhead with UV dots under eyes and rainbow body paint',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'UV Party',
    description: 'Vibrant UV dots and rainbow body paint creating electric festival energy.',
    excerpt: 'Electric rainbow UV art',
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
        src: 'figma:asset/bb2d15f1b5450668f0a032ad3765e13d8db4fdd2.png',
        alt: 'Electric Blue - rainbow UV face paint with jellyfish ear accessory',
        title: 'Electric Blue',
        caption: 'Rainbow UV',
        description: 'Man with rainbow UV face paint and jellyfish ear accessory',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Underground Rave',
    description: 'Bold rainbow UV face paint with unique accessories for underground rave energy.',
    excerpt: 'Playful rainbow UV patterns',
    tags: ['UV', 'Rainbow', 'Creative', 'Rave', 'Bold'],
    featured: false,
    order: 3
  }
];