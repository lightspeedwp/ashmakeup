# Task 02: Data Normalisation

**Generated:** February 21, 2026
**Updated:** February 22, 2026 (ISO 8601 validation utility complete)
**Based on:** Phase 2 (Data Model Audit) + Phase 7 (Root Cause Analysis)
**Priority:** P3 (Enhancement)
**Status:** ✅ COMPLETE

## 1. Objective

Standardise data models to ensure strict ISO 8601 date handling, remove legacy field aliases, and document the content model mapping for CMS migration.

## 2. Tasks

### 2.1. Standardise Date Fields

**Hygiene Audit Finding:** `publishedDate` appears in 3 files (5 occurrences).

- [x] **Action:** `@deprecated` JSDoc added to `publishedDate` in `/data/types/blog.ts` (line 82-86). **Done.**
- [x] **Action:** `/utils/schemaService.ts` line 156: Uses fallback `post.publishedAt || post.publishedDate`. Removed `publishedDate` fallback — now uses `publishedAt` only.
- [x] **Action:** `/hooks/useMockData.ts` lines 72-73: Adds `publishedDate: post.publishedAt` for backward compatibility. Removed backward compat fields (`publishedDate`, `readingTime`).
- [x] **Action:** Ensure all ISO strings are strictly formatted (e.g., `2026-02-21T12:00:00Z` not `2026-02-21`).
  - **Finding:** All blog, portfolio, video, podcast, testimonial, and event date fields use valid ISO 8601 date-only (`YYYY-MM-DD`) or datetime (`YYYY-MM-DDTHH:mm:ss`) strings.
  - **Intentional exception:** `/data/mock/pages/history.ts` uses display strings (`"July 2019"`, `"August 2020"`) because these represent vague time periods — converting to ISO would imply false precision.
  - **Action:** Created `isISO8601()`, `assertISO8601()`, `formatRelativeDate()`, `formatDateRange()`, and `toDatetimeAttr()` in `/utils/formatDate.ts` (v2.0.0). These utilities enable runtime validation in dev mode and provide richer date formatting for blog/portfolio cards.

### 2.2. Schema Documentation

- [x] **Action:** Create `/data/schema.md` documenting the content model mapping:

| TypeScript Interface | WordPress Object | Key Field Mapping |
|---------------------|------------------|-------------------|
| `PortfolioEntry` | CPT `portfolio` | `title` -> `post_title`, `description` -> `post_content`, `images` -> `acf_gallery` |
| `BlogPost` | Post Type `post` | `title` -> `post_title`, `content` -> `post_content`, `category` -> `category` tax |
| `Video` | CPT `video` | `videoUrl` -> `acf_oembed`, `duration` -> `acf_text` |
| `Podcast` | CPT `podcast` | `audioUrl` -> `acf_file`, `season` -> `acf_number` |
| `HeroContent` | ACF Options Page | Global site settings or per-page meta |
| `EventEntry` | CPT `event` | `title` -> `post_title`, `location` -> `acf_text` |

- [x] **Action:** Document required vs optional fields per interface.
- [x] **Action:** Document the `useContent.ts` facade pattern and `VITE_USE_WORDPRESS` toggle.

### 2.3. Clean Up Legacy Type Aliases

- [x] **Action:** Audit for inconsistent image field naming (`featuredImage` vs `image` vs `thumbnail` vs `coverImage`).
  - **Finding:** Image field naming is **intentionally semantic** per content type:
    - `BlogPost.featuredImage: BlogImage` — structured object ✅
    - `Video.thumbnailUrl: string` — flat URL (correct for video thumbnails) ✅
    - `Podcast.coverImage: { src: string; alt: string }` — inline object (podcast cover art) ✅
    - `Event.featuredImage: EventImage` — structured object ✅
    - `PortfolioEntry.images: PortfolioImage[]` — array, no single featured ✅
    - `SearchResult.image: string` — flat URL (simplified search result) ✅
    - `BlogAuthor.image: string` — **legacy alias for `avatar`**, now `@deprecated` ✅
  - **Conclusion:** No renaming needed. The only true alias (`BlogAuthor.image`) is now deprecated.
- [x] **Action:** Audit for inconsistent reading time fields (`readingTime` vs `readTime`).
  - **Finding:** `readTime` is the primary field. `readingTime` is `@deprecated` in `BlogPost`.
  - All mock data uses `readTime` ✅
  - All components use `readTime` ✅
  - `schemaService.ts` fallback to `readingTime` removed ✅
- [x] **Action:** Create deprecation timeline: remove `publishedDate`, `updatedDate`, `readingTime`, and `BlogAuthor.image` aliases in next major version (v8.0.0).

## 3. Dependencies

- None. Can run in parallel with Task 01.
- Informs Task 05 (WordPress Migration Roadmap) for CMS field mapping.

## 4. Impact

- Ensures data consistency for API/CMS integration.
- Reduces confusion for developers working with the `useContent` facade.
- Eliminates ambiguous field names before WordPress content import.

## 5. Effort

- **Time:** 2-3 hours.
- **Complexity:** Low.