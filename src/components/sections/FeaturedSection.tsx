/**
 * @fileoverview Featured Work section showcasing latest festival makeup artistry
 * Displays carefully selected portfolio pieces using centralized mock data with lightbox functionality
 * Uses a Responsive Hybrid Layout: Grid on Desktop, Slider on Tablet/Mobile
 *
 * @author Ash Shaw Portfolio Team
 * @version 5.2.0 - Unified Responsive Layout Engine
 */

import React, { useState, useMemo } from "react";
import { EnhancedLightbox } from "../ui/EnhancedLightbox";
import { SliderCard } from "../ui/SliderCard";
import { ResponsiveGridSlider } from "../ui/ResponsiveGridSlider";
import { getFeaturedPortfolioEntries } from "../../utils/portfolioService";
import { homeUI } from "../../data/mock/ui/home";
import { useAppNavigate } from "../../hooks/useAppNavigate";
import "../../styles/blocks/column-layouts.css";
import "../../styles/blocks/featured-section.css";

/** Bundler-safe type alias — avoids Array<T> nested generic in hook calls */
type FeaturedLightboxImage = { src: string; alt: string; caption?: string; description?: string };
type FeaturedLightboxState = {
  isOpen: boolean;
  images: FeaturedLightboxImage[];
  currentIndex: number;
  title: string;
  description: string;
};
const INITIAL_FEATURED_LIGHTBOX: FeaturedLightboxState = {
  isOpen: false, images: [], currentIndex: 0, title: '', description: '',
};

/**
 * Featured Work section component displaying latest festival makeup artistry
 */
export function FeaturedSection({
  limit = 6,
}: {
  limit?: number;
}) {
  const setCurrentPage = useAppNavigate();
  const [lightbox, setLightbox] = useState(INITIAL_FEATURED_LIGHTBOX);

  // Get featured portfolio entries
  const displayData = useMemo(() => {
    return getFeaturedPortfolioEntries(limit);
  }, [limit]);

  const openLightbox = (
    images: FeaturedLightboxImage[],
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

  return (
    <div className="featured-section-wrapper">
      <section id="work" className="featured-section section-spacing px-horizontal-section">
        <div className="container-wide section-container">
          {/* Section Header */}
          <div className="featured-section__header">
            <h2 className="text-section-h2 featured-section__title">
              {homeUI.sections.featured.title}
            </h2>
            <p className="text-body-guideline featured-section__description">
              {homeUI.sections.featured.description}
            </p>
          </div>

          {/* Unified Responsive Layout: Grid on Desktop, Slider on Mobile/Tablet */}
          {displayData && displayData.length > 0 ? (
            <ResponsiveGridSlider
              items={displayData}
              keyExtractor={(work) => {
                const wId = work.id;
                return wId ? wId : Math.random().toString();
              }}
              renderItem={(work) => (
                <div className="featured-section__card-wrapper">
                  <SliderCard
                    data={work}
                    onImageClick={(imageIndex) => {
                      const workImages = work.images ? work.images : [];
                      openLightbox(
                        workImages,
                        imageIndex,
                        work.title,
                        work.subtitle
                          ? `${work.subtitle} - ${work.description}`
                          : work.description,
                      );
                    }}
                    onReadMore={() => setCurrentPage("portfolio-detail", work.id)}
                    className="featured-section__card"
                  />
                </div>
              )}
              className=""
            />
          ) : (
            <div className="featured-section__empty">
              <p>{homeUI.sections.featured.empty}</p>
            </div>
          )}

          {/* CTA Button */}
          <div className="featured-section__cta-container">
            <button
              type="button"
              onClick={() => setCurrentPage("portfolio")}
              className="btn btn--neon-primary"
              aria-label={homeUI.sections.featured.ctaAriaLabel}
            >
              {homeUI.sections.featured.cta}
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
        description={lightbox.description}
      />
    </div>
  );
}