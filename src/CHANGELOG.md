# Changelog

All notable changes to the Ash Shaw Makeup Portfolio will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

---

## [8.1.0] - 2026-03-02

### Added

#### Content Expansion Phase 6 — Multi-Content Growth

- **18 new portfolio entries** (42 total, up from 24):
  - 5 Berlin club/warehouse entries in `/data/mock/portfolio/uv-makeup.ts` — Berghain, About Blank, ://about blank, Griessmuehle, Sisyphos (2019–2023)
  - 9 international festival entries in `/data/mock/portfolio/festivals.ts` — Vortex (South Africa), Rainbow Serpent (Australia), Solipse (Germany), Boom Festival (Portugal), Lost Theory (Portugal), Ozora (Hungary), Universo Paralello (Brazil), Antaris Project (Germany), Shankra (Switzerland) (2019–2024)
  - 1 Chiang Mai mountain temple entry in `/data/mock/portfolio/thailand.ts` (2024)
  - 3 editorial/experimental entries in new `/data/mock/portfolio/editorial.ts` — Neon architecture series 1, Abstract expressionism face, Cyborg renaissance (2021–2024)
  - New "Editorial & experimental" section added to `portfolioSections` in `/data/mock/portfolio/index.ts`
- **7 new blog posts** (18 total, up from 11) in `/data/mock/blog/posts.ts`:
  - "The dancefloor gave me everything" (2020-12-15)
  - "Neon revelations: birth of a UV art form" (2024-10-15)
  - "Six Cats: the green garden begins" (2026-02-20)
  - "Twenty-three years at LightSpeed" (2026-01-15)
  - "Berlin called, I answered" (2019-07-28)
  - "Eighty-six hours: Solar eclipse festival Zambia" (2021-06-10)
  - "The tribes that made me" (2026-02-04)
- **10 new video entries** (11 total, up from 1) in `/data/mock/videos/entries.ts`:
  - vid-2: Origin Festival 2026 UV painting highlight reel (FEATURED)
  - vid-3: Ambidextrous painting technique tutorial
  - vid-4: 300km cycle to Origin Festival time-lapse (FEATURED)
  - vid-5: UV colour theory: what you see vs what glows
  - vid-6: Behind the scenes: Reiser Festival Czech Republic
  - vid-7: Berlin summer 2023: cycling between festivals
  - vid-8: Six Cats garden tour: harvest season 2024
  - vid-9: WordPress design system build time-lapse
  - vid-10: Thailand Muay Thai training montage
  - vid-11: The Cow Man era: throwback festival footage
- **13 new sticker designs** (40 total, up from 27) in `/data/mock/images/sticker-graphics.ts`:
  - Sacred Geometry: Flower of life mandala, Metatron's cube, Sri Yantra fractal
  - Festival Typography: Dance until sunrise, 138 BPM heartbeat, Good vibes only
  - Neurodivergent Pride: ADHD brain on fire, Wired different
  - Cycling & Endurance: Gravel bike adventure, Two wheels to the dancefloor
  - Six Cats Branding: Six Cats green garden
  - Berlin Scene: Berlin calling
  - Abstract: Hypnotic spiral
- 7 new sticker theme categories in `/data/mock/ui/stickers.ts` (Sacred geometry, Festival phrases, Neurodivergent pride, Cycling & endurance, Six Cats & branding, Berlin scene, Abstract)

### Fixed

- **Header light mode nav link contrast** — `.header--at-top` white text now scoped to `.dark` only; `html:not(.dark)` overrides added for dark text and accessible hover states in `/styles/blocks/header.css`

### Documentation

- QA Testing Phase 6 prompt created at `/prompts/qa-testing-phase6.md`
- QA report at `/reports/qa-testing-phase6/qa-report.md` (v1.1.0) — 13/13 data integrity tests passed, 0 critical issues, header fix applied, portfolio count corrected to 42
- Content Expansion Phase 6 task list at `/tasks/content-expansion-phase6-tasks.md` (v1.2.0)
- 4 sub-audit reports in `/reports/content-expansion-phase6/` (blog, video, portfolio, sticker)
- README.md updated with v8.1.0 content counts table
- `/data/README.md` updated with editorial portfolio category and expanded directory structure

---

## [8.0.0] - 2026-03-01

### Added

#### Pages — About Sub-page Ecosystem (18 new pages)
- `HiddenAboutPage` (`/about`) — unlisted gateway to Ash's world; full story summary, media promotions, social links, and jump-links to all about sub-pages
- `HistoryPage` (`/about/history`) — studio and personal history archive
- `BerlinPage` (`/about/berlin`) — Berlin as creative anchor
- `BookPage` (`/about/book`) — book project showcase
- `BioPage` (`/about/bio`) — full long-form biography
- `ProcessPage` (`/about/process`) — creative process breakdown
- `LucyPage` (`/about/lucy-in-the-sky-with-diamonds`) — psychedelic and artistic influences
- `TravelsPage` (`/about/travels`) — nomadic festival circuit and travel diary
- `PodcastPage` (`/about/podcast`) — podcast project overview
- `AdhdPage` (`/about/adhd`) — personal ADHD experience essay
- `CyclingPage` (`/about/cycling`) — cycling as identity and lifestyle
- `AquariusPage` (`/about/aquarius`) — Aquarian identity blueprint
- `MusicPage` (`/about/music`) — psytrance and 140 BPM musical obsession
- `LightSpeedPage` (`/about/lightspeed`) — LightSpeed WordPress agency chapter
- `EducationPage` (`/about/education`) — unconventional education story
- `PartnersPage` (`/about/partners`) — people along the way
- `FitnessPage` (`/about/fitness`) — the moving body and fitness practice
- `SixCatsPage` (`/about/six-cats`) — Six Cats Cannabis Club

#### Pages — New Standalone Pages
- `ManifestoPage` (`/about/manifesto`) — the Neon vs Atomic Black creative manifesto
- `EbookPage` (`/ebook`) — fully responsive two-page eBook reader with touch swipe, keyboard arrow navigation, table of contents drawer, and fullscreen mode; dual-spread on desktop, single-page on mobile/tablet
- `PressKitPage` (`/press`) — downloadable press kit with copy-to-clipboard bio snippets and media asset grid
- `GearPage` (`/toolkit`) — full makeup gear and toolkit showcase organised by category
- `FestivalLandingPage` (`/next-festival`) — festival countdown landing page with live timer and hero image
- `SitemapPage` (`/sitemap`) — comprehensive visual site index covering all pages, categories, posts, podcasts, videos, tags, dev tools, and legal pages
- `StyleGuidePage` (`/style-guide`, also at `/dev-tools/style-guide`) — full design-system reference with live previews of all 26 animations, all tokens, and all icon sets

#### Pages — Legal
- `PrivacyPolicy` (`/privacy`) — full privacy policy with data handling documentation
- `TermsAndConditions` (`/terms`) — terms and conditions
- `AccessibilityStatementPage` (`/about/accessibility`) — WCAG 2.1 AA compliance statement

#### Pages — Events System (entirely new)
- `EventsPage` (`/events`) — full events listing with hero, stats bar (km cycled, editions attended), and category filter pills
- `EventDetailPage` (`/events/:slug`) — single event detail with rich content and TravelBadge
- `EventCategoryPage` (`/events/category/:slug`) — category archive for events
- `EventTagPage` (`/events/tag/:slug`) — tag archive for events
- `TravelBadge` component — decorative travel/festival badge element used in event cards

#### Pages — Archive Sub-pages (Blog, Portfolio, Video, Podcast)
- `BlogCategoryPage` (`/blog/category/:slug`) — filtered blog archive by category
- `BlogTagPage` (`/blog/tag/:slug`) — filtered blog archive by tag
- `PortfolioMainPage` (`/portfolio`) — full gallery with category filtering, pagination, lightbox, and FAQ section; replaces the previous flat portfolio page
- `PortfolioDetailPage` — single portfolio entry detail view
- `PortfolioCategoryPage` (`/portfolio/category/:slug`) — category archive for portfolio
- `PortfolioTagPage` (`/portfolio/tag/:slug`) — tag archive for portfolio
- `PortfolioResolver` (`/portfolio/:slug`) — slug-based router that resolves to the correct portfolio detail page
- `VideoCategoryPage` (`/videos/category/:slug`) — category archive for videos
- `VideoTagPage` (`/videos/tag/:slug`) — tag archive for videos
- `VideoDetailPage` (`/video/:slug`) — single video page with embedded player, rich markdown content, tags, and share footer
- `PodcastCategoryPage` (`/podcasts/category/:slug`) — category archive for podcasts
- `PodcastTagPage` (`/podcasts/tag/:slug`) — tag archive for podcasts
- `PodcastDetailPage` (`/podcast/:slug`) — single episode detail page

#### Navigation — Mega Menus & Dropdowns
- `BlogMegaMenu` — three-column dropdown (featured post + image, 5 recent posts, category list with neon dots and counts); "Neon Cascade Ripple" pure-CSS drop animation
- `PortfolioMegaMenu` — three-column dropdown (featured card + image, 5 recent entries, category list with neon dots and counts); "Neon Grid Reveal" staggered slide-in animation
- `AboutDropdown` — animated process-flow vertical timeline in the desktop header; keyboard accessible (Arrow keys, Escape, Enter/Space); pure-CSS stagger, line draw, and neon dot pulse
- `ContactMiniMenu` — compact contact overlay for the header contact link
- `ThemeToggle` — persistent light/dark mode switcher with localStorage sync and `prefers-color-scheme` detection

#### Sections
- `FestivalCountdown` — live countdown timer to next festival with day/hour/minute/second display
- `InstagramFeed` — Behold.so embeddable widget integration (`@feedmymedia`); two-column layout (25% title/CTA + 75% widget); imperative DOM insertion via `useRef` to prevent React reconciliation conflicts with the `behold-widget` custom element
- `TestimonialsSection` — testimonial display using `ResponsiveGridSlider` (desktop 3-column grid, tablet/mobile slider)
- `UVMakeupSection` — UV/blacklight portfolio showcase with `ResponsiveGridSlider` hybrid layout and `EnhancedLightbox` integration
- `WhySection` — new homepage "why" narrative section

#### UI Components
- `EnhancedLightbox` (v4.0.0) — video-capable lightbox modal with pagination dots, prominent slider arrows, zoom in/out, grid overview mode, keyboard trap (`useKeyboardTrap`), and `VideoPlayer` integration
- `VideoPlayer` (v2.0.0) — unified video player supporting direct files (MP4/WebM) with custom controls, YouTube embeds, and Vimeo embeds (auto-detected by URL pattern)
- `ResponsiveGridSlider` — layout component that renders a CSS grid on desktop and a touch/keyboard slider on tablet and mobile; used by `TestimonialsSection` and `UVMakeupSection`
- `OptimizedImage` — client-side image optimization wrapper using the Canvas API for runtime resizing and compression
- `ReadMoreButton` — styled expandable read-more toggle button
- `SearchInput` — accessible search input with debounce and clear button
- `SectionCard` — reusable content card primitive for section layouts
- `ShareComponent` — social sharing widget with copy-link, Twitter, and native share API support
- `SliderCard` — card variant optimised for slider/carousel contexts

#### Common Components
- `RootLayout` — shared application shell wrapping all routes; provides Header, Footer, PWAInstallPrompt, OfflineIndicator, ModalProvider, ScrollToTop, screen reader live regions, scroll restoration, and focus management on route change
- `ColorfulIcons` — custom animated SVG icon set using `dangerouslySetInnerHTML` to bypass bundler SVG transform issues; icons include ShineIcon and others with multi-stop gradients and `<animate>` keyframes
- `SafetyWrapper` — thin render error boundary targeting third-party extension errors (e.g. Behold's `beholdReplaceChildren`); part of a defence-in-depth error suppression system alongside `ErrorBoundary` and `extensionErrorSuppressor`
- `ModalContext` — React context and `useModal` hook for application-wide modal state management
- `SocialLinks` — standalone social links bar component used in header and footer

#### Custom Icon System (`/lib/`)
- `icon-base.tsx` — shared `IconProps` interface and base render logic
- `icons-set-a.tsx` through `icons-set-e.tsx` — bundler-safe icon library across 5 files using `dangerouslySetInnerHTML` for SVG children (bypasses the bundler's broken `jsxs` SVG transform); covers the full icon vocabulary of the site
- `icons.ts` — barrel export for the complete icon set

#### Mock Data — New Systems
- `/data/mock/events/` — full events data system: `origin-festival.ts`, `categories.ts`; helper functions `getEventBySlug`, `getEventsByType`, `getEventsByTag`, `getTotalEditionsAttended`, `getTotalKmCycled`
- `/data/mock/testimonials/` — testimonials data with `Testimonial` interface supporting rating, role, event, featured flag, and optional video testimonial
- `/data/mock/portfolio/uv-makeup.ts` — UV/blacklight makeup portfolio collection
- `/data/mock/portfolio/festivals.ts` — general festival makeup collection
- `/data/mock/portfolio/swiss-festivals.ts` — Swiss festival portfolio collection
- `/data/mock/portfolio/thailand.ts` — Thailand and Southeast Asia portfolio collection
- `/data/mock/portfolio/nail-art.ts` — creative nail art and fusion nail designs collection
- `/data/mock/sections/countdown.ts` — festival countdown section data
- `/data/mock/pages/ebook-pages.ts` — eBook page content with `BookPage` type
- `/data/mock/pages/events.ts`, `festival.ts`, `gear.ts`, `hidden-about.ts`, `history.ts`, `legal.ts`, `manifesto.ts`, `press.ts`, `six-cats.ts` — page content for all new pages
- `/data/mock/ui/` — 20+ new UI data files covering all new pages and components (about-dropdown, accessibility-tester, events, ebook, countdown, filters, instagram, stickers, style-guide, and more)
- `/data/types/events.ts`, `search.ts`, `videos.ts` — new TypeScript type definitions

#### Hooks
- `useAnalytics` — hook wrapping `analyticsService` for per-component view/like/read-time tracking
- `useAnimatedCount` — animated number counter with configurable duration and easing
- `useAppNavigate` — bundler-safe navigation wrapper around the custom router's `useNavigate`
- `useClickOutside` — ref-based outside-click detection
- `useDebounce` — value debounce hook for search inputs
- `useKeyboardTrap` — focus trap for modal and lightbox accessibility
- `useOptimizedImage` — hook wrapping `imageOptimizer` for React component use
- `useReducedMotion` — `prefers-reduced-motion` media query observer
- `useScrollPosition` — scroll position tracker for sticky/parallax effects
- `useScrollSpy` — active section detector for in-page navigation
- `useWordPress` — WordPress REST API integration hook (paired with the Dual Mode Architecture)

#### Utilities
- `analyticsService.ts` — localStorage-based analytics tracking views, likes, reading time, and browsing history per content type and slug
- `imageOptimizer.ts` — client-side Canvas API image processing: resize to target dimensions, compress to JPEG/WebP, generate responsive `srcSet` variants, cache blobs to avoid re-processing
- `simpleMarkdown.ts` — lightweight Markdown→HTML converter supporting headers, bold, italic, ordered/unordered lists, links, images (with Polaroid styling), and blockquotes
- `contentCounts.ts` — centralized dynamic content counts for blog categories, blog tags, and portfolio categories; computed at import time from live mock data
- `formatDate.ts` — date formatting utility
- `imageManifest.ts` — static image manifest registry
- `extensionErrorSuppressor.ts` — global error suppressor for known third-party extension errors (Behold, browser extensions)
- `faqSchema.ts` — Schema.org FAQPage JSON-LD generation helper

#### Guidelines
- `/guidelines/responsive/` — six new responsive design guidelines: `breakpoints-system.md`, `interaction-modes.md`, `layout-patterns.md`, `navigation-responsive.md`, `spacing-adjustments.md`, `typography-scaling.md`
- `/guidelines/events-system.md` — Events system data model and usage documentation
- `/guidelines/overview-blog-filtering.md` — blog filtering and archive system documentation
- `/guidelines/search-system.md` — global search system architecture
- `/guidelines/sitemap-routes.md` — full route registry documentation
- `/guidelines/voice-and-tone.md` — editorial voice and tone guide
- Multiple new component, block, section, pattern, icon, and template guideline files

#### Dev Tools
- `AnimationSpecimenPage` (`/dev-tools/neon`) — live interactive preview of all 26 CSS animation keyframes with controls

### Changed

- `AboutPage` — moved from `/about` to `/about/journey`; `/about` now serves `HiddenAboutPage` as an unlisted portal
- Portfolio architecture — `PortfolioMainPage` replaces the previous flat portfolio component; full detail/category/tag/resolver sub-page system added
- Route count — grown from ~15 to 60+ registered routes across all content types
- `routes.ts` — version bumped to 13.0.0 reflecting full route expansion; comprehensive JSDoc route map added
- Header navigation — updated to use `BlogMegaMenu`, `PortfolioMegaMenu`, `AboutDropdown`, and `ContactMiniMenu` in place of simple links

---

## [7.5.0] - 2026-03-01

### Added

- `makeup-artist` sticker entry added to `/data/mock/images/sticker-graphics.ts` — contact graphic (`figma:asset/6095d8818a83e64a063161f9df091d561fde7105.png`) registered as sticker #27, theme `psychedelic`
- `makeup-artist` mapped in `stickerThemeMap` in `/data/mock/ui/stickers.ts`
- `.contact-page-faq-fullwidth` CSS class added to `/styles/blocks/contact-page.css` — full-width FAQ block below the two-column grid
- Comprehensive Cleanup Audit 4 report — `/reports/comprehensive-cleanup/04-unused-imports.md`
- Comprehensive Cleanup Audit 5 report — `/reports/comprehensive-cleanup/05-css-hygiene.md` (87 CSS files verified, zero orphans)
- Comprehensive Cleanup Audit 6 report — `/reports/comprehensive-cleanup/06-folder-hygiene.md`
- Design System Audit report — `/reports/design-system-audit/report.md` (9 violations found, 8 accepted exceptions, all violations resolved)
- Content Audit Phase 3 report — `/reports/content-audit-phase3/report.md` (8 factual errors found and corrected)
- Social media guidelines — `/docs/social-media-guidelines.md` (12,500+ word comprehensive voice/tone guide)
- Social media content calendar template — `/docs/social-media-content-calendar-template.md` (6,000+ word planning framework)
- **4 new backdated blog posts** (total posts: 11, up from 7):
  - "Six Cats: the green garden begins" (May 22, 2019) — 5min read, Education category
  - "Berlin called, I answered" (July 28, 2019) — 4min read, Travel category
  - "Twenty-three years of LightSpeed" (Jan 15, 2026) — 6min read, Education category, FEATURED
  - "The tribes that made me" (Feb 20, 2026) — 5min read, Education category

### Changed

- `ContactPage.tsx` — `OptimizedImage` graphic removed; FAQ section lifted out of left column and placed full-width below the two-column grid
- `BlogPreviewSection.tsx` — `useContentful` import → `useContent`
- `HomePage.tsx` — `useContentful` import → `useContent`
- `AboutPage.tsx` — `useContentful` import → `useContent`
- `BlogPage.tsx` — `useContentful` import → `useContent`
- `BlogPostPage.tsx` — `useContentful` import → `useContent`
- `CardSpecimenPage.tsx` — removed unused `Tag`, `Heart`, `Mic` icon imports (dev-tools deep scan)
- `VisualRegressionTesterPage.tsx` — removed unused `takeScreenshotNote` callback and `useCallback` import (dev-tools deep scan)
- `postcss.config.js` — stale comment updated to accurately reflect Tailwind V4 Vite-plugin architecture and BEM-only styling approach
- `/guidelines/Guidelines.md` — Content Folder Protection Rule updated to historical status (folder deleted Feb 25); file structure diagram corrected; `Guidelines.md` legacy root exception explicitly documented in root restriction rule
- `/guidelines/sections/BlogPreviewSection.md` — `useContentful` code example corrected to `useContent`
- `/guidelines/wordpress-migration-guide.md` — `/dist/wordpress-export.json` reference updated with deletion notice and regeneration instructions
- `/guidelines/overview-components.md`, `/guidelines/components/PortfolioCard.md`, `/guidelines/components/BlogCard.md` — Contentful CMS references updated to WordPress/useContent
- `/tasks/task-list.md` and `/tasks/comprehensive-cleanup-tasks.md` — all post-audit follow-up items resolved and ticked; dead report links replaced with `_(report archived)_` notation
- UI Primitives Decision documented: Option A (keep all 45 shadcn stubs) — CSS cascade dependency confirmed, project feature-complete, stubs tree-shaken from production bundle
- **Design System Audit resolutions (9 violations fixed):**
  - `BlogPage.tsx` — removed `p-[0px]` arbitrary value; added `padding: 0` to `.blog-preview__grid` in block CSS
  - `PortfolioDetailPage.tsx` — replaced `p-[0px]` with BEM class `.portfolio-feedback__container`; replaced `text-center` with `.portfolio-feedback__heading`
  - `SocialLinks.tsx` — hardcoded `"#ffffff"` replaced with CSS token `"var(--wp--preset--color--base)"`
  - `portfolio-card.css` — added comprehensive `@media (prefers-reduced-motion: reduce)` block (13 rules)
  - `videos-page.css` — added `@media (prefers-reduced-motion: reduce)` block (6 rules)
  - `BlogPostPage.tsx` — hardcoded author bio migrated to `/data/mock/pages/blog.ts` `authorBio` export
  - `blog/categories.ts` — all 5 category colors converted from hex to CSS variable strings (`var(--wp--preset--color--neon-*)`)
  - `podcasts/categories.ts` — introduction category color updated to CSS variable
  - `portfolio.ts` — hardcoded "What People Say" migrated to `portfolioUI.detail.sections.feedback.heading` (sentence case)
- **Content Audit Phase 3 corrections (8 factual errors fixed):**
  - `berlinPageData` — arrival year corrected 2016 → 2019; one-way ticket framing removed; seasonal rhythm updated; covid-return section added; Sisyphos mention added
  - `bioPageData` — "Berlin-based" corrected to "Cape Town-based"; `quickFacts.based` corrected to "Cape Town (home base) / Berlin (summers)"
  - `lightspeedPageData` — company age corrected "22+ years" → "23 years" in hero and stats
- **Ebook expansion (Phase 2):**
  - Chapter 19 "Twenty-three years" added (3 content pages, LightSpeed history from `/content/lightspeed/company-history.md`)
  - Appendix B "The tribes" added (6 content pages, global + location-specific tribal identity)
  - Chapter 20 "The cumulative effect" renumbered from Chapter 18
  - All page numbers updated; duplicate Chapter 18 entries fixed
  - Total ebook now 82 pages (was 69), 20 chapters (was 18), 2 appendices (was 1)

### Removed

- `OptimizedImage` and `contactGraphic` imports removed from `ContactPage.tsx` (image migrated to sticker data file)
- `/hooks/useContentful.ts` — deprecated re-export shim deleted (all consumers migrated to `useContent`)
- `/content/` folder — 25 orphaned markdown files across 5 subfolders deleted (zero imports, all content migrated to `/data/mock/`)
- `/dist/wordpress-export.json` — stale build artifact deleted
- `.contact-page-faq-inline` rule removed from `/styles/blocks/contact-page.css` (confirmed unused — zero references in codebase)
- `/reports/root-cleanup/` — all 8 audit reports deleted (lifecycle rule: reports older than a few days; all items fully resolved)

### Documentation

- **Content Migration & Expansion — All 5 phases complete (March 2, 2026):**
  - Phase 1: Content Organization — 16 reference files created across `/content/personal/`, `/content/lightspeed/`, `/content/book/`
  - Phase 2: Ebook Expansion — 82-page ebook with 20 chapters + 2 appendices (13 pages added)
  - Phase 3: Content Audit — 8 factual errors corrected across Berlin, Bio, LightSpeed pages
  - Phase 4: Blog Topic Generation — 4 backdated posts (~2,300 words) from ebook chapters 10, 11, 19, and Appendix B
  - Phase 5: Social Media Guidelines — comprehensive voice guide (12,500 words) + content calendar template (6,000 words)
- **Social media deliverables:**
  - 5 content pillars: UV makeup (40%), cycling (20%), WordPress (20%), Six Cats (10%), tribes (10%)
  - Platform strategies: Instagram 3–5/week, Facebook 2–3/week, LinkedIn 1–2/week
  - Voice attributes: authentic, energetic, educational, community-focused, unapologetically neon
  - Hashtag strategy, engagement guidelines, crisis management, legal/ethical boundaries
  - 4 sample post templates + monthly planning framework + batching/repurposing workflows

---

## [7.4.0] - 2026-02-25

### Added

- `/CHANGELOG.md` restored in project root as a protected file
- Changelog guidelines at `/guidelines/changelog.md` with format rules, writing standards, and protection policies
- "Protected Root Files" subsection added to Guidelines.md Section 10

### Changed

- Guidelines promoted to v7.4.0
- `CHANGELOG.md` entry in root directory restrictions updated with protection status and cross-reference to changelog guideline

## [7.3.0] - 2026-02-25

### Added

- Default AI Workflow (MUST FOLLOW) section in Guidelines — enforces 4-step sequence: prompt, audit, report, task list
- Multi-audit orchestrator pattern for complex audits
- Reusability requirement for all prompt templates
- `/docs/` folder formally added to mandatory folder conventions (rule #7)
- `/docs/cms-field-mapping.md` — relocated from `/data/schema.md`
- Comprehensive cleanup orchestrator prompt at `/prompts/comprehensive-cleanup/orchestrator.md`
- 3 audit reports in `/reports/comprehensive-cleanup/` (root compliance, orphaned files, deprecated patterns)
- 8 audit reports in `/reports/root-cleanup/`
- Master task list at `/tasks/task-list.md` (permanent, never delete)

### Changed

- Guidelines.md promoted to v7.3.0
- CMS field mapping reference updated to point to `/docs/cms-field-mapping.md`

### Removed

- `/data/schema.md` — relocated to `/docs/cms-field-mapping.md`

## [7.2.0] - 2026-02-25

### Added

- Root directory restrictions — only `README.md`, `CHANGELOG.md`, and `Attributions.md` allowed as `.md` files in root
- `/docs/` folder for general project documentation
- `/scripts/` folder for all build, utility, and automation scripts
- Enforcement rules for `.md` and `.sh` file placement

### Changed

- Guidelines.md promoted to v7.2.0

## [7.1.0] - 2026-02-25

### Added

- Workflow folder conventions for `/prompts/`, `/reports/`, `/tasks/`
- Cross-referencing rules between workflow folders and guidelines
- Lifecycle rules for archiving tasks and cleaning reports

### Changed

- Guidelines.md promoted to v7.1.0

## [7.0.0] - 2026-02-25

### Added

- SEO system — centralised `setSEO()` utility (`/utils/seo.ts`) with single-call meta tag management
- Centralised SEO data file (`/data/mock/seo.ts`) — all 46 page components wired
- Schema.org JSON-LD structured data service (`/utils/schemaService.ts`)
  - WebSite, Person, BlogPosting, VideoObject, PodcastEpisode, VisualArtwork, ImageGallery, CollectionPage, BreadcrumbList, FAQPage
- Breadcrumbs component (`/components/ui/Breadcrumbs.tsx`) with Schema.org BreadcrumbList JSON-LD
- Dedicated breadcrumbs CSS at `/styles/blocks/breadcrumbs.css`

### Changed

- All 46 page components now use `setSEO()` instead of direct `document.title` manipulation
- Breadcrumbs standardised to single-source component across all sub-pages

## [6.0.0] - 2026-02-01

### Added

- Stickers Gallery page with 26 entries
- FAQ system with Schema.org FAQPage structured data
- FAQ aggregate page (`FaqAggregatePage`)
- Global search system with `ArchiveFilters` component
- Search results page (`SearchResultsPage`)
- Feedback page for testimonials (`FeedbackPage`)

### Changed

- All planned features from v4.0.0 task list (Tasks 19-36) marked complete
- Project declared feature-complete

## [5.3.0] - 2026-01-15

### Added

- Personal Art Project designation — strict non-commercial classification
- Pronoun guidelines (He/Him) and personal identity rules
- Location scope (Berlin and International Festivals only)
- Content scope restrictions (no weddings, corporate events, bridal makeup)

### Removed

- All "Shop" and "Services" pages
- Pricing, booking forms, and "Add to Cart" functionality
- All commercial and e-commerce features
- Bridal/wedding/corporate content references

### Changed

- Site focus narrowed to Portfolio (Gallery), Videos (Showcase), and Blog (Insights) only

## [5.0.0] - 2026-01-01

### Added

- Developer Tools Hub page with 23 sub-tools for design system inspection
  - Design Tokens Reference, Icon Library, Component API, Playground
  - Code Quality, Deployment Readiness, Analytics Dashboard
  - Component Showcase, Snippet Generator, Documentation Generator
  - Visual Regression Tester, Integration Tester
  - 7 specimen pages (typography, spacing, shadows, radius, buttons, cards, neon)
  - Accessibility Tester, Performance Tester
- Analytics Dashboard with localStorage-based content tracking
- Podcasts page and podcast archive system
- Videos page and video showcase system

### Changed

- Component architecture expanded to support 23 DevTools sub-routes

## [4.0.0] - 2025-12-01

### Added

- Strict BEM Architecture — systematic migration from Tailwind utilities complete
- BEM naming convention enforced (Block, Element, Modifier)
- Centralised mock data system (`/data/mock/`) as single source of truth
- TypeScript type definitions in `/data/types/`
- Portfolio data service (`/utils/portfolioService.ts`)
- Advanced blog system with search, filtering, and pagination
- Blog post page with rich content and social sharing
- Dual Mode Architecture toggle (`VITE_USE_WORDPRESS`) for Headless WordPress
- `useContent` facade hook pattern (mock data vs WordPress)
- CMS field mapping documentation for WordPress CPT/ACF fields
- Custom lightweight router at `/lib/router.tsx`
- Bundler compatibility workarounds (no optional chaining, nullish coalescing, etc.)
- Helper functions: `grab()`, `arrayGet()`, `setProp()`, `buildContextValue()`

### Changed

- All styling migrated from Tailwind utilities to semantic BEM classes
- All hardcoded content migrated to `/data/mock/` imports
- Inline styles prohibited — all styling via CSS classes in `/styles/globals.css`

### Removed

- Tailwind utility class usage (strictly forbidden)
- Inline styles from all components
- Hardcoded content strings from components

## [3.0.0] - 2025-10-01

### Added

- Neon vs Atomic Black visual identity system
- 8 neon colors: electric green, hot pink, royal blue, pure yellow, blazing orange, violet purple, aqua cyan, hot red
- Atomic Black (#0F0F0F) background system
- 4 signature gradients: Cyberpunk, Toxic Lime, Solar Flare, Hyperpop
- 26 animation keyframes (neon pulse, gradient shift, float, bounce, etc.)
- SVG grain noise texture overlay via `feTurbulence`
- Dual theme system (accessible text for light mode, full neon for dark mode)
- Dark mode implementation with component-specific patterns
- `prefers-reduced-motion` support for all 26 animations
- WCAG 2.1 AA accessibility compliance (100%)
- Enhanced focus indicators (3px neon pink with glow effects)
- Keyboard navigation support (Tab, Enter, Space, Arrows, Escape)
- Screen reader support with proper ARIA labels

### Changed

- Complete visual redesign from previous brand identity to Neon vs Atomic Black

## [2.0.0] - 2025-08-01

### Added

- Progressive Web App (PWA) implementation
- Service worker for offline support
- PWA utilities (`/utils/pwaService.ts`)
- App installability (Add to Home Screen)
- Variable font system (73% fewer font requests)
- WordPress-inspired fluid typography system
- Fluid width breakpoints (320px to 1440px)
- Responsive typography scale (H1: 36px to 120px)

### Changed

- Font loading strategy migrated to variable fonts
- Typography system migrated to fluid `clamp()` values

## [1.0.0] - 2025-06-01

### Added

- Initial project setup with React 18+ and TypeScript
- Tailwind CSS V4 integration with custom design tokens
- Lucide React icon library
- Core page structure: Home, About, Portfolio, Blog
- Header component with navigation and mobile menu
- Footer component with social links
- Hero section with image carousel
- Portfolio gallery with lightbox
- Blog listing with post detail pages
- About page with journey and philosophy sections
- Contact page with Typeform embed integration
- Error boundary component for React lifecycle errors
- Figma integration utilities (`/components/figma/`)
- `ImageWithFallback` component for graceful image loading