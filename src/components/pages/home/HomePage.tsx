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
import { FusionNailsSection } from "../../sections/FusionNailsSection";
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
 * - Fusion Nails preview
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
    <main id="main-content" role="main" className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-purple-900/50 dark:to-purple-950 transition-colors duration-300">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-16 bg-gray-200 dark:bg-purple-800/50 rounded-lg w-80 mx-auto mb-6"></div>
            <div className="h-8 bg-gray-200 dark:bg-purple-800/50 rounded w-96 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 dark:bg-purple-800/50 rounded w-64 mx-auto mb-8"></div>
            <div className="h-12 bg-gray-200 dark:bg-purple-800/50 rounded-lg w-48 mx-auto"></div>
          </div>
        </div>
      </div>
    </main>
  );

  // Error state component with retry functionality
  const ErrorState = () => (
    <main id="main-content" role="main" className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-purple-900/50 dark:to-purple-950 flex items-center justify-center transition-colors duration-300">
      <div className="text-center p-8">
        <div className="mb-6">
          <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-red-500 dark:text-red-400 text-2xl">⚠️</span>
          </div>
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-purple-100 mb-2">Content Temporarily Unavailable</h1>
          <p className="text-gray-600 dark:text-purple-300 mb-6">
            {contentError || "There was an issue loading the homepage content. Please try again."}
          </p>
        </div>
        <div className="space-x-4">
          <button
            onClick={refreshContent}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 text-white rounded-lg transition-colors"
          >
            Try Again
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-gray-600 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
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
        <div className="fixed top-4 right-4 z-50">
          <div className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
            <div className="flex items-center space-x-2">
              <div className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full"></div>
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
      
      <FusionNailsSection setCurrentPage={setCurrentPage} />
      <Footer setCurrentPage={setCurrentPage} />
      
      {/* Scroll to top button */}
      <ScrollToTop />
      <BlurredCircles />
    </main>
  );
}