/**
 * @fileoverview Developer Tools landing page mock data
 * @module data/mock/ui/dev-tools
 * @version 8.0.0 — 23 sub-tools grouped into 4 categories
 */

import type { BreadcrumbItem } from '../../../components/ui/Breadcrumbs';

/** Single tool entry */
export interface DevTool {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
  badge: string;
}

/** A named group of tools (tools stored as ID references) */
export interface DevToolCategory {
  id: string;
  title: string;
  description: string;
  accent: 'green' | 'blue' | 'orange' | 'pink';
  tools: string[];
}

export const devToolsPageUI = {
  seo: {
    title: 'Developer Tools | Ash Shaw',
  },
  hero: {
    badge: 'Internal Tools',
    title: 'Developer Tools',
    description:
      'A collection of internal tools and references for developing and maintaining the Ash Shaw Makeup Portfolio. Browse design tokens, audit accessibility, measure performance, and explore every component in the design system.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Developer Tools' },
  ] as BreadcrumbItem[],

  /** Flat list kept for backward-compat (routes, etc.) */
  tools: [
    {
      id: 'style-guide',
      title: 'Style Guide',
      description:
        'Comprehensive design-system reference — colours, typography, spacing tokens, gradients, and component previews all in one place.',
      href: '/dev-tools/style-guide',
      icon: 'Palette',
      badge: 'Design System',
    },
    {
      id: 'typography',
      title: 'Typography Specimens',
      description:
        'Every font family, fluid font-size token, heading class, and weight variant rendered live with CSS variable names.',
      href: '/dev-tools/typography',
      icon: 'Type',
      badge: 'Typography',
    },
    {
      id: 'spacing',
      title: 'Spacing Scale',
      description:
        'Visual bars for every spacing token — fluid, section, and block gap values with CSS clamp() definitions.',
      href: '/dev-tools/spacing',
      icon: 'Ruler',
      badge: 'Spacing',
    },
    {
      id: 'shadows',
      title: 'Shadow & Glow Scale',
      description:
        'Interactive preview of all shadow tokens — elevation shadows, neon glows, focus rings, and action button effects.',
      href: '/dev-tools/shadows',
      icon: 'Cloudy',
      badge: 'Shadows',
    },
    {
      id: 'radius',
      title: 'Border Radius Specimens',
      description:
        'Every border-radius token from subtle rounding to full pill shapes, with side-by-side comparison and legacy aliases.',
      href: '/dev-tools/radius',
      icon: 'Circle',
      badge: 'Radius',
    },
    {
      id: 'buttons',
      title: 'Button Variants',
      description:
        'Primary gradients, ghost outlines, icon buttons, pill chips, and disabled states — hover and focus each to see interactions.',
      href: '/dev-tools/buttons',
      icon: 'MousePointerClick',
      badge: 'Buttons',
    },
    {
      id: 'cards',
      title: 'Card Interactions',
      description:
        'Every card pattern — blog, video, podcast, tool, and tip cards with hover lift, neon border glow, and focus ring effects.',
      href: '/dev-tools/cards',
      icon: 'LayoutGrid',
      badge: 'Cards',
    },
    {
      id: 'neon',
      title: 'Neon Animations',
      description:
        'All CSS keyframe animations — spin, pulse, bounce, float, neon glow, gradient shift, and more with interactive play/pause controls.',
      href: '/dev-tools/neon',
      icon: 'Zap',
      badge: 'Animations',
    },
    {
      id: 'tokens',
      title: 'Design Tokens Reference',
      description:
        'Complete reference of every CSS custom property — colours, typography, spacing, shadows, radii, z-index, opacity, and more.',
      href: '/dev-tools/tokens',
      icon: 'Lightbulb',
      badge: 'Reference',
    },
    {
      id: 'icons',
      title: 'Icon Library',
      description:
        'Searchable grid of every Lucide icon used across the site, grouped by category with size toggle and copy-to-clipboard import statements.',
      href: '/dev-tools/icons',
      icon: 'Bookmark',
      badge: 'Reference',
    },
    {
      id: 'api',
      title: 'Component API',
      description:
        'Props, interfaces, and import statements for every public React component — searchable with sidebar navigation.',
      href: '/dev-tools/api',
      icon: 'FileCode',
      badge: 'Reference',
    },
    {
      id: 'playground',
      title: 'Design System Playground',
      description:
        'Interactive experimentation with design tokens — adjust colours, typography, radius, shadows, and gradients with live preview.',
      href: '/dev-tools/playground',
      icon: 'FlaskConical',
      badge: 'Interactive',
    },
    {
      id: 'code-quality',
      title: 'Code Quality Dashboard',
      description:
        'Code health metrics — live DOM complexity, CSS stats, component dependency tree, file sizes, and lint summary.',
      href: '/dev-tools/code-quality',
      icon: 'Activity',
      badge: 'Testing',
    },
    {
      id: 'deployment',
      title: 'Deployment Readiness',
      description:
        'Pre-deployment validation — performance, accessibility, SEO, security, and code quality checks with overall score gauge.',
      href: '/dev-tools/deployment',
      icon: 'Rocket',
      badge: 'Deployment',
    },
    {
      id: 'analytics',
      title: 'Analytics Dashboard',
      description:
        'Track page views, content engagement, popular posts, search queries, and visitor behaviour with live session data and trend charts.',
      href: '/dev-tools/analytics',
      icon: 'BarChart3',
      badge: 'Analytics',
    },
    {
      id: 'components',
      title: 'Component Showcase',
      description:
        'Live visual previews of every reusable UI component — Logo, SocialLinks, Breadcrumbs, ReadMore, Share, and more rendered in isolation.',
      href: '/dev-tools/components',
      icon: 'Component',
      badge: 'Visual Preview',
    },
    {
      id: 'snippets',
      title: 'Snippet Generator',
      description:
        'Generate BEM-compliant CSS and JSX scaffolding for new components. Pick a template, name it, and copy the output.',
      href: '/dev-tools/snippets',
      icon: 'Scissors',
      badge: 'Builder',
    },
    {
      id: 'docs',
      title: 'Documentation Generator',
      description:
        'Auto-generated markdown documentation for every public component — props, imports, and descriptions ready to copy.',
      href: '/dev-tools/docs',
      icon: 'FileText',
      badge: 'Reference',
    },
    {
      id: 'visual-regression',
      title: 'Visual Regression Tester',
      description:
        'Side-by-side and overlay comparison of component rendering across themes, states, and viewport sizes.',
      href: '/dev-tools/visual-regression',
      icon: 'Eye',
      badge: 'Testing',
    },
    {
      id: 'integration',
      title: 'Integration Tester',
      description:
        'Simulated user flow tests — navigation, theming, accessibility, analytics, performance, and PWA checks with live pass/fail results.',
      href: '/dev-tools/integration',
      icon: 'TestTube',
      badge: 'Testing',
    },
    {
      id: 'stickers',
      title: 'Sticker Designs',
      description:
        'Browse the full library of hand-crafted neon sticker graphics used as decorative flourishes throughout the site.',
      href: '/dev-tools/stickers',
      icon: 'Sparkles',
      badge: 'Asset Library',
    },
    {
      id: 'accessibility',
      title: 'Accessibility Tester',
      description:
        'Run a live WCAG 2.1 AA audit against the current page. Checks for missing alt text, heading hierarchy, ARIA labels, and more.',
      href: '/dev-tools/accessibility',
      icon: 'Shield',
      badge: 'WCAG Audit',
    },
    {
      id: 'performance',
      title: 'Performance Tester',
      description:
        'Measure real-time performance metrics using the browser Performance API. View Core Web Vitals, resource breakdowns, and image audit.',
      href: '/dev-tools/performance',
      icon: 'Gauge',
      badge: 'Testing',
    },
  ] as DevTool[],

  /* ─────────────────────────────────────
     Grouped categories for the hub layout
     ───────────────────────────────────── */
  categories: [
    {
      id: 'specimens',
      title: 'Design Specimens',
      description:
        'Visual references for every design token — typography, colour, spacing, shadows, radii, and interactive component specimens.',
      accent: 'green',
      tools: [
        'style-guide',
        'typography',
        'spacing',
        'shadows',
        'radius',
        'buttons',
        'cards',
        'neon',
      ],
    },
    {
      id: 'reference',
      title: 'Reference & Documentation',
      description:
        'Lookup tables, API docs, and asset catalogues for the complete design system.',
      accent: 'blue',
      tools: [
        'tokens',
        'icons',
        'api',
        'components',
        'docs',
        'stickers',
      ],
    },
    {
      id: 'builders',
      title: 'Builders & Playground',
      description:
        'Interactive tools for prototyping, generating scaffolding, and monitoring content performance.',
      accent: 'orange',
      tools: [
        'playground',
        'snippets',
        'analytics',
      ],
    },
    {
      id: 'testing',
      title: 'Testing & Deployment',
      description:
        'Quality assurance, accessibility audits, performance measurement, and deployment readiness checks.',
      accent: 'pink',
      tools: [
        'code-quality',
        'visual-regression',
        'integration',
        'accessibility',
        'performance',
        'deployment',
      ],
    },
  ],
};