/**
 * @fileoverview Barrel export for all portfolio data
 * Central access point for portfolio entries
 * 
 * @module data/mock/portfolio
 * @author Ash Shaw Portfolio Team
 * @version 1.1.0
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
export * from './categories';
export * from './tags';

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
    title: 'Featured Psytrance Art',
    description: 'Standout UV and neon pieces that capture the high-energy essence of global psytrance festivals.',
    entries: featuredWork,
    order: 1,
    decorativeColors: ['#ec4899', '#a855f7', '#3b82f6', '#6366f1']
  },
  {
    id: 'festivals',
    title: 'Global Festival Circuit',
    description: 'From explosive main stages to intimate chill-out zones — capturing the diverse spirit of international psytrance culture through bold face art.',
    entries: festivalWork,
    order: 2,
    decorativeColors: ['#fb923c', '#fbbf24', '#22c55e', '#10b981']
  },
  {
    id: 'thailand',
    title: 'Thailand Psytrance Season',
    description: 'Neon jungle vibes and island moon parties. Tropical makeup exploration during the Southeast Asian psytrance season.',
    entries: thailandWork,
    order: 3,
    decorativeColors: ['#fbbf24', '#f97316', '#ef4444', '#dc2626']
  },
  {
    id: 'shankra-2023',
    title: 'Shankra Festival Switzerland',
    description: 'Alpine psytrance magic. Mountain celebration makeup showcasing the vibrant energy of Swiss outdoor festival culture.',
    entries: shankraWork,
    order: 4,
    decorativeColors: ['#22c55e', '#10b981', '#14b8a6', '#0d9488']
  },
  {
    id: 'reiserfieber',
    title: 'Reiserfieber Switzerland',
    description: 'Deep woods gatherings. Mountain celebration makeup showcasing the vibrant energy of Swiss outdoor festival culture.',
    entries: reiserfieberWork,
    order: 5,
    decorativeColors: ['#a855f7', '#8b5cf6', '#7c3aed', '#6d28d9']
  },
  {
    id: 'uv-makeup',
    title: 'UV & Blacklight',
    description: 'Neon and glow-in-the-dark makeup for club and rave environments, designed to come alive under the UV lights of the trance floor.',
    entries: uvMakeupWork,
    order: 6,
    decorativeColors: ['#06b6d4', '#0891b2', '#0e7490', '#155e75']
  },
  {
    id: 'nail-art',
    title: 'Psychedelic Fusion Nails',
    description: 'Creative nail designs and fusion nail artistry showcasing color, texture, and trippy artistic expression.',
    entries: nailArtWork,
    order: 7,
    decorativeColors: ['#ec4899', '#d946ef', '#c026d3', '#a21caf']
  }
];