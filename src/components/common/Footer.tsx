/**
 * @fileoverview Footer section component for Ash Shaw Makeup Portfolio
 * Provides comprehensive footer with about content, social links, and navigation.
 * Features responsive layout, gradient backgrounds, and accessibility-compliant structure.
 *
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0
 */

import React from "react";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";

/**
 * Props interface for Footer component
 *
 * @interface FooterProps
 * @property {Function} [setCurrentPage] - Optional function to handle page navigation when logo is clicked
 */
interface FooterProps {
  setCurrentPage?: (page: string) => void;
}

/**
 * Footer section component providing site conclusion with about and social links
 *
 * Features:
 * - Centered about content with tagline
 * - Social media links with accessibility support
 * - Clickable logo for home navigation with smooth scrolling
 * - Responsive design with fluid spacing and typography
 * - Semantic HTML structure for screen readers
 * - Full dark mode support with WCAG AAA compliance
 *
 * Layout:
 * - Centered about section with brand tagline
 * - Social links row
 * - Logo with separator line above
 *
 * @param {FooterProps} props - Component properties
 * @param {Function} [props.setCurrentPage] - Function to handle page navigation
 *
 * @returns {JSX.Element} Complete footer section
 *
 * @accessibility
 * - Semantic footer element with contentinfo landmark
 * - Proper heading hierarchy (h2)
 * - Keyboard navigation for all interactive elements
 * - Screen reader accessible decorative elements marked aria-hidden
 * - WCAG AAA contrast ratios for all text
 *
 * @example
 * <Footer setCurrentPage={setCurrentPage} />
 */
export function Footer({ setCurrentPage }: FooterProps) {
  /**
   * Handles logo click to navigate to home page with smooth scroll to top
   * Only navigates if setCurrentPage function is provided
   */
  const handleLogoClick = () => {
    if (setCurrentPage) {
      setCurrentPage("home");
      // Scroll to top when navigating to home
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer
      className="relative bg-footer-section px-fluid-md py-footer duration-200"
    >
      {/* Background decoration - responsive */}
      <div
        className="absolute top-1/4 right-1/4 footer-decoration-orb-sm bg-footer-decoration-1 rounded-900 opacity-10 dark:opacity-20 blur-3xl duration-200"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 footer-decoration-orb-md bg-footer-decoration-2 rounded-900 opacity-10 dark:opacity-20 blur-3xl duration-200"
        aria-hidden="true"
      />

      <div className="footer-container">
        {/* About Section */}
        <div className="mb-fluid-xl">
          <h2 className="text-section-h2 font-heading font-bold text-gradient-blue-teal-green mb-fluid-sm">
            About Ash
          </h2>
          <p className="text-body-guideline font-body font-normal text-footer-description leading-relaxed mb-fluid-md duration-300 max-w-2xl mx-auto">
            I'm Ash Shaw, a makeup artist who started this journey in 2019. 
            Over the years, my work has grown from festival artistry to UV 
            explorations, mousse palettes, and blacklight reactive designs.
          </p>
        </div>

        {/* Separator line */}
        <div className="mb-fluid-lg">
          <div className="w-full h-px bg-footer-separator duration-200" />
        </div>

        {/* Social Links and Logo - Stacked and Centered */}
        <div className="flex flex-col items-center gap-fluid-lg">
          {/* Social Links - Centered on Top */}
          <SocialLinks />

          {/* Logo - Centered Below */}
          <div
            className="cursor-pointer transform hover:scale-105 duration-200 focus-ring-footer-logo"
            onClick={handleLogoClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleLogoClick();
              }
            }}
            aria-label="Return to home page"
          >
            <Logo size="lg" />
          </div>
        </div>
      </div>
    </footer>
  );
}