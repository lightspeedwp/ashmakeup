/**
 * @fileoverview Sitemap page content and tag descriptions
 * Centralised data for the visual sitemap/site index page
 *
 * @module data/mock/ui/sitemap
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

export const sitemapContent = {
  title: "Sitemap",
  subtitle: "Everything on this site, all in one place.",
  sections: {
    pages: "Pages",
    portfolioCategories: "Portfolio Categories",
    blogCategories: "Blog Categories",
    blogPosts: "Blog Posts",
    tags: "Tags",
    legal: "Legal",
  },
};

/**
 * Tag descriptions — short descriptions displayed under each tag title
 * on the sitemap page and on tag archive pages
 */
export interface TagDescriptor {
  name: string;
  slug: string;
  description: string;
}

export const tagDescriptors: TagDescriptor[] = [
  // Makeup Types
  {
    name: "Festival Makeup",
    slug: "festival-makeup",
    description:
      "Bold, expressive looks designed for outdoor festivals and multi-day raves.",
  },
  {
    name: "UV Makeup",
    slug: "uv-makeup",
    description:
      "Fluorescent pigments that glow under blacklight for maximum dancefloor impact.",
  },
  {
    name: "Blacklight",
    slug: "blacklight",
    description:
      "Techniques and products optimised for UV-reactive environments.",
  },
  {
    name: "Neon",
    slug: "neon",
    description:
      "High-saturation neon colours that pop in daylight and glow at night.",
  },
  {
    name: "Natural Makeup",
    slug: "natural-makeup",
    description:
      "Subtle, skin-first looks that enhance without overpowering.",
  },
  {
    name: "Glam Makeup",
    slug: "glam-makeup",
    description:
      "Full-coverage, high-impact glamour for special occasions and events.",
  },
  {
    name: "Face Paint",
    slug: "face-paint",
    description:
      "Artistic face painting using water-activated and cream-based paints.",
  },
  {
    name: "Body Paint",
    slug: "body-paint",
    description:
      "Large-scale body art across torso, arms, and beyond the face.",
  },
  {
    name: "Eye Makeup",
    slug: "eye-makeup",
    description:
      "Detailed eye-focused designs from graphic liner to smoky cut-creases.",
  },
  {
    name: "Lip Art",
    slug: "lip-art",
    description:
      "Creative lip designs using stains, pigments, and precise detailing.",
  },
  {
    name: "Nail Art",
    slug: "nail-art",
    description:
      "Fusion nail designs with neon accents, gems, and miniature artistry.",
  },

  // Techniques
  {
    name: "Tutorial",
    slug: "tutorial",
    description:
      "Step-by-step walkthroughs for recreating specific looks at home.",
  },
  {
    name: "Tips",
    slug: "tips",
    description: "Quick, actionable advice for improving your makeup game.",
  },
  {
    name: "Guide",
    slug: "guide",
    description: "In-depth guides covering a topic from start to finish.",
  },
  {
    name: "How-To",
    slug: "how-to",
    description:
      "Practical instructions for mastering individual techniques.",
  },
  {
    name: "Step-by-Step",
    slug: "step-by-step",
    description:
      "Detailed breakdowns with numbered steps and reference photos.",
  },

  // Products & Tools
  {
    name: "Product Review",
    slug: "product-review",
    description:
      "Honest, field-tested reviews of paints, pigments, and tools.",
  },
  {
    name: "Waterproof",
    slug: "waterproof",
    description:
      "Products and methods that survive sweat, rain, and tropical humidity.",
  },
  {
    name: "Long-Lasting",
    slug: "long-lasting",
    description:
      "Techniques for making looks survive 12+ hour festival sessions.",
  },
  {
    name: "Cruelty-Free",
    slug: "cruelty-free",
    description:
      "Products not tested on animals, certified cruelty-free brands.",
  },
  {
    name: "Vegan",
    slug: "vegan",
    description:
      "Makeup made without any animal-derived ingredients.",
  },
  {
    name: "Eco-Friendly",
    slug: "eco-friendly",
    description:
      "Sustainable products and practices, including biodegradable glitter.",
  },

  // Events & Locations
  {
    name: "Festival",
    slug: "festival",
    description:
      "Content related to music festivals, psytrance gatherings, and raves.",
  },
  {
    name: "Rave",
    slug: "rave",
    description:
      "Underground and electronic music events from Berlin to global scenes.",
  },
  {
    name: "Club",
    slug: "club",
    description:
      "Nightlife-focused looks designed for indoor club lighting.",
  },
  {
    name: "Thailand",
    slug: "thailand",
    description:
      "Festival season in Koh Phangan, jungle parties, and tropical artistry.",
  },
  {
    name: "Switzerland",
    slug: "switzerland",
    description:
      "Alpine festivals like Shankra and Reiserfieber in the Swiss mountains.",
  },
  {
    name: "Koh Phangan",
    slug: "koh-phangan",
    description:
      "Full Moon parties and jungle raves on Thailand's island paradise.",
  },
  {
    name: "Travel",
    slug: "travel",
    description:
      "Adventures, cycling journeys, and global festival-hopping stories.",
  },

  // Concepts
  {
    name: "Color Theory",
    slug: "color-theory",
    description:
      "The science of complementary, analogous, and triadic colour harmony.",
  },
  {
    name: "Skin Care",
    slug: "skin-care",
    description:
      "Pre-event prep and post-festival recovery for healthy skin.",
  },
  {
    name: "Beauty",
    slug: "beauty",
    description:
      "Broader beauty culture, trends, and personal philosophy.",
  },
  {
    name: "Creativity",
    slug: "creativity",
    description:
      "Inspiration, artistic process, and pushing creative boundaries.",
  },
  {
    name: "Self-Expression",
    slug: "self-expression",
    description:
      "Using makeup as a form of identity, freedom, and personal art.",
  },

  // Specific Elements
  {
    name: "Glitter",
    slug: "glitter",
    description:
      "Biodegradable glitter application, types, and eco-conscious sparkle.",
  },
  {
    name: "Gems",
    slug: "gems",
    description: "Face gems, rhinestone placement, and adhesive techniques.",
  },
  {
    name: "Rhinestones",
    slug: "rhinestones",
    description:
      "Precision rhinestone placement for editorial and festival looks.",
  },
  {
    name: "Metallic",
    slug: "metallic",
    description:
      "Chrome, gold, and silver metallic finishes for futuristic looks.",
  },
  {
    name: "Holographic",
    slug: "holographic",
    description:
      "Prismatic, rainbow-shift pigments and holographic effects.",
  },
  {
    name: "Iridescent",
    slug: "iridescent",
    description:
      "Colour-shifting duochrome pigments that change with the light.",
  },

  // Essentials
  {
    name: "Packing List",
    slug: "packing-list",
    description:
      "Curated kit lists for travelling light to festivals and events.",
  },
  {
    name: "Essentials",
    slug: "essentials",
    description:
      "Must-have products and tools for any makeup artist's kit.",
  },
  {
    name: "Must-Haves",
    slug: "must-haves",
    description: "Top product picks that have earned a permanent spot in my bag.",
  },
  {
    name: "Emergency Kit",
    slug: "emergency-kit",
    description:
      "Quick-fix supplies for on-the-spot repairs and touch-ups.",
  },

  // Skills
  {
    name: "Education",
    slug: "education",
    description:
      "Theory, workshops, and learning resources for aspiring artists.",
  },
  {
    name: "Theory",
    slug: "theory",
    description:
      "Foundational knowledge behind colour, light, and composition.",
  },
  {
    name: "Technique",
    slug: "technique",
    description:
      "Specific application methods from blending to graphic precision.",
  },
  {
    name: "Professional",
    slug: "professional",
    description:
      "Industry insights, career advice, and working at professional events.",
  },
];
