/**
 * @fileoverview About page content data
 * Ash Shaw's journey, philosophy, and creative approach
 * 
 * @module data/mock/pages/about
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { HeroImage, AboutSection } from '../../types';

/**
 * About Page Hero Content
 * 
 * @constant
 */
export const aboutHero = {
  title: 'About Ash Shaw',
  subtitle: 'Makeup Artist & Creative Spirit',
  description: 'From festivals to fine art, discover the journey behind the makeup and the philosophy of colour, energy, and connection.'
};

/**
 * Journey Section Content
 * 
 * @constant
 */
export const journeySection: AboutSection = {
  id: 'journey-section',
  title: 'My Creative Journey',
  content: [
    {
      type: 'paragraph',
      text: 'My makeup journey began at festivals, where I discovered the transformative power of colour and self-expression. What started as face painting at gatherings evolved into a passion for creating vibrant, personality-driven looks that celebrate individuality.'
    },
    {
      type: 'paragraph',
      text: 'Through travels across Thailand, Switzerland, and beyond, I\'ve had the privilege of painting faces at some of the world\'s most colourful festivals—from jungle parties in Koh Phangan to mountain celebrations in the Swiss Alps.'
    },
    {
      type: 'paragraph',
      text: 'Each festival, each face, each conversation has shaped my approach to makeup artistry. It\'s not just about the technique—it\'s about the connection, the energy, and the joy of helping people feel confident and beautiful in their own skin.'
    }
  ],
  image: {
    src: 'https://images.unsplash.com/photo-1729599102515-710a4dd83637?w=1080',
    alt: 'Artistic makeup portrait showcasing creative evolution',
    caption: 'Creative Evolution'
  },
  order: 1
};

/**
 * Philosophy Section Content
 * 
 * @constant
 */
export const philosophySection: AboutSection = {
  id: 'philosophy-section',
  title: 'My Philosophy',
  content: [
    {
      type: 'heading',
      text: 'Makeup That Celebrates You'
    },
    {
      type: 'paragraph',
      text: 'I believe makeup should enhance your natural beauty and reflect your personality—not hide it. Whether it\'s a subtle glow or bold festival artistry, every look I create is tailored to you.'
    },
    {
      type: 'heading',
      text: 'Colour, Energy & Connection'
    },
    {
      type: 'paragraph',
      text: 'Colour has energy. It has the power to transform how we feel and how others see us. I use vibrant palettes and creative techniques to bring out your inner radiance and help you shine with confidence.'
    },
    {
      type: 'heading',
      text: 'Sustainable & Ethical Beauty'
    },
    {
      type: 'paragraph',
      text: 'I\'m committed to using cruelty-free, high-quality products that are kind to your skin and the planet. Beauty should never come at the expense of our values.'
    }
  ],
  order: 2
};

/**
 * Skills & Specialties Section Content
 * 
 * @constant
 */
export const skillsSection: AboutSection = {
  id: 'skills-section',
  title: 'Skills & Specialties',
  content: [
    {
      type: 'list',
      items: [
        '🎨 Festival & Creative Makeup',
        '✨ UV/Blacklight Reactive Artistry',
        '💅 Fusion Nail Art & Design',
        '🌈 Vibrant Colour Theory Application',
        '👁️ Precision Eye & Face Art',
        '🎭 Body Painting & Temporary Art',
        '💄 Natural & Glam Makeup Looks',
        '🎪 Event & Party Makeup Services'
      ]
    }
  ],
  order: 3
};

/**
 * Experience Highlights
 * 
 * @constant
 */
export const experienceHighlights = [
  {
    event: 'Shankra Festival',
    location: 'Switzerland',
    year: '2023',
    description: 'Mountain festival makeup artistry in breathtaking alpine settings'
  },
  {
    event: 'Jungle Festivals',
    location: 'Koh Phangan, Thailand',
    year: '2023-2024',
    description: 'Tropical UV artistry in jungle paradise settings'
  },
  {
    event: 'Reiserfieber',
    location: 'Switzerland',
    year: '2023',
    description: 'Swiss outdoor festival celebration makeup'
  },
  {
    event: 'Nation of Gondwana',
    location: 'International Festival',
    year: '2023',
    description: 'Rainbow UV festival face paint and body art'
  }
];

/**
 * Call-to-Action Content
 * 
 * @constant
 */
export const aboutCTA = {
  title: 'Ready to Create Something Beautiful?',
  description: 'Whether it\'s for a festival, special event, or photoshoot, I\'d love to bring your vision to life.',
  buttonText: 'Get In Touch',
  buttonLink: '#contact'
};
