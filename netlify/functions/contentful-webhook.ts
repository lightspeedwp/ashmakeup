/**
 * @fileoverview Contentful Webhook Handler for Netlify
 *
 * This function handles incoming webhooks from Contentful when content
 * is published, unpublished, or deleted. It can trigger a site rebuild
 * to ensure the latest content is deployed.
 *
 * Setup in Contentful:
 * 1. Go to Settings > Webhooks
 * 2. Add a new webhook
 * 3. URL: https://your-site.netlify.app/api/contentful-webhook
 * 4. Triggers: Entry.publish, Entry.unpublish, Entry.delete, Asset.publish
 * 5. Add a secret header for verification (optional but recommended)
 *
 * Environment Variables Required:
 * - NETLIFY_BUILD_HOOK_URL: Your Netlify build hook URL
 * - CONTENTFUL_WEBHOOK_SECRET: Secret for webhook verification (optional)
 *
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';

// Contentful webhook payload types
interface ContentfulWebhookPayload {
  sys: {
    type: string;
    id: string;
    space?: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    environment?: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    contentType?: {
      sys: {
        type: string;
        linkType: string;
        id: string;
      };
    };
    revision?: number;
    createdAt?: string;
    updatedAt?: string;
    publishedAt?: string;
    firstPublishedAt?: string;
  };
  fields?: Record<string, any>;
}

interface ContentfulWebhookHeaders {
  'x-contentful-topic'?: string;
  'x-contentful-webhook-name'?: string;
  'x-contentful-space-id'?: string;
  'x-contentful-environment'?: string;
  'x-contentful-timestamp'?: string;
  'x-contentful-signature'?: string;
}

/**
 * Content types that should trigger a rebuild
 */
const REBUILD_CONTENT_TYPES = [
  'homePage',
  'aboutPage',
  'portfolioEntry',
  'portfolioSection',
  'portfolioPage',
  'blogPost',
  'blogPage',
  'philosophyCard',
  'journeySection',
  'service',
  'author',
  'seoSettings',
];

/**
 * Topics that should trigger a rebuild
 */
const REBUILD_TOPICS = [
  'ContentManagement.Entry.publish',
  'ContentManagement.Entry.unpublish',
  'ContentManagement.Entry.delete',
  'ContentManagement.Asset.publish',
  'ContentManagement.Asset.unpublish',
  'ContentManagement.Asset.delete',
];

/**
 * Verify webhook signature (optional security measure)
 */
function verifyWebhookSignature(
  headers: ContentfulWebhookHeaders,
  body: string,
  secret?: string
): boolean {
  // If no secret is configured, skip verification
  if (!secret) {
    console.log('Webhook secret not configured, skipping signature verification');
    return true;
  }

  const signature = headers['x-contentful-signature'];
  if (!signature) {
    console.warn('No signature found in webhook headers');
    return false;
  }

  // In production, you would verify the HMAC signature here
  // For now, we'll do a basic check
  // See: https://www.contentful.com/developers/docs/webhooks/securing/

  return true; // Simplified for demo - implement proper HMAC verification in production
}

/**
 * Trigger a Netlify build via build hook
 */
async function triggerNetlifyBuild(buildHookUrl: string, reason: string): Promise<boolean> {
  try {
    const response = await fetch(buildHookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        trigger_title: `Contentful: ${reason}`,
      }),
    });

    if (response.ok) {
      console.log(`Successfully triggered build: ${reason}`);
      return true;
    } else {
      console.error(`Failed to trigger build: ${response.status} ${response.statusText}`);
      return false;
    }
  } catch (error) {
    console.error('Error triggering Netlify build:', error);
    return false;
  }
}

/**
 * Main webhook handler
 */
const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Only accept POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  // Parse headers (normalize to lowercase)
  const headers: ContentfulWebhookHeaders = {};
  Object.entries(event.headers).forEach(([key, value]) => {
    if (typeof value === 'string') {
      headers[key.toLowerCase() as keyof ContentfulWebhookHeaders] = value;
    }
  });

  // Get environment variables
  const buildHookUrl = process.env.NETLIFY_BUILD_HOOK_URL;
  const webhookSecret = process.env.CONTENTFUL_WEBHOOK_SECRET;

  // Verify we have a build hook configured
  if (!buildHookUrl) {
    console.warn('NETLIFY_BUILD_HOOK_URL not configured');
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Webhook received but no build hook configured',
        action: 'none'
      }),
    };
  }

  // Verify webhook signature
  if (!verifyWebhookSignature(headers, event.body || '', webhookSecret)) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Invalid webhook signature' }),
    };
  }

  // Parse the webhook payload
  let payload: ContentfulWebhookPayload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON payload' }),
    };
  }

  // Get webhook topic from headers
  const topic = headers['x-contentful-topic'];
  const contentType = payload.sys?.contentType?.sys?.id || 'unknown';
  const entryId = payload.sys?.id || 'unknown';

  console.log(`Received webhook: ${topic} for ${contentType} (${entryId})`);

  // Check if this topic should trigger a rebuild
  if (!topic || !REBUILD_TOPICS.includes(topic)) {
    console.log(`Ignoring webhook topic: ${topic}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Webhook received but topic does not trigger rebuild',
        topic,
        action: 'ignored'
      }),
    };
  }

  // Check if this content type should trigger a rebuild
  if (!REBUILD_CONTENT_TYPES.includes(contentType) && payload.sys?.type !== 'Asset') {
    console.log(`Ignoring content type: ${contentType}`);
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Webhook received but content type does not trigger rebuild',
        contentType,
        action: 'ignored'
      }),
    };
  }

  // Trigger the build
  const reason = `${contentType} ${topic.split('.').pop()} (${entryId})`;
  const buildTriggered = await triggerNetlifyBuild(buildHookUrl, reason);

  if (buildTriggered) {
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Build triggered successfully',
        reason,
        action: 'rebuild'
      }),
    };
  } else {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Failed to trigger build',
        reason
      }),
    };
  }
};

export { handler };
