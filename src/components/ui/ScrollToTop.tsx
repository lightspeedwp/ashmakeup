/**
 * @fileoverview Reusable scroll-to-top button component for Ash Shaw Portfolio
 * 
 * A professional scroll-to-top button that appears when the user scrolls down
 * and smoothly scrolls to the top when clicked. Follows brand guidelines with
 * gradient styling and accessibility compliance.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.2.1 - Semantic BEM Refactor
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { useModal } from '../common/ModalContext';
import "@/styles/blocks/scroll-controls.css";

/** Module-level counter to enforce singleton rendering */
let mountedInstances = 0;

/**
 * Props interface for ScrollToTop component
 */
export interface ScrollToTopProps {
  showAfter?: number;
  className?: string;
  ariaLabel?: string;
}

/**
 * ScrollToTop - Professional scroll-to-top button with brand styling
 */
export function ScrollToTop({ 
  showAfter = 20, 
  className = "",
  ariaLabel = "Scroll to top of page"
}: ScrollToTopProps) {
  const [isVisible, setIsVisible] = useState(false);
  const { hasOpenModals } = useModal();
  const isMounted = useRef(false);
  const isPrimary = useRef(false);

  /**
   * Singleton enforcement: only the first mounted instance renders
   */
  useEffect(() => {
    if (!isMounted.current) {
      isMounted.current = true;
      mountedInstances += 1;
      if (mountedInstances === 1) {
        isPrimary.current = true;
      }
    }
    return () => {
      if (isMounted.current) {
        mountedInstances -= 1;
        isMounted.current = false;
        isPrimary.current = false;
      }
    };
  }, []);

  /**
   * Handle smooth scroll to top with fallback for older browsers
   */
  const scrollToTop = useCallback(() => {
    try {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      if (import.meta.env.DEV) {
        console.warn('Smooth scroll not supported, using instant scroll:', error);
      }
      window.scrollTo(0, 0);
    }
  }, []);

  /**
   * Handle keyboard interactions for accessibility
   */
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  /**
   * Throttled scroll handler for performance optimization
   */
  const handleScroll = useCallback(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const shouldShow = scrollTop > showAfter;
    
    if (shouldShow !== isVisible) {
      setIsVisible(shouldShow);
    }
  }, [showAfter, isVisible]);

  /**
   * Set up scroll listener with throttling for performance
   */
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const throttledScrollHandler = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        handleScroll();
      }, 100);
    };

    window.addEventListener('scroll', throttledScrollHandler, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScrollHandler);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [handleScroll, showAfter]);

  // Don't render if not visible or if any modals are open
  // Also don't render if another instance is already the primary
  if (!isVisible || hasOpenModals || !isPrimary.current) {
    return null;
  }

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className={`scroll-to-top ${className}`}
      aria-label={ariaLabel}
      title="Scroll to top"
      type="button"
    >
      <ArrowUp 
        className="scroll-to-top__icon" 
        strokeWidth={2}
        aria-hidden="true"
      />
    </button>
  );
}