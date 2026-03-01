/**
 * @fileoverview Reusable scroll position hook for Ash Shaw Makeup Portfolio
 *
 * Extracts scroll-tracking logic previously duplicated in ScrollToTop,
 * BlogPostPage (reading progress), and available for future Header
 * sticky/transparent state management.
 *
 * Features:
 * - Throttled scroll listener (configurable interval)
 * - `scrollY` — raw pixel position
 * - `scrollProgress` — 0–100 percentage of total scrollable height
 * - `isScrolledPast(threshold)` — boolean helper for show/hide patterns
 * - Passive event listener for performance
 * - SSR-safe (guards `window` access)
 *
 * @module hooks/useScrollPosition
 * @version 1.0.0
 */

import { useState, useEffect, useCallback, useRef } from 'react';

/** Options accepted by useScrollPosition */
export interface UseScrollPositionOptions {
  /** Throttle interval in milliseconds (default: 100) */
  throttleMs?: number;
  /** Whether the listener is active (default: true). Disable to save resources. */
  enabled?: boolean;
}

/** Values returned by useScrollPosition */
export interface ScrollPositionState {
  /** Current vertical scroll offset in pixels */
  scrollY: number;
  /** Percentage of total scrollable height consumed (0–100) */
  scrollProgress: number;
  /** Returns true when scrollY exceeds the given pixel threshold */
  isScrolledPast: (threshold: number) => boolean;
}

/**
 * useScrollPosition
 *
 * Provides a throttled, SSR-safe way to read the current scroll position
 * and derive computed values (progress %, threshold booleans).
 *
 * @example
 * ```tsx
 * const { scrollY, scrollProgress, isScrolledPast } = useScrollPosition();
 *
 * // Show/hide a button after scrolling 300px
 * if (isScrolledPast(300)) { ... }
 *
 * // Reading-progress bar
 * <div style={{ width: `${scrollProgress}%` }} />
 * ```
 */
export function useScrollPosition(
  options: UseScrollPositionOptions = {},
): ScrollPositionState {
  const { throttleMs = 100, enabled = true } = options;

  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const lastCallRef = useRef(0);
  const timerRefInit: ReturnType<typeof setTimeout> | null = null;
  const timerRef = useRef(timerRefInit);

  /** Compute and store current scroll values */
  const measure = useCallback(() => {
    const currentY =
      window.pageYOffset || document.documentElement.scrollTop;
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = totalHeight > 0 ? (currentY / totalHeight) * 100 : 0;

    setScrollY(currentY);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    /** Throttled wrapper — fires at most once per `throttleMs` */
    const onScroll = () => {
      const now = Date.now();
      const elapsed = now - lastCallRef.current;

      if (elapsed >= throttleMs) {
        lastCallRef.current = now;
        measure();
      } else {
        if (timerRef.current) clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => {
          lastCallRef.current = Date.now();
          measure();
        }, throttleMs - elapsed);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    // Measure once on mount so initial state is correct
    measure();

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [enabled, throttleMs, measure]);

  /** Threshold helper — stable reference avoids re-renders in consumers */
  const isScrolledPast = useCallback(
    (threshold: number) => scrollY > threshold,
    [scrollY],
  );

  return { scrollY, scrollProgress, isScrolledPast };
}