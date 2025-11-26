/**
 * @fileoverview Contentful Webhook support for real-time content updates
 * 
 * Provides infrastructure for receiving and processing Contentful webhook events
 * to enable real-time content synchronization without page reloads.
 * 
 * Core Features:
 * - Webhook event processing
 * - Content invalidation and refresh
 * - Event-driven content updates
 * - Real-time cache invalidation
 * - Background content synchronization
 * 
 * Webhook Events Supported:
 * - Entry.publish - Content published
 * - Entry.unpublish - Content unpublished
 * - Entry.delete - Content deleted
 * - Asset.publish - Asset published
 * - Asset.unpublish - Asset unpublished
 * - Asset.delete - Asset deleted
 * 
 * Architecture:
 * - Event-driven content refresh
 * - Selective cache invalidation
 * - Background synchronization
 * - Real-time UI updates
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 * @since 1.0.0 - Initial webhook infrastructure
 * @lastModified 2025-01-25
 */

/**
 * Contentful webhook event types
 */
export enum WebhookEventType {
  ENTRY_PUBLISH = 'Entry.publish',
  ENTRY_UNPUBLISH = 'Entry.unpublish',
  ENTRY_DELETE = 'Entry.delete',
  ENTRY_AUTO_SAVE = 'Entry.auto_save',
  ASSET_PUBLISH = 'Asset.publish',
  ASSET_UNPUBLISH = 'Asset.unpublish',
  ASSET_DELETE = 'Asset.delete',
}

/**
 * Webhook event interface
 * 
 * @interface WebhookEvent
 */
export interface WebhookEvent {
  /** Event type (Entry.publish, Asset.publish, etc.) */
  sys: {
    type: string;
    id: string;
    space: {
      sys: {
        id: string;
      };
    };
    environment: {
      sys: {
        id: string;
      };
    };
    createdAt: string;
    createdBy: {
      sys: {
        id: string;
      };
    };
  };
  /** Event metadata */
  metadata: {
    tags: any[];
  };
  /** Entry/Asset data */
  fields: any;
}

/**
 * Webhook listener callback function type
 */
export type WebhookListener = (event: WebhookEvent) => void | Promise<void>;

/**
 * Webhook manager class for handling Contentful webhooks
 * 
 * @class WebhookManager
 */
class WebhookManager {
  private listeners: Map<WebhookEventType, Set<WebhookListener>> = new Map();
  private eventQueue: WebhookEvent[] = [];
  private isProcessing: boolean = false;

  /**
   * Register a webhook event listener
   * 
   * @param {WebhookEventType} eventType - Event type to listen for
   * @param {WebhookListener} listener - Callback function
   */
  on(eventType: WebhookEventType, listener: WebhookListener): void {
    if (!this.listeners.has(eventType)) {
      this.listeners.set(eventType, new Set());
    }
    this.listeners.get(eventType)!.add(listener);
  }

  /**
   * Unregister a webhook event listener
   * 
   * @param {WebhookEventType} eventType - Event type
   * @param {WebhookListener} listener - Callback function to remove
   */
  off(eventType: WebhookEventType, listener: WebhookListener): void {
    const listeners = this.listeners.get(eventType);
    if (listeners) {
      listeners.delete(listener);
    }
  }

  /**
   * Process incoming webhook event
   * 
   * @param {WebhookEvent} event - Webhook event data
   */
  async processEvent(event: WebhookEvent): Promise<void> {
    this.eventQueue.push(event);
    
    if (!this.isProcessing) {
      await this.processQueue();
    }
  }

  /**
   * Process event queue
   * 
   * @private
   */
  private async processQueue(): Promise<void> {
    this.isProcessing = true;

    while (this.eventQueue.length > 0) {
      const event = this.eventQueue.shift();
      if (!event) continue;

      const eventType = event.sys.type as WebhookEventType;
      const listeners = this.listeners.get(eventType);

      if (listeners) {
        for (const listener of listeners) {
          try {
            await listener(event);
          } catch (error) {
            console.error('Error processing webhook event:', error);
          }
        }
      }
    }

    this.isProcessing = false;
  }

  /**
   * Clear all listeners
   */
  clearAll(): void {
    this.listeners.clear();
    this.eventQueue = [];
  }
}

/**
 * Global webhook manager instance
 */
export const webhookManager = new WebhookManager();

/**
 * Setup content refresh listeners for common events
 * 
 * @function setupContentRefreshListeners
 * @param {Function} refreshCallback - Function to call when content needs refresh
 * 
 * @example
 * ```typescript
 * setupContentRefreshListeners(() => {
 *   // Refresh content in your application
 *   window.location.reload(); // Simple approach
 *   // OR
 *   refetchContentFromAPI(); // More sophisticated approach
 * });
 * ```
 */
export function setupContentRefreshListeners(refreshCallback: () => void): void {
  // Listen for published content
  webhookManager.on(WebhookEventType.ENTRY_PUBLISH, async (event) => {
    console.log('📢 Content published:', event.sys.id);
    refreshCallback();
  });

  // Listen for unpublished content
  webhookManager.on(WebhookEventType.ENTRY_UNPUBLISH, async (event) => {
    console.log('📢 Content unpublished:', event.sys.id);
    refreshCallback();
  });

  // Listen for deleted content
  webhookManager.on(WebhookEventType.ENTRY_DELETE, async (event) => {
    console.log('📢 Content deleted:', event.sys.id);
    refreshCallback();
  });

  // Listen for asset changes
  webhookManager.on(WebhookEventType.ASSET_PUBLISH, async (event) => {
    console.log('📢 Asset published:', event.sys.id);
    refreshCallback();
  });
}

/**
 * Simulate webhook event for testing
 * 
 * @function simulateWebhookEvent
 * @param {WebhookEventType} eventType - Type of event to simulate
 * @param {Partial<WebhookEvent>} eventData - Event data
 * 
 * @example
 * ```typescript
 * // Simulate content publish event
 * simulateWebhookEvent(WebhookEventType.ENTRY_PUBLISH, {
 *   sys: { id: 'test-entry-id' }
 * });
 * ```
 */
export function simulateWebhookEvent(
  eventType: WebhookEventType,
  eventData: Partial<WebhookEvent> = {}
): void {
  const event: WebhookEvent = {
    sys: {
      type: eventType,
      id: eventData.sys?.id || 'simulated-event',
      space: {
        sys: {
          id: import.meta?.env?.VITE_CONTENTFUL_SPACE_ID || 'default-space',
        },
      },
      environment: {
        sys: {
          id: 'master',
        },
      },
      createdAt: new Date().toISOString(),
      createdBy: {
        sys: {
          id: 'system',
        },
      },
    },
    metadata: {
      tags: [],
    },
    fields: eventData.fields || {},
  };

  webhookManager.processEvent(event);
}

/**
 * Webhook endpoint configuration guidance
 * 
 * @constant WEBHOOK_SETUP_GUIDE
 */
export const WEBHOOK_SETUP_GUIDE = `
# Contentful Webhook Setup Guide

## 1. Create Webhook in Contentful

1. Go to **Settings → Webhooks** in Contentful
2. Click **Add Webhook**
3. Configure webhook:
   - **Name:** "Production Site Updates"
   - **URL:** https://ashshaw.makeup/api/contentful-webhook
   - **Trigger:** Select events you want to monitor
   - **Content type:** Select specific content types or all

## 2. Webhook Events to Monitor

Recommended events:
- ✅ Entry.publish - Notify when content is published
- ✅ Entry.unpublish - Notify when content is unpublished
- ✅ Entry.delete - Notify when content is deleted
- ✅ Asset.publish - Notify when assets are published

## 3. Security

- Use HTTPS only
- Implement webhook signature verification
- Add IP whitelist if needed
- Rate limit webhook endpoint

## 4. Implementation Options

### Option A: Server-Side Endpoint (Recommended)
Create API endpoint at /api/contentful-webhook that:
1. Validates webhook signature
2. Processes event type
3. Triggers content refresh

### Option B: Third-Party Service
Use services like:
- Netlify Functions
- Vercel Edge Functions
- AWS Lambda
- Cloudflare Workers

### Option C: Client-Side Polling (Fallback)
If webhooks aren't available:
- Poll Contentful API periodically
- Check for content updates
- Refresh when changes detected

## 5. Testing

Test webhook with ngrok for local development:
\`\`\`bash
ngrok http 3000
# Use ngrok URL in Contentful webhook configuration
\`\`\`
`;

/**
 * Future enhancement: Webhook endpoint handler
 * This would be implemented in a server-side API route
 * 
 * @example
 * ```typescript
 * // In your API route (e.g., /api/contentful-webhook.ts)
 * export async function POST(request: Request) {
 *   const event = await request.json();
 *   await webhookManager.processEvent(event);
 *   return new Response('OK', { status: 200 });
 * }
 * ```
 */

/**
 * Log webhook setup guide to console
 */
export function logWebhookSetupGuide(): void {
  console.log(WEBHOOK_SETUP_GUIDE);
}
