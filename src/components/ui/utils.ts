/**
 * @fileoverview Utility functions for className manipulation and styling
 * Provides a cn (className) utility function for combining and deduplicating
 * CSS classes using clsx.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.1
 */

import { clsx, type ClassValue } from "clsx";

/**
 * Utility function to combine and deduplicate CSS class names
 * 
 * Combines multiple class values using clsx.
 * 
 * @param {...ClassValue[]} inputs - Variable number of class values to combine
 *   Can include strings, objects, arrays, and conditional classes
 * 
 * @returns {string} Merged className string
 * 
 * @example
 * // Basic usage with strings
 * cn('px-4', 'py-2', 'bg-blue-500')
 * // Returns: "px-4 py-2 bg-blue-500"
 * 
 * @example
 * // Conditional classes
 * cn('base-class', { 'active-class': isActive, 'disabled-class': isDisabled })
 * 
 * @example
 * // Component usage pattern
 * function Button({ className, variant = 'primary', ...props }) {
 *   return (
 *     <button
 *       className={cn(
 *         'px-4 py-2 rounded font-medium', // base styles
 *         {
 *           'bg-blue-500 text-white': variant === 'primary',
 *           'bg-gray-200 text-gray-900': variant === 'secondary',
 *         },
 *         className // allow override from props
 *       )}
 *       {...props}
 *     />
 *   );
 * }
 * 
 * @performance
 * - Efficient class string construction
 * - Minimal runtime overhead
 * 
 * @see {@link https://github.com/lukeed/clsx} clsx documentation
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
