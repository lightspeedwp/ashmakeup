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
import { Outlet, useLocation } from '../../lib/router';
import { Header } from './Header';
import { Footer } from './Footer';
import { PWAInstallPrompt } from './PWAInstallPrompt';
import { OfflineIndicator } from './OfflineIndicator';
import { ModalProvider } from './ModalContext';
import { ErrorBoundary } from './ErrorBoundary';
import { ScrollToTop } from '../ui/ScrollToTop';

// Import grab helper for safe property access
function grab(obj: any, key: string): any {
  if (obj == null) return undefined;
  var entries = Object.entries(obj);
  for (var i = 0; i < entries.length; i++) {
    var pair = entries[i];
    if (pair[0] === key) return pair[1];
  }
  return undefined;
}

var noiseInner = '<filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#noiseFilter)" />';
var noiseMarkup = { __html: noiseInner };

/**
 * RootLayout - Shared application shell rendered around all routes
 */
export function RootLayout() {
  var location = useLocation();
  var locationPathname = grab(location, 'pathname') as string;

  /**
   * Scroll to top and manage focus on every route change
   */
  useEffect(function() {
    // Scroll to top
    window.scrollTo(0, 0);

    // Focus management for accessibility
    setTimeout(function() {
      var mainContent = document.getElementById('main-content');
      if (mainContent) {
        mainContent.focus({ preventScroll: true });
      }
    }, 100);
  }, [locationPathname]);

  /**
   * Hide third-party skip links injected by browser extensions
   */
  useEffect(function() {
    var hideSpecificSkipLinks = function() {
      var specificSelectors = [
        '.bypass-link',
        '.bypass-link a',
        'a[role="link"][tabindex="0"]',
      ];

      specificSelectors.forEach(function(selector) {
        var elements = document.querySelectorAll(selector);
        elements.forEach(function(element) {
          var text = element.textContent ? element.textContent.trim() : '';
          var isSkipToMain = text === 'Skip to main content';
          var isSkipToContent = text === 'Skip to content';
          var shouldHide = isSkipToMain || isSkipToContent;
          if (shouldHide) {
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
        <svg className="app-noise-overlay" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
          width="100%" height="100%" preserveAspectRatio="none"
          dangerouslySetInnerHTML={noiseMarkup}
        />

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