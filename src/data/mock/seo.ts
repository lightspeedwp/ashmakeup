/**
 * @fileoverview Centralised SEO metadata for every static page in the portfolio.
 *
 * Dynamic pages (blog posts, portfolio items, videos, podcasts) generate their
 * SEO from content data — see the respective page components.
 *
 * @module data/mock/seo
 * @version 1.0.0
 */

import type { SEOData } from '../../utils/seo';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SITE-WIDE DEFAULT (index.html / Figma Make settings)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const siteDefault: SEOData = {
  title: 'Ash Shaw | Neon & UV Makeup Art — Berlin & Festival Portfolio',
  description:
    'Explore the bold neon and UV makeup artistry of Ash Shaw. Festival face painting, blacklight designs, editorial looks, and creative tutorials — from Berlin clubs to international psytrance festivals.',
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MAIN PAGES
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const pageSEO: Record<string, SEOData> = {
  home: {
    title: 'Ash Shaw | Neon & UV Makeup Art — Berlin & Festival Portfolio',
    description:
      'Discover Ash Shaw\u2019s neon and UV makeup art. Festival face painting, blacklight looks, and creative tutorials from Berlin to international psytrance festivals.',
  },

  about: {
    title: 'About Ash Shaw | Aquarian, ADHD Creative & UV Makeup Artist',
    description:
      'Meet Ash Shaw \u2014 an Aquarian ADHD creative based in Berlin, painting bold neon and UV face art at psytrance festivals worldwide since 2019. His story, his wiring, his evolution.',
  },

  hiddenAbout: {
    title: 'The Whole Story | Ash Shaw \u2014 Hidden',
    description:
      'The hidden map to every corner of Ash Shaw\u2019s world. His story, his art, his podcast, his sub-pages \u2014 all in one place.',
  },

  manifesto: {
    title: 'Manifesto: Neon vs Atomic Black | Ash Shaw Makeup',
    description:
      'The creative philosophy behind Ash Shaw\u2019s neon and UV makeup art \u2014 a manifesto of light, darkness, and the art that exists between them.',
  },

  history: {
    title: 'History | Timeline of Ash Shaw\u2019s Makeup Journey',
    description:
      'Follow the chronological milestones of Ash Shaw\u2019s neon and UV makeup art journey \u2014 from his first brush stroke in Berlin in July 2019 to international festival stages.',
  },

  berlin: {
    title: 'Berlin | Ash Shaw\u2019s Creative Anchor City',
    description:
      'Discover why Ash Shaw made Berlin his home \u2014 the underground club scene, cycling culture, open-air summers, and the creative community that shapes his neon makeup art.',
  },

  book: {
    title: 'The Book | "This one time on acid\u2026" \u2014 Ash Shaw',
    description:
      'Ash Shaw is writing a book weaving his craziest life stories into the deepest lessons they taught him. Aquarius, ADHD, Lucy, and the neon dancefloor.',
  },

  bio: {
    title: 'Bio | Ash Shaw \u2014 Neon & UV Makeup Artist',
    description:
      'The full biography of Ash Shaw \u2014 South African-born, Berlin-based male makeup artist (he/him), Aquarius, ADHD creative, cyclist, and festival soul since 2019.',
  },

  process: {
    title: 'Creative Process | How Ash Shaw Creates UV Makeup Art',
    description:
      'Step inside Ash Shaw\u2019s creative process \u2014 from reading the energy of a crowd to the final reveal under blacklight. Ambidextrous UV painting on the dancefloor.',
  },

  lucy: {
    title: 'Lucy in the Sky with Diamonds | Ash Shaw',
    description:
      'How expanded states of awareness shaped Ash Shaw\u2019s neon art, deepened his perception of colour, and combined with ADHD to create a unique creative vision.',
  },

  travels: {
    title: 'Travels | Chasing Summers & Sound \u2014 Ash Shaw',
    description:
      'Follow Ash Shaw\u2019s nomadic festival circuit \u2014 from Cape Town to Berlin, Thai jungles to Portuguese hills. Cycling to festivals, painting faces across continents.',
  },

  podcast: {
    title: 'Podcast | Neon vs Atomic Black \u2014 Ash Shaw',
    description:
      'Ash Shaw\u2019s podcast exploring psytrance art, UV makeup culture, festival life, ADHD creativity, and long-form conversations with the creative community.',
  },

  ebook: {
    title: 'eBook Preview | This one time on acid\u2026 \u2014 Ash Shaw',
    description:
      'Read sample chapters from Ash Shaw\u2019s upcoming book. Raw first-person storytelling about festivals, ADHD, expanded awareness, and the making of a neon soul.',
  },

  adhd: {
    title: 'ADHD | Wired Different \u2014 Ash Shaw',
    description:
      'Ash Shaw\u2019s personal experience with ADHD \u2014 growing up undiagnosed, discovering hyperfocus as a superpower, and finding the right operating system on the festival dancefloor.',
  },

  cycling: {
    title: 'Cycling | Two Wheels & UV Paint \u2014 Ash Shaw',
    description:
      'From Western Province mountain bike champion to festival pilgrim. Ash Shaw\u2019s lifelong relationship with the bicycle \u2014 transport, meditation, ADHD medication, and art delivery system.',
  },

  aquarius: {
    title: 'Aquarius | The Aquarian Blueprint \u2014 Ash Shaw',
    description:
      'How the Aquarian need to question everything, amplified by ADHD and expanded awareness, became the operating system for Ash Shaw\u2019s art, identity, and life lived in full colour.',
  },

  music: {
    title: 'Music | 140 BPM Heartbeat \u2014 Ash Shaw',
    description:
      'Ash Shaw\u2019s relationship with psytrance and electronic music \u2014 twenty-five years of dancefloors, the artists that shaped his art, and the moment 140 BPM became the heartbeat of understanding.',
  },

  lightspeed: {
    title: 'LightSpeed | The Day Job \u2014 Ash Shaw',
    description:
      'LightSpeedDevelopment \u2014 the WordPress agency Ash Shaw founded in 2003. 22+ years of web development, design systems, open-source community, and a team of 13 building exceptional websites.',
  },

  education: {
    title: 'Education | The Unconventional Classroom \u2014 Ash Shaw',
    description:
      'Ash Shaw\u2019s educational journey \u2014 from Paarl Boys High to self-taught web developer, from BarCamp Cape Town to WordCamp Europe keynote speaker. The classrooms that mattered had no walls.',
  },

  partners: {
    title: 'Partners | The People Along the Way \u2014 Ash Shaw',
    description:
      'The significant relationships that shaped Ash Shaw \u2014 romantic partners, creative collaborators, and the chosen festival family. A gratitude page for the people who made the journey meaningful.',
  },

  fitness: {
    title: 'Fitness | The Moving Body \u2014 Ash Shaw',
    description:
      'Movement as medicine for the ADHD brain \u2014 cycling since 1994, yoga, running, triathlon, Muay Thai, and the festival dancefloor. How physical movement connects to Ash Shaw\u2019s creative output.',
  },

  sixCats: {
    title: 'Six Cats Club | Craft Cannabis \u2014 Ash Shaw',
    description:
      'Ash Shaw\u2019s Six Cats Cannabis Club in Cape Town \u2014 nearly 20 years of organic craft cultivation, a proprietary grading system, sustainable packaging, and the rescue cats who became the brand\u2019s soul.',
  },

  portfolio: {
    title: 'Portfolio | Neon & UV Makeup Gallery \u2014 Ash Shaw',
    description:
      'Browse Ash Shaw\u2019s portfolio of neon face paint, UV-reactive designs, and festival makeup art. Bold blacklight looks from Berlin, Thailand, and global festivals.',
  },

  blog: {
    title: 'Insights | Makeup Tips, Festival Guides & Tutorials \u2014 Ash Shaw',
    description:
      'Read Ash Shaw\u2019s insights on festival makeup survival, UV application techniques, packing guides, and behind-the-scenes stories from the psytrance circuit.',
  },

  videos: {
    title: 'Videos | Makeup Tutorials & Festival Art \u2014 Ash Shaw',
    description:
      'Watch Ash Shaw\u2019s makeup tutorials, UV art animations, and behind-the-scenes festival content. Neon face painting, blacklight design, and creative process videos.',
  },

  contact: {
    title: 'Contact Ash Shaw | Collaborate on Festival & Neon Art',
    description:
      'Get in touch with Ash Shaw for festival makeup collaborations, art projects, and creative partnerships. Based in Berlin, available internationally.',
  },

  faq: {
    title: 'FAQ | Frequently Asked Questions \u2014 Ash Shaw',
    description:
      'Find answers to common questions about Ash Shaw\u2019s neon and UV makeup art, festival appearances, techniques, products, and collaboration process.',
  },

  feedback: {
    title: 'Feedback & Testimonials | What People Say \u2014 Ash Shaw',
    description:
      'Read what festival-goers and collaborators say about Ash Shaw\u2019s neon face painting and UV makeup art from events across Berlin and international festivals.',
  },

  stickers: {
    title: 'Sticker Gallery | UV-Reactive Art Prints \u2014 Ash Shaw',
    description:
      'Explore Ash Shaw\u2019s collection of 26 UV-reactive sticker designs \u2014 holographic vinyl art for festivals, inspired by sacred geometry and psytrance culture.',
  },

  events: {
    title: 'Events | Festivals, Club Nights & Creative Gatherings \u2014 Ash Shaw',
    description:
      'Explore the festivals, club nights, and creative events where Ash Shaw has painted faces \u2014 from the Western Cape mountains to Berlin\u2019s underground psytrance stages.',
  },

  search: {
    title: 'Search | Find Content \u2014 Ash Shaw',
    description:
      'Search across Ash Shaw\u2019s portfolio, blog posts, videos, and podcasts. Find neon makeup tutorials, festival guides, and UV art content.',
  },

  sitemap: {
    title: 'Sitemap | Ash Shaw Makeup Art Portfolio',
    description:
      'Navigate the complete Ash Shaw portfolio \u2014 every page, blog post, video, podcast, and portfolio entry in one place.',
  },

  styleGuide: {
    title: 'Style Guide | Neon vs Atomic Black Design System \u2014 Ash Shaw',
    description:
      'Explore the Neon vs Atomic Black design system \u2014 typography, colours, components, and BEM patterns powering the Ash Shaw portfolio.',
  },

  terms: {
    title: 'Terms & Conditions | Ash Shaw',
    description:
      'Read the terms and conditions for using the Ash Shaw makeup art portfolio website. Personal art project \u2014 non-commercial use only.',
  },

  privacy: {
    title: 'Privacy Policy | Ash Shaw',
    description:
      'Learn how the Ash Shaw portfolio handles your data. Minimal data collection, no tracking cookies, and transparent privacy practices.',
  },

  notFound: {
    title: 'Page Not Found | Ash Shaw',
    description:
      'The page you\u2019re looking for doesn\u2019t exist. Head back to Ash Shaw\u2019s portfolio to explore neon makeup art, tutorials, and festival content.',
  },
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DEVELOPER TOOLS HUB + SUB-TOOLS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */
export const devToolsSEO: Record<string, SEOData> = {
  hub: {
    title: 'Developer Tools | Design System Hub \u2014 Ash Shaw',
    description:
      '23 developer tools for inspecting the Ash Shaw portfolio design system \u2014 tokens, icons, components, accessibility, performance, and code quality.',
  },

  tokens: {
    title: 'Design Tokens Reference | Dev Tools \u2014 Ash Shaw',
    description:
      'Browse every CSS custom property in the Neon vs Atomic Black design system \u2014 colours, spacing, typography, shadows, and border radius tokens.',
  },

  icons: {
    title: 'Icon Library | Dev Tools \u2014 Ash Shaw',
    description:
      'Search and preview every Lucide icon used in the Ash Shaw portfolio. Copy import statements and see usage context for each icon.',
  },

  api: {
    title: 'Component API Reference | Dev Tools \u2014 Ash Shaw',
    description:
      'Full props documentation for every React component in the portfolio \u2014 types, defaults, required fields, and import statements.',
  },

  playground: {
    title: 'Design System Playground | Dev Tools \u2014 Ash Shaw',
    description:
      'Experiment with design tokens in real time. Adjust colours, spacing, typography, and shadows and see live component previews.',
  },

  codeQuality: {
    title: 'Code Quality Dashboard | Dev Tools \u2014 Ash Shaw',
    description:
      'Live code quality metrics \u2014 DOM element count, CSS stats, dependency tree, lint results, and overall health score.',
  },

  deployment: {
    title: 'Deployment Readiness | Dev Tools \u2014 Ash Shaw',
    description:
      'Pre-launch audit with 26 automated checks across performance, accessibility, SEO, security, and PWA readiness.',
  },

  analytics: {
    title: 'Analytics Dashboard | Dev Tools \u2014 Ash Shaw',
    description:
      'Track page views, content engagement, popular posts, search queries, and visitor behaviour with live session data and trend charts.',
  },

  components: {
    title: 'Component Showcase | Dev Tools \u2014 Ash Shaw',
    description:
      'Live visual previews of every reusable UI component \u2014 Logo, SocialLinks, Breadcrumbs, ReadMore, Share, and ThemeToggle rendered in isolation.',
  },

  snippets: {
    title: 'Snippet Generator | Dev Tools \u2014 Ash Shaw',
    description:
      'Generate BEM-compliant CSS and JSX scaffolding for new components. Pick a template, name it, and copy ready-to-use code.',
  },

  docs: {
    title: 'Documentation Generator | Dev Tools \u2014 Ash Shaw',
    description:
      'Auto-generated markdown documentation for every public component \u2014 props, imports, descriptions, and usage notes ready to copy.',
  },

  visualRegression: {
    title: 'Visual Regression Tester | Dev Tools \u2014 Ash Shaw',
    description:
      'Compare component rendering across themes, states, and viewport sizes using side-by-side or overlay comparison modes.',
  },

  integration: {
    title: 'Integration Tester | Dev Tools \u2014 Ash Shaw',
    description:
      'Run 25 automated checks across 6 test suites \u2014 navigation, theming, accessibility, analytics, performance, and PWA compliance.',
  },

  typography: {
    title: 'Typography Specimens | Dev Tools \u2014 Ash Shaw',
    description:
      'Preview the full typographic scale \u2014 fluid headings, body text, captions, and font pairings from the Neon vs Atomic Black system.',
  },

  spacing: {
    title: 'Spacing Scale | Dev Tools \u2014 Ash Shaw',
    description:
      'Visualise every spacing token in the fluid spacing system \u2014 from compact mobile gaps to expansive desktop section padding.',
  },

  shadows: {
    title: 'Shadow & Glow Scale | Dev Tools \u2014 Ash Shaw',
    description:
      'Preview all shadow and neon glow effects \u2014 card hover shadows, button glows, and focus ring styles from the design system.',
  },

  radius: {
    title: 'Border Radius Specimens | Dev Tools \u2014 Ash Shaw',
    description:
      'Visual reference for every border-radius token \u2014 from subtle rounded corners to fully circular elements.',
  },

  buttons: {
    title: 'Button Variants | Dev Tools \u2014 Ash Shaw',
    description:
      'Interactive showcase of every button style \u2014 neon primary, outline, ghost, and destructive variants in all sizes and states.',
  },

  cards: {
    title: 'Card Interactions | Dev Tools \u2014 Ash Shaw',
    description:
      'Preview card hover effects, neon border glows, and interactive states across portfolio, blog, and section card variants.',
  },

  neon: {
    title: 'Neon Animations | Dev Tools \u2014 Ash Shaw',
    description:
      'All 26 CSS keyframe animations demonstrated live \u2014 neon pulse, gradient shift, float, bounce, and reduced-motion alternatives.',
  },

  accessibility: {
    title: 'Accessibility Tester | Dev Tools \u2014 Ash Shaw',
    description:
      'Run live WCAG 2.1 AA accessibility audits \u2014 colour contrast, ARIA labels, keyboard navigation, heading hierarchy, and focus management.',
  },

  performance: {
    title: 'Performance Tester | Dev Tools \u2014 Ash Shaw',
    description:
      'Measure DOM size, render time, resource loading, and layout performance metrics against target thresholds.',
  },

  stickersDevTool: {
    title: 'Sticker Designs | Dev Tools \u2014 Ash Shaw',
    description:
      'Browse all 26 UV-reactive sticker designs from the design system \u2014 holographic vinyl art inspired by sacred geometry.',
  },

  styleGuideDevTool: {
    title: 'Style Guide Reference | Dev Tools \u2014 Ash Shaw',
    description:
      'Complete style guide for the Neon vs Atomic Black design system \u2014 colour palettes, typography, iconography, and component patterns.',
  },
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DYNAMIC CONTENT HELPERS (blog/portfolio/video/podcast)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

/** Generate SEO for a single blog post */
export function blogPostSEO(title: string, excerpt: string): SEOData {
  return {
    title: title.length > 47 ? `${title.slice(0, 44)}… | Ash Shaw` : `${title} | Insights \u2014 Ash Shaw`,
    description: excerpt.length > 155 ? excerpt.slice(0, 152).trimEnd() + '…' : excerpt,
    ogType: 'article',
  };
}

/** Generate SEO for a blog category archive */
export function blogCategorySEO(categoryName: string): SEOData {
  return {
    title: `${categoryName} | Insights \u2014 Ash Shaw`,
    description: `Read Ash Shaw\u2019s ${categoryName.toLowerCase()} articles \u2014 tips, guides, and stories from the world of neon and UV makeup artistry.`,
  };
}

/** Generate SEO for a blog tag archive */
export function blogTagSEO(tagName: string): SEOData {
  return {
    title: `${tagName} | Insights \u2014 Ash Shaw`,
    description: `Browse all Ash Shaw blog posts tagged with ${tagName} \u2014 festival makeup insights, tutorials, and creative stories.`,
  };
}

/** Generate SEO for a single portfolio entry */
export function portfolioEntrySEO(title: string, description: string): SEOData {
  const desc = description || `Explore ${title} from Ash Shaw\u2019s neon and UV makeup art portfolio.`;
  return {
    title: title.length > 42 ? `${title.slice(0, 39)}… | Portfolio` : `${title} | Portfolio \u2014 Ash Shaw`,
    description: desc.length > 155 ? desc.slice(0, 152).trimEnd() + '…' : desc,
  };
}

/** Generate SEO for a portfolio category archive */
export function portfolioCategorySEO(categoryName: string): SEOData {
  return {
    title: `${categoryName} | Portfolio \u2014 Ash Shaw`,
    description: `Browse Ash Shaw\u2019s ${categoryName.toLowerCase()} makeup art \u2014 neon face paint, UV-reactive designs, and festival looks.`,
  };
}

/** Generate SEO for a portfolio tag archive */
export function portfolioTagSEO(tagName: string): SEOData {
  return {
    title: `${tagName} | Portfolio \u2014 Ash Shaw`,
    description: `View all portfolio entries tagged with ${tagName} in Ash Shaw\u2019s neon and UV makeup art collection.`,
  };
}

/** Generate SEO for a single video */
export function videoSEO(title: string, description: string): SEOData {
  return {
    title: title.length > 44 ? `${title.slice(0, 41)}… | Videos` : `${title} | Videos \u2014 Ash Shaw`,
    description: description.length > 155 ? description.slice(0, 152).trimEnd() + '…' : description,
    ogType: 'video.other',
  };
}

/** Generate SEO for a video category archive */
export function videoCategorySEO(categoryName: string): SEOData {
  return {
    title: `${categoryName} | Videos \u2014 Ash Shaw`,
    description: `Watch Ash Shaw\u2019s ${categoryName.toLowerCase()} videos \u2014 tutorials, behind-the-scenes content, and creative process from the neon makeup studio.`,
  };
}

/** Generate SEO for a video tag archive */
export function videoTagSEO(tagName: string): SEOData {
  return {
    title: `${tagName} | Videos \u2014 Ash Shaw`,
    description: `Browse all Ash Shaw videos tagged with ${tagName} \u2014 makeup tutorials, festival content, and UV art process.`,
  };
}

/** Generate SEO for a single podcast episode */
export function podcastSEO(title: string, description: string): SEOData {
  return {
    title: title.length > 42 ? `${title.slice(0, 39)}… | Podcasts` : `${title} | Podcasts \u2014 Ash Shaw`,
    description: description.length > 155 ? description.slice(0, 152).trimEnd() + '…' : description,
  };
}

/** Generate SEO for a podcast category archive */
export function podcastCategorySEO(categoryName: string): SEOData {
  return {
    title: `${categoryName} | Podcasts \u2014 Ash Shaw`,
    description: `Listen to Ash Shaw\u2019s ${categoryName.toLowerCase()} podcast episodes \u2014 stories, interviews, and insights from the psytrance art community.`,
  };
}

/** Generate SEO for a podcast tag archive */
export function podcastTagSEO(tagName: string): SEOData {
  return {
    title: `${tagName} | Podcasts \u2014 Ash Shaw`,
    description: `Browse all podcast episodes tagged with ${tagName} from Ash Shaw\u2019s Neon vs Atomic Black series.`,
  };
}

/** Generate SEO for a single event detail page */
export function eventDetailSEO(name: string, description: string): SEOData {
  const desc = description || `Explore ${name} \u2014 a creative event where Ash Shaw showcases neon and UV makeup art.`;
  return {
    title: name.length > 42 ? `${name.slice(0, 39)}\u2026 | Events` : `${name} | Events \u2014 Ash Shaw`,
    description: desc.length > 155 ? desc.slice(0, 152).trimEnd() + '\u2026' : desc,
  };
}

/** Generate SEO for an event category archive */
export function eventCategorySEO(categoryName: string): SEOData {
  return {
    title: `${categoryName} | Events \u2014 Ash Shaw`,
    description: `Browse Ash Shaw\u2019s ${categoryName.toLowerCase()} appearances \u2014 festivals, club nights, and creative gatherings featuring neon and UV art.`,
  };
}

/** Generate SEO for an event tag archive */
export function eventTagSEO(tagName: string): SEOData {
  return {
    title: `${tagName} | Events \u2014 Ash Shaw`,
    description: `View all events tagged with ${tagName} from Ash Shaw\u2019s neon and UV makeup art journey.`,
  };
}