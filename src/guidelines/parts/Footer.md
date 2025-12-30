# Footer Guidelines

Site-wide footer with contact form, about content, and social links.

**File:** `/components/common/Footer.tsx`  
**WordPress Equivalent:** `footer.html` template part  
**Used In:** All pages (global template part)

---

## Purpose

The Footer is a **global template part** that appears at the bottom of every page, providing:
- About Ash content and brand messaging
- Contact form for visitor inquiries
- Social media links
- Logo for home navigation
- Consistent site conclusion across all pages

---

## Footer Structure

```tsx
<section id="contact" className="[container-styles]">
  {/* Background Layer - Decorative gradient orbs */}
  <div className="[decorative-orbs]" aria-hidden="true" />
  
  {/* Content Container */}
  <div className="[max-width-container]">
    <div className="[two-column-layout]">
      {/* Left Column - About Content */}
      <div className="[about-column]">
        <h2>{/* About heading */}</h2>
        <p>{/* About paragraph 1 */}</p>
        <p>{/* About paragraph 2 */}</p>
        <p>{/* Tagline with gradient */}</p>
      </div>
      
      {/* Right Column - Contact Form */}
      <div className="[form-column]">
        <h3>{/* Contact heading */}</h3>
        <p>{/* Contact description */}</p>
        <ContactForm />
      </div>
    </div>
    
    {/* Bottom Row - Logo & Social */}
    <div className="[separator-line]" />
    <div className="[bottom-row]">
      <Logo onClick={handleLogoClick} />
      <SocialLinks />
    </div>
  </div>
</section>
```

---

## Container Styles

### Section Container
```tsx
className="
  relative                                    // Position context for decorations
  bg-gradient-to-br from-gray-50 
    via-purple-50 to-pink-50                 // Subtle gradient background
  px-fluid-md                                // clamp(1rem, 0.6rem + 2vw, 2rem)
"
style={{
  paddingTop: 'clamp(2rem, 8vh, 4rem)',      // Responsive vertical padding
  paddingBottom: 'clamp(2rem, 8vh, 4rem)'
}}
```

**Why inline styles for padding?**
- Uses viewport height (vh) for better proportional spacing
- Scales with screen height, not just width
- Provides optimal footer spacing on all devices

### Inner Container
```tsx
className="
  max-w-7xl                                  // 1280px max-width
  mx-auto                                    // Center horizontally
  relative                                   // Above decorations
  z-10                                       // Stack above background
"
```

### Two-Column Layout
```tsx
className="
  flex                                       // Flexbox layout
  flex-col lg:flex-row                       // Column on mobile, row on desktop
  gap-fluid-xl                               // clamp(2rem, 1.2rem + 4vw, 4rem)
"
```

---

## Visual Elements

### 1. Decorative Background Orbs

Two subtle gradient orbs for visual interest:

```tsx
{/* Top-right orb */}
<div 
  className="
    absolute top-1/4 right-1/4 
    w-24 h-24 sm:w-48 sm:h-48                // Responsive sizing
    bg-gradient-to-br from-pink-200 to-purple-300
    rounded-full 
    opacity-10                               // Very subtle
    blur-3xl                                 // Soft blur effect
  "
  aria-hidden="true"                         // Decorative only
/>

{/* Bottom-left orb */}
<div 
  className="
    absolute bottom-1/4 left-1/4 
    w-32 h-32 sm:w-64 sm:h-64
    bg-gradient-to-br from-purple-200 to-blue-300
    rounded-full 
    opacity-10 
    blur-3xl
  "
  aria-hidden="true"
/>
```

**Purpose:** Add depth without overwhelming content

---

### 2. Left Column - About Content

#### About Heading
```tsx
<h2 className="
  text-section-h2                            // clamp(1.5rem, 4vw, 3rem)
  font-heading                               // Playfair Display
  font-bold 
  text-gradient-blue-teal-green              // Brand gradient
  mb-fluid-sm                                // clamp(0.5rem, 0.3rem + 1vw, 1rem)
">
  About Ash
</h2>
```

#### About Paragraphs
```tsx
<p className="
  text-body-guideline                        // clamp(1rem, 1.5vw, 1.25rem)
  font-body                                  // Inter
  font-normal 
  text-gray-600 
  leading-relaxed 
  mb-fluid-sm
">
  I'm Ash Shaw, a makeup artist who started this journey in 2019...
</p>

<p className="
  text-body-guideline 
  font-body 
  font-normal 
  text-gray-600 
  leading-relaxed 
  mb-fluid-md
">
  This portfolio is my way of sharing that journey...
</p>
```

#### Tagline (Gradient Text)
```tsx
<p className="
  text-fluid-lg                              // clamp(1.125rem, 1.6vw, 1.5rem)
  font-body 
  font-medium 
  text-gradient-pink-purple-blue             // Brand gradient
  leading-relaxed
">
  ✨ Makeup that shines with colour, energy, and connection.
</p>
```

---

### 3. Right Column - Contact Form

#### Contact Heading
```tsx
<h3 className="
  text-subsection-h3                         // clamp(1.25rem, 3vw, 2rem)
  font-heading 
  font-bold 
  text-gradient-pink-purple-blue 
  mb-fluid-sm
">
  Get In Touch
</h3>
```

#### Contact Description
```tsx
<p className="
  text-body-guideline 
  font-body 
  font-normal 
  text-gray-600 
  leading-relaxed 
  mb-fluid-md
">
  Have a project in mind or want to collaborate? I'd love to hear from you!
</p>
```

#### Contact Form Component
```tsx
<ContactForm />
```

See **[components/ContactForm.md](../components/ContactForm.md)** for complete form implementation.

---

### 4. Bottom Row - Logo & Social Links

#### Separator Line
```tsx
<div className="
  border-t 
  border-gray-300 
  my-fluid-xl                                // Top and bottom margin
" />
```

#### Bottom Layout
```tsx
<div className="
  flex 
  flex-col sm:flex-row                       // Stack on mobile, row on tablet+
  justify-between                            // Space between logo and social
  items-center                               // Vertical centering
  gap-fluid-md                               // Gap between items
">
  {/* Logo */}
  <Logo 
    size="footer"                            // Footer-specific sizing
    onClick={handleLogoClick}                // Navigate to home
  />
  
  {/* Social Links */}
  <SocialLinks />
</div>
```

---

## Interactive Features

### Logo Click Handler

```tsx
const handleLogoClick = () => {
  if (setCurrentPage) {
    setCurrentPage("home");                  // Navigate to home page
    window.scrollTo({ 
      top: 0, 
      behavior: "smooth"                     // Smooth scroll to top
    });
  }
};
```

**Features:**
- Navigates to home page when clicked
- Smooth scroll to top of page
- Only executes if `setCurrentPage` prop provided

### Contact Form Submission

Form handles:
- Input validation
- Honeypot spam protection
- SendGrid email integration
- Success/error messaging
- Loading states

See **[components/ContactForm.md](../components/ContactForm.md)** for details.

---

## Responsive Breakpoints

### Mobile (< 640px)
- Single column layout (about stacked above contact)
- Orbs: 96×96px (w-24 h-24)
- Bottom row: Stacked (logo above social)
- Vertical spacing: clamp(2rem, 8vh, 4rem)

### Tablet (640px - 1024px)
- Single column layout (still stacked)
- Orbs: 192×192px (w-48 h-48)
- Bottom row: Side-by-side
- Gap: clamp(2rem, 1.2rem + 4vw, 4rem)

### Desktop (1024px+)
- Two column layout (side-by-side)
- Orbs: 192×192px and 256×256px
- Bottom row: Side-by-side
- Max-width: 1280px (max-w-7xl)

---

## Accessibility

### Semantic HTML
```tsx
<section id="contact">              // Section with ID for anchor links
  <h2>About Ash</h2>                // Proper heading hierarchy
  <h3>Get In Touch</h3>             // Subheading for contact section
</section>
```

### ARIA Labels
```tsx
// Decorative elements hidden from screen readers
<div aria-hidden="true">{/* Gradient orb */}</div>

// Form inputs have proper labels (in ContactForm)
<label htmlFor="name">Name</label>
<input id="name" aria-required="true" />
```

### Keyboard Navigation
- Logo is keyboard accessible (implicit through onClick)
- Contact form fully keyboard navigable
- Social links support keyboard focus
- Tab order follows visual order

### Screen Reader Support
- Section has `id="contact"` for skip links
- Proper heading hierarchy (h2, h3)
- Form labels associated with inputs
- Error messages announced to screen readers

---

## Typography Scale

| Element | Class | Size (Mobile → Desktop) |
|---------|-------|------------------------|
| About Heading | `text-section-h2` | 24px → 48px |
| Contact Heading | `text-subsection-h3` | 20px → 32px |
| Body Text | `text-body-guideline` | 16px → 20px |
| Tagline | `text-fluid-lg` | 18px → 24px |

---

## Color Palette

### Background
```css
bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50
```

### Text Gradients
```css
text-gradient-blue-teal-green      /* About heading */
text-gradient-pink-purple-blue     /* Contact heading + tagline */
```

### Text Colors
```css
text-gray-600                      /* Body text */
text-gray-300                      /* Separator line */
```

### Orb Gradients
```css
from-pink-200 to-purple-300        /* Top-right orb */
from-purple-200 to-blue-300        /* Bottom-left orb */
```

---

## Component Integration

### Logo Component
```tsx
<Logo 
  size="footer"                    // Size variant
  onClick={handleLogoClick}        // Click handler
/>
```

See **[components/Logo.md](../components/Logo.md)** for complete logo documentation.

### ContactForm Component
```tsx
<ContactForm />
```

Features:
- Name, email, message inputs
- Honeypot spam protection
- Client-side validation
- SendGrid integration
- Success/error states

See **[components/ContactForm.md](../components/ContactForm.md)** for complete form documentation.

### SocialLinks Component
```tsx
<SocialLinks />
```

Displays:
- Instagram link
- Email link
- Other social platforms
- Accessible icon labels

See **[components/SocialLinks.md](../components/SocialLinks.md)** for complete social links documentation.

---

## Best Practices

### 1. Consistent Across All Pages
```tsx
// ✅ Footer appears on every page template
<HomePage />
  <HeroSection />
  <FeaturedSection />
  <Footer setCurrentPage={setCurrentPage} />  // Always included

<AboutPage />
  <WhySection />
  <Footer setCurrentPage={setCurrentPage} />  // Always included
```

### 2. Proper Spacing
```tsx
// ✅ Use viewport-based padding for proportional spacing
style={{
  paddingTop: 'clamp(2rem, 8vh, 4rem)',
  paddingBottom: 'clamp(2rem, 8vh, 4rem)'
}}

// ✅ Use fluid utilities for gaps
className="gap-fluid-xl"
```

### 3. Decorative Elements
```tsx
// ✅ Hide decorative elements from screen readers
<div aria-hidden="true" className="[gradient-orb]" />

// ✅ Keep decorations subtle
className="opacity-10 blur-3xl"
```

### 4. Navigation Integration
```tsx
// ✅ Logo click navigates to home with smooth scroll
const handleLogoClick = () => {
  if (setCurrentPage) {
    setCurrentPage("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};
```

---

## WordPress Comparison

### WordPress `footer.html` Template Part
```html
<!-- wp:template-part {"slug":"footer","area":"footer"} /-->

<footer>
  <div class="wp-block-group">
    <div class="wp-block-columns">
      <div class="wp-block-column">
        <!-- About content -->
      </div>
      <div class="wp-block-column">
        <!-- Contact form -->
      </div>
    </div>
  </div>
</footer>
```

### Ash Shaw Footer
```tsx
<section id="contact" className="relative bg-gradient-to-br...">
  <div className="max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row">
      <div>{/* About content */}</div>
      <div>{/* Contact form */}</div>
    </div>
  </div>
</section>
```

**Key Differences:**
- React component vs. HTML template
- Tailwind classes vs. WordPress block classes
- Client-side navigation vs. page reloads
- Integrated state management

---

## Usage Example

```tsx
import { Footer } from './components/common/Footer';

export function App() {
  const [currentPage, setCurrentPage] = useState('home');
  
  return (
    <>
      {/* Page content */}
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
      </main>
      
      {/* Global footer on all pages */}
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
}
```

---

## Related Documentation

- **[overview-parts.md](../overview-parts.md)** - Template parts overview
- **[Header.md](./Header.md)** - Site header navigation
- **[components/Logo.md](../components/Logo.md)** - Logo component
- **[components/ContactForm.md](../components/ContactForm.md)** - Contact form
- **[components/SocialLinks.md](../components/SocialLinks.md)** - Social links
- **[Guidelines.md](../Guidelines.md)** - Main guidelines

---

**Last Updated:** January 2025  
**Version:** 3.2.0
