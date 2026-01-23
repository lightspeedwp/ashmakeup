/**
 * @fileoverview About page component for Ash Shaw Makeup Portfolio
 * Provides immersive storytelling through full-width sections, gradient frames,
 * Contentful CMS integration, and accessibility-compliant structure with creative visual elements.
 *
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - Using centralized mock data
 */

import React from "react";
import "../../../styles/globals.css";
import { HeroLayout } from "../../sections/HeroLayout";
import { Footer } from "../../common/Footer";
import { ScrollToTop } from "../../ui/ScrollToTop";

import { SectionCard } from "../../ui/SectionCard";
import { ABOUT_SECTION_THEMES } from "../../common/Constants";
import { aboutHeroImages } from "../../../data/mock/images/hero-images";
import {
  aboutHero,
  journeySection,
  philosophySection,
  skillsSection,
  experienceHighlights,
  aboutCTA
} from "../../../data/mock/pages/about";
import { useAboutPageContent } from "../../../hooks/useContentful";

/**
 * Props interface for AboutPage component
 * @interface AboutPageProps
 * @property {Function} [setCurrentPage] - Function to navigate to different pages
 * @property {Function} [scrollToPortfolioSection] - Function to scroll to specific portfolio sections
 */
interface AboutPageProps {
  setCurrentPage?: (page: string) => void;
  scrollToPortfolioSection?: (sectionId?: string) => void;
}

/**
 * About page component providing Ash Shaw's complete makeup artist story with Contentful CMS integration
 *
 * New Features (v2.0):
 * - Dynamic content loading from Contentful CMS
 * - Rich text content support for flexible storytelling
 * - Real-time content updates without code deployment
 * - Fallback to static content when Contentful unavailable
 * - Enhanced loading states and error handling
 *
 * Features a narrative journey through multiple themed sections:
 * - Dynamic hero content with Contentful-managed text and images
 * - Personal introduction and creative foundation
 * - Festival journey and artistic evolution
 * - Berlin nightclub scene exploration
 * - UV makeup experimentation and mastery
 * - Professional mousse eyeshadow work
 * - UV reactive artistry expansion
 * - Creative process insights
 * - Future aspirations and goals
 *
 * Design Elements:
 * - Full-width layout maximizing visual impact
 * - Translucent cards with gradient frames for depth
 * - Staggered background decorations creating movement
 * - Pull quotes with gradient text effects
 * - Responsive typography scaling from mobile to desktop
 * - Smooth scrolling between sections
 * - Content management via Contentful CMS
 *
 * @param {AboutPageProps} props - Component properties
 * @param {Function} [props.setCurrentPage] - Function to navigate to different pages
 * @param {Function} [props.scrollToPortfolioSection] - Function to scroll to specific portfolio sections
 *
 * @returns {JSX.Element} Complete about page with storytelling sections and footer
 *
 * @accessibility
 * - Semantic HTML structure with proper heading hierarchy (h1 > h2 > h3)
 * - High contrast text with WCAG AA compliant color ratios
 * - Keyboard accessible navigation and interactive elements
 * - Screen reader friendly content structure and alt text
 * - Loading states with appropriate aria-labels
 *
 * @performance
 * - Optimized gradient backgrounds using CSS custom properties
 * - Efficient animation timing to avoid layout thrashing
 * - Conditional rendering of navigation functions
 * - Intelligent content caching and background refresh
 *
 * @example
 * <AboutPage
 *   setCurrentPage={setCurrentPage}
 *   scrollToPortfolioSection={scrollToPortfolioSection}
 * />
 */
export function AboutPage({
  setCurrentPage,
  scrollToPortfolioSection,
}: AboutPageProps) {
  // Fetch dynamic about page content from Contentful
  const {
    data: aboutContent,
    loading: contentLoading,
    error: contentError,
    refresh: refreshContent,
  } = useAboutPageContent();

  const handlePortfolioClick = () => {
    if (setCurrentPage && scrollToPortfolioSection) {
      setCurrentPage("portfolio");
      setTimeout(() => scrollToPortfolioSection(), 100);
    }
  };

  const handleUVMakeupClick = () => {
    if (setCurrentPage && scrollToPortfolioSection) {
      setCurrentPage("portfolio");
      setTimeout(
        () => scrollToPortfolioSection("uv-makeup"),
        100,
      );
    }
  };

  // Loading state component
  const LoadingState = () => (
    <div className="about-loading-container min-h-screen duration-300">
      <div className="about-loading-inner">
        <div className="text-center">
          <div className="skeleton-animate">
            <div className="skeleton-title"></div>
            <div className="skeleton-subtitle"></div>
            <div className="skeleton-text"></div>
            <div className="space-y-8">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="about-skeleton-card"
                >
                  <div className="h-6 bg-gray-200 dark:bg-purple-800/50 rounded w-48 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-purple-800/50 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 dark:bg-purple-800/50 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 dark:bg-purple-800/50 rounded w-4/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Error state component with retry functionality
  const ErrorState = () => (
    <div className="homepage-error-container">
      <div className="homepage-error-content">
        <div className="homepage-error-icon-wrapper">
          <div className="homepage-error-icon">
            <span className="homepage-error-emoji">⚠️</span>
          </div>
          <h1 className="homepage-error-title">
            About Content Unavailable
          </h1>
          <p className="homepage-error-message">
            {contentError ||
              "There was an issue loading the about page content. Please try again."}
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
    </div>
  );

  // Show loading state while fetching initial content
  if (contentLoading && !aboutContent) {
    return <LoadingState />;
  }

  // Show error state if content failed to load and no cached data
  if (contentError && !aboutContent) {
    return <ErrorState />;
  }

  // Extract content with fallbacks to static content
  const heroTitle =
    aboutContent?.hero.title || "My journey through";
  const heroSubtitle =
    aboutContent?.hero.subtitle ||
    "colour, creativity, and connection since 2019.";
  const heroDescription =
    aboutContent?.hero.description ||
    "What began as simple experimentation quickly turned into a passion that's taken me from intimate gatherings to massive festival stages, from underground Berlin clubs to innovative UV explorations. This is my story of colour, connection, and creative growth.";
  const heroImage = aboutContent?.hero.image
    ? {
        src: aboutContent.hero.image.url,
        alt: aboutContent.hero.image.alt,
        title: aboutContent.hero.image.title,
      }
    : null;

  return (
    <div className="bg-white dark:bg-gradient-to-br dark:from-purple-950 dark:via-purple-900/50 dark:to-purple-950 min-h-screen duration-300">
      {/* Content loading indicator */}
      {contentLoading && aboutContent && (
        <div className="loading-toast">
          <div className="loading-toast-inner">
            <div className="loading-toast-content">
              <div className="loading-spinner"></div>
              <span>Updating content...</span>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Hero Section with Contentful content */}
      <HeroLayout
        title={heroTitle}
        subtitle={
          <>
            <em className="text-gradient-pink-rose">
              colour
            </em>
            ,{" "}
            <em className="text-gradient-purple-violet">
              creativity
            </em>
            , and{" "}
            <em className="text-gradient-blue-cyan">
              connection
            </em>{" "}
            since 2019.
          </>
        }
        description={heroDescription}
        size="xl"
        layout="split"
        fullscreen={true}
        className="bg-hero-section"
        titleGradient={{ from: "pink-500", to: "purple-600" }}
        showScrollArrow={true}
        scrollArrowTarget="journey-section"
        heroImages={heroImage ? [heroImage] : aboutHeroImages}
        lightboxTitle="Ash Shaw's Creative Journey"
        enableLightbox={true}
        actions={
          setCurrentPage && (
            <button
              onClick={handlePortfolioClick}
              className="inline-flex items-center justify-center px-button py-button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-body font-medium text-fluid-base rounded-500 duration-300 transform hover:scale-105 shadow-400 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-500/50"
              aria-label="Navigate to Portfolio page to explore makeup artistry collection"
            >
              Explore My Portfolio
            </button>
          )
        }
        decorativeElements={
          <>
            <div
              className="about-hero-orb-1"
              aria-hidden="true"
            ></div>
            <div
              className="about-hero-orb-2"
              aria-hidden="true"
            ></div>
            <div
              className="about-hero-orb-3"
              aria-hidden="true"
            ></div>
          </>
        }
      />

      {/* Journey Section */}
      <SectionCard
        id="journey-section"
        title="The Journey Begins"
        theme={ABOUT_SECTION_THEMES.journey}
        quote="Every brush stroke tells a story."
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed">
          In 2019, I discovered something magical about makeup that went beyond just applying products. It was about transformation, expression, and the incredible moment when someone sees themselves in a completely new light. What started as curiosity became obsession, then passion, then purpose. Each face became a canvas, each event a new adventure, each technique a step forward in my artistic evolution.
        </p>
      </SectionCard>

      {/* Festival Section */}
      <SectionCard
        title="Festival Magic"
        theme={ABOUT_SECTION_THEMES.festival}
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-white leading-relaxed">
          Festivals became my laboratory. There's something about the outdoor energy, the music, the freedom that brings out the most creative sides of people. Festival makeup isn't just about looking good – it's about embodying the spirit of celebration.
        </p>
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed mt-fluid-md">
          From intimate gatherings to massive multi-day events, I learned to read the crowd, adapt to the environment, and create looks that would photograph beautifully under any lighting condition while staying vibrant through hours of dancing.
        </p>
      </SectionCard>

      {/* Berlin Nights Section */}
      <SectionCard
        title="Berlin Nightclub Scene"
        theme={ABOUT_SECTION_THEMES.berlin}
        quote="In Berlin, makeup becomes pure art."
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed">
          Berlin's underground scene opened my eyes to a completely different side of makeup artistry. Here, creativity knows no bounds, and self-expression is not just encouraged – it's expected.
        </p>
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed mt-fluid-md">
          Working in Berlin's clubs taught me about dramatic lighting, bold contrasts, and the art of creating looks that transform completely under different lighting conditions. The city's creative energy pushed my boundaries and expanded my artistic vocabulary.
        </p>
      </SectionCard>

      {/* UV Makeup Section */}
      <SectionCard
        title="UV Explorations"
        theme={ABOUT_SECTION_THEMES.uv}
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed">
          UV reactive makeup opened up an entirely new dimension to my work. The science behind fluorescent pigments, the way colors behave under blacklight, the magical transformation that happens when the lights change – it's like discovering a secret world.
        </p>
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed mt-fluid-md">
          This work requires precision in both application and color theory. Understanding how different pigments react, layering techniques, and creating designs that look stunning in both natural and UV light became a specialty that sets my work apart in the festival circuit.
        </p>
        <div className="bg-white/50 dark:bg-purple-900/30 rounded-xl p-fluid-md mt-fluid-xl border border-gray-200 dark:border-purple-700">
          <h3 className="text-fluid-xl font-heading font-semibold text-gray-800 dark:text-purple-100 mb-fluid-sm">
            Technical Mastery
          </h3>
          <div className="w-16 h-1 bg-gradient-blue-teal-green rounded-full mb-fluid-sm"></div>
          <p className="text-fluid-base font-body font-normal text-gray-600 dark:text-purple-200">
            Specialized knowledge of UV-reactive pigments, application techniques, and dual-lighting design principles.
          </p>
        </div>
      </SectionCard>

      {/* Mousse Makeup Section */}
      <SectionCard
        title="Professional Mousse Eyeshadows"
        theme={ABOUT_SECTION_THEMES.mousse}
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed">
          Working with professional mousse eyeshadows taught me the importance of texture in makeup artistry. The creamy, blendable consistency allows for seamless color transitions and the ability to build intensity gradually.
        </p>
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed mt-fluid-md">
          This medium became perfect for creating those Instagram-worthy gradient looks that photograph beautifully and provide the color payoff that festival environments demand. The techniques I developed here became fundamental to my signature style.
        </p>
        <div className="grid sm:grid-cols-3 gap-fluid-md mt-fluid-xl">
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-red-500 rounded-full mx-auto mb-fluid-sm shadow-lg"></div>
            <h4 className="text-fluid-base font-heading font-medium text-gray-800 dark:text-purple-100">
              Color Theory
            </h4>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full mx-auto mb-fluid-sm shadow-lg"></div>
            <h4 className="text-fluid-base font-heading font-medium text-gray-800 dark:text-purple-100">
              Blending Mastery
            </h4>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 bg-gradient-to-br from-red-400 to-rose-500 rounded-full mx-auto mb-fluid-sm shadow-lg"></div>
            <h4 className="text-fluid-base font-heading font-medium text-gray-800 dark:text-purple-100">
              Texture Work
            </h4>
          </div>
        </div>
      </SectionCard>

      {/* UV Makeup Section */}
      <SectionCard
        title="UV Makeup Artistry"
        theme={ABOUT_SECTION_THEMES.nails}
        actions={
          setCurrentPage && (
            <div className="text-center">
              <button
                onClick={handleUVMakeupClick}
                className="inline-flex items-center justify-center px-button py-button bg-gradient-to-r from-cyan-500 via-teal-500 to-green-500 hover:from-cyan-600 hover:via-teal-600 hover:to-green-600 text-white font-body font-medium text-fluid-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-teal-200 dark:focus:ring-teal-500/50"
                aria-label="Navigate to Portfolio page UV Makeup section"
              >
                View UV Makeup Gallery
              </button>
            </div>
          )
        }
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed">
          UV-reactive makeup opened up an electrifying new dimension to my artistry. Working with neon pigments and blacklight-reactive products allowed me to create bold, geometric designs that transform under different lighting conditions.
        </p>
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed mt-fluid-md">
          The challenge of creating designs that work both in natural light and under UV blacklight pushed my creativity to new levels. Each piece must be vibrant and striking on its own, then transform into something even more dramatic when the lights go down.
        </p>
      </SectionCard>

      {/* Creative Process Section */}
      <SectionCard
        title="Creative Process"
        theme={ABOUT_SECTION_THEMES.creative}
        quote="True artistry lies in making others shine."
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed">
          My creative process always begins with connection. Whether it's understanding a client's vision, feeling the energy of an event, or exploring a new technique, everything starts with that moment of inspiration and understanding.
        </p>
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed mt-fluid-md">
          I believe in collaborative creativity – working with each person to enhance their natural beauty while expressing their unique personality. It's not about imposing a style, but about finding the perfect intersection of artistry and individual expression.
        </p>
      </SectionCard>

      {/* Looking Forward Section */}
      <SectionCard
        title="Looking Forward"
        theme={ABOUT_SECTION_THEMES.future}
        actions={
          setCurrentPage && (
            <div className="text-center">
              <button
                onClick={handlePortfolioClick}
                className="inline-flex items-center justify-center px-button py-button bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 hover:from-purple-600 hover:via-pink-600 hover:to-blue-600 text-white font-body font-medium text-fluid-base rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-500/50"
                aria-label="Navigate to Portfolio page to explore makeup artistry collection"
              >
                Explore My Portfolio
              </button>
            </div>
          )
        }
      >
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed">
          The makeup industry continues to evolve, and I'm excited to grow with it. New techniques, sustainable products, innovative applications – there's always something new to explore and master.
        </p>
        <p className="text-fluid-lg font-body font-normal text-gray-700 dark:text-purple-100 leading-relaxed mt-fluid-md">
          My goal is to continue pushing creative boundaries while staying true to what drew me to this art form in the first place: the joy of helping people express their most confident, creative selves.
        </p>
      </SectionCard>

      {/* Scroll to Top Button */}
      <ScrollToTop
        showAfter={300}
        ariaLabel="Scroll to top of about page"
      />

      {/* Footer */}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}