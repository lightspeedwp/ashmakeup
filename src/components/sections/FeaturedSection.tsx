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
        className="relative bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 py-fluid-3xl px-fluid-lg w-full"
      >
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-fluid-2xl">
            <h2 className="text-section-h2 font-heading font-semibold text-gray-800 mb-fluid-md">
              Featured Work
            </h2>
            <p className="text-body-guideline font-body font-normal text-gray-700 leading-relaxed max-w-3xl mx-auto mb-fluid-lg">
              Discover the artistry and passion behind each creation — from vibrant festival face art to stunning UV-reactive designs that bring joy and connection to every celebration.
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:grid md:grid-cols-2 gap-fluid-lg mb-fluid-xl max-w-7xl mx-auto">
            {displayData && displayData.length > 0 ? displayData.slice(0, 2).map((work, index) => (
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
                gradientConfig={{
                  subtitleGradient:
                    "from-pink-700 to-purple-600",
                }}
                className="w-full"
              />
            )) : (
              <div className="col-span-2 text-center py-8">
                <p className="text-gray-600">No featured work available</p>
              </div>
            )}
          </div>

          {/* Mobile Slider */}
          <div className="md:hidden">
            <div className="grid grid-cols-1 gap-fluid-lg mb-fluid-xl max-w-5xl mx-auto">
              {displayData && displayData.length > 0 ? displayData.map((work, index) => (
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
                  gradientConfig={{
                    subtitleGradient:
                      "from-pink-700 to-purple-600",
                  }}
                  className="w-full"
                />
              )) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">No featured work available for mobile</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={() => setCurrentPage("portfolio")}
              className="w-full sm:w-auto justify-center text-center bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-button py-button font-body font-medium text-button-fluid transition-all duration-300 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:ring-opacity-50"
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