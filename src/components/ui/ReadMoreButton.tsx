/**
 * @fileoverview Reusable ReadMoreButton component for consistent blog navigation
 * 
 * A brand-compliant "Read More" button/link component that provides consistent
 * styling and functionality across homepage blog previews and main blog page.
 * Uses React Router Link for client-side navigation.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - React Router Migration
 */

import React from 'react';
import { Link } from '../../lib/router';
import { ArrowRight } from 'lucide-react';
import "../../styles/blocks/read-more-btn.css";

/**
 * Props interface for ReadMoreButton component
 */
export interface ReadMoreButtonProps {
  postTitle: string;
  postSlug?: string;
  postId?: string;
  onClick?: (page: string, slug?: string) => void;
  className?: string;
  children?: React.ReactNode;
}

/**
 * ReadMoreButton - Reusable component for consistent blog post navigation
 */
export function ReadMoreButton({ 
  postTitle, 
  postSlug, 
  postId, 
  onClick, 
  className = "", 
  children = "Read more" 
}: ReadMoreButtonProps) {
  // Generate SEO-friendly URL with slug preferred over ID
  const href = `/blog/${postSlug || postId}`;
  
  // Handle click events - navigate to individual blog post
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick && (postSlug || postId)) {
      e.preventDefault();
      e.stopPropagation();
      const slug = postSlug || postId;
      onClick(`blog/${slug}`, slug);
    }
  };
  
  // Handle keyboard navigation for accessibility
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if ((e.key === 'Enter' || e.key === ' ') && onClick && (postSlug || postId)) {
      e.preventDefault();
      e.stopPropagation();
      const slug = postSlug || postId;
      onClick(`blog/${slug}`, slug);
    }
  };
  
  // Use React Router Link for proper client-side navigation when no custom onClick
  if (!onClick) {
    return (
      <Link 
        to={href}
        className={`read-more-btn ${className}`}
        aria-label={`Read full article: ${postTitle}`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <ArrowRight className="read-more-btn__icon" />
      </Link>
    );
  }

  return (
    <a 
      href={href}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      className={`read-more-btn ${className} px-[16px] py-[6px]`}
      aria-label={`Read full article: ${postTitle}`}
    >
      {children}
      <ArrowRight className="read-more-btn__icon" />
    </a>
  );
}