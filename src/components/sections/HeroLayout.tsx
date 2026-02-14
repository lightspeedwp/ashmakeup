/**
 * @fileoverview Reusable Hero Layout component for consistent page headers
 * Flexible hero section supporting various content types with consistent styling
 *
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Semantic BEM Refactor & Design Tokens
 */

import React, { useState } from "react";
import { ScrollDownArrow } from "../ui/ScrollDownArrow";
import { EnhancedLightbox } from "../ui/EnhancedLightbox";
import "../../styles/blocks/hero.css";

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
  /** Main heading text */
  title: string;
  /** Subtitle text or element */
  subtitle?: string | React.ReactNode;
  /** Description paragraph */
  description?: string;
  /** Additional custom classes */
  className?: string;
  /** Decorative background elements */
  decorativeElements?: React.ReactNode;
  /** Action buttons/links */
  actions?: React.ReactNode;
  /** Media element (image/video/grid) */
  media?: React.ReactNode;
  /** Layout variation */
  layout?: "center" | "left" | "split";
  /** Width alignment */
  align?: "default" | "wide" | "full";
  /** Fullscreen height toggle */
  fullscreen?: boolean;
  /** Show scroll down indicator */
  showScrollArrow?: boolean;
  /** Target ID for scroll arrow */
  scrollArrowTarget?: string;
  /** Custom class for scroll arrow */
  scrollArrowClassName?: string;
  // Lightbox functionality
  heroImages?: HeroImage[];
  lightboxTitle?: string;
  enableLightbox?: boolean;
}

/**
 * Reusable Hero Layout component for consistent page headers across the site
 * Implements strict BEM architecture and responsive design tokens.
 */
export function HeroLayout({
  title,
  subtitle,
  description,
  className = "",
  decorativeElements,
  actions,
  media,
  layout = "center",
  align = "default",
  fullscreen = false,
  showScrollArrow = true,
  scrollArrowTarget,
  scrollArrowClassName,
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

  // Helper function to render subtitle with colored words for brand tagline
  const renderSubtitle = () => {
    if (!subtitle) return null;
    
    // Check if this is the brand tagline that needs individual word colors
    const subtitleText = typeof subtitle === 'string' ? subtitle : '';
    const isBrandTagline = subtitleText.includes('colour') && 
                          subtitleText.includes('energy') && 
                          subtitleText.includes('connection');
    
    if (isBrandTagline) {
      return (
        <h2 className="hero__subtitle">
          &quot;Makeup that shines with{" "}
          <span className="hero__subtitle-accent--pink">
            colour
          </span>
          ,{" "}
          <span className="hero__subtitle-accent--green">
            energy
          </span>
          , and{" "}
          <span className="hero__subtitle-accent--cyan">
            connection
          </span>
          .&quot;
        </h2>
      );
    }
    
    // Default rendering for non-tagline subtitles
    return (
      <h2 className="hero__subtitle">
        {subtitle}
      </h2>
    );
  };

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
      <div className="hero__media-container">
        {/* Render hero images with lightbox functionality */}
        {heroImages.map((image, index) => {
          // Mosaic tile configurations mapped to BEM classes
          const mosaicClasses = [
            "hero__mosaic-image hero__mosaic-image--1",
            "hero__mosaic-image hero__mosaic-image--2",
            "hero__mosaic-image hero__mosaic-image--3"
          ];

          return (
            <div
              key={index}
              className={`${image.className || mosaicClasses[index % 3]}`}
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
      </div>
    );
  };

  // BEM Classes
  const heroClasses = `hero ${fullscreen ? "hero--fullscreen" : ""} ${className}`;
  const contentClasses = `hero__content ${layout === "split" ? "hero__content--split" : layout === "left" ? "hero__content--left" : ""}`;
  
  // Container Classes
  let containerClasses = "hero__container";
  if (align === "wide") containerClasses += " hero__container--wide";
  if (align === "full") containerClasses += " hero__container--full";

  return (
    <section className={heroClasses}>
      {/* Decorative Elements (Orbs/Backgrounds) */}
      {decorativeElements ? (
        <div className="hero__decorative-wrapper" aria-hidden="true">
          {decorativeElements}
        </div>
      ) : (
        /* Default Background Effects if none provided */
        <>
           <div className="hero__bg-effect hero__bg-effect--1" />
           <div className="hero__bg-effect hero__bg-effect--2" />
           <div className="hero__bg-effect hero__bg-effect--3" />
        </>
      )}

      {/* Content Container */}
      <div className={containerClasses}>
        <div className={contentClasses}>
          {/* Text Content */}
          <div className="hero__text-column">
            <h1 className="hero__title text-gradient-pink-purple-blue">
              {title}
            </h1>

            {renderSubtitle()}

            {description && (
              <p className="hero__description">
                {description}
              </p>
            )}

            {actions && (
              <div className="hero__actions">
                {actions}
              </div>
            )}
          </div>

          {/* Enhanced Media Content for Split Layout */}
          {layout === "split" && (
            <div className="hero__media-wrapper">
               <HeroMediaWithLightbox />
            </div>
          )}
        </div>

        {/* Media Content for non-split layouts (e.g. Center) */}
        {layout !== "split" && (
          <div className="hero__media-wrapper-bottom">
            <HeroMediaWithLightbox />
          </div>
        )}
      </div>

      {/* Scroll Down Arrow */}
      {showScrollArrow && (
        <ScrollDownArrow
          targetSectionId={scrollArrowTarget}
          className={scrollArrowClassName || "hero__scroll-arrow"}
          ariaLabel={
            scrollArrowTarget
              ? `Scroll to ${scrollArrowTarget.replace("-", " ")} section`
              : "Scroll to next section"
          }
        />
      )}

      {/* Portfolio Lightbox */}
      {enableLightbox && (
        <EnhancedLightbox
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
