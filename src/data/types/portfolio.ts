/**
 * @fileoverview Portfolio type definitions
 * Unified TypeScript interfaces for all portfolio data
 * 
 * @module data/types/portfolio
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

/**
 * Single image in a portfolio entry
 * Represents one photo in a portfolio item's image gallery
 */
export interface PortfolioImage {
  /** Image source URL or Figma asset path */
  src: string;
  
  /** Accessible alt text describing the image */
  alt: string;
  
  /** Display title for lightbox and captions */
  title: string;
  
  /** Media type: 'image' or 'video' (defaults to 'image') */
  type?: 'image' | 'video';

  /** Poster image URL (for videos) */
  poster?: string;
  
  /** Optional short caption for card displays */
  caption?: string;

  /** Detailed description for accessibility and lightbox overlay */
  description?: string;
  
  /** Layout position hint (semantic, not CSS class) */
  position?: 'left' | 'center' | 'right' | 'top' | 'bottom';
  
  /** Aspect ratio for responsive sizing */
  aspectRatio?: '1:1' | '4:3' | '16:9' | '3:4' | '9:16';
}

/**
 * Complete portfolio entry
 * Unified structure for all portfolio items across categories
 */
export interface PortfolioEntry {
  /** Unique identifier */
  id: string;
  
  /** URL-friendly slug */
  slug: string;
  
  /** Display title */
  title: string;
  
  /** Primary category */
  category: 'Festival Makeup' | 'UV Makeup' | 'Nail Art' | 'Portrait' | 'Special Effects' | 'Body Art';
  
  /** Optional subcategory for additional classification */
  subcategory?: string;
  
  /** Array of images in this portfolio entry */
  images: PortfolioImage[];
  
  /** Location where work was created/performed */
  location?: string;
  
  /** Event name or context */
  event?: string;
  
  /** Date of work (ISO string or display string) */
  date?: string;
  
  /** Detailed description of the work */
  description: string;
  
  /** Short excerpt for card previews (auto-generated from description if not provided) */
  excerpt?: string;
  
  /** Searchable tags for filtering */
  tags: string[];
  
  /** Is this featured on the homepage? */
  featured: boolean;
  
  /** Display order (lower number = higher priority) */
  order: number;
  
  /** Optional Contentful ID for CMS sync */
  contentfulId?: string;
}

/**
 * Portfolio section grouping
 * Groups portfolio entries by theme, location, or event
 */
export interface PortfolioSection {
  /** Section identifier */
  id: string;
  
  /** Display title */
  title: string;
  
  /** Section description */
  description: string;
  
  /** Entries in this section */
  entries: PortfolioEntry[];
  
  /** Display order */
  order: number;
  
  /** Background gradient colors for decorative elements (hex codes) */
  decorativeColors?: string[];
}
