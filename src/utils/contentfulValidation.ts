/**
 * @fileoverview Contentful content type validation for Ash Shaw Portfolio
 * 
 * Provides runtime validation for Contentful content types to ensure data integrity
 * and provide helpful error messages when content doesn't match expected structure.
 * 
 * Core Features:
 * - Schema validation for all content types (blogPost, portfolioEntry, aboutPage, homepage)
 * - Detailed error reporting with field-level validation messages
 * - Type guards for TypeScript type safety
 * - Automatic field sanitization and default values
 * - Development-friendly validation warnings
 * 
 * Validation Strategy:
 * - Required field validation with clear error messages
 * - Optional field validation with sensible defaults
 * - Nested object and array validation
 * - Image/asset validation for media fields
 * - Rich text content validation
 * 
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Enhanced Portfolio Validation
 * @since 1.0.0 - Initial content type validation implementation
 * @lastModified 2025-01-25
 */

import type { Entry, Asset } from 'contentful';

/**
 * Validation result interface
 * 
 * @interface ValidationResult
 */
export interface ValidationResult {
  /** Whether validation passed */
  isValid: boolean;
  /** Array of validation error messages */
  errors: string[];
  /** Array of validation warning messages */
  warnings: string[];
  /** Sanitized and validated data (if validation passed) */
  data?: any;
}

/**
 * Validation options interface
 * 
 * @interface ValidationOptions
 */
export interface ValidationOptions {
  /** Whether to throw errors on validation failure (default: false) */
  throwOnError?: boolean;
  /** Whether to log validation warnings to console (default: true in dev) */
  logWarnings?: boolean;
  /** Whether to allow partial validation with defaults (default: true) */
  allowDefaults?: boolean;
  /** Content type name for error messages */
  contentType?: string;
}

/**
 * Validate required string field
 * 
 * @function validateRequiredString
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error messages
 * @returns {ValidationResult} Validation result
 */
function validateRequiredString(value: any, fieldName: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined || value === null) {
    errors.push(`Required field "${fieldName}" is missing`);
    return { isValid: false, errors, warnings };
  }

  if (typeof value !== 'string') {
    errors.push(`Field "${fieldName}" must be a string, got ${typeof value}`);
    return { isValid: false, errors, warnings };
  }

  if (value.trim() === '') {
    warnings.push(`Field "${fieldName}" is empty`);
  }

  return { isValid: true, errors, warnings, data: value };
}

/**
 * Validate optional string field with default
 * 
 * @function validateOptionalString
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error messages
 * @param {string} defaultValue - Default value if missing
 * @returns {ValidationResult} Validation result
 */
function validateOptionalString(
  value: any,
  fieldName: string,
  defaultValue: string = ''
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined || value === null) {
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  if (typeof value !== 'string') {
    warnings.push(`Field "${fieldName}" should be a string, got ${typeof value}`);
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  return { isValid: true, errors, warnings, data: value };
}

/**
 * Validate array field
 * 
 * @function validateArray
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error messages
 * @param {any[]} defaultValue - Default value if missing
 * @returns {ValidationResult} Validation result
 */
function validateArray(
  value: any,
  fieldName: string,
  defaultValue: any[] = []
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined || value === null) {
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  if (!Array.isArray(value)) {
    warnings.push(`Field "${fieldName}" should be an array, got ${typeof value}`);
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  return { isValid: true, errors, warnings, data: value };
}

/**
 * Validate boolean field
 * 
 * @function validateBoolean
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error messages
 * @param {boolean} defaultValue - Default value if missing
 * @returns {ValidationResult} Validation result
 */
function validateBoolean(
  value: any,
  fieldName: string,
  defaultValue: boolean = false
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined || value === null) {
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  if (typeof value !== 'boolean') {
    warnings.push(`Field "${fieldName}" should be a boolean, got ${typeof value}`);
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  return { isValid: true, errors, warnings, data: value };
}

/**
 * Validate number field
 * 
 * @function validateNumber
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error messages
 * @param {number} defaultValue - Default value if missing
 * @returns {ValidationResult} Validation result
 */
function validateNumber(
  value: any,
  fieldName: string,
  defaultValue: number = 0
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined || value === null) {
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  if (typeof value !== 'number') {
    warnings.push(`Field "${fieldName}" should be a number, got ${typeof value}`);
    return { isValid: true, errors, warnings, data: defaultValue };
  }

  return { isValid: true, errors, warnings, data: value };
}

/**
 * Validate asset field
 * 
 * @function validateAsset
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error messages
 * @param {boolean} required - Whether field is required
 * @returns {ValidationResult} Validation result
 */
function validateAsset(
  value: any,
  fieldName: string,
  required: boolean = false
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined || value === null) {
    if (required) {
      errors.push(`Required asset field "${fieldName}" is missing`);
      return { isValid: false, errors, warnings };
    }
    return { isValid: true, errors, warnings, data: undefined };
  }

  if (typeof value !== 'object' || !value.fields) {
    if (required) {
      errors.push(`Asset field "${fieldName}" has invalid structure`);
      return { isValid: false, errors, warnings };
    }
    warnings.push(`Asset field "${fieldName}" has invalid structure`);
    return { isValid: true, errors, warnings, data: undefined };
  }

  return { isValid: true, errors, warnings, data: value };
}

/**
 * Validate rich text field
 * 
 * @function validateRichText
 * @param {any} value - Value to validate
 * @param {string} fieldName - Field name for error messages
 * @param {boolean} required - Whether field is required
 * @returns {ValidationResult} Validation result
 */
function validateRichText(
  value: any,
  fieldName: string,
  required: boolean = false
): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  if (value === undefined || value === null) {
    if (required) {
      errors.push(`Required rich text field "${fieldName}" is missing`);
      return { isValid: false, errors, warnings };
    }
    return { isValid: true, errors, warnings, data: '' };
  }

  if (typeof value === 'object' && value.nodeType === 'document') {
    if (!value.content || !Array.isArray(value.content)) {
      warnings.push(`Rich text field "${fieldName}" is missing content array`);
    }
    return { isValid: true, errors, warnings, data: value };
  }

  warnings.push(`Rich text field "${fieldName}" has unexpected type: ${typeof value}`);
  return { isValid: !required, errors, warnings, data: required ? '' : value };
}

/**
 * Validate blog post content type
 * 
 * @function validateBlogPost
 * @param {Entry<any>} entry - Contentful blog post entry
 * @param {ValidationOptions} options - Validation options
 * @returns {ValidationResult} Validation result with sanitized data
 * 
 * @example
 * ```typescript
 * const result = validateBlogPost(contentfulEntry);
 * if (result.isValid) {
 *   // Use result.data safely
 * } else {
 *   console.error('Validation errors:', result.errors);
 * }
 * ```
 */
export function validateBlogPost(
  entry: Entry<any>,
  options: ValidationOptions = {}
): ValidationResult {
  const {
    throwOnError = false,
    logWarnings = import.meta?.env?.DEV,
    allowDefaults = true,
    contentType = 'blogPost'
  } = options;

  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const fields = entry.fields;

  if (logWarnings) {
    console.log(`🔍 Validating ${contentType} entry: ${entry.sys.id}`);
  }

  // Validate required fields
  const titleResult = validateRequiredString(fields.title, 'title');
  allErrors.push(...titleResult.errors);
  allWarnings.push(...titleResult.warnings);

  const slugResult = validateRequiredString(fields.slug, 'slug');
  allErrors.push(...slugResult.errors);
  allWarnings.push(...slugResult.warnings);

  const excerptResult = validateRequiredString(fields.excerpt, 'excerpt');
  allErrors.push(...excerptResult.errors);
  allWarnings.push(...excerptResult.warnings);

  const contentResult = validateRichText(fields.content, 'content', true);
  allErrors.push(...contentResult.errors);
  allWarnings.push(...contentResult.warnings);

  // Validate optional fields
  const categoryResult = validateOptionalString(fields.category, 'category', 'general');
  allWarnings.push(...categoryResult.warnings);

  const tagsResult = validateArray(fields.tags, 'tags', []);
  allWarnings.push(...tagsResult.warnings);

  const publishedResult = validateBoolean(fields.published, 'published', false);
  allWarnings.push(...publishedResult.warnings);

  const readingTimeResult = validateNumber(fields.readingTime, 'readingTime', 5);
  allWarnings.push(...readingTimeResult.warnings);

  // Validate asset fields
  const featuredImageResult = validateAsset(fields.featuredImage, 'featuredImage', false);
  allWarnings.push(...featuredImageResult.warnings);

  // Validate author
  if (fields.author) {
    if (typeof fields.author === 'object' && fields.author.fields) {
      const authorNameResult = validateRequiredString(fields.author.fields.name, 'author.name');
      allWarnings.push(...authorNameResult.warnings);
    }
  }

  // Check for critical errors
  const isValid = allErrors.length === 0;

  if (logWarnings && allWarnings.length > 0) {
    console.warn(`⚠️ Blog post validation warnings for "${fields.title || entry.sys.id}":`, allWarnings);
  }

  if (throwOnError && !isValid) {
    throw new Error(`Blog post validation failed: ${allErrors.join(', ')}`);
  }

  return {
    isValid,
    errors: allErrors,
    warnings: allWarnings,
    data: isValid ? entry : undefined
  };
}

/**
 * Validate portfolio entry content type
 * 
 * @function validatePortfolioEntry
 * @param {Entry<any>} entry - Contentful portfolio entry
 * @param {ValidationOptions} options - Validation options
 * @returns {ValidationResult} Validation result with sanitized data
 * 
 * @example
 * ```typescript
 * const result = validatePortfolioEntry(contentfulEntry);
 * if (result.isValid) {
 *   const portfolioData = transformPortfolioEntry(result.data);
 * }
 * ```
 */
export function validatePortfolioEntry(
  entry: Entry<any>,
  options: ValidationOptions = {}
): ValidationResult {
  const {
    throwOnError = false,
    logWarnings = import.meta?.env?.DEV,
    contentType = 'portfolioEntry'
  } = options;

  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const fields = entry.fields;

  if (logWarnings) {
    console.log(`🔍 Validating ${contentType} entry: ${entry.sys.id}`);
  }

  // Validate required fields
  const titleResult = validateRequiredString(fields.title, 'title');
  allErrors.push(...titleResult.errors);
  allWarnings.push(...titleResult.warnings);

  const descriptionResult = validateRequiredString(fields.description, 'description');
  allErrors.push(...descriptionResult.errors);
  allWarnings.push(...descriptionResult.warnings);

  const categoryResult = validateRequiredString(fields.category, 'category');
  allErrors.push(...categoryResult.errors);
  allWarnings.push(...categoryResult.warnings);

  // ENHANCED: Validate category against allowed values
  const validCategories = [
    'Festival Makeup',
    'UV Makeup',
    'Swiss Festivals',
    'Fusion Nails',
    'Thailand Adventures',
    'Editorial',
    'Special Events',
  ];

  if (categoryResult.isValid && categoryResult.data) {
    const category = categoryResult.data;
    if (!validCategories.includes(category)) {
      allWarnings.push(
        `Category "${category}" is not in the standard list. Valid categories: ${validCategories.join(', ')}`
      );
    }
  }

  // ENHANCED: Validate image arrays with detailed checks
  const imagesResult = validateArray(fields.images, 'images', []);
  allWarnings.push(...imagesResult.warnings);

  if (imagesResult.data && imagesResult.data.length === 0) {
    allWarnings.push('⚠️ Portfolio entry has no images - this will significantly affect display quality');
  } else if (imagesResult.data) {
    // Check image count
    const imageCount = imagesResult.data.length;

    if (imageCount === 1) {
      allWarnings.push('Portfolio entry only has 1 image - consider adding more for better showcase');
    }

    if (imageCount > 20) {
      allWarnings.push(`Portfolio entry has ${imageCount} images - large galleries may impact performance`);
    }

    // Validate each image asset
    imagesResult.data.forEach((image: any, index: number) => {
      const imageValidation = validateAsset(image, `images[${index}]`, true);
      allWarnings.push(...imageValidation.warnings);
      allErrors.push(...imageValidation.errors);

      // Check if image has proper fields
      if (image && image.fields) {
        const file = image.fields.file;
        if (file) {
          // Check file type
          const contentType = file.contentType || '';
          if (!contentType.startsWith('image/')) {
            allErrors.push(`images[${index}] is not an image file (contentType: ${contentType})`);
          }

          // Check image dimensions if available
          const details = file.details;
          if (details && details.image) {
            const width = details.image.width;
            const height = details.image.height;

            if (width < 800 || height < 600) {
              allWarnings.push(
                `images[${index}] has low resolution (${width}x${height}) - recommend at least 800x600 for quality display`
              );
            }

            if (width > 4000 || height > 4000) {
              allWarnings.push(
                `images[${index}] has very high resolution (${width}x${height}) - consider optimizing to improve load times`
              );
            }
          }

          // Check file size
          if (details && details.size) {
            const sizeMB = details.size / (1024 * 1024);
            if (sizeMB > 5) {
              allWarnings.push(
                `images[${index}] is large (${sizeMB.toFixed(2)}MB) - recommend optimizing to under 2MB for better performance`
              );
            }
          }
        }

        // Check for alt text (title or description)
        if (!image.fields.title && !image.fields.description) {
          allWarnings.push(
            `images[${index}] missing alt text - add title or description for accessibility`
          );
        }
      }
    });
  }

  // ENHANCED: Validate featured image with requirements
  const featuredImageResult = validateAsset(fields.featuredImage, 'featuredImage', false);
  allWarnings.push(...featuredImageResult.warnings);

  if (!featuredImageResult.data && imagesResult.data && imagesResult.data.length > 0) {
    allWarnings.push(
      'No featured image specified - will use first image from gallery. Consider setting an explicit featured image for better control.'
    );
  }

  if (featuredImageResult.data) {
    const featuredImage = featuredImageResult.data;
    if (featuredImage.fields && featuredImage.fields.file) {
      const file = featuredImage.fields.file;

      // Validate featured image is actually an image
      if (file.contentType && !file.contentType.startsWith('image/')) {
        allErrors.push(`Featured image must be an image file, got ${file.contentType}`);
      }

      // Check featured image dimensions
      const details = file.details;
      if (details && details.image) {
        const { width, height } = details.image;
        const aspectRatio = width / height;

        // Recommend landscape orientation for featured images
        if (aspectRatio < 1) {
          allWarnings.push(
            `Featured image is portrait orientation (${width}x${height}) - landscape works better for card displays`
          );
        }

        // Check minimum dimensions for featured image
        if (width < 1200 || height < 800) {
          allWarnings.push(
            `Featured image resolution (${width}x${height}) is below recommended 1200x800 for optimal display quality`
          );
        }
      }
    }
  }

  // Validate optional fields
  const detailedDescriptionResult = validateRichText(fields.detailedDescription, 'detailedDescription', false);
  allWarnings.push(...detailedDescriptionResult.warnings);

  // ENHANCED: Validate tags with recommendations
  const tagsResult = validateArray(fields.tags, 'tags', []);
  allWarnings.push(...tagsResult.warnings);

  if (tagsResult.data) {
    const tagCount = tagsResult.data.length;

    if (tagCount === 0) {
      allWarnings.push('No tags specified - tags help with content discovery and filtering');
    }

    if (tagCount > 10) {
      allWarnings.push(`Portfolio has ${tagCount} tags - consider limiting to 5-10 most relevant tags`);
    }

    // Check for empty or invalid tags
    tagsResult.data.forEach((tag: any, index: number) => {
      if (typeof tag !== 'string') {
        allErrors.push(`tags[${index}] must be a string, got ${typeof tag}`);
      } else if (tag.trim() === '') {
        allWarnings.push(`tags[${index}] is empty or whitespace only`);
      } else if (tag.length > 50) {
        allWarnings.push(`tags[${index}] is very long (${tag.length} chars) - consider shortening`);
      }
    });
  }

  const featuredResult = validateBoolean(fields.featured, 'featured', false);
  allWarnings.push(...featuredResult.warnings);

  // ENHANCED: Display order validation with range checking
  const displayOrderResult = validateNumber(fields.displayOrder, 'displayOrder', 0);
  allWarnings.push(...displayOrderResult.warnings);

  if (displayOrderResult.data !== undefined) {
    const order = displayOrderResult.data;
    if (order < 0) {
      allWarnings.push(`Display order is negative (${order}) - this may cause unexpected sorting`);
    }
    if (order > 1000) {
      allWarnings.push(`Display order is very high (${order}) - consider using smaller values for easier management`);
    }
  }

  // ENHANCED: Validate createdDate if present
  if (fields.createdDate) {
    const dateResult = validateOptionalString(fields.createdDate, 'createdDate', '');
    allWarnings.push(...dateResult.warnings);

    if (dateResult.data) {
      const createdDate = new Date(dateResult.data);
      if (isNaN(createdDate.getTime())) {
        allErrors.push(`createdDate "${dateResult.data}" is not a valid date`);
      } else {
        // Check if date is in the future
        const now = new Date();
        if (createdDate > now) {
          allWarnings.push(`createdDate is in the future (${createdDate.toISOString()}) - verify this is intentional`);
        }

        // Check if date is very old (before 2000)
        if (createdDate.getFullYear() < 2000) {
          allWarnings.push(`createdDate is before year 2000 (${createdDate.toISOString()}) - verify this is correct`);
        }
      }
    }
  }

  // ENHANCED: Validate SEO metadata if present
  if (fields.seo && typeof fields.seo === 'object') {
    const seo = fields.seo;

    if (seo.metaTitle) {
      if (typeof seo.metaTitle !== 'string') {
        allErrors.push('seo.metaTitle must be a string');
      } else if (seo.metaTitle.length > 60) {
        allWarnings.push(`seo.metaTitle is ${seo.metaTitle.length} chars - recommend under 60 for optimal SEO`);
      }
    }

    if (seo.metaDescription) {
      if (typeof seo.metaDescription !== 'string') {
        allErrors.push('seo.metaDescription must be a string');
      } else if (seo.metaDescription.length > 160) {
        allWarnings.push(`seo.metaDescription is ${seo.metaDescription.length} chars - recommend 150-160 for optimal SEO`);
      } else if (seo.metaDescription.length < 120) {
        allWarnings.push(`seo.metaDescription is short (${seo.metaDescription.length} chars) - recommend 150-160 for better SEO`);
      }
    }

    if (seo.keywords && Array.isArray(seo.keywords)) {
      if (seo.keywords.length === 0) {
        allWarnings.push('seo.keywords array is empty - add relevant keywords for SEO');
      } else if (seo.keywords.length > 10) {
        allWarnings.push(`seo.keywords has ${seo.keywords.length} keywords - recommend 5-10 most relevant`);
      }
    }
  }

  // Check for critical errors
  const isValid = allErrors.length === 0;

  if (logWarnings && allWarnings.length > 0) {
    console.warn(`⚠️ Portfolio entry validation warnings for "${fields.title || entry.sys.id}":`, allWarnings);
  }

  if (throwOnError && !isValid) {
    throw new Error(`Portfolio entry validation failed: ${allErrors.join(', ')}`);
  }

  return {
    isValid,
    errors: allErrors,
    warnings: allWarnings,
    data: isValid ? entry : undefined
  };
}

/**
 * Validate about page content type
 * 
 * @function validateAboutPage
 * @param {Entry<any>} entry - Contentful about page entry
 * @param {ValidationOptions} options - Validation options
 * @returns {ValidationResult} Validation result with sanitized data
 */
export function validateAboutPage(
  entry: Entry<any>,
  options: ValidationOptions = {}
): ValidationResult {
  const {
    throwOnError = false,
    logWarnings = import.meta?.env?.DEV,
    contentType = 'aboutPage'
  } = options;

  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const fields = entry.fields;

  if (logWarnings) {
    console.log(`🔍 Validating ${contentType} entry: ${entry.sys.id}`);
  }

  // Validate required fields
  const titleResult = validateRequiredString(fields.title, 'title');
  allErrors.push(...titleResult.errors);
  allWarnings.push(...titleResult.warnings);

  const introResult = validateRichText(fields.intro, 'intro', true);
  allErrors.push(...introResult.errors);
  allWarnings.push(...introResult.warnings);

  const isValid = allErrors.length === 0;

  if (logWarnings && allWarnings.length > 0) {
    console.warn(`⚠️ About page validation warnings:`, allWarnings);
  }

  if (throwOnError && !isValid) {
    throw new Error(`About page validation failed: ${allErrors.join(', ')}`);
  }

  return {
    isValid,
    errors: allErrors,
    warnings: allWarnings,
    data: isValid ? entry : undefined
  };
}

/**
 * Validate homepage content type
 * 
 * @function validateHomepage
 * @param {Entry<any>} entry - Contentful homepage entry
 * @param {ValidationOptions} options - Validation options
 * @returns {ValidationResult} Validation result with sanitized data
 */
export function validateHomepage(
  entry: Entry<any>,
  options: ValidationOptions = {}
): ValidationResult {
  const {
    throwOnError = false,
    logWarnings = import.meta?.env?.DEV,
    contentType = 'homepage'
  } = options;

  const allErrors: string[] = [];
  const allWarnings: string[] = [];
  const fields = entry.fields;

  if (logWarnings) {
    console.log(`🔍 Validating ${contentType} entry: ${entry.sys.id}`);
  }

  // Validate hero section
  if (fields.hero) {
    const hero = fields.hero;
    const heroTitleResult = validateRequiredString(hero.title, 'hero.title');
    allErrors.push(...heroTitleResult.errors);
    allWarnings.push(...heroTitleResult.warnings);
  } else {
    allErrors.push('Homepage hero section is missing');
  }

  const isValid = allErrors.length === 0;

  if (logWarnings && allWarnings.length > 0) {
    console.warn(`⚠️ Homepage validation warnings:`, allWarnings);
  }

  if (throwOnError && !isValid) {
    throw new Error(`Homepage validation failed: ${allErrors.join(', ')}`);
  }

  return {
    isValid,
    errors: allErrors,
    warnings: allWarnings,
    data: isValid ? entry : undefined
  };
}

/**
 * Batch validate multiple entries
 * 
 * @function batchValidate
 * @param {Entry<any>[]} entries - Array of entries to validate
 * @param {Function} validator - Validation function to use
 * @returns {Object} Batch validation results
 */
export function batchValidate(
  entries: Entry<any>[],
  validator: (entry: Entry<any>, options?: ValidationOptions) => ValidationResult
): {
  valid: Entry<any>[];
  invalid: Entry<any>[];
  withWarnings: Entry<any>[];
  results: ValidationResult[];
} {
  const valid: Entry<any>[] = [];
  const invalid: Entry<any>[] = [];
  const withWarnings: Entry<any>[] = [];
  const results: ValidationResult[] = [];

  entries.forEach(entry => {
    const result = validator(entry, { logWarnings: false });
    results.push(result);

    if (result.isValid) {
      valid.push(entry);
      if (result.warnings.length > 0) {
        withWarnings.push(entry);
      }
    } else {
      invalid.push(entry);
    }
  });

  return { valid, invalid, withWarnings, results };
}

/**
 * Type guard to check if entry is a blog post
 * 
 * @function isBlogPost
 * @param {Entry<any>} entry - Entry to check
 * @returns {boolean} Whether entry is a blog post
 */
export function isBlogPost(entry: Entry<any>): boolean {
  return entry.sys?.contentType?.sys?.id === 'blogPost';
}

/**
 * Type guard to check if entry is a portfolio entry
 * 
 * @function isPortfolioEntry
 * @param {Entry<any>} entry - Entry to check
 * @returns {boolean} Whether entry is a portfolio entry
 */
export function isPortfolioEntry(entry: Entry<any>): boolean {
  return entry.sys?.contentType?.sys?.id === 'portfolioEntry';
}

/**
 * Type guard to check if entry is an about page
 * 
 * @function isAboutPage
 * @param {Entry<any>} entry - Entry to check
 * @returns {boolean} Whether entry is an about page
 */
export function isAboutPage(entry: Entry<any>): boolean {
  return entry.sys?.contentType?.sys?.id === 'aboutPage';
}

/**
 * Type guard to check if entry is a homepage
 * 
 * @function isHomepage
 * @param {Entry<any>} entry - Entry to check
 * @returns {boolean} Whether entry is a homepage
 */
export function isHomepage(entry: Entry<any>): boolean {
  return entry.sys?.contentType?.sys?.id === 'homepage';
}
