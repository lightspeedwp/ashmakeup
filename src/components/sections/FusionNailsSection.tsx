/**
 * @fileoverview Fusion Nails section showcasing creative nail artistry
 * Displays nail art portfolio with lightbox functionality and responsive design
 *
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React, { useState } from "react";
import { FEATURED_NAILS_DATA } from "../common/Constants";
import { EnhancedLightbox } from "../ui/EnhancedLightbox";
import { SliderCard } from "../ui/SliderCard";

/**
 * Fusion Nails section component displaying creative nail artistry portfolio
 *
 * Visual Design:
 * - Purple to rose to yellow gradient background creating warmth and creativity
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
 * - Click to open nail art images in full-screen lightbox modal
 * - Smooth hover effects with subtle scale transforms
 * - Focus management for accessibility compliance
 * - Navigation to portfolio nail section on CTA button
 *
 * @param {Object} props - Component properties
 * @param {Function} props.setCurrentPage - Navigation function to switch to Portfolio page
 *
 * @returns {JSX.Element} Fusion nails section with responsive gallery and lightbox
 *
 * @design
 * - Uses `max-w-5xl` and `gap-fluid-lg` per Guidelines.md specifications
 * - Maintains visual consistency with Featured Work section styling
 * - Implements responsive mobile slider with scrollbar hiding
 */
export function FusionNailsSection({
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

  return (
    <>
      <section
        id="fusion-nails"
        className="relative bg-fusion-nails-section py-section-md px-section-md w-full transition-colors duration-300 px-[32px] py-[144px]"
      >
        {/* Background decoration - responsive */}
        <div className="absolute top-20 left-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-fusion-decoration-1 rounded-full opacity-15 dark:opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-1/4 w-16 h-16 sm:w-32 sm:h-32 bg-fusion-decoration-2 rounded-full opacity-20 dark:opacity-25 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-fluid-2xl">
            <h2
              id="fusion-nails"
              className="text-section-h2 font-heading font-bold text-section-heading-black mt-[0px] mr-[0px] mb-[32px] ml-[0px]"
            >
              Fusion Nails
            </h2>
            <p className="text-body-guideline font-body font-normal max-w-3xl mx-auto leading-relaxed text-[rgb(255,255,255)]">
              Creative nail artistry combining colors, stickers,
              and topcoats for unique, eye-catching designs that
              complement my makeup work.
            </p>
          </div>

          {/* Desktop Grid / Mobile Slider */}
          <div className="mb-fluid-xl max-w-6xl mx-auto">
            {/* Mobile: Horizontal slider with snap scrolling */}
            <div className="md:hidden overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-fluid-md px-fluid-md pb-4">
              <div className="flex gap-fluid-md" style={{ scrollSnapType: 'x mandatory' }}>
                {[
                  {
                    id: "nails-cosmic-chrome",
                    title: "Cosmic Chrome",
                    description:
                      "Holographic galaxy nails with iridescent chrome finish and cosmic shimmer",
                    images: [
                      {
                        src: "https://images.unsplash.com/photo-1708777220120-c39a470645c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMG5haWwlMjBhcnQlMjBncmFkaWVudHxlbnwxfHx8fDE3NTc1OTgwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - holographic galaxy nails with iridescent chrome finish",
                        caption: "Galaxy Chrome",
                        description:
                          "Holographic galaxy nails with cosmic shimmer effect",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG5haWwlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTc1OTgwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - detail view of holographic effect",
                        caption: "Holographic Detail",
                        description:
                          "Close-up showing the stunning holographic chrome finish",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1741826016678-b58b618ce83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZXRhbGxpYyUyMG5haWwlMjBhcnQlMjBnbGl0dGVyfGVufDF8fHx8MTc1NzU5ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - metallic glitter finish",
                        caption: "Glitter Effect",
                        description:
                          "Metallic glitter creating cosmic sparkle",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1666117584374-28eb6796f5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWJyZSUyMG5haWwlMjBhcnQlMjBkZXNpZ258ZW58MXx8fHwxNzU3NTk4MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - gradient finish",
                        caption: "Chrome Gradient",
                        description:
                          "Smooth chrome gradient effect",
                      },
                    ],
                    category: "Fusion Nails",
                  },
                  {
                    id: "nails-rainbow-fusion",
                    title: "Rainbow Fusion",
                    description:
                      "Vibrant rainbow gradient design with metallic accents and festival energy",
                    images: [
                      {
                        src: "https://images.unsplash.com/photo-1621372982865-66ab6b1bf2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyYWluYm93JTIwbmFpbCUyMGFydCUyMGRlc2lnbnxlbnwxfHx8fDE3NTc1OTgwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Rainbow Fusion - vibrant rainbow gradient nail art design",
                        caption: "Rainbow Gradient",
                        description:
                          "Bold rainbow gradient design with festival vibes",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG5haWwlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTc1OTgwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Rainbow Fusion - metallic accent details",
                        caption: "Metallic Accents",
                        description:
                          "Beautiful metallic accents enhancing the rainbow effect",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBuYWlsJTIwYXJ0JTIwcGF0dGVybnN8ZW58MXx8fHwxNzU3NTk4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Rainbow Fusion - geometric patterns",
                        caption: "Geometric Design",
                        description:
                          "Geometric patterns adding structure to the rainbow theme",
                      },
                    ],
                    category: "Fusion Nails",
                  },
                  {
                    id: "nails-festival-glow",
                    title: "Festival Glow",
                    description:
                      "UV-reactive neon nails with festival-inspired patterns and holographic details",
                    images: [
                      {
                        src: "https://images.unsplash.com/photo-1666117584374-28eb6796f5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWJyZSUyMG5haWwlMjBhcnQlMjBkZXNpZ258ZW58MXx8fHwxNzU3NTk4MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Festival Glow - ombre nail art with neon colors",
                        caption: "Neon Ombre",
                        description:
                          "Vibrant ombre design perfect for festivals",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYW5pY3VyZSUyMG5haWwlMjBhcnR8ZW58MXx8fHwxNzU3NTk4MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Festival Glow - French manicure with colorful tips",
                        caption: "French Fusion",
                        description:
                          "Modern French manicure with colorful festival twist",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1741826016678-b58b618ce83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZXRhbGxpYyUyMG5haWwlMjBhcnQlMjBnbGl0dGVyfGVufDF8fHx8MTc1NzU5ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Festival Glow - metallic glitter accent nails",
                        caption: "Glitter Accents",
                        description:
                          "Metallic glitter creating festival sparkle",
                      },
                    ],
                    category: "Fusion Nails",
                  },
                ].map((nail, index) => (
                  <div
                    key={nail.id || index}
                    className="flex-none w-[85vw] snap-center"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <SliderCard
                      data={nail}
                      onImageClick={(imageIndex) => {
                        const images = nail.images || [];
                        openLightbox(
                          images,
                          imageIndex,
                          nail.title,
                          nail.description,
                        );
                      }}
                      variant="fusion"
                      className="w-full h-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tablet/Desktop: Grid layout */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
              {[
                  {
                    id: "nails-cosmic-chrome",
                    title: "Cosmic Chrome",
                    description:
                      "Holographic galaxy nails with iridescent chrome finish and cosmic shimmer",
                    images: [
                      {
                        src: "https://images.unsplash.com/photo-1708777220120-c39a470645c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob2xvZ3JhcGhpYyUyMG5haWwlMjBhcnQlMjBncmFkaWVudHxlbnwxfHx8fDE3NTc1OTgwNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - holographic galaxy nails with iridescent chrome finish",
                        caption: "Galaxy Chrome",
                        description:
                          "Holographic galaxy nails with cosmic shimmer effect",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG5haWwlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTc1OTgwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - detail view of holographic effect",
                        caption: "Holographic Detail",
                        description:
                          "Close-up showing the stunning holographic chrome finish",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1741826016678-b58b618ce83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZXRhbGxpYyUyMG5haWwlMjBhcnQlMjBnbGl0dGVyfGVufDF8fHx8MTc1NzU5ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - metallic glitter finish",
                        caption: "Glitter Effect",
                        description:
                          "Metallic glitter creating cosmic sparkle",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1666117584374-28eb6796f5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWJyZSUyMG5haWwlMjBhcnQlMjBkZXNpZ258ZW58MXx8fHwxNzU3NTk4MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Cosmic Chrome - gradient finish",
                        caption: "Chrome Gradient",
                        description:
                          "Smooth chrome gradient effect",
                      },
                    ],
                    category: "Fusion Nails",
                  },
                  {
                    id: "nails-rainbow-fusion",
                    title: "Rainbow Fusion",
                    description:
                      "Vibrant rainbow gradient design with metallic accents and festival energy",
                    images: [
                      {
                        src: "https://images.unsplash.com/photo-1621372982865-66ab6b1bf2c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxyYWluYm93JTIwbmFpbCUyMGFydCUyMGRlc2lnbnxlbnwxfHx8fDE3NTc1OTgwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Rainbow Fusion - vibrant rainbow gradient nail art design",
                        caption: "Rainbow Gradient",
                        description:
                          "Bold rainbow gradient design with festival vibes",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMG5haWwlMjBhcnQlMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTc1OTgwNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Rainbow Fusion - metallic accent details",
                        caption: "Metallic Accents",
                        description:
                          "Beautiful metallic accents enhancing the rainbow effect",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBuYWlsJTIwYXJ0JTIwcGF0dGVybnN8ZW58MXx8fHwxNzU3NTk4MTQyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Rainbow Fusion - geometric patterns",
                        caption: "Geometric Design",
                        description:
                          "Geometric patterns adding structure to the rainbow theme",
                      },
                    ],
                    category: "Fusion Nails",
                  },
                  {
                    id: "nails-festival-glow",
                    title: "Festival Glow",
                    description:
                      "UV-reactive neon nails with festival-inspired patterns and holographic details",
                    images: [
                      {
                        src: "https://images.unsplash.com/photo-1666117584374-28eb6796f5d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbWJyZSUyMG5haWwlMjBhcnQlMjBkZXNpZ258ZW58MXx8fHwxNzU3NTk4MTM2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Festival Glow - ombre nail art with neon colors",
                        caption: "Neon Ombre",
                        description:
                          "Vibrant ombre design perfect for festivals",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1599316329891-19df7fa9580d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBtYW5pY3VyZSUyMG5haWwlMjBhcnR8ZW58MXx8fHwxNzU3NTk4MTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Festival Glow - French manicure with colorful tips",
                        caption: "French Fusion",
                        description:
                          "Modern French manicure with colorful festival twist",
                      },
                      {
                        src: "https://images.unsplash.com/photo-1741826016678-b58b618ce83c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtZXRhbGxpYyUyMG5haWwlMjBhcnQlMjBnbGl0dGVyfGVufDF8fHx8MTc1NzU5ODEzOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                        alt: "Festival Glow - metallic glitter accent nails",
                        caption: "Glitter Accents",
                        description:
                          "Metallic glitter creating festival sparkle",
                      },
                    ],
                    category: "Fusion Nails",
                  },
            ].map((nail, index) => (
              <SliderCard
                key={nail.id || index}
                data={nail}
                onImageClick={(imageIndex) => {
                  const images = nail.images || [];
                  openLightbox(
                    images,
                    imageIndex,
                    nail.title,
                    nail.description,
                  );
                }}
                variant="fusion"
                className="w-full p-fluid-sm"
              />
            ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <button
              onClick={() => setCurrentPage("portfolio")}
              className="w-full sm:w-auto justify-center text-center bg-gradient-gold-peach-coral text-white px-button py-button rounded-lg font-body font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus-ring-fusion-button text-[32px]"
              aria-label="Navigate to Portfolio page to view nail artistry gallery"
            >
              See More Nails
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