/**
 * Core Web Vitals Monitoring Utility
 * 
 * Tracks and reports Core Web Vitals metrics:
 * - LCP (Largest Contentful Paint)
 * - FID (First Input Delay)
 * - CLS (Cumulative Layout Shift)
 * - FCP (First Contentful Paint)
 * - TTFB (Time to First Byte)
 * - INP (Interaction to Next Paint)
 * 
 * Performance Thresholds (Google recommendations):
 * - LCP: < 2.5s (Good), < 4s (Needs Improvement), >= 4s (Poor)
 * - FID: < 100ms (Good), < 300ms (Needs Improvement), >= 300ms (Poor)
 * - CLS: < 0.1 (Good), < 0.25 (Needs Improvement), >= 0.25 (Poor)
 * - FCP: < 1.8s (Good), < 3s (Needs Improvement), >= 3s (Poor)
 * - TTFB: < 800ms (Good), < 1800ms (Needs Improvement), >= 1800ms (Poor)
 * 
 * @module CoreWebVitals
 */

export interface WebVitalMetric {
  /** Metric name */
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  /** Metric value */
  value: number;
  /** Rating (good/needs-improvement/poor) */
  rating: 'good' | 'needs-improvement' | 'poor';
  /** Navigation type */
  navigationType: string;
  /** Unique ID for this metric */
  id: string;
  /** Delta from previous value */
  delta: number;
}

export interface WebVitalThresholds {
  good: number;
  needsImprovement: number;
}

// Performance thresholds based on Google's recommendations
const THRESHOLDS: Record<string, WebVitalThresholds> = {
  CLS: { good: 0.1, needsImprovement: 0.25 },
  FID: { good: 100, needsImprovement: 300 },
  FCP: { good: 1800, needsImprovement: 3000 },
  LCP: { good: 2500, needsImprovement: 4000 },
  TTFB: { good: 800, needsImprovement: 1800 },
  INP: { good: 200, needsImprovement: 500 },
};

/**
 * Get rating for a metric value
 */
function getRating(metricName: string, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[metricName];
  if (!threshold) return 'good';

  if (value <= threshold.good) return 'good';
  if (value <= threshold.needsImprovement) return 'needs-improvement';
  return 'poor';
}

/**
 * Report Web Vital metric
 * Override this function to send metrics to your analytics service
 */
export function reportWebVital(metric: WebVitalMetric): void {
  // Log to console in development
  if (import.meta.env.DEV) {
    console.log(`[Web Vitals] ${metric.name}:`, {
      value: metric.value,
      rating: metric.rating,
      id: metric.id,
    });
  }

  // Send to analytics (example implementations below)
  
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', metric.name, {
      event_category: 'Web Vitals',
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_label: metric.id,
      non_interaction: true,
    });
  }

  // Google Tag Manager
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'web-vitals',
      metric_name: metric.name,
      metric_value: metric.value,
      metric_rating: metric.rating,
      metric_id: metric.id,
    });
  }

  // Custom analytics endpoint (example)
  // fetch('/api/analytics/web-vitals', {
  //   method: 'POST',
  //   body: JSON.stringify(metric),
  //   headers: { 'Content-Type': 'application/json' },
  //   keepalive: true,
  // }).catch(console.error);
}

/**
 * Initialize Core Web Vitals tracking
 * Call this once in your application's entry point
 */
export async function initWebVitals(): Promise<void> {
  // Only run in browser
  if (typeof window === 'undefined') return;

  try {
    // Dynamically import web-vitals library (code splitting)
    const { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');

    // Track each metric
    onCLS((metric) => {
      reportWebVital({
        name: 'CLS',
        value: metric.value,
        rating: getRating('CLS', metric.value),
        navigationType: metric.navigationType,
        id: metric.id,
        delta: metric.delta,
      });
    });

    onFID((metric) => {
      reportWebVital({
        name: 'FID',
        value: metric.value,
        rating: getRating('FID', metric.value),
        navigationType: metric.navigationType,
        id: metric.id,
        delta: metric.delta,
      });
    });

    onFCP((metric) => {
      reportWebVital({
        name: 'FCP',
        value: metric.value,
        rating: getRating('FCP', metric.value),
        navigationType: metric.navigationType,
        id: metric.id,
        delta: metric.delta,
      });
    });

    onLCP((metric) => {
      reportWebVital({
        name: 'LCP',
        value: metric.value,
        rating: getRating('LCP', metric.value),
        navigationType: metric.navigationType,
        id: metric.id,
        delta: metric.delta,
      });
    });

    onTTFB((metric) => {
      reportWebVital({
        name: 'TTFB',
        value: metric.value,
        rating: getRating('TTFB', metric.value),
        navigationType: metric.navigationType,
        id: metric.id,
        delta: metric.delta,
      });
    });

    // INP (Interaction to Next Paint) - newer metric
    if (onINP) {
      onINP((metric) => {
        reportWebVital({
          name: 'INP',
          value: metric.value,
          rating: getRating('INP', metric.value),
          navigationType: metric.navigationType,
          id: metric.id,
          delta: metric.delta,
        });
      });
    }
  } catch (error) {
    console.error('Failed to initialize Web Vitals tracking:', error);
  }
}

/**
 * Get current performance metrics snapshot
 * Useful for debugging and manual reporting
 */
export function getPerformanceSnapshot(): Record<string, any> {
  if (typeof window === 'undefined' || !window.performance) {
    return {};
  }

  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');

  return {
    // Navigation timing
    domContentLoaded: navigation?.domContentLoadedEventEnd - navigation?.domContentLoadedEventStart,
    loadComplete: navigation?.loadEventEnd - navigation?.loadEventStart,
    domInteractive: navigation?.domInteractive - navigation?.fetchStart,
    
    // Paint timing
    firstPaint: paint.find((entry) => entry.name === 'first-paint')?.startTime || 0,
    firstContentfulPaint: paint.find((entry) => entry.name === 'first-contentful-paint')?.startTime || 0,
    
    // Resource timing
    totalResources: performance.getEntriesByType('resource').length,
    
    // Memory (if available)
    memory: (performance as any).memory
      ? {
          usedJSHeapSize: (performance as any).memory.usedJSHeapSize,
          totalJSHeapSize: (performance as any).memory.totalJSHeapSize,
          jsHeapSizeLimit: (performance as any).memory.jsHeapSizeLimit,
        }
      : null,
  };
}

/**
 * React hook for monitoring Web Vitals
 * 
 * @example
 * ```tsx
 * function App() {
 *   useWebVitals();
 *   return <div>App content</div>;
 * }
 * ```
 */
export function useWebVitals(): void {
  if (typeof window === 'undefined') return;

  // Initialize on mount
  if (typeof window !== 'undefined') {
    initWebVitals();
  }
}

/**
 * Performance observer for custom metrics
 * Use this to track your own performance markers
 */
export class PerformanceMonitor {
  private marks: Map<string, number> = new Map();

  /**
   * Mark the start of a performance measurement
   */
  mark(name: string): void {
    if (typeof performance !== 'undefined') {
      performance.mark(name);
      this.marks.set(name, performance.now());
    }
  }

  /**
   * Measure time since a mark
   */
  measure(name: string, startMark: string): number | null {
    if (typeof performance === 'undefined') return null;

    try {
      performance.measure(name, startMark);
      const measure = performance.getEntriesByName(name, 'measure')[0];
      return measure?.duration || null;
    } catch (error) {
      console.warn(`Failed to measure ${name}:`, error);
      return null;
    }
  }

  /**
   * Get time elapsed since mark
   */
  getElapsed(markName: string): number | null {
    const startTime = this.marks.get(markName);
    if (!startTime) return null;
    return performance.now() - startTime;
  }

  /**
   * Clear all marks and measures
   */
  clear(): void {
    if (typeof performance !== 'undefined') {
      performance.clearMarks();
      performance.clearMeasures();
    }
    this.marks.clear();
  }
}

/**
 * Global performance monitor instance
 */
export const performanceMonitor = new PerformanceMonitor();
