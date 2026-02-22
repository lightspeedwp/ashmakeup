/**
 * @fileoverview Mock Contentful hooks (CMS integration removed)
 * These hooks now return mock data from /data/mock instead of fetching from Contentful.
 * 
 * @module hooks/useContentful
 */

import { useState, useEffect } from 'react';
import { homepageHero } from '../data/mock/pages/home';
import { aboutHero } from '../data/mock/pages/about';
import { blogPosts } from '../data/mock/blog/posts';
import { allPortfolioWork, portfolioSections } from '../data/mock/portfolio';

/**
 * Hook for homepage content
 * Returns mock data from /data/mock/pages/home
 */
export function useHomepageContent() {
  return {
    data: {
      hero: homepageHero,
    },
    loading: false,
    isLoading: false,
    error: null,
    refresh: () => {}, // No-op refresh function
  };
}

/**
 * Hook for about page content
 * Returns mock data from /data/mock/pages/about
 */
export function useAboutPageContent() {
  return {
    data: {
      hero: aboutHero,
    },
    loading: false,
    isLoading: false,
    error: null,
    refresh: () => {},
  };
}

/**
 * Hook for portfolio sections
 * Returns mock data from /data/mock/portfolio
 */
export function usePortfolioSections() {
  return {
    data: portfolioSections,
    loading: false,
    isLoading: false,
    error: null,
    refresh: () => {},
  };
}

/**
 * Transform blog post to match expected format
 * Converts mock data structure to match component expectations
 */
function transformBlogPost(post: any) {
  return {
    ...post,
    // Add url field to featuredImage for compatibility
    featuredImage: post.featuredImage ? {
      ...post.featuredImage,
      url: post.featuredImage.src,
    } : undefined,
  };
}

/**
 * Hook for blog posts list
 * Returns mock data from /data/mock/blog with pagination
 */
export function useBlogPosts(options?: {
  category?: string;
  tags?: string[];
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  publishedOnly?: boolean;
  autoRefresh?: boolean;
  refreshInterval?: number;
}) {
  const page = options?.page || 1;
  const limit = options?.limit || 10;
  
  // Filter posts by category if provided
  let filteredPosts = [...blogPosts];
  
  if (options?.category) {
    filteredPosts = filteredPosts.filter(post => 
      post.category?.toLowerCase() === options.category?.toLowerCase()
    );
  }
  
  // Filter by tags if provided
  if (options?.tags && options.tags.length > 0) {
    filteredPosts = filteredPosts.filter(post =>
      post.tags?.some(tag => options.tags?.includes(tag))
    );
  }
  
  // Calculate pagination
  const totalPosts = filteredPosts.length;
  const totalPages = Math.ceil(totalPosts / limit);
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex).map(transformBlogPost);
  
  return {
    data: {
      posts: paginatedPosts,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalPosts: totalPosts,
        hasNext: page < totalPages,
        hasPrevious: page > 1,
        perPage: limit,
      },
    },
    loading: false,
    isLoading: false,
    error: null,
    refresh: () => {},
  };
}

/**
 * Hook for single blog post by slug
 * Returns mock data from /data/mock/blog
 */
export function useBlogPost(slug: string) {
  const [post, setPost] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) {
      setPost(null);
      setIsLoading(false);
      return;
    }
    
    setIsLoading(true);
    setError(null);
    
    try {
      const foundPost = blogPosts.find(p => p.slug === slug);
      setPost(foundPost ? transformBlogPost(foundPost) : null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setIsLoading(false);
    }
  }, [slug]);

  return {
    data: post,
    loading: isLoading,
    isLoading,
    error,
    refresh: () => {},
  };
}