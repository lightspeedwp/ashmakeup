/**
 * @fileoverview Barrel export for all portfolio data
 * Central access point for portfolio entries
 * 
 * @module data/mock/portfolio
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 * 
 * @example
 * // Import specific portfolio collections
 * import { featuredWork, thailandWork } from '@/data/mock/portfolio';
 * 
 * // Import all portfolio work
 * import { allPortfolioWork } from '@/data/mock/portfolio';
 */

import { PortfolioEntry, PortfolioSection } from '../../types';

// Import all portfolio collections
export * from './featured';
export * from './thailand';
export * from './festivals';
export * from './uv-makeup';
export * from './nail-art';
export * from './swiss-festivals';

// Re-import for aggregation
import { featuredWork } from './featured';
import { thailandWork } from './thailand';
import { festivalWork } from './festivals';
import { uvMakeupWork } from './uv-makeup';
import { nailArtWork } from './nail-art';
import { shankraWork, reiserfieberWork, swissFestivalWork } from './swiss-festivals';

/**
 * All Portfolio Work Combined
 * Complete collection of all portfolio entries
 * 
 * @constant {PortfolioEntry[]}
 */
export const allPortfolioWork: PortfolioEntry[] = [
  ...featuredWork,
  ...thailandWork,
  ...festivalWork,
  ...uvMakeupWork,
  ...nailArtWork,
  ...swissFestivalWork
];

/**
 * Portfolio Sections
 * Organized groups of portfolio entries by category/theme
 * 
 * @constant {PortfolioSection[]}
 */
export const portfolioSections: PortfolioSection[] = [
  {
    id: 'featured-work',
    title: 'Featured Work',
    description: 'Standout pieces that capture the essence of festival artistry and creative expression.',
    entries: featuredWork,
    order: 1,
    decorativeColors: ['#ec4899', '#a855f7', '#3b82f6', '#6366f1']
  },
  {
    id: 'festivals',
    title: 'Festival Adventures',
    description: 'From explosive energy to peaceful celebrations — capturing the diverse spirit of festival culture through bold face art and vibrant self-expression.',
    entries: festivalWork,
    order: 2,
    decorativeColors: ['#fb923c', '#fbbf24', '#22c55e', '#10b981']
  },
  {
    id: 'thailand',
    title: 'Thailand Adventures',
    description: 'Tropical makeup exploration during travels through Thailand, blending local culture with artistic expression.',
    entries: thailandWork,
    order: 3,
    decorativeColors: ['#fbbf24', '#f97316', '#ef4444', '#dc2626']
  },
  {
    id: 'shankra-2023',
    title: 'Shankra Festival 2023',
    description: 'Swiss mountain festival experiences with alpine-inspired makeup artistry in breathtaking natural settings.',
    entries: shankraWork,
    order: 4,
    decorativeColors: ['#22c55e', '#10b981', '#14b8a6', '#0d9488']
  },
  {
    id: 'reiserfieber',
    title: 'Reiserfieber Switzerland',
    description: 'Mountain celebration makeup showcasing the vibrant energy of Swiss outdoor festival culture.',
    entries: reiserfieberWork,
    order: 5,
    decorativeColors: ['#a855f7', '#8b5cf6', '#7c3aed', '#6d28d9']
  },
  {
    id: 'uv-makeup',
    title: 'UV & Blacklight',
    description: 'Neon and glow-in-the-dark makeup for club and rave environments, designed to shine under UV lights.',
    entries: uvMakeupWork,
    order: 6,
    decorativeColors: ['#06b6d4', '#0891b2', '#0e7490', '#155e75']
  },
  {
    id: 'nail-art',
    title: 'Fusion Nails',
    description: 'Creative nail designs and fusion nail artistry showcasing color, texture, and artistic expression.',
    entries: nailArtWork,
    order: 7,
    decorativeColors: ['#ec4899', '#d946ef', '#c026d3', '#a21caf']
  }
];
