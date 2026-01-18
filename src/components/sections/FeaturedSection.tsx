/**
 * @fileoverview Featured Work section showcasing latest festival makeup artistry
 * Displays carefully selected portfolio pieces using centralized mock data with lightbox functionality
 *
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - Centralized Mock Data Integration
 */

import React, { useState, useMemo } from "react";
import { EnhancedLightbox } from "../ui/EnhancedLightbox";
import { SliderCard } from "../ui/SliderCard";
import { featuredWork } from "../../data/mock/portfolio/featured";
import type { PortfolioEntry } from "../../data/types";
import { BlurredCircles } from "../ui/BlurredCircles";

/**
 * Featured Work section component displaying latest festival makeup artistry
 *
 * New Features (v3.0):
 * - Centralized mock data from /data/mock/portfolio
 * - Clean separation of data and presentation
 * - Type-safe portfolio entries
 * - Improved maintainability
 *
 * Features (v2.1):
 * - Static portfolio data with working images
 * - Consistent data source across application
 * - No external dependencies - reliable and fast loading
 * - Comprehensive portfolio entries with proper image validation
 *
 * Layout Strategy:
 * - Desktop: 2-column grid with consistent spacing and alignment
 * - Mobile: Single column with full-width cards
 * - Responsive image containers with aspect-square ratio
 * - Consistent typography hierarchy across all devices
 *
 * Visual Design:
 * - Pink to purple gradient background evoking creative energy
 * - Semi-transparent white cards with backdrop blur for depth
 * - Hover effects with subtle scale transforms and shadow elevation
 * - Ring borders around images for premium appearance
 *
 * Interactive Features:
 * - Click to open images in full-screen lightbox modal
 * - Multi-image sliders for each portfolio entry
 * - Hover state animations for desktop engagement
 * - Focus management for accessibility compliance
 *
 * @param {Object} props - Component properties
 * @param {Function} props.setCurrentPage - Navigation function to switch to Portfolio page
 *
 * @returns {JSX.Element} Featured work section with responsive gallery and lightbox
 *
 * @design
 * - Uses `gap-fluid-lg` and `max-w-7xl` per Guidelines.md specifications
 * - Matches grid alignment with other homepage sections
 * - Maintains consistent card padding and typography scales
 */
export function FeaturedSection({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: Array<{
      src: string;
      alt: string;
      caption?: string;
      description?: string;
    }>;
    currentIndex: number;
    title?: string;
    description?: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
    description: "",
  });

  const openLightbox = (
    images: Array<{
      src: string;
      alt: string;
      caption?: string;
      description?: string;
    }>,
    currentIndex: number,
    title?: string,
    description?: string,
  ) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex,
      title,
      description,
    });
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  const navigateLightbox = (newIndex: number) => {
    setLightbox((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  // Get featured portfolio entries from mock data (display top 2)
  const displayData = useMemo(() => {
    return featuredWork.slice(0, 2);
  }, []);

  return (
    <>
      <section
        id="work"
        className="relative bg-featured-section py-section-md-plus px-section-md w-full transition-colors duration-300 px-[32px] py-[144px]"
      >
        {/* Decorative Blurred Circles */}
        <BlurredCircles variant="featured" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-section-h2 font-heading font-semibold dark:text-red-800 mb-fluid-md text-[rgb(255,255,255)]">
              Featured Work
            </h2>
            <p className="text-body-guideline font-body font-normal leading-relaxed max-w-3xl mx-auto mb-fluid-lg dark:text-purple-100 text-[rgb(255,255,255)]">
              Discover the artistry and passion behind each creation — from vibrant festival face art to stunning UV-reactive designs that bring joy and connection to every celebration.
            </p>
          </div>

          {/* Mobile: Horizontal slider / Desktop: 2-column grid */}
          <div className="mb-fluid-xl max-w-7xl mx-auto">
            {/* Mobile: Horizontal slider with snap scrolling */}
            <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-fluid-md px-fluid-md pb-4">
              <div className="flex gap-fluid-md" style={{ scrollSnapType: 'x mandatory' }}>
                {displayData && displayData.length > 0 ? displayData.slice(0, 6).map((work, index) => (
                  <div
                    key={work.id || index}
                    className="flex-none w-[85vw] snap-center"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <SliderCard
                      data={work}
                      onImageClick={(imageIndex) => {
                        openLightbox(
                          work.images || [],
                          imageIndex,
                          work.title,
                          work.subtitle ? `${work.subtitle} - ${work.description}` : work.description,
                        );
                      }}
                      className="w-full h-full"
                    />
                  </div>
                )) : (
                  <div className="w-full text-center py-8">
                    <p className="text-slider-card-subtext">No featured work available</p>
                  </div>
                )}
              </div>
            </div>

            {/* Desktop: 2-column grid */}
            <div className="hidden md:grid md:grid-cols-2 gap-fluid-lg">
              {displayData && displayData.length > 0 ? displayData.slice(0, 6).map((work, index) => (
                <SliderCard
                  key={work.id || index}
                  data={work}
                  onImageClick={(imageIndex) => {
                    openLightbox(
                      work.images || [],
                      imageIndex,
                      work.title,
                      work.subtitle ? `${work.subtitle} - ${work.description}` : work.description,
                    );
                  }}
                  className="w-full p-fluid-sm"
                />
              )) : (
                <div className="col-span-2 text-center py-8">
                  <p className="text-slider-card-subtext">No featured work available</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentPage("portfolio")}
              className="w-full sm:w-auto justify-center text-center bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-3 py-1.5 sm:px-button sm:py-button font-body font-medium text-[32px] transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus-ring-primary"
              aria-label="Navigate to full portfolio page to view all makeup artistry work"
            >
              View Full Portfolio
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Lightbox Modal */}
      <EnhancedLightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        title={lightbox.title}
        description={lightbox.description} className="text-[28px] text-[32px]"
      />
    </>
  );
}