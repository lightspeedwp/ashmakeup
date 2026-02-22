/**
 * @fileoverview Detects the user's `prefers-reduced-motion` OS setting.
 *
 * Returns `true` when the user has enabled "Reduce Motion" (or equivalent)
 * in their operating system accessibility settings.
 *
 * Unlike a one-shot `window.matchMedia` check, this hook **listens for live
 * changes** — if the user toggles the setting while the app is open, the
 * returned value updates immediately and re-renders the consuming component.
 *
 * @module hooks/useReducedMotion
 * @version 1.0.0
 *
 * @example
 * ```tsx
 * import { useReducedMotion } from '../hooks/useReducedMotion';
 *
 * function AnimatedCard({ children }) {
 *   const prefersReduced = useReducedMotion();
 *
 *   return (
 *     <div className={prefersReduced ? 'card' : 'card card--animate'}>
 *       {children}
 *     </div>
 *   );
 * }
 * ```
 *
 * @see /guidelines/prefers-reduced-motion.md — Full coding standards
 * @see /hooks/useAnimatedCount.ts — Uses one-shot matchMedia check (non-reactive)
 */

import { useState, useEffect } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

/**
 * Detects and reactively tracks the user's `prefers-reduced-motion` OS setting.
 *
 * @returns `true` if the user prefers reduced motion, `false` otherwise.
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false; // SSR-safe
    return window.matchMedia(QUERY).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(QUERY);

    const handler = (event: MediaQueryListEvent) => {
      setPrefersReduced(event.matches);
    };

    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return prefersReduced;
}
