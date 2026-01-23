/**
 * Performance Optimization Utilities
 * 
 * Collection of utilities for improving application performance:
 * - Resource hints (preload, prefetch, preconnect)
 * - Debouncing and throttling
 * - Request idle callback wrappers
 * - Intersection observer helpers
 * - Memory leak prevention
 * 
 * @module PerformanceUtils
 */

/**
 * Preload a resource (high priority)
 * Use for critical resources needed for initial render
 * 
 * @param href - Resource URL
 * @param as - Resource type (image, script, style, font, etc.)
 * @param type - MIME type (optional)
 */
export function preloadResource(
  href: string,
  as: 'image' | 'script' | 'style' | 'font' | 'fetch' | 'document',
  type?: string
): void {
  if (typeof document === 'undefined') return;

  // Check if already preloaded
  const existing = document.querySelector(`link[rel="preload"][href="${href}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = as;
  link.href = href;
  
  if (type) {
    link.type = type;
  }
  
  // Fonts require crossorigin
  if (as === 'font') {
    link.crossOrigin = 'anonymous';
  }

  document.head.appendChild(link);
}

/**
 * Prefetch a resource (low priority)
 * Use for resources that will be needed soon
 * 
 * @param href - Resource URL
 */
export function prefetchResource(href: string): void {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`link[rel="prefetch"][href="${href}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = href;
  document.head.appendChild(link);
}

/**
 * Preconnect to an origin
 * Use for third-party origins that will be used
 * 
 * @param origin - Origin URL (e.g., 'https://fonts.googleapis.com')
 * @param crossorigin - Whether to use CORS
 */
export function preconnectOrigin(origin: string, crossorigin: boolean = false): void {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`link[rel="preconnect"][href="${origin}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = origin;
  
  if (crossorigin) {
    link.crossOrigin = 'anonymous';
  }

  document.head.appendChild(link);
}

/**
 * DNS prefetch
 * Use for origins that will be connected to later
 * 
 * @param origin - Origin URL
 */
export function dnsPrefetch(origin: string): void {
  if (typeof document === 'undefined') return;

  const existing = document.querySelector(`link[rel="dns-prefetch"][href="${origin}"]`);
  if (existing) return;

  const link = document.createElement('link');
  link.rel = 'dns-prefetch';
  link.href = origin;
  document.head.appendChild(link);
}

/**
 * Debounce function
 * Delays execution until after specified time has passed since last call
 * 
 * @param func - Function to debounce
 * @param wait - Milliseconds to wait
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };

    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(later, wait);
  };
}

/**
 * Throttle function
 * Ensures function is called at most once per specified time period
 * 
 * @param func - Function to throttle
 * @param limit - Milliseconds between calls
 * @returns Throttled function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false;

  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
      }, limit);
    }
  };
}

/**
 * Request idle callback wrapper with fallback
 * Executes function during browser idle time
 * 
 * @param callback - Function to execute
 * @param options - Idle callback options
 * @returns Cancel function
 */
export function requestIdleCallbackPolyfill(
  callback: () => void,
  options?: { timeout?: number }
): () => void {
  if (typeof window === 'undefined') {
    return () => {};
  }

  if ('requestIdleCallback' in window) {
    const id = window.requestIdleCallback(callback, options);
    return () => window.cancelIdleCallback(id);
  } else {
    // Fallback to setTimeout
    const id = setTimeout(callback, 1);
    return () => clearTimeout(id);
  }
}

/**
 * Intersection Observer helper
 * Simplifies setting up intersection observers
 * 
 * @param callback - Function to call when element is visible
 * @param options - Intersection observer options
 * @returns Observer instance
 */
export function createIntersectionObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  return new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry);
        }
      });
    },
    {
      rootMargin: '50px',
      threshold: 0.01,
      ...options,
    }
  );
}

/**
 * Check if element is in viewport
 * Simple viewport detection without observer
 * 
 * @param element - DOM element to check
 * @returns True if element is visible
 */
export function isInViewport(element: Element): boolean {
  if (typeof window === 'undefined') return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

/**
 * Get network connection information
 * Returns network quality info if available
 */
export function getNetworkInfo(): {
  effectiveType?: string;
  downlink?: number;
  rtt?: number;
  saveData?: boolean;
} {
  if (typeof navigator === 'undefined' || !(navigator as any).connection) {
    return {};
  }

  const connection = (navigator as any).connection;
  return {
    effectiveType: connection.effectiveType,
    downlink: connection.downlink,
    rtt: connection.rtt,
    saveData: connection.saveData,
  };
}

/**
 * Check if user prefers reduced data
 * Useful for conditionally loading heavy resources
 */
export function shouldReduceData(): boolean {
  const networkInfo = getNetworkInfo();
  
  // Check Save Data preference
  if (networkInfo.saveData) return true;
  
  // Check for slow connection
  if (networkInfo.effectiveType === 'slow-2g' || networkInfo.effectiveType === '2g') {
    return true;
  }
  
  return false;
}

/**
 * Memory leak prevention utilities
 */
export const memoryUtils = {
  /**
   * Clean up event listeners
   */
  cleanupEventListeners: (
    element: Element | Window,
    events: Array<{ type: string; handler: EventListener }>
  ): void => {
    events.forEach(({ type, handler }) => {
      element.removeEventListener(type, handler);
    });
  },

  /**
   * Cancel animation frame safely
   */
  cancelAnimationFrame: (id: number | null): void => {
    if (id !== null && typeof window !== 'undefined') {
      window.cancelAnimationFrame(id);
    }
  },

  /**
   * Clear all timeouts in array
   */
  clearTimeouts: (timeouts: Array<ReturnType<typeof setTimeout>>): void => {
    timeouts.forEach((timeout) => {
      clearTimeout(timeout);
    });
  },

  /**
   * Clear all intervals in array
   */
  clearIntervals: (intervals: Array<ReturnType<typeof setInterval>>): void => {
    intervals.forEach((interval) => {
      clearInterval(interval);
    });
  },
};

/**
 * Batch DOM reads and writes for better performance
 * Prevents layout thrashing by batching operations
 */
export class DOMBatcher {
  private readQueue: Array<() => void> = [];
  private writeQueue: Array<() => void> = [];
  private scheduled: boolean = false;

  /**
   * Schedule a DOM read operation
   */
  read(callback: () => void): void {
    this.readQueue.push(callback);
    this.schedule();
  }

  /**
   * Schedule a DOM write operation
   */
  write(callback: () => void): void {
    this.writeQueue.push(callback);
    this.schedule();
  }

  /**
   * Schedule batch execution
   */
  private schedule(): void {
    if (this.scheduled) return;
    this.scheduled = true;

    requestAnimationFrame(() => {
      // Execute all reads first
      while (this.readQueue.length > 0) {
        const callback = this.readQueue.shift();
        callback?.();
      }

      // Then execute all writes
      while (this.writeQueue.length > 0) {
        const callback = this.writeQueue.shift();
        callback?.();
      }

      this.scheduled = false;
    });
  }

  /**
   * Clear all pending operations
   */
  clear(): void {
    this.readQueue = [];
    this.writeQueue = [];
    this.scheduled = false;
  }
}

/**
 * Global DOM batcher instance
 */
export const domBatcher = new DOMBatcher();

/**
 * Image loading optimization
 * Returns optimal image loading strategy based on conditions
 */
export function getImageLoadingStrategy(isPriority: boolean, isAboveFold: boolean): {
  loading: 'eager' | 'lazy';
  fetchpriority: 'high' | 'low' | 'auto';
  decoding: 'async' | 'sync' | 'auto';
} {
  if (isPriority || isAboveFold) {
    return {
      loading: 'eager',
      fetchpriority: 'high',
      decoding: 'async',
    };
  }

  return {
    loading: 'lazy',
    fetchpriority: 'low',
    decoding: 'async',
  };
}
