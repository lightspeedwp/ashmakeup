/**
 * @fileoverview Contentful Rich Text renderer for Ash Shaw Portfolio
 * 
 * Provides robust rich text rendering using the official Contentful rich text
 * HTML renderer with support for embedded assets, entries, and custom styling.
 * 
 * Core Features:
 * - Official Contentful rich text HTML renderer
 * - Embedded asset handling (images, videos, files)
 * - Embedded entry handling (referenced content)
 * - Custom rendering options for nodes
 * - Brand-compliant HTML output
 * - Responsive image handling
 * - Accessibility-friendly markup
 * 
 * Rendering Strategy:
 * - Convert Contentful rich text to semantic HTML
 * - Process embedded images with optimization
 * - Handle embedded entries with proper formatting
 * - Apply brand-compliant CSS classes
 * - Maintain accessibility standards
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 * @since 1.0.0 - Initial rich text renderer implementation
 * @lastModified 2025-01-25
 */

import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { 
  Document, 
  BLOCKS, 
  INLINES, 
  MARKS,
  Block,
  Inline
} from '@contentful/rich-text-types';
import type { Asset } from 'contentful';

/**
 * Rich text rendering options interface
 * 
 * @interface RichTextOptions
 */
export interface RichTextOptions {
  /** Whether to optimize embedded images */
  optimizeImages?: boolean;
  /** Image optimization parameters */
  imageOptions?: {
    width?: number;
    format?: 'webp' | 'jpg' | 'png';
    quality?: number;
  };
  /** Custom CSS class prefix */
  classPrefix?: string;
  /** Whether to add target="_blank" to external links */
  externalLinksNewTab?: boolean;
  /** Whether to add responsive image classes */
  responsiveImages?: boolean;
}

/**
 * Default rendering options
 */
const DEFAULT_OPTIONS: RichTextOptions = {
  optimizeImages: true,
  imageOptions: {
    width: 1200,
    format: 'webp',
    quality: 85,
  },
  classPrefix: 'rich-text',
  externalLinksNewTab: true,
  responsiveImages: true,
};

/**
 * Get optimized image URL with Contentful parameters
 * 
 * @function getOptimizedImageUrl
 * @param {string} url - Original image URL
 * @param {Object} options - Optimization options
 * @returns {string} Optimized URL with parameters
 */
function getOptimizedImageUrl(
  url: string,
  options: {
    width?: number;
    format?: 'webp' | 'jpg' | 'png';
    quality?: number;
  } = {}
): string {
  if (!url || !url.includes('ctfassets.net')) {
    return url;
  }

  const params = new URLSearchParams();
  if (options.width) params.set('w', options.width.toString());
  if (options.format) params.set('fm', options.format);
  if (options.quality) params.set('q', options.quality.toString());
  params.set('fit', 'fill'); // Ensure consistent sizing

  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}${params.toString()}`;
}

/**
 * Check if URL is external
 * 
 * @function isExternalUrl
 * @param {string} url - URL to check
 * @returns {boolean} Whether URL is external
 */
function isExternalUrl(url: string): boolean {
  if (!url) return false;
  
  // Relative URLs are not external
  if (url.startsWith('/') || url.startsWith('#')) {
    return false;
  }
  
  try {
    const urlObj = new URL(url);
    // Check if different domain
    return urlObj.hostname !== window.location.hostname;
  } catch {
    // If URL parsing fails, assume relative/internal
    return false;
  }
}

/**
 * Render embedded asset (image, video, file)
 * 
 * @function renderEmbeddedAsset
 * @param {Asset} asset - Contentful asset
 * @param {RichTextOptions} options - Rendering options
 * @returns {string} HTML string for asset
 */
function renderEmbeddedAsset(asset: Asset, options: RichTextOptions): string {
  const file = asset.fields.file;
  if (!file) {
    return '<!-- Asset file not found -->';
  }

  const contentType = file.contentType || '';
  const url = file.url ? `https:${file.url}` : '';
  const title = asset.fields.title || '';
  const description = asset.fields.description || title || 'Embedded asset';

  // Handle images
  if (contentType.startsWith('image/')) {
    const optimizedUrl = options.optimizeImages
      ? getOptimizedImageUrl(url, options.imageOptions)
      : url;

    const imgClasses = [
      `${options.classPrefix}-image`,
      options.responsiveImages ? 'w-full h-auto' : '',
      'rounded-lg shadow-md my-fluid-md',
    ].filter(Boolean).join(' ');

    return `
      <figure class="${options.classPrefix}-figure my-fluid-lg">
        <img 
          src="${optimizedUrl}" 
          alt="${description}"
          title="${title}"
          class="${imgClasses}"
          loading="lazy"
        />
        ${title ? `<figcaption class="${options.classPrefix}-caption text-center text-fluid-sm text-gray-600 mt-fluid-xs italic">${title}</figcaption>` : ''}
      </figure>
    `;
  }

  // Handle videos
  if (contentType.startsWith('video/')) {
    return `
      <figure class="${options.classPrefix}-figure my-fluid-lg">
        <video 
          src="${url}"
          controls
          class="${options.classPrefix}-video w-full rounded-lg shadow-md"
          ${title ? `aria-label="${title}"` : ''}
        >
          Your browser does not support the video tag.
        </video>
        ${title ? `<figcaption class="${options.classPrefix}-caption text-center text-fluid-sm text-gray-600 mt-fluid-xs italic">${title}</figcaption>` : ''}
      </figure>
    `;
  }

  // Handle downloadable files
  return `
    <div class="${options.classPrefix}-download bg-gray-50 border border-gray-200 rounded-lg p-fluid-md my-fluid-md flex items-center gap-fluid-sm">
      <svg class="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      <div class="flex-1">
        <a 
          href="${url}" 
          download="${title || 'download'}"
          class="font-body font-medium text-gray-800 hover:text-gradient-pink-purple-blue transition-colors"
        >
          ${title || 'Download file'}
        </a>
        <p class="text-fluid-xs text-gray-500">${contentType}</p>
      </div>
    </div>
  `;
}

/**
 * Render embedded entry (referenced content)
 * 
 * @function renderEmbeddedEntry
 * @param {any} entry - Contentful entry
 * @param {RichTextOptions} options - Rendering options
 * @returns {string} HTML string for entry
 */
function renderEmbeddedEntry(entry: any, options: RichTextOptions): string {
  if (!entry || !entry.fields) {
    return '<!-- Embedded entry not found -->';
  }

  const contentType = entry.sys?.contentType?.sys?.id || 'unknown';
  const title = entry.fields.title || entry.fields.name || 'Embedded content';
  const description = entry.fields.description || entry.fields.excerpt || '';

  // Handle different content types
  switch (contentType) {
    case 'blogPost':
      return `
        <div class="${options.classPrefix}-embedded-entry bg-gradient-to-r from-pink-50 to-purple-50 border-l-4 border-pink-500 rounded-lg p-fluid-md my-fluid-md">
          <h3 class="font-heading font-semibold text-gray-800 mb-fluid-xs">📝 ${title}</h3>
          ${description ? `<p class="text-fluid-sm text-gray-700">${description}</p>` : ''}
        </div>
      `;

    case 'portfolioEntry':
      return `
        <div class="${options.classPrefix}-embedded-entry bg-gradient-to-r from-blue-50 to-teal-50 border-l-4 border-blue-500 rounded-lg p-fluid-md my-fluid-md">
          <h3 class="font-heading font-semibold text-gray-800 mb-fluid-xs">🎨 ${title}</h3>
          ${description ? `<p class="text-fluid-sm text-gray-700">${description}</p>` : ''}
        </div>
      `;

    default:
      return `
        <div class="${options.classPrefix}-embedded-entry bg-gray-50 border border-gray-200 rounded-lg p-fluid-md my-fluid-md">
          <h3 class="font-heading font-semibold text-gray-800 mb-fluid-xs">${title}</h3>
          ${description ? `<p class="text-fluid-sm text-gray-700">${description}</p>` : ''}
        </div>
      `;
  }
}

/**
 * Render Contentful rich text document to HTML
 * 
 * @function renderRichText
 * @param {Document | any} document - Contentful rich text document
 * @param {RichTextOptions} options - Rendering options
 * @returns {string} HTML string
 * 
 * @example
 * ```typescript
 * const html = renderRichText(richTextDocument, {
 *   optimizeImages: true,
 *   imageOptions: { width: 1200, format: 'webp', quality: 85 }
 * });
 * ```
 */
export function renderRichText(
  document: Document | any,
  options: Partial<RichTextOptions> = {}
): string {
  if (!document) {
    return '';
  }

  // Handle string content (legacy)
  if (typeof document === 'string') {
    return document;
  }

  // Merge options with defaults
  const renderOptions: RichTextOptions = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  // Configure rendering options
  const renderingOptions = {
    renderMark: {
      [MARKS.BOLD]: (text: string) => `<strong class="${renderOptions.classPrefix}-bold">${text}</strong>`,
      [MARKS.ITALIC]: (text: string) => `<em class="${renderOptions.classPrefix}-italic">${text}</em>`,
      [MARKS.UNDERLINE]: (text: string) => `<u class="${renderOptions.classPrefix}-underline">${text}</u>`,
      [MARKS.CODE]: (text: string) => `<code class="${renderOptions.classPrefix}-code bg-gray-100 text-gray-800 px-2 py-1 rounded font-mono text-fluid-sm">${text}</code>`,
    },
    renderNode: {
      // Block nodes
      [BLOCKS.PARAGRAPH]: (node: Block | Inline, next: any) => {
        return `<p class="${renderOptions.classPrefix}-paragraph text-body-guideline font-body text-gray-700 leading-relaxed mb-fluid-md">${next(node.content)}</p>`;
      },
      [BLOCKS.HEADING_1]: (node: Block | Inline, next: any) => {
        return `<h1 class="${renderOptions.classPrefix}-h1 text-section-h2 font-heading font-bold text-gray-800 mt-fluid-lg mb-fluid-md leading-tight">${next(node.content)}</h1>`;
      },
      [BLOCKS.HEADING_2]: (node: Block | Inline, next: any) => {
        return `<h2 class="${renderOptions.classPrefix}-h2 text-fluid-xl font-heading font-semibold text-gray-800 mt-fluid-lg mb-fluid-md leading-tight">${next(node.content)}</h2>`;
      },
      [BLOCKS.HEADING_3]: (node: Block | Inline, next: any) => {
        return `<h3 class="${renderOptions.classPrefix}-h3 text-fluid-lg font-heading font-semibold text-gray-800 mt-fluid-md mb-fluid-sm leading-tight">${next(node.content)}</h3>`;
      },
      [BLOCKS.HEADING_4]: (node: Block | Inline, next: any) => {
        return `<h4 class="${renderOptions.classPrefix}-h4 text-fluid-base font-heading font-semibold text-gray-800 mt-fluid-md mb-fluid-sm">${next(node.content)}</h4>`;
      },
      [BLOCKS.HEADING_5]: (node: Block | Inline, next: any) => {
        return `<h5 class="${renderOptions.classPrefix}-h5 text-fluid-sm font-heading font-semibold text-gray-800 mt-fluid-sm mb-fluid-xs">${next(node.content)}</h5>`;
      },
      [BLOCKS.HEADING_6]: (node: Block | Inline, next: any) => {
        return `<h6 class="${renderOptions.classPrefix}-h6 text-fluid-xs font-heading font-semibold text-gray-800 mt-fluid-sm mb-fluid-xs">${next(node.content)}</h6>`;
      },
      [BLOCKS.UL_LIST]: (node: Block | Inline, next: any) => {
        return `<ul class="${renderOptions.classPrefix}-ul list-disc list-inside space-y-2 mb-fluid-md ml-fluid-md">${next(node.content)}</ul>`;
      },
      [BLOCKS.OL_LIST]: (node: Block | Inline, next: any) => {
        return `<ol class="${renderOptions.classPrefix}-ol list-decimal list-inside space-y-2 mb-fluid-md ml-fluid-md">${next(node.content)}</ol>`;
      },
      [BLOCKS.LIST_ITEM]: (node: Block | Inline, next: any) => {
        return `<li class="${renderOptions.classPrefix}-li text-body-guideline font-body text-gray-700">${next(node.content)}</li>`;
      },
      [BLOCKS.QUOTE]: (node: Block | Inline, next: any) => {
        return `<blockquote class="${renderOptions.classPrefix}-quote border-l-4 border-pink-500 pl-fluid-md py-fluid-sm my-fluid-md italic text-fluid-lg text-gray-700 bg-gradient-to-r from-pink-50 to-purple-50 rounded-r-lg">${next(node.content)}</blockquote>`;
      },
      [BLOCKS.HR]: () => {
        return `<hr class="${renderOptions.classPrefix}-hr border-t-2 border-gray-200 my-fluid-xl" />`;
      },

      // Embedded assets
      [BLOCKS.EMBEDDED_ASSET]: (node: Block | Inline) => {
        const asset = node.data?.target;
        return renderEmbeddedAsset(asset, renderOptions);
      },

      // Embedded entries
      [BLOCKS.EMBEDDED_ENTRY]: (node: Block | Inline) => {
        const entry = node.data?.target;
        return renderEmbeddedEntry(entry, renderOptions);
      },

      // Inline nodes
      [INLINES.HYPERLINK]: (node: Block | Inline, next: any) => {
        const url = node.data?.uri || '#';
        const isExternal = isExternalUrl(url);
        const targetAttr = isExternal && renderOptions.externalLinksNewTab ? 'target="_blank" rel="noopener noreferrer"' : '';
        const classes = `${renderOptions.classPrefix}-link text-blue-600 hover:text-blue-800 underline transition-colors`;
        
        return `<a href="${url}" class="${classes}" ${targetAttr}>${next(node.content)}</a>`;
      },
      [INLINES.ASSET_HYPERLINK]: (node: Block | Inline, next: any) => {
        const asset = node.data?.target;
        const url = asset?.fields?.file?.url ? `https:${asset.fields.file.url}` : '#';
        const title = asset?.fields?.title || 'Download';
        
        return `<a href="${url}" download="${title}" class="${renderOptions.classPrefix}-link text-blue-600 hover:text-blue-800 underline transition-colors">${next(node.content)}</a>`;
      },
      [INLINES.ENTRY_HYPERLINK]: (node: Block | Inline, next: any) => {
        const entry = node.data?.target;
        // Generate link based on entry type
        const slug = entry?.fields?.slug || entry?.sys?.id || '#';
        const contentType = entry?.sys?.contentType?.sys?.id || '';
        
        let href = '#';
        if (contentType === 'blogPost') {
          href = `/blog/${slug}`;
        } else if (contentType === 'portfolioEntry') {
          href = `/portfolio/${slug}`;
        }
        
        return `<a href="${href}" class="${renderOptions.classPrefix}-link text-blue-600 hover:text-blue-800 underline transition-colors">${next(node.content)}</a>`;
      },
      [INLINES.EMBEDDED_ENTRY]: (node: Block | Inline) => {
        const entry = node.data?.target;
        const title = entry?.fields?.title || entry?.fields?.name || 'Content';
        return `<span class="${renderOptions.classPrefix}-inline-entry font-semibold text-gray-800">${title}</span>`;
      },
    },
  };

  try {
    return documentToHtmlString(document, renderingOptions);
  } catch (error) {
    console.error('Error rendering rich text:', error);
    return '<p class="text-red-500">Error rendering content. Please contact support.</p>';
  }
}

/**
 * Render rich text with brand-specific styling
 * 
 * @function renderBrandRichText
 * @param {Document | any} document - Contentful rich text document
 * @returns {string} HTML string with brand styling
 * 
 * @example
 * ```typescript
 * const html = renderBrandRichText(blogPost.content);
 * // Returns HTML with Ash Shaw brand classes applied
 * ```
 */
export function renderBrandRichText(document: Document | any): string {
  return renderRichText(document, {
    optimizeImages: true,
    imageOptions: {
      width: 1200,
      format: 'webp',
      quality: 85,
    },
    classPrefix: 'brand-content',
    externalLinksNewTab: true,
    responsiveImages: true,
  });
}

/**
 * Extract plain text from rich text document
 * 
 * @function extractPlainText
 * @param {Document | any} document - Contentful rich text document
 * @returns {string} Plain text content
 * 
 * @example
 * ```typescript
 * const plainText = extractPlainText(richTextDoc);
 * console.log(plainText); // "This is the plain text content..."
 * ```
 */
export function extractPlainText(document: Document | any): string {
  if (!document) return '';
  if (typeof document === 'string') return document;

  function extractTextFromNode(node: any): string {
    if (!node) return '';
    
    if (node.nodeType === 'text') {
      return node.value || '';
    }
    
    if (node.content && Array.isArray(node.content)) {
      return node.content.map(extractTextFromNode).join(' ');
    }
    
    return '';
  }

  return extractTextFromNode(document).trim();
}

/**
 * Count words in rich text document
 * 
 * @function countWords
 * @param {Document | any} document - Contentful rich text document
 * @returns {number} Word count
 * 
 * @example
 * ```typescript
 * const wordCount = countWords(blogPost.content);
 * const readingTime = Math.ceil(wordCount / 200); // 200 words per minute
 * ```
 */
export function countWords(document: Document | any): number {
  const plainText = extractPlainText(document);
  if (!plainText) return 0;
  
  return plainText.split(/\s+/).filter(word => word.length > 0).length;
}

/**
 * Calculate reading time from rich text document
 * 
 * @function calculateReadingTime
 * @param {Document | any} document - Contentful rich text document
 * @param {number} wordsPerMinute - Reading speed (default: 200)
 * @returns {number} Estimated reading time in minutes
 * 
 * @example
 * ```typescript
 * const readingTime = calculateReadingTime(blogPost.content);
 * console.log(`Estimated reading time: ${readingTime} minutes`);
 * ```
 */
export function calculateReadingTime(
  document: Document | any,
  wordsPerMinute: number = 200
): number {
  const wordCount = countWords(document);
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}
