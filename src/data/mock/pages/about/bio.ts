/**
 * @fileoverview Bio sub-page data. Extracted from about-subpages.ts (T17).
 */
import type { AboutSubpageData } from './types';

export interface BioFact { id: string; label: string; value: string; }

export interface BioPageData extends AboutSubpageData { quickFacts: BioFact[]; }

export var bioPageData: BioPageData = {
  hero: {
    badge: 'Biography',
    title: 'Ash Shaw',
    description: 'Male \u00B7 He/Him \u00B7 Cape Town-based \u00B7 South African-born \u00B7 Neon & UV makeup artist \u00B7 Cyclist \u00B7 Aquarius \u00B7 ADHD creative \u00B7 Festival soul.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Bio' },
  ],
  quickFacts: [
    { id: 'name', label: 'Name', value: 'Ash Shaw' },
    { id: 'pronouns', label: 'Pronouns', value: 'He / Him' },
    { id: 'born', label: 'Born', value: 'South Africa' },
    { id: 'based', label: 'Based', value: 'Cape Town (home base) / Berlin (summers)' },
    { id: 'sign', label: 'Star sign', value: 'Aquarius' },
    { id: 'neurotype', label: 'Neurotype', value: 'ADHD' },
    { id: 'art', label: 'Art form', value: 'Neon & UV Makeup' },
    { id: 'transport', label: 'Transport', value: 'Bicycle \u2014 always' },
    { id: 'since', label: 'Painting since', value: 'July 2019' },
    { id: 'festivals', label: 'Festival circuit', value: 'Psytrance & Techno' },
  ],
  sections: [
    {
      id: 'origin',
      title: 'Where it all began',
      paragraphs: [
        'Ash Shaw grew up in South Africa with an insatiable curiosity about colour, sound, and the spaces where humans let go of pretence. He wasn\u2019t drawn to traditional art paths \u2014 he was drawn to chaos, to movement, to the feeling of a bass drop at 3am.',
        'Cape Town is his permanent home base. In 2019 he discovered Berlin \u2014 a city where the raw creative energy matched the frequency his brain had always operated on. What started as a spontaneous face-painting session at a park gathering in July 2019 turned into a full artistic identity.',
      ],
    },
    {
      id: 'identity',
      title: 'The guy with the bike',
      paragraphs: [
        'If you\u2019ve been to a psytrance festival in Europe and seen a guy cycling in covered in fairy lights and carrying a box of UV paints \u2014 that\u2019s Ash. He\u2019s cycled hundreds of kilometres to reach festivals, arriving dusty and grinning.',
        'His identity as an artist is inseparable from his identity as a cyclist, a festival-goer, and an unapologetically neurodiverse creative. He doesn\u2019t separate art from life because for him they were never separate to begin with.',
      ],
    },
    {
      id: 'now',
      title: 'What he does now',
      paragraphs: [
        'Ash creates spontaneous neon and UV makeup art at festivals and events across Berlin and the international psytrance circuit. His work is strictly a personal art project \u2014 no commercial bookings, no bridal, no corporate. Just pure creative expression on the dancefloor.',
        'He\u2019s also writing a book, building this portfolio site as a creative coding project, and continuing to explore the intersection of altered states, neurodivergence, and visual art.',
      ],
    },
  ],
};
