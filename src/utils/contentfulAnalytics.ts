/**
 * @fileoverview Contentful Analytics tracking for content source monitoring
 * 
 * Tracks which content is sourced from Contentful CMS versus static fallbacks,
 * providing insights into CMS usage, performance, and reliability.
 * 
 * Core Features:
 * - Content source tracking (CMS vs static)
 * - API performance monitoring
 * - Error tracking and reporting
 * - Usage analytics and metrics
 * - Real-time dashboard data
 * 
 * Metrics Tracked:
 * - Content fetch requests (success/failure)
 * - Response times and latency
 * - Cache hit/miss rates
 * - Static fallback usage
 * - Content type distribution
 * - Preview mode usage
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 * @since 1.0.0 - Initial analytics implementation
 * @lastModified 2025-01-25
 */

/**
 * Content source types
 */
export enum ContentSource {
  CONTENTFUL = 'contentful',
  STATIC = 'static',
  CACHE = 'cache',
  PREVIEW = 'preview',
}

/**
 * Content types for tracking
 */
export enum ContentType {
  BLOG_POST = 'blogPost',
  PORTFOLIO_ENTRY = 'portfolioEntry',
  ABOUT_PAGE = 'aboutPage',
  HOMEPAGE = 'homepage',
  ASSET = 'asset',
}

/**
 * Analytics event interface
 * 
 * @interface AnalyticsEvent
 */
export interface AnalyticsEvent {
  /** Event timestamp */
  timestamp: Date;
  /** Content type being fetched */
  contentType: ContentType;
  /** Source of the content */
  source: ContentSource;
  /** Whether fetch was successful */
  success: boolean;
  /** Response time in milliseconds */
  responseTime?: number;
  /** Error message if failed */
  error?: string;
  /** Additional metadata */
  metadata?: Record<string, any>;
}

/**
 * Analytics metrics interface
 * 
 * @interface AnalyticsMetrics
 */
export interface AnalyticsMetrics {
  /** Total requests made */
  totalRequests: number;
  /** Successful requests */
  successfulRequests: number;
  /** Failed requests */
  failedRequests: number;
  /** Requests by source */
  bySource: Record<ContentSource, number>;
  /** Requests by content type */
  byContentType: Record<ContentType, number>;
  /** Average response time in ms */
  averageResponseTime: number;
  /** Cache hit rate percentage */
  cacheHitRate: number;
  /** Static fallback rate percentage */
  staticFallbackRate: number;
  /** Preview mode usage count */
  previewModeUsage: number;
}

/**
 * Analytics manager class
 * 
 * @class AnalyticsManager
 */
class AnalyticsManager {
  private events: AnalyticsEvent[] = [];
  private sessionStart: Date = new Date();
  private maxEvents: number = 1000; // Maximum events to store in memory

  /**
   * Track a content fetch event
   * 
   * @param {Partial<AnalyticsEvent>} event - Event data
   */
  track(event: Partial<AnalyticsEvent>): void {
    const fullEvent: AnalyticsEvent = {
      timestamp: new Date(),
      contentType: event.contentType || ContentType.BLOG_POST,
      source: event.source || ContentSource.STATIC,
      success: event.success !== undefined ? event.success : true,
      responseTime: event.responseTime,
      error: event.error,
      metadata: event.metadata,
    };

    this.events.push(fullEvent);

    // Log in development
    if (import.meta?.env?.DEV) {
      const emoji = fullEvent.success ? '✅' : '❌';
      const sourceEmoji = {
        [ContentSource.CONTENTFUL]: '🌐',
        [ContentSource.STATIC]: '📁',
        [ContentSource.CACHE]: '💾',
        [ContentSource.PREVIEW]: '👁️',
      }[fullEvent.source];

      console.log(
        `${emoji} ${sourceEmoji} [${fullEvent.contentType}] from ${fullEvent.source}`,
        fullEvent.responseTime ? `(${fullEvent.responseTime}ms)` : ''
      );
    }

    // Trim old events if exceeding limit
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Send to external analytics if configured
    this.sendToExternalAnalytics(fullEvent);
  }

  /**
   * Get analytics metrics
   * 
   * @returns {AnalyticsMetrics} Computed metrics
   */
  getMetrics(): AnalyticsMetrics {
    const totalRequests = this.events.length;
    const successfulRequests = this.events.filter(e => e.success).length;
    const failedRequests = this.events.filter(e => !e.success).length;

    const bySource = Object.values(ContentSource).reduce((acc, source) => {
      acc[source] = this.events.filter(e => e.source === source).length;
      return acc;
    }, {} as Record<ContentSource, number>);

    const byContentType = Object.values(ContentType).reduce((acc, type) => {
      acc[type] = this.events.filter(e => e.contentType === type).length;
      return acc;
    }, {} as Record<ContentType, number>);

    const responseTimes = this.events
      .filter(e => e.responseTime !== undefined)
      .map(e => e.responseTime!);
    const averageResponseTime = responseTimes.length > 0
      ? responseTimes.reduce((sum, time) => sum + time, 0) / responseTimes.length
      : 0;

    const cacheRequests = bySource[ContentSource.CACHE] || 0;
    const cacheHitRate = totalRequests > 0 ? (cacheRequests / totalRequests) * 100 : 0;

    const staticRequests = bySource[ContentSource.STATIC] || 0;
    const staticFallbackRate = totalRequests > 0 ? (staticRequests / totalRequests) * 100 : 0;

    const previewModeUsage = bySource[ContentSource.PREVIEW] || 0;

    return {
      totalRequests,
      successfulRequests,
      failedRequests,
      bySource,
      byContentType,
      averageResponseTime: Math.round(averageResponseTime),
      cacheHitRate: Math.round(cacheHitRate * 100) / 100,
      staticFallbackRate: Math.round(staticFallbackRate * 100) / 100,
      previewModeUsage,
    };
  }

  /**
   * Get recent events
   * 
   * @param {number} count - Number of recent events to return
   * @returns {AnalyticsEvent[]} Recent events
   */
  getRecentEvents(count: number = 10): AnalyticsEvent[] {
    return this.events.slice(-count);
  }

  /**
   * Get session duration
   * 
   * @returns {number} Duration in milliseconds
   */
  getSessionDuration(): number {
    return Date.now() - this.sessionStart.getTime();
  }

  /**
   * Get session summary
   * 
   * @returns {Object} Session summary data
   */
  getSessionSummary(): {
    duration: number;
    metrics: AnalyticsMetrics;
    recentEvents: AnalyticsEvent[];
  } {
    return {
      duration: this.getSessionDuration(),
      metrics: this.getMetrics(),
      recentEvents: this.getRecentEvents(5),
    };
  }

  /**
   * Clear all analytics data
   */
  clear(): void {
    this.events = [];
    this.sessionStart = new Date();
  }

  /**
   * Export analytics data as JSON
   * 
   * @returns {string} JSON string of all events
   */
  export(): string {
    return JSON.stringify({
      sessionStart: this.sessionStart,
      sessionDuration: this.getSessionDuration(),
      metrics: this.getMetrics(),
      events: this.events,
    }, null, 2);
  }

  /**
   * Send event to external analytics service
   * 
   * @private
   * @param {AnalyticsEvent} event - Event to send
   */
  private sendToExternalAnalytics(event: AnalyticsEvent): void {
    // Google Analytics 4 integration
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'contentful_fetch', {
        event_category: 'content',
        event_label: `${event.contentType}_${event.source}`,
        value: event.responseTime,
        success: event.success,
      });
    }

    // Custom analytics endpoint (future enhancement)
    if (import.meta?.env?.VITE_ANALYTICS_ENDPOINT) {
      fetch(import.meta.env.VITE_ANALYTICS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(event),
      }).catch(err => {
        console.debug('Failed to send analytics:', err);
      });
    }
  }
}

/**
 * Global analytics manager instance
 */
export const analyticsManager = new AnalyticsManager();

/**
 * Track content fetch from Contentful
 * 
 * @function trackContentfulFetch
 * @param {ContentType} contentType - Type of content being fetched
 * @param {number} startTime - Request start timestamp
 * @param {boolean} success - Whether fetch was successful
 * @param {string} error - Error message if failed
 * 
 * @example
 * ```typescript
 * const startTime = Date.now();
 * try {
 *   const content = await fetchFromContentful();
 *   trackContentfulFetch(ContentType.BLOG_POST, startTime, true);
 * } catch (error) {
 *   trackContentfulFetch(ContentType.BLOG_POST, startTime, false, error.message);
 * }
 * ```
 */
export function trackContentfulFetch(
  contentType: ContentType,
  startTime: number,
  success: boolean,
  error?: string
): void {
  analyticsManager.track({
    contentType,
    source: ContentSource.CONTENTFUL,
    success,
    responseTime: Date.now() - startTime,
    error,
  });
}

/**
 * Track static fallback usage
 * 
 * @function trackStaticFallback
 * @param {ContentType} contentType - Type of content using fallback
 * @param {string} reason - Reason for fallback
 * 
 * @example
 * ```typescript
 * trackStaticFallback(ContentType.PORTFOLIO_ENTRY, 'Contentful API unavailable');
 * ```
 */
export function trackStaticFallback(
  contentType: ContentType,
  reason?: string
): void {
  analyticsManager.track({
    contentType,
    source: ContentSource.STATIC,
    success: true,
    metadata: { reason },
  });
}

/**
 * Track preview mode usage
 * 
 * @function trackPreviewMode
 * @param {ContentType} contentType - Type of content in preview
 * @param {number} startTime - Request start timestamp
 * 
 * @example
 * ```typescript
 * const startTime = Date.now();
 * const previewContent = await fetchPreviewContent();
 * trackPreviewMode(ContentType.BLOG_POST, startTime);
 * ```
 */
export function trackPreviewMode(
  contentType: ContentType,
  startTime: number
): void {
  analyticsManager.track({
    contentType,
    source: ContentSource.PREVIEW,
    success: true,
    responseTime: Date.now() - startTime,
  });
}

/**
 * Get analytics dashboard data
 * 
 * @function getAnalyticsDashboard
 * @returns {Object} Dashboard data for visualization
 * 
 * @example
 * ```typescript
 * const dashboard = getAnalyticsDashboard();
 * console.log('CMS Usage:', dashboard.cmsUsagePercentage);
 * console.log('Average Response Time:', dashboard.avgResponseTime);
 * ```
 */
export function getAnalyticsDashboard(): {
  metrics: AnalyticsMetrics;
  cmsUsagePercentage: number;
  staticUsagePercentage: number;
  health: 'excellent' | 'good' | 'fair' | 'poor';
  recommendations: string[];
} {
  const metrics = analyticsManager.getMetrics();
  
  const cmsRequests = metrics.bySource[ContentSource.CONTENTFUL] || 0;
  const totalRequests = metrics.totalRequests;
  
  const cmsUsagePercentage = totalRequests > 0 
    ? Math.round((cmsRequests / totalRequests) * 100) 
    : 0;
  
  const staticUsagePercentage = metrics.staticFallbackRate;

  // Determine health status
  let health: 'excellent' | 'good' | 'fair' | 'poor' = 'excellent';
  if (staticUsagePercentage > 50) health = 'poor';
  else if (staticUsagePercentage > 25) health = 'fair';
  else if (staticUsagePercentage > 10) health = 'good';

  // Generate recommendations
  const recommendations: string[] = [];
  
  if (staticUsagePercentage > 25) {
    recommendations.push('High static fallback rate detected. Check Contentful API connectivity.');
  }
  
  if (metrics.averageResponseTime > 2000) {
    recommendations.push('High response times detected. Consider implementing caching.');
  }
  
  if (metrics.failedRequests > metrics.successfulRequests * 0.1) {
    recommendations.push('High error rate detected. Review API configuration and rate limits.');
  }
  
  if (recommendations.length === 0) {
    recommendations.push('Contentful integration performing optimally!');
  }

  return {
    metrics,
    cmsUsagePercentage,
    staticUsagePercentage,
    health,
    recommendations,
  };
}

/**
 * Log analytics summary to console
 * 
 * @function logAnalyticsSummary
 * 
 * @example
 * ```typescript
 * // Log analytics summary for debugging
 * logAnalyticsSummary();
 * ```
 */
export function logAnalyticsSummary(): void {
  const dashboard = getAnalyticsDashboard();
  const summary = analyticsManager.getSessionSummary();

  console.group('📊 Contentful Analytics Summary');
  console.log('Session Duration:', Math.round(summary.duration / 1000), 'seconds');
  console.log('Total Requests:', dashboard.metrics.totalRequests);
  console.log('CMS Usage:', dashboard.cmsUsagePercentage + '%');
  console.log('Static Fallback Rate:', dashboard.staticUsagePercentage + '%');
  console.log('Average Response Time:', dashboard.metrics.averageResponseTime + 'ms');
  console.log('Health Status:', dashboard.health);
  console.log('Recommendations:', dashboard.recommendations);
  console.groupEnd();
}

/**
 * Setup analytics tracking in development console
 * 
 * @function setupAnalyticsConsole
 * 
 * @example
 * ```typescript
 * // In development, setup console analytics
 * if (import.meta.env.DEV) {
 *   setupAnalyticsConsole();
 * }
 * ```
 */
export function setupAnalyticsConsole(): void {
  if (typeof window === 'undefined' || !import.meta?.env?.DEV) {
    return;
  }

  // Add global analytics helper
  (window as any).contentfulAnalytics = {
    getMetrics: () => analyticsManager.getMetrics(),
    getDashboard: () => getAnalyticsDashboard(),
    logSummary: () => logAnalyticsSummary(),
    export: () => {
      const data = analyticsManager.export();
      console.log('Analytics Data:', data);
      return data;
    },
    clear: () => {
      analyticsManager.clear();
      console.log('✅ Analytics data cleared');
    },
  };

  console.log('📊 Contentful Analytics available in console:');
  console.log('  - contentfulAnalytics.getMetrics()');
  console.log('  - contentfulAnalytics.getDashboard()');
  console.log('  - contentfulAnalytics.logSummary()');
  console.log('  - contentfulAnalytics.export()');
  console.log('  - contentfulAnalytics.clear()');
}

/**
 * React hook for analytics dashboard
 * 
 * @function useAnalyticsDashboard
 * @returns {Object} Dashboard data and refresh function
 * 
 * @example
 * ```typescript
 * function AnalyticsDashboard() {
 *   const { dashboard, refresh } = useAnalyticsDashboard();
 *   
 *   return (
 *     <div>
 *       <h2>CMS Usage: {dashboard.cmsUsagePercentage}%</h2>
 *       <p>Health: {dashboard.health}</p>
 *       <button onClick={refresh}>Refresh</button>
 *     </div>
 *   );
 * }
 * ```
 */
export function useAnalyticsDashboard() {
  const [dashboard, setDashboard] = React.useState(getAnalyticsDashboard());

  const refresh = React.useCallback(() => {
    setDashboard(getAnalyticsDashboard());
  }, []);

  React.useEffect(() => {
    const interval = setInterval(refresh, 5000); // Refresh every 5 seconds
    return () => clearInterval(interval);
  }, [refresh]);

  return { dashboard, refresh };
}

// Note: React import added for type checking, will be available in actual React environment
declare const React: any;
