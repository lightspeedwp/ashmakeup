/**
 * @fileoverview Unified Content Hooks Facade
 * 
 * Provides centralized data access that switches between Mock Data and WordPress API
 * based on the VITE_USE_WORDPRESS environment variable.
 * 
 * Usage:
 * import { useBlogPosts, usePortfolioEntries } from '@/hooks/useContent';
 */

import { useState, useEffect } from 'react';
import { 
  useBlogPosts as useMockBlogPosts, 
  useBlogPost as useMockBlogPost,
  usePortfolioSections as useMockPortfolioSections
} from './useMockData';

import {
  useBlogPosts as useWPBlogPosts,
  useBlogPost as useWPBlogPost,
  usePortfolioSections as useWPPortfolioSections,
  usePortfolioEntries as useWPPortfolioEntries
} from './useWordPress';

import { 
  getPortfolioByCategory, 
  getFeaturedPortfolioEntries,
  getPortfolioEntryById,
  UnifiedPortfolioEntry
} from '../utils/portfolioService';

// import.meta.env access completely removed — proven unreliable in this bundler
// WordPress mode disabled by default; toggle requires rebuild with env var
const USE_WORDPRESS = false;

// -----------------------------------------------------------------------------
// Blog Hooks
// -----------------------------------------------------------------------------

export function useBlogPosts(options?: any) {
  // If WP is enabled, use WP hook
  if (USE_WORDPRESS) {
    const wpResult = useWPBlogPosts(options);
    
    // Adapt WP result to match expected component interface (pagination inside data)
    return {
      data: wpResult.data || { 
        posts: [], 
        pagination: { 
          currentPage: 1, 
          totalPages: 1, 
          totalPosts: 0, 
          hasNext: false, 
          hasPrevious: false, 
          perPage: 10 
        } 
      },
      loading: wpResult.loading,
      isLoading: wpResult.loading,
      error: wpResult.error,
      refresh: wpResult.refresh
    };
  }
  
  // Otherwise use mock hook
  return useMockBlogPosts(options);
}

export function useBlogPost(slug: string) {
  if (USE_WORDPRESS) {
    const wpResult = useWPBlogPost(slug);
    return {
      data: wpResult.data,
      loading: wpResult.loading,
      isLoading: wpResult.loading,
      error: wpResult.error,
      refresh: wpResult.refresh
    };
  }
  return useMockBlogPost(slug);
}

// -----------------------------------------------------------------------------
// Portfolio Hooks
// -----------------------------------------------------------------------------

/**
 * Hook for portfolio sections (grouped)
 */
export function usePortfolioSections() {
  if (USE_WORDPRESS) {
    const wpResult = useWPPortfolioSections();
    return {
      data: wpResult.data || [], 
      loading: wpResult.loading,
      isLoading: wpResult.loading,
      error: wpResult.error,
      refresh: wpResult.refresh
    };
  }
  return useMockPortfolioSections();
}

/**
 * Hook for portfolio entries (flat list)
 * 
 * In Mock mode: Simulates async behavior using synchronous utility
 * In WP mode: Uses real async hook
 */
export function usePortfolioEntries(options?: {
  category?: string;
  featuredOnly?: boolean;
  limit?: number;
  page?: number;
}) {
  // WP Mode
  if (USE_WORDPRESS) {
    const wpResult = useWPPortfolioEntries(options);
    
    // Convert WP result to generic structure if needed
    // useWPPortfolioEntries returns { data: { entries, pagination }, loading, error }
    // which matches what we want
    return wpResult;
  }

  // Mock Mode (Simulate Async)
  const contentDataInit: {
    entries: UnifiedPortfolioEntry[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalEntries: number;
      hasNext: boolean;
      hasPrevious: boolean;
      perPage: number;
    }
  } | null = null;
  const [data, setData] = useState(contentDataInit);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate network delay
    const timer = setTimeout(() => {
      const optPage = options ? options.page : undefined;
      const optLimit = options ? options.limit : undefined;
      const optCategory = options ? options.category : undefined;
      const optFeaturedOnly = options ? options.featuredOnly : undefined;
      const page = optPage || 1;
      const limit = optLimit || 10;
      
      const allEntries = getPortfolioByCategory(
        optCategory || 'all',
        optFeaturedOnly || false
      );
      
      const totalEntries = allEntries.length;
      const totalPages = Math.ceil(totalEntries / limit);
      const startIndex = (page - 1) * limit;
      const paginatedEntries = allEntries.slice(startIndex, startIndex + limit);
      
      setData({
        entries: paginatedEntries,
        pagination: {
          currentPage: page,
          totalPages,
          totalEntries,
          hasNext: page < totalPages,
          hasPrevious: page > 1,
          perPage: limit
        }
      });
      setLoading(false);
    }, 300); // 300ms delay
    
    return () => clearTimeout(timer);
  }, [options]);

  return { data, loading, error: null, refresh: () => {} };
}

// -----------------------------------------------------------------------------
// Legacy Hook Re-exports (for backward compatibility)
// -----------------------------------------------------------------------------

export { useHomepageContent, useAboutPageContent } from './useMockData';