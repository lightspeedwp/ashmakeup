/**
 * @fileoverview Social media links configuration
 * Platform URLs and metadata for footer and contact sections
 * 
 * @module data/mock/ui/social-links
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

/**
 * Social link interface
 */
export interface SocialLink {
  /** Platform name */
  platform: string;
  
  /** Platform URL */
  url: string;
  
  /** Icon identifier (maps to Lucide icon) */
  icon: string;
  
  /** Accessible label for screen readers */
  label: string;
}

/**
 * Social Media Links
 * Used in Footer, Header, and contact sections
 * 
 * @constant {SocialLink[]}
 */
export const socialLinks: SocialLink[] = [
  {
    platform: 'Instagram',
    url: 'https://instagram.com/feedmymedia',
    icon: 'instagram',
    label: 'Follow Ash Shaw on Instagram'
  },
  {
    platform: 'Facebook',
    url: 'https://facebook.com/ash.shaw/',
    icon: 'facebook',
    label: 'Connect with Ash Shaw on Facebook'
  },
  {
    platform: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ashshaw/',
    icon: 'linkedin',
    label: 'Professional network with Ash Shaw on LinkedIn'
  },
  {
    platform: 'Email',
    url: 'mailto:ashley@ashshaw.makeup',
    icon: 'mail',
    label: 'Email Ash Shaw'
  }
];
