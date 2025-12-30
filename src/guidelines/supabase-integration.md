# Supabase Integration Guidelines

**Version:** 1.0.0  
**Last Updated:** January 2025  
**Status:** Production-Ready

---

## 📚 Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Setup & Configuration](#setup--configuration)
4. [Edge Functions](#edge-functions)
5. [Email Service](#email-service)
6. [Authentication](#authentication)
7. [API Endpoints](#api-endpoints)
8. [Error Handling](#error-handling)
9. [Security](#security)
10. [Best Practices](#best-practices)

---

## 🎯 Overview

### What is Supabase Integration?

Supabase provides the backend infrastructure for the Ash Shaw Portfolio, primarily handling:

- **Email Service** - SendGrid integration via Edge Functions
- **API Endpoints** - RESTful API for contact forms and other services
- **Authentication** - User authentication (if needed for admin features)
- **Real-time Data** - Future features like booking system

### Key Benefits

✅ **Serverless Functions** - No backend server management  
✅ **Edge Computing** - Fast global response times  
✅ **SendGrid Integration** - Professional email delivery  
✅ **Demo Mode** - Works without configuration for development  
✅ **Security** - Built-in CORS, validation, and honeypot protection  
✅ **Monitoring** - Built-in logging and error tracking

---

## 🏗️ Architecture

### System Design

```
Frontend (React)
        ↓
   Email Service (emailService.ts)
        ↓
 Supabase Edge Function (/functions/server)
        ↓
   SendGrid API
        ↓
   Email Delivery
```

### Component Breakdown

```
/supabase/
└── functions/
    └── server/
        ├── index.tsx          # Main Hono server with routes
        └── kv_store.tsx       # Key-value storage utilities
        
/utils/
├── emailService.ts            # Frontend email service
└── supabase/
    └── info.ts                # Supabase project configuration
```

---

## ⚙️ Setup & Configuration

### Environment Variables

**Required for Production:**
```bash
# Supabase Project Configuration
VITE_SUPABASE_URL=https://prvzveitduxglkwyfvxf.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here

# SendGrid Email Service (in Supabase dashboard)
SENDGRID_API_KEY=your_sendgrid_api_key_here
TO_EMAIL=ashley@ashshaw.makeup
FROM_EMAIL=noreply@ashshaw.makeup
```

**Development Mode (Demo):**
```bash
# Optional - works in demo mode without these
# SENDGRID_API_KEY not set = demo mode
```

### Supabase Project Setup

**1. Create Supabase Project**
```bash
# Project ID: prvzveitduxglkwyfvxf
# Region: Choose closest to users
# Database: PostgreSQL (auto-configured)
```

**2. Configure Edge Functions**
```bash
# Install Supabase CLI
npm install -g supabase

# Initialize Supabase
supabase init

# Deploy edge functions
supabase functions deploy server
```

**3. Set Environment Secrets**
```bash
# In Supabase Dashboard > Settings > Edge Functions
SENDGRID_API_KEY=your_key_here
TO_EMAIL=ashley@ashshaw.makeup
FROM_EMAIL=noreply@ashshaw.makeup
```

**4. Enable CORS**
```bash
# Automatically configured in server/index.tsx
# Allows all origins for development
# Restrict in production if needed
```

---

## 🔧 Edge Functions

### Main Server (`/supabase/functions/server/index.tsx`)

**Framework:** Hono (Fast, lightweight web framework)

**Features:**
- ✅ CORS middleware for cross-origin requests
- ✅ Logging middleware for debugging
- ✅ JSON and form-encoded body parsing
- ✅ Error handling with user-friendly messages
- ✅ Honeypot bot detection

**Core Structure:**
```typescript
import { Hono } from 'npm:hono';
import { cors } from 'npm:hono/cors';
import { logger } from 'npm:hono/logger';

const app = new Hono();

// Middleware
app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}));

app.use('*', logger(console.log));

// Routes
app.post('/contact', handleContactForm);
app.get('/health', handleHealthCheck);

// Export
Deno.serve(app.fetch);
```

---

### Available Routes

#### 1. Contact Form Endpoint

**Endpoint:** `POST /contact`

**Purpose:** Handle contact form submissions with dual email delivery

**Request Body:**
```typescript
{
  name: string;        // Required: Sender's name
  email: string;       // Required: Sender's email
  message: string;     // Required: Message content
  website?: string;    // Honeypot field (should be empty)
}
```

**Response (Success):**
```typescript
{
  success: true,
  message: "Message sent successfully! Check your inbox for a confirmation."
}
```

**Response (Error):**
```typescript
{
  success: false,
  error: "Error type",
  message: "User-friendly error message"
}
```

**Features:**
- ✅ Dual email system (notification + auto-reply)
- ✅ Honeypot bot detection
- ✅ Email format validation
- ✅ Required field validation
- ✅ XSS protection (input sanitization)
- ✅ Demo mode when SendGrid not configured

---

#### 2. Health Check Endpoint

**Endpoint:** `GET /health`

**Purpose:** Check server status and configuration

**Response:**
```typescript
{
  status: "healthy",
  timestamp: "2025-01-30T12:00:00.000Z",
  sendgrid: boolean,  // true if configured
  mode: "production" | "demo"
}
```

---

## 📧 Email Service

### SendGrid Integration

**Dual Email System:**

1. **Notification Email** (to Ash Shaw)
   ```
   To: ashley@ashshaw.makeup
   From: noreply@ashshaw.makeup
   Subject: New Contact Form Message from [Name]
   
   You have a new message from your website:
   
   From: [Name] ([Email])
   Message: [Message Content]
   ```

2. **Auto-Reply** (to sender)
   ```
   To: [Sender Email]
   From: noreply@ashshaw.makeup
   Subject: Thanks for reaching out!
   
   Hi [Name],
   
   Thanks for getting in touch! I've received your message...
   ```

### Email Templates

**Notification Template:**
```typescript
{
  personalizations: [{
    to: [{ email: TO_EMAIL }],
    subject: `New Contact Form Message from ${name}`
  }],
  from: { email: FROM_EMAIL },
  content: [{
    type: 'text/html',
    value: `
      <div style="font-family: Arial, sans-serif; max-width: 600px;">
        <h2>New Contact Form Message</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `
  }]
}
```

**Auto-Reply Template:**
```typescript
{
  personalizations: [{
    to: [{ email: senderEmail }],
    subject: "Thanks for reaching out!"
  }],
  from: { email: FROM_EMAIL },
  content: [{
    type: 'text/html',
    value: `
      <div style="font-family: Arial, sans-serif;">
        <h2>Hi ${name}!</h2>
        <p>Thanks for getting in touch...</p>
      </div>
    `
  }]
}
```

---

### Frontend Email Service (`/utils/emailService.ts`)

**Core Function:**

```typescript
import { projectId, publicAnonKey } from './supabase/info';

export async function sendContactFormEmail(data: ContactFormData): Promise<EmailResponse> {
  // 1. Validate inputs
  const validation = validateContactForm(data);
  if (!validation.isValid) {
    return { success: false, error: validation.errors };
  }
  
  // 2. Check honeypot
  if (data.website?.trim()) {
    return { success: true }; // Silent success (bot detected)
  }
  
  // 3. Send to Supabase Edge Function
  const response = await fetch(
    `https://${projectId}.supabase.co/functions/v1/server/contact`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${publicAnonKey}`
      },
      body: JSON.stringify(data)
    }
  );
  
  // 4. Handle response
  return await response.json();
}
```

**Usage in Components:**

```typescript
import { sendContactFormEmail } from '@/utils/emailService';

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const result = await sendContactFormEmail({
      name: formData.name,
      email: formData.email,
      message: formData.message,
      website: '' // Honeypot
    });
    
    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      console.error('Email error:', result.error);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
    </form>
  );
}
```

---

## 🔒 Security

### Security Features

**1. CORS Protection**
```typescript
app.use('*', cors({
  origin: '*', // Restrict in production if needed
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization']
}));
```

**2. Honeypot Bot Detection**
```typescript
// Hidden field in form (CSS: display: none)
<input type="text" name="website" style="display: none" />

// Server-side check
if (body.website?.trim()) {
  return { success: true }; // Bot detected, silent success
}
```

**3. Input Validation**
```typescript
// Email format validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  return { success: false, error: 'Invalid email' };
}

// Required fields
if (!name?.trim() || !email?.trim() || !message?.trim()) {
  return { success: false, error: 'Missing fields' };
}
```

**4. XSS Protection**
```typescript
// Input sanitization
const sanitizedMessage = message
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .trim();
```

**5. Rate Limiting** (Recommended for Production)
```typescript
// Add rate limiting middleware
import { rateLimiter } from 'npm:hono-rate-limiter';

app.use('/contact', rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // 5 requests per window
}));
```

---

## ⚠️ Error Handling

### Error Response Format

```typescript
interface ErrorResponse {
  success: false;
  error: string;        // Error type/code
  message: string;      // User-friendly message
}
```

### Common Errors

**1. Missing Required Fields**
```typescript
{
  success: false,
  error: 'Missing required fields',
  message: 'Please fill in all required fields.'
}
```

**2. Invalid Email Format**
```typescript
{
  success: false,
  error: 'Invalid email format',
  message: 'Please enter a valid email address.'
}
```

**3. SendGrid Not Configured**
```typescript
{
  success: false,
  error: 'Email service not configured',
  message: 'Email service is currently unavailable. Please try again later.'
}
```

**4. SendGrid API Error**
```typescript
{
  success: false,
  error: 'SendGrid API error',
  message: 'Failed to send email. Please try again.'
}
```

**5. Network Timeout**
```typescript
{
  success: false,
  error: 'Request timeout',
  message: 'Request timed out. Please check your connection and try again.'
}
```

---

### Error Handling in Components

```typescript
export function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = async (data: ContactFormData) => {
    try {
      setError(null);
      
      const result = await sendContactFormEmail(data);
      
      if (!result.success) {
        setError(result.message || 'Failed to send message');
        return;
      }
      
      // Success!
      showSuccessMessage();
    } catch (err) {
      setError('Network error. Please try again.');
      console.error('Contact form error:', err);
    }
  };
  
  return (
    <form onSubmit={handleSubmit}>
      {error && (
        <div className="error-message" role="alert">
          {error}
        </div>
      )}
      {/* Form fields */}
    </form>
  );
}
```

---

## ✅ Best Practices

### DO ✅

**1. Use Environment Variables**
```typescript
// ✅ GOOD
const apiKey = Deno.env.get('SENDGRID_API_KEY');
```

**2. Validate All Inputs**
```typescript
// ✅ GOOD
if (!name?.trim() || !email?.trim() || !message?.trim()) {
  return error;
}
```

**3. Implement Honeypot**
```typescript
// ✅ GOOD - Hidden field for bot detection
<input type="text" name="website" style="display: none" />
```

**4. Handle Demo Mode Gracefully**
```typescript
// ✅ GOOD
if (!sendGridApiKey) {
  console.log('Demo mode: Email would be sent to:', email);
  return { success: true, message: 'Demo mode' };
}
```

**5. Use Timeout Protection**
```typescript
// ✅ GOOD
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 10000);

const response = await fetch(url, {
  signal: controller.signal
});
```

**6. Log Errors Appropriately**
```typescript
// ✅ GOOD
console.error('SendGrid error:', error);
// Don't expose internal errors to users
return { success: false, message: 'Email service unavailable' };
```

---

### DON'T ❌

**1. Don't Expose API Keys**
```typescript
// ❌ BAD
const apiKey = 'SG.hardcoded_key_here';

// ✅ GOOD
const apiKey = Deno.env.get('SENDGRID_API_KEY');
```

**2. Don't Trust User Input**
```typescript
// ❌ BAD
const html = `<p>${userMessage}</p>`; // XSS vulnerability!

// ✅ GOOD
const html = `<p>${sanitize(userMessage)}</p>`;
```

**3. Don't Skip Validation**
```typescript
// ❌ BAD
sendEmail(data.email); // No validation!

// ✅ GOOD
if (!emailRegex.test(data.email)) return error;
sendEmail(data.email);
```

**4. Don't Block Without Fallback**
```typescript
// ❌ BAD
if (!sendGridApiKey) throw new Error('Not configured');

// ✅ GOOD
if (!sendGridApiKey) {
  console.log('Demo mode');
  return demoResponse;
}
```

---

## 🧪 Testing

### Local Testing

**1. Test Demo Mode**
```bash
# Don't set SENDGRID_API_KEY
# Submit form - should show demo success

# Check console for:
# "Demo mode: Email would be sent to: user@example.com"
```

**2. Test Production Mode**
```bash
# Set environment variables
export SENDGRID_API_KEY=your_key
export TO_EMAIL=ashley@ashshaw.makeup
export FROM_EMAIL=noreply@ashshaw.makeup

# Submit form - should send real emails
```

**3. Test Edge Function Locally**
```bash
# Start Supabase locally
supabase start

# Deploy function locally
supabase functions serve server

# Test endpoint
curl -X POST http://localhost:54321/functions/v1/server/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

---

### Production Testing

**1. Health Check**
```bash
curl https://prvzveitduxglkwyfvxf.supabase.co/functions/v1/server/health
```

**2. Contact Form**
```bash
curl -X POST https://prvzveitduxglkwyfvxf.supabase.co/functions/v1/server/contact \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your_anon_key" \
  -d '{"name":"Test User","email":"test@example.com","message":"Test message"}'
```

---

## 📊 Monitoring

### Logging

**Edge Function Logs:**
```bash
# View logs in Supabase Dashboard
# Settings > Edge Functions > server > Logs

# Or via CLI
supabase functions logs server
```

**Frontend Logging:**
```typescript
// Email service logs
console.log('Sending email to:', data.email);
console.log('Email sent successfully');
console.error('Email error:', error);
```

---

### Analytics

**Track Email Sends:**
```typescript
// In emailService.ts
export async function sendContactFormEmail(data: ContactFormData) {
  const startTime = Date.now();
  
  const result = await sendEmail(data);
  
  const duration = Date.now() - startTime;
  console.log('Email send duration:', duration, 'ms');
  
  // Optional: Send to analytics
  trackEvent('contact_form_submission', {
    success: result.success,
    duration
  });
  
  return result;
}
```

---

## 🔄 Future Enhancements

### Planned Features

**1. Database Integration**
```typescript
// Store contact form submissions
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(url, key);

await supabase
  .from('contact_submissions')
  .insert({
    name: data.name,
    email: data.email,
    message: data.message,
    created_at: new Date()
  });
```

**2. File Uploads**
```typescript
// Upload portfolio images
const { data, error } = await supabase.storage
  .from('portfolio')
  .upload('public/image.jpg', file);
```

**3. Authentication**
```typescript
// Admin authentication
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'admin@ashshaw.makeup',
  password: 'secure_password'
});
```

**4. Real-time Features**
```typescript
// Live portfolio updates
supabase
  .channel('portfolio-changes')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'portfolio_entries' },
    (payload) => {
      console.log('Portfolio updated:', payload);
      refreshPortfolio();
    }
  )
  .subscribe();
```

---

## 🔗 Related Documentation

- **[Guidelines.md](./Guidelines.md)** - Main project guidelines
- **[contentful-integration.md](./contentful-integration.md)** - CMS integration guide
- **[mock-data.md](./mock-data.md)** - Mock data system

---

## 🆘 Troubleshooting

### Edge Function Not Deploying

**Problem:** `supabase functions deploy` fails

**Solutions:**
1. Check Supabase CLI is installed: `supabase --version`
2. Login to Supabase: `supabase login`
3. Link project: `supabase link --project-ref prvzveitduxglkwyfvxf`
4. Deploy again: `supabase functions deploy server`

---

### Emails Not Sending

**Problem:** Contact form submits but no email received

**Solutions:**
1. Check SendGrid API key is set in Supabase dashboard
2. Verify TO_EMAIL and FROM_EMAIL are configured
3. Check SendGrid sender authentication
4. Review Edge Function logs for errors
5. Test in demo mode (unset SENDGRID_API_KEY)

---

### CORS Errors

**Problem:** Browser blocks requests to Edge Function

**Solutions:**
1. Verify CORS middleware is configured
2. Check allowed origins in server/index.tsx
3. Ensure preflight OPTIONS requests are handled
4. Review browser console for specific CORS error

---

### Timeout Errors

**Problem:** Requests timing out

**Solutions:**
1. Increase timeout in emailService.ts (default: 10s)
2. Check network connectivity
3. Verify Supabase project is active
4. Review Edge Function performance logs

---

**Version:** 1.0.0  
**Last Updated:** January 2025  
**Maintained by:** Ash Shaw Portfolio Team

For questions or issues, refer to [Guidelines.md](./Guidelines.md) or check the Supabase documentation at https://supabase.com/docs
