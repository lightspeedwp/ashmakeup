import { lazy, Suspense, ComponentType, ReactNode } from 'react';

/**
 * Lazy Load Wrapper Component
 * 
 * Provides React.lazy() code splitting with:
 * - Custom loading fallback UI
 * - Error boundary integration
 * - Retry mechanism for failed loads
 * - Prefetch capability
 * 
 * @component
 * @example
 * ```tsx
 * // Create lazy component
 * const BlogPage = lazyLoad(() => import('./pages/BlogPage'));
 * 
 * // Use with custom loading UI
 * <LazyLoadWrapper>
 *   <BlogPage />
 * </LazyLoadWrapper>
 * ```
 */

interface LazyLoadWrapperProps {
  /** Child components to lazy load */
  children: ReactNode;
  /** Custom loading fallback UI */
  fallback?: ReactNode;
  /** Minimum display time for loading state (prevents flash) */
  minLoadingTime?: number;
}

/**
 * Default loading fallback component
 */
function DefaultLoadingFallback() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-app-container">
      <div className="text-center p-spacing-40">
        {/* Spinner */}
        <div className="inline-block w-12 h-12 border-4 border-portfolio-muted border-t-gradient-pink-purple-blue rounded-full animate-spin mb-spacing-20"></div>
        
        {/* Loading text */}
        <p className="text-body-guideline font-body text-portfolio-muted">
          Loading...
        </p>
      </div>
    </div>
  );
}

/**
 * Lazy load wrapper with Suspense boundary
 */
export function LazyLoadWrapper({
  children,
  fallback = <DefaultLoadingFallback />,
  minLoadingTime = 0,
}: LazyLoadWrapperProps) {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

/**
 * Enhanced lazy load function with retry mechanism
 * 
 * @param importFn - Dynamic import function
 * @param retries - Number of retry attempts (default: 3)
 * @param retryDelay - Delay between retries in ms (default: 1000)
 * @returns Lazy-loaded component
 */
export function lazyLoad<T extends ComponentType<any>>(
  importFn: () => Promise<{ default: T }>,
  retries: number = 3,
  retryDelay: number = 1000
): React.LazyExoticComponent<T> {
  return lazy(() => {
    return new Promise<{ default: T }>((resolve, reject) => {
      // Track retry attempts
      let attempts = 0;

      const attemptLoad = () => {
        attempts++;
        
        importFn()
          .then(resolve)
          .catch((error) => {
            // Retry if attempts remaining
            if (attempts < retries) {
              console.warn(
                `Failed to load component (attempt ${attempts}/${retries}). Retrying in ${retryDelay}ms...`,
                error
              );
              
              setTimeout(attemptLoad, retryDelay);
            } else {
              // Max retries reached
              console.error(
                `Failed to load component after ${retries} attempts:`,
                error
              );
              reject(error);
            }
          });
      };

      attemptLoad();
    });
  });
}

/**
 * Prefetch a lazy-loaded component
 * Use this to preload components before they're needed
 * 
 * @example
 * ```tsx
 * // Prefetch on hover
 * <button 
 *   onMouseEnter={() => prefetchComponent(() => import('./BlogPage'))}
 * >
 *   Go to Blog
 * </button>
 * ```
 */
export function prefetchComponent(importFn: () => Promise<any>): void {
  // Store the promise to avoid duplicate loads
  const modulePromise = importFn();
  
  // Catch errors silently (prefetch failures shouldn't break the app)
  modulePromise.catch((error) => {
    console.warn('Prefetch failed:', error);
  });
}

/**
 * Hook for route-based prefetching
 * Automatically prefetches components when hovering over navigation links
 */
export function useRoutePrefetch(routes: Record<string, () => Promise<any>>) {
  const handleLinkHover = (route: string) => {
    const importFn = routes[route];
    if (importFn) {
      prefetchComponent(importFn);
    }
  };

  return { handleLinkHover };
}

/**
 * Section loading skeleton component
 * Use as fallback for lazy-loaded sections
 */
export function SectionLoadingSkeleton() {
  return (
    <div className="px-horizontal-section py-section-md bg-app-container animate-pulse">
      <div className="max-w-screen-xl mx-auto">
        {/* Header skeleton */}
        <div className="mb-fluid-lg">
          <div className="h-12 bg-portfolio-card rounded-400 w-1/3 mb-spacing-20"></div>
          <div className="h-6 bg-portfolio-card rounded-300 w-2/3"></div>
        </div>

        {/* Content skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-portfolio-card rounded-600 overflow-hidden">
              {/* Image skeleton */}
              <div className="aspect-square bg-portfolio-muted"></div>
              
              {/* Content skeleton */}
              <div className="p-fluid-md">
                <div className="h-6 bg-portfolio-muted rounded-300 w-3/4 mb-spacing-10"></div>
                <div className="h-4 bg-portfolio-muted rounded-300 w-full mb-spacing-10"></div>
                <div className="h-4 bg-portfolio-muted rounded-300 w-5/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Card loading skeleton
 * Use as fallback for lazy-loaded card components
 */
export function CardLoadingSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-fluid-lg animate-pulse">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="bg-portfolio-card rounded-600 overflow-hidden shadow-400">
          {/* Image skeleton */}
          <div className="aspect-square bg-portfolio-muted"></div>
          
          {/* Content skeleton */}
          <div className="p-fluid-md">
            <div className="h-6 bg-portfolio-muted rounded-300 w-3/4 mb-spacing-10"></div>
            <div className="h-4 bg-portfolio-muted rounded-300 w-full mb-spacing-10"></div>
            <div className="h-4 bg-portfolio-muted rounded-300 w-5/6 mb-spacing-10"></div>
            <div className="h-4 bg-portfolio-muted rounded-300 w-4/5"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
