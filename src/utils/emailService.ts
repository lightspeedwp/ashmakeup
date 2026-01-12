/**
 * @fileoverview Contact form email service for Ash Shaw Makeup Portfolio
 * Professional contact form handling with comprehensive validation and error handling.
 * 
 * Core Features:
 * - Demo mode for development and testing
 * - Comprehensive validation with bot detection via honeypot fields
 * - Enhanced error handling with user-friendly feedback messages
 * 
 * NOTE: Backend email delivery has been removed. This service now operates in demo mode only.
 * To enable real email delivery, integrate with a backend service like:
 * - Netlify Functions
 * - Vercel Serverless Functions
 * - AWS Lambda
 * - Your own API server
 * 
 * Security Features:
 * - Client-side input validation and sanitization
 * - Honeypot field implementation for bot detection
 * - Email format validation with comprehensive regex patterns
 * 
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0
 * @since 1.0.0 - Initial EmailJS implementation
 * @since 2.0.0 - Migrated to SendGrid for better deliverability
 * @since 2.1.0 - Added honeypot bot detection and enhanced validation
 * @since 2.2.0 - Comprehensive error handling and service health monitoring
 * @since 3.0.0 - Removed backend dependency, demo mode only
 * @lastModified 2025-01-19
 */

/**
 * Contact form data interface with comprehensive field definitions
 * 
 * @interface ContactFormData
 * @description Defines the structure for contact form submission data with validation requirements
 */
export interface ContactFormData {
  /** 
   * User's full name for personalization and contact identification
   * @minLength 1
   * @maxLength 100
   * @example "Jane Smith"
   */
  name: string;
  
  /** 
   * User's email address for response delivery and auto-reply confirmation
   * @format email
   * @maxLength 150
   * @example "jane.smith@example.com"
   */
  email: string;
  
  /** 
   * User's message content describing their inquiry or needs
   * @minLength 1
   * @maxLength 2000
   * @example "Hi Ash, I'd love to book a consultation for festival makeup..."
   */
  message: string;
  
  /** 
   * Honeypot field for bot detection - should always remain empty for legitimate users
   * @default ""
   * @hidden true
   * @description This field is hidden from users and used for spam detection
   */
  website?: string;
}

/**
 * Email service response interface with detailed status information
 * 
 * @interface EmailServiceResponse
 * @description Provides structured response data from email service operations
 */
export interface EmailServiceResponse {
  /** 
   * Indicates whether the email operation completed successfully
   * @example true
   */
  success: boolean;
  
  /** 
   * User-friendly message describing the result of the operation
   * @example "Message sent successfully! You should receive a confirmation email shortly."
   */
  message: string;
  
  /** 
   * Technical error details for debugging and logging purposes
   * @optional
   * @example "SendGrid API error: Invalid email format"
   */
  error?: string;
  
  /** 
   * Additional metadata about the email operation
   * @optional
   */
  metadata?: {
    /** Timestamp of the operation */
    timestamp?: string;
    /** Service mode used (production/demo) */
    mode?: 'production' | 'demo';
    /** Delivery status tracking */
    deliveryStatus?: 'sent' | 'queued' | 'failed';
  };
}

/**
 * Send contact form email - Currently operates in demo mode only
 * 
 * NOTE: Email backend has been removed. This function now always uses demo mode.
 * To enable real email delivery, integrate with a backend service like:
 * - Netlify Functions
 * - Vercel Serverless Functions  
 * - AWS Lambda
 * - Your own API server
 * 
 * @param {ContactFormData} formData - The contact form data
 * @returns {Promise<EmailServiceResponse>} Promise resolving to demo response
 * 
 * @example Basic Usage
 * ```typescript
 * const result = await sendContactForm({
 *   name: "Jane Smith",
 *   email: "jane.smith@example.com", 
 *   message: "Hi Ash! I'd love to book a festival makeup consultation."
 * });
 * 
 * if (result.success) {
 *   console.log('✅ Form submitted:', result.message);
 *   showSuccessNotification(result.message);
 * } else {
 *   console.error('❌ Submission failed:', result.error);
 *   showErrorNotification(result.message);
 * }
 * ```
 */
export const sendContactForm = async (formData: ContactFormData): Promise<EmailServiceResponse> => {
  console.info('📧 Contact form submission - using demo mode (email backend removed)');
  
  // Always use demo mode since backend has been removed
  return sendContactFormDemo(formData);
};

/**
 * Demo mode email service for development and testing environments
 * 
 * Provides a fully functional development experience without requiring backend configuration.
 * This function simulates the complete email sending process with realistic delays and
 * comprehensive logging for development workflow optimization.
 * 
 * Features:
 * - Realistic network delay simulation (1-3 seconds)
 * - Comprehensive form data validation matching production service
 * - Detailed console logging for development debugging
 * - Honeypot field monitoring for bot detection testing
 * - Error simulation for testing error handling workflows
 * - Success rate simulation based on configuration
 * 
 * @param {ContactFormData} formData - The contact form data for demo processing
 * @returns {Promise<EmailServiceResponse>} Promise resolving to simulated success response
 * 
 * @example Basic Demo Usage
 * ```typescript
 * const result = await sendContactFormDemo({
 *   name: "Test User",
 *   email: "test@example.com",
 *   message: "This is a test message for development"
 * });
 * 
 * console.log('Demo result:', result);
 * // Expected: { success: true, message: "...", metadata: { mode: "demo" } }
 * ```
 * 
 * @example Demo with Error Simulation
 * ```typescript
 * // Set error simulation rate (10% chance of simulated error)
 * const DEMO_ERROR_RATE = 0.1;
 * 
 * const result = await sendContactFormDemo(formData);
 * 
 * if (result.success) {
 *   // Handle demo success
 *   console.log('Demo submission successful');
 * } else {
 *   // Handle simulated error (for testing error handling)
 *   console.error('Demo error simulation:', result.error);
 * }
 * ```
 * 
 * @development
 * - Perfect for local development without backend setup
 * - Enables complete UI/UX testing of form submission flows
 * - Supports error scenario testing for robust error handling
 * - Provides realistic timing for loading state testing
 */
export const sendContactFormDemo = async (formData: ContactFormData): Promise<EmailServiceResponse> => {
  const startTime = Date.now();
  
  console.log('🎯 Contact form submitted successfully (DEMO MODE):', {
    sender: formData.name,
    email: formData.email,
    messageLength: `${formData.message.length} characters`,
    preview: formData.message.substring(0, 50) + (formData.message.length > 50 ? '...' : ''),
    botDetection: formData.website ? 'Honeypot triggered' : 'Human verified',
    timestamp: new Date().toISOString()
  });

  // Validate form data even in demo mode for consistent behavior
  const validationResult = validateFormData(formData);
  if (!validationResult.isValid) {
    console.warn('📋 Demo mode validation failed:', validationResult.errors);
    return {
      success: false,
      message: validationResult.message,
      error: 'Demo validation failed',
      metadata: {
        timestamp: new Date().toISOString(),
        mode: 'demo',
        deliveryStatus: 'failed'
      }
    };
  }

  // Check honeypot field for bot detection simulation
  if (formData.website && formData.website.trim().length > 0) {
    console.warn('🤖 Demo mode: Honeypot field detected (bot simulation)');
    // In demo mode, we'll still "succeed" but log the detection
  }

  // Simulate realistic network delay (1-3 seconds)
  const simulatedDelay = Math.random() * 2000 + 1000; // 1000-3000ms
  await new Promise(resolve => setTimeout(resolve, simulatedDelay));

  // Optional: Simulate occasional errors for testing error handling (5% chance)
  const DEMO_ERROR_RATE = 0.05;
  if (Math.random() < DEMO_ERROR_RATE) {
    const responseTime = Date.now() - startTime;
    console.warn('🎭 Demo mode: Simulating error for testing purposes');
    
    return {
      success: false,
      message: 'Demo error simulation: Network timeout. Please try again.',
      error: 'Demo simulated error for testing',
      metadata: {
        timestamp: new Date().toISOString(),
        mode: 'demo',
        deliveryStatus: 'failed'
      }
    };
  }

  const responseTime = Date.now() - startTime;
  
  console.log('✅ Demo mode contact form completed successfully:', {
    responseTime: `${responseTime}ms`,
    simulatedNetworkDelay: `${simulatedDelay}ms`,
    result: 'Perfect simulation of email sending process',
    timestamp: new Date().toISOString()
  });
  
  return {
    success: true,
    message: 'Message received! Thank you for contacting Ash Shaw. (Demo Mode: No actual email sent)',
    metadata: {
      timestamp: new Date().toISOString(),
      mode: 'demo',
      deliveryStatus: 'sent'
    }
  };
};

/**
 * Validates contact form data with comprehensive rules
 * 
 * @param {ContactFormData} formData - Form data to validate
 * @returns {ValidationResult} Validation result with detailed feedback
 */
function validateFormData(formData: ContactFormData): {
  isValid: boolean;
  message: string;
  errors: string[];
} {
  const errors: string[] = [];

  // Required field validation
  if (!formData.name?.trim()) {
    errors.push('Name is required');
  } else if (formData.name.trim().length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  if (!formData.email?.trim()) {
    errors.push('Email is required');
  } else {
    // Enhanced email validation
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.push('Please enter a valid email address');
    } else if (formData.email.trim().length > 150) {
      errors.push('Email address is too long');
    }
  }

  if (!formData.message?.trim()) {
    errors.push('Message is required');
  } else if (formData.message.trim().length > 2000) {
    errors.push('Message must be less than 2000 characters');
  } else if (formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters long');
  }

  const isValid = errors.length === 0;
  const message = isValid 
    ? 'Validation passed' 
    : errors.length === 1 
      ? errors[0] 
      : 'Please correct the following errors: ' + errors.join(', ');

  return { isValid, message, errors };
}

/**
 * Check if email service is available
 * 
 * NOTE: Always returns false since backend has been removed.
 * This function is kept for backward compatibility.
 * 
 * @returns {Promise<boolean>} Always returns false (demo mode only)
 */
export const validateEmailService = async (): Promise<boolean> => {
  console.info('📧 Email service check: Backend removed, using demo mode');
  return false;
};

/**
 * Initialize email service (for backward compatibility)
 * This function is no longer needed but kept for compatibility
 */
export const initializeEmailJS = () => {
  console.info('Email service initialized in demo mode (backend removed)');
};
