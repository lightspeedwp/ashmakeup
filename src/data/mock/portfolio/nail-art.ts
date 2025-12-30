/**
 * @fileoverview Nail art portfolio
 * Creative nail designs and fusion nail artistry
 * 
 * @module data/mock/portfolio/nail-art
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Updated with actual Figma assets
 */

import { PortfolioEntry } from '../../types';

/**
 * Nail Art Portfolio
 * Creative nail designs and sticker art
 * 
 * @constant {PortfolioEntry[]}
 */
export const nailArtWork: PortfolioEntry[] = [
  {
    id: 'rainbow-fusion',
    slug: 'rainbow-fusion-nails',
    title: 'Rainbow Fusion',
    category: 'Nail Art',
    subcategory: 'Sticker Art Collection',
    images: [
      {
        src: 'figma:asset/7c570c5291977a816c8152a098cd6693cff22dbd.png',
        alt: 'Rainbow Fusion nail art with colorful sticker art and holographic details',
        title: 'Rainbow Fusion',
        caption: 'Full Set',
        description: 'Vibrant multi-color rainbow design using creative sticker art techniques',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    description: 'Vibrant multi-color rainbow design using creative sticker art techniques with holographic accents.',
    excerpt: 'Vibrant rainbow sticker art',
    tags: ['Nail Art', 'Rainbow', 'Fusion', 'Stickers', 'Colorful', 'Holographic'],
    featured: true,
    order: 1
  },
  {
    id: 'galaxy-nails',
    slug: 'galaxy-nails',
    title: 'Galaxy Nails',
    category: 'Nail Art',
    subcategory: 'Fusion Nails',
    images: [
      {
        src: 'figma:asset/1ec0ba217cad06e2cff662a25a050b0401d1092a.png',
        alt: 'Galaxy Nails with iridescent blues and greens with cosmic shimmer',
        title: 'Galaxy Nails',
        caption: 'Galaxy Effect',
        description: 'Cosmic-inspired design with iridescent finish and beautiful shimmer effects',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    description: 'Iridescent blues and greens with cosmic shimmer. Cosmic-inspired design with iridescent finish and beautiful shimmer effects.',
    excerpt: 'Cosmic galaxy-inspired shimmer',
    tags: ['Nail Art', 'Galaxy', 'Iridescent', 'Cosmic', 'Shimmer'],
    featured: true,
    order: 2
  },
  {
    id: 'gradient-dreams',
    slug: 'gradient-dreams-nails',
    title: 'Gradient Dreams',
    category: 'Nail Art',
    subcategory: 'Fusion Nails',
    images: [
      {
        src: 'figma:asset/deb2b4ab4cb25c5e47b960708fce6ea552ee6039.png',
        alt: 'Gradient Dreams nail art with purple to green ombre and metallic finish',
        title: 'Gradient Dreams',
        caption: 'Ombre Effect',
        description: 'Smooth color transition with metallic topcoat showing beautiful color shifts',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    description: 'Purple to green ombre with metallic finish. Smooth color transition with metallic topcoat showing beautiful color shifts in different lighting.',
    excerpt: 'Purple to green ombre gradient',
    tags: ['Nail Art', 'Gradient', 'Ombre', 'Metallic', 'Color Shift'],
    featured: true,
    order: 3
  },
  {
    id: 'neon-pop',
    slug: 'neon-pop-nails',
    title: 'Neon Pop',
    category: 'Nail Art',
    subcategory: 'Fusion Nails',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1701626772688-909f2a0712bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwbmFpbCUyMGFydCUyMHZpYnJhbnQlMjBjb2xvcnN8ZW58MXx8fHwxNzU5Mjk3MTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Neon Pop nails - vibrant red and green with metallic accents',
        title: 'Neon Pop - Main',
        caption: 'Neon Pop',
        description: 'Bold festival-inspired nail art perfect for celebrations',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    description: 'Vibrant red and green festival vibes with metallic accents. Bold festival-inspired nail art perfect for celebrations.',
    excerpt: 'Vibrant neon nails with metallic accents',
    tags: ['Nail Art', 'Neon', 'Metallic', 'Festival', 'Vibrant'],
    featured: false,
    order: 4
  }
];