/**
 * @fileoverview Shared date formatting utility
 * Provides consistent date display across blog and portfolio cards
 * 
 * Format: "DD Mon YYYY" (e.g., "31 Jan 2026")
 * 
 * @module utils/formatDate
 * @author Ash Shaw Portfolio Team
 * @version 1.1.0 - Updated to DD Mon YYYY format
 */

/**
 * Formats an ISO 8601 date string into a consistent display format
 * Output: "DD Mon YYYY" (e.g., "31 Jan 2026")
 * 
 * @param {string} dateString - ISO 8601 date string (e.g., "2026-01-31")
 * @returns {string} Formatted date string
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    if (import.meta.env.DEV) {
      console.warn('🐞 formatDate: Invalid date string:', dateString);
    }
    return dateString;
  }

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}
