/**
 * @fileoverview UV Makeup Art section showcasing neon and blacklight artistry
 * Displays UV reactive makeup portfolio with lightbox functionality and responsive design
 *
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React, { useState } from "react";
import { uvMakeupWork } from "../../data/mock/portfolio/uv-makeup";
import { EnhancedLightbox } from "../ui/EnhancedLightbox";
import { SliderCard } from "../ui/SliderCard";
import { BlurredCircles } from "../ui/BlurredCircles";

/**
 * UV Makeup Art section component displaying neon and blacklight artistry portfolio
 *
 * Visual Design:
 * - Electric blue to purple to cyan gradient background creating vibrant energy
 * - Responsive decorative orbs with pulse animations for visual interest
 * - Consistent card styling matching other homepage sections
 * - Professional typography hierarchy with gradient text effects
 *
 * Layout Strategy:
 * - Desktop: 3-column grid matching Featured Work section alignment
 * - Mobile: Horizontal scrollable slider with snap-scroll behavior
 * - Square aspect ratio images for consistent visual rhythm
 * - Responsive spacing and typography throughout
 *
 * Interactive Features:
 * - Click to open UV makeup images in full-screen lightbox modal
 * - Smooth hover effects with subtle scale transforms
 * - Focus management for accessibility compliance
 * - Navigation to portfolio UV section on CTA button
 *
 * @param {Object} props - Component properties
 * @param {Function} props.setCurrentPage - Navigation function to switch to Portfolio page
 *
 * @returns {JSX.Element} UV makeup section with responsive gallery and lightbox
 *
 * @design
 * - Uses `max-w-5xl` and `gap-fluid-lg` per Guidelines.md specifications
 * - Maintains visual consistency with Featured Work section styling
 * - Implements responsive mobile slider with scrollbar hiding
 */
export function UVMakeupSection({
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
    setLightbox({
      isOpen: false,
      images: [],
      currentIndex: 0,
      title: "",
      description: "",
    });
  };

  const navigateLightbox = (newIndex: number) => {
    setLightbox((prev) => ({ ...prev, currentIndex: newIndex }));
  };

  // Convert UV makeup data to SliderCard format
  const uvMakeupCards = uvMakeupWork.map((entry) => ({
    id: entry.id,
    title: entry.title,
    description: entry.description,
    images: entry.images,
    category: entry.category,
  }));

  return (
    <>
      <section
        id="uv-makeup"
        className="relative bg-uv-makeup-section py-section-md px-section-md w-full transition-colors duration-300"
      >
        {/* Background decoration - responsive */}
        <BlurredCircles variant="uv" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-fluid-2xl">
            <h2
              id="uv-makeup"
              className="text-section-h2 font-heading font-bold text-gradient-pink-purple-blue mb-fluid-lg"
            >
              UV Makeup Art
            </h2>
            <p className="text-body-guideline font-body font-normal max-w-3xl mx-auto leading-relaxed text-white dark:text-white">
              Electrifying UV-reactive makeup designs that glow under blacklight,
              perfect for festivals, raves, and nightlife events with bold neon colors
              and geometric patterns.
            </p>
          </div>

          {/* Desktop Grid / Mobile Slider */}
          <div className="mb-fluid-xl max-w-6xl mx-auto">
            {/* Mobile: Horizontal slider with snap scrolling */}
            <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-fluid-md px-fluid-md pb-4">
              <div className="flex gap-fluid-md" style={{ scrollSnapType: 'x mandatory' }}>
                {uvMakeupCards.map((makeup, index) => (
                  <div
                    key={makeup.id || index}
                    className="flex-none w-[85vw] snap-center"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <SliderCard
                      data={makeup}
                      onImageClick={(imageIndex) => {
                        const images = makeup.images || [];
                        openLightbox(
                          images,
                          imageIndex,
                          makeup.title,
                          makeup.description,
                        );
                      }}
                      variant="uv"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet/Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
              {uvMakeupCards.map((makeup, index) => (
                <SliderCard
                  key={makeup.id || index}
                  data={makeup}
                  onImageClick={(imageIndex) => {
                    const images = makeup.images || [];
                    openLightbox(
                      images,
                      imageIndex,
                      makeup.title,
                      makeup.description,
                    );
                  }}
                  variant="uv"
                  className="w-full p-fluid-sm"
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={() => setCurrentPage("portfolio")}
              className="w-full sm:w-auto justify-center text-center bg-gradient-blue-teal-green text-white px-button py-button rounded-lg font-body font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-ring-uv-button text-button-fluid"
              aria-label="Navigate to Portfolio page to view UV makeup gallery"
            >
              See More UV Makeup
            </button>
          </div>
        </div>
      </section>

      <EnhancedLightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        title={lightbox.title}
        description={lightbox.description}
      />
    </>
  );
}
