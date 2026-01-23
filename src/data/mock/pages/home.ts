/**
 * @fileoverview Homepage content data
 * All static content for the homepage including hero, why section, and metadata
 * 
 * @module data/mock/pages/home
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { PageContent, HeroContent, WhyReason } from '../../types';

/**
 * Homepage Hero Section Content
 * Main headline, description, and CTA for the homepage hero
 * 
 * @constant {HeroContent}
 */
export const homepageHero: HeroContent = {
  title: "Hi, I'm Ash Shaw",
  subtitle: "Makeup that shines with colour, energy, and connection",
  description: "Makeup is my art, my joy, and my way of bringing people together. From festivals to the dance floor, I use colour and light to create looks that make people feel radiant, confident, and alive.",
  ctaText: "Explore My Portfolio",
  ctaLink: "/portfolio"
};

/**
 * Why I Do Makeup - Core Reasons
 * Three philosophical pillars explaining Ash's passion for makeup artistry
 * 
 * @constant {WhyReason[]}
 */
export const whyReasons: WhyReason[] = [
  {
    id: 'spread-joy',
    icon: 'shine',
    title: 'Spread Joy',
    description: 'When I do makeup for others, it lights them up. They feel special, happy, and confident — and seeing that sparkle in their eyes inspires me to keep creating.',
    order: 1
  },
  {
    id: 'brings-joy',
    icon: 'joy',
    title: 'Brings Me Joy',
    description: 'Makeup is my creative playground. Whether it\'s festival glitter, glowing UV paints, or bold eyeshadow blends, I love the process of experimenting and expressing.',
    order: 2
  },
  {
    id: 'keep-growing',
    icon: 'growth',
    title: 'To Keep Growing',
    description: 'Every face, every colour, every night out is a chance to evolve. Makeup is a journey — and I treat each session as an opportunity to learn and expand my artistry.',
    order: 3
  }
];

/**
 * Complete Homepage Content
 * All page-level content and metadata
 * 
 * @constant {PageContent}
 */
export const homepageContent: PageContent = {
  id: 'home',
  title: 'Ash Shaw - Makeup Artist Portfolio',
  metaDescription: 'Festival makeup artist specializing in creative, colorful looks. Based in Thailand, creating joy through makeup artistry.',
  hero: homepageHero,
  sections: {
    why: whyReasons
  }
};
