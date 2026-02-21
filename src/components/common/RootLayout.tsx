/**
 * @fileoverview Root layout component for Ash Shaw Makeup Portfolio
 * 
 * Provides the shared application shell including:
 * - Header navigation (all pages)
 * - Footer (all pages)
 * - PWA install prompt and offline indicator
 * - Screen reader live regions
 * - Scroll restoration on route change
 * - Focus management for accessibility
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.1.0 - SEO centralised via setSEO utility
 */

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { PWAInstallPrompt } from './PWAInstallPrompt';
import { OfflineIndicator } from './OfflineIndicator';
import { ModalProvider } from './ModalContext';
import { ErrorBoundary } from './ErrorBoundary';
import { ScrollToTop } from '../ui/ScrollToTop';

/**
 * RootLayout - Shared application shell rendered around all routes
 */
export function RootLayout() {
  const location = useLocation();

  /**
   * Scroll to top and manage focus on every route change
   */
  useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);

    // Focus management for accessibility
    setTimeout(() => {
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus({ preventScroll: true });
      }
    }, 100);
  }, [location.pathname]);

  /**
   * Hide third-party skip links injected by browser extensions
   */
  useEffect(() => {
    const hideSpecificSkipLinks = () => {
      const specificSelectors = [
        '.bypass-link',
        '.bypass-link a',
        'a[role="link"][tabindex="0"]',
      ];

      specificSelectors.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
          const text = element.textContent?.trim() || '';
          if (text === 'Skip to main content' || text === 'Skip to content') {
            (element as HTMLElement).style.cssText = `
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              position: absolute !important;
              left: -10000px !important;
              top: -10000px !important;
            `;
          }
        });
      });
    };

    setTimeout(hideSpecificSkipLinks, 100);
  }, []);

  return (
    <ModalProvider>
      <div className="app-container bg-atomic-noise">
        {/* Site-wide SVG grain noise overlay — inline <svg> avoids bundler url() resolution */}
        <svg className="app-noise-overlay" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>

        {/* PWA Components */}
        <PWAInstallPrompt />
        <OfflineIndicator />

        {/* Live region for screen reader announcements */}
        <div
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
          id="announcements"
          aria-label="Status announcements"
        ></div>

        {/* Additional live region for form status updates */}
        <div
          aria-live="assertive"
          aria-atomic="true"
          className="sr-only"
          id="form-announcements"
          aria-label="Form submission status"
        ></div>

        {/* Shared Header */}
        <Header />

        {/* Page Content via React Router Outlet */}
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>

        {/* Shared Footer */}
        <Footer />

        {/* Global scroll-to-top — renders on all pages via the layout */}
        <ScrollToTop />
      </div>
    </ModalProvider>
  );
}