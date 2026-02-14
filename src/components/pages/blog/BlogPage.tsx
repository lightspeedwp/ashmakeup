/**
 * @fileoverview Blog page component for Ash Shaw Makeup Portfolio
 * 
 * Comprehensive blog listing with Contentful CMS integration.
 * Features advanced filtering, pagination, search, and responsive design following
 * the complete brand guidelines and accessibility standards.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.4.0 - Semantic BEM Refactor & Simplified Logic
 */

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useBlogPosts } from '../../../hooks/useContentful';
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { InstagramFeed } from '../../sections/InstagramFeed';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import { ScrollToTop } from '../../ui/ScrollToTop';
import { blogUI } from '../../../data/mock/ui/blog';
import { blogPageContent } from '../../../data/mock/pages/blog';
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import { useSearchParams } from 'react-router';
import { formatDate } from '../../../utils/formatDate';
import "@/styles/blocks/blog-page.css";

interface BlogPageProps {
  initialCategory?: string;
}

interface BlogPageState {
  page: number;
  category?: string;
  tags: string[];
  searchQuery: string;
  limit: number;
}

export function BlogPage({ initialCategory: propCategory }: BlogPageProps) {
  const setCurrentPage = useAppNavigate();
  const [searchParams] = useSearchParams();
  const initialCategory = propCategory || searchParams.get('category') || undefined;

  const [blogState, setBlogState] = useState<BlogPageState>({
    page: 1,
    category: initialCategory,
    tags: [],
    searchQuery: '',
    limit: 6,
  });

  useEffect(() => {
    if (initialCategory && initialCategory !== blogState.category) {
      setBlogState(prev => ({
        ...prev,
        category: initialCategory,
        page: 1,
      }));
    }
  }, [initialCategory]);

  const [debouncedSearch, setDebouncedSearch] = useState(blogState.searchQuery);

  const { 
    data: blogData, 
    loading: postsLoading, 
    refresh: refreshPosts 
  } = useBlogPosts({
    category: blogState.category,
    tags: blogState.tags.length > 0 ? blogState.tags : undefined,
    page: blogState.page,
    limit: blogState.limit,
    sortBy: 'publishedDate',
    sortOrder: 'desc',
    publishedOnly: true,
    autoRefresh: true,
    refreshInterval: 600000,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(blogState.searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [blogState.searchQuery]);

  const filteredPosts = useMemo(() => {
    if (!blogData?.posts || !debouncedSearch.trim()) {
      return blogData?.posts || [];
    }

    const query = debouncedSearch.toLowerCase();
    return blogData.posts.filter(post => 
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.tags.some(tag => tag.toLowerCase().includes(query)) ||
      post.category.toLowerCase().includes(query)
    );
  }, [blogData?.posts, debouncedSearch]);

  const updateBlogState = useCallback((updates: Partial<BlogPageState>) => {
    setBlogState(prev => ({
      ...prev,
      ...updates,
      ...(updates.category !== undefined || updates.tags !== undefined || updates.searchQuery !== undefined 
        ? { page: 1 } 
        : {})
    }));
  }, []);

  const viewBlogPost = useCallback((slug: string) => {
    // Explicitly navigate to the blog post page route
    // This triggers App.tsx to update the URL and switch components
    setCurrentPage('blog-post', slug);
    
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = `Navigating to blog post: ${slug}`;
    }
  }, [setCurrentPage]);

  const goToPage = useCallback((page: number) => {
    if (page === blogState.page) return;
    
    updateBlogState({ page });
    
    setTimeout(() => {
      const blogHeader = document.querySelector('[data-blog-header]');
      if (blogHeader) {
        blogHeader.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
    
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = `Loading page ${page} of blog posts`;
    }
  }, [updateBlogState, blogState.page]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement
      ) {
        return;
      }

      switch (event.key) {
        case 'f':
        case 'F':
          event.preventDefault();
          const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement;
          if (searchInput) {
            searchInput.focus();
          }
          break;
        case 'h':
        case 'H':
          event.preventDefault();
          setCurrentPage('home');
          break;
        case 'ArrowLeft':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            if (blogData?.pagination.hasPrevious) {
              goToPage(blogState.page - 1);
            }
          }
          break;
        case 'ArrowRight':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            if (blogData?.pagination.hasNext) {
              goToPage(blogState.page + 1);
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setCurrentPage, goToPage, blogState.page, blogData?.pagination]);

  useEffect(() => {
    document.title = blogPageContent.seo.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', blogPageContent.seo.description);
    }
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="blog-list-view">
      <div 
        className="blog-list-header" 
        data-blog-header
      >
        <div className="container-7xl">
          <div className="blog-list-header__content">
            <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-md">
              {blogUI.listing.header.title}
            </h1>
            <p className="text-body-guideline mb-fluid-lg">
              {blogUI.listing.header.description}
            </p>
            
            {blogData?.pagination && (
              <div className="mt-fluid-md">
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="blog-list-content">
        <div className="container-7xl py-fluid-lg">
          {postsLoading ? (
            <div className="blog-preview__grid">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="blog-card-skeleton">
                  <div className="blog-card-skeleton__image" />
                  <div className="blog-card-skeleton__content">
                    <div className="blog-card-skeleton__text blog-card-skeleton__text--h-sm blog-card-skeleton__text--w-25" />
                    <div className="blog-card-skeleton__text blog-card-skeleton__text--h-md blog-card-skeleton__text--w-75" />
                    <div className="blog-card-skeleton__text blog-card-skeleton__text--h-sm blog-card-skeleton__text--full" />
                    <div className="blog-card-skeleton__text blog-card-skeleton__text--h-sm blog-card-skeleton__text--w-66" />
                  </div>
                </div>
              ))}
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="blog-preview__grid">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="blog-card group"
                  onClick={() => viewBlogPost(post.slug)}
                >
                  <div className="blog-card__image-container">
                    {post.featuredImage ? (
                      <ImageWithFallback
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        className="blog-card__image"
                      />
                    ) : (
                      <div className="blog-card__placeholder">
                        <BookOpen className="blog-card__placeholder-icon" />
                      </div>
                    )}
                  </div>
                  
                  <div className="blog-card__content">
                    <div className="blog-card__category">
                      {post.category}
                    </div>
                    
                    <h2 className="blog-card__title">
                      {post.title}
                    </h2>
                    
                    <p className="blog-card__excerpt">
                      {post.excerpt}
                    </p>
                    
                    <div className="blog-card__footer">
                      <div className="blog-card__date">
                        <Calendar className="icon-xs" />
                        <time dateTime={post.publishedDate}>
                          {formatDate(post.publishedDate)}
                        </time>
                      </div>
                      
                      {post.readingTime && (
                        <div className="blog-card__date">
                          <Clock className="icon-xs" />
                          <span>{post.readingTime} min</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="error-card">
              <h3 className="error-title">No posts found</h3>
              <p className="error-message">Try adjusting your search or filters</p>
            </div>
          )}
          
          {/* Pagination */}
          {blogData?.pagination && (
             <div className="pagination-container">
               <button 
                 className="pagination-btn"
                 onClick={() => goToPage(blogState.page - 1)}
                 disabled={!blogData.pagination.hasPrevious}
                 aria-label="Previous page"
               >
                 &lt;
               </button>
               
               <div className="pagination-numbers">
                 {Array.from({ length: blogData.pagination.totalPages }, (_, i) => i + 1).map((pageNum) => (
                   <button
                     key={pageNum}
                     onClick={() => goToPage(pageNum)}
                     className={`pagination-btn ${blogState.page === pageNum ? 'pagination-btn--active' : ''}`}
                     aria-label={`Go to page ${pageNum}`}
                     aria-current={blogState.page === pageNum ? 'page' : undefined}
                   >
                     {pageNum}
                   </button>
                 ))}
               </div>
               
               <button 
                 className="pagination-btn"
                 onClick={() => goToPage(blogState.page + 1)}
                 disabled={!blogData.pagination.hasNext}
                 aria-label="Next page"
               >
                 &gt;
               </button>
             </div>
          )}
        </div>
      </div>

      <ScrollToTop 
        showAfter={300}
        ariaLabel="Scroll to top of blog"
      />

      <InstagramFeed />
    </main>
  );
}