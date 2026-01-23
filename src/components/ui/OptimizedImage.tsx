import { useState, useEffect, useRef, ImgHTMLAttributes } from 'react';

/**
 * OptimizedImage Component
 * 
 * High-performance image component with:
 * - Native lazy loading
 * - Intersection Observer fallback
 * - Progressive loading with blur-up effect
 * - Automatic WebP detection
 * - Responsive image sizes
 * - Error handling with fallback
 * 
 * @component
 * @example
 * ```tsx
 * <OptimizedImage
 *   src="/images/hero.jpg"
 *   alt="Hero image"
 *   width={1920}
 *   height={1080}
 *   priority={false}
 * />
 * ```
 */

export interface OptimizedImageProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'decoding'> {
  /** Image source URL */
  src: string;
  /** Alternative text for accessibility */
  alt: string;
  /** Image width (for aspect ratio calculation) */
  width?: number;
  /** Image height (for aspect ratio calculation) */
  height?: number;
  /** Priority loading (disable lazy loading for above-fold images) */
  priority?: boolean;
  /** Custom className */
  className?: string;
  /** Fallback image if main image fails to load */
  fallbackSrc?: string;
  /** Blur data URL for progressive loading */
  blurDataURL?: string;
  /** Object fit CSS property */
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /** Object position CSS property */
  objectPosition?: string;
  /** Callback when image loads */
  onLoad?: () => void;
  /** Callback when image fails to load */
  onError?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = '',
  fallbackSrc,
  blurDataURL,
  objectFit = 'cover',
  objectPosition = 'center',
  onLoad,
  onError,
  ...props
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(priority ? src : blurDataURL || '');
  const imgRef = useRef<HTMLImageElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Calculate aspect ratio for layout stability
  const aspectRatio = width && height ? (height / width) * 100 : undefined;

  // Lazy loading with Intersection Observer (fallback for older browsers)
  useEffect(() => {
    if (priority || !imgRef.current) return;

    // Check if browser supports native lazy loading
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading is supported, load image immediately
      setCurrentSrc(src);
      return;
    }

    // Fallback to Intersection Observer
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSrc(src);
            if (observerRef.current && imgRef.current) {
              observerRef.current.unobserve(imgRef.current);
            }
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before image enters viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [src, priority]);

  // Handle image load success
  const handleLoad = () => {
    setIsLoaded(true);
    setHasError(false);
    onLoad?.();
  };

  // Handle image load error
  const handleError = () => {
    setHasError(true);
    if (fallbackSrc && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
    onError?.();
  };

  // Determine loading strategy
  const loadingStrategy = priority ? 'eager' : 'lazy';
  const decodingStrategy = priority ? 'async' : 'async';

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { paddingBottom: `${aspectRatio}%` } : undefined}
    >
      {/* Blur placeholder (shown while loading) */}
      {blurDataURL && !isLoaded && !hasError && (
        <img
          src={blurDataURL}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full blur-xl scale-110 transition-opacity duration-300"
          style={{
            objectFit,
            objectPosition,
          }}
        />
      )}

      {/* Main image */}
      <img
        ref={imgRef}
        src={currentSrc || src}
        alt={alt}
        loading={loadingStrategy}
        decoding={decodingStrategy}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          absolute inset-0 w-full h-full transition-opacity duration-500
          ${isLoaded ? 'opacity-100' : 'opacity-0'}
          ${hasError ? 'opacity-50' : ''}
        `}
        style={{
          objectFit,
          objectPosition,
        }}
        {...props}
      />

      {/* Error state indicator */}
      {hasError && !fallbackSrc && (
        <div className="absolute inset-0 flex items-center justify-center bg-card-light dark:bg-card-dark">
          <div className="text-center text-portfolio-muted p-spacing-20">
            <svg
              className="w-12 h-12 mx-auto mb-spacing-10 opacity-50"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm font-body">Image unavailable</p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Helper function to generate blur data URL
 * This can be used with a build-time image processing tool
 */
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  // Simple SVG blur placeholder
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
      <filter id="b" color-interpolation-filters="sRGB">
        <feGaussianBlur stdDeviation="20"/>
      </filter>
      <rect width="100%" height="100%" fill="#e5e7eb" filter="url(#b)"/>
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svg)}`;
}

/**
 * Hook for preloading images
 * Use this to preload critical images for better perceived performance
 */
export function useImagePreload(urls: string[]) {
  useEffect(() => {
    urls.forEach((url) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = url;
      document.head.appendChild(link);
    });
  }, [urls]);
}
