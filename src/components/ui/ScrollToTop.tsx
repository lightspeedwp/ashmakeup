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

import React, { useEffect, useCallback, useRef } from 'react';
import { ArrowUp } from '../../lib/icons';
import { useModal } from '../common/ModalContext';
import { useScrollPosition } from '../../hooks/useScrollPosition';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import "../../styles/blocks/scroll-controls.css";

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
  const { isScrolledPast } = useScrollPosition({ throttleMs: 100 });
  const isVisible = isScrolledPast(showAfter);
  const { hasOpenModals } = useModal();
  const prefersReduced = useReducedMotion();
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
        behavior: prefersReduced ? 'auto' : 'smooth'
      });
    } catch (error) {
      // Dev logging removed — import.meta.env.DEV crashes this bundler
      window.scrollTo(0, 0);
    }
  }, [prefersReduced]);

  /**
   * Handle keyboard interactions for accessibility
   */
  const handleKeyDown = useCallback((event: React.KeyboardEvent) => {
    const isActivationKey = event.key === 'Enter' || event.key === ' ';
    if (isActivationKey) {
      event.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  // Don't render if not visible or if any modals are open
  // Also don't render if another instance is already the primary
  const shouldHide = !isVisible || hasOpenModals || !isPrimary.current;
  if (shouldHide) {
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