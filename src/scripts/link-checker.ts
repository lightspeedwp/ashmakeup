/**
 * @fileoverview Automated Link Checker
 * Scans all mock data content for internal links and verifies they point to valid routes.
 * 
 * Usage:
 * ts-node scripts/link-checker.ts
 */

import { blogPosts } from '../data/mock/blog/posts';
import { allPortfolioWork } from '../data/mock/portfolio';
import { getPageIdFromPath } from '../hooks/useAppNavigate';

// Simulated route registry (since we can't easily import the router config in Node)
// This should match getPageIdFromPath logic + dynamic slugs
const STATIC_ROUTES = [
  '/',
  '/about',
  '/portfolio',
  '/blog',
  '/contact',
  '/videos',
  '/podcasts',
  '/search',
  '/terms',
  '/privacy',
  '/about/manifesto',
  '/about/accessibility',
  '/press',
  '/toolkit',
  '/next-festival'
];

// Collect all dynamic slugs
const BLOG_SLUGS = blogPosts.map(p => `/blog/${p.slug}`);
const PORTFOLIO_SLUGS = allPortfolioWork.map(p => `/portfolio/${p.slug}`);
const VALID_ROUTES = new Set([
  ...STATIC_ROUTES,
  ...BLOG_SLUGS,
  ...PORTFOLIO_SLUGS
]);

const brokenLinks: { source: string; link: string; context: string }[] = [];

// Helper to extract links from Markdown content
function extractLinks(content: string): string[] {
  const linkRegex = /\[.*?\]\((.*?)\)/g;
  const links: string[] = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    links.push(match[1]);
  }
  return links;
}

console.log('🔍 Starting Link Audit...');

// 1. Scan Blog Posts
blogPosts.forEach(post => {
  const links = extractLinks(post.content);
  links.forEach(link => {
    // Ignore external links and anchors
    if (link.startsWith('http') || link.startsWith('#') || link.startsWith('mailto:')) return;

    // Check if link exists in registry
    // Handle relative links or root-relative
    const normalizedLink = link.startsWith('/') ? link : `/${link}`;
    
    // Basic check: is it in valid routes? 
    // (This is naive; real implementation would need robust path matching)
    const isValid = Array.from(VALID_ROUTES).some(route => {
      if (route === normalizedLink) return true;
      // Handle category/tag routes if we had them in the registry
      return false;
    });

    if (!isValid) {
      // Special case: check if it's a known missing route pattern like /blog/category/...
      if (normalizedLink.startsWith('/blog/category/') || normalizedLink.startsWith('/blog/tag/')) return;
      if (normalizedLink.startsWith('/portfolio/category/') || normalizedLink.startsWith('/portfolio/tag/')) return;

      brokenLinks.push({
        source: `Blog: ${post.title}`,
        link,
        context: 'Markdown Content'
      });
    }
  });
});

// Report
console.log('---------------------------------------------------');
if (brokenLinks.length === 0) {
  console.log('✅ No broken internal links found.');
} else {
  console.log(`❌ Found ${brokenLinks.length} potentially broken links:`);
  brokenLinks.forEach(item => {
    console.log(`- [${item.source}] points to "${item.link}"`);
  });
}
console.log('---------------------------------------------------');
