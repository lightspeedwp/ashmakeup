/**
 * @fileoverview Centralised search service
 * Searches across all content types: blog, portfolio, videos, podcasts, pages
 *
 * @module utils/searchService
 * @version 1.0.0
 */

import { SearchResult, SearchFilters } from '../data/types/search';
import { blogPosts } from '../data/mock/blog/posts';
import { allPortfolioWork } from '../data/mock/portfolio/index';
import { videos } from '../data/mock/videos';
import { podcastEpisodes } from '../data/mock/podcasts/episodes';
import { navigationItems } from '../data/mock/ui/navigation';
import { allEvents } from '../data/mock/events';
import { faqData, pageFaqGroups } from '../data/mock/sections/faq';

/**
 * Scores how well a query matches a string (0-100)
 */
function scoreMatch(text: string, query: string): number {
  if (!text || !query) return 0;
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();

  if (lowerText === lowerQuery) return 100;
  if (lowerText.startsWith(lowerQuery)) return 80;
  if (lowerText.includes(lowerQuery)) return 60;

  /* check individual words */
  const words = lowerQuery.split(/\s+/);
  const matched = words.filter(w => lowerText.includes(w));
  if (matched.length > 0) return (matched.length / words.length) * 40;

  return 0;
}

/**
 * Search all content types and return unified results
 */
export function searchAllContent(
  query: string,
  filters?: SearchFilters,
): SearchResult[] {
  if (!query || query.trim().length < 2) return [];

  const q = query.trim();
  let results: SearchResult[] = [];

  /* ── Blog ── */
  if (!filters?.type || filters.type === 'blog') {
    blogPosts.forEach(post => {
      const titleScore = scoreMatch(post.title, q);
      const excerptScore = scoreMatch(post.excerpt, q) * 0.7;
      const tagScore = Math.max(
        0,
        ...(post.tags ?? []).map(t => scoreMatch(t, q) * 0.5),
      );
      const catScore = scoreMatch(post.category ?? '', q) * 0.4;
      const best = Math.max(titleScore, excerptScore, tagScore, catScore);

      if (best > 0) {
        results.push({
          id: post.id,
          type: 'blog',
          title: post.title,
          excerpt: post.excerpt,
          url: `/blog/${post.slug}`,
          image: post.featuredImage?.src,
          category: post.category,
          tags: post.tags,
          date: post.publishedAt,
          relevanceScore: best + (post.featured ? 5 : 0),
        });
      }
    });
  }

  /* ── Portfolio ── */
  if (!filters?.type || filters.type === 'portfolio') {
    allPortfolioWork.forEach(entry => {
      const titleScore = scoreMatch(entry.title, q);
      const descScore = scoreMatch(entry.description, q) * 0.7;
      const contentScore = scoreMatch(entry.content ?? '', q) * 0.5;
      const tagScore = Math.max(
        0,
        ...entry.tags.map(t => scoreMatch(t, q) * 0.5),
      );
      const catScore = scoreMatch(entry.category, q) * 0.4;
      const best = Math.max(titleScore, descScore, contentScore, tagScore, catScore);

      if (best > 0) {
        results.push({
          id: entry.id,
          type: 'portfolio',
          title: entry.title,
          excerpt: '',
          url: `/portfolio/${entry.slug}`,
          image: entry.images?.[0]?.src,
          category: entry.category,
          tags: entry.tags,
          date: entry.date,
          relevanceScore: best + (entry.featured ? 5 : 0),
        });
      }
    });
  }

  /* ── Videos ── */
  if (!filters?.type || filters.type === 'video') {
    videos.forEach(vid => {
      const titleScore = scoreMatch(vid.title, q);
      const descScore = scoreMatch(vid.description, q) * 0.7;
      const catScore = scoreMatch(vid.category ?? '', q) * 0.4;
      const tagScore = Math.max(
        ...(vid.tags ?? []).map(t => scoreMatch(t, q) * 0.5),
        0,
      );
      const best = Math.max(titleScore, descScore, catScore, tagScore);

      if (best > 0) {
        results.push({
          id: vid.id,
          type: 'video',
          title: vid.title,
          excerpt: vid.description,
          url: `/video/${vid.slug}`,
          image: vid.thumbnailUrl,
          category: vid.category,
          date: vid.publishedAt,
          relevanceScore: best + (vid.featured ? 5 : 0),
        });
      }
    });
  }

  /* ── Podcasts ── */
  if (!filters?.type || filters.type === 'podcast') {
    podcastEpisodes.forEach(ep => {
      const titleScore = scoreMatch(ep.title, q);
      const descScore = scoreMatch(ep.description, q) * 0.7;
      const tagScore = Math.max(
        0,
        ...ep.tags.map(t => scoreMatch(t, q) * 0.5),
      );
      const best = Math.max(titleScore, descScore, tagScore);

      if (best > 0) {
        results.push({
          id: ep.id,
          type: 'podcast',
          title: ep.title,
          excerpt: ep.description,
          url: `/podcast/${ep.slug}`,
          image: ep.coverImage?.src,
          category: ep.category,
          tags: ep.tags,
          date: ep.publishedAt,
          relevanceScore: best + (ep.featured ? 5 : 0),
        });
      }
    });
  }

  /* ── Pages ── */
  if (!filters?.type || filters.type === 'page') {
    const pageEntries = [
      { id: 'home', title: 'Home', desc: 'Ash Shaw - Global Psytrance Makeup Artist', path: '/' },
      { id: 'about', title: 'About', desc: 'My journey from Cape Town to Berlin, painting faces on the dancefloor.', path: '/about/journey' },
      { id: 'portfolio', title: 'Portfolio', desc: 'Gallery of UV makeup, festival artistry, and nail art.', path: '/portfolio' },
      { id: 'blog', title: 'Blog', desc: 'Insights on festival makeup, travel, tutorials, and product reviews.', path: '/blog' },
      { id: 'videos', title: 'Videos', desc: 'Video showcases of creative work and tutorials.', path: '/videos' },
      { id: 'contact', title: 'Contact', desc: 'Get in touch for collaborations and festival enquiries.', path: '/contact' },
      { id: 'podcasts', title: 'Podcasts', desc: 'Listen to stories from the neon dancefloor.', path: '/podcasts' },
    ];

    pageEntries.forEach(page => {
      const titleScore = scoreMatch(page.title, q);
      const descScore = scoreMatch(page.desc, q) * 0.7;
      const best = Math.max(titleScore, descScore);

      if (best > 0) {
        results.push({
          id: page.id,
          type: 'page',
          title: page.title,
          excerpt: page.desc,
          url: page.path,
          relevanceScore: best,
        });
      }
    });
  }

  /* ── Events ── */
  if (!filters?.type || filters.type === 'event') {
    allEvents.forEach(event => {
      const titleScore = scoreMatch(event.name, q);
      const descScore = scoreMatch(event.description, q) * 0.7;
      const tagScore = Math.max(
        0,
        ...event.tags.map(t => scoreMatch(t, q) * 0.5),
      );
      const locScore = scoreMatch(
        `${event.location.city} ${event.location.country}`,
        q,
      ) * 0.4;
      const best = Math.max(titleScore, descScore, tagScore, locScore);

      if (best > 0) {
        results.push({
          id: event.id,
          type: 'event',
          title: event.name,
          excerpt: event.description,
          url: `/events/${event.slug}`,
          category: event.type,
          tags: event.tags,
          relevanceScore: best + (event.featured ? 5 : 0),
        });
      }
    });
  }

  /* ── FAQs ── */
  if (!filters?.type || filters.type === 'faq') {
    /* Global FAQs */
    faqData.forEach(faq => {
      const qScore = scoreMatch(faq.question, q);
      const aScore = scoreMatch(faq.answer, q) * 0.6;
      const best = Math.max(qScore, aScore);

      if (best > 0) {
        results.push({
          id: `faq-${faq.id}`,
          type: 'faq',
          title: faq.question,
          excerpt: faq.answer.slice(0, 160) + (faq.answer.length > 160 ? '…' : ''),
          url: '/faq',
          relevanceScore: best,
        });
      }
    });

    /* Page-specific FAQs */
    pageFaqGroups.forEach(group => {
      group.faqs.forEach(faq => {
        const qScore = scoreMatch(faq.question, q);
        const aScore = scoreMatch(faq.answer, q) * 0.6;
        const best = Math.max(qScore, aScore);

        if (best > 0) {
          /* Avoid duplicate IDs with global FAQs */
          const id = `faq-page-${group.pageId}-${faq.id}`;
          if (!results.some(r => r.id === id)) {
            results.push({
              id,
              type: 'faq',
              title: faq.question,
              excerpt: faq.answer.slice(0, 160) + (faq.answer.length > 160 ? '…' : ''),
              url: '/faq',
              category: group.title,
              relevanceScore: best,
            });
          }
        }
      });
    });
  }

  /* ── Sort ── */
  const sortBy = filters?.sortBy ?? 'relevance';
  results.sort((a, b) => {
    switch (sortBy) {
      case 'recent':
        return (b.date ?? '').localeCompare(a.date ?? '');
      case 'alphabetical':
        return a.title.localeCompare(b.title);
      case 'featured':
        return b.relevanceScore - a.relevanceScore;
      case 'relevance':
      default:
        return b.relevanceScore - a.relevanceScore;
    }
  });

  /* ── Category filter ── */
  if (filters?.category) {
    results = results.filter(
      r => r.category?.toLowerCase() === filters.category!.toLowerCase(),
    );
  }

  return results;
}