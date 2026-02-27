/**
 * @fileoverview Individual blog post page component for detailed blog post viewing
 * 
 * A comprehensive component for displaying individual blog posts with rich content,
 * author information, related posts, and social sharing. Integrates with Contentful
 * CMS for dynamic content while providing static fallbacks for development.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Analytics hook integration
 */

import React, { useEffect, useState } from 'react';
import { useBlogPost } from '../../../hooks/useContent';
import { type BlogPost } from '../../../data/types/blog';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { ShareComponent } from '../../ui/ShareComponent';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { FaqSection } from '../../sections/FaqSection';
import { Calendar, Clock, Tag, User, ArrowLeft, BookOpen, Eye, Share2, Camera, ExternalLink, Heart } from '../../../lib/icons';
import { blogUI } from '../../../data/mock/ui/blog';
import { markdownToHtml } from '../../../utils/simpleMarkdown';
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import { useAnalytics } from '../../../hooks/useAnalytics';
import { useScrollPosition } from '../../../hooks/useScrollPosition';
import { useParams, useNavigate } from '../../../lib/router';
import { formatDate } from '../../../utils/formatDate';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import ashShawAvatar from 'figma:asset/e46fceb6809b8f1b7ef5c578d40578eadf301207.png';
import "../../../styles/blocks/blog-page.css";

import { setSEO } from '../../../utils/seo';
import { pageSEO, blogPostSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildArticleSchema,
} from '../../../utils/schemaService';

import { blogPostBreadcrumbs } from "../../../data/mock/ui/breadcrumbs";

interface BlogPostPageProps {
  slug?: string;
}

const AUTHOR_PROFILE = {
  name: 'Ash Shaw',
  avatar: ashShawAvatar,
  bio: "Ash Shaw is a visionary makeup artist known for his vibrant, neon-infused designs and 'Atomic Black' aesthetic. With a passion for festival culture and UV artistry, he transforms faces into living canvases of color and energy.",
  socials: [
    { name: 'Instagram', url: 'https://www.instagram.com/feedmymedia', icon: Camera },
    { name: 'Facebook', url: 'https://www.facebook.com/ash.shaw/', icon: ExternalLink }
  ]
};

export function BlogPostPage({ slug: slugProp }: BlogPostPageProps) {
  const params = useParams<{ slug: string }>();
  const slug = slugProp || params.slug || '';
  const setCurrentPage = useAppNavigate();
  const navigate = useNavigate();
  const { data: post, loading, error } = useBlogPost(slug);
  const { scrollProgress: readingProgress } = useScrollPosition({ throttleMs: 50 });
  const prefersReduced = useReducedMotion();
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [views, setViews] = useState(0);

  /* Analytics: reading time estimation + history tracking */
  const postTitle = post ? post.title : undefined;
  const postContent = post ? post.content : undefined;
  const { readingTime: estimatedReadTime } = useAnalytics('blog', slug, {
    title: postTitle,
    content: postContent,
    skip: !post,
  });

  useEffect(() => {
    if (post) {
      setSEO(blogPostSEO(post.title, post.excerpt));
      injectSchema(SCHEMA_IDS.article, buildArticleSchema(post));
    } else if (!loading) {
      setSEO(pageSEO.notFound);
    }
    return () => {
      removeSchema(SCHEMA_IDS.article);
    };
  }, [post, loading]);

  useEffect(() => {
    // Mock view count
    const storageKeyViews = `blog-views-${slug}`;
    const storedViews = localStorage.getItem(storageKeyViews);
    
    if (storedViews) {
      setViews(parseInt(storedViews, 10));
    } else {
      const initialViews = Math.floor(Math.random() * 1500) + 500;
      setViews(initialViews);
      localStorage.setItem(storageKeyViews, initialViews.toString());
    }

    // Mock initial likes or load from storage
    const storageKeyLikes = `blog-likes-${slug}`;
    const storageKeyIsLiked = `blog-isliked-${slug}`;
    
    const storedLikes = localStorage.getItem(storageKeyLikes);
    const storedIsLiked = localStorage.getItem(storageKeyIsLiked);
    
    if (storedLikes) {
      setLikes(parseInt(storedLikes, 10));
    } else {
      const initialLikes = Math.floor(Math.random() * 100) + 20;
      setLikes(initialLikes);
      localStorage.setItem(storageKeyLikes, initialLikes.toString());
    }

    if (storedIsLiked === 'true') {
      setIsLiked(true);
    }
  }, [slug]);

  const handleLike = () => {
    const newIsLiked = !isLiked;
    const newLikes = newIsLiked ? likes + 1 : likes - 1;
    
    setIsLiked(newIsLiked);
    setLikes(newLikes);
    
    localStorage.setItem(`blog-likes-${slug}`, newLikes.toString());
    localStorage.setItem(`blog-isliked-${slug}`, newIsLiked.toString());
  };

  const handleBackToBlog = () => {
    setCurrentPage('blog');
  };

  // Handle clickable tags
  const handleTagClick = (tag: string) => {
    const tagSlug = tag.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    navigate(`/blog/tag/${tagSlug}`);
  };

  if (loading) {
    return (
      <div className="blog-post-view bg-atomic-noise">
        <main id="main-content" role="main" tabIndex={-1} className="container-wide py-fluid-lg">
          <div className="blog-post-skeleton">
            <div className="skeleton-bar skeleton-bar--title"></div>
            <div className="skeleton-bar skeleton-bar--hero"></div>
            <div className="skeleton-bar skeleton-bar--subtitle"></div>
          </div>
        </main>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="blog-post-view bg-atomic-noise">
        <main id="main-content" role="main" tabIndex={-1} className="container-wide py-fluid-lg">
          <div className="error-card">
            <button
              type="button"
              onClick={handleBackToBlog}
              className="back-to-blog-btn mb-fluid-lg"
              aria-label="Return to blog listing"
            >
              <ArrowLeft className="icon-md" />
              {blogUI.post.navigation.backToBlog}
            </button>
            
            <div className="error-content">
              <h1 className="error-title">
                {blogUI.post.notFound.title}
              </h1>
              <p className="error-message">
                {error ? 
                  blogUI.post.notFound.errorMessage(error) : 
                  blogUI.post.notFound.message(slug)
                }
              </p>
              <button
                type="button"
                onClick={handleBackToBlog}
                className="btn btn--neon-primary inline-flex-center gap-fluid-sm"
              >
                {blogUI.post.notFound.viewAllButton}
                <BookOpen className="icon-md" />
              </button>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // Parse markdown content
  const htmlContent = markdownToHtml(post.content);

  const handleContentClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.getAttribute('data-internal-link') === 'true') {
      e.preventDefault();
      const href = link.getAttribute('href');
      
      if (href) {
        if (href === '#contact') {
          setCurrentPage('contact');
          window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
        } else if (href.startsWith('#')) {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth' });
          }
        }
      }
    }
  };

  return (
    <div className="blog-post-view bg-atomic-noise">
      <div 
        className="reading-progress-bar"
        style={{ width: `${readingProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(readingProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      <main id="main-content" role="main" tabIndex={-1} className="container-wide py-fluid-lg">
        <article className="blog-article">
          <Breadcrumbs items={blogPostBreadcrumbs(post.title)} />

          <nav aria-label="Blog navigation">
            <button
              type="button"
              onClick={handleBackToBlog}
              className="back-to-blog-btn"
              aria-label="Return to blog listing"
            >
              <ArrowLeft className="icon-md" />
              {blogUI.post.navigation.backToBlog}
            </button>
          </nav>

          <header className="blog-article__header">
            <h2 className="text-section-h2">
              {post.title}
            </h2>

            <div>
              <button 
                type="button"
                onClick={() => {
                  const catSlug = post.category.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                  navigate(`/blog/category/${catSlug}`);
                }}
                className="category-badge"
                aria-label={`View all posts in ${post.category}`}
              >
                {post.category}
              </button>
            </div>

            <div className="blog-article__meta">
              <div className="meta-item">
                <Calendar className="icon-sm" />
                <time className="meta-text" dateTime={post.publishedAt}>
                  {formatDate(post.publishedAt)}
                </time>
              </div>
              
              {post.readTime && (
                <div className="meta-item">
                  <Clock className="icon-sm" />
                  <span className="meta-text">
                    {blogUI.post.meta.readTime(post.readTime)}
                  </span>
                </div>
              )}

              <div className="meta-item">
                <Eye className="icon-sm" />
                <span className="meta-text">
                  {views.toLocaleString()} views
                </span>
              </div>
            </div>
          </header>

          {post.featuredImage && (
            <div className="blog-article__image-container">
              <OptimizedImage
                src={post.featuredImage.url}
                alt={post.featuredImage.alt || post.title}
                className="blog-article__image"
                preset="content"
              />
            </div>
          )}

          <div className="blog-article__content">
            {post.excerpt && (
              <div className="blog-article__excerpt">
                {post.excerpt}
              </div>
            )}

            <div 
              className="rich-text-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
              onClick={handleContentClick}
            />
          </div>

          <div className="blog-article__engagement">
            <button 
              type="button"
              onClick={handleLike}
              className={`engagement-btn ${isLiked ? 'engagement-btn--liked' : ''}`}
              aria-label={isLiked ? 'Unlike this post' : 'Like this post'}
            >
              <Heart className={`icon-md ${isLiked ? 'engagement-btn__icon--filled' : ''}`} />
              <span>{likes}</span>
            </button>
          </div>

          <section className="blog-article__footer">
            <div className="tags-share-container">
              
              {/* Tags Section */}
              <div className="tags-section">
                <div className="section-label mb-fluid-sm">
                  <Tag className="icon-sm text-neon-purple" />
                  <span>Tags:</span>
                </div>
                
                {post.tags && post.tags.length > 0 ? (
                  <div className="tags-list">
                    {post.tags.map((tag, index) => (
                      <button
                        type="button"
                        key={index}
                        onClick={() => handleTagClick(tag)}
                        className="tag-badge clickable"
                        aria-label={`View posts tagged ${tag}`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="no-tags-text">
                    {blogUI.post.sections.tags.noTags}
                  </p>
                )}
              </div>

              {/* Share Section */}
              <div className="share-section">
                <div className="section-label mb-fluid-sm">
                  <Share2 className="icon-sm text-neon-purple" />
                  <span>Share this:</span>
                </div>
                <div className="share-buttons">
                  <ShareComponent
                    label=""
                    title={post.title}
                    description={post.excerpt || post.title}
                    url={typeof window !== 'undefined' ? window.location.href : `https://ashshaw.makeup/blog/${slug}`}
                    imageUrl={post.featuredImage ? post.featuredImage.url : undefined}
                    variant="inline"
                    align="left"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Per-item FAQs — shown only if the post has item-level FAQs */}
          {post.faqs && post.faqs.length > 0 && (
            <FaqSection items={post.faqs} />
          )}

          {/* Author Section - Hardcoded as requested */}
          <section className="author-section">
            <h2 className="text-section-h2">
              {blogUI.post.sections.author.title}
            </h2>
            <div className="author-card">
              <OptimizedImage
                src={AUTHOR_PROFILE.avatar}
                alt={`${AUTHOR_PROFILE.name} profile photo`}
                className="author-avatar"
                preset="thumbnail"
              />
              <div className="author-info">
                <h3 className="author-name">
                  {AUTHOR_PROFILE.name}
                </h3>
                <p className="author-bio">
                  {AUTHOR_PROFILE.bio}
                </p>
                
                {/* Social Links */}
                <div className="author-socials">
                  {AUTHOR_PROFILE.socials.map((social) => (
                    <a 
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="author-social-link"
                      aria-label={`Follow ${AUTHOR_PROFILE.name} on ${social.name}`}
                    >
                      <social.icon className="icon-md" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="related-posts-section">
            <h2 className="text-section-h2 text-center">
              {blogUI.post.sections.related.title}
            </h2>
            <div className="related-posts-container">
              <p className="related-posts-description">
                {blogUI.post.sections.related.description}
              </p>
              <button
                type="button"
                onClick={handleBackToBlog}
                className="btn btn--neon-primary inline-flex-center gap-fluid-sm"
              >
                {blogUI.post.sections.related.viewAllButton}
                <BookOpen className="icon-md" />
              </button>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
}

/**
 * Route wrapper component for BlogPostPage
 * Reads the slug from React Router URL params
 */
export function BlogPostPageRoute() {
  return <BlogPostPage />;
}