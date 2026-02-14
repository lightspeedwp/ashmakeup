/**
 * @fileoverview Unified Portfolio Service for Ash Shaw Makeup Portfolio
 * 
 * Provides centralized portfolio data management shared between homepage FeaturedSection
 * and PortfolioMainPage to ensure consistent content display and category filtering.
 * 
 * Features:
 * - Unified data structure for all portfolio content
 * - Category-based filtering with proper type safety
 * - Contentful CMS integration with static fallbacks
 * - Consistent image handling and optimization
 * - Featured item selection and ordering
 * 
 * Architecture:
 * - Single source of truth for portfolio data (sourcing from @/data/mock/portfolio)
 * - Seamless integration between homepage and portfolio page
 * - Proper TypeScript interfaces for data consistency
 * - Performance optimized with caching and lazy loading
 * 
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Refactor to use centralized mock data
 */

import { allPortfolioWork } from '../data/mock/portfolio/index';
import { PortfolioEntry } from '../data/types/portfolio';

// Re-export types for consumers
export type { PortfolioEntry };

/**
 * Portfolio category configuration matching PortfolioMainPage structure
 * Defines the 6 main categories with visual styling and metadata
 */
export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    id: 'all',
    name: 'All Work',
    slug: 'all',
    description: 'Complete portfolio showcasing diverse makeup artistry',
    gradient: 'bg-gradient-pink-purple-blue',
  },
  {
    id: 'Festival Makeup',
    name: 'Festival',
    slug: 'festival',
    description: 'Vibrant festival artistry and celebration makeup',
    gradient: 'bg-gradient-blue-teal-green',
  },
  {
    id: 'UV Makeup',
    name: 'UV & Blacklight',
    slug: 'uv-blacklight',
    description: 'Electric nightlife artistry with UV-reactive paints',
    gradient: 'bg-gradient-gold-peach-coral',
  },
  {
    id: 'Swiss Festivals',
    name: 'Swiss Festivals',
    slug: 'swiss-festivals',
    description: 'Alpine festival experiences and mountain celebrations',
    gradient: 'bg-gradient-blue-teal-green',
  },
  {
    id: 'Fusion Nails',
    name: 'Fusion Nails',
    slug: 'fusion-nails',
    description: 'Creative nail artistry with vibrant designs',
    gradient: 'bg-gradient-pink-purple-blue',
  },
  {
    id: 'Thailand Adventures',
    name: 'Thailand',
    slug: 'thailand',
    description: 'Tropical festival experiences and cultural immersion',
    gradient: 'bg-gradient-gold-peach-coral',
  },
];

/**
 * Image interface for consistent image handling
 */
export interface PortfolioImage {
  src: string;
  alt: string;
  caption: string;
  description: string;
}

/**
 * Portfolio category configuration
 */
export interface PortfolioCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  gradient?: string; // Optional gradient class for UI
}

/**
 * Unified portfolio entry interface
 * Used by both homepage FeaturedSection and PortfolioMainPage
 */
export interface UnifiedPortfolioEntry {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  images: PortfolioImage[];
  category: string; // Must match PORTFOLIO_CATEGORIES id
  date?: string;
  featured?: boolean; // For homepage featured section
  displayOrder?: number; // For consistent ordering
  tags?: string[]; // For additional filtering
}

/**
 * Helper function to validate image URLs for browser compatibility
 * Updated to allow figma:asset/ URLs for imported Figma assets and filter out problematic entries
 */
function hasValidImageURLs(entry: any): boolean {
  const hasValidImages = entry.images && entry.images.length > 0 && 
    entry.images.some((img: any) => {
      if (!img.src) return false;
      // Allow https:// URLs, data URLs, and local paths (imported assets)
      if (img.src.startsWith('https://') || img.src.startsWith('data:') || img.src.startsWith('/')) {
        return true;
      }
      // For figma:asset/ URLs, only allow ones that are mapped in PortfolioImage.tsx
      if (img.src.startsWith('figma:asset/')) {
        // List of known working figma assets (should match PortfolioImage.tsx FIGMA_ASSET_MAP)
        const knownWorkingAssets = [
          'figma:asset/7afa71c7ec4457a1c1983db257703a6c92a9cce7.png',
          'figma:asset/1cd08d3825ac7cc423a4672f8ed279139fc99d0a.png',
          'figma:asset/3eb83eb2d4eb493b80283c1b75770d8893b2fc6a.png',
          'figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png',
          'figma:asset/d99e9e671329d5df41ad0f55042fb3f135e30fdf.png',
          'figma:asset/bb2d15f1b5450668f0a032ad3765e13d8db4fdd2.png',
          'figma:asset/e46fceb6809b8f1b7ef5c578d40578eadf301207.png',
          'figma:asset/2678f2e48d60b8ccd6855469149ffc2cd8877e1c.png',
          'figma:asset/04aa88bd7a81e3f14ceb68f980492bf374b041db.png',
          'figma:asset/21372d3f219fd74d2e3cf146d9b1111cd6736b6d.png',
          'figma:asset/a7af693fc872d71d588da4e937939b615aa77796.png',
          'figma:asset/67d17491919b3e8d50187f4923b8bbbdc1f03c5e.png'
        ];
        return knownWorkingAssets.includes(img.src);
      }
      return false;
    });
  
  // Debug logging for development
  if (import.meta?.env?.DEV && !hasValidImages) {
    console.log(`🚫 Filtering out entry "${entry.title}" - invalid or unmapped figma:asset URLs:`, 
      entry.images?.map((img: any) => img.src) || 'No images'
    );
  }
  
  return hasValidImages;
}

/**
 * Maps the mock data category to the UI category
 */
function mapCategory(category: string, tags: string[] = []): string {
  const lowerTags = tags.map(t => t.toLowerCase());
  const lowerCategory = category.toLowerCase();

  if (lowerCategory.includes('nail')) return 'Fusion Nails';
  if (lowerCategory.includes('uv') || lowerTags.includes('uv') || lowerTags.includes('blacklight')) return 'UV Makeup';
  if (lowerTags.includes('thailand') || lowerTags.includes('jungle')) return 'Thailand Adventures';
  if (lowerTags.includes('swiss') || lowerTags.includes('switzerland') || lowerTags.includes('shankra') || lowerTags.includes('reiserfieber')) return 'Swiss Festivals';
  
  // Default fallback map
  if (category === 'Body Art') return 'Festival Makeup';
  if (category === 'Nail Art') return 'Fusion Nails';
  
  return 'Festival Makeup';
}

/**
 * Transforms a Mock PortfolioEntry to a UnifiedPortfolioEntry
 */
function transformEntry(entry: PortfolioEntry): UnifiedPortfolioEntry {
  // Determine the correct category
  const uiCategory = mapCategory(entry.category, entry.tags);

  return {
    id: entry.id,
    title: entry.title,
    subtitle: entry.excerpt || entry.location || entry.event || entry.date || uiCategory,
    description: entry.description,
    images: entry.images.map(img => ({
      src: img.src,
      alt: img.alt,
      caption: img.title || img.caption || entry.title,
      description: img.description || img.caption || entry.title,
    })),
    category: uiCategory,
    date: entry.date,
    featured: entry.featured,
    displayOrder: entry.order,
    tags: entry.tags,
  };
}

/**
 * Comprehensive portfolio data sourced from centralized mock data
 * Filters out entries with invalid figma:asset/ URLs for browser compatibility
 */
export const UNIFIED_PORTFOLIO_DATA: UnifiedPortfolioEntry[] = allPortfolioWork
  .filter(hasValidImageURLs)
  .map(transformEntry);

// Development analytics to verify data structure
if (import.meta?.env?.DEV) {
  console.log('📊 UNIFIED_PORTFOLIO_DATA Analytics (New Service):');
  console.log('  - Total entries:', UNIFIED_PORTFOLIO_DATA.length);
  console.log('  - Featured entries:', UNIFIED_PORTFOLIO_DATA.filter(e => e.featured === true).length);
  console.log('  - Categories breakdown:');
  
  const categoryCounts = UNIFIED_PORTFOLIO_DATA.reduce((acc, entry) => {
    acc[entry.category] = (acc[entry.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);
  
  Object.entries(categoryCounts).forEach(([category, count]) => {
    console.log(`    - ${category}: ${count} entries`);
  });
  
  console.log('  - Featured entries details:');
  UNIFIED_PORTFOLIO_DATA
    .filter(e => e.featured === true)
    .forEach(entry => {
      console.log(`    - "${entry.title}" (${entry.category}) - Order: ${entry.displayOrder}`);
    });
}

/**
 * Get portfolio entries filtered by category
 * 
 * @param categoryId - Category ID to filter by ('all' returns all entries)
 * @param featuredOnly - Whether to return only featured entries
 * @param limit - Maximum number of entries to return
 * @returns Filtered and sorted portfolio entries
 */
export function getPortfolioByCategory(
  categoryId: string = 'all',
  featuredOnly: boolean = false,
  limit?: number
): UnifiedPortfolioEntry[] {
  let filteredEntries = UNIFIED_PORTFOLIO_DATA;

  // Filter by category
  if (categoryId !== 'all') {
    filteredEntries = filteredEntries.filter(entry => entry.category === categoryId);
  }

  // Filter by featured status
  if (featuredOnly) {
    filteredEntries = filteredEntries.filter(entry => entry.featured === true);
  }

  // Sort by display order
  filteredEntries = filteredEntries.sort((a, b) => {
    const orderA = a.displayOrder || 999;
    const orderB = b.displayOrder || 999;
    return orderA - orderB;
  });

  // Apply limit if specified
  if (limit && limit > 0) {
    filteredEntries = filteredEntries.slice(0, limit);
  }

  return filteredEntries;
}

/**
 * Get featured portfolio entries for homepage display
 * Returns the top 6 featured entries across all categories
 */
export function getFeaturedPortfolioEntries(limit: number = 6): UnifiedPortfolioEntry[] {
  const featuredEntries = getPortfolioByCategory('all', true, limit);
  return featuredEntries;
}

/**
 * Get portfolio entry by ID
 * 
 * @param id - Portfolio entry ID
 * @returns Portfolio entry or undefined if not found
 */
export function getPortfolioEntryById(id: string): UnifiedPortfolioEntry | undefined {
  return UNIFIED_PORTFOLIO_DATA.find(entry => entry.id === id);
}

/**
 * Get portfolio categories for filtering UI
 * 
 * @returns Array of portfolio categories with metadata
 */
export function getPortfolioCategories() {
  return PORTFOLIO_CATEGORIES;
}

/**
 * Get portfolio statistics for analytics
 * 
 * @returns Portfolio statistics object
 */
export function getPortfolioStats() {
  const totalEntries = UNIFIED_PORTFOLIO_DATA.length;
  const featuredEntries = UNIFIED_PORTFOLIO_DATA.filter(entry => entry.featured).length;
  const categoryCounts = PORTFOLIO_CATEGORIES.reduce((acc, category) => {
    if (category.id === 'all') return acc;
    acc[category.id] = getPortfolioByCategory(category.id).length;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalEntries,
    featuredEntries,
    categoryCounts,
    categories: PORTFOLIO_CATEGORIES.length - 1, // Exclude 'all' category
  };
}
