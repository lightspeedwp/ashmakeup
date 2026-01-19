/**
 * @fileoverview Reusable Hero Layout component for consistent page headers
 * Flexible hero section supporting various content types with consistent styling
 *
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React, { useState } from "react";
import { ScrollDownArrow } from "../ui/ScrollDownArrow";
import { PortfolioLightbox } from "../ui/PortfolioLightbox";

/**
 * Hero image interface for lightbox functionality
 */
interface HeroImage {
  src: string;
  alt: string;
  caption?: string;
  description?: string;
  className?: string;
}

/**
 * Props interface for HeroLayout
 */
interface HeroLayoutProps {
  title: string;
  subtitle?: string | React.ReactNode;
  description?: string;
  className?: string;
  backgroundGradient?: {
    from: string;
    via?: string;
    to: string;
  };
  titleGradient?: {
    from: string;
    via?: string;
    to: string;
  };
  subtitleGradient?: {
    from: string;
    via?: string;
    to: string;
  };
  decorativeElements?: React.ReactNode;
  actions?: React.ReactNode;
  media?: React.ReactNode;
  layout?: "center" | "left" | "split";
  size?: "sm" | "md" | "lg" | "xl";
  fullscreen?: boolean;
  showScrollArrow?: boolean;
  scrollArrowTarget?: string;
  // New lightbox functionality
  heroImages?: HeroImage[];
  lightboxTitle?: string;
  enableLightbox?: boolean;
}

/**
 * Reusable Hero Layout component for consistent page headers across the site
 *
 * Use Cases:
 * - Homepage hero with image mosaic
 * - About page introduction
 * - Portfolio page header
 * - Service page headers
 * - Landing page heroes
 *
 * Features:
 * - Flexible layout options (center, left-aligned, split)
 * - Responsive typography following Guidelines.md scale
 * - Optional gradient text effects for titles and subtitles
 * - Media content support (images, videos, mosaics)
 * - Call-to-action button integration
 * - Decorative element positioning
 * - Consistent spacing and padding
 *
 * @param {HeroLayoutProps} props - Component properties
 * @param {string} props.title - Main hero title (uses Guidelines.md hero scale)
 * @param {string} [props.subtitle] - Optional subtitle or tagline
 * @param {string} [props.description] - Optional description paragraph
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} [props.backgroundGradient] - Background gradient configuration
 * @param {Object} [props.backgroundStyle] - Inline background style (e.g., gradient)
 * @param {Object} [props.titleGradient] - Title text gradient configuration
 * @param {Object} [props.subtitleGradient] - Subtitle text gradient configuration
 * @param {React.ReactNode} [props.decorativeElements] - Decorative visual elements
 * @param {React.ReactNode} [props.actions] - Call-to-action buttons or links
 * @param {React.ReactNode} [props.media] - Images, videos, or other media content
 * @param {string} [props.layout='center'] - Layout arrangement
 * @param {string} [props.size='lg'] - Overall hero size and spacing
 * @param {boolean} [props.fullscreen=false] - Enable fullscreen viewport height mode
 * @param {boolean} [props.showScrollArrow=true] - Show animated scroll down arrow
 * @param {string} [props.scrollArrowTarget] - Target section ID for scroll arrow
 * @param {HeroImage[]} [props.heroImages] - Array of hero images for lightbox functionality
 * @param {string} [props.lightboxTitle='Portfolio Gallery'] - Title for lightbox modal
 * @param {boolean} [props.enableLightbox=false] - Enable hero images with lightbox functionality
 *
 * @returns {JSX.Element} Hero section with responsive design, consistent styling, and optional lightbox
 *
 * @example
 * <HeroLayout
 *   title="Ash Shaw"
 *   subtitle="Makeup that shines with colour, energy, and connection"
 *   description="Festival artistry and creative expression since 2019"
 *   layout="split"
 *   titleGradient={{ from: 'gray-800', via: 'purple-700', to: 'pink-600' }}
 *   subtitleGradient={{ from: 'pink-500', to: 'purple-500' }}
 *   heroImages={HOMEPAGE_HERO_IMAGES}
 *   lightboxTitle="Ash Shaw Portfolio"
 *   enableLightbox={true}
 *   actions={<Button>Explore Portfolio</Button>}
 * />
 */
export function HeroLayout({
  title,
  subtitle,
  description,
  className = "",
  backgroundGradient,
  titleGradient,
  subtitleGradient,
  decorativeElements,
  actions,
  media,
  layout = "center",
  size = "lg",
  fullscreen = false,
  showScrollArrow = true,
  scrollArrowTarget,
  heroImages,
  lightboxTitle = "Portfolio Gallery",
  enableLightbox = false,
}: HeroLayoutProps) {
  // Portfolio lightbox state management
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [] as Array<{
      src: string;
      alt: string;
      caption?: string;
      description?: string;
    }>,
    currentIndex: 0,
    title: "",
  });

  // Prepare hero images for lightbox
  const lightboxImages =
    heroImages?.map((img) => ({
      src: img.src,
      alt: img.alt,
      caption: img.caption,
      description: img.description,
    })) || [];

  const openLightbox = (index: number) => {
    if (enableLightbox && heroImages) {
      setLightbox({
        isOpen: true,
        images: lightboxImages,
        currentIndex: index,
        title: lightboxTitle,
      });
    }
  };

  const closeLightbox = () => {
    setLightbox((prev) => ({ ...prev, isOpen: false }));
  };

  // Hero Media Component with Lightbox Integration
  const HeroMediaWithLightbox = () => {
    if (
      !enableLightbox ||
      !heroImages ||
      heroImages.length === 0
    ) {
      return media || null;
    }

    return (
      <div className="flex-1 max-w-2xl relative w-full">
        <div className="relative w-full h-[50vh] sm:h-[55vh] md:h-[60vh] lg:h-[65vh] xl:h-[70vh] min-h-[400px] max-h-[800px]">
          {/* Render hero images with lightbox functionality */}
          {heroImages.map((image, index) => {
            // Mosaic tile configurations for random layered effect
            const mosaicStyles = [
              // Image 0: Left side, rotate left, middle layer
              "absolute top-8 left-4 sm:top-16 sm:left-8 md:top-12 md:left-12 w-44 h-52 sm:w-64 sm:h-72 md:w-72 md:h-80 lg:w-80 lg:h-96 rounded-700 bg-cover bg-center shadow-600 transform -rotate-6 z-20 border-w-400 border-white ring-4 ring-pink-200/50 dark:ring-pink-400/30 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-600 hover:z-40",
              // Image 1: Right side, rotate right, top layer
              "absolute top-4 right-8 sm:top-8 sm:right-16 md:top-6 md:right-20 lg:right-24 w-48 h-56 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-88 lg:h-[26rem] rounded-700 bg-cover bg-center shadow-600 transform rotate-3 z-30 border-w-400 border-white ring-4 ring-purple-200/50 dark:ring-purple-400/30 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-600 hover:z-40",
              // Image 2: Bottom center, slight rotation, back layer
              "absolute bottom-8 left-1/4 sm:bottom-12 sm:left-1/3 md:bottom-10 md:left-[35%] lg:left-[38%] w-40 h-48 sm:w-56 sm:h-64 md:w-64 md:h-72 lg:w-72 lg:h-80 rounded-700 bg-cover bg-center shadow-600 transform rotate-6 z-10 border-w-400 border-white ring-4 ring-blue-200/50 dark:ring-blue-400/30 cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-600 hover:z-40"
            ];

            return (
              <div
                key={index}
                className={image.className || mosaicStyles[index % 3]}
                style={{ backgroundImage: `url("${image.src}")` }}
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                aria-label={`View ${image.caption || image.alt} in portfolio gallery`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
              />
            );
          })}

          {/* Dynamic animated colorful dots positioned based on image count */}
          {heroImages && heroImages.length > 0 && (
            <>
              <div
                className="absolute top-8 right-6 sm:top-16 sm:right-12 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-br from-pink-400 to-rose-500 rounded-900 opacity-70 animate-pulse z-30 shadow-400"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-12 right-2 sm:bottom-24 sm:right-4 w-2 h-2 sm:w-4 sm:h-4 bg-gradient-to-br from-purple-400 to-violet-500 rounded-900 opacity-70 animate-pulse delay-300 z-30 shadow-400"
                aria-hidden="true"
              />
              <div
                className="absolute top-16 left-0 sm:top-32 sm:left-1 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-900 opacity-70 animate-pulse delay-700 z-30 shadow-400"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-6 left-8 sm:bottom-12 sm:left-16 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-900 opacity-70 animate-pulse delay-1000 z-30 shadow-400"
                aria-hidden="true"
              />

              {/* Additional enriching dots that adapt to different layouts */}
              <div
                className="absolute top-1/3 left-1/2 w-1.5 h-1.5 sm:w-2.5 sm:h-2.5 bg-gradient-to-br from-teal-400 to-green-500 rounded-900 opacity-60 animate-pulse delay-1500 z-30 shadow-400"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-1/4 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-indigo-400 to-purple-600 rounded-900 opacity-60 animate-pulse delay-2000 z-30 shadow-400"
                aria-hidden="true"
              />
              <div
                className="absolute top-2/3 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-rose-400 to-pink-600 rounded-900 opacity-50 animate-pulse delay-2500 z-30 shadow-400"
                aria-hidden="true"
              />
            </>
          )}

          {/* Adaptive background gradient overlay that complements different hero image sets */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-pink-50/20 via-purple-50/15 to-blue-50/20 rounded-800 pointer-events-none z-5"
            aria-hidden="true"
          />

          {/* Subtle depth enhancement for better visual hierarchy */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent rounded-800 pointer-events-none z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    );
  };
  const sizeClasses = {
    sm: "py-section-sm px-section-sm",
    md: "py-section-md px-section-md",
    lg: "py-section-lg px-section-lg",
    xl: "py-section-lg px-section-lg",
  };

  // Fullscreen mode overrides size classes
  const containerClasses = fullscreen
    ? "min-h-screen flex items-center justify-center px-section-md py-0"
    : sizeClasses[size];

  // Default background: Soft pastel gradient in light mode, dark purple in dark mode
  const defaultBackgroundClass = "bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 dark:from-purple-950 dark:via-purple-900/50 dark:to-purple-950";
  
  const backgroundClass = backgroundGradient
    ? `bg-gradient-to-br from-${backgroundGradient.from} ${
        backgroundGradient.via
          ? `via-${backgroundGradient.via}`
          : ""
      } to-${backgroundGradient.to}`
    : defaultBackgroundClass;

  const titleGradientClass = titleGradient
    ? `bg-gradient-to-r from-${titleGradient.from} ${
        titleGradient.via ? `via-${titleGradient.via}` : ""
      } to-${titleGradient.to} bg-clip-text text-transparent`
    : "";

  const subtitleGradientClass = subtitleGradient
    ? `bg-gradient-to-r from-${subtitleGradient.from} ${
        subtitleGradient.via
          ? `via-${subtitleGradient.via}`
          : ""
      } to-${subtitleGradient.to} bg-clip-text text-transparent`
    : "";

  // Layout-specific classes
  const layoutClasses = {
    center: "text-center",
    left: "text-left",
    split: "grid lg:grid-cols-2 gap-fluid-xl items-center",
  };

  const contentMaxWidth = {
    center: "max-w-4xl mx-auto",
    left: "max-w-4xl",
    split: "",
  };

  return (
    <section
      className={`relative overflow-x-hidden flex flex-col px-4 sm:px-8 transition-colors duration-300 ${backgroundClass} ${containerClasses} ${className}`}
    >
      {/* Decorative Floating Circles - Light Mode Only */}
      <div className="absolute inset-0 pointer-events-none dark:opacity-0 opacity-100 transition-opacity duration-300" aria-hidden="true">
        {/* Top left pink-purple gradient circle */}
        <div className="hero-circle-1 bg-hero-circle-pink-purple" />
        
        {/* Top right blue-teal gradient circle */}
        <div className="hero-circle-2 bg-hero-circle-blue-teal" />
        
        {/* Bottom left yellow-pink gradient circle */}
        <div className="hero-circle-3 bg-hero-circle-yellow-pink" />
      </div>

      {/* Decorative Elements (existing custom decorations) */}
      {decorativeElements && (
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          {decorativeElements}
        </div>
      )}

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={layoutClasses[layout]}>
          {/* Text Content */}
          <div
            className={`${contentMaxWidth[layout]} pt-fluid-md`}
          >
            <h1
              className={`text-fluid-3xl font-title font-normal mb-fluid-md transition-colors duration-300 ${titleGradientClass}`}
            >
              {title}
            </h1>

            {subtitle && (
              <h2
                className={`text-section-h2 font-heading font-bold leading-tight mb-fluid-md transition-colors duration-300 ${subtitleGradientClass}`}
              >
                {subtitle}
              </h2>
            )}

            {description && (
              <p 
                className="text-body-guideline font-body font-normal text-hero-description leading-relaxed mb-fluid-md transition-colors duration-300"
              >
                {description}
              </p>
            )}

            {actions && (
              <div className="flex flex-wrap gap-4 justify-start">
                {actions}
              </div>
            )}
          </div>

          {/* Enhanced Media Content for Split Layout with Mosaic Optimization */}
          {layout === "split" && (
            <div className="relative flex items-center justify-center lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-2xl transform lg:translate-x-8 xl:translate-x-16">
                <HeroMediaWithLightbox />
              </div>
            </div>
          )}
        </div>

        {/* Media Content for non-split layouts */}
        {layout !== "split" && (
          <div className="mt-fluid-2xl relative flex justify-center">
            <div className="w-full max-w-4xl">
              <HeroMediaWithLightbox />
            </div>
          </div>
        )}
      </div>

      {/* Scroll Down Arrow */}
      {showScrollArrow && (
        <ScrollDownArrow
          targetSectionId={scrollArrowTarget}
          ariaLabel={
            scrollArrowTarget
              ? `Scroll to ${scrollArrowTarget.replace("-", " ")} section`
              : "Scroll to next section"
          }
        />
      )}


      {/* Portfolio Lightbox */}
      {enableLightbox && (
        <PortfolioLightbox
          isOpen={lightbox.isOpen}
          onClose={closeLightbox}
          images={lightbox.images}
          currentIndex={lightbox.currentIndex}
          title={lightbox.title}
        />
      )}
    </section>
  );
}