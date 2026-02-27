# Image Assets

This directory contains all image assets for the Ash Shaw Makeup Portfolio.

## Directory Structure

```
images/
├── hero/           # Homepage hero section images
├── portfolio/      # Portfolio gallery images
├── festivals/      # Festival makeup work
├── uv-makeup/      # UV/blacklight makeup
└── nail-art/       # Nail art photography
```

## Adding Your Images

### 1. Add Image Files

Place your images in the appropriate subdirectory:
- **Hero images**: `src/assets/images/hero/`
- **Festival work**: `src/assets/images/festivals/`
- **UV makeup**: `src/assets/images/uv-makeup/`
- **Nail art**: `src/assets/images/nail-art/`

### 2. Update Constants.ts

In `/src/components/common/Constants.ts`, replace the placeholder imports:

**Before:**
```typescript
const heroImage1 = "https://images.unsplash.com/photo-...";
```

**After:**
```typescript
import heroImage1 from "../../assets/images/hero/hero-1.jpg";
import heroImage2 from "../../assets/images/hero/hero-2.jpg";
import heroImage3 from "../../assets/images/hero/hero-3.jpg";
```

### 3. Supported Formats

- `.jpg` / `.jpeg` (recommended for photos)
- `.png` (for images with transparency)
- `.webp` (modern format, best compression)
- `.svg` (for icons and logos)

## Image Optimization Tips

1. **Compress images** before adding them (use tools like TinyPNG, Squoosh, or ImageOptim)
2. **Recommended dimensions**:
   - Hero images: 800-1200px width
   - Portfolio images: 800-1000px width
   - Thumbnails: 400-600px width
3. **File size**: Keep under 500KB per image when possible
4. **Format**: Use WebP for best results, JPG as fallback

## Current Placeholder Images

The site currently uses Unsplash placeholder images. Replace them with your actual portfolio photography for the best results.

To see which images need replacing, search for "https://images.unsplash.com" in `Constants.ts`.
