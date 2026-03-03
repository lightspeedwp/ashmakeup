# WordPress metadata mapping audit

**Date:** March 3, 2026
**Scope:** `/docs/cms-field-mapping.md` vs `/hooks/useWordPress.ts` mapper functions
**Auditor:** AI (automated)
**Findings:** 14 issues (0 Critical, 6 High, 5 Medium, 3 Low)

---

## Summary

The CMS field mapping doc (v1.0.0, last updated February 2026) is significantly outdated. The document describes ACF group-based field access (`post.acf.*`) but the actual mapper functions in `useWordPress.ts` read from `post.meta._*` (the WordPress REST API meta representation). Additionally, several portfolio fields reference the wrong source entirely, the `subcategory` field is undocumented, and the doc contains two stale references (deleted export file, forbidden `import.meta.env` syntax).

---

## High priority (field source mismatch)

### H-01: Portfolio `images` field source
- **Doc says:** `portfolio.acf.gallery` (ACF Gallery field)
- **Mapper reads:** `post.meta._images` (JSON string, parsed), with fallback to `_embedded['wp:featuredmedia']`
- **Fix:** Update doc to `post.meta._images` with JSON parse note

### H-02: Portfolio `event` field name
- **Doc says:** `portfolio.acf.event_name`
- **Mapper reads:** `post.meta._event`
- **Fix:** Update doc field name to `meta._event`

### H-03: Portfolio `date` field source
- **Doc says:** `portfolio.acf.work_date` (ACF Date Picker)
- **Mapper reads:** `post.date` (WordPress core field)
- **Fix:** Update doc to `post.date` (Core field)

### H-04: Portfolio `content` field source
- **Doc says:** `portfolio.acf.long_content` (ACF WYSIWYG)
- **Mapper reads:** `post.content.rendered` (WordPress core field)
- **Fix:** Update doc to `portfolio.content.rendered` (Core field)

### H-05: Missing `subcategory` field
- **Not in doc at all**
- **Mapper reads:** `post.meta._subcategory`
- **Fix:** Add row to PortfolioEntry table

### H-06: All `acf.*` references should be `meta._*`
- **Scope:** BlogPost fields `read_time`, `featured`, `faqs`; PortfolioEntry fields `featured`, `images`
- **Doc uses:** `post.acf.field_name` notation
- **Mapper uses:** `post.meta._field_name` notation
- **Fix:** Add convention note and update all ACF field references to `meta._*`

---

## Medium priority (stale content)

### M-01: `import.meta.env` in useContent code example
- **Line 245:** `const useWP = import.meta.env.VITE_USE_WORDPRESS === 'true';`
- **Actual:** `USE_WORDPRESS` constant (env vars removed per bundler rules)
- **Fix:** Update code example

### M-02: `/dist/wordpress-export.json` reference
- **Lines 258-262:** References this file for content import
- **Status:** File was deleted Feb 25, 2026 during cleanup audit
- **Fix:** Update note to say file was deleted; describe regeneration if needed

### M-03: "Mirrors Contentful structure" in type file comments
- **File:** `/data/types/blog.ts` line 3
- **Fix:** Update to "WordPress CPT structure"

### M-04: Doc version and date
- **Current:** v1.0.0, February 2026
- **Fix:** Bump to v2.0.0, March 2026

### M-05: PortfolioEntry `excerpt` mapping
- **Doc says:** `portfolio.excerpt.rendered` (Core field)
- **Mapper reads:** `grab(grab(p, 'excerpt'), 'rendered').replace(/<[^>]+>/g, '')` (strips HTML tags)
- **Fix:** Add strip-HTML note to doc

---

## Low priority (cosmetic)

### L-01: PortfolioImage `position` and `aspectRatio` defaults
- **Mapper sets defaults** on featured media fallback: `position: 'center'`, `aspectRatio: '4:3'`
- **Doc:** PortfolioImage fields don't mention these defaults
- **Fix:** Add note about fallback defaults

### L-02: BlogPost `content` type description
- **Doc says:** `string | RichText`
- **Type file says:** `string | any`
- **Mapper returns:** `grab(postContent, 'rendered')` which is always a string
- **Fix:** Simplify to `string` with note about WP returning rendered HTML

### L-03: EventEntry section in CMS doc
- **Status:** Events feature was removed (footer link excluded, no mapper exists)
- **Fix:** Add deprecation note to EventEntry section

---

## Action items

1. Update `/docs/cms-field-mapping.md` with all fixes above
2. Update `/data/types/blog.ts` file comment (M-03)
3. Add task list entry
