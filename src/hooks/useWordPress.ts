/**
 * @fileoverview WordPress Data Hooks (Headless Mode)
 * Replacement for useContentful.ts when migrating to Headless WordPress.
 * 
 * Usage:
 * Swap imports in components from '@/hooks/useContentful' to '@/hooks/useWordPress'.
 */

import { useState, useEffect } from 'react';
import { BlogPost, PortfolioEntry, PortfolioSection } from '../data/types';
import { UNIFIED_PORTFOLIO_DATA } from '../utils/portfolioService';

// Configuration
const WP_API_URL = (import.meta.env && import.meta.env.VITE_WP_API_URL) || 'https://your-wordpress-site.com/wp-json/wp/v2';

/**
 * Generic fetcher for WP REST API with Header support
 */
async function fetchWP(endpoint: string) {
  const res = await fetch(`${WP_API_URL}${endpoint}`);
  if (!res.ok) throw new Error(`WP API Error: ${res.statusText}`);
  
  const total = parseInt(res.headers.get('X-WP-Total') || '0', 10);
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages') || '0', 10);
  
  const json = await res.json();
  return { json, total, totalPages };
}

/**
 * Helper to map WP Post to BlogPost
 */
function mapPostToBlog(p: any): BlogPost {
  return {
    id: p.id.toString(),
    slug: p.slug,
    title: p.title.rendered,
    excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ''), // Strip HTML from excerpt
    content: p.content.rendered,
    publishedAt: p.date,
    updatedAt: p.modified,
    featuredImage: p._embedded?.['wp:featuredmedia']?.[0]?.source_url 
      ? { 
          src: p._embedded['wp:featuredmedia'][0].source_url, 
          alt: p._embedded['wp:featuredmedia'][0].alt_text || '',
          width: p._embedded['wp:featuredmedia'][0].media_details?.width,
          height: p._embedded['wp:featuredmedia'][0].media_details?.height
        }
      : { src: '', alt: '' },
    category: p._embedded?.['wp:term']?.[0]?.[0]?.name || 'Uncategorized',
    tags: p._embedded?.['wp:term']?.[1]?.map((t: any) => t.name) || [],
    author: {
      name: p._embedded?.author?.[0]?.name || 'Ash Shaw',
      avatar: p._embedded?.author?.[0]?.avatar_urls?.['96'] || '',
      bio: p._embedded?.author?.[0]?.description || ''
    },
    readTime: parseInt(p.meta?._read_time || '5'),
    featured: p.meta?._featured === '1',
    faqs: p.meta?._faqs ? JSON.parse(p.meta._faqs) : []
  };
}

/**
 * Helper to map WP Portfolio CPT to PortfolioEntry
 */
function mapPostToPortfolio(p: any): PortfolioEntry {
  let images = [];
  try {
    // Try to parse the _images meta field (JSON string)
    if (p.meta?._images) {
      images = JSON.parse(p.meta._images);
    } else if (p._embedded?.['wp:featuredmedia']?.[0]) {
      // Fallback to featured image if no gallery
      images = [{
        src: p._embedded['wp:featuredmedia'][0].source_url,
        alt: p._embedded['wp:featuredmedia'][0].alt_text || '',
        title: p.title.rendered,
        position: 'center',
        aspectRatio: '4:3'
      }];
    }
  } catch (e) {
    if (import.meta.env.DEV) {
      console.warn('Failed to parse portfolio images', e);
    }
  }

  return {
    id: p.id.toString(),
    slug: p.slug,
    title: p.title.rendered,
    description: p.content.rendered, // Mapping content to description
    content: p.content.rendered,
    excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ''),
    category: p._embedded?.['wp:term']?.[0]?.[0]?.name || 'Festival Makeup',
    subcategory: p.meta?._subcategory || '',
    tags: p._embedded?.['wp:term']?.[1]?.map((t: any) => t.name) || [],
    images: images,
    location: p.meta?._location || '',
    event: p.meta?._event || '',
    date: p.date,
    featured: p.meta?._featured === '1',
    order: p.menu_order || 0, 
    faqs: p.meta?._faqs ? JSON.parse(p.meta._faqs) : []
  };
}

/**
 * Hook for blog posts list
 */
export function useBlogPosts(options?: { 
  category?: string;
  tags?: string[];
  page?: number; 
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}) {
  const [data, setData] = useState<{ 
    posts: BlogPost[]; 
    pagination: {
      currentPage: number;
      totalPages: number;
      totalPosts: number;
      hasNext: boolean;
      hasPrevious: boolean;
      perPage: number;
    }
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const page = options?.page || 1;
    const perPage = options?.limit || 10;
    
    // Construct query parameters
    let query = `/posts?page=${page}&per_page=${perPage}&_embed`;
    
    // Add category filter (requires mapping slug to ID, skipped for prototype complexity)
    // In a real app, we'd need to fetch category ID first or use a different endpoint
    
    setLoading(true);
    fetchWP(query)
      .then(({ json: posts, total, totalPages }) => {
        const mappedPosts = posts.map(mapPostToBlog);
        
        setData({ 
          posts: mappedPosts,
          pagination: {
            currentPage: page,
            totalPages: totalPages,
            totalPosts: total,
            hasNext: page < totalPages,
            hasPrevious: page > 1,
            perPage: perPage
          }
        });
      })
      .catch(err => {
        if (import.meta.env.DEV) {
          console.error('WP Fetch Error:', err);
        }
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [options?.page, options?.limit, options?.category, options?.tags]);

  return { data, loading, error, refresh: () => {} };
}

/**
 * Hook for single blog post
 */
export function useBlogPost(slug: string) {
  const [data, setData] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!slug) return;
    
    setLoading(true);
    fetchWP(`/posts?slug=${slug}&_embed`)
      .then(({ json: posts }) => {
        if (posts.length > 0) {
          setData(mapPostToBlog(posts[0]));
        } else {
          setData(null);
        }
      })
      .catch(err => {
        if (import.meta.env.DEV) {
          console.error('WP Fetch Error:', err);
        }
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [slug]);

  return { data, loading, error, refresh: () => {} };
}

/**
 * Hook for portfolio entries
 */
export function usePortfolioSections() {
  const [data, setData] = useState<PortfolioSection[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchWP(`/portfolio?per_page=100&_embed`) 
      .then(({ json: posts }) => {
        const mappedEntries = posts.map(mapPostToPortfolio);
        
        const sectionsMap = new Map<string, PortfolioEntry[]>();
        
        mappedEntries.forEach(entry => {
          const cat = entry.category || 'Other';
          if (!sectionsMap.has(cat)) {
            sectionsMap.set(cat, []);
          }
          sectionsMap.get(cat)?.push(entry);
        });

        const sections: PortfolioSection[] = Array.from(sectionsMap.entries()).map(([key, entries], index) => ({
          id: key.toLowerCase().replace(/\s+/g, '-'),
          title: key,
          description: `Portfolio entries for ${key}`,
          entries: entries,
          order: index,
          decorativeColors: ['#ec4899', '#a855f7'] 
        }));

        setData(sections);
      })
      .catch(err => {
        if (import.meta.env.DEV) {
          console.warn('WP Portfolio Fetch Error (CPT might be missing):', err);
        }
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error, refresh: () => {} };
}

/**
 * Hook for portfolio entries (flat list with filtering)
 * Replaces getPortfolioByCategory
 */
export function usePortfolioEntries(options?: {
  category?: string;
  featuredOnly?: boolean;
  limit?: number;
  page?: number;
}) {
  const [data, setData] = useState<{
    entries: PortfolioEntry[];
    pagination: {
      currentPage: number;
      totalPages: number;
      totalEntries: number;
      hasNext: boolean;
      hasPrevious: boolean;
      perPage: number;
    }
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const page = options?.page || 1;
    const limit = options?.limit || 10;
    
    // In WP, filtering by category/featured requires specific query params
    // For prototype, we fetch all and filter client side if CPT filter isn't easy
    // But ideally we use tax_query
    
    setLoading(true);
    fetchWP(`/portfolio?per_page=${limit}&page=${page}&_embed`)
      .then(({ json: posts, total, totalPages }) => {
        const entries = posts.map(mapPostToPortfolio);
        setData({
          entries,
          pagination: {
            currentPage: page,
            totalPages: totalPages,
            totalEntries: total,
            hasNext: page < totalPages,
            hasPrevious: page > 1,
            perPage: limit
          }
        });
      })
      .catch(err => {
        if (import.meta.env.DEV) {
          console.error('WP Portfolio Fetch Error:', err);
        }
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [options?.category, options?.featuredOnly, options?.page, options?.limit]);

  return { data, loading, error, refresh: () => {} };
}