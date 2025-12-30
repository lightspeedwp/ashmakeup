/**
 * @fileoverview Blog type definitions
 * Mirrors Contentful structure for development and mock data
 * 
 * @module data/types/blog
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Enhanced for mock data compatibility
 */

/**
 * Blog post image interface
 * Represents featured images and inline images in blog posts
 */
export interface BlogImage {
  /** Image source URL or Figma asset */
  src: string;
  
  /** Accessible alt text */
  alt: string;
  
  /** Optional caption */
  caption?: string;
  
  /** Optional title */
  title?: string;
  
  /** Optional width in pixels */
  width?: number;
  
  /** Optional height in pixels */
  height?: number;
}

/**
 * Blog post author interface
 * Author information for blog posts
 */
export interface BlogAuthor {
  /** Author name */
  name: string;
  
  /** Author avatar/photo URL */
  avatar?: string;
  
  /** Legacy support for 'image' field */
  image?: string;
  
  /** Author bio/description */
  bio?: string;
}

/**
 * Blog post interface
 * Complete structure for blog posts (mirrors Contentful)
 */
export interface BlogPost {
  /** Unique identifier */
  id: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Post title */
  title: string;
  
  /** Short excerpt/summary */
  excerpt: string;
  
  /** 
   * Full post content
   * For mock data: plain markdown string
   * For Contentful: Rich Text Document object
   */
  content: string | any;
  
  /** Featured image */
  featuredImage: BlogImage;
  
  /** Publication date (ISO 8601 string) - primary field */
  publishedAt: string;
  
  /** Legacy support for publishedDate */
  publishedDate?: string;
  
  /** Last updated date (ISO 8601 string) - primary field */
  updatedAt?: string;
  
  /** Legacy support for updatedDate */
  updatedDate?: string;
  
  /** Post category */
  category?: string;
  
  /** Post tags for filtering and search */
  tags?: string[];
  
  /** Estimated reading time in minutes - primary field */
  readTime?: number;
  
  /** Legacy support for readingTime */
  readingTime?: number;
  
  /** Post author */
  author?: BlogAuthor;
  
  /** Is this a featured post? */
  featured?: boolean;
}

/**
 * Blog category interface
 * Category classification for blog posts
 */
export interface BlogCategory {
  /** Unique identifier */
  id: string;
  
  /** Category display name */
  name: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Category description */
  description?: string;
  
  /** Number of posts in this category */
  count?: number;
  
  /** Category color (hex code) */
  color?: string;
}