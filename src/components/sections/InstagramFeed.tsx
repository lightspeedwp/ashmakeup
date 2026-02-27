/**
 * @fileoverview Instagram Feed Component
 * 
 * Displays recent Instagram posts from @feedmymedia via the Behold.so
 * embeddable widget. The widget script is loaded dynamically and the
 * `<behold-widget>` custom element is imperatively inserted via a ref
 * to keep it outside React's DOM reconciliation (prevents the
 * `beholdReplaceChildren` TypeError).
 * 
 * Implements a responsive 2-column layout:
 * - Left column (25%): Title, Subheading, Follow Button
 * - Right column (75%): Behold.so Instagram Widget
 * 
 * Error suppression for Behold's `beholdReplaceChildren` quirks is handled
 * globally in index.html, extensionErrorSuppressor.ts, ErrorBoundary.tsx,
 * and SafetyWrapper.tsx.
 * 
 * @component
 * @returns {JSX.Element} Instagram feed section
 */

import React, { useEffect, useRef } from 'react';
import { Camera } from '../../lib/icons';
import { ErrorBoundary } from '../common/ErrorBoundary';
import { instagramUI, instagramConfig } from '../../data/mock/ui/instagram';
import "../../styles/blocks/instagram-feed.css";

/**
 * Loads the Behold.so widget script once and imperatively inserts the
 * <behold-widget> custom element into a ref-managed container so that
 * React never reconciles the widget's internal DOM.
 */
function InstagramFeedContent() {
  const scriptLoaded = useRef(false);
  const widgetContainerRef = useRef<HTMLDivElement>(null);
  const widgetInserted = useRef(false);

  // Imperatively insert the <behold-widget> custom element once
  useEffect(() => {
    const shouldSkip = widgetInserted.current || !widgetContainerRef.current;
    if (shouldSkip) return;

    try {
      const widget = document.createElement('behold-widget');
      widget.setAttribute('feed-id', instagramConfig.beholdFeedId);
      widgetContainerRef.current.appendChild(widget);
      widgetInserted.current = true;
    } catch (err) {
      // Debug logging removed — import.meta.env.DEV crashes this bundler
    }
  }, []);

  // Load the Behold script
  useEffect(() => {
    if (scriptLoaded.current) return;

    // Avoid duplicate script tags
    const existing = document.querySelector(
      `script[src="${instagramConfig.scriptUrl}"]`
    );
    if (existing) {
      scriptLoaded.current = true;
      return;
    }

    const script = document.createElement('script');
    script.src = instagramConfig.scriptUrl;
    script.type = 'module';
    script.async = true;

    script.onerror = (error) => {
      // Debug logging removed — import.meta.env.DEV crashes this bundler
    };

    script.onload = () => {
      // Debug logging removed — import.meta.env.DEV crashes this bundler
    };

    document.head.appendChild(script);
    scriptLoaded.current = true;

    return () => {
      // Script stays in <head> for the lifetime of the app — intentional
    };
  }, []);

  return (
    <section id="instagram-feed" className="instagram-feed">
      <div className="container-wide">
        <div className="instagram-feed__grid">

          {/* Left Column - Header Info */}
          <div className="instagram-feed__header-col">
            <h2 className="instagram-feed__title text-section-h2 text-gradient-pink-purple-blue">
              {instagramUI.header.title}
            </h2>

            <p className="instagram-feed__description">
              {instagramUI.header.subtitle}
            </p>

            <a
              href={instagramConfig.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-feed__btn"
              aria-label={instagramUI.actions.follow}
            >
              <Camera className="instagram-feed__btn-icon" />
              <span>{instagramUI.header.handle}</span>
            </a>
          </div>

          {/* Right Column - Behold.so Widget (ref-managed, outside React reconciliation) */}
          <div className="instagram-feed__widget-col" ref={widgetContainerRef}></div>

        </div>
      </div>
    </section>
  );
}

export function InstagramFeed() {
  return (
    <ErrorBoundary>
      <InstagramFeedContent />
    </ErrorBoundary>
  );
}