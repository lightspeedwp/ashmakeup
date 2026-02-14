/**
 * @fileoverview Single Portfolio Detail Page component for comprehensive portfolio viewing
 * 
 * Provides an immersive, detailed view of individual portfolio entries with story, visual gallery,
 * event information, and related content recommendations. Features full accessibility compliance,
 * responsive design, and brand-consistent styling following guidelines.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.6.0 - Moved description below gallery
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { ArrowLeft, Calendar, MapPin, Eye, Tag, Share2 } from 'lucide-react';

import { ScrollToTop } from '../../ui/ScrollToTop';
import { EnhancedLightbox } from '../../ui/EnhancedLightbox';
import { ShareComponent } from '../../ui/ShareComponent';
import { SliderCard } from '../../ui/SliderCard';
import { ResponsiveGridSlider } from '../../ui/ResponsiveGridSlider';
import { usePortfolioImageUrl } from '../../ui/PortfolioImage';
import { BlogPreviewSection } from '../../sections/BlogPreviewSection';

import { 
  getPortfolioEntryById, 
  getPortfolioCategories,
  getPortfolioByCategory,
  type UnifiedPortfolioEntry,
  type PortfolioImage 
} from '../../../utils/portfolioService';
import { portfolioUI } from '../../../data/mock/ui/portfolio';
import { useAppNavigate } from '../../../hooks/useAppNavigate';
import { formatDate } from '../../../utils/formatDate';
import "@/styles/blocks/portfolio-detail-page.css";

interface PortfolioDetailPageProps {
  portfolioId: string;
}

export function PortfolioDetailPage({ 
  portfolioId,
}: PortfolioDetailPageProps) {
  const setCurrentPage = useAppNavigate();

  const portfolioEntry = useMemo(() => {
    return getPortfolioEntryById(portfolioId);
  }, [portfolioId]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isStoryExpanded] = useState(false);

  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    currentIndex: number;
    images: PortfolioImage[];
    title: string;
  }>({
    isOpen: false,
    currentIndex: 0,
    images: [],
    title: '',
  });

  const categories = useMemo(() => getPortfolioCategories(), []);

  const relatedPortfolioItems = useMemo(() => {
    if (!portfolioEntry) return [];
    // Get items from same category
    let items = getPortfolioByCategory(portfolioEntry.category);
    // Filter out current
    items = items.filter(item => item.id !== portfolioEntry.id);
    
    // If less than 2, fetch from all (excluding current)
    if (items.length < 2) {
         const allItems = getPortfolioByCategory('all');
         const moreItems = allItems.filter(item => item.id !== portfolioEntry.id && !items.find(existing => existing.id === item.id));
         items = [...items, ...moreItems];
    }
    
    return items.slice(0, 2);
  }, [portfolioEntry]);

  const handleBackClick = useCallback(() => {
    setCurrentPage('portfolio');
  }, [setCurrentPage]);

  const handleImageClick = useCallback((imageIndex: number) => {
    if (!portfolioEntry) return;
    
    setLightbox({
      isOpen: true,
      currentIndex: imageIndex,
      images: portfolioEntry.images,
      title: portfolioEntry.title,
    });
  }, [portfolioEntry]);

  const handleLightboxClose = useCallback(() => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  }, []);

  // Handle clickable chips for Categories and Tags
  const handleCategoryClick = useCallback((categoryName: string) => {
    const category = categories.find(c => c.name === categoryName || c.id === categoryName);
    if (category) {
      setCurrentPage('portfolio', undefined, category.id);
    } else {
      const categoryId = categories.find(c => c.name.toLowerCase() === categoryName.toLowerCase())?.id;
      if (categoryId) {
         setCurrentPage('portfolio', undefined, categoryId);
      } else {
        setCurrentPage('portfolio');
      }
    }
  }, [categories, setCurrentPage]);
  
  const handleTagClick = useCallback((tag: string) => {
      setCurrentPage('portfolio');
  }, [setCurrentPage]);

  const eventDetails = useMemo(() => {
    if (!portfolioEntry) return null;
    
    const tags = portfolioEntry.tags || [];
    
    return {
      date: portfolioEntry.date ? formatDate(portfolioEntry.date) : null,
      location: tags.find(tag => tag.includes('gondwana') || tag.includes('koh-phangan') || tag.includes('ireland')),
      category: portfolioEntry.category,
      tags: tags.slice(0, 4)
    };
  }, [portfolioEntry]);

  useEffect(() => {
    if (portfolioEntry) {
      document.title = `${portfolioEntry.title} | Portfolio | Ash Shaw - Makeup Artist`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', portfolioEntry.description || `Portfolio details for ${portfolioEntry.title}`);
      }
    }
  }, [portfolioEntry]);

  if (!portfolioEntry) {
    return (
      <div className="not-found-container">
        <main 
          id="main-content"
          tabIndex={-1}
          className="container-wide text-center py-section-xl"
        >
          <h1 className="text-hero-h1 font-bold mb-fluid-lg">
            {portfolioUI.detail.notFound.title}
          </h1>
          <p className="text-body-p portfolio-detail__not-found-message mb-fluid-xl">
            {portfolioUI.detail.notFound.message}
          </p>
          <button
            onClick={handleBackClick}
            className="btn btn--neon-primary inline-flex-center gap-fluid-sm"
          >
            <ArrowLeft className="icon-md" />
            {portfolioUI.detail.notFound.backButton}
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="portfolio-detail-page bg-atomic-noise">
      
      {/* Top Header Section with Back Button and Title */}
      <section className="portfolio-header-wide">
        <div className="container-wide">
          {/* Back Navigation */}
          <nav className="portfolio-detail__breadcrumb mb-fluid-lg" aria-label="Breadcrumb">
            <button
              onClick={handleBackClick}
              className="breadcrumb-btn"
              aria-label="Back to portfolio gallery"
            >
              <ArrowLeft className="icon-md" />
              {portfolioUI.detail.navigation.backToGallery}
            </button>
          </nav>
          
          {/* Align Wide Title */}
          <h1 className="text-hero-h1 mb-fluid-md portfolio-title-wide">
            {portfolioEntry.title}
          </h1>

          {/* Event Details as Chips */}
          {eventDetails && (
            <div className="event-details-chips">
              {eventDetails.date && (
                <div className="chip chip--date">
                  <Calendar className="icon-sm" />
                  <span>{eventDetails.date}</span>
                </div>
              )}
              
              {eventDetails.location && (
                <div className="chip chip--location">
                  <MapPin className="icon-sm" />
                  <span>{eventDetails.location}</span>
                </div>
              )}
              
              <a 
                href={(() => {
                  const cat = categories.find(c => c.id === eventDetails.category);
                  return cat && cat.slug ? `/portfolio/${cat.slug}` : '/portfolio';
                })()}
                className="chip chip--category clickable"
                onClick={(e) => {
                  e.preventDefault();
                  handleCategoryClick(eventDetails.category);
                }}
              >
                <Tag className="icon-sm" />
                <span>
                  {categories.find(c => c.id === eventDetails.category)?.name || eventDetails.category}
                </span>
              </a>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" tabIndex={-1} className="container-wide py-section-md portfolio-detail__content">
        
        {/* Visual Gallery Section - Now prominent at top below title */}
        <section>
          <div className="container-wide portfolio-gallery-wrapper">
            
            {/* Main Selected Image */}
            <div className="gallery-main-wrapper">
              <button
                onClick={() => handleImageClick(selectedImageIndex)}
                className="gallery-main-image"
                aria-label={`View ${portfolioEntry.images[selectedImageIndex]?.alt} in full size`}
              >
                <img
                  src={usePortfolioImageUrl(portfolioEntry.images[selectedImageIndex]?.src || '')}
                  alt={portfolioEntry.images[selectedImageIndex]?.alt || ''}
                  className="gallery-main-image__img"
                />
                <div className="gallery-main-image__overlay" />
                <div className="gallery-main-image__icon">
                  <div className="gallery-main-image__icon-wrapper">
                    <Eye className="icon-lg" />
                  </div>
                </div>
              </button>
            </div>

            {/* Image Thumbnails - Moved below main image */}
            {portfolioEntry.images.length > 1 && (
              <div className="gallery-thumbnails">
                {portfolioEntry.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`gallery-thumbnail ${selectedImageIndex === index ? 'gallery-thumbnail--active' : ''}`}
                    aria-label={`Select image ${index + 1}: ${image.alt}`}
                  >
                    <img
                      src={usePortfolioImageUrl(image.src)}
                      alt={image.alt}
                      className="gallery-thumbnail__img"
                    />
                    {selectedImageIndex !== index && (
                      <div className="gallery-thumbnail__overlay" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Excerpt Quote - Moved below gallery */}
        <section className="container-3xl">
           <blockquote className="portfolio-detail__excerpt-quote-left">
              {portfolioEntry.description}
            </blockquote>
        </section>

        {/* Story Section */}
        <section>
          <div className="container-3xl">
            <h2 className="text-section-h2 text-center mb-fluid-lg">
              {portfolioUI.detail.sections.story.title}
            </h2>
            
            <div className="portfolio-story">
              <div className={`story-expand story-expand--visible`}> 
                {portfolioUI.detail.sections.story.extendedDescription.map((paragraph, index) => (
                  <p key={index} className="text-body-p portfolio-detail__story-paragraph mb-fluid-md">
                    {paragraph}
                  </p>
                ))}
                
                <blockquote className="story-quote">
                  "{portfolioUI.detail.sections.story.quote}"
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Tags and Share Row (Moved from separate sections) */}
        <section className="container-3xl portfolio-footer-row">
            <div className="tags-share-container">
              
              {/* Tags Section */}
              <div className="tags-section">
                <div className="section-label mb-fluid-sm">
                  <Tag className="icon-sm text-neon-purple" />
                  <span>Tags:</span>
                </div>
                
                {eventDetails && eventDetails.tags.length > 0 ? (
                  <div className="tags-list">
                    {eventDetails.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="tag-badge clickable"
                        onClick={() => handleTagClick(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="no-tags-text">
                    No tags available
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
                    title={portfolioEntry.title}
                    description={portfolioEntry.description}
                    url={typeof window !== 'undefined' ? window.location.href : `https://ashshaw.makeup/portfolio-detail/${portfolioId}`}
                    imageUrl={portfolioEntry.images[0]?.src}
                    variant="inline"
                    align="left"
                  />
                </div>
              </div>
            </div>
        </section>

        {/* Related Portfolio Section */}
        {relatedPortfolioItems.length > 0 && (
          <section>
              <h2 className="text-section-h2 text-center mb-fluid-lg">
                Related Work
              </h2>
              
              <ResponsiveGridSlider
                items={relatedPortfolioItems}
                desktopColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                  <div className="portfolio-detail__related-card-wrapper">
                    <SliderCard
                      data={item}
                      onImageClick={(imageIndex) => {
                         setLightbox({
                           isOpen: true,
                           currentIndex: imageIndex,
                           images: item.images,
                           title: item.title,
                         });
                      }}
                      onReadMore={() => setCurrentPage('portfolio-detail', item.id)}
                    />
                  </div>
                )}
                className="mb-fluid-xl"
              />
          </section>
        )}

      </main>

      <BlogPreviewSection 
        limit={3}
        title="Recent Insights"
      />

      <EnhancedLightbox
        isOpen={lightbox.isOpen}
        onClose={handleLightboxClose}
        currentIndex={lightbox.currentIndex}
        images={lightbox.images}
        title={lightbox.title}
        onNavigate={(index) => setLightbox(prev => ({ ...prev, currentIndex: index }))}
      />

      <ScrollToTop 
        showAfter={300}
        ariaLabel="Scroll to top of blog post"
      />
    </div>
  );
}