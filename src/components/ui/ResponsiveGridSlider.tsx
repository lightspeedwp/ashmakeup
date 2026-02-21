/**
 * @fileoverview Responsive Grid Slider
 * 
 * A unified layout engine that displays content as:
 * - A Grid on Desktop (>= 1024px)
 * - A Slider/Carousel on Tablet/Mobile (< 1024px)
 * 
 * @version 1.0.0
 */

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "@/styles/blocks/responsive-grid-slider.css";
import "@/styles/blocks/column-layouts.css";

interface ResponsiveGridSliderProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  /**
   * Number of columns on desktop (default: 3)
   */
  desktopColumns?: 2 | 3 | 4;
  /**
   * Key extractor for items (default: item.id)
   */
  keyExtractor?: (item: T) => string;
  className?: string;
  /**
   * Layout mode for desktop
   * - 'grid': Displays as a grid on desktop (default)
   * - 'slider': Displays as a slider on desktop (swipable)
   */
  layoutMode?: 'grid' | 'slider';
}

export function ResponsiveGridSlider<T extends { id?: string }>({
  items,
  renderItem,
  desktopColumns = 3,
  keyExtractor = (item) => item.id || Math.random().toString(),
  className = "",
  layoutMode = 'grid',
}: ResponsiveGridSliderProps<T>) {
  // Responsive State
  const [isDesktop, setIsDesktop] = useState(true);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(desktopColumns);

  // Handle Resize Logic
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setSlidesPerView(1);
        setIsDesktop(false);
      } else if (width < 1024) {
        setSlidesPerView(2);
        setIsDesktop(false);
      } else {
        setSlidesPerView(desktopColumns);
        setIsDesktop(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [desktopColumns]);

  // Slider Navigation Logic
  const maxIndex = Math.max(0, items.length - slidesPerView);

  // Correct index if it goes out of bounds after resize
  useEffect(() => {
    if (currentSlideIndex > maxIndex) {
      setCurrentSlideIndex(maxIndex);
    }
  }, [maxIndex, currentSlideIndex]);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  // Swipe Logic
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }
  };

  const getGridClass = () => {
    switch (desktopColumns) {
      case 2: return "layout-grid--desktop-2";
      case 4: return "layout-grid--desktop-4";
      default: return "layout-grid--desktop-3";
    }
  };

  if (isDesktop && layoutMode === 'grid') {
    return (
      <div className={`layout-grid ${getGridClass()} rgs-grid ${className}`}>
        {items.map((item, index) => (
          <div key={keyExtractor(item)} className="rgs-grid-item">
            {renderItem(item, index)}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`rgs-wrapper ${className}`}>
      {/* Navigation Buttons (Hidden on mobile via CSS) */}
      <button
        onClick={prevSlide}
        disabled={currentSlideIndex === 0}
        aria-label="Previous items"
        className="rgs-nav-button rgs-nav-button--prev"
      >
        <ChevronLeft className="rgs-nav-icon" />
      </button>

      <button
        onClick={nextSlide}
        disabled={currentSlideIndex >= maxIndex}
        aria-label="Next items"
        className="rgs-nav-button rgs-nav-button--next"
      >
        <ChevronRight className="rgs-nav-icon" />
      </button>

      {/* Slider Viewport */}
      <div
        className="rgs-viewport"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div
          className="rgs-track"
          style={{
            transform: `translateX(calc(${currentSlideIndex} * -${100 / slidesPerView}%))`
          }}
        >
          {items.map((item, index) => (
            <div 
              key={keyExtractor(item)} 
              className="rgs-slide"
              style={{ flex: `0 0 ${100 / slidesPerView}%` }}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="rgs-dots">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlideIndex(index)}
            aria-label={`Go to slide group ${index + 1}`}
            className={`rgs-dot ${
              index === currentSlideIndex
                ? "rgs-dot--active"
                : "rgs-dot--inactive"
            }`}
          />
        ))}
      </div>
    </div>
  );
}