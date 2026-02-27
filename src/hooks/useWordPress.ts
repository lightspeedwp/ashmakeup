/**
 * @fileoverview WordPress Data Hooks (Headless Mode)
 * Replacement for useContentful.ts when migrating to Headless WordPress.
 * 
 * BUNDLER SAFETY: No optional chaining (?.) or nullish coalescing (??)
 * 
 * Usage:
 * Swap imports in components from '@/hooks/useContentful' to '@/hooks/useWordPress'.
 */

import { useState, useEffect } from 'react';
import { BlogPost, PortfolioEntry, PortfolioSection } from '../data/types';
import { UNIFIED_PORTFOLIO_DATA } from '../utils/portfolioService';

// import.meta.env access completely removed — proven unreliable in this bundler
const WP_API_URL = 'https://your-wordpress-site.com/wp-json/wp/v2';

/**
 * Safe nested property access helper
 */
function safeGet(obj: any, ...keys: (string | number)[]): any {
  let current = obj;
  for (let i = 0; i < keys.length; i++) {
    if (current === null || current === undefined) return undefined;
    current = current[keys[i]];
  }
  return current;
}

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
  const embedded = p._embedded || {};
  const featuredMedia = safeGet(embedded, 'wp:featuredmedia', 0);
  const wpTerms = safeGet(embedded, 'wp:term');
  const authorData = safeGet(embedded, 'author', 0);
  const meta = p.meta || {};

  const featuredSrc = featuredMedia ? (featuredMedia.source_url || '') : '';
  const featuredAlt = featuredMedia ? (featuredMedia.alt_text || '') : '';
  const mediaDetails = featuredMedia ? (featuredMedia.media_details || {}) : {};

  const categoryTerm = safeGet(wpTerms, 0, 0);
  const categoryName = categoryTerm ? (categoryTerm.name || 'Uncategorized') : 'Uncategorized';

  const tagTerms = safeGet(wpTerms, 1);
  const tags = tagTerms ? tagTerms.map((t: any) => t.name) : [];

  const authorName = authorData ? (authorData.name || 'Ash Shaw') : 'Ash Shaw';
  const avatarUrls = authorData ? (authorData.avatar_urls || {}) : {};
  const authorAvatar = avatarUrls['96'] || '';
  const authorBio = authorData ? (authorData.description || '') : '';

  const readTimeStr = meta._read_time || '5';
  const isFeatured = meta._featured === '1';
  const faqsRaw = meta._faqs;
  const faqs = faqsRaw ? JSON.parse(faqsRaw) : [];

  const hasFeaturedImage = featuredSrc.length > 0;

  return {
    id: p.id.toString(),
    slug: p.slug,
    title: p.title.rendered,
    excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ''),
    content: p.content.rendered,
    publishedAt: p.date,
    updatedAt: p.modified,
    featuredImage: hasFeaturedImage
      ? { 
          src: featuredSrc, 
          alt: featuredAlt,
          width: mediaDetails.width,
          height: mediaDetails.height
        }
      : { src: '', alt: '' },
    category: categoryName,
    tags: tags,
    author: {
      name: authorName,
      avatar: authorAvatar,
      bio: authorBio
    },
    readTime: parseInt(readTimeStr),
    featured: isFeatured,
    faqs: faqs
  };
}

/**
 * Helper to map WP Portfolio CPT to PortfolioEntry
 */
function mapPostToPortfolio(p: any): PortfolioEntry {
  const embedded = p._embedded || {};
  const meta = p.meta || {};
  const featuredMedia = safeGet(embedded, 'wp:featuredmedia', 0);
  const wpTerms = safeGet(embedded, 'wp:term');

  let images: any[] = [];
  try {
    const imagesRaw = meta._images;
    if (imagesRaw) {
      images = JSON.parse(imagesRaw);
    } else if (featuredMedia) {
      images = [{
        src: featuredMedia.source_url || '',
        alt: featuredMedia.alt_text || '',
        title: p.title.rendered,
        position: 'center',
        aspectRatio: '4:3'
      }];
    }
  } catch (e) {
    console.warn('Failed to parse portfolio images');
  }

  const categoryTerm = safeGet(wpTerms, 0, 0);
  const categoryName = categoryTerm ? (categoryTerm.name || 'Festival Makeup') : 'Festival Makeup';

  const tagTerms = safeGet(wpTerms, 1);
  const tags = tagTerms ? tagTerms.map((t: any) => t.name) : [];

  const faqsRaw = meta._faqs;
  const faqs = faqsRaw ? JSON.parse(faqsRaw) : [];

  return {
    id: p.id.toString(),
    slug: p.slug,
    title: p.title.rendered,
    description: p.content.rendered,
    content: p.content.rendered,
    excerpt: p.excerpt.rendered.replace(/<[^>]+>/g, ''),
    category: categoryName,
    subcategory: meta._subcategory || '',
    tags: tags,
    images: images,
    location: meta._location || '',
    event: meta._event || '',
    date: p.date,
    featured: meta._featured === '1',
    order: p.menu_order || 0, 
    faqs: faqs
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

  const optPage = options ? options.page : undefined;
  const optLimit = options ? options.limit : undefined;
  const optCategory = options ? options.category : undefined;
  const optTags = options ? options.tags : undefined;

  useEffect(() => {
    const page = optPage || 1;
    const perPage = optLimit || 10;
    
    const query = `/posts?page=${page}&per_page=${perPage}&_embed`;
    
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
        console.error('WP Fetch Error');
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [optPage, optLimit, optCategory, optTags]);

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
        console.error('WP Fetch Error');
        console.error(err);
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
        
        mappedEntries.forEach((entry: PortfolioEntry) => {
          const cat = entry.category || 'Other';
          if (!sectionsMap.has(cat)) {
            sectionsMap.set(cat, []);
          }
          const existing = sectionsMap.get(cat);
          if (existing) {
            existing.push(entry);
          }
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
        console.warn('WP Portfolio Fetch Error (CPT might be missing)');
        setError(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return { data, loading, error, refresh: () => {} };
}

/**
 * Hook for portfolio entries (flat list with filtering)
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

  const optPage = options ? options.page : undefined;
  const optLimit = options ? options.limit : undefined;
  const optCategory = options ? options.category : undefined;
  const optFeaturedOnly = options ? options.featuredOnly : undefined;

  useEffect(() => {
    const page = optPage || 1;
    const limit = optLimit || 10;
    
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
        console.error('WP Portfolio Fetch Error');
        console.error(err);
        setError(err);
      })
      .finally(() => setLoading(false));
  }, [optPage, optLimit, optCategory, optFeaturedOnly]);

  return { data, loading, error, refresh: () => {} };
}