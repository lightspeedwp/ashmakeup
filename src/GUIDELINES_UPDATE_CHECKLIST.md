# Guidelines Update Execution Checklist

**Quick Reference for Systematic Updates**  
**Total Files:** 42 | **Target Version:** 4.0.0

---

## 🎯 Phase 1: Component Guidelines (24 files)

### Priority 1: Integration Components (4 files) - 75 min

- [ ] **ContactForm.md** (20 min)
  - [ ] Version → 4.0.0
  - [ ] Add Supabase integration section
  - [ ] Update code examples with emailService
  - [ ] Document demo mode
  - [ ] Add environment variables

- [ ] **SocialLinks.md** (15 min)
  - [ ] Version → 4.0.0
  - [ ] Add mock data section
  - [ ] Replace Constants.ts references
  - [ ] Show import patterns
  - [ ] Document all 5 platforms

- [ ] **PortfolioCard.md** (20 min)
  - [ ] Version → 4.0.0
  - [ ] Add CMS integration section
  - [ ] Show fallback pattern
  - [ ] Document 43 entries
  - [ ] Add Contentful guide reference

- [ ] **BlogCard.md** (20 min)
  - [ ] Version → 4.0.0
  - [ ] Add CMS integration section
  - [ ] Show fallback pattern
  - [ ] Document 5 blog posts
  - [ ] Add Contentful guide reference

---

### Priority 2: Standard Components (20 files) - 205 min

**All files need:**
- [ ] Version → 4.0.0
- [ ] Last Updated → January 2025
- [ ] Add Related Documentation section
- [ ] Verify code examples
- [ ] Check component name

#### Standard Updates (10 min each)

- [ ] Logo.md
- [ ] Header.md (add SITEMAP reference)
- [ ] Footer.md (cross-ref SocialLinks & ContactForm)
- [ ] ScrollDownArrow.md
- [ ] LayoutSwitcher.md
- [ ] SectionCard.md
- [ ] ReadMoreButton.md
- [ ] ShareComponent.md
- [ ] SearchBar.md
- [ ] CategoryFilter.md (add mock data reference)
- [ ] Breadcrumbs.md (add SITEMAP reference)
- [ ] ImageGallery.md
- [ ] SliderCard.md
- [ ] TestimonialCard.md (verify exists)
- [ ] Modal.md
- [ ] LoadingSpinner.md
- [ ] Tag.md (add mock data reference)
- [ ] ColorfulIcons.md

#### Name Mismatch Updates (15 min each)

- [ ] **ScrollBackToTop.md** → actual: `ScrollToTop.tsx`
  - [ ] Add file location note
  
- [ ] **HeroSection.md** → actual: `HeroLayout.tsx`
  - [ ] Add file location note
  - [ ] Add mock data example
  
- [ ] **Lightbox.md** → actual: `EnhancedLightbox.tsx`
  - [ ] Add file location note
  - [ ] Document enhanced features
  
- [ ] **Pagination.md** → actual: `BlogPagination.tsx`
  - [ ] Add file location note
  - [ ] Document blog-specific features

---

## 🎨 Phase 2: Design Tokens (3 files) - 45 min

- [ ] **colors.md** (15 min)
  - [ ] Read globals.css
  - [ ] Verify all colors documented
  - [ ] Check gradient classes
  - [ ] Version → 4.0.0
  - [ ] Add "Verified Against" note

- [ ] **typography.md** (15 min)
  - [ ] Read globals.css
  - [ ] Verify font-face declarations
  - [ ] Check fluid typography scale
  - [ ] Document all utilities
  - [ ] Version → 4.0.0
  - [ ] Add "Verified Against" note

- [ ] **spacing.md** (15 min)
  - [ ] Read globals.css
  - [ ] Document all spacing utilities
  - [ ] List component-specific spacing
  - [ ] Document fluid scale
  - [ ] Version → 4.0.0
  - [ ] Add "Verified Against" note

---

## 📐 Phase 3: Sections/Blocks/Patterns/Parts (15 files) - 75 min

### Sections (6 files) - 30 min

- [ ] HeroSection.md (5 min)
- [ ] FeaturedSection.md (5 min)
- [ ] WhySection.md (5 min)
- [ ] BlogPreviewSection.md (5 min)
- [ ] ThreeColumnLayout.md (5 min)
- [ ] ThreeColumnPortfolioSection.md (5 min)

### Blocks (4 files) - 20 min

- [ ] blocks/BlogCard.md (5 min)
- [ ] blocks/Lightbox.md (5 min)
- [ ] blocks/Pagination.md (5 min)
- [ ] blocks/PortfolioCard.md (5 min)

### Parts (3 files) - 15 min

- [ ] Header.md (5 min)
- [ ] Footer.md (5 min)
- [ ] MobileMenu.md (5 min)

### Patterns (1 file) - 5 min

- [ ] CardGridWithFilters.md (5 min)

### Templates (1 file) - 5 min

- [ ] HomePage.md (5 min)

---

## ✅ Quality Checks

### Per-File Checklist

After updating each file, verify:

- [ ] Version is 4.0.0
- [ ] Date is January 2025
- [ ] Code examples use current imports
- [ ] Component name matches actual file
- [ ] Integration guides referenced (if applicable)
- [ ] Mock data imports shown (if applicable)
- [ ] Related documentation links work
- [ ] Markdown formatting correct

### Phase Completion Checklist

After each phase:

- [ ] All files in phase updated
- [ ] Cross-references verified
- [ ] Examples are accurate
- [ ] No broken links
- [ ] Consistent formatting

### Final Verification

After all phases:

- [ ] All 42 files updated
- [ ] Version consistency (all 4.0.0)
- [ ] Date consistency (all January 2025)
- [ ] Links verified
- [ ] Examples tested
- [ ] Documentation complete

---

## 📝 Quick Templates

### Template 1: Version Header
```markdown
**Version:** 4.0.0  
**Last Updated:** January 2025
```

### Template 2: Related Docs
```markdown
## 🔗 Related Documentation

- **[Guidelines.md](../Guidelines.md)** - Main guidelines
- **[overview-components.md](../overview-components.md)** - Component architecture
- **[FILE_STRUCTURE.md](../FILE_STRUCTURE.md)** - File organization
- **[SITEMAP.md](../SITEMAP.md)** - Site navigation
```

### Template 3: Mock Data
```markdown
## 📦 Data Source

```typescript
import { dataName } from '@/data/mock';
import type { TypeName } from '@/data/types';
```

See [mock-data.md](../mock-data.md) for details.
```

### Template 4: CMS Integration
```markdown
## 🔗 CMS Integration

```typescript
import { mockData } from '@/data/mock';
import { useContentfulHook } from '@/hooks/useContentful';

const { data: cmsData } = useContentfulHook();
const data = cmsData || mockData;
```

See [contentful-integration.md](../contentful-integration.md) for setup.
```

### Template 5: File Name Note
```markdown
## 📁 File Location

**Actual Component:** `/components/category/ActualName.tsx`  
**Note:** Component is named `ActualName` in codebase
```

---

## 📊 Progress Tracking

### Phase 1: Components
- Priority 1: ☐☐☐☐ (0/4)
- Priority 2: ☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐☐ (0/20)
- **Total:** 0/24 (0%)

### Phase 2: Design Tokens
- ☐☐☐ (0/3)
- **Total:** 0/3 (0%)

### Phase 3: Sections/etc
- Sections: ☐☐☐☐☐☐ (0/6)
- Blocks: ☐☐☐☐ (0/4)
- Parts: ☐☐☐ (0/3)
- Patterns: ☐ (0/1)
- Templates: ☐ (0/1)
- **Total:** 0/15 (0%)

### Overall Progress
**Completed:** 0/42 (0%)  
**Remaining:** 42 files  
**Estimated Time:** 3.5-4.5 hours

---

## 🎯 Execution Order

**Recommended sequence:**

1. **Phase 1 Priority 1** (ContactForm, SocialLinks, PortfolioCard, BlogCard)
2. **Phase 2** (Design Tokens - quick wins)
3. **Phase 1 Priority 2** (Remaining components)
4. **Phase 3** (Sections/Blocks/Patterns/Parts)

**Or work in batches:**

1. All integration components
2. All standard components
3. All design tokens
4. All structural files

---

## 🚀 Ready to Execute

**Choose your approach:**
- ☐ Sequential (Phase 1 → Phase 2 → Phase 3)
- ☐ Batch (All similar files together)
- ☐ Priority (Critical files first)

**Start tracking progress above as you complete each file!**

---

**Total Time:** 3.5-4.5 hours  
**Total Files:** 42  
**Target:** v4.0.0  
**Status:** 🎯 Ready
