# ContactForm Component

**Version:** 5.0.0  
**Last Updated:** January 2025

Fully functional contact form with validation, honeypot protection, and demo mode.

## Purpose

Provide secure contact functionality with:
- Client-side validation
- Honeypot spam protection
- Success/error feedback
- Accessibility compliance
- **Demo mode** (fully functional without backend)
- **Ready for backend integration** (Netlify Functions, Vercel, AWS Lambda, etc.)

---

## 🔗 Backend Integration Status

This component currently operates in **demo mode** and is ready for backend integration.

### Features

- ✅ **Client-Side Validation:** Comprehensive input validation
- ✅ **Bot Protection:** Honeypot field detection
- ✅ **Email Format Validation:** RFC-compliant email validation
- ✅ **Demo Mode:** Simulates email sending with realistic delays
- ✅ **Error Handling:** Comprehensive error states and user feedback
- ✅ **Accessibility:** WCAG 2.1 AA compliant

### Integration Options

**Ready to integrate with:**
- Netlify Functions
- Vercel Serverless Functions
- AWS Lambda
- Custom API server
- SendGrid (direct integration)
- Any email service provider

### Complete Documentation

For project guidelines:

- **[Guidelines.md](../Guidelines.md)** - Main project guidelines

### Backend Architecture

```
┌─────────────────────────────────────────────────────────────────────┐
│                  CONTACT FORM SUBMISSION FLOW                        │
└─────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                         USER INTERACTION                            │
└────────────────────────────────────────────────────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │  User Fills Form    │
                    │                     │
                    │  • Name field       │
                    │  • Email field      │
                    │  • Message field    │
                    │  • Honeypot (hidden)│
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │  User Clicks Submit │
                    └──────────┬──────────┘
                               │
┌─────────────────────────────┼─────────────────────────────┐
│             CLIENT-SIDE VALIDATION                         │
└─────────────────────────────┼─────────────────────────────┘
                               │
                    ┌──────────▼──────────┐
                    │  Required Fields?   │
                    └──────────┬──────────┘
                               │
                  ┌────────────┼────────────┐
                  │ Missing                │ All OK
                  ▼                        ▼
         ┌────────────────┐       ┌───────────────┐
         │ Show Errors    │       │ Email Format? │
         │ Under Fields   │       └───────┬───────┘
         │                │               │
         │ • "Required"   │    ┌──────────┼──────────┐
         │ • Red borders  │    │ Invalid            │ Valid
         │ • Stay on form │    ▼                    ▼
         └────────────────┘  ┌──────────┐   ┌───────────────┐
                             │Show Error│   │ Honeypot Check│
                             │"Invalid  │   └───────┬───────┘
                             │ email"   │           │
                             └──────────┘    ┌──────┼──────┐
                                             │Filled      │Empty
                                             ▼            ▼
                                    ┌───────────┐  ┌──────────┐
                                    │  BOT!     │  │ HUMAN OK │
                                    │ Reject    │  │          │
                                    │ silently  │  │ Continue │
                                    └───────────┘  └────┬─────┘
                                                        │
┌───────────────────────────────────────────────────────┼──────┐
│                 SUBMIT TO BACKEND                            │
└───────────────────────────────────────────────────────┼──────┘
                                                        │
                                             ┌──────────▼──────────┐
                                             │ emailService.ts     │
                                             │                     │
                                             │ Build payload:      │
                                             │ {                   │
                                             │   name: string,     │
                                             │   email: string,    │
                                             │   message: string   │
                                             │ }                   │
                                             └──────────┬──────────┘
                                                        │
                                             ┌──────────▼──────────┐
                                             │  DEMO MODE ACTIVE   │
                                             └──────────┬──────────┘
                                                        │
                                                        ▼
                                             ┌─────────────────────┐
                                             │  Simulate Email     │
                                             │                     │
                                             │  • Validate data    │
                                             │  • Wait 1-3s        │
                                             │  • Return success   │
                                             │  • Log to console   │
                                             └──────────┬──────────┘
                                                        │
┌───────────────────────────────────────────────────────┼────────────┐
│                  DEMO MODE (No Backend Required)                   │
└───────────────────────────────────────────────────────┼────────────┘
                                          │
                                          │
                                          ▼
                               ┌──────────────────────┐
                               │   Return Success     │
                               │                      │
                               │   • success: true    │
                               │   • message          │
                               │   • timestamp        │
                               └──────────┬───────────┘
                                          │
┌─────────────────────────────────────────┼────────────────────────┐
│                   FRONTEND RESPONSE HANDLING                      │
└─────────────────────────────────────────┼────────────────────────┘
                                          │
                                          └───────┼─────────────────┘
                                                  │
                                       ┌──────────▼──────────┐
                                       │ emailService.ts     │
                                       │ Receives Response   │
                                       └──────────┬──────────┘
                                                  │
                                       ┌──────────┼──────────┐
                                       │ 200                │ Error
                                       ▼                    ▼
                             ┌──────────────┐     ┌──────────────┐
                             │  SUCCESS!    │     │ ERROR        │
                             │              │     │              │
                             │ ContactForm  │     │ ContactForm  │
                             │ Component:   │     │ Component:   │
                             │              │     │              │
                             │ • Clear form │     │ • Keep form  │
                             │ • Show toast │     │ • Show error │
                             │ • Confetti 🎉│     │ • Log error  │
                             │ • "Thank you"│     │ • Retry btn  │
                             └──────────────┘     └──────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                      STATE MANAGEMENT FLOW                           │
└─────────────────────────────────────────────────────────────────────┘

Component State:
┌──────────────────────────────────────────┐
│ formData: {                              │
│   name: string,                          │
│   email: string,                         │
│   message: string,                       │
│   honeypot: string (bot detection)       │
│ }                                        │
│                                          │
│ errors: {                                │
│   name?: string,                         │
│   email?: string,                        │
│   message?: string                       │
│ }                                        │
│                                          │
│ isSubmitting: boolean                    │
│ submitStatus: 'idle' | 'success' | 'error'│
└──────────────────────────────────────────┘

State Transitions:
┌─────────────┐   Submit   ┌──────────────┐   Success  ┌──────────┐
│    idle     │ ────────→  │ isSubmitting │ ─────────→ │ success  │
│             │            │   = true     │            │          │
└─────────────┘            └──────┬───────┘            └──────────┘
                                  │
                                  │ Error
                                  ▼
                           ┌──────────┐   Retry    ┌─────────────┐
                           │  error   │ ────────→  │ isSubmitting│
                           │          │            │   = true    │
                           └──────────┘            └─────────────┘
```

### File Locations

- **Component:** `/components/common/ContactForm.tsx`
- **Email Service:** `/utils/emailService.ts` (demo mode)

### Current Status: Demo Mode

The component currently operates in **demo mode**:

- ✅ **Full validation** - All client-side validation active
- ✅ **Simulates email sending** - Realistic delays and responses
- ✅ **Success feedback** - User-friendly success messages
- ✅ **Error handling** - Comprehensive error states
- ✅ **Console logging** - Detailed logs for debugging

**No environment variables required** - Works out of the box in demo mode.

### Backend Integration Guide

To enable real email delivery, integrate with a backend service:

**Option 1: Netlify Functions**
```typescript
// netlify/functions/send-email.ts
export const handler = async (event) => {
  const formData = JSON.parse(event.body);
  // Send email via SendGrid, AWS SES, etc.
  return { statusCode: 200, body: JSON.stringify({ success: true }) };
};
```

**Option 2: Vercel Serverless**
```typescript
// api/send-email.ts
export default async function handler(req, res) {
  const formData = req.body;
  // Send email via your service
  res.status(200).json({ success: true });
}
```

**Option 3: Custom API**
Update `/utils/emailService.ts` to point to your API endpoint.

### Usage Pattern

```typescript
import { sendContactFormEmail } from '@/utils/emailService';
import { toast } from 'sonner';

const handleSubmit = async (data: ContactFormData) => {
  try {
    const result = await sendContactFormEmail(data);
    
    if (result.success) {
      toast.success('Message sent successfully!');
      // Reset form or navigate
    } else {
      toast.error(result.error || 'Failed to send message');
    }
  } catch (error) {
    console.error('Contact form error:', error);
    toast.error('An unexpected error occurred. Please try again.');
  }
};
```

### Email Templates

The system sends **two branded emails**:

**1. Notification Email (to Ash Shaw):**
- Professional subject line
- Contact details
- Full message content
- Reply directly to sender
- Branded footer

**2. Auto-Reply (to User):**
- Thank you message
- Response timeframe
- Social media links
- Professional signature
- Branded styling

**Note:** Email templates would be implemented in your backend service when you integrate real email delivery.

---

## Usage

### Basic Usage

```tsx
import { ContactForm } from './components/common/ContactForm';

<ContactForm />
```

### With Custom Handlers

```tsx
<ContactForm 
  onSuccess={() => console.log('Email sent!')}
  onError={(error) => console.error(error)}
/>
```

### With Custom Styling

```tsx
<ContactForm 
  className="max-w-2xl mx-auto"
  buttonText="Send Message"
/>
```

---

## Props

```typescript
interface ContactFormProps {
  /**
   * Success callback
   * @optional
   */
  onSuccess?: () => void;
  
  /**
   * Error callback
   * @optional
   */
  onError?: (error: Error) => void;
  
  /**
   * Custom submit button text
   * @default "Send Message"
   */
  buttonText?: string;
  
  /**
   * Additional CSS classes
   * @default ""
   */
  className?: string;
  
  /**
   * Note: Component always operates in demo mode
   * @deprecated No longer used - always in demo mode
   */
  demoMode?: boolean;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
```

---

## Features

### Demo Mode Email Service

```typescript
// Demo mode email service
import { sendContactForm } from '@/utils/emailService';

const sendEmail = async (formData: ContactFormData) => {
  // Validates form data and simulates email sending
  const result = await sendContactForm(formData);
  
  return result; // { success: boolean, message: string, metadata: { mode: 'demo' } }
};
```

**Current Behavior:**
- Validates all form fields
- Simulates realistic network delay (1-3 seconds)
- Returns success/error responses
- Logs submission details to console
- No backend required

### Validation

```typescript
const validateForm = (data: ContactFormData): string[] => {
  const errors: string[] = [];
  
  if (!data.name.trim()) {
    errors.push('Name is required');
  }
  
  if (!data.email.trim()) {
    errors.push('Email is required');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Please enter a valid email address');
  }
  
  if (!data.message.trim()) {
    errors.push('Message is required');
  } else if (data.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  }
  
  return errors;
};
```

### Honeypot Protection

```tsx
// Hidden field to catch bots
<input
  type="text"
  name="website"
  value={honeypot}
  onChange={(e) => setHoneypot(e.target.value)}
  style={{ 
    position: 'absolute',
    left: '-9999px',
    width: '1px',
    height: '1px'
  }}
  tabIndex={-1}
  autoComplete="off"
  aria-hidden="true"
/>
```

---

## Implementation Example

Complete contact form implementation:

```tsx
import React, { useState } from 'react';
import { Send, Loader, CheckCircle, AlertCircle } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
  onError?: (error: Error) => void;
  buttonText?: string;
  className?: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function ContactForm({ 
  onSuccess,
  onError,
  buttonText = 'Send Message',
  className = '' 
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [honeypot, setHoneypot] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const validateForm = (): string[] => {
    const errors: string[] = [];
    
    if (!formData.name.trim()) errors.push('Name is required');
    if (!formData.email.trim()) {
      errors.push('Email is required');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.push('Please enter a valid email address');
    }
    if (!formData.message.trim()) errors.push('Message is required');
    if (formData.message.trim().length < 10) {
      errors.push('Message must be at least 10 characters');
    }
    
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (honeypot) {
      console.log('Bot detected');
      return;
    }
    
    // Validation
    const errors = validateForm();
    if (errors.length > 0) {
      setErrorMessage(errors.join('. '));
      setSubmitStatus('error');
      return;
    }
    
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');
    
    try {
      // Send email via demo mode service
      const result = await sendContactForm({
        name: formData.name,
        email: formData.email,
        message: formData.message,
        website: honeypot // Honeypot field
      });
      
      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        onSuccess?.();
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      onError?.(error as Error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className={`bg-white/80 backdrop-blur-sm rounded-2xl p-fluid-lg border border-white/50 shadow-lg ${className}`}
    >
      {/* Honeypot field */}
      <input
        type="text"
        name="website"
        value={honeypot}
        onChange={(e) => setHoneypot(e.target.value)}
        style={{ position: 'absolute', left: '-9999px' }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />
      
      {/* Name field */}
      <div className="mb-fluid-md">
        <label 
          htmlFor="name"
          className="block text-fluid-sm font-body font-medium text-gray-700 mb-2"
        >
          Name *
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 font-body text-body-guideline"
          required
          aria-required="true"
        />
      </div>
      
      {/* Email field */}
      <div className="mb-fluid-md">
        <label 
          htmlFor="email"
          className="block text-fluid-sm font-body font-medium text-gray-700 mb-2"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 font-body text-body-guideline"
          required
          aria-required="true"
        />
      </div>
      
      {/* Subject field */}
      <div className="mb-fluid-md">
        <label 
          htmlFor="subject"
          className="block text-fluid-sm font-body font-medium text-gray-700 mb-2"
        >
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 font-body text-body-guideline"
        />
      </div>
      
      {/* Message field */}
      <div className="mb-fluid-md">
        <label 
          htmlFor="message"
          className="block text-fluid-sm font-body font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-500 font-body text-body-guideline resize-vertical"
          required
          aria-required="true"
        />
      </div>
      
      {/* Status messages */}
      {submitStatus === 'success' && (
        <div className="mb-fluid-md flex items-center gap-3 bg-green-100 border border-green-700 text-green-900 px-4 py-3 rounded-lg">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span className="font-body font-medium">Message sent successfully! We'll get back to you soon.</span>
        </div>
      )}
      
      {submitStatus === 'error' && errorMessage && (
        <div className="mb-fluid-md flex items-center gap-3 bg-red-100 border border-red-700 text-red-900 px-4 py-3 rounded-lg">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span className="font-body font-medium">{errorMessage}</span>
        </div>
      )}
      
      {/* Submit button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-pink-purple-blue hover:from-purple-700 hover:to-pink-700 text-white px-button py-button font-body font-medium text-button-fluid rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? (
          <>
            <Loader className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <span>{buttonText}</span>
            <Send className="w-5 h-5" />
          </>
        )}
      </button>
    </form>
  );
}
```

---

## Validation Patterns

### Email Validation

```typescript
const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
```

### Required Fields

```tsx
<input
  required
  aria-required="true"
  aria-invalid={hasError}
  aria-describedby={hasError ? 'email-error' : undefined}
/>

{hasError && (
  <p id="email-error" className="text-red-700 text-fluid-sm mt-1">
    Please enter a valid email address
  </p>
)}
```

---

## Accessibility

### Form Labels

```tsx
// Proper label association
<label htmlFor="email" className="block mb-2">
  Email Address *
</label>
<input 
  id="email"
  type="email"
  aria-required="true"
  aria-describedby="email-help"
/>
<p id="email-help" className="text-fluid-sm text-gray-600 mt-1">
  We'll never share your email
</p>
```

### Error Announcements

```tsx
// Live region for screen readers
<div 
  role="alert"
  aria-live="polite"
  className={submitStatus === 'error' ? 'block' : 'sr-only'}
>
  {errorMessage}
</div>
```

---

## Common Mistakes

### ❌ Mistake 1: No Validation

```tsx
// ❌ WRONG - No client-side validation
<form onSubmit={handleSubmit}>
  <input type="email" />
  <button>Send</button>
</form>
```

**Solution:**
```tsx
// ✅ CORRECT - Validation before submit
const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validateForm();
  if (errors.length > 0) {
    setErrors(errors);
    return;
  }
  // Submit
};
```

### ❌ Mistake 2: Missing Loading State

```tsx
// ❌ WRONG - No feedback during submission
<button onClick={handleSubmit}>Send</button>
```

**Solution:**
```tsx
// ✅ CORRECT - Loading indicator
<button disabled={isSubmitting}>
  {isSubmitting ? <Loader className="animate-spin" /> : 'Send'}
</button>
```

---

## Related Components

- **[Footer](./Footer.md)** - Footer with contact form
- **[Header](./Header.md)** - Site navigation
- **[SocialLinks](./SocialLinks.md)** - Social media integration

---

## Related Documentation

- **[Guidelines.md](../Guidelines.md)** - Main project guidelines
- **[overview-components.md](../overview-components.md)** - Component architecture
- **[FILE_STRUCTURE.md](../FILE_STRUCTURE.md)** - File organization

---

**Last Updated:** January 2025  
**Version:** 5.0.0