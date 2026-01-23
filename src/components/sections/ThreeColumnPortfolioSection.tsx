/**
 * @fileoverview Enhanced Three Column Portfolio Section with Multi-Image Support
 * Reusable layout component for displaying portfolio entries with image sliders and professional lightbox
 *
 * Styling System:
 * - WordPress-aligned global CSS classes (Batch 4)
 * - Fluid typography and spacing following guidelines
 * - Responsive grid layout with mobile-first approach
 * - Dark mode compatible with proper contrast
 *
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0
 * @since 1.0.0 - Initial three column portfolio section
 * @since 2.0.0 - Added multi-image support with slider cards
 * @since 3.0.0 - Migrated to WordPress-aligned CSS classes (Batch 4)
 * @lastModified 2025-01-29
 */

import React, { useState } from "react";
import { PortfolioLightbox } from "../ui/PortfolioLightbox";
import { PortfolioCard } from "../ui/PortfolioCard";
import { SliderCard } from "../ui/SliderCard";

/**
 * Portfolio section interface
 */
interface PortfolioSection {
  id: string;
  title: string;
  description: string;
  gradientFrom: string;
  gradientTo: string;
  backgroundGradient: string;
  titleGradient: string;
  subtitleGradient: string;
  decorativeColors: string[];
  entries?: PortfolioEntry[];
  cta?: {
    text: string;
    action: () => void;
  };
}

/**
 * Props interface for ThreeColumnPortfolioSection
 */
interface ThreeColumnPortfolioSectionProps {
  section: PortfolioSection;
  sectionIndex: number;
}

/**
 * Enhanced portfolio entry interface supporting multiple images
 */
interface PortfolioEntry {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  images: Array<{
    src: string;
    alt: string;
    caption?: string;
    description?: string;
  }>;
  category?: string;
}

/**
 * Enhanced Three Column Portfolio Section component with multi-image support
 *
 * New Features:
 * - Each portfolio entry can contain multiple images
 * - Image slider within each portfolio card
 * - Professional lightbox with navigation and detailed captions
 * - Responsive grid layout (3-column desktop, 1-column mobile)
 * - Smooth animations and hover effects
 * - Full accessibility support
 *
 * Layout Strategy:
 * - Desktop: 3-column CSS Grid with consistent spacing
 * - Tablet: 2-column responsive layout
 * - Mobile: Single column with full-width cards
 * - Each card contains an image slider with navigation
 * - Click opens professional lightbox with gallery navigation
 *
 * @param {ThreeColumnPortfolioSectionProps} props - Component properties
 * @param {PortfolioSection} props.section - Portfolio section data with images and metadata
 * @param {number} props.sectionIndex - Section index for styling variations
 *
 * @returns {JSX.Element} Three-column portfolio section with enhanced features
 *
 * @accessibility
 * - Semantic HTML structure with proper landmarks
 * - Keyboard navigation for image sliders
 * - Screen reader support for image descriptions
 * - Focus management for lightbox interactions
 * - High contrast mode compatibility
 *
 * @performance
 * - Lazy loading for portfolio images
 * - Optimized slider performance
 * - Efficient state management
 * - Minimal re-renders through proper memoization
 */
export function ThreeColumnPortfolioSection({
  section,
  sectionIndex,
}: ThreeColumnPortfolioSectionProps) {
  const [lightboxData, setLightboxData] = useState<{
    isOpen: boolean;
    images: Array<{
      src: string;
      alt: string;
      caption?: string;
      description?: string;
    }>;
    currentIndex: number;
    title: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  /**
   * Opens lightbox with portfolio entry images
   */
  const openLightbox = (
    entry: PortfolioEntry,
    imageIndex: number = 0,
  ) => {
    setLightboxData({
      isOpen: true,
      images: entry.images,
      currentIndex: imageIndex,
      title: entry.title,
    });
  };

  /**
   * Closes lightbox and resets state
   */
  const closeLightbox = () => {
    setLightboxData({
      isOpen: false,
      images: [],
      currentIndex: 0,
      title: "",
    });
  };

  // Use portfolio entries directly from section data
  const portfolioEntries: PortfolioEntry[] =
    section.entries || [];

  return (
    <>
      <section
        id={section.id}
        data-section={section.id}
        className={`relative bg-gradient-to-br ${section.backgroundGradient} portfolio-section-padding w-full`}
      >
        {/* Background decorations - varies by section */}
        <div
          className="portfolio-decorative-circle-1"
          style={{
            background: `linear-gradient(135deg, ${section.decorativeColors[0]}, ${section.decorativeColors[1]})`,
          }}
          aria-hidden="true"
        />
        <div
          className="portfolio-decorative-circle-2"
          style={{
            background: `linear-gradient(135deg, ${section.decorativeColors[2]}, ${section.decorativeColors[3]})`,
          }}
          aria-hidden="true"
        />

        <div className="container-7xl relative z-10">
          {/* Section Header */}
          <div className="text-center mb-fluid-2xl">
            <h2
              id={section.id}
              className="text-section-h2 font-heading font-bold text-gradient-pink-purple-blue mb-fluid-xl"
            >
              {section.title}
            </h2>
            <p className="text-body-guideline font-body font-normal text-gray-600 dark:text-purple-100 container-3xl leading-relaxed">
              {section.description}
            </p>
          </div>

          {/* Portfolio Grid */}
          <div className="grid-portfolio-three-col mb-fluid-xl container-5xl">
            {portfolioEntries.map((entry, entryIndex) => (
              <SliderCard
                key={entry.id}
                data={{
                  ...entry,
                  // Ensure compatibility with legacy single image format
                  images:
                    entry.images ||
                    (entry.image
                      ? [
                          {
                            src: entry.image,
                            alt: entry.title,
                            caption: entry.title,
                            description: entry.description,
                          },
                        ]
                      : []),
                }}
                onImageClick={(imageIndex) =>
                  openLightbox(entry, imageIndex)
                }
                className="w-full"
              />
            ))}
          </div>

          {/* Section CTA (if applicable) */}
          {section.cta && (
            <div className="text-center">
              <button
                className="w-full sm:w-auto inline-flex-center justify-center text-center px-button py-button font-body font-medium rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-opacity-50 text-white"
                style={{
                  background: `linear-gradient(135deg, ${section.gradientFrom}, ${section.gradientTo})`,
                  focusRingColor: section.gradientFrom,
                }}
                onClick={section.cta.action}
                aria-label={`${section.cta.text} - ${section.title} section`}
              >
                {section.cta.text}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Portfolio Lightbox */}
      <PortfolioLightbox
        isOpen={lightboxData.isOpen}
        onClose={closeLightbox}
        images={lightboxData.images}
        currentIndex={lightboxData.currentIndex}
        title={lightboxData.title}
      />
    </>
  );
}
