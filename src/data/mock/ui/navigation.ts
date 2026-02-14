/**
 * @fileoverview Navigation UI data
 * @module data/mock/ui/navigation
 */

import type { LucideIcon } from "lucide-react";
import { Home, User, Image, Play, BookOpen, Mail } from "lucide-react";

export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  icon: LucideIcon;
}

export const navigationItems: NavigationItem[] = [
  { id: "home", label: "Home", path: "/", icon: Home },
  { id: "about", label: "About", path: "/about", icon: User },
  { id: "portfolio", label: "Portfolio", path: "/portfolio", icon: Image },
  { id: "videos", label: "Videos", path: "/videos", icon: Play },
  { id: "blog", label: "Blog", path: "/blog", icon: BookOpen },
  { id: "contact", label: "Contact", path: "/contact", icon: Mail },
];

export const pageTitles: Record<string, string> = {
  home: "Home",
  about: "About Ash Shaw",
  portfolio: "Portfolio - Makeup Artistry Work",
  "portfolio-detail": "Portfolio Detail",
  videos: "Videos - Tutorials & Showcases",
  blog: "Blog - Makeup Artistry Insights",
  "blog-post": "Blog Post",
  contact: "Contact - Get in Touch",
  terms: "Terms and Conditions",
  privacy: "Privacy Policy",
  sitemap: "Sitemap - Site Index",
  "style-guide": "Style Guide - Design System",
};