# SectionCard Component

**Version:** 4.0.0  
**Last Updated:** January 2025

Generic content card wrapper for consistent styling across sections.

## Purpose

Provide reusable card component with:
- Consistent styling across the site
- Backdrop blur and transparency effects
- Hover animations
- Responsive padding
- Customizable content layout
- Semantic HTML structure

---

## Usage

### Basic Usage

```tsx
import { SectionCard } from './components/ui/SectionCard';

<SectionCard>
  <h3>Card Title</h3>
  <p>Card content</p>
</SectionCard>
```

### With Custom Styling

```tsx
<SectionCard className="border-2 border-pink-500">
  <h3>Featured Card</h3>
  <p>Special content</p>
</SectionCard>
```

### With Icon

```tsx
import { Sparkles } from 'lucide-react';

<SectionCard icon={<Sparkles className="w-6 h-6 text-pink-500" />}>
  <h3>Connection</h3>
  <p>Building relationships through artistry</p>
</SectionCard>
```

---

## Props

```typescript
interface SectionCardProps {
  /**
   * Card content
   * @required
   */
  children: React.ReactNode;
  
  /**
   * Optional icon to display at top
   * @optional
   */
  icon?: React.ReactNode;
  
  /**
   * Card title
   * @optional
   */
  title?: string;
  
  /**
   * Card description/subtitle
   * @optional
   */
  description?: string;
  
  /**
   * Additional CSS classes
   * @default ""
   */
  className?: string;
  
  /**
   * Enable hover effects
   * @default true
   */
  hoverable?: boolean;
  
  /**
   * Click handler
   * @optional
   */
  onClick?: () => void;
  
  /**
   * Padding size
   * @default "md"
   */
  padding?: 'sm' | 'md' | 'lg';
}
```

---

## Implementation Example

Complete section card implementation:

```tsx
import React from 'react';

interface SectionCardProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
  padding?: 'sm' | 'md' | 'lg';
}

export function SectionCard({ 
  children,
  icon,
  title,
  description,
  className = '',
  hoverable = true,
  onClick,
  padding = 'md'
}: SectionCardProps) {
  const paddingClasses = {
    sm: 'p-fluid-sm',
    md: 'p-card-responsive',
    lg: 'p-fluid-lg'
  };

  return (
    <article
      className={`
        bg-white/80 backdrop-blur-sm 
        rounded-2xl 
        ${paddingClasses[padding]}
        border border-white/50 
        shadow-lg 
        ${hoverable ? 'hover:shadow-2xl transition-all duration-300' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={onClick}
    >
      {/* Icon */}
      {icon && (
        <div className="flex justify-center mb-fluid-md">
          <div className="w-16 h-16 rounded-2xl bg-gradient-pink-purple-blue flex items-center justify-center shadow-lg">
            {icon}
          </div>
        </div>
      )}
      
      {/* Title */}
      {title && (
        <h3 className="text-fluid-xl font-heading font-semibold text-gray-800 text-center mb-fluid-sm">
          {title}
        </h3>
      )}
      
      {/* Description */}
      {description && (
        <p className="text-body-guideline font-body text-gray-600 text-center mb-fluid-md">
          {description}
        </p>
      )}
      
      {/* Children content */}
      {children}
    </article>
  );
}
```

---

## Usage Patterns

### Why I Do Makeup Section

```tsx
import { Sparkles, Palette, Star } from 'lucide-react';
import { SectionCard } from './components/ui/SectionCard';

function WhySection() {
  return (
    <section className="py-section">
      <h2 className="text-section-h2 font-heading font-semibold text-center mb-fluid-lg">
        Why I Do Makeup
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-md max-w-7xl mx-auto px-6">
        <SectionCard
          icon={<Sparkles className="w-8 h-8 text-white" />}
          title="Connection"
          description="Building meaningful relationships through the art of makeup"
        >
          <p className="text-body-guideline font-body text-gray-700 text-center leading-relaxed">
            Every client interaction is an opportunity to connect, understand, 
            and create something beautiful together.
          </p>
        </SectionCard>
        
        <SectionCard
          icon={<Palette className="w-8 h-8 text-white" />}
          title="Creativity"
          description="Expressing unique artistic visions"
        >
          <p className="text-body-guideline font-body text-gray-700 text-center leading-relaxed">
            Makeup is my canvas for exploring color, texture, and innovative 
            techniques that push creative boundaries.
          </p>
        </SectionCard>
        
        <SectionCard
          icon={<Star className="w-8 h-8 text-white" />}
          title="Confidence"
          description="Empowering through transformation"
        >
          <p className="text-body-guideline font-body text-gray-700 text-center leading-relaxed">
            Helping people feel confident and beautiful is the most rewarding 
            aspect of what I do.
          </p>
        </SectionCard>
      </div>
    </section>
  );
}
```

### About Page Cards

```tsx
function AboutPage() {
  return (
    <section className="py-section px-6">
      <div className="max-w-4xl mx-auto space-y-fluid-lg">
        <SectionCard>
          <h3 className="text-fluid-xl font-heading font-semibold mb-fluid-md">
            My Journey
          </h3>
          <p className="text-body-guideline font-body text-gray-700 leading-relaxed">
            My passion for makeup artistry began over a decade ago...
          </p>
        </SectionCard>
        
        <SectionCard>
          <h3 className="text-fluid-xl font-heading font-semibold mb-fluid-md">
            Philosophy
          </h3>
          <p className="text-body-guideline font-body text-gray-700 leading-relaxed">
            I believe makeup should enhance natural beauty while celebrating 
            individual expression...
          </p>
        </SectionCard>
        
        <SectionCard>
          <h3 className="text-fluid-xl font-heading font-semibold mb-fluid-md">
            Approach
          </h3>
          <p className="text-body-guideline font-body text-gray-700 leading-relaxed">
            Every project is approached with careful attention to detail...
          </p>
        </SectionCard>
      </div>
    </section>
  );
}
```

### Service Cards

```tsx
function ServicesSection() {
  const services = [
    {
      title: 'Festival Makeup',
      description: 'Bold, creative looks with UV and glitter accents',
      price: 'From $150'
    },
    {
      title: 'Editorial Shoots',
      description: 'Professional makeup for photography and fashion',
      price: 'From $200'
    },
    {
      title: 'Special Events',
      description: 'Wedding, prom, and celebration makeup',
      price: 'From $120'
    }
  ];
  
  return (
    <section className="py-section px-6">
      <h2 className="text-section-h2 font-heading font-semibold text-center mb-fluid-lg">
        Services
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-fluid-md max-w-7xl mx-auto">
        {services.map((service, index) => (
          <SectionCard key={index} hoverable>
            <h3 className="text-fluid-xl font-heading font-semibold text-center mb-fluid-sm">
              {service.title}
            </h3>
            
            <p className="text-body-guideline font-body text-gray-700 text-center mb-fluid-md leading-relaxed">
              {service.description}
            </p>
            
            <div className="text-center">
              <span className="text-fluid-lg font-body font-semibold text-gradient-pink-purple-blue">
                {service.price}
              </span>
            </div>
            
            <button className="w-full mt-fluid-md bg-gradient-pink-purple-blue text-white px-button py-3 rounded-lg font-body font-medium hover:shadow-xl transition-shadow">
              Book Now
            </button>
          </SectionCard>
        ))}
      </div>
    </section>
  );
}
```

### Clickable Cards

```tsx
function ClickableCardGrid() {
  const handleCardClick = (title: string) => {
    console.log(`Clicked: ${title}`);
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-fluid-md">
      <SectionCard
        title="View Portfolio"
        description="Explore my makeup artistry work"
        onClick={() => handleCardClick('Portfolio')}
        hoverable
      >
        <button className="w-full mt-fluid-md text-pink-600 hover:text-pink-700 font-body font-medium">
          View Gallery →
        </button>
      </SectionCard>
      
      <SectionCard
        title="Read Blog"
        description="Tips, tutorials, and industry insights"
        onClick={() => handleCardClick('Blog')}
        hoverable
      >
        <button className="w-full mt-fluid-md text-pink-600 hover:text-pink-700 font-body font-medium">
          Read Latest Posts →
        </button>
      </SectionCard>
    </div>
  );
}
```

---

## Styling Variations

### Gradient Border

```tsx
<SectionCard className="border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-border">
  <div className="bg-white rounded-xl p-fluid-md">
    <h3>Featured Content</h3>
    <p>Content here</p>
  </div>
</SectionCard>
```

### Glass Morphism

```tsx
<SectionCard className="bg-white/60 backdrop-blur-lg border-white/80 shadow-2xl">
  <h3>Glass Effect Card</h3>
  <p>Enhanced transparency and blur</p>
</SectionCard>
```

### Minimal Style

```tsx
<SectionCard className="bg-transparent border-gray-200 shadow-none hover:bg-white/50">
  <h3>Minimal Card</h3>
  <p>Subtle appearance</p>
</SectionCard>
```

---

## Accessibility

### Semantic HTML

```tsx
<SectionCard>
  <article>
    <h3>Card Title</h3>
    <p>Card content</p>
  </article>
</SectionCard>
```

### Keyboard Navigation (for clickable cards)

```tsx
<SectionCard
  onClick={handleClick}
  className="focus:outline-none focus:ring-4 focus:ring-pink-200 focus:ring-opacity-50"
  tabIndex={0}
  onKeyDown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Content
</SectionCard>
```

---

## Common Mistakes

### ❌ Mistake 1: Inconsistent Padding

```tsx
// ❌ WRONG - Custom padding breaks consistency
<div className="bg-white p-4">
  <h3>Card</h3>
</div>
```

**Solution:**
```tsx
// ✅ CORRECT - Use SectionCard with consistent padding
<SectionCard padding="md">
  <h3>Card</h3>
</SectionCard>
```

### ❌ Mistake 2: Missing Hover Effects

```tsx
// ❌ WRONG - Static card
<div className="bg-white shadow-lg">
  Content
</div>
```

**Solution:**
```tsx
// ✅ CORRECT - Hover animations
<SectionCard hoverable>
  Content
</SectionCard>
```

---

## Related Components

- **[PortfolioCard](./PortfolioCard.md)** - Portfolio-specific cards
- **[Header](./Header.md)** - Site navigation
- **[Footer](./Footer.md)** - Page footer

---

## Related Documentation

- **[Guidelines.md](../Guidelines.md)** - Main guidelines
- **[overview-components.md](../overview-components.md)** - Component system
- **[FILE_STRUCTURE.md](../FILE_STRUCTURE.md)** - File organization
- **[design-tokens/spacing.md](../design-tokens/spacing.md)** - Spacing system
- **[design-tokens/colors.md](../design-tokens/colors.md)** - Color system

---

**Last Updated:** January 2025  
**Version:** 4.0.0