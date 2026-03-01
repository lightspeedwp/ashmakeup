# Content Expansion & Redesign Audit — Orchestrator Prompt

**Version:** 1.0.0  
**Created:** March 1, 2026  
**Audit Type:** Multi-phase (Content Analysis → Design Strategy → Implementation)  
**Output:** `/reports/content-expansion/`, `/tasks/content-expansion-tasks.md`

---

## 🎯 Audit Objective

Conduct a comprehensive audit of personal reference content in `/content/` folders, compare against existing ebook and website about pages, expand the ebook with maximum detail, polish and expand website about pages, and create a funky redesign with new design system tokens for exciting, interactive content pages.

---

## 📂 Scope

### Content Folders to Audit
1. `/content/book/` — Personal notes and rough drafts for ebook expansion
2. `/content/lightspeed/` — LightSpeed agency history and content
3. `/content/personal/` — Personal bios, notes, research material

### Existing Codebase to Compare Against
1. **Ebook Pages:** `/data/mock/pages/ebook-pages.ts` (85 pages total)
2. **Website About Pages:**
   - `/components/pages/about/AboutPage.tsx` — Main About landing page
   - `/components/pages/about/JourneyPage.tsx` — **PROTECTED: Do not modify**
   - `/components/pages/about/PhilosophyPage.tsx` — About > Philosophy
   - `/components/pages/about/ValuePage.tsx` — About > Value
   - `/components/pages/about/PurposePage.tsx` — About > Purpose
   - Other about sub-pages as discovered in codebase

### Design System Reference
- `/guidelines/design-tokens/` — Current design tokens
- `/styles/globals.css` — BEM architecture and existing classes
- `/guidelines/design-tokens/neon-colors.md` — Neon vs Atomic Black system
- `/guidelines/design-tokens/animations.md` — 26 animation keyframes

---

## 🚨 Critical Constraints

### Protected Content
- **NEVER MODIFY:** `/components/pages/about/JourneyPage.tsx` (see Guidelines.md § 🔒 Protected Pages Rule)
- This page has been carefully crafted for public presentation and must remain untouched

### Design Requirements
- **Strict BEM Architecture:** All new CSS must follow BEM naming conventions (see Guidelines.md)
- **No Tailwind Utilities:** Only semantic BEM classes allowed
- **No Inline Styles:** All styling via CSS classes in `/styles/globals.css`
- **Centralized Data:** All content must be in `/data/mock/` (never hardcoded)

### Bundler Compatibility
- Follow all Figma Make bundler workarounds (see Guidelines.md § 🛡️ Bundler Compatibility Rules)
- No optional chaining, nullish coalescing, or modern ES syntax that breaks bundler

---

## 📋 Audit Steps

### Phase 1: Content Discovery & Gap Analysis

**Step 1.1: Inventory Content Folders**
- List all `.md` files in `/content/book/`, `/content/lightspeed/`, `/content/personal/`
- Extract key topics, themes, and story beats from each file
- Categorize content by type: biographical, historical, philosophical, technical, anecdotal

**Step 1.2: Map Content to Ebook Structure**
- Review all 85 pages in `/data/mock/pages/ebook-pages.ts`
- Identify which content from `/content/` folders is already integrated into the ebook
- Flag content gaps: material that exists in `/content/` but NOT in the ebook
- Assess density: are existing ebook chapters too sparse? Can they be expanded with more detail?

**Step 1.3: Map Content to Website About Pages**
- Review all About page components (excluding JourneyPage.tsx)
- Identify which content from `/content/` folders appears on the website
- Flag content gaps: material that could enhance about pages but is missing
- Assess quality: are existing about pages polished? Do they need copy improvements?

**Step 1.4: Content Expansion Opportunities**
- **Ebook:** List specific chapters that need expansion with available `/content/` material
- **Ebook:** Suggest new chapters or sections based on unused `/content/` material
- **Website:** List specific about pages that need content enhancement
- **Website:** Suggest new about pages if significant content is underutilized

---

### Phase 2: Design Audit & Redesign Strategy

**Step 2.1: Current Design Analysis**
- Audit existing about page designs (components, layouts, CSS classes)
- Identify inconsistencies: Do all about pages follow a cohesive pattern?
- Assess interactivity: Are pages static or do they use animations, transitions, interactive elements?
- Reference: Compare against `/guidelines/design-tokens/animations.md` (26 animations available)

**Step 2.2: Design System Gap Analysis**
- Review existing design tokens in `/guidelines/design-tokens/`
- Identify missing tokens needed for:
  - Interactive content sections (accordions, tabs, reveal effects)
  - Long-form reading experiences (pull quotes, side notes, chapter navigation)
  - Visual storytelling (timelines, galleries, image-text layouts)
  - Emphasis and hierarchy (callouts, highlights, badges)

**Step 2.3: Funky Redesign Proposal**
- Propose new design system tokens for exciting, interactive content pages:
  - **Layout Tokens:** Content grids, asymmetric layouts, sticky navigation
  - **Interactive Tokens:** Hover effects, scroll-triggered animations, parallax
  - **Typography Tokens:** Pull quotes, drop caps, inline highlights
  - **Color Tokens:** Accent colors for different content types (story, tech, philosophy)
  - **Animation Tokens:** Entrance animations, scroll effects, micro-interactions
- Ensure all proposals:
  - Follow BEM naming conventions
  - Are accessible (WCAG 2.1 AA compliant)
  - Support `prefers-reduced-motion`
  - Work in both light and dark modes

**Step 2.4: Component Architecture**
- Propose new reusable components for content pages:
  - `<ContentSection>` — Flexible content wrapper with design variants
  - `<PullQuote>` — Visually emphasized quotes
  - `<Timeline>` — Chronological story layout
  - `<SplitContent>` — Image-text split layouts
  - `<Accordion>` — Collapsible content sections
  - Other components as needed
- Follow component guidelines in `/guidelines/overview-components.md`

---

### Phase 3: Implementation Recommendations

**Step 3.1: Ebook Expansion Plan**
- List specific chapters to expand with `/content/` material (page-by-page recommendations)
- Suggest new chapters or appendix sections for unused content
- Estimate new page count after expansion
- Ensure book remains navigable and well-structured

**Step 3.2: Website About Pages Polish Plan**
- List specific pages to update with improved copy from `/content/`
- Propose content reorganization if current structure is weak
- Suggest which pages should receive the new funky redesign first (priority order)

**Step 3.3: Design System Implementation Roadmap**
- Prioritize new design tokens by impact (high/medium/low)
- Suggest which tokens should be added to `/styles/globals.css` first
- Propose file structure for new tokens (e.g., `/styles/tokens/content-layouts.css`)

**Step 3.4: Component Development Roadmap**
- Prioritize new components by reusability and impact
- Suggest component file locations (e.g., `/components/ui/`, `/components/sections/`)
- Outline props and TypeScript interfaces for each component

---

## 📊 Deliverables

### Report: `/reports/content-expansion/audit-report.md`

**Structure:**
1. **Executive Summary** — Key findings, opportunities, recommendations
2. **Content Inventory** — Complete list of `/content/` files with summaries
3. **Gap Analysis** — What's missing from ebook and website
4. **Expansion Opportunities** — Specific ebook chapters and website pages to enhance
5. **Design Audit** — Current state assessment, inconsistencies, improvement areas
6. **Redesign Proposal** — New design tokens, components, patterns
7. **Implementation Roadmap** — Phased rollout plan with priorities

### Task List: `/tasks/content-expansion-tasks.md`

**Structure:**
1. **Content Tasks** — Copy writing, ebook chapter expansion, website copy polish
2. **Design Tasks** — New token creation, CSS class implementation
3. **Component Tasks** — New component development, existing component refactoring
4. **Integration Tasks** — Wiring new content into data files, updating imports
5. **Testing Tasks** — Accessibility checks, responsive testing, cross-browser validation

---

## 🔗 Reference Documents

### Guidelines (MUST READ BEFORE AUDIT)
- `/guidelines/Guidelines.md` — Master guidelines (start here)
- `/guidelines/design-tokens/neon-colors.md` — Color system
- `/guidelines/design-tokens/animations.md` — Animation system
- `/guidelines/design-tokens/typography.md` — Typography scale
- `/guidelines/design-tokens/spacing.md` — Spacing system
- `/guidelines/overview-components.md` — Component architecture
- `/guidelines/dark-mode-implementation.md` — Light/dark mode patterns
- `/guidelines/prefers-reduced-motion.md` — Accessibility for animations

### Data System
- `/data/README.md` — Mock data system documentation
- `/data/mock/pages/ebook-pages.ts` — Current ebook content (85 pages)
- `/data/mock/pages/` — Other page content files

### Existing Components
- `/components/pages/about/` — All about page components
- `/components/ui/` — Reusable UI components
- `/components/sections/` — Section components

---

## ✅ Audit Checklist

### Before Starting
- [ ] Read all reference documents listed above
- [ ] Understand protected pages (JourneyPage.tsx must not be modified)
- [ ] Review BEM architecture requirements
- [ ] Familiarize with existing design tokens and animations

### During Audit
- [ ] Inventory all `/content/` folder files
- [ ] Map content to existing ebook pages
- [ ] Map content to existing website about pages
- [ ] Identify expansion opportunities
- [ ] Audit current about page designs
- [ ] Propose new design tokens
- [ ] Propose new components
- [ ] Create implementation roadmap

### After Audit
- [ ] Write comprehensive report to `/reports/content-expansion/audit-report.md`
- [ ] Extract actionable tasks to `/tasks/content-expansion-tasks.md`
- [ ] Prioritize tasks (P0 = Critical, P1 = High, P2 = Medium, P3 = Low)
- [ ] Estimate effort for each task (S/M/L/XL)

---

## 🎨 Design Philosophy

### Funky Interactive Content Pages Should:
1. **Tell a Story** — Use visual hierarchy, flow, and pacing to guide readers
2. **Engage the Senses** — Animations, colors, textures (grain noise), gradients
3. **Respect the Reader** — Accessible, performant, respects motion preferences
4. **Be Cohesive** — Follow the Neon vs Atomic Black design language
5. **Be Memorable** — Use bold, unique layouts that stand out from typical portfolio sites

### Example Inspiration (Do NOT copy, just reference style):
- **Interactive timelines** with scroll-triggered reveals
- **Pull quotes** with neon glow effects
- **Image galleries** with hover animations
- **Accordion sections** for long-form content
- **Split layouts** with parallax scrolling
- **Sticky chapter navigation** for long pages
- **Highlight effects** on key phrases (inline neon underlines)

---

## 📌 Success Criteria

### Content
- [ ] All valuable `/content/` material is integrated into ebook or website
- [ ] Ebook is significantly expanded with rich, detailed storytelling
- [ ] Website about pages are polished, compelling, and well-written

### Design
- [ ] New design tokens enable exciting, interactive content layouts
- [ ] All tokens follow BEM naming conventions
- [ ] All tokens are accessible (WCAG 2.1 AA)
- [ ] All tokens support light/dark mode

### Implementation
- [ ] Clear, actionable task list with priorities
- [ ] Realistic implementation roadmap
- [ ] Reusable component architecture

---

**End of Orchestrator Prompt**

---

## 🚀 Next Steps

1. **Execute this audit** following all steps in order
2. **Write report** to `/reports/content-expansion/audit-report.md`
3. **Create task list** to `/tasks/content-expansion-tasks.md`
4. **Review with stakeholder** before beginning implementation
