/**
 * @fileoverview Navigation UI data
 * @module data/mock/ui/navigation
 */

import type { LucideIcon } from "../../../lib/icons";
import { Home, User, Image, Play, BookOpen, Mail, Calendar } from "../../../lib/icons";

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", path: "/", icon: Home },
  { id: "about", label: "About", path: "/about/journey", icon: User },
  { id: "portfolio", label: "Portfolio", path: "/portfolio", icon: Image },
  { id: "videos", label: "Videos", path: "/videos", icon: Play },
  { id: "events", label: "Events", path: "/events", icon: Calendar },
  { id: "blog", label: "Blog", path: "/blog", icon: BookOpen },
  { id: "contact", label: "Contact", path: "/contact", icon: Mail },
];

/** Subset shown in the Header and MobileMenu (Videos & Events live in the Footer) */
const FOOTER_ONLY_IDS = new Set(["videos", "events"]);
export const headerNavigationItems: NavigationItem[] = navigationItems.filter(
  (item) => !FOOTER_ONLY_IDS.has(item.id)
);

export const pageTitles: Record<string, string> = {
  home: "Home",
  about: "About Ash Shaw",
  history: "History — Ash Shaw's Journey",
  portfolio: "Portfolio - Makeup Artistry Work",
  "portfolio-detail": "Portfolio Detail",
  "portfolio-category": "Portfolio Category",
  "portfolio-tag": "Portfolio Tag",
  videos: "Videos - Tutorials & Showcases",
  "video-detail": "Video Detail",
  events: "Events — Festivals & Creative Gatherings",
  "event-detail": "Event Detail",
  "event-category": "Event Category",
  "event-tag": "Event Tag",
  blog: "Blog - Makeup Artistry Insights",
  "blog-post": "Blog Post",
  "blog-category": "Blog Category",
  "blog-tag": "Blog Tag",
  contact: "Contact - Get in Touch",
  podcasts: "Podcasts - Neon vs Atomic Black",
  "podcast-detail": "Podcast Episode",
  search: "Search",
  terms: "Terms and Conditions",
  privacy: "Privacy Policy",
  sitemap: "Sitemap - Site Index",
  "style-guide": "Style Guide - Design System",
  stickers: "Sticker Designs — Art Prints",
  accessibility: "Accessibility Statement",
  press: "Press & Media Kit",
  toolkit: "The Toolkit - Gear & Pigments",
  "next-festival": "Next Festival Countdown",
  manifesto: "The Manifesto - Neon vs Atomic Black",
  "dev-tools": "Developer Tools",
  "dev-tools-typography": "Typography Specimens",
  "dev-tools-spacing": "Spacing Scale",
  "dev-tools-shadows": "Shadow & Glow Scale",
  "dev-tools-radius": "Border Radius Specimens",
  "dev-tools-buttons": "Button Variants",
  "dev-tools-cards": "Card Interactions",
  "dev-tools-neon": "Neon Animations",
  "dev-tools-tokens": "Design Tokens Reference",
  "dev-tools-icons": "Icon Library",
  "dev-tools-api": "Component API Reference",
  "dev-tools-playground": "Design System Playground",
  "dev-tools-code-quality": "Code Quality Dashboard",
  "dev-tools-deployment": "Deployment Readiness",
  "dev-tools-analytics": "Analytics Dashboard",
  "dev-tools-accessibility": "Accessibility Tester",
  "dev-tools-performance": "Performance Tester",
};