/**
 * @fileoverview Portfolio main page component for Ash Shaw Makeup Portfolio
 * 
 * Comprehensive portfolio listing and filtering with 2-column grid layout similar to the blog page.
 * Features category filtering, pagination, and responsive design following the complete brand 
 * guidelines and accessibility standards.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.5.0 - Refactored to use async usePortfolioEntries hook (Mock/WP)
 */

import React, { useState, useCallback, useMemo, useEffect } from 'react';

import { PortfolioCard } from '../../ui/PortfolioCard';
import { EnhancedLightbox } from '../../ui/EnhancedLightbox';
import { useIsMobile } from '../../ui/use-mobile';
import { FaqSection } from '../../sections/FaqSection';
import { ArchiveFilters } from '../../ui/ArchiveFilters';

import { 
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../../ui/pagination';
import { 
  getPortfolioCategories, 
  type UnifiedPortfolioEntry 
} from '../../../utils/portfolioService';
import { getPortfolioCategoryCount } from '../../../utils/contentCounts';
import { portfolioCategoryData } from '../../../data/mock/portfolio/categories';
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildImageGallerySchema,
} from '../../../utils/schemaService';
import { usePortfolioEntries } from '../../../hooks/useContent'; // UPDATED IMPORT
import { OptimizedImage } from '../../ui/OptimizedImage';
import "../../../styles/blocks/portfolio-main-page.css";

interface PortfolioCardEntry {
  id: string;
  title: string;
  subtitle?: string;
  date?: string;
  featuredImage: {
    src: string;
    alt: string;
    caption?: string;
    description?: string;
  };
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    description?: string;
  }>;
  category: string;
  featured?: boolean;
  displayOrder?: number;
  tags?: string[];
}

interface PortfolioMainPageProps {
  initialCategory?: string;
}

interface PortfolioPageState {
  page: number;
  category: string | undefined;
  limit: number;
}

const PORTFOLIO_CATEGORIES_DATA = getPortfolioCategories();

/** Bundler-safe type alias — avoids Array<T> nested generic in hook calls */
type PortfolioLightboxImage = { src: string; alt: string; caption?: string; description?: string };
type PortfolioLightboxState = {
  isOpen: boolean;
  currentIndex: number;
  images: PortfolioLightboxImage[];
  title: string;
};
const INITIAL_PORTFOLIO_LIGHTBOX: PortfolioLightboxState = {
  isOpen: false, currentIndex: 0, images: [], title: '',
};

export function PortfolioMainPage({ initialCategory }: PortfolioMainPageProps) {
  const setCurrentPage = useAppNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    setSEO(pageSEO.portfolio);
  }, []);

  const portfolioStateInit: PortfolioPageState = {
    page: 1,
    category: initialCategory,
    limit: 10,
  };
  const [portfolioState, setPortfolioState] = useState(portfolioStateInit);

  const activeCategoriesInit: string[] = initialCategory ? [initialCategory] : [];
  const [activeCategories, setActiveCategories] = useState(activeCategoriesInit);
  const [sortBy, setSortBy] = useState('recent');

  /** Lookup: slug → category id (e.g. 'uv-blacklight' → 'UV Makeup') */
  const slugToCategoryId = useMemo(() => {
    const map = new Map();
    portfolioCategoryData.forEach(c => map.set(c.slug, c.id));
    return map;
  }, []);

  const archiveCategories = useMemo(() =>
    portfolioCategoryData.map(c => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      count: getPortfolioCategoryCount(c.id),
    })),
    []
  );

  const PORTFOLIO_SORT_OPTIONS = useMemo(() => [
    { value: 'recent', label: 'Most Recent' },
    { value: 'alphabetical', label: 'A-Z' },
    { value: 'featured', label: 'Featured' },
  ], []);

  // Use the new Async Hook
  const { data: entriesData, loading: entriesLoading, error: entriesError, refresh: refreshEntries } = usePortfolioEntries({
    category: 'all', // We fetch all and filter client side for now to match mock behavior
    page: 1, // We fetch all for client side pagination to match previous logic
    limit: 100 // Fetch plenty
  });

  // Inject ImageGallery schema once all entries are available
  useEffect(() => {
    const hasEntries = entriesData && entriesData.entries;
    if (hasEntries) {
      injectSchema(SCHEMA_IDS.gallery, buildImageGallerySchema(entriesData.entries as any));
    }
    return () => {
      removeSchema(SCHEMA_IDS.gallery);
    };
  }, [entriesData]);

  const handleArchiveCategoryToggle = useCallback((slug: string) => {
    setActiveCategories(prev =>
      prev.includes(slug) ? prev.filter(s => s !== slug) : [...prev, slug]
    );
    // Reset to page 1 when filters change
    setPortfolioState(prev => ({ ...prev, page: 1 }));
  }, []);

  // Update state when initialCategory changes
  React.useEffect(() => {
    setPortfolioState(prev => ({
      ...prev,
      category: initialCategory,
      page: 1
    }));
  }, [initialCategory]);
  
  const [lightbox, setLightbox] = useState(INITIAL_PORTFOLIO_LIGHTBOX);
  
  const scrollToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  const transformUnifiedToPortfolioCard = useCallback((entries: UnifiedPortfolioEntry[]): PortfolioCardEntry[] => {
    return entries.map(entry => ({
      ...entry,
      date: entry.date,
      subtitle: entry.subtitle || entry.category,
      featuredImage: entry.images && entry.images[0] ? entry.images[0] : {
        src: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800',
        alt: 'Default portfolio image',
        caption: 'Portfolio Image',
        description: 'Portfolio artwork'
      },
      images: entry.images || []
    }));
  }, []);

  // Calculate filtered entries
  const portfolioEntries = useMemo((): PortfolioCardEntry[] => {
    if (!entriesData || !entriesData.entries) return [];

    let entries = transformUnifiedToPortfolioCard(entriesData.entries);

    // Filter by active categories from ArchiveFilters
    if (activeCategories.length > 0) {
      const activeCategoryIds = new Set(
        activeCategories
          .map(slug => slugToCategoryId.get(slug))
          .filter(Boolean) as string[]
      );
      entries = entries.filter(entry => activeCategoryIds.has(entry.category));
    }

    // Sort by sortBy option
    switch (sortBy) {
      case 'alphabetical':
        entries = [...entries].sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        entries = [...entries].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return new Date(b.date || '').getTime() - new Date(a.date || '').getTime();
        });
        break;
      case 'recent':
      default:
        entries = [...entries].sort((a, b) =>
          new Date(b.date || '').getTime() - new Date(a.date || '').getTime()
        );
        break;
    }

    return entries;
  }, [entriesData, transformUnifiedToPortfolioCard, activeCategories, sortBy, slugToCategoryId]);

  // Client-side pagination based on filtered results
  const pagination = useMemo(() => {
    const total = portfolioEntries.length;
    const totalPages = Math.ceil(total / portfolioState.limit);
    
    return {
      page: portfolioState.page,
      total,
      limit: portfolioState.limit,
      hasNext: portfolioState.page < totalPages,
      hasPrevious: portfolioState.page > 1,
      totalPages,
    };
  }, [portfolioEntries.length, portfolioState.page, portfolioState.limit]);

  const currentPageEntries = useMemo(() => {
    const startIndex = (portfolioState.page - 1) * portfolioState.limit;
    const endIndex = startIndex + portfolioState.limit;
    return portfolioEntries.slice(startIndex, endIndex);
  }, [portfolioEntries, portfolioState.page, portfolioState.limit]);

  const handleCategoryChange = useCallback((categoryId: string) => {
    setCurrentPage('portfolio', undefined, categoryId === 'all' ? undefined : categoryId);
  }, [setCurrentPage]);

  const handlePageChange = useCallback((newPage: number) => {
    setPortfolioState(prev => ({
      ...prev,
      page: newPage,
    }));

    scrollToTop();

    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = `Navigated to page ${newPage} of portfolio`;
    }
  }, []);

  const handleNavigateToDetail = useCallback((portfolioId: string) => {
    setCurrentPage('portfolio-detail', portfolioId);
  }, [setCurrentPage]);

  const handlePortfolioClick = useCallback((entry: PortfolioCardEntry, imageIndex: number = 0) => {
    const images = entry.images.map(img => ({
      src: img.src,
      alt: img.alt,
      caption: img.caption,
      description: img.description,
    }));

    setLightbox({
      isOpen: true,
      currentIndex: imageIndex,
      images,
      title: entry.title,
    });

    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = `Opened ${entry.title} portfolio gallery`;
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(prev => ({ ...prev, isOpen: false }));

    const announcement = document.getElementById('announcements');
    if (announcement) {
      announcement.textContent = 'Closed portfolio gallery';
    }
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="portfolio-main-page bg-atomic-noise">
      {/* Portfolio page header */}
      <section className="portfolio-page-header">
        <div className="portfolio-page-header__content">
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-lg">
            Portfolio
          </h1>
        </div>
      </section>

      {/* Category Filters */}
      <section className="category-filters-section">
        <div className="container-7xl">
          <ArchiveFilters
            contentType="portfolio"
            categories={archiveCategories}
            activeCategories={activeCategories}
            sortBy={sortBy}
            sortOptions={PORTFOLIO_SORT_OPTIONS}
            resultCount={portfolioEntries.length}
            onCategoryToggle={handleArchiveCategoryToggle}
            onSortChange={setSortBy}
            onClearAll={() => {
              setActiveCategories([]);
              setSortBy('recent');
              handleCategoryChange('all');
            }}
          />
        </div>
      </section>

      {/* Portfolio Content */}
      <section className="portfolio-content-section">
        <div className="portfolio-content-container">

          {entriesLoading && (
            <div className="layout-grid layout-grid--desktop-2 rgs-grid">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="portfolio-card-skeleton">
                  <div className="portfolio-card-skeleton__image"></div>
                  <div className="portfolio-card-skeleton__content">
                    <div className="skeleton-bar skeleton-bar--subtitle mb-fluid-sm skeleton-bar--w-25"></div>
                    <div className="skeleton-bar skeleton-bar--title mb-fluid-sm"></div>
                    <div className="skeleton-bar skeleton-bar--text mb-fluid-sm skeleton-bar--w-85"></div>
                    <div className="skeleton-bar skeleton-bar--text skeleton-bar--w-75"></div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {entriesError && !entriesLoading && (
            <div className="portfolio-error">
              <button
                type="button"
                onClick={refreshEntries}
                className="btn btn--neon-primary"
              >
                Try Again
              </button>
            </div>
          )}

          {!entriesLoading && !entriesError && currentPageEntries && currentPageEntries.length > 0 && (
            <>
              <div className="layout-grid layout-grid--desktop-2 rgs-grid">
                {currentPageEntries.map((entry, index) => (
                  <PortfolioCard
                    key={entry.id}
                    entry={entry}
                    onImageClick={(imageIndex) => handlePortfolioClick(entry, imageIndex)}
                    onNavigateToDetail={handleNavigateToDetail}
                  />
                ))}
              </div>

              {pagination.totalPages > 1 && (
                <div className="pagination-wrapper">
                  <Pagination className="mb-fluid-2xl">
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious 
                          onClick={() => handlePageChange(Math.max(1, portfolioState.page - 1))}
                          disabled={portfolioState.page <= 1}
                          className="pagination-nav-button"
                        />
                      </PaginationItem>
                      
                      {(() => {
                        const totalPages = pagination.totalPages;
                        const currentPage = portfolioState.page;
                        const maxVisible = isMobile ? 3 : 5;
                        
                        if (totalPages <= maxVisible) {
                          return [...Array(totalPages)].map((_, index) => {
                            const pageNumber = index + 1;
                            const isCurrentPage = pageNumber === currentPage;
                            
                            return (
                              <PaginationItem key={pageNumber}>
                                <PaginationLink
                                  onClick={() => handlePageChange(pageNumber)}
                                  isActive={isCurrentPage}
                                  className="pagination-btn"
                                >
                                  {pageNumber}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          });
                        } else {
                          const pages = [];
                          
                          pages.push(
                            <PaginationItem key={1}>
                              <PaginationLink
                                onClick={() => handlePageChange(1)}
                                isActive={currentPage === 1}
                                className="pagination-btn"
                              >
                                1
                              </PaginationLink>
                            </PaginationItem>
                          );
                          
                          if (currentPage > 3) {
                            pages.push(
                              <PaginationItem key="ellipsis-1">
                                <PaginationEllipsis className="pagination-ellipsis" />
                              </PaginationItem>
                            );
                          }
                          
                          const start = Math.max(2, currentPage - 1);
                          const end = Math.min(totalPages - 1, currentPage + 1);
                          
                          for (let i = start; i <= end; i++) {
                            pages.push(
                              <PaginationItem key={i}>
                                <PaginationLink
                                  onClick={() => handlePageChange(i)}
                                  isActive={currentPage === i}
                                  className="pagination-btn"
                                >
                                  {i}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          }
                          
                          if (currentPage < totalPages - 2) {
                            pages.push(
                              <PaginationItem key="ellipsis-2">
                                <PaginationEllipsis className="pagination-ellipsis" />
                              </PaginationItem>
                            );
                          }
                          
                          if (totalPages > 1) {
                            pages.push(
                              <PaginationItem key={totalPages}>
                                <PaginationLink
                                  onClick={() => handlePageChange(totalPages)}
                                  isActive={currentPage === totalPages}
                                  className="pagination-btn"
                                >
                                  {totalPages}
                                </PaginationLink>
                              </PaginationItem>
                            );
                          }
                          
                          return pages;
                        }
                      })()}
                      
                      <PaginationItem>
                        <PaginationNext 
                          onClick={() => handlePageChange(Math.min(pagination.totalPages, portfolioState.page + 1))}
                          disabled={portfolioState.page >= pagination.totalPages}
                          className="pagination-nav-button"
                        />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination>
                </div>
              )}
            </>
          )}

          {!entriesLoading && !entriesError && (!currentPageEntries || currentPageEntries.length === 0) && (
            <div className="portfolio-empty">
              <p className="portfolio-empty__title">
                No portfolio entries found
              </p>
              <p className="portfolio-empty__message">
                {portfolioState.category 
                  ? `No entries in the ${(() => { const found = PORTFOLIO_CATEGORIES_DATA.find(cat => cat.id === portfolioState.category); return found ? found.name : 'selected'; })()} category.`
                  : 'No portfolio entries available at the moment.'
                }
              </p>
              {portfolioState.category && (
                <button
                  type="button"
                  onClick={() => handleCategoryChange('all')}
                  className="btn btn--neon-secondary"
                >
                  View All Work
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      <EnhancedLightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        currentIndex={lightbox.currentIndex}
        images={lightbox.images}
        title={lightbox.title}
        onNavigate={(index) => setLightbox(prev => ({ ...prev, currentIndex: index }))}
      />

      <FaqSection pageId="portfolio" />
    </main>
  );
}