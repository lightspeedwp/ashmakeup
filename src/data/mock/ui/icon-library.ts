/**
 * @fileoverview Icon Library mock data — all Lucide icons used across the site
 * @module data/mock/ui/icon-library
 * @version 1.0.0
 */

import type { BreadcrumbItem } from '../../../components/ui/Breadcrumbs';

export interface IconEntry {
  name: string;
  usage: string[];
}

export interface IconCategory {
  id: string;
  title: string;
  icons: IconEntry[];
}

export const iconLibraryUI = {
  seo: { title: 'Icon Library | Developer Tools | Ash Shaw' },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'Developer Tools', href: '/dev-tools' },
    { label: 'Icon Library' },
  ] as BreadcrumbItem[],
  hero: {
    badge: 'Reference',
    title: 'Icon Library',
    description:
      'Every Lucide icon used across the Ash Shaw portfolio — searchable, grouped by category, with size toggle and copy-to-clipboard import statements.',
  },
  categories: [
    {
      id: 'navigation',
      title: 'Navigation',
      icons: [
        { name: 'Home', usage: ['SitemapPage', 'Footer'] },
        { name: 'ArrowLeft', usage: ['Breadcrumbs', 'Lightbox'] },
        { name: 'ArrowRight', usage: ['DevToolsPage', 'ReadMoreButton'] },
        { name: 'ArrowUp', usage: ['ScrollToTop'] },
        { name: 'ChevronLeft', usage: ['Pagination'] },
        { name: 'ChevronRight', usage: ['Pagination', 'DesignTokensRefPage'] },
        { name: 'ChevronDown', usage: ['Header', 'FAQ'] },
        { name: 'ExternalLink', usage: ['Footer', 'SocialLinks'] },
        { name: 'Menu', usage: ['Header (mobile)'] },
        { name: 'X', usage: ['MobileMenu', 'Lightbox', 'Modals'] },
      ],
    },
    {
      id: 'content',
      title: 'Content',
      icons: [
        { name: 'BookOpen', usage: ['BlogPage', 'SitemapPage'] },
        { name: 'FileText', usage: ['SitemapPage', 'SearchResults'] },
        { name: 'Newspaper', usage: ['SitemapPage'] },
        { name: 'FolderOpen', usage: ['SitemapPage', 'ArchiveFilters'] },
        { name: 'Tag', usage: ['BlogPostPage', 'PortfolioCard'] },
        { name: 'Calendar', usage: ['BlogCard', 'PodcastCard'] },
        { name: 'Clock', usage: ['BlogPostPage', 'ReadingTime'] },
        { name: 'Layers', usage: ['SitemapPage'] },
      ],
    },
    {
      id: 'media',
      title: 'Media',
      icons: [
        { name: 'Play', usage: ['VideosPage', 'VideoPlayer'] },
        { name: 'Pause', usage: ['AnimationSpecimenPage'] },
        { name: 'Image', usage: ['PortfolioPage', 'SitemapPage'] },
        { name: 'Mic', usage: ['PodcastsPage', 'SitemapPage'] },
        { name: 'Music', usage: ['StyleGuidePage'] },
        { name: 'ZoomIn', usage: ['Lightbox'] },
        { name: 'ZoomOut', usage: ['Lightbox'] },
        { name: 'Grid', usage: ['LayoutSwitcher'] },
      ],
    },
    {
      id: 'actions',
      title: 'Actions',
      icons: [
        { name: 'Share2', usage: ['ShareComponent'] },
        { name: 'Download', usage: ['ShareComponent'] },
        { name: 'Copy', usage: ['ShareComponent', 'SnippetGenerator'] },
        { name: 'Heart', usage: ['BlogPostPage'] },
        { name: 'Eye', usage: ['BlogCard', 'PortfolioCard'] },
        { name: 'Plus', usage: ['ButtonSpecimenPage'] },
        { name: 'Minus', usage: ['FAQ'] },
        { name: 'Check', usage: ['FormValidation'] },
        { name: 'Link2', usage: ['ShareComponent'] },
        { name: 'Search', usage: ['Header', 'SearchInput'] },
      ],
    },
    {
      id: 'status',
      title: 'Status & System',
      icons: [
        { name: 'Shield', usage: ['AccessibilityTesterPage'] },
        { name: 'Gauge', usage: ['PerformanceTesterPage'] },
        { name: 'Zap', usage: ['AnimationSpecimenPage'] },
        { name: 'Sun', usage: ['ThemeToggle'] },
        { name: 'Moon', usage: ['ThemeToggle'] },
        { name: 'Wifi', usage: ['OfflineIndicator'] },
        { name: 'WifiOff', usage: ['OfflineIndicator'] },
        { name: 'HelpCircle', usage: ['FaqAggregatePage', 'SitemapPage'] },
        { name: 'MessageSquare', usage: ['FeedbackPage', 'SitemapPage'] },
        { name: 'AlertTriangle', usage: ['ErrorBoundary'] },
      ],
    },
    {
      id: 'social',
      title: 'Social',
      icons: [
        { name: 'Instagram', usage: ['SocialLinks', 'Footer'] },
        { name: 'Facebook', usage: ['SocialLinks', 'Footer'] },
        { name: 'MessageCircle', usage: ['SocialLinks'] },
      ],
    },
    {
      id: 'design',
      title: 'Design & Tools',
      icons: [
        { name: 'Palette', usage: ['DevToolsPage', 'StyleGuidePage'] },
        { name: 'Paintbrush', usage: ['StyleGuidePage'] },
        { name: 'Sparkles', usage: ['DevToolsPage', 'StickersPage'] },
        { name: 'Wrench', usage: ['SitemapPage'] },
        { name: 'Type', usage: ['TypographySpecimenPage'] },
        { name: 'Ruler', usage: ['SpacingSpecimenPage'] },
        { name: 'Circle', usage: ['RadiusSpecimenPage'] },
        { name: 'Cloudy', usage: ['ShadowSpecimenPage'] },
        { name: 'MousePointerClick', usage: ['ButtonSpecimenPage'] },
        { name: 'LayoutGrid', usage: ['CardSpecimenPage'] },
        { name: 'Lightbulb', usage: ['DesignTokensRefPage'] },
      ],
    },
    {
      id: 'places',
      title: 'Places & Objects',
      icons: [
        { name: 'MapPin', usage: ['AboutPage'] },
        { name: 'Compass', usage: ['AboutPage'] },
        { name: 'Building2', usage: ['StyleGuidePage'] },
        { name: 'Scale', usage: ['SitemapPage', 'TermsPage'] },
        { name: 'Rocket', usage: ['StyleGuidePage'] },
        { name: 'Brain', usage: ['StyleGuidePage'] },
        { name: 'Flashlight', usage: ['StyleGuidePage'] },
        { name: 'User', usage: ['SitemapPage', 'AboutPage'] },
        { name: 'Mail', usage: ['ContactPage', 'SitemapPage'] },
      ],
    },
  ] as IconCategory[],
};