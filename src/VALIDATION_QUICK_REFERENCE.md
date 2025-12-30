# 🚀 Validation Quick Reference Card

## Portfolio Entry Validation - At a Glance

### ✅ Required Fields (Errors if Missing)
- **title** - Entry title
- **description** - Brief description  
- **category** - Content category

### 📸 Image Recommendations

| Aspect | Optimal | Warning If |
|--------|---------|-----------|
| **Count** | 3-10 images | 0, 1, or > 20 |
| **Resolution** | 1200x800 - 2400x1600 | < 800x600 or > 4000x4000 |
| **File Size** | < 2MB | > 5MB |
| **Format** | JPEG, PNG, WebP | Non-image files |
| **Alt Text** | Present (title/description) | Missing |

### 🎨 Featured Image

| Aspect | Optimal | Warning If |
|--------|---------|-----------|
| **Orientation** | Landscape (> 1:1) | Portrait (< 1:1) |
| **Minimum Size** | 1200x800 | < 1200x800 |
| **Recommended** | 1920x1280 | - |

### 🏷️ Tags

| Count | Status |
|-------|--------|
| 0 | ⚠️ Add tags for discovery |
| 1-10 | ✅ Optimal |
| > 10 | ⚠️ Too many, limit to 5-10 |

### 🔍 SEO Metadata

| Field | Optimal Length | Warning If |
|-------|---------------|-----------|
| **Meta Title** | 50-60 chars | > 60 chars |
| **Meta Description** | 150-160 chars | < 120 or > 160 |
| **Keywords** | 5-10 keywords | 0 or > 10 |

### 📊 Display Order

| Value | Status |
|-------|--------|
| < 0 | ⚠️ Negative |
| 0-1000 | ✅ Optimal |
| > 1000 | ⚠️ Too high |

---

## 🧪 Quick Test Commands

```typescript
// Test single entry
import { validatePortfolioEntry } from './utils/contentfulValidation';
const result = validatePortfolioEntry(entry);
console.log('Valid:', result.isValid);
console.log('Errors:', result.errors);
console.log('Warnings:', result.warnings);

// Test multiple entries
import { batchValidate } from './utils/contentfulValidation';
const results = batchValidate(entries, validatePortfolioEntry);
console.log('Success rate:', (results.valid.length / entries.length * 100).toFixed(1) + '%');
```

---

## 📋 Content Creation Checklist

### Before Publishing:
- [ ] Title is descriptive and clear
- [ ] Description is 100-200 characters
- [ ] Category is from standard list
- [ ] 3-10 high-quality images (1200x800+, < 2MB)
- [ ] All images have alt text
- [ ] Featured image is landscape orientation
- [ ] 5-7 relevant tags added
- [ ] SEO meta title (50-60 chars)
- [ ] SEO meta description (150-160 chars)
- [ ] Display order set appropriately

---

## 🎯 Standard Categories

```
✅ Festival Makeup
✅ UV Makeup
✅ Swiss Festivals
✅ Fusion Nails
✅ Thailand Adventures
✅ Editorial
✅ Special Events
```

---

## 🛠️ Common Fixes

| Warning | Quick Fix |
|---------|-----------|
| Low image resolution | Upload higher res image (1200x800+) |
| Large file size | Compress image to < 2MB |
| Missing alt text | Add title or description to asset |
| Portrait featured image | Use landscape image instead |
| Too many tags | Limit to 5-10 most relevant |
| Long meta title | Shorten to 50-60 characters |
| Short meta description | Expand to 150-160 characters |

---

## 🚨 Critical Errors (Must Fix)

❌ Missing title  
❌ Missing description  
❌ Missing category  
❌ Non-image file in images array  
❌ Non-image featured image  

---

## 📞 Quick Links

- **Full Guide:** `/PORTFOLIO_VALIDATION_GUIDE.md`
- **Test Script:** `/scripts/test-validation.ts`
- **Validation Code:** `/utils/contentfulValidation.ts`

---

**Last Updated:** January 25, 2025
