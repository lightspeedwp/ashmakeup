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
import { useBlogPosts } from '../../../hooks/useContent';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { InstagramFeed } from '../../sections/InstagramFeed';
import { Calendar, Clock, BookOpen } from '../../../lib/icons';
import { FaqSection } from '../../sections/FaqSection';
import { ArchiveFilters } from '../../ui/ArchiveFilters';
import { blogUI } from '../../../data/mock/ui/blog';
import { blogPageContent } from '../../../data/mock/pages/blog';
import { blogCategories } from '../../../data/mock/blog/categories';
import { emptyStateMessages } from '../../../data/mock/ui/error';
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import { useSearchParams } from '../../../lib/router';
import { formatDate } from '../../../utils/formatDate';
import { getBlogCategoryCount } from '../../../utils/contentCounts';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import "../../../styles/blocks/blog-page.css";

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
  const prefersReduced = useReducedMotion();

  const [blogState, setBlogState] = useState<BlogPageState>({
    page: 1,
    category: initialCategory,
    tags: [],
    searchQuery: '',
    limit: 6,
  });

  const [activeCategories, setActiveCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    if (initialCategory && initialCategory !== blogState.category) {
      setBlogState(prev => ({
        ...prev,
        category: initialCategory,
        page: 1,
      }));
      setActiveCategories(initialCategory ? [initialCategory] : []);
    }
  }, [initialCategory]);

  const blogFilterCategories = useMemo(() =>
    blogCategories.map(c => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      count: getBlogCategoryCount(c.name),
    })),
    []
  );

  const BLOG_SORT_OPTIONS = useMemo(() => [
    { value: 'recent', label: 'Most Recent' },
    { value: 'alphabetical', label: 'A-Z' },
    { value: 'featured', label: 'Featured' },
  ], []);

  const handleBlogCategoryToggle = useCallback((slug: string) => {
    setActiveCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
  }, []);

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
    sortBy: sortBy === 'recent' ? 'publishedAt' : 'title',
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
    const blogPosts = blogData ? blogData.posts : [];
    let posts = blogPosts || [];

    // Filter by search query
    if (debouncedSearch.trim()) {
      const query = debouncedSearch.toLowerCase();
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query) ||
        post.tags.some(tag => tag.toLowerCase().includes(query)) ||
        post.category.toLowerCase().includes(query)
      );
    }

    // Filter by active categories from ArchiveFilters
    if (activeCategories.length > 0) {
      posts = posts.filter(post => {
        const postCatSlug = post.category
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^a-z0-9-]/g, '');
        return activeCategories.some(slug =>
          postCatSlug.includes(slug) || post.category.toLowerCase().includes(slug)
        );
      });
    }

    // Sort by sortBy option
    switch (sortBy) {
      case 'alphabetical':
        posts = [...posts].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        posts = [...posts].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
        });
        break;
      case 'recent':
      default:
        posts = [...posts].sort((a, b) =>
          new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        );
        break;
    }

    return posts;
  }, [blogData, debouncedSearch, activeCategories, sortBy]);

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
      const scrollBehavior = prefersReduced ? 'auto' as const : 'smooth' as const;
      const blogHeader = document.querySelector('[data-blog-header]');
      if (blogHeader) {
        blogHeader.scrollIntoView({ behavior: scrollBehavior, block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: scrollBehavior });
      }
    }, 100);
    
    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = `Loading page ${page} of blog posts`;
    }
  }, [updateBlogState, blogState.page, prefersReduced]);

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
            const pag = blogData ? blogData.pagination : null;
            const hasPrev = pag ? pag.hasPrevious : false;
            if (hasPrev) {
              goToPage(blogState.page - 1);
            }
          }
          break;
        case 'ArrowRight':
          if (event.ctrlKey || event.metaKey) {
            event.preventDefault();
            const pag2 = blogData ? blogData.pagination : null;
            const hasNxt = pag2 ? pag2.hasNext : false;
            if (hasNxt) {
              goToPage(blogState.page + 1);
            }
          }
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [setCurrentPage, goToPage, blogState.page, blogData]);

  useEffect(() => {
    setSEO(pageSEO.blog);
    const paginationData = blogData ? blogData.pagination : null;
    const totalItems = paginationData ? (paginationData.total || 0) : 0;
    injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
      'Insights | Makeup Tips, Festival Guides & Tutorials',
      pageSEO.blog.description,
      '/blog',
      totalItems,
    ));
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [blogData]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="blog-list-view bg-atomic-noise">
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
          </div>
        </div>
      </div>

      <div className="blog-list-content">
        <div className="container-7xl py-fluid-lg">
          {/* Archive Filters */}
          <ArchiveFilters
            contentType="blog"
            categories={blogFilterCategories}
            activeCategories={activeCategories}
            sortBy={sortBy}
            sortOptions={BLOG_SORT_OPTIONS}
            resultCount={filteredPosts.length}
            onCategoryToggle={handleBlogCategoryToggle}
            onSortChange={setSortBy}
            onClearAll={() => {
              setActiveCategories([]);
              setSortBy('recent');
            }}
          />

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
            <div className="blog-preview__grid p-[0px]">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id} 
                  className="blog-card"
                  onClick={() => viewBlogPost(post.slug)}
                >
                  <div className="blog-card__image-container">
                    {post.featuredImage ? (
                      <OptimizedImage
                        src={post.featuredImage.url}
                        alt={post.featuredImage.alt}
                        className="blog-card__image"
                        preset="thumbnail"
                      />
                    ) : (
                      <div className="blog-card__placeholder">
                        <BookOpen className="blog-card__placeholder-icon" />
                      </div>
                    )}
                    <div className="blog-card__category">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="blog-card__content">
                    <h2 className="blog-card__title">
                      {post.title}
                    </h2>
                    
                    <p className="blog-card__excerpt">
                      {post.excerpt}
                    </p>
                    
                    <div className="blog-card__footer">
                      <div className="blog-card__date">
                        <Calendar className="icon-xs" />
                        <time dateTime={post.publishedAt}>
                          {formatDate(post.publishedAt)}
                        </time>
                      </div>
                      
                      {post.readTime && (
                        <div className="blog-card__date">
                          <Clock className="icon-xs" />
                          <span>{post.readTime} min</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="error-card">
              <h3 className="error-title">{emptyStateMessages.blog.title}</h3>
              <p className="error-message">{emptyStateMessages.blog.message}</p>
            </div>
          )}
          
          {/* Pagination */}
          {blogData && blogData.pagination ? (
             <div className="pagination-container">
               <button
                 type="button"
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
                     type="button"
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
                 type="button"
                 className="pagination-btn"
                 onClick={() => goToPage(blogState.page + 1)}
                 disabled={!blogData.pagination.hasNext}
                 aria-label="Next page"
               >
                 &gt;
               </button>
             </div>
          ) : null}
        </div>
      </div>

      <InstagramFeed />
      <FaqSection pageId="blog" />
    </main>
  );
}