help me write an audit prompt to document all of the react lucide icon usage instances, make sure that you have a list of all of the files that icons are embedded in, initially we can run the two icon packs together, but the ultimate goal should be to replace React Lucide with React Phosphor Icons - https://github.com/phosphor-icons/react

I want you to create a devtools page to list all of the React Phosphor icons that will be needed to replace Lucide, this icon pack also has 6 different types of icons, we need a clear iconography guide guidelines file under design tokens that breaks down the functionality of React Phosphor Icons and the available options to target and style + animate the icons. 

@phosphor-icons/react is a standard npm package and works in this environment. You can use it alongside or instead of Lucide:

import { Package, Calendar, ArrowRight } from '@phosphor-icons/react'

// Usage — similar to Lucide but with a "weight" prop
<Package size={24} weight="duotone" />
<Calendar size={20} weight="bold" />

Work out whether it would be possible to use any of these features:

6 weight variants: thin, light, regular, bold, fill, duotone (Lucide only has stroke-based)
1,200+ icons (vs Lucide's ~1,400) — substantial overlap, slightly different aesthetic
Uses weight prop instead of strokeWidth
The duotone weight is unique to Phosphor — two-tone icons with opacity layers

No need to import from GitHub — just use import { IconName } from '@phosphor-icons/react'. The GitHub repos you linked are the source code; the npm package is the distribution channel.

Recommendation: You could use both packages side-by-side (Lucide for existing components, Phosphor for new ones), or do a phased migration. A full swap would touch 100+ component files since Lucide is deeply embedded.

Make sure that the accessibility audit considers what is needed to define designed tokens for all of the icons

Full WCAG AA Contrast Audit & Remediation needed focused on icons, hover states, animations, light and dark mode styles, size considerations and also style, don't choose a style that reduces accessibility in certain scenarios

Comprehensive contrast audit scanned all 100+ CSS files across /src/styles/pages/, /templates/, /sections/, and /blocks/ directories. Found 114 dark mode violations (neutral-400 as text color) and ~20 light mode violations (neutral-500 on non-white backgrounds) across 35 files.

Fixed 40+ CSS files upgrading dark mode body text from neutral-400 to neutral-300 and light mode text from neutral-500 to neutral-600 where backgrounds were neutral-50/neutral-100. Key files fixed include: all page CSS (wishlist, track-order, dosage-calculator, terpene-guide, lab-results, compare, gallery, reviews, strain-guide, subscriptions, dev-tools), all major template CSS (about, events, login, shipping, promotions, new-arrivals, legal, contact, order-confirmation, author-archive, press, mooiberry, shop-mushrooms), all section CSS (cards-glow, cards-strain, cards-floating, cta-neon, bg-dark, newsletter-glow, story-content, video-testimonials), and key block CSS (product-summary, product-details, reviews-tab, quick-view, product-collection, product-filters, cards, social-proof).

Created /guidelines/design-tokens/wcag-contrast-compliance.md — a comprehensive mandatory guideline with contrast ratio matrices, correct color mapping tables, enforcement rules, and the full audit summary. Updated /guidelines/design-tokens/colors.md with cross-references to the new WCAG guide.


The migration is feasible but not straightforward, primarily due to the bundler constraints. The project doesn't actually use lucide-react at runtime — it has a fully custom icon system in /lib/ with 96 hand-rolled SVG icons across 5 chunked set files, all using dangerouslySetInnerHTML to work around the Figma Make bundler's inability to process SVG child elements in JSX. 77 consumer files import from this system via a barrel at /lib/icons.ts.

The critical finding: @phosphor-icons/react would crash the bundler for the same reason — it renders SVG children directly in JSX. You'd need to use @phosphor-icons/core (raw SVG strings) and rebuild the 5 icon set files with Phosphor's path data, keeping the same dangerouslySetInnerHTML wrapper pattern. ~40 of the 96 icons have different names in Phosphor (e.g., ChevronDown → CaretDown, Search → MagnifyingGlass, Mail → Envelope), but the barrel can alias them so zero consumer files need changing.

The full report is at /reports/phosphor-migration/report.md with a complete name mapping table, effort estimate (~8-12 hours), and visual impact analysis.

My recommendation: defer. The current system works, is bundler-safe, and swapping SVG paths is high-effort for purely aesthetic change with visual regression risk across 47+ pages
If you do proceed: use @phosphor-icons/core + rebuild the 5 set files + keep Lucide export names as aliases = zero consumer file changes
Best time to do it: when migrating off Figma Make to a standard bundler, where @phosphor-icons/react could be used directly