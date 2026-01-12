/**
 * @fileoverview Contact page component for Ash Shaw Makeup Portfolio
 * 
 * Dedicated contact page featuring the contact form, social links, and about information
 * with comprehensive dark mode support and WCAG AAA accessibility compliance.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 * @since 2025-01-03
 */

import React from "react";
import { ContactForm } from "../../common/ContactForm";
import { SocialLinks } from "../../common/SocialLinks";
import { Logo } from "../../common/Logo";

/**
 * Props interface for ContactPage component
 * 
 * @interface ContactPageProps
 * @property {Function} [setCurrentPage] - Optional function to handle page navigation
 */
interface ContactPageProps {
  setCurrentPage?: (page: string) => void;
}

/**
 * ContactPage - Dedicated contact page with form and social links
 * 
 * Features:
 * - Centered contact form with validation
 * - About Ash content section
 * - Social media links
 * - Gradient background with decorative elements
 * - Full dark mode support with WCAG AAA compliance
 * - Responsive layout for all screen sizes
 * 
 * @param {ContactPageProps} props - Component properties
 * @returns {JSX.Element} Complete contact page
 * 
 * @accessibility
 * - WCAG AAA compliant color contrast (7:1 for normal text)
 * - Semantic HTML structure with proper landmarks
 * - Keyboard navigation support
 * - Screen reader compatible form labels
 * 
 * @example
 * <ContactPage setCurrentPage={setCurrentPage} />
 */
export function ContactPage({ setCurrentPage }: ContactPageProps) {
  /**
   * Handles logo click to navigate to home page with smooth scroll to top
   */
  const handleLogoClick = () => {
    if (setCurrentPage) {
      setCurrentPage("home");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-purple-950 dark:via-purple-900 dark:to-purple-950 min-h-screen transition-colors duration-300">
      {/* Background decoration - responsive */}
      <div
        className="absolute top-1/4 right-1/4 w-24 h-24 sm:w-48 sm:h-48 bg-gradient-to-br from-pink-200 to-purple-300 dark:from-pink-900 dark:to-purple-800 rounded-full opacity-10 dark:opacity-20 blur-3xl transition-opacity duration-300"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-gradient-to-br from-purple-200 to-blue-300 dark:from-purple-800 dark:to-blue-900 rounded-full opacity-10 dark:opacity-20 blur-3xl transition-opacity duration-300"
        aria-hidden="true"
      />

      <main
        id="main-content"
        className="contact-page-main relative z-10 max-w-7xl mx-auto px-fluid-md"
      >
        {/* Page Header */}
        <div className="text-center mb-fluid-2xl">
          <h1 className="text-section-h2 sm:text-hero-h1 font-heading font-bold text-gradient-pink-purple-blue mb-fluid-md">
            Get in Touch
          </h1>
          <p className="text-body-guideline font-body font-normal text-contact-body leading-relaxed max-w-2xl mx-auto transition-colors duration-300">
            I'd love to hear from you — whether you want to collaborate, connect, or just share some love.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="flex flex-col lg:flex-row gap-fluid-xl items-start">
          {/* Left Column - About */}
          <div className="flex-1 lg:sticky lg:top-24">
            <h2 className="text-section-h2 font-heading font-bold text-gradient-blue-teal-green mb-fluid-sm">
              About Ash
            </h2>
            <p className="text-body-guideline font-body font-normal text-contact-body leading-relaxed mb-fluid-sm transition-colors duration-300">
              I'm Ash Shaw, a makeup artist who started this journey in 2019. 
              Over the years, my work has grown from festival artistry to UV 
              explorations, mousse palettes, and Fusion Nails.
            </p>
            <p className="text-quote-large font-body font-medium text-gradient-pink-purple-blue mb-fluid-lg">
              Makeup that shines with colour, energy, and connection.
            </p>

            {/* Social Links */}
            <div className="mb-fluid-lg">
              <h3 className="text-fluid-2xl font-heading font-semibold text-contact-heading mb-fluid-sm transition-colors duration-300">
                Connect With Me
              </h3>
              <SocialLinks className="justify-start" />
            </div>

            {/* Logo */}
            <div className="mt-fluid-xl pt-fluid-lg border-t border-contact-divider">
              <div
                className="inline-block cursor-pointer transform hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-2 focus-ring-contact-logo rounded-md"
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

          {/* Right Column - Contact Form */}
          <div className="flex-1 max-w-md lg:max-w-lg w-full contact-form-container">
            <h2 className="text-section-h2 font-heading font-bold text-gradient-gold-peach-coral mb-fluid-sm">
              Contact Form
            </h2>
            <ContactForm />
          </div>
        </div>
      </main>
    </div>
  );
}