/**
 * @fileoverview HomePage component for Ash Shaw Makeup Portfolio
 * Combines all homepage sections with Contentful CMS integration and proper semantic structure
 *
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - Using centralized mock data with CMS fallbacks
 */

import React, { useState } from "react";
import { HeroLayout } from "../../sections/HeroLayout";
import { HeroSection } from "../../sections/HeroSection";
import { WhySection } from "../../sections/WhySection";
import { FeaturedSection } from "../../sections/FeaturedSection";
import { BlogPreviewSection } from "../../sections/BlogPreviewSection";
import { UVMakeupSection } from "../../sections/UVMakeupSection";
import { TestimonialsSection } from "../../sections/TestimonialsSection";
import { FestivalCountdown } from "../../sections/FestivalCountdown";
import { InstagramFeed } from "../../sections/InstagramFeed";
import { Footer } from "../../common/Footer";
import { useHomepageContent } from "../../../hooks/useContentful";
import { ScrollToTop } from "../../ui/ScrollToTop";
import { BlurredCircles } from "../../ui/BlurredCircles";

// Import mock data for fallbacks
import { homepageHero } from "../../../data/mock/pages/home";
import { homepageHeroImages } from "../../../data/mock/images/hero-images";

/**
 * Props interface for HomePage component
 * @interface HomePageProps
 * @property {Function} setCurrentPage - Function to navigate between pages
 */
interface HomePageProps {
  setCurrentPage: (page: string) => void;
}

/**
 * HomePage component rendering the main landing page content with Contentful CMS integration
 *
 * New Features (v3.0):
 * - Centralized mock data system for easy content updates
 * - Clean separation of content and presentation
 * - Type-safe data imports
 * - Improved maintainability
 *
 * Features (v2.0):
 * - Dynamic content loading from Contentful CMS
 * - Fallback to static content when Contentful unavailable
 * - Real-time content updates without deployment
 * - Enhanced loading states and error handling
 *
 * Contains all homepage sections in proper semantic order:
 * - Dynamic hero section with Contentful-managed content
 * - Why I Do Makeup section with custom icons
 * - Featured Work showcase (dynamic from Contentful)
 * - Blog Preview section with latest posts
 * - UV Makeup Art preview
 * - Footer with contact form
 *
 * @param {HomePageProps} props - Component properties
 * @param {Function} props.setCurrentPage - Function to navigate between pages
 *
 * @accessibility
 * - Uses semantic HTML5 main element
 * - Proper heading hierarchy maintained across sections
 * - All interactive elements keyboard accessible
 * - Loading states with appropriate aria-labels
 *
 * @performance
 * - Efficiently renders section components without unnecessary re-renders
 * - Optimized state management for navigation updates
 * - Intelligent content caching and background refresh
 */
export function HomePage({ setCurrentPage }: HomePageProps) {
  // Fetch dynamic homepage content from Contentful
  const { 
    data: homepageContent, 
    loading: contentLoading, 
    error: contentError,
    refresh: refreshContent 
  } = useHomepageContent();

  // Loading state component
  const LoadingState = () => (
    <main id="main-content" role="main" className="homepage-loading-container">
      <div className="homepage-container-inner">
        <div className="homepage-loading-content">
          <div className="skeleton-animate">
            <div className="skeleton-title"></div>
            <div className="skeleton-subtitle"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-button"></div>
          </div>
        </div>
      </div>
    </main>
  );

  // Error state component with retry functionality
  const ErrorState = () => (
    <main id="main-content" role="main" className="homepage-error-container">
      <div className="homepage-error-content">
        <div className="homepage-error-icon-wrapper">
          <div className="homepage-error-icon">
            <span className="homepage-error-emoji">⚠️</span>
          </div>
          <h1 className="homepage-error-title">Content Temporarily Unavailable</h1>
          <p className="homepage-error-message">
            {contentError || "There was an issue loading the homepage content. Please try again."}
          </p>
        </div>
        <div className="homepage-error-actions">
          <button
            onClick={refreshContent}
            className="homepage-retry-button"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="homepage-refresh-button"
          >
            Refresh Page
          </button>
        </div>
      </div>
    </main>
  );

  // Show loading state while fetching initial content
  if (contentLoading && !homepageContent) {
    return <LoadingState />;
  }

  // Show error state if content failed to load and no cached data
  if (contentError && !homepageContent) {
    return <ErrorState />;
  }

  // Extract content with fallbacks to mock data
  const heroContent = {
    title: homepageContent?.hero.title || homepageHero.title,
    description: homepageContent?.hero.description || homepageHero.description,
    ctaText: homepageContent?.hero.ctaText || homepageHero.ctaText,
    images: homepageContent?.hero.backgroundImages?.length > 0 
      ? homepageContent.hero.backgroundImages.map(img => ({
          src: img.url,
          alt: img.alt,
          title: img.title
        }))
      : homepageHeroImages
  };

  return (
    <main id="main-content" role="main">
      {/* Content loading indicator */}
      {contentLoading && homepageContent && (
        <div className="loading-toast">
          <div className="loading-toast-inner">
            <div className="loading-toast-content">
              <div className="loading-spinner"></div>
              <span>Updating content...</span>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Hero Section with mock data fallbacks */}
      <HeroLayout
        {...homepageHero}
        heroImages={homepageHeroImages}
        enableLightbox={true}
        setCurrentPage={setCurrentPage}
        size="xl"
        layout="split"
        titleGradient={{ from: "pink-500", to: "purple-600" }}
        scrollArrowTarget="why-section"
        actions={
          <button
            onClick={() => setCurrentPage("portfolio")}
            className="inline-flex items-center justify-center px-button py-button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-body font-medium text-fluid-base rounded-500 duration-300 transform hover:scale-105 shadow-400 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-500/50"
            aria-label="Navigate to Portfolio page to explore makeup artistry collection"
          >
            Explore My Portfolio
          </button>
        }
      />
      
      {/* Why Section - now uses centralized mock data */}
      <WhySection setCurrentPage={setCurrentPage} />
      
      {/* Featured Section - will use Contentful portfolio data */}
      <FeaturedSection setCurrentPage={setCurrentPage} />
      
      {/* Blog Preview Section - showcases latest blog posts */}
      <BlogPreviewSection setCurrentPage={setCurrentPage} />
      
      {/* Testimonials Section - client reviews and social proof */}
      <TestimonialsSection />
      
      {/* Festival Countdown - Origin Festival urgency */}
      <FestivalCountdown />
      
      {/* Instagram Feed - @feedmymedia */}
      <InstagramFeed />
      
      <UVMakeupSection setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Scroll to top button */}
      <ScrollToTop />
      <BlurredCircles />
    </main>
  );
}