/**
 * @fileoverview Blog preview section component for homepage
 * 
 * Displays the latest blog posts in a Responsive Hybrid Layout
 * Grid on Desktop, Slider on Tablet/Mobile
 * 
 * @author Ash Shaw Portfolio Team
 * @version 3.2.0 - Unified Responsive Layout Engine
 */

import React, { useCallback } from 'react';
import { ArrowRight, Calendar } from '../../lib/icons';
import { useBlogPosts } from '../../hooks/useContent';
import { OptimizedImage } from '../ui/OptimizedImage';
import { ReadMoreButton } from '../ui/ReadMoreButton';
import { ResponsiveGridSlider } from '../ui/ResponsiveGridSlider';
import type { BlogPost } from '../../data/types/blog';
import { homeUI } from '../../data/mock/ui/home';
import { useAppNavigate } from '../../hooks/useAppNavigate';
import { formatDate } from '../../utils/formatDate';
import "../../styles/blocks/column-layouts.css";
import "../../styles/blocks/blog-preview.css";

interface BlogPreviewSectionProps {
  limit?: number;
  title?: string;
}

export function BlogPreviewSection({ 
  limit = 6,
  title
}: BlogPreviewSectionProps) {
  const setCurrentPage = useAppNavigate();
  const { 
    data: blogData, 
    loading, 
    error 
  } = useBlogPosts({
    limit, // Use the passed limit or default to 6
    sortBy: 'publishedAt',
    sortOrder: 'desc',
    publishedOnly: true,
  });

  const goToBlog = useCallback(() => {
    setCurrentPage('blog');
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = 'Navigating to blog page';
    }
  }, [setCurrentPage]);

  const viewBlogPost = useCallback((slug: string) => {
    setCurrentPage(`blog/${slug}`, slug);
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = `Navigating to blog post: ${slug.replace(/-/g, ' ')}`;
    }
  }, [setCurrentPage]);

  const blogPosts = blogData ? blogData.posts : null;
  const posts = blogPosts ? blogPosts : [];

  const hasNoPosts = !blogPosts || blogPosts.length === 0;
  if (!loading && hasNoPosts) {
    return null;
  }

  return (
    <section id="blog-preview" className="blog-preview section-spacing px-horizontal-section">
      <div className="container-wide section-container">
        {/* Section header */}
        <div className="blog-preview__header">
          <h2 className="text-section-h2">
            {title ? title : homeUI.sections.blogPreview.title}
          </h2>
          <p className="text-body-guideline text-blog-description">
            {homeUI.sections.blogPreview.description}
          </p>
        </div>

        {/* Loading state */}
        {loading && (
          <div className="blog-preview__grid-loading">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="blog-card blog-card--loading">
                <div className="blog-card__loading-content">
                    <div className="skeleton-box skeleton-box--image"></div>
                    <div className="skeleton-box skeleton-box--title"></div>
                    <div className="skeleton-box skeleton-box--text"></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Error state */}
        {error && !loading && (
          <div className="blog-preview__error-container">
            <p className="text-body-p text-blog-error mb-fluid-sm">
              {homeUI.sections.blogPreview.error}
            </p>
            <button
              type="button"
              onClick={goToBlog}
              className="btn btn--neon-primary"
            >
              {homeUI.sections.blogPreview.visitBlog}
            </button>
          </div>
        )}

        {/* Blog posts content using ResponsiveGridSlider */}
        {!loading && !error && posts.length > 0 && (
          <ResponsiveGridSlider
            items={posts}
            keyExtractor={(post) => post.id}
            desktopColumns={3}
            layoutMode="slider"
            renderItem={(post) => (
              <div className="blog-card-wrapper">
                <BlogPostCard 
                  post={post} 
                  onViewPost={viewBlogPost}
                  formatDate={formatDate}
                />
              </div>
            )}
            className="mb-fluid-xl"
          />
        )}
        
        {/* View all blog posts button */}
        {!loading && !error && (
          <div className="blog-preview__cta">
            <button
              type="button"
              onClick={goToBlog}
              className="btn btn--neon-secondary btn-gap"
              aria-label={homeUI.sections.blogPreview.ctaAriaLabel}
            >
              <span>{homeUI.sections.blogPreview.viewAll}</span>
              <ArrowRight className="icon-arrow" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

interface BlogPostCardProps {
  post: BlogPost;
  onViewPost: (slug: string) => void;
  formatDate: (date: string) => string;
}

function BlogPostCard({ post, onViewPost, formatDate }: BlogPostCardProps) {
  return (
    <article className="blog-card group">
      {/* Featured image */}
      {post.featuredImage && (
        <div 
          className="blog-card__image-container"
          onClick={() => onViewPost(post.slug)}
          onKeyDown={(e) => {
            const isActivationKey = e.key === 'Enter' || e.key === ' ';
            if (isActivationKey) {
              e.preventDefault();
              onViewPost(post.slug);
            }
          }}
          tabIndex={0}
          role="button"
          aria-label={`View full blog post: ${post.title}`}
        >
          <OptimizedImage
            src={post.featuredImage.url}
            alt={post.featuredImage.alt}
            className="blog-card__image"
            preset="thumbnail"
          />
          {/* Category chip overlaid on image */}
          <span className="blog-card__category">
            {post.category}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="blog-card__content">
        {/* Title */}
        <h3 
          className="blog-card__title"
          onClick={() => onViewPost(post.slug)}
        >
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="blog-card__excerpt">
          {post.excerpt}
        </p>

        {/* Footer with date and Read more */}
        <div className="blog-card__footer">
          <div className="blog-card__date">
            <Calendar className="icon-calendar" aria-hidden="true" />
            <time dateTime={post.publishedAt}>
              {formatDate(post.publishedAt)}
            </time>
          </div>
          <ReadMoreButton  
            postTitle={post.title}
            postSlug={post.slug}
            postId={post.id}
            onClick={(page: string, slug?: string) => {
              if (slug) {
                onViewPost(slug);
              }
            }}
          />
        </div>
      </div>
    </article>
  );
}