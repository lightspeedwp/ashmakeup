/**
 * Instagram Graph API Service
 * 
 * Integration with Instagram Basic Display API for fetching recent posts
 * Auto-updates feed every 24 hours with caching
 * 
 * @module utils/instagramService
 */

export interface InstagramPost {
  id: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  caption?: string;
  timestamp: string;
  like_count?: number;
  comments_count?: number;
  username: string;
}

interface InstagramApiResponse {
  data: InstagramPost[];
  paging?: {
    cursors: {
      before: string;
      after: string;
    };
    next?: string;
  };
}

// Cache configuration
const CACHE_KEY = 'instagram_feed_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

interface CachedData {
  posts: InstagramPost[];
  timestamp: number;
}

/**
 * Check if Instagram API is configured
 */
export function isInstagramConfigured(): boolean {
  try {
    const accessToken = import.meta?.env?.VITE_INSTAGRAM_ACCESS_TOKEN;
    const userId = import.meta?.env?.VITE_INSTAGRAM_USER_ID;
    return Boolean(accessToken && userId);
  } catch (error) {
    console.log('Environment variables not available');
    return false;
  }
}

/**
 * Get cached Instagram posts if available and not expired
 */
function getCachedPosts(): InstagramPost[] | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const data: CachedData = JSON.parse(cached);
    const now = Date.now();
    
    // Check if cache is expired
    if (now - data.timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    
    console.log('📸 Using cached Instagram posts');
    return data.posts;
  } catch (error) {
    console.error('Error reading Instagram cache:', error);
    return null;
  }
}

/**
 * Cache Instagram posts
 */
function cachePosts(posts: InstagramPost[]): void {
  try {
    const data: CachedData = {
      posts,
      timestamp: Date.now()
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    console.log('✅ Instagram posts cached for 24 hours');
  } catch (error) {
    console.error('Error caching Instagram posts:', error);
  }
}

/**
 * Fetch Instagram posts from Graph API
 * 
 * @param count Number of posts to fetch (default: 6)
 * @returns Promise with Instagram posts
 */
export async function fetchInstagramPosts(count: number = 6): Promise<InstagramPost[]> {
  // Check cache first
  const cachedPosts = getCachedPosts();
  if (cachedPosts) {
    return cachedPosts.slice(0, count);
  }
  
  // Check if API is configured
  if (!isInstagramConfigured()) {
    console.log('📱 Instagram API not configured, using mock data');
    throw new Error('INSTAGRAM_NOT_CONFIGURED');
  }
  
  try {
    const accessToken = import.meta?.env?.VITE_INSTAGRAM_ACCESS_TOKEN;
    const userId = import.meta?.env?.VITE_INSTAGRAM_USER_ID;
    
    if (!accessToken || !userId) {
      throw new Error('INSTAGRAM_NOT_CONFIGURED');
    }
    
    // Instagram Graph API endpoint
    const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count,username';
    const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&access_token=${accessToken}&limit=${count}`;
    
    console.log('📸 Fetching Instagram posts from Graph API...');
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status} ${response.statusText}`);
    }
    
    const data: InstagramApiResponse = await response.json();
    
    if (!data.data || data.data.length === 0) {
      console.warn('⚠️ No Instagram posts found');
      return [];
    }
    
    // Cache the posts
    cachePosts(data.data);
    
    console.log(`✅ Fetched ${data.data.length} Instagram posts`);
    return data.data;
    
  } catch (error) {
    console.error('❌ Error fetching Instagram posts:', error);
    throw error;
  }
}

/**
 * Refresh Instagram access token (long-lived tokens expire after 60 days)
 * This should be run server-side or via a scheduled task
 */
export async function refreshInstagramToken(): Promise<string | null> {
  try {
    const accessToken = import.meta?.env?.VITE_INSTAGRAM_ACCESS_TOKEN;
    
    if (!accessToken) {
      console.error('No Instagram access token to refresh');
      return null;
    }
    
    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${accessToken}`;
    
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.access_token) {
      console.log('✅ Instagram token refreshed successfully');
      console.log('⚠️ Update VITE_INSTAGRAM_ACCESS_TOKEN in your .env file with:', data.access_token);
      return data.access_token;
    }
    
    return null;
  } catch (error) {
    console.error('Error refreshing Instagram token:', error);
    return null;
  }
}

/**
 * Clear Instagram cache
 */
export function clearInstagramCache(): void {
  localStorage.removeItem(CACHE_KEY);
  console.log('🗑️ Instagram cache cleared');
}

/**
 * Get cache age in hours
 */
export function getCacheAge(): number | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    
    const data: CachedData = JSON.parse(cached);
    const ageMs = Date.now() - data.timestamp;
    return ageMs / (1000 * 60 * 60); // Convert to hours
  } catch {
    return null;
  }
}
