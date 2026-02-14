/**
 * @fileoverview Root layout component for Ash Shaw Makeup Portfolio
 * 
 * Provides the shared application shell including:
 * - Header navigation (all pages)
 * - Footer (all pages)
 * - PWA install prompt and offline indicator
 * - Screen reader live regions
 * - Scroll restoration on route change
 * - Document title management
 * - Focus management for accessibility
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0 - React Router Migration
 */

import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from './Header';
import { Footer } from './Footer';
import { PWAInstallPrompt } from './PWAInstallPrompt';
import { OfflineIndicator } from './OfflineIndicator';
import { ModalProvider } from './ModalContext';
import { ErrorBoundary } from './ErrorBoundary';
import { pageTitles } from '../../data/mock/ui/navigation';

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

    // Set document title based on current path
    const pathSegment = location.pathname === '/'
      ? 'home'
      : location.pathname.split('/')[1] || 'home';

    // Build a readable page key for title lookup
    let pageKey = pathSegment;
    if (location.pathname.startsWith('/blog/') && location.pathname !== '/blog') {
      pageKey = 'blog-post';
    } else if (location.pathname.startsWith('/portfolio/') && location.pathname !== '/portfolio') {
      pageKey = 'portfolio-detail';
    }

    const pageName = pageTitles[pageKey as keyof typeof pageTitles] || pageKey;

    if (pageKey === 'home') {
      document.title = 'Ash Shaw - Makeup Artist Portfolio';
    } else {
      document.title = `${pageName} | Ash Shaw - Makeup Artist`;
    }

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
        {/* Site-wide SVG grain noise overlay (inline style bypasses CSS bundler) */}
        <div
          className="app-noise-overlay"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
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
      </div>
    </ModalProvider>
  );
}