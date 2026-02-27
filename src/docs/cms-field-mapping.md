# Content Model & CMS Field Mapping

**Version:** 1.0.0
**Last Updated:** February 2026
**Purpose:** Document TypeScript interface to WordPress CPT/ACF field mapping for the Dual Mode Architecture.
**Moved from:** `/data/schema.md` (relocated to `/docs/` per [Guidelines.md folder conventions](../guidelines/Guidelines.md))

---

## Architecture Overview

The application uses a **Dual Mode Architecture** controlled by the `VITE_USE_WORDPRESS` environment variable:

```
VITE_USE_WORDPRESS=false  (default)  -->  /data/mock/*  (local JSON)
VITE_USE_WORDPRESS=true              -->  WordPress REST API + ACF
```

### Data Flow

```
Component
  |
  v
useContent.ts (facade hook)
  |
  +-- VITE_USE_WORDPRESS=false --> useMockData.ts --> /data/mock/*
  |
  +-- VITE_USE_WORDPRESS=true  --> useWordPress.ts --> WP REST API
```

**Facade Hook:** `/hooks/useContent.ts`
**Mock Data Hook:** `/hooks/useMockData.ts`
**WordPress Hook:** `/hooks/useWordPress.ts`

---

## Content Type Mapping

### 1. BlogPost

| TypeScript Field | Required | Type | WordPress Object | ACF / WP Field |
|---|---|---|---|---|
| `id` | Yes | `string` | `post.id` | Auto (WP post ID) |
| `slug` | Yes | `string` | `post.slug` | Auto (WP slug) |
| `title` | Yes | `string` | `post.title.rendered` | Core field |
| `excerpt` | Yes | `string` | `post.excerpt.rendered` | Core field |
| `content` | Yes | `string \| RichText` | `post.content.rendered` | Core field |
| `featuredImage` | Yes | `BlogImage` | `post._embedded['wp:featuredmedia']` | Core (featured image) |
| `publishedAt` | Yes | `string` (ISO 8601) | `post.date` | Core field |
| `updatedAt` | No | `string` (ISO 8601) | `post.modified` | Core field |
| `category` | No | `string` | `post._embedded['wp:term'][0]` | Core taxonomy |
| `tags` | No | `string[]` | `post._embedded['wp:term'][1]` | Core taxonomy |
| `readTime` | No | `number` | `post.acf.read_time` | ACF Number field |
| `author` | No | `BlogAuthor` | `post._embedded.author[0]` | Core field |
| `featured` | No | `boolean` | `post.acf.featured` | ACF True/False field |
| `faqs` | No | `FAQ[]` | `post.acf.faqs` | ACF Repeater field |

**Deprecated fields (remove in next major version):**
- `publishedDate` - Use `publishedAt`
- `updatedDate` - Use `updatedAt`
- `readingTime` - Use `readTime`

**Type location:** `/data/types/blog.ts`
**Mock data:** `/data/mock/blog/posts.ts`

---

### 2. PortfolioEntry

| TypeScript Field | Required | Type | WordPress Object | ACF / WP Field |
|---|---|---|---|---|
| `id` | Yes | `string` | `portfolio.id` | Auto (WP post ID) |
| `slug` | Yes | `string` | `portfolio.slug` | Auto (WP slug) |
| `title` | Yes | `string` | `portfolio.title.rendered` | Core field |
| `category` | Yes | `string` (union) | `portfolio._embedded['wp:term'][0]` | Custom taxonomy `portfolio_category` |
| `images` | Yes | `PortfolioImage[]` | `portfolio.acf.gallery` | ACF Gallery field |
| `description` | Yes | `string` | `portfolio.content.rendered` | Core field |
| `location` | No | `string` | `portfolio.acf.location` | ACF Text field |
| `event` | No | `string` | `portfolio.acf.event_name` | ACF Text field |
| `date` | No | `string` | `portfolio.acf.work_date` | ACF Date Picker field |
| `content` | No | `string` | `portfolio.acf.long_content` | ACF WYSIWYG field |
| `excerpt` | No | `string` | `portfolio.excerpt.rendered` | Core field |
| `tags` | Yes | `string[]` | `portfolio._embedded['wp:term'][1]` | Custom taxonomy `portfolio_tag` |
| `featured` | Yes | `boolean` | `portfolio.acf.featured` | ACF True/False field |
| `order` | Yes | `number` | `portfolio.menu_order` | Core field |
| `faqs` | No | `FAQ[]` | `portfolio.acf.faqs` | ACF Repeater field |

**Type location:** `/data/types/portfolio.ts`
**Mock data:** `/data/mock/portfolio/`

---

### 3. Video

| TypeScript Field | Required | Type | WordPress Object | ACF / WP Field |
|---|---|---|---|---|
| `id` | Yes | `string` | `video.id` | Auto (WP post ID) |
| `slug` | Yes | `string` | `video.slug` | Auto (WP slug) |
| `title` | Yes | `string` | `video.title.rendered` | Core field |
| `description` | Yes | `string` | `video.excerpt.rendered` | Core field |
| `content` | Yes | `string` | `video.content.rendered` | Core field |
| `thumbnailUrl` | Yes | `string` | `video.acf.thumbnail` | ACF Image field (URL) |
| `videoUrl` | Yes | `string` | `video.acf.video_url` | ACF oEmbed field |
| `platform` | Yes | `'youtube' \| 'vimeo'` | `video.acf.platform` | ACF Select field |
| `duration` | Yes | `string` | `video.acf.duration` | ACF Text field (e.g. "12:34") |
| `category` | Yes | `string` | `video._embedded['wp:term'][0]` | Custom taxonomy `video_category` |
| `tags` | Yes | `string[]` | `video._embedded['wp:term'][1]` | Custom taxonomy `video_tag` |
| `featured` | Yes | `boolean` | `video.acf.featured` | ACF True/False field |
| `publishedAt` | Yes | `string` (ISO 8601) | `video.date` | Core field |
| `views` | No | `number` | `video.acf.views` | ACF Number field |
| `likes` | No | `number` | `video.acf.likes` | ACF Number field |
| `faqs` | No | `FAQ[]` | `video.acf.faqs` | ACF Repeater field |

**Type location:** `/data/types/videos.ts`
**Mock data:** `/data/mock/videos/entries.ts`

---

### 4. Podcast

| TypeScript Field | Required | Type | WordPress Object | ACF / WP Field |
|---|---|---|---|---|
| `id` | Yes | `string` | `podcast.id` | Auto (WP post ID) |
| `slug` | Yes | `string` | `podcast.slug` | Auto (WP slug) |
| `title` | Yes | `string` | `podcast.title.rendered` | Core field |
| `description` | Yes | `string` | `podcast.excerpt.rendered` | Core field |
| `content` | Yes | `string` | `podcast.content.rendered` | Core field |
| `audioUrl` | Yes | `string` | `podcast.acf.audio_url` | ACF File field (URL) |
| `duration` | Yes | `string` | `podcast.acf.duration` | ACF Text field |
| `episodeNumber` | Yes | `number` | `podcast.acf.episode_number` | ACF Number field |
| `seasonNumber` | No | `number` | `podcast.acf.season_number` | ACF Number field |
| `category` | Yes | `string` | `podcast._embedded['wp:term'][0]` | Custom taxonomy `podcast_category` |
| `tags` | Yes | `string[]` | `podcast._embedded['wp:term'][1]` | Custom taxonomy `podcast_tag` |
| `publishedAt` | Yes | `string` (ISO 8601) | `podcast.date` | Core field |
| `featured` | Yes | `boolean` | `podcast.acf.featured` | ACF True/False field |
| `coverImage` | Yes | `{ src, alt }` | `podcast._embedded['wp:featuredmedia']` | Core (featured image) |
| `transcript` | No | `string` | `podcast.acf.transcript` | ACF Textarea field |
| `guests` | No | `Guest[]` | `podcast.acf.guests` | ACF Repeater field |
| `faqs` | No | `FAQ[]` | `podcast.acf.faqs` | ACF Repeater field |

**Type location:** `/data/types/podcast.ts`
**Mock data:** `/data/mock/podcasts/episodes.ts`

---

### 5. EventEntry

| TypeScript Field | Required | Type | WordPress Object | ACF / WP Field |
|---|---|---|---|---|
| `id` | Yes | `string` | `event.id` | Auto (WP post ID) |
| `slug` | Yes | `string` | `event.slug` | Auto (WP slug) |
| `title` | Yes | `string` | `event.title.rendered` | Core field |
| `description` | Yes | `string` | `event.content.rendered` | Core field |
| `type` | Yes | `EventType` | `event.acf.event_type` | ACF Select field |
| `location` | Yes | `EventLocation` | `event.acf.location` | ACF Group field |
| `editions` | Yes | `EventEdition[]` | `event.acf.editions` | ACF Repeater field |
| `category` | Yes | `string` | `event._embedded['wp:term'][0]` | Custom taxonomy `event_category` |
| `tags` | Yes | `string[]` | `event._embedded['wp:term'][1]` | Custom taxonomy `event_tag` |
| `featured` | Yes | `boolean` | `event.acf.featured` | ACF True/False field |
| `faqs` | No | `FAQ[]` | `event.acf.faqs` | ACF Repeater field |

**Type location:** `/data/types/events.ts`
**Mock data:** `/data/mock/events/`

---

### 6. HeroContent (Page Meta)

| TypeScript Field | Required | Type | WordPress Object | ACF / WP Field |
|---|---|---|---|---|
| `title` | Yes | `string` | Page ACF or Options Page | `acf.hero_title` |
| `subtitle` | No | `string` | Page ACF or Options Page | `acf.hero_subtitle` |
| `tagline` | No | `string` | Page ACF or Options Page | `acf.hero_tagline` |
| `images` | No | `HeroImage[]` | Page ACF or Options Page | `acf.hero_images` (Gallery) |

**Type location:** `/data/types/page.ts`
**Mock data:** `/data/mock/pages/home.ts`, `/data/mock/images/hero-images.ts`

---

## WordPress Custom Post Types

| CPT Slug | TypeScript Interface | REST Endpoint |
|---|---|---|
| `post` | `BlogPost` | `/wp-json/wp/v2/posts` |
| `portfolio` | `PortfolioEntry` | `/wp-json/wp/v2/portfolio` |
| `video` | `Video` | `/wp-json/wp/v2/video` |
| `podcast` | `Podcast` | `/wp-json/wp/v2/podcast` |
| `event` | `EventEntry` | `/wp-json/wp/v2/event` |

## WordPress Custom Taxonomies

| Taxonomy Slug | Used By | REST Endpoint |
|---|---|---|
| `category` | BlogPost | `/wp-json/wp/v2/categories` |
| `post_tag` | BlogPost | `/wp-json/wp/v2/tags` |
| `portfolio_category` | PortfolioEntry | `/wp-json/wp/v2/portfolio_category` |
| `portfolio_tag` | PortfolioEntry | `/wp-json/wp/v2/portfolio_tag` |
| `video_category` | Video | `/wp-json/wp/v2/video_category` |
| `video_tag` | Video | `/wp-json/wp/v2/video_tag` |
| `podcast_category` | Podcast | `/wp-json/wp/v2/podcast_category` |
| `podcast_tag` | Podcast | `/wp-json/wp/v2/podcast_tag` |
| `event_category` | EventEntry | `/wp-json/wp/v2/event_category` |
| `event_tag` | EventEntry | `/wp-json/wp/v2/event_tag` |

---

## Date Field Standards

All date fields MUST use **ISO 8601** format: `YYYY-MM-DDTHH:mm:ssZ`

**Example:** `2026-02-21T12:00:00Z`

**Canonical field names:**
- `publishedAt` (not ~~publishedDate~~)
- `updatedAt` (not ~~updatedDate~~)
- `readTime` (not ~~readingTime~~)

---

## Image Field Standards

All image objects follow the `PortfolioImage` or `BlogImage` interface:

| Field | Required | Description |
|---|---|---|
| `src` | Yes | Image URL (Figma asset, CDN URL, or WP media URL) |
| `alt` | Yes | Accessible alt text |
| `title` | No | Display title (lightbox captions) |
| `caption` | No | Short caption |
| `width` | No | Width in pixels |
| `height` | No | Height in pixels |

**Known alias:** Some legacy code uses `url` instead of `src`. The `useMockData.ts` hook maps `src` to `url` for backward compatibility. Prefer `src` in all new code.

---

## useContent Facade Pattern

The `useContent.ts` hook re-exports from either `useMockData.ts` or `useWordPress.ts` based on environment:

```typescript
// /hooks/useContent.ts
const useWP = import.meta.env.VITE_USE_WORDPRESS === 'true';

export const useBlogPosts = useWP ? useWPBlogPosts : useMockBlogPosts;
export const useBlogPost = useWP ? useWPBlogPost : useMockBlogPost;
// ... etc
```

**All page components should import from `useContent`, never directly from `useMockData` or `useWordPress`.**

---

## Content Import

A WordPress export file exists at `/dist/wordpress-export.json` for initial content seeding.

**Import steps:**
1. Set up WordPress instance with required CPTs and ACF fields
2. Import `/dist/wordpress-export.json` via WP-CLI or WP importer
3. Set `VITE_USE_WORDPRESS=true` in environment
4. Verify all endpoints return expected data shape

---

**Last Updated:** February 2026
