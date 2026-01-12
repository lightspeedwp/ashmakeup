/**
 * Instagram Feed Component
 * 
 * Displays recent Instagram posts from @feedmymedia
 * Uses Instagram Graph API with 24-hour caching and fallback to mock data
 * 
 * @component
 * @returns {JSX.Element} Instagram feed section
 */

import React, { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Heart, MessageCircle, RefreshCw, AlertCircle } from 'lucide-react';
import { 
  fetchInstagramPosts, 
  isInstagramConfigured, 
  clearInstagramCache,
  getCacheAge,
  type InstagramPost
} from '../../utils/instagramService';

// Mock Instagram posts for fallback
const mockInstagramPosts = [
  {
    id: '1',
    media_type: 'IMAGE' as const,
    media_url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&q=80',
    permalink: 'https://instagram.com/feedmymedia',
    caption: 'Festival glam ready! ✨ Glitter placement on point 💕',
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 234,
    comments_count: 18,
    username: 'feedmymedia'
  },
  {
    id: '2',
    media_type: 'IMAGE' as const,
    media_url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80',
    permalink: 'https://instagram.com/feedmymedia',
    caption: 'Bridal glow for this stunning bride 👰 Natural beauty enhanced',
    timestamp: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 456,
    comments_count: 32,
    username: 'feedmymedia'
  },
  {
    id: '3',
    media_type: 'IMAGE' as const,
    media_url: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=80',
    permalink: 'https://instagram.com/feedmymedia',
    caption: 'Bold colorful makeup for photoshoot 🎨 Loving these vibes!',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 189,
    comments_count: 12,
    username: 'feedmymedia'
  },
  {
    id: '4',
    media_type: 'IMAGE' as const,
    media_url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&q=80',
    permalink: 'https://instagram.com/feedmymedia',
    caption: 'Sunset gradient eyes 🌅 Perfect for summer events',
    timestamp: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 312,
    comments_count: 24,
    username: 'feedmymedia'
  },
  {
    id: '5',
    media_type: 'IMAGE' as const,
    media_url: 'https://images.unsplash.com/photo-1523264766116-5e732b55cc03?w=800&q=80',
    permalink: 'https://instagram.com/feedmymedia',
    caption: 'Getting ready for Origin Festival! Who else is going? 🎪',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 567,
    comments_count: 45,
    username: 'feedmymedia'
  },
  {
    id: '6',
    media_type: 'IMAGE' as const,
    media_url: 'https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800&q=80',
    permalink: 'https://instagram.com/feedmymedia',
    caption: 'Glowy skin prep routine 💧 Hydration is key!',
    timestamp: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
    like_count: 423,
    comments_count: 28,
    username: 'feedmymedia'
  }
];

export function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>(mockInstagramPosts);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isUsingMockData, setIsUsingMockData] = useState(true);
  const cacheAge = getCacheAge();
  
  // Load Instagram posts
  useEffect(() => {
    loadPosts();
  }, []);
  
  const loadPosts = async () => {
    setIsLoading(true);
    
    try {
      if (!isInstagramConfigured()) {
        console.log('📱 Instagram API not configured - using mock data');
        setPosts(mockInstagramPosts);
        setIsUsingMockData(true);
        setIsLoading(false);
        return;
      }
      
      const fetchedPosts = await fetchInstagramPosts(6);
      setPosts(fetchedPosts);
      setIsUsingMockData(false);
      console.log('✅ Loaded real Instagram posts');
    } catch (error) {
      if (error instanceof Error && error.message === 'INSTAGRAM_NOT_CONFIGURED') {
        console.log('📱 Using mock Instagram data');
      } else {
        console.warn('⚠️ Instagram API unavailable, using mock data');
      }
      setPosts(mockInstagramPosts);
      setIsUsingMockData(true);
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleRefresh = async () => {
    setIsRefreshing(true);
    clearInstagramCache();
    await loadPosts();
    setIsRefreshing(false);
  };
  
  // Format relative time
  const formatTimestamp = (timestamp: string): string => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
  };
  
  return (
    <section className="py-section bg-instagram-section transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-fluid-md">
        {/* Section Header */}
        <div className="text-center mb-fluid-2xl">
          <div className="flex items-center justify-center gap-3 mb-fluid-sm">
            <Instagram className="w-10 h-10 text-instagram-icon" />
            <h2 className="text-section-h2 font-heading font-bold text-gradient-pink-purple-blue">
              Follow My Journey
            </h2>
          </div>
          <p className="text-body-guideline font-body mb-fluid-md">
            See my latest work and behind-the-scenes moments
          </p>
          <a
            href="https://instagram.com/feedmymedia"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xl font-body font-semibold text-instagram-link hover:text-instagram-link transition-colors"
          >
            @feedmymedia
            <ExternalLink className="w-5 h-5" />
          </a>
          
          {/* API Status Badge */}
          {isUsingMockData && (
            <div className="mt-fluid-md">
              <div className="inline-flex items-center gap-2 bg-instagram-api-badge border rounded-full px-4 py-2">
                <AlertCircle className="w-4 h-4 text-instagram-api-icon" />
                <span className="text-sm font-body text-instagram-api-text">
                  Demo Mode - Configure Instagram API for live feed
                </span>
              </div>
            </div>
          )}
          
          {/* Cache Info */}
          {!isUsingMockData && cacheAge !== null && (
            <div className="mt-fluid-sm text-sm text-instagram-cache">
              Last updated: {cacheAge < 1 ? 'Just now' : `${Math.round(cacheAge)} hours ago`}
            </div>
          )}
        </div>
        
        {/* Loading State */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-instagram-skeleton rounded-lg animate-pulse" />
            ))}
          </div>
        ) : (
          <>
            {/* Instagram Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {posts.map((post) => (
                <a
                  key={post.id}
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {/* Image */}
                  <img
                    src={post.media_type === 'VIDEO' ? (post.thumbnail_url || post.media_url) : post.media_url}
                    alt={post.caption || 'Instagram post'}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Video Badge */}
                  {post.media_type === 'VIDEO' && (
                    <div className="absolute top-2 left-2 bg-instagram-video-badge px-2 py-1 rounded text-white text-xs font-semibold">
                      VIDEO
                    </div>
                  )}
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-instagram-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    {/* Stats */}
                    {(post.like_count !== undefined || post.comments_count !== undefined) && (
                      <div className="flex items-center gap-4 text-white text-sm mb-2">
                        {post.like_count !== undefined && (
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4 fill-white" />
                            <span>{post.like_count}</span>
                          </div>
                        )}
                        {post.comments_count !== undefined && (
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.comments_count}</span>
                          </div>
                        )}
                      </div>
                    )}
                    
                    {/* Caption Preview */}
                    {post.caption && (
                      <p className="text-white text-xs line-clamp-2">
                        {post.caption}
                      </p>
                    )}
                    
                    {/* Timestamp */}
                    <p className="text-white/70 text-xs mt-1">
                      {formatTimestamp(post.timestamp)}
                    </p>
                  </div>
                  
                  {/* Instagram Icon Badge */}
                  <div className="absolute top-2 right-2 bg-instagram-icon-badge p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Instagram className="w-4 h-4 text-white" />
                  </div>
                </a>
              ))}
            </div>
            
            {/* Actions */}
            <div className="flex flex-col items-center gap-4 mt-fluid-xl">
              {/* Follow Button */}
              <a
                href="https://instagram.com/feedmymedia"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-button py-button font-body font-medium text-button-fluid transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus-ring-instagram"
              >
                <Instagram className="w-6 h-6" />
                Follow @feedmymedia on Instagram
                <ExternalLink className="w-5 h-5" />
              </a>
              
              {/* Refresh Button */}
              {!isUsingMockData && (
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className="inline-flex items-center gap-2 text-sm font-body font-semibold text-instagram-link hover:text-instagram-link transition-colors disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  {isRefreshing ? 'Refreshing...' : 'Refresh Feed'}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}