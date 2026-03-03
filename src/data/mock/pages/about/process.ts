/**
 * @fileoverview Process sub-page data. Extracted from about-subpages.ts (T17).
 */
import type { AboutSubpageData } from './types';

export interface ProcessStep { id: string; number: number; title: string; description: string; }
export interface ProcessPageData extends AboutSubpageData { steps: ProcessStep[]; }

export var processPageData: ProcessPageData = {
  hero: {
    badge: 'Creative Process',
    title: 'How Ash creates',
    description: 'The creative process behind neon and UV makeup art \u2014 from reading the energy of a crowd to the final reveal under blacklight.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Process' },
  ],
  sections: [
    { id: 'philosophy', title: 'Art without a plan', paragraphs: [
      'Ash doesn\u2019t sketch beforehand. He doesn\u2019t look at Pinterest boards or follow trends. His creative process begins with a feeling \u2014 the energy of the music, the light conditions, and the vibe of the person sitting in front of him.',
      'This isn\u2019t chaos; it\u2019s trust. Trust in thousands of hours of practice, in the muscle memory of his ambidextrous hands, and in the belief that the best art happens when you stop trying to control it.',
    ]},
    { id: 'tools', title: 'The tools', paragraphs: [
      'UV-reactive face paints are the primary medium \u2014 specifically formulated to pop under blacklight while remaining skin-safe for hours of dancing. High-pigment neon palettes, fine-detail brushes, and sponge applicators for base gradients.',
      'Everything fits in a single bag that straps to the bicycle. Portability isn\u2019t a limitation \u2014 it\u2019s a design constraint that forces creative efficiency.',
    ]},
    { id: 'environment', title: 'The environment is the canvas', paragraphs: [
      'A festival dancefloor is not a studio. It\u2019s loud, dark, crowded, and constantly moving. Ash has adapted his technique to work in these conditions \u2014 ambidextrous painting allows him to work faster and maintain symmetry even when both he and his canvas are in motion.',
      'The UV lighting environment changes how colours appear. What looks muted in daylight becomes explosively vivid under blacklight. Understanding this transformation is central to Ash\u2019s process \u2014 he paints for the reveal, not the application.',
    ]},
  ],
  steps: [
    { id: 'step-1', number: 1, title: 'Read the energy', description: 'Before touching paint, Ash reads the person. Their energy, their outfit, their vibe. The music playing. The light. Everything informs the design that\u2019s about to emerge.' },
    { id: 'step-2', number: 2, title: 'Choose the palette', description: 'Based on skin tone, outfit colour, and the UV conditions of the venue, he selects 3\u20135 neon pigments that will create maximum impact under blacklight.' },
    { id: 'step-3', number: 3, title: 'Base layer', description: 'A sponge-applied gradient base \u2014 often blending two neon colours \u2014 establishes the foundation. This goes on fast while the energy is high.' },
    { id: 'step-4', number: 4, title: 'Detail work', description: 'Fine brushes create the patterns: geometric shapes, organic flowing lines, third-eye detailing, psychedelic fractals. This is where the ADHD hyperfocus kicks in.' },
    { id: 'step-5', number: 5, title: 'The reveal', description: 'The moment under blacklight when the full design comes alive. Colours that seemed subtle suddenly blaze with neon intensity. This is the magic moment.' },
    { id: 'step-6', number: 6, title: 'Capture & release', description: 'A quick photo or video under UV, then back to the dancefloor. The art lives on the skin until dawn, in photos forever, and in the memory of everyone who saw it glow.' },
  ],
};
