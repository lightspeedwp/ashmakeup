/**
 * @fileoverview Typeform embed component for Ash Shaw Makeup Portfolio
 * 
 * Embeds Typeform contact form with light/dark mode support following
 * strict Semantic BEM architecture and WordPress-aligned design tokens.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 * @since 2025-01-03
 */

import React, { useEffect, useRef } from "react";
import "@/styles/components/typeform-embed.css";

/**
 * Props interface for TypeformEmbed component
 */
interface TypeformEmbedProps {
  /** Typeform form ID */
  formId: string;
  /** Optional custom height (default: 500px) */
  height?: string;
  /** Optional CSS class name for container */
  className?: string;
  /** Optional hidden fields to pass to the form */
  hiddenFields?: Record<string, string>;
}

/**
 * TypeformEmbed - Embeds Typeform form with light/dark mode support
 * 
 * @component
 * @param {TypeformEmbedProps} props - Component properties
 * @returns {JSX.Element} Rendered Typeform embed
 * 
 * @accessibility
 * - Iframe has proper title for screen readers
 * - Maintains WCAG AAA color contrast in both modes
 * - Full keyboard navigation support
 * 
 * @example
 * <TypeformEmbed 
 *   formId="01KGP965M86E2TCRWEVS0WJX57" 
 *   height="600px"
 *   hiddenFields={{ source: 'portfolio', service: 'bridal' }}
 * />
 */
export function TypeformEmbed({ 
  formId, 
  height = "500px",
  className = "",
  hiddenFields
}: TypeformEmbedProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Format hidden fields string: key=value,key2=value2
  const hiddenFieldsString = hiddenFields 
    ? Object.entries(hiddenFields)
        .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
        .join(',')
    : undefined;

  useEffect(() => {
    // Dynamically load Typeform embed script
    const loadTypeformScript = () => {
      try {
        // Check if script already exists
        const existingScript = document.querySelector('script[src*="embed.typeform.com"]');
        if (existingScript) {
          return; // Script already loaded
        }
        
        const script = document.createElement('script');
        script.src = 'https://embed.typeform.com/next/embed.js';
        script.async = true;
        script.defer = true;
        
        // Add error handling
        script.onerror = (error) => {
          if (import.meta?.env?.DEV) {
            console.warn('⚠️ Typeform script failed to load:', error);
          }
        };
        
        script.onload = () => {
          if (import.meta?.env?.DEV) {
            console.log('✅ Typeform script loaded successfully');
          }
        };
        
        document.body.appendChild(script);
      } catch (error) {
        if (import.meta?.env?.DEV) {
          console.warn('⚠️ Error loading Typeform script:', error);
        }
      }
    };

    // Load script after a short delay to avoid conflicts with extension detection
    const timeoutId = setTimeout(loadTypeformScript, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      // Note: We don't remove the script on unmount as it may be shared
      // across multiple instances or remounts
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className={`typeform-embed ${className}`}
      style={{ height: '500px', minHeight: 'unset' }}
    >
      <div 
        data-tf-live={formId}
        data-tf-opacity="0"
        data-tf-hide-headers
        data-tf-hide-footer
        data-tf-iframe-props="title=Contact Form"
        data-tf-medium="snippet"
        data-tf-hidden={hiddenFieldsString}
        style={{ width: '100%', height: '500px', margin: 0, padding: 0 }}
      />
    </div>
  );
}
