/**
 * @fileoverview Reusable SectionCard component for AboutPage sections
 * Provides consistent theming and styling based on section content type
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React from 'react';

/**
 * Props interface for SectionCard component
 * @interface SectionCardProps
 * @property {string} title - Section title text
 * @property {React.ReactNode} children - Section content (paragraphs, quotes, etc.)
 * @property {Object} theme - Theme configuration object from constants
 * @property {React.ReactNode} [quote] - Optional pull quote element
 * @property {React.ReactNode} [actions] - Optional action buttons
 * @property {string} [className] - Additional CSS classes
 */
interface SectionCardProps {
  title: string;
  children: React.ReactNode;
  theme: {
    backgroundGradient: { from: string; via?: string; to: string };
    titleColor: string;
    cardBorder: { from: string; to: string };
    decorativeColor: string;
    quoteColor: string;
    accentGradient: { from: string; to: string };
    name: string;
  };
  quote?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  backgroundClassName?: string; // NEW: Custom background class (e.g., bg-journey-section)
  id?: string;
}

/**
 * Reusable section card component with consistent theming
 * 
 * Features:
 * - Dynamic gradient backgrounds based on section theme
 * - Consistent card styling with gradient borders
 * - Responsive typography scaling
 * - Guidelines-compliant spacing
 * - Decorative animated elements
 * - Accessibility features
 * 
 * @param {SectionCardProps} props - Component properties
 * @returns {JSX.Element} Themed section card with content
 * 
 * @accessibility
 * - Semantic section element with proper heading hierarchy
 * - Decorative elements marked with aria-hidden
 * - WCAG AA/AAA compliant solid text colors for maximum readability
 * - High contrast mode support with fallback colors
 * - Screen reader compatible (no text-transparent or bg-clip-text)
 * - Sufficient color contrast ratios on all text elements
 * 
 * @responsive
 * - Mobile: Compact single-column layout with adjusted spacing
 * - Desktop: Full-width layout with enhanced visual elements
 */
export function SectionCard({
  title,
  children,
  theme,
  quote,
  actions,
  className = "",
  backgroundClassName,
  id
}: SectionCardProps) {
  // Use the theme name to determine the semantic CSS class
  const themeClass = `section-card-${theme.name}`;

  return (
    <section 
      id={id}
      className={`${themeClass} ${className}`}
    >
      {/* Animated Decorative Element */}
      <div 
        className="section-decorative"
        aria-hidden="true"
      />
      
      <div className="section-card-content">
        <div className="section-card-inner">
          {/* Optional Decorative Border Accent */}
          <div 
            className="section-border-accent"
            aria-hidden="true"
          />
          
          {/* Content Container */}
          <div className="relative z-10">
            {/* Section Title */}
            <h2 className="section-title text-section-h2 font-heading font-bold mb-fluid-lg text-gradient-pink-purple-blue">
              {title}
            </h2>
            
            {/* Content */}
            <div className="space-y-fluid-lg">
              {children}
            </div>
            
            {/* Pull Quote - WCAG AA Compliant */}
            {quote && (
              <blockquote className="section-quote text-fluid-2xl sm:text-fluid-3xl font-heading font-medium italic text-center py-fluid-xl relative bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">
                {/* Decorative Quote Marks */}
                <div 
                  className="section-quote-accent absolute top-4 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                  aria-hidden="true"
                />
                {quote}
                <div 
                  className="section-quote-accent absolute bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-1 rounded-full"
                  aria-hidden="true"
                />
              </blockquote>
            )}
            
            {/* Actions */}
            {actions && (
              <div className="mt-fluid-xl">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}