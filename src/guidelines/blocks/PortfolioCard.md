# PortfolioCard Block Guidelines

Portfolio entry display card with image slider and metadata.

**File:** `/components/ui/PortfolioCard.tsx`  
**WordPress Equivalent:** Custom post card in `core/post-template`  
**Used In:** FeaturedSection, ThreeColumnPortfolioSection, PortfolioMainPage

---

## Purpose

The PortfolioCard is a **content display block** for portfolio entries. It combines:
- Featured image with slider
- Category tag overlay
- Title and description
- Navigation arrows and dots
- Lightbox integration
- Touch/swipe support

---

## Block Structure

```tsx
<article className="[card-container]">
  {/* Image Container with Category Tag */}
  <div className="[image-wrapper]">
    {/* Category Badge */}
    <span className="[category-badge]">{category}</span>
    
    {/* Image Slider */}
    <div className="[slider-container]">
      <img src={images[currentIndex].src} alt={alt} />
      
      {/* Navigation Arrows (Desktop) */}
      <button className="[prev-button]" onClick={handlePrev}>
        <ChevronLeft />
      </button>
      <button className="[next-button]" onClick={handleNext}>
        <ChevronRight />
      </button>
      
      {/* Pagination Dots */}
      <div className="[dots-container]">
        {images.map((_, index) => (
          <button 
            className="[dot]"
            aria-current={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  </div>
  
  {/* Card Content */}
  <div className="[content-container]">
    <h3 className="[title]">{title}</h3>
    <p className="[description]">{description}</p>
    
    {/* Metadata */}
    <div className="[metadata]">
      <span>{event}</span>
      <span>{location}</span>
    </div>
  </div>
</article>
```

---

## Container Styles

### Card Container
```tsx
className="
  group                                            // For group-hover effects
  bg-white                                         // White background
  rounded-xl                                       // Rounded corners
  overflow-hidden                                  // Clip content
  border border-gray-200                           // Subtle border
  shadow-lg hover:shadow-2xl                       // Elevation on hover
  transition-all duration-300                      // Smooth transitions
  cursor-pointer                                   // Indicate clickable
  h-full                                           // Full height for grid
  flex flex-col                                    // Vertical layout
"
```

### Image Wrapper
```tsx
className="
  relative                                         // Position context
  w-full                                           // Full width
  aspect-square                                    // 1:1 ratio
  overflow-hidden                                  // Clip overflow
  bg-gray-100                                      // Loading state color
"
```

---

## Visual Elements

### 1. Category Badge

Top-right overlay badge:

```tsx
<span className="
  absolute top-3 right-3                           // Top-right position
  z-20                                             // Above image
  inline-flex items-center gap-1 
  px-3 py-1.5 
  bg-gradient-pink-purple-blue                     // Brand gradient
  text-white 
  text-xs 
  font-medium 
  rounded-full 
  shadow-lg                                        // Elevation
  backdrop-blur-sm                                 // Blur effect
">
  <Tag className="w-3 h-3" />
  {entry.category}
</span>
```

---

### 2. Image Slider

#### Current Image Display
```tsx
<img
  src={images[currentIndex].src}
  alt={images[currentIndex].alt}
  className="
    w-full h-full 
    object-cover                                   // Cover container
    group-hover:scale-110                          // Zoom on card hover
    transition-transform duration-500              // Smooth zoom
  "
  onClick={() => onImageClick(currentIndex)}
  loading="lazy"
/>
```

#### Navigation Arrows (Desktop Only)

Previous Arrow:
```tsx
<button
  onClick={(e) => {
    e.stopPropagation();
    handlePrevImage();
  }}
  className="
    absolute left-2 top-1/2 -translate-y-1/2      // Left center position
    z-10                                           // Above image
    w-10 h-10 
    bg-white/90                                    // Semi-transparent
    hover:bg-white                                 // Solid on hover
    rounded-full 
    shadow-lg 
    opacity-0 group-hover:opacity-100              // Show on hover
    transition-all duration-300 
    flex items-center justify-center 
    focus:outline-none 
    focus:ring-2 focus:ring-pink-500 
    focus:ring-offset-2
    hidden md:flex                                 // Desktop only
  "
  aria-label="Previous image"
>
  <ChevronLeft className="w-5 h-5 text-gray-700" />
</button>
```

Next Arrow:
```tsx
<button
  onClick={(e) => {
    e.stopPropagation();
    handleNextImage();
  }}
  className="
    absolute right-2 top-1/2 -translate-y-1/2     // Right center position
    z-10 
    w-10 h-10 
    bg-white/90 
    hover:bg-white 
    rounded-full 
    shadow-lg 
    opacity-0 group-hover:opacity-100 
    transition-all duration-300 
    flex items-center justify-center 
    focus:outline-none 
    focus:ring-2 focus:ring-pink-500 
    focus:ring-offset-2
    hidden md:flex                                 // Desktop only
  "
  aria-label="Next image"
>
  <ChevronRight className="w-5 h-5 text-gray-700" />
</button>
```

#### Pagination Dots

```tsx
<div className="
  absolute bottom-3 left-0 right-0               // Bottom center
  z-10 
  flex items-center justify-center 
  gap-2
">
  {images.map((_, index) => (
    <button
      key={index}
      onClick={(e) => {
        e.stopPropagation();
        setCurrentIndex(index);
      }}
      className={`
        w-2 h-2 
        rounded-full 
        transition-all duration-300 
        ${index === currentIndex 
          ? 'bg-white w-8'                         // Active: wider white dot
          : 'bg-white/60 hover:bg-white/80'        // Inactive: semi-transparent
        }
      `}
      aria-label={`View image ${index + 1} of ${images.length}`}
      aria-current={index === currentIndex}
    />
  ))}
</div>
```

---

### 3. Card Content

#### Content Container
```tsx
<div className="
  p-fluid-md                                       // clamp(1rem, 0.8rem + 1vw, 1.5rem)
  flex flex-col 
  gap-fluid-xs                                     // Space between elements
">
```

#### Title
```tsx
<h3 className="
  text-lg                                          // 18px
  font-heading                                     // Playfair Display
  font-bold 
  text-gray-800 
  group-hover:text-gradient-pink-purple-blue       // Gradient on hover
  transition-colors duration-300 
  line-clamp-2                                     // Limit to 2 lines
">
  {entry.title}
</h3>
```

#### Description
```tsx
<p className="
  text-sm                                          // 14px
  font-body 
  text-gray-600 
  leading-relaxed 
  line-clamp-2                                     // Limit to 2 lines
">
  {entry.description}
</p>
```

#### Metadata
```tsx
<div className="
  flex flex-wrap items-center 
  gap-2 
  text-xs 
  text-gray-500 
  mt-auto                                          // Push to bottom
">
  {entry.event && (
    <span className="flex items-center gap-1">
      <MapPin className="w-3 h-3" />
      {entry.event}
    </span>
  )}
  
  {entry.location && (
    <span className="flex items-center gap-1">
      <Globe className="w-3 h-3" />
      {entry.location}
    </span>
  )}
  
  {entry.date && (
    <span className="flex items-center gap-1">
      <Calendar className="w-3 h-3" />
      {formatDate(entry.date)}
    </span>
  )}
</div>
```

---

## Interactive Features

### 1. Image Navigation

```typescript
const [currentIndex, setCurrentIndex] = useState(0);

const handleNextImage = () => {
  setCurrentIndex((prev) => 
    prev === images.length - 1 ? 0 : prev + 1
  );
};

const handlePrevImage = () => {
  setCurrentIndex((prev) => 
    prev === 0 ? images.length - 1 : prev - 1
  );
};

// Keyboard support
const handleKeyDown = (e: React.KeyboardEvent) => {
  if (e.key === 'ArrowLeft') handlePrevImage();
  if (e.key === 'ArrowRight') handleNextImage();
};
```

### 2. Touch/Swipe Support (Mobile)

```typescript
const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

const handleTouchStart = (e: React.TouchEvent) => {
  setTouchStart(e.touches[0].clientX);
};

const handleTouchMove = (e: React.TouchEvent) => {
  setTouchEnd(e.touches[0].clientX);
};

const handleTouchEnd = () => {
  if (touchStart - touchEnd > 50) {
    // Swipe left - next image
    handleNextImage();
  }
  
  if (touchStart - touchEnd < -50) {
    // Swipe right - previous image
    handlePrevImage();
  }
};
```

### 3. Lightbox Integration

```tsx
const handleImageClick = () => {
  onImageClick(currentIndex);
};
```

---

## Accessibility

### ARIA Labels
```tsx
// Card itself
<article
  role="article"
  aria-label={`Portfolio: ${entry.title}`}
>

// Navigation buttons
<button
  aria-label="Previous image"
  aria-controls="image-slider"
>

<button
  aria-label="Next image"
  aria-controls="image-slider"
>

// Pagination dots
<button
  aria-label={`View image ${index + 1} of ${total}`}
  aria-current={index === currentIndex}
>
```

### Keyboard Navigation
- Tab to card
- Arrow keys to navigate images
- Enter/Space to open lightbox
- Focus indicators on all interactive elements

### Screen Reader Support
- Image alt text
- Descriptive button labels
- Current image announcement

---

## Responsive Breakpoints

### Mobile (< 768px)
- No navigation arrows (touch/swipe instead)
- Pagination dots visible
- Full-width cards
- Touch-friendly tap areas

### Desktop (768px+)
- Navigation arrows on hover
- Keyboard arrow key support
- Enhanced hover effects
- Cursor pointer on interactive areas

---

## Typography Scale

| Element | Class | Size |
|---------|-------|------|
| Category Badge | `text-xs` | 12px |
| Title | `text-lg` | 18px |
| Description | `text-sm` | 14px |
| Metadata | `text-xs` | 12px |

---

## Color Palette

### Card Colors
```css
bg-white                           /* Card background */
border-gray-200                    /* Card border */
```

### Text Colors
```css
text-gray-800                      /* Title */
text-gray-600                      /* Description */
text-gray-500                      /* Metadata */
text-white                         /* Category badge */
```

### Interactive Elements
```css
bg-gradient-pink-purple-blue       /* Category badge */
group-hover:text-gradient          /* Title on hover */
bg-white/90                        /* Arrow buttons */
```

---

## Best Practices

### 1. Image Loading
```tsx
// ✅ Lazy load images
<img loading="lazy" ... />

// ✅ Provide fallback
<img 
  src={image.src}
  onError={(e) => {
    e.currentTarget.src = '/placeholder.jpg';
  }}
/>
```

### 2. Event Handling
```tsx
// ✅ Stop propagation for nested clicks
onClick={(e) => {
  e.stopPropagation();
  handleAction();
}}
```

### 3. Touch Events
```tsx
// ✅ Implement swipe with threshold
if (Math.abs(touchStart - touchEnd) > 50) {
  handleSwipe();
}
```

---

## Related Documentation

- **[overview-blocks.md](../overview-blocks.md)** - Block system
- **[Lightbox.md](./Lightbox.md)** - Lightbox modal (EnhancedLightbox component)
- **[design-tokens/colors.md](../design-tokens/colors.md)** - Color system

---

**Last Updated:** January 2025  
**Version:** 3.2.0