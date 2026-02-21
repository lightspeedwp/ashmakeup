/**
 * @fileoverview About dropdown navigation data
 *
 * Defines the process-flow items displayed in the About mega-dropdown.
 * Each item maps to a section on the About page (scroll target) or
 * a standalone sub-page (route link).
 *
 * @module data/mock/ui/about-dropdown
 * @version 1.0.0
 */

export interface AboutDropdownItem {
  /** Unique key */
  id: string;
  /** Display label */
  label: string;
  /** Lucide icon name */
  icon: string;
  /** Neon accent colour token (matches section theme) */
  accent: 'orange' | 'green' | 'purple' | 'cyan' | 'pink' | 'red' | 'blue' | 'yellow';
  /** Scroll-target ID on the About page (mutually exclusive with `href`) */
  sectionId?: string;
  /** Route path for standalone sub-pages (mutually exclusive with `sectionId`) */
  href?: string;
  /** Short one-liner for the flow node */
  subtitle: string;
}

/**
 * Ordered list of About dropdown items.
 * The order mirrors the vertical flow on the About page — each item
 * corresponds to a SectionCard whose `id` matches `sectionId`.
 * Sub-pages (with `href`) are grouped after a separator.
 */
export const aboutDropdownItems: AboutDropdownItem[] = [
  {
    id: 'journey',
    label: 'The Journey Begins',
    icon: 'Compass',
    accent: 'orange',
    sectionId: 'journey-section',
    subtitle: 'How it all started in 2019',
  },
  {
    id: 'festival',
    label: 'Festival Euphoria',
    icon: 'Music',
    accent: 'green',
    sectionId: 'festival-section',
    subtitle: 'Psytrance stages & painted faces',
  },
  {
    id: 'berlin',
    label: 'Berlin Nights',
    icon: 'Building2',
    accent: 'purple',
    sectionId: 'berlin-section',
    subtitle: 'Underground club artistry',
  },
  {
    id: 'uv',
    label: 'UV Explorations',
    icon: 'Flashlight',
    accent: 'cyan',
    sectionId: 'uv-section',
    subtitle: 'Blacklight reactive design',
  },
  {
    id: 'mousse',
    label: 'Mousse Eyeshadows',
    icon: 'Paintbrush',
    accent: 'pink',
    sectionId: 'mousse-section',
    subtitle: 'Professional pigment mastery',
  },
  {
    id: 'uv-makeup',
    label: 'UV Makeup Artistry',
    icon: 'Wand2',
    accent: 'red',
    sectionId: 'uv-makeup-section',
    subtitle: 'Dual-lighting face art',
  },
  {
    id: 'creative',
    label: 'Creative Process',
    icon: 'Brain',
    accent: 'blue',
    sectionId: 'creative-section',
    subtitle: 'Inspiration to execution',
  },
  {
    id: 'future',
    label: 'Looking Forward',
    icon: 'Rocket',
    accent: 'yellow',
    sectionId: 'future-section',
    subtitle: 'What comes next',
  },
  /* ── Sub-Pages ── */
  {
    id: 'adhd',
    label: 'Wired Different',
    icon: 'Zap',
    accent: 'yellow',
    href: '/about/adhd',
    subtitle: 'ADHD & the surplus of attention',
  },
  {
    id: 'cycling',
    label: 'Two Wheels & UV Paint',
    icon: 'Bike',
    accent: 'green',
    href: '/about/cycling',
    subtitle: 'Festival pilgrimages by bicycle',
  },
  {
    id: 'music',
    label: '140 BPM Heartbeat',
    icon: 'Headphones',
    accent: 'purple',
    href: '/about/music',
    subtitle: 'Psytrance, house & the dancefloor',
  },
  {
    id: 'lightspeed',
    label: 'The Day Job',
    icon: 'Code',
    accent: 'blue',
    href: '/about/lightspeed',
    subtitle: 'LightSpeed WordPress Agency',
  },
  {
    id: 'history',
    label: 'Full History',
    icon: 'Clock',
    accent: 'purple',
    href: '/about/history',
    subtitle: 'Complete timeline since July 2019',
  },
];