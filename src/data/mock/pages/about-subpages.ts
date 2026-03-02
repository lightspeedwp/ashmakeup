/**
 * @fileoverview Mock data for all About sub-pages
 *
 * Pages: Berlin, Book, Bio, Process, Lucy in the Sky, Travels, Podcast, eBook
 * Each page has hero content, body sections, and breadcrumbs.
 *
 * @module data/mock/pages/about-subpages
 * @version 1.0.0
 */

import type { BreadcrumbItem } from '../../../components/ui/Breadcrumbs';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SHARED TYPES
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface AboutSubpageSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface AboutSubpageData {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  breadcrumbs: BreadcrumbItem[];
  sections: AboutSubpageSection[];
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BERLIN
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const berlinPageData: AboutSubpageData = {
  hero: {
    badge: 'Berlin',
    title: 'Berlin \u2014 my creative anchor',
    description:
      'Every May, Ash arrives in Berlin with a bike and a box of UV paints. The city\u2019s raw underground energy, its open-air summers, and the freedom of cycling everywhere have shaped every aspect of his art. Cape Town is home \u2014 but Berlin is where the art finds its sharpest edge.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Berlin' },
  ],
  sections: [
    {
      id: 'arrival',
      title: 'Arriving in the capital of freedom',
      paragraphs: [
        'Berlin came to Ash in 2019 \u2014 not through brochures or travel blogs, but through stories whispered at afterparties and painted across the faces of returning festival friends. He didn\u2019t arrive with years of planning. He arrived with a bike and the instinct that this city was going to mean something. He was right.',
        'What he found was a city that doesn\u2019t just tolerate difference \u2014 it demands it. From Kreuzberg\u2019s graffiti-covered facades to Neuk\u00f6lln\u2019s late-night shawarma runs, Berlin gave him permission to be unapologetically himself. Cape Town would always be home, but Berlin became the city where his art found its sharpest edge.',
      ],
    },
    {
      id: 'covid-return',
      title: 'The pause and the return (2022)',
      paragraphs: [
        'COVID interrupted everything. Berlin went quiet, the season that had barely started was cancelled, and Ash returned to Cape Town \u2014 his permanent home \u2014 and sat out the years that swallowed everyone\u2019s plans.',
        'In 2022, he came back. Some venues were gone. Some people had moved on. But the energy was still there, rebuilding itself the way Berlin always does. He picked up exactly where he\u2019d left off: bike, UV paints, open-airs, and the slow warm unfurl of a Berlin summer.',
      ],
    },
    {
      id: 'underground',
      title: 'The underground scene',
      paragraphs: [
        'Berlin\u2019s club culture is legendary, and for good reason. The city\u2019s warehouses, abandoned power stations, and basement bars became Ash\u2019s studios. Under UV lights and surrounded by pounding techno, he discovered that makeup art and electronic music are two expressions of the same energy.',
        'He started painting faces at small open-airs in Hasenheide Park, then at techno nights in Friedrichshain. Word spread through the scene \u2014 the guy with the UV paints and the bike covered in fairy lights. Sisyphos became his favourite venue: the one that almost always delivers, where he\u2019s met incredible people and made memories that define his Berlin experience.',
      ],
    },
    {
      id: 'cycling',
      title: 'The bike life',
      paragraphs: [
        'Ash doesn\u2019t just cycle in Berlin \u2014 he lives on his bike. It\u2019s his primary transport, his meditation, and sometimes his stage. He keeps a dedicated Berlin bike there year-round, separate from his Cape Town bike.',
        'There\u2019s something about the flat, endless Berlin streets that frees the mind. Between G\u00f6rlitzer Park and Tempelhof, between the Spree canal and Tiergarten, ideas form with every pedal stroke.',
      ],
    },
    {
      id: 'community',
      title: 'The Berlin family',
      paragraphs: [
        'Berlin attracts misfits, dreamers, and artists from everywhere. Ash found his tribe here \u2014 DJs, visual artists, fire dancers, sound engineers, and fellow festival freaks who understand that creativity isn\u2019t a career; it\u2019s a way of being.',
        'The community he\u2019s built isn\u2019t just friends at parties. It\u2019s a support network of neurodivergent creatives who look out for each other, share studio space, and collaborate on wild ideas that would make no sense anywhere else.',
      ],
    },
    {
      id: 'seasons',
      title: 'Berlin summers',
      paragraphs: [
        'If you haven\u2019t experienced a Berlin summer, you\u2019re missing one of Europe\u2019s great secrets. From late May, the city transforms into one continuous open-air event. Parks become stages, canals become bars, and every sunset feels like it was art-directed. By September at the latest, it\u2019s time to pack up \u2014 the Berlin bike stays, and Ash flies back to Cape Town.',
        'The 2025 summer was a record-breaker: staying with dear friend Vitor, speaking at WordCamp Europe in Basel, practising creative makeup every weekend for two months straight, and dancing approximately 900km over eight weeks. He left with a heart full of joy and love, flying directly to Thailand to cycle down the coast from Hua Hin to Koh Phangan.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BOOK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface BookChapterPreview {
  id: string;
  number: number;
  title: string;
  teaser: string;
}

export interface BookPageData extends AboutSubpageData {
  book: {
    title: string;
    subtitle: string;
    status: string;
    author: string;
    coverAccent: 'pink';
    textAccent: 'yellow';
    blurb: string[];
    chapters: BookChapterPreview[];
    chaptersHeading: string;
    sampleHeading: string;
    sampleDescription: string;
    sampleCta: string;
  };
}

export const bookPageData: BookPageData = {
  hero: {
    badge: 'Coming Soon',
    title: 'This one time on acid\u2026',
    description:
      'Ash is writing a book. Part memoir, part manifesto, part fever dream \u2014 weaving his craziest life stories into the deepest lessons they taught him.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'The book' },
  ],
  sections: [
    {
      id: 'why',
      title: 'Why this book',
      paragraphs: [
        'People keep telling Ash he should write a book. "You can\u2019t make this stuff up," they say, and they\u2019re right \u2014 you can\u2019t. The stories are too absurd, too beautiful, too perfectly timed by the universe to be fiction.',
        'But this isn\u2019t a party memoir. It\u2019s about what the chaos teaches you. It\u2019s about how an Aquarian crazy soul met with an ADHD neurodiverse brain, how these combined with Lucy to forge the person he is today. It\u2019s never one thing \u2014 usually it\u2019s the culmination of many experiences over a long period that finally crystallise into understanding.',
      ],
    },
    {
      id: 'lessons',
      title: 'Stories that changed everything',
      paragraphs: [
        'Each chapter weaves a wild story \u2014 the kind friends retell at 4am around a campfire \u2014 into Ash\u2019s biggest life lessons and deepest learnings. The moments that changed him, made him who he is, and why they impacted him so profoundly.',
        'The book explores how psychedelic experiences don\u2019t just show you another reality; they rewire how you process this one. How ADHD isn\u2019t a disorder when your environment finally matches your brain\u2019s operating system. How the festival dancefloor became the classroom where everything made sense.',
      ],
    },
    {
      id: 'aquarius-adhd',
      title: 'Aquarius meets ADHD',
      paragraphs: [
        'Ash has always been wired differently. The Aquarian need to question everything, to reject the conventional, to see patterns others miss \u2014 amplified by an ADHD brain that moves at 200km/h and makes connections across disciplines, cultures, and altered states.',
        'For years, this combination felt like a curse. Too weird for the normal world, too scattered for the creative one. Then Berlin, then Lucy, then the dancefloor \u2014 and suddenly the wiring wasn\u2019t a bug, it was the feature. The book maps that transformation honestly and without apology.',
      ],
    },
    {
      id: 'timeline',
      title: 'The writing journey',
      paragraphs: [
        'This is not a book that will be rushed. Ash plans to write it over the next few years \u2014 letting the stories breathe, revisiting them from new angles, pressure-testing the lessons against the life that keeps unfolding.',
        'Some chapters are already drafted in late-night voice notes and scrawled notebook pages. Others are still being lived. The book will arrive when it\u2019s ready, not before.',
      ],
    },
  ],
  book: {
    title: 'This one time on acid\u2026',
    subtitle: 'Stories, lessons & the making of a neon soul',
    status: 'In progress \u2014 expected over the next few years',
    author: 'Ash Shaw',
    coverAccent: 'pink',
    textAccent: 'yellow',
    blurb: [
      'A raw, honest memoir weaving the wildest stories from the psytrance dancefloor into the deepest lessons they taught.',
      'How an Aquarian soul, an ADHD brain, and Lucy in the Sky combined to create an artist, a nomad, and a life lived in full colour.',
    ],
    chapters: [
      {
        id: 'ch-1',
        number: 1,
        title: 'The first drop',
        teaser: 'Every journey starts somewhere impossible. This one started on a rooftop in Cape Town.',
      },
      {
        id: 'ch-2',
        number: 2,
        title: 'Wired different',
        teaser: 'ADHD, Aquarius, and the feeling that the world was running on a different operating system.',
      },
      {
        id: 'ch-3',
        number: 3,
        title: 'Berlin calling',
        teaser: 'A one-way ticket, a bicycle, and the city that would become home.',
      },
      {
        id: 'ch-4',
        number: 4,
        title: 'The dancefloor classroom',
        teaser: 'When 140 BPM became the heartbeat of understanding.',
      },
      {
        id: 'ch-5',
        number: 5,
        title: 'Neon revelations',
        teaser: 'The night Ash picked up UV paint and discovered his voice wasn\u2019t in words.',
      },
      {
        id: 'ch-6',
        number: 6,
        title: 'The cumulative effect',
        teaser: 'It\u2019s never one moment. It\u2019s the thousand moments that suddenly click.',
      },
    ],
    chaptersHeading: 'Chapter previews',
    sampleHeading: 'Read the first pages',
    sampleDescription: 'Curious? Read draft excerpts from the first three chapters \u2014 raw, unfiltered, and straight from the voice notes.',
    sampleCta: 'Read sample chapters',
  },
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BIO
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface BioFact {
  id: string;
  label: string;
  value: string;
}

export interface BioPageData extends AboutSubpageData {
  quickFacts: BioFact[];
}

export const bioPageData: BioPageData = {
  hero: {
    badge: 'Biography',
    title: 'Ash Shaw',
    description:
      'Male \u00B7 He/Him \u00B7 Cape Town-based \u00B7 South African-born \u00B7 Neon & UV makeup artist \u00B7 Cyclist \u00B7 Aquarius \u00B7 ADHD creative \u00B7 Festival soul.',
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PROCESS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface ProcessStep {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface ProcessPageData extends AboutSubpageData {
  steps: ProcessStep[];
}

export const processPageData: ProcessPageData = {
  hero: {
    badge: 'Creative Process',
    title: 'How Ash creates',
    description:
      'The creative process behind neon and UV makeup art \u2014 from reading the energy of a crowd to the final reveal under blacklight.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Process' },
  ],
  sections: [
    {
      id: 'philosophy',
      title: 'Art without a plan',
      paragraphs: [
        'Ash doesn\u2019t sketch beforehand. He doesn\u2019t look at Pinterest boards or follow trends. His creative process begins with a feeling \u2014 the energy of the music, the light conditions, and the vibe of the person sitting in front of him.',
        'This isn\u2019t chaos; it\u2019s trust. Trust in thousands of hours of practice, in the muscle memory of his ambidextrous hands, and in the belief that the best art happens when you stop trying to control it.',
      ],
    },
    {
      id: 'tools',
      title: 'The tools',
      paragraphs: [
        'UV-reactive face paints are the primary medium \u2014 specifically formulated to pop under blacklight while remaining skin-safe for hours of dancing. High-pigment neon palettes, fine-detail brushes, and sponge applicators for base gradients.',
        'Everything fits in a single bag that straps to the bicycle. Portability isn\u2019t a limitation \u2014 it\u2019s a design constraint that forces creative efficiency.',
      ],
    },
    {
      id: 'environment',
      title: 'The environment is the canvas',
      paragraphs: [
        'A festival dancefloor is not a studio. It\u2019s loud, dark, crowded, and constantly moving. Ash has adapted his technique to work in these conditions \u2014 ambidextrous painting allows him to work faster and maintain symmetry even when both he and his canvas are in motion.',
        'The UV lighting environment changes how colours appear. What looks muted in daylight becomes explosively vivid under blacklight. Understanding this transformation is central to Ash\u2019s process \u2014 he paints for the reveal, not the application.',
      ],
    },
  ],
  steps: [
    {
      id: 'step-1',
      number: 1,
      title: 'Read the energy',
      description:
        'Before touching paint, Ash reads the person. Their energy, their outfit, their vibe. The music playing. The light. Everything informs the design that\u2019s about to emerge.',
    },
    {
      id: 'step-2',
      number: 2,
      title: 'Choose the palette',
      description:
        'Based on skin tone, outfit colour, and the UV conditions of the venue, he selects 3\u20135 neon pigments that will create maximum impact under blacklight.',
    },
    {
      id: 'step-3',
      number: 3,
      title: 'Base layer',
      description:
        'A sponge-applied gradient base \u2014 often blending two neon colours \u2014 establishes the foundation. This goes on fast while the energy is high.',
    },
    {
      id: 'step-4',
      number: 4,
      title: 'Detail work',
      description:
        'Fine brushes create the patterns: geometric shapes, organic flowing lines, third-eye detailing, psychedelic fractals. This is where the ADHD hyperfocus kicks in.',
    },
    {
      id: 'step-5',
      number: 5,
      title: 'The reveal',
      description:
        'The moment under blacklight when the full design comes alive. Colours that seemed subtle suddenly blaze with neon intensity. This is the magic moment.',
    },
    {
      id: 'step-6',
      number: 6,
      title: 'Capture & release',
      description:
        'A quick photo or video under UV, then back to the dancefloor. The art lives on the skin until dawn, in photos forever, and in the memory of everyone who saw it glow.',
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LUCY IN THE SKY WITH DIAMONDS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const lucyPageData: AboutSubpageData = {
  hero: {
    badge: 'Lucy in the Sky',
    title: 'Lucy in the sky with diamonds',
    description:
      'How expanded states of awareness shaped Ash\u2019s art, unlocked a deeper perception of colour, and taught him lessons no classroom ever could.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Lucy in the Sky' },
  ],
  sections: [
    {
      id: 'perception',
      title: 'Seeing in neon',
      paragraphs: [
        'There\u2019s a before and after in Ash\u2019s relationship with colour. Before, colours were things he saw. After, they were things he felt. Certain transformative experiences permanently upgraded the resolution at which he perceives the visual world.',
        'The way neon paint bleeds under UV light, the way colours breathe and pulse on a dancefloor \u2014 these are things Ash noticed because his awareness had been opened to what was always there. Once you see the hidden frequency, you can\u2019t unsee it.',
      ],
    },
    {
      id: 'creativity',
      title: 'The creative unlock',
      paragraphs: [
        'ADHD brains are already making unusual connections \u2014 jumping between ideas, seeing patterns across unrelated domains. Moments of expanded consciousness amplified this natural wiring rather than fighting it.',
        'Ash found that his best design ideas \u2014 the ones that make people stop on the dancefloor and stare \u2014 come from that same lateral thinking space. Not copied from references, but emerged from the intersection of music, movement, and a mind that refuses to think in straight lines.',
      ],
    },
    {
      id: 'lessons',
      title: 'The lessons that stuck',
      paragraphs: [
        'It\u2019s never one experience that changes everything. It\u2019s the slow accumulation \u2014 a hundred moments of heightened awareness that gradually rebuild your understanding of yourself and the world.',
        'These experiences taught Ash that ego is optional, that connection is everything, that the dancefloor is sacred, and that the most beautiful art happens when you stop trying to be impressive and start trying to be honest.',
      ],
    },
    {
      id: 'integration',
      title: 'Integration, not escape',
      paragraphs: [
        'Ash is thoughtful about the difference between expansion and escapism. Every powerful experience is followed by integration \u2014 journaling, cycling, creating, talking with trusted friends.',
        'The goal was never to check out of reality. It was to check in more deeply. To bring back something useful \u2014 a new way of seeing colour, a dissolved creative block, a reminder that the universe is far stranger and more beautiful than the default settings suggest.',
      ],
    },
    {
      id: 'art-connection',
      title: 'From perception to the dancefloor',
      paragraphs: [
        'The connection between expanded awareness and UV art is direct. When Ash paints someone\u2019s face, he\u2019s not decorating \u2014 he\u2019s translating. Translating the visual language of heightened perception into pigment that anyone can see, especially under blacklight.',
        'Every neon stroke carries a piece of those experiences. Every glowing face on the dancefloor is a small portal into that wider, more vivid way of seeing. That\u2019s the real art \u2014 not the paint, but the perception it represents.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TRAVELS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface TravelDestination {
  id: string;
  name: string;
  region: string;
  description: string;
}

export interface TravelsPageData extends AboutSubpageData {
  destinations: TravelDestination[];
}

export const travelsPageData: TravelsPageData = {
  hero: {
    badge: 'Travels',
    title: 'Chasing summers & sound',
    description:
      'Ash\u2019s life follows the festivals. From Cape Town to Berlin, from Thai jungles to Portuguese hills \u2014 wherever psytrance plays, he paints.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Travels' },
  ],
  sections: [
    {
      id: 'nomad',
      title: 'The nomad circuit',
      paragraphs: [
        'Ash\u2019s year isn\u2019t divided into months \u2014 it\u2019s divided into festival seasons. Cape Town summers (November\u2013March), European summer (May\u2013September), and the shoulder seasons that connect them by bicycle, train, and shared rides.',
        'This isn\u2019t glamorous digital nomadism. It\u2019s dusty festival campsites, sleeping on friends\u2019 couches, and learning that everything you need fits on a bicycle. The less you carry, the further you go.',
      ],
    },
    {
      id: 'cycling-travel',
      title: 'Travelling by bicycle',
      paragraphs: [
        'When Ash cycles to a festival, the journey becomes part of the art. Hundreds of kilometres of road dissolve the noise of everyday life. By the time he arrives, he\u2019s present, clear, and creatively charged.',
        'He\u2019s cycled through Germany, Czech Republic, Austria, and beyond \u2014 arriving at festival gates with panniers full of UV paint and a heart full of road-earned stories.',
      ],
    },
    {
      id: 'cultures',
      title: 'Painting across cultures',
      paragraphs: [
        'Every region brings different faces, different skin tones, different relationships to body art. Thai festival-goers embrace full-body UV coverage. Berlin clubbers want sharp geometric precision. South African crowds love bold, expressive colour blocks.',
        'Ash has learned to read and adapt \u2014 not changing his style, but letting it be informed by the culture and energy of each place. The art is universal; the expression is local.',
      ],
    },
  ],
  destinations: [
    {
      id: 'berlin',
      name: 'Berlin',
      region: 'Germany',
      description: 'Home base. The techno underground, open-air summers, and cycling freedom.',
    },
    {
      id: 'cape-town',
      name: 'Cape Town',
      region: 'South Africa',
      description: 'Where it all began. Origin Festival, outdoor trance, and the mother city.',
    },
    {
      id: 'thailand',
      name: 'Thailand',
      region: 'Southeast Asia',
      description: 'Island psytrance, jungle festivals, and full-body UV under tropical stars.',
    },
    {
      id: 'portugal',
      name: 'Portugal',
      region: 'Southern Europe',
      description: 'Boom Festival, rolling hills, and the European psytrance heartland.',
    },
    {
      id: 'czech-republic',
      name: 'Czech Republic',
      region: 'Central Europe',
      description: 'Forest festivals and the cycling route through Bohemia.',
    },
    {
      id: 'austria',
      name: 'Austria',
      region: 'Central Europe',
      description: 'Alpine raves, mountain passes by bike, and an unexpected creative community.',
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PODCAST
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface PodcastEpisodePreview {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface PodcastPageData extends AboutSubpageData {
  showName: string;
  tagline: string;
  format: string[];
  episodes: PodcastEpisodePreview[];
}

export const podcastPageData: PodcastPageData = {
  hero: {
    badge: 'Podcast',
    title: 'Neon vs Atomic Black',
    description:
      'Ash\u2019s podcast exploring the intersection of psytrance art, UV makeup culture, festival life, ADHD creativity, and conversations with the creative community.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Podcast' },
  ],
  showName: 'Neon vs Atomic Black',
  tagline: 'Stories, sounds & neon souls from the dancefloor to the studio',
  format: [
    'Long-form conversations with fellow festival artists, DJs, and creative misfits.',
    'Solo episodes where Ash unpacks a single topic \u2014 from ADHD hyperfocus to the physics of UV pigment.',
    'Field recordings and ambient soundscapes from psytrance dancefloors around the world.',
  ],
  sections: [
    {
      id: 'why-podcast',
      title: 'Why a podcast',
      paragraphs: [
        'Ash has always been a storyteller. On the dancefloor, through UV paint, in voice notes sent at 4am to friends across time zones. A podcast is the natural extension of that impulse \u2014 a space to share the stories that don\u2019t fit in a photo or a 60-second reel.',
        'The podcast is about depth. It\u2019s about sitting with a topic or a person for an hour and finding the truth underneath the surface. It\u2019s the antidote to the scroll.',
      ],
    },
    {
      id: 'what-to-expect',
      title: 'What to expect',
      paragraphs: [
        'Each episode explores one thread of the neon tapestry \u2014 a festival memory, a creative technique, a life lesson earned the hard way, or a conversation with someone whose work Ash admires.',
        'Expect honesty. Expect tangents (hello, ADHD). Expect the occasional soundscape from a Zambian bush party or a Berlin dancefloor at dawn. Expect the kind of conversation you\u2019d have around a campfire, not in a studio.',
      ],
    },
    {
      id: 'audience',
      title: 'Who it\u2019s for',
      paragraphs: [
        'Festival souls. Creative misfits. People who\u2019ve ever felt like the world was running on a different operating system. Anyone curious about the intersection of art, neurodivergence, altered states, and the human need to dance.',
        'If you\u2019ve ever painted your face before going out, worn a costume to a party for no reason, or cried on a dancefloor because the music hit different \u2014 this podcast is for you.',
      ],
    },
    {
      id: 'availability',
      title: 'Where to listen',
      paragraphs: [
        'The podcast is currently in development, with the first episodes planned for recording in Berlin. It will be available on all major platforms \u2014 Spotify, Apple Podcasts, YouTube, and wherever you find your audio.',
        'Follow Ash\u2019s social channels for launch announcements. The first season focuses on the people and places that shaped his neon journey \u2014 from Cape Town to Berlin, from the first Vortex to the latest Origin.',
      ],
    },
  ],
  episodes: [
    {
      id: 'ep-preview-1',
      number: 1,
      title: 'The dancefloor is the canvas',
      description: 'Why painting faces at festivals is not decoration \u2014 it\u2019s translation. The origin story of Neon vs Atomic Black.',
    },
    {
      id: 'ep-preview-2',
      number: 2,
      title: 'Wired different',
      description: 'ADHD, hyperfocus, and why the festival environment is the only place Ash\u2019s brain feels at home.',
    },
    {
      id: 'ep-preview-3',
      number: 3,
      title: '86 hours on a bus',
      description: 'The Zambia solar eclipse trip that changed everything. Three weeks in the bush, 3.5 minutes of totality, a lifetime of friends.',
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EBOOK
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface EbookChapterSample {
  id: string;
  number: number;
  title: string;
  excerpt: string[];
}

export interface EbookPageData extends AboutSubpageData {
  book: {
    title: string;
    subtitle: string;
    status: string;
  };
  chapters: EbookChapterSample[];
}

export const ebookPageData: EbookPageData = {
  hero: {
    badge: 'eBook Preview',
    title: 'Read the first pages',
    description:
      'Sample chapters from Ash\u2019s upcoming book. Raw, unfiltered, and straight from the voice notes.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'The book', href: '/about/book' },
    { label: 'eBook Preview' },
  ],
  book: {
    title: 'This one time on acid\u2026',
    subtitle: 'Stories, lessons & the making of a neon soul',
    status: 'Preview \u2014 work in progress',
  },
  sections: [
    {
      id: 'how-to-read',
      title: 'How to read this',
      paragraphs: [
        'These are draft excerpts. They\u2019re rough, honest, and unpolished by design. The book is being written in the same way Ash paints \u2014 fast first strokes to capture the energy, refined later to bring out the detail.',
        'Read them as snapshots of a work in progress. Some passages will make it to the final book, others will evolve beyond recognition. That\u2019s the process.',
      ],
    },
  ],
  chapters: [
    {
      id: 'ebook-ch-1',
      number: 1,
      title: 'The first drop',
      excerpt: [
        'It was December 1999 and the world was ending. Or starting. Depending on who you asked at the Vortex festival that weekend, the millennium bug would either wipe out civilisation or usher in a new golden age.',
        'I was seventeen and I didn\u2019t care about either outcome. I was on a dancefloor in the Western Cape bush, wearing a yellow suit I\u2019d found at a charity shop, and for the first time in my life, the world made perfect sense. Not the world outside \u2014 that place had never made sense. The world inside. The one that runs at 140 BPM and communicates in bass frequencies.',
        'By morning they were calling me the Chicken Man. By the following year, I\u2019d graduated to the Cow Man. But that first night \u2014 that first drop into the music, the lights, the community \u2014 was the night I understood that I\u2019d been looking for this all along.',
      ],
    },
    {
      id: 'ebook-ch-2',
      number: 2,
      title: 'Wired different',
      excerpt: [
        'Here\u2019s the thing about ADHD that nobody tells you when you\u2019re growing up in a small town in the Western Cape in the 1990s: it\u2019s not a deficit of attention. It\u2019s a surplus of it, all going in directions that school wasn\u2019t designed to handle.',
        'I could spend six hours building a perfect model of something nobody asked for, but I couldn\u2019t sit through forty minutes of mathematics. My brain didn\u2019t reject information \u2014 it rejected boredom. Feed it something interesting and it would devour it with a focus so intense it scared my teachers.',
        'It took me twenty years to understand that this wasn\u2019t broken. It was a feature, not a bug. I just needed to find the right operating system.',
      ],
    },
    {
      id: 'ebook-ch-3',
      number: 3,
      title: '86 hours on a bus',
      excerpt: [
        'The bus from Cape Town to Zambia took eighty-six hours. Eighty-six hours of dirt roads, border crossings, and the kind of conversations that only happen when you\u2019ve been awake too long with people you\u2019ve only just met.',
        'We crossed from South Africa into Botswana. From Botswana into Zimbabwe at Livingstone. From Zimbabwe into Zambia at the Chobe River. Each border felt like passing through a portal into somewhere more real, more raw, more alive.',
        'We were heading to a point on the solar eclipse line where totality was the longest \u2014 three and a half minutes of absolute darkness in the middle of the African bush, surrounded by a thousand strangers who felt like family. I was twenty years old, and I had no idea that those three and a half minutes would rearrange my understanding of what matters.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   ADHD — Wired Different
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface AdhdFact {
  id: string;
  label: string;
  value: string;
}

export interface AdhdPageData extends AboutSubpageData {
  quickFacts: AdhdFact[];
  pullQuote: string;
}

export const adhdPageData: AdhdPageData = {
  hero: {
    badge: 'ADHD',
    title: 'Wired different',
    description:
      'ADHD isn\u2019t a deficit of attention. It\u2019s a surplus of it, all going in directions the world wasn\u2019t designed to handle. This is Ash\u2019s experience \u2014 honest, personal, and completely unapologetic.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'ADHD' },
  ],
  pullQuote:
    'It took me twenty years to understand that this wasn\u2019t broken. It was a feature, not a bug. I just needed to find the right operating system.',
  quickFacts: [
    { id: 'neurotype', label: 'Neurotype', value: 'ADHD' },
    { id: 'diagnosed', label: 'Awareness', value: 'Late discovery' },
    { id: 'superpower', label: 'Superpower', value: 'Hyperfocus' },
    { id: 'kryptonite', label: 'Kryptonite', value: 'Boredom' },
    { id: 'operating-system', label: 'Operating system', value: 'Festival dancefloor' },
    { id: 'creative-output', label: 'Creative output', value: 'UV face painting' },
    { id: 'movement', label: 'Movement Rx', value: 'Cycling \u2014 daily' },
    { id: 'integration', label: 'Integration', value: 'Journaling, cycling, creating' },
    { id: 'management', label: 'Work style', value: 'Systems + freedom' },
    { id: 'sign', label: 'Amplifier', value: 'Aquarius' },
  ],
  sections: [
    {
      id: 'growing-up',
      title: 'Growing up undiagnosed',
      paragraphs: [
        'Ash grew up in Paarl, a small town in the Western Cape of South Africa, in the 1990s. ADHD wasn\u2019t something people talked about \u2014 it was just being "difficult," being "unfocused," being the kid who couldn\u2019t sit still and couldn\u2019t explain why.',
        'School was a battlefield of boredom. He could spend six hours building a perfect model of something nobody asked for, but he couldn\u2019t sit through forty minutes of mathematics. His brain didn\u2019t reject information \u2014 it rejected boredom. Feed it something interesting and it would devour it with a focus so intense it scared his teachers.',
        'While the classroom was a struggle, the sports field was where Ash thrived. Racing bicycles since 1994, representing Western Province in cross-country mountain biking by 1995, winning provincial colours by 1997. His brain didn\u2019t need discipline \u2014 it needed the right challenge.',
      ],
    },
    {
      id: 'surplus',
      title: 'The surplus of attention',
      paragraphs: [
        'The biggest lie about ADHD is in the name. It\u2019s not a deficit of attention \u2014 it\u2019s a surplus of it, all going in directions that conventional environments weren\u2019t designed to handle. Too much input, too many connections, too fast for a system built on sitting quietly and following instructions.',
        'For years, this combination felt like a curse. Too weird for the normal world, too scattered for the creative one. The Aquarian need to question everything, to reject the conventional, to see patterns others miss \u2014 amplified by an ADHD brain that moves at 200km/h and makes connections across disciplines, cultures, and altered states.',
        'Then the festivals happened. December 1999, Vortex, the Western Cape bush \u2014 and for the first time, the world\u2019s operating system matched his brain\u2019s. The sensory richness, the freedom from convention, the community of fellow misfits. The dancefloor didn\u2019t need him to sit still. It needed exactly what ADHD provides: energy, spontaneity, and the ability to process a hundred inputs simultaneously.',
      ],
    },
    {
      id: 'hyperfocus',
      title: 'The hyperfocus superpower',
      paragraphs: [
        'When the environment matches the brain, ADHD\u2019s hyperfocus becomes a superpower. Once Ash starts painting a face, the world narrows to just the pigment, the skin, the music, and the design emerging. Hours feel like minutes. Complexity becomes clarity. This is ADHD at its best: total immersion in a task that genuinely matters.',
        'The ambidextrous painting technique is pure ADHD adaptation. Painting with both hands simultaneously in a crowded, noisy, dark festival environment is exactly the kind of multi-input processing that ADHD brains thrive on. It\u2019s not a party trick \u2014 it\u2019s a brain that evolved to work in chaos.',
        'The same hyperfocus shows up in business. LightSpeed\u2019s meticulously detailed workflows, the internship curriculum Ash spent six weeks building, the GitHub contributing guidelines, the daily planning templates \u2014 all built during hyperfocus sessions. ADHD brains need structure to function, so they build the best structures.',
      ],
    },
    {
      id: 'operating-system',
      title: 'Finding the right operating system',
      paragraphs: [
        'It took twenty years to understand the wiring wasn\u2019t broken. It was a feature, not a bug. The problem was never the brain \u2014 it was the environment. Put an ADHD brain in a school and it fails. Put it on a dancefloor, on a bicycle, in a festival campsite with UV paints and 140 BPM \u2014 and it becomes exactly what\u2019s needed.',
        'The artist\u2019s lifestyle isn\u2019t a romantic choice \u2014 it\u2019s a neurological necessity. Ash shapes his year around what feeds his brain: cycling for daily regulation, festivals for creative immersion, business systems for productive structure, dance for sensory processing. Every part of the life is designed to work WITH the ADHD wiring, not against it.',
        'This is why freedom matters so much. At LightSpeed, the team gets genuine creative autonomy \u2014 not because Ash is a cool boss, but because an ADHD founder literally cannot micromanage. He builds systems that run without constant oversight, hires people who thrive with freedom, and trusts the process. ADHD management style, accidentally revolutionary.',
      ],
    },
    {
      id: 'movement-medicine',
      title: 'Movement as medicine',
      paragraphs: [
        'For ADHD brains, movement isn\u2019t optional \u2014 it\u2019s medication. Cycling daily in Berlin isn\u2019t fitness; it\u2019s brain chemistry. The 300km loaded-bike pilgrimage to Origin Festival isn\u2019t adventure; it\u2019s the ultimate dopamine regulation strategy. Running, triathlon, Muay Thai, yoga \u2014 every form of movement Ash has adopted serves the same neurological purpose.',
        'The festival dancefloor is hours of movement-as-medicine. Dancing to psytrance isn\u2019t recreation \u2014 it\u2019s the most effective ADHD intervention Ash has ever found. Rhythm, repetition, physical exhaustion, social connection, sensory richness \u2014 everything an ADHD brain craves, delivered through bass frequencies.',
        'Integration is the key word. Not just after festivals, but daily. The cycling to and from painting sessions, the journaling after intense creative work, the conversations with trusted friends \u2014 all of it is integration. Processing the ADHD brain\u2019s massive input stream into something coherent and useful.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CYCLING — Two Wheels & UV Paint
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface NotableRide {
  id: string;
  name: string;
  year: string;
  distance: string;
  description: string;
}

export interface KitItem {
  id: string;
  number: number;
  title: string;
  description: string;
}

export interface CyclingPageData extends AboutSubpageData {
  notableRides: NotableRide[];
  kitList: KitItem[];
  stats: { id: string; label: string; value: string }[];
}

export const cyclingPageData: CyclingPageData = {
  hero: {
    badge: 'Cycling',
    title: 'Two wheels & UV paint',
    description:
      'Cycling isn\u2019t sport for Ash \u2014 it\u2019s identity. From Western Province mountain bike champion to festival pilgrim, the bicycle is transport, meditation, creative process, and ADHD medication rolled into two wheels.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Cycling' },
  ],
  stats: [
    { id: 'since', label: 'Racing since', value: '1994' },
    { id: 'colours', label: 'WP MTB colours', value: '1997\u20131999' },
    { id: 'best', label: 'Best season', value: '1998 \u2014 1st' },
    { id: 'packing', label: 'Bike packing since', value: '2012' },
    { id: 'origin-rides', label: 'Origin pilgrimages', value: '4 times' },
    { id: 'max-distance', label: 'Longest trip', value: '~300 km' },
    { id: 'max-weight', label: 'Max pack weight', value: '40 kg' },
    { id: 'max-climb', label: 'Max elevation', value: '3,200 m' },
    { id: 'max-speed', label: 'Top speed', value: '75+ km/h' },
    { id: 'daily', label: 'Berlin daily', value: 'Always' },
  ],
  sections: [
    {
      id: 'berlin-bike',
      title: 'Berlin by bike',
      paragraphs: [
        'Ash doesn\u2019t just cycle in Berlin \u2014 he lives on his bike. It\u2019s his primary transport, his meditation, and sometimes his stage. There\u2019s something about the flat, endless Berlin streets that frees the mind. Between G\u00f6rlitzer Park and Tempelhof, between the Spree canal and Tiergarten, ideas form with every pedal stroke.',
        'The guy cycling around covered in fairy lights became a recognisable figure at Berlin open-airs before the UV art even started. The bike was always part of the identity \u2014 the art just gave it a purpose beyond transport.',
        'For an ADHD brain, daily cycling is non-negotiable medicine. The rhythm of pedalling, the sensory input of the city, the physical exertion that burns off excess energy \u2014 it\u2019s the most effective daily regulation Ash has found. Berlin summer means painting faces at open-airs until 3am, then cycling home through warm streets that smell of linden trees.',
      ],
    },
    {
      id: 'festival-pilgrimage',
      title: 'The festival pilgrimage',
      paragraphs: [
        'When Ash cycles to a festival, the journey becomes part of the art. Hundreds of kilometres of road dissolve the noise of everyday life. By the time he arrives, he\u2019s present, clear, and creatively charged. It\u2019s a pilgrimage in the literal sense \u2014 a journey that prepares the traveller for what\u2019s ahead.',
        'The Origin Festival pilgrimage is the centrepiece. Every year around his birthday, Ash loads a touring bike with 40kg of UV paints, brushes, mirror stand, and camping gear, and cycles from Woodstock, Cape Town, through Sir Lowry\u2019s Pass and Houwhoek Pass to Elandskloof Guest Farm in Helderstroom. The ride is as important as the festival.',
        'He\u2019s also cycled to festivals across Germany, Czech Republic, and Austria \u2014 arriving at festival gates with panniers full of UV paint and a heart full of road-earned stories. In Thailand, he\u2019s logged over 7,000\u202Fkm touring by bicycle, including the Bangkok\u2013Chiang Rai\u2013Chiang Mai festival route. People at festivals don\u2019t believe he\u2019s going to ride home \u2014 until they see him pedalling out on the Monday morning. The less you carry, the further you go. But the UV paints always make the cut.',
      ],
    },
    {
      id: 'racing-roots',
      title: 'Racing roots',
      paragraphs: [
        'This isn\u2019t a hipster cycling habit. It\u2019s a lifelong relationship with two wheels that started at age thirteen. By 1995, Ash was racing provincial mountain bike events. By 1997, he had Western Province cross-country mountain bike colours \u2014 finishing 3rd overall. In 1998, he was 1st overall: Western Province champion.',
        'At Daemelin College in 1999, he studied marketing while training for the Western Province and South African mountain bike championships. The same year he discovered psytrance at Vortex. Two parallel universes \u2014 competitive sport and festival culture \u2014 that would eventually merge into the cycling-to-festivals identity.',
        'The competitive racing faded, but the engine it built never did. The endurance, the comfort with suffering, the ability to push through when the body says stop \u2014 all of it transferred directly into loaded touring bikes, 300km pilgrimages, and multi-day festival endurance.',
      ],
    },
    {
      id: 'what-road-teaches',
      title: 'What the road teaches you',
      paragraphs: [
        'A bicycle strips everything to essentials. You carry only what matters. You move at a speed that lets the landscape actually register. You arrive exhausted, present, and unable to pretend to be anything other than what you are. There\u2019s no hiding on a bike at kilometre 200.',
        'The loaded touring bike is a metaphor for Ash\u2019s entire philosophy: portability isn\u2019t a limitation \u2014 it\u2019s a design constraint that forces creative efficiency. Everything an artist needs, on two wheels. The same principle drives the UV art (minimal tools, maximum impact) and the business (lean team, maximum output).',
        'Every ride has a meditative quality. The repetitive motion, the breath, the gradual unspooling of thoughts. By the time Ash arrives at a festival after 150\u202Fkm of riding, he\u2019s processed everything the conscious mind was holding. The creative work that follows is cleaner, more instinctive, more honest. The road is the warm-up for the art.',
        'Hard-won wisdom from the road: in Thailand\u2019s humidity, keep daily distances between 80 and 120\u202Fkm. Not even chamois cream protects from saddle sores if you push past 150\u202Fkm a day \u2014 the Hua Hin to Phuket ride (900\u202Fkm in six days) left lasting scars. And always have a packing checklist. Even with a checklist, he leaves stuff behind \u2014 so every festival, the checklist gets adapted, duplicated, and customised again.',
      ],
    },
  ],
  notableRides: [
    {
      id: 'origin-2026',
      name: 'Origin 2026 \u2014 The 300km Birthday Ride',
      year: '2026',
      distance: '~300 km round trip',
      description:
        'Day 1: 80km via Sir Lowry\u2019s Pass. Day 2 (birthday): 75km to Helderstroom. Arrived 11:30 AM, skipped the queue. 40kg pack, 3,200m climbing, top speed 75km/h. Return via Elgin farm, then Cape Town.',
    },
    {
      id: 'origin-2023',
      name: 'Origin 2023 \u2014 Birthday Sash Ride',
      year: '2023',
      distance: '~150 km one way',
      description:
        'Left Origin on his birthday, a fellow festival-goer gifted him a happy birthday sash. Cycled the whole way to Peregrine Farmstall in Grabouw wearing it. The most "Ash" thing imaginable.',
    },
    {
      id: 'origin-2020',
      name: 'Origin 2020 \u2014 The First Pilgrimage',
      year: '2020',
      distance: '~150 km one way',
      description:
        'The very first cycling pilgrimage to Origin Festival. Completed just weeks before COVID lockdowns. The ride that planted the seed for every ride that followed.',
    },
    {
      id: 'thailand-touring',
      name: 'Thailand \u2014 7,000+ km Touring',
      year: 'Ongoing',
      distance: '7,000+ km total',
      description:
        'North to south and through untold adventures. Bangkok to Chiang Rai for a festival, then on to Chiang Mai. Hua Hin to Phuket: 900\u202Fkm in six days. Over 7,000\u202Fkm total touring in Thailand on a gravel bike with Arkel panniers and Tubus racks.',
    },
    {
      id: 'european-tours',
      name: 'European festival rides',
      year: 'Ongoing',
      distance: 'Various',
      description:
        'Cycling through Germany, Czech Republic, Austria to reach festivals. Arriving at gates with panniers full of UV paint, dusty and grinning. The Bohemian forest routes are a particular favourite.',
    },
    {
      id: 'berlin-daily',
      name: 'Berlin daily circuit',
      year: 'Since 2016',
      distance: '10\u201340 km daily',
      description:
        'G\u00f6rlitzer Park to Tempelhof, Spree canal to Tiergarten. Daily meditation on two wheels. The flat Berlin streets that free the mind and form ideas with every pedal stroke.',
    },
  ],
  kitList: [
    {
      id: 'kit-1',
      number: 1,
      title: 'UV paints & pigments',
      description: 'High-pigment UV-reactive face paints formulated for blacklight environments. The non-negotiable core \u2014 everything else on the bike exists to support these.',
    },
    {
      id: 'kit-2',
      number: 2,
      title: 'Brush kit',
      description: 'Fine-detail brushes for geometric patterns and third-eye work, plus sponge applicators for base gradient layers. Compact roll-up pouch.',
    },
    {
      id: 'kit-3',
      number: 3,
      title: 'Mirror stand',
      description: 'Foldable mirror stand so subjects can see the reveal. Also doubles as the "studio" setup at the festival campsite.',
    },
    {
      id: 'kit-4',
      number: 4,
      title: 'Camping gear',
      description: 'Tent, sleeping bag, mat, cook kit. Festival-grade minimal setup. Light enough to cycle with, robust enough for multi-day outdoor living.',
    },
    {
      id: 'kit-5',
      number: 5,
      title: 'Arkel panniers & Tubus racks',
      description: 'Arkel pannier bags on Tubus racks, mounted front and rear on the gravel bike. Plus a bike bag on the top tube next to the handlebars and a phone mount. Total bike weight with everything: 40\u202Fkg. Heavy, but balanced. The bike handles like a loaded ship \u2014 slow to turn, unstoppable once moving.',
    },
    {
      id: 'kit-6',
      number: 6,
      title: 'Fairy lights',
      description: 'Because the bike covered in fairy lights is part of the identity. Solar-charged, waterproof, visible from 200 metres. The calling card before the UV paints even come out.',
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   AQUARIUS — The Aquarian Blueprint
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface AquariusTrait {
  id: string;
  label: string;
  value: string;
}

export interface AquariusThread {
  id: string;
  title: string;
  description: string;
}

export interface AquariusPageData extends AboutSubpageData {
  pullQuote: string;
  traits: AquariusTrait[];
  threads: AquariusThread[];
}

export const aquariusPageData: AquariusPageData = {
  hero: {
    badge: 'Aquarius',
    title: 'The Aquarian blueprint',
    description:
      'Not horoscope-page mysticism \u2014 pattern recognition about identity. How the Aquarian need to question everything, reject convention, and see connections others miss became the operating system for an entire life.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Aquarius' },
  ],
  pullQuote:
    'For years, this combination felt like a curse. Too weird for the normal world, too scattered for the creative one. Then Berlin, then Lucy, then the dancefloor \u2014 and suddenly the wiring wasn\u2019t a bug, it was the feature.',
  traits: [
    { id: 'sign', label: 'Sun sign', value: 'Aquarius' },
    { id: 'element', label: 'Element', value: 'Air' },
    { id: 'mode', label: 'Mode', value: 'Fixed' },
    { id: 'amplifier', label: 'Amplifier', value: 'ADHD' },
    { id: 'catalyst', label: 'Catalyst', value: 'Lucy in the Sky' },
    { id: 'city', label: 'Chosen city', value: 'Berlin' },
    { id: 'tribe', label: 'Tribe', value: 'Misfits & Questioners' },
    { id: 'output', label: 'Creative output', value: 'Neon UV Art' },
    { id: 'transport', label: 'Movement', value: 'Two wheels \u2014 always' },
    { id: 'book-thread', label: 'Book thread', value: 'Core identity axis' },
  ],
  threads: [
    {
      id: 'thread-adhd',
      title: 'Aquarius \u00D7 ADHD',
      description:
        'The Aquarian need to question everything meets an ADHD brain that moves at 200\u202Fkm/h and makes connections across disciplines, cultures, and altered states. Separately, each one is challenging. Together, they\u2019re an engine that runs on novelty, pattern-recognition, and the absolute refusal to accept boredom.',
    },
    {
      id: 'thread-lucy',
      title: 'Aquarius \u00D7 Lucy',
      description:
        'Expanded states of awareness didn\u2019t create the Aquarian curiosity \u2014 they amplified it. What was already a mind that questioned everything became a mind that could feel the answers, not just think them. Colour stopped being seen and started being felt.',
    },
    {
      id: 'thread-dancefloor',
      title: 'Aquarius \u00D7 the dancefloor',
      description:
        'The psytrance dancefloor is the one place where Aquarian otherness isn\u2019t otherness at all. It\u2019s normal. The misfits are the majority, convention is irrelevant, and the music runs at the same frequency as the brain. Sacred space, not metaphorically \u2014 literally.',
    },
    {
      id: 'thread-art',
      title: 'Aquarius \u00D7 neon art',
      description:
        'UV art is the Aquarian instinct made visible: take what nobody else is doing, do it ambidextrously on a moving dancefloor, and turn strangers into glowing avatars. No references, no planning, no convention. Pure spontaneous creation.',
    },
  ],
  sections: [
    {
      id: 'the-questioner',
      title: 'The questioner',
      paragraphs: [
        'Ash has always questioned everything. Not to be difficult \u2014 though plenty of teachers and authority figures experienced it that way \u2014 but because the standard explanations never felt complete. Why does school work this way? Why do we sit in rows? Why can\u2019t creativity be the point, rather than something you fit around the edges?',
        'This isn\u2019t stubbornness. It\u2019s an operating system. The Aquarian blueprint runs on a simple loop: observe, question, reject what doesn\u2019t make sense, build something better. It\u2019s the same loop whether the subject is school curricula, WordPress block themes, or how to paint a face on a moving dancefloor.',
        'Growing up in Paarl in the 1990s, this made him the weird kid. In Berlin\u2019s underground creative scene, it makes him exactly normal.',
      ],
    },
    {
      id: 'conventions-never-stuck',
      title: 'Why conventions never stuck',
      paragraphs: [
        'The conventional path says: pick a career, build stability, fit hobbies around the edges. Ash\u2019s path says: identify what makes you come alive, then engineer your entire existence around those things.',
        'This isn\u2019t irresponsibility \u2014 it\u2019s radical prioritisation. LightSpeed has run profitably for 22+ years with a remote-first team. The business works BECAUSE of the lifestyle, not despite it. A founder who cycles 300\u202Fkm to a psytrance festival with a 40\u202Fkg bike pack is not someone who lacks discipline \u2014 he channels it differently.',
        'Conventional career paths, conventional cities, conventional relationships, conventional art forms \u2014 none of them stuck because none of them matched the wiring. The wiring needed Berlin, needed the dancefloor, needed UV paint, needed the bicycle. The wiring needed freedom.',
      ],
    },
    {
      id: 'seeing-patterns',
      title: 'Seeing patterns others miss',
      paragraphs: [
        'Aquarian minds make connections that aren\u2019t obvious. The link between bass frequencies and brush strokes. The way a GitHub workflow mirrors a festival production schedule. How cycling meditation generates the same creative clarity as a sunrise set at a forest party.',
        'Amplified by ADHD, this pattern-recognition runs constantly. It\u2019s why the art doesn\u2019t come from Pinterest boards or reference images \u2014 it emerges from the intersection of music, movement, and a mind that refuses to think in straight lines.',
        'Amplified by expanded awareness, the patterns extend beyond the intellectual. Colour became something felt, not just seen. The way neon paint bleeds under UV light, the way colours breathe and pulse on a dancefloor \u2014 these are things noticed because perception had been permanently upgraded.',
      ],
    },
    {
      id: 'amplification-effect',
      title: 'The amplification effect',
      paragraphs: [
        'Aquarius alone is the questioner. Add ADHD and you get a questioner who moves at 200\u202Fkm/h and can\u2019t stop making connections. Add expanded awareness and you get someone who not only sees patterns across disciplines but feels them in colour.',
        'These three threads \u2014 Aquarius, ADHD, and Lucy \u2014 are inseparable. They form the core of the book, the core of the art, and the core of the identity. Each one alone would have produced a different person. Together, they produced an artist, a nomad, and a life lived in full colour.',
        'The book maps that transformation honestly and without apology. It\u2019s the story of how the wiring that felt like a curse turned out to be the feature. How the dancefloor became the classroom. How the bicycle became the meditation. How the neon paint became the voice.',
      ],
    },
    {
      id: 'tribe-of-misfits',
      title: 'The tribe of misfits',
      /* MARKER_TRIBE_SECTION */
      paragraphs: [
        'Berlin attracts misfits, dreamers, and artists from everywhere. Ash found his tribe here \u2014 DJs, visual artists, fire dancers, sound engineers, and fellow festival freaks who understand that creativity isn\u2019t a career; it\u2019s a way of being.',
        'The community he\u2019s built isn\u2019t just friends at parties. It\u2019s a support network of neurodivergent creatives who look out for each other, share studio space, and collaborate on wild ideas that would make no sense anywhere else. This is the Aquarian tribe \u2014 people whose brains run on the same frequency.',
        'The dancefloor selects for these people naturally. Show up enough times, stay present enough, be weird enough, and the tribe finds you. It\u2019s not gatekept \u2014 it\u2019s an open door for anyone who arrives with energy and sincerity.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   MUSIC — 140 BPM Heartbeat
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface MusicStat {
  id: string;
  label: string;
  value: string;
}

export interface MusicArtist {
  id: string;
  name: string;
  genre: string;
  description: string;
}

export interface MusicPageData extends AboutSubpageData {
  pullQuote: string;
  stats: MusicStat[];
  artists: MusicArtist[];
}

export const musicPageData: MusicPageData = {
  hero: {
    badge: 'Music',
    title: '140 BPM heartbeat',
    description:
      'Not just music \u2014 medicine. Psytrance didn\u2019t find Ash; it recognised him. Twenty-five years of dancefloors, bass frequencies, and the specific moment when 140 BPM became the heartbeat of understanding.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Music' },
  ],
  pullQuote:
    'The world inside. The one that runs at 140 BPM and communicates in bass frequencies. That first drop into the music, the lights, the community \u2014 was the night I understood that I\u2019d been looking for this all along.',
  stats: [
    { id: 'stat-bpm', label: 'Heartbeat BPM', value: '140' },
    { id: 'stat-years', label: 'Years dancing', value: '25+' },
    { id: 'stat-continents', label: 'Continents', value: '4' },
    { id: 'stat-festivals', label: 'Festivals attended', value: '200+' },
    { id: 'stat-first', label: 'First festival', value: '1999' },
  ],
  artists: [
    {
      id: 'artist-hallucinogen',
      name: 'Hallucinogen',
      genre: 'Goa Trance / Psytrance',
      description:
        'Simon Posford\u2019s Hallucinogen project defined the sound that first pulled Ash into altered-state music. LSD and Twisted are gateway albums for every psytrance head.',
    },
    {
      id: 'artist-shpongle',
      name: 'Shpongle',
      genre: 'Psybient / Psychedelic',
      description:
        'Posford and Raja Ram together. Are You Shpongled? is the album Ash has listened to more than any other. A journey into sound that makes the mundane mythical.',
    },
    {
      id: 'artist-infected-mushroom',
      name: 'Infected Mushroom',
      genre: 'Full-on Psytrance',
      description:
        'The Israeli duo whose tracks soundtracked the Cape Town scene of the early 2000s. Converting Vegetarians was the album playing at the first face-paint session that mattered.',
    },
    {
      id: 'artist-astrix',
      name: 'Astrix',
      genre: 'Full-on Psytrance',
      description:
        'The precision of Astrix\u2019s production \u2014 every kick, every riser, every breakdown engineered to move a body. His sunrise sets are when festivals reach their peak.',
    },
    {
      id: 'artist-electric-universe',
      name: 'Electric Universe',
      genre: 'Progressive Psytrance',
      description:
        'Berlin-based. His live sets in the Hasenheide Park open-airs bridged the gap between Cape Town\u2019s outdoor scene and Berlin\u2019s techno-influenced psytrance community.',
    },
    {
      id: 'artist-raja-ram',
      name: 'Raja Ram',
      genre: 'Goa Trance / Psytrance',
      description:
        'The godfather. Seeing Raja Ram perform live at 80+ years old, still grinning behind his flute, is a reminder that this culture is built for lifers, not tourists.',
    },
  ],
  sections: [
    {
      id: 'first-encounters',
      title: 'First encounters with psytrance',
      paragraphs: [
        'It was Easter 1999 and Ash was seventeen at Vortex festival in the Western Cape bush. The music hit differently from anything he\u2019d heard before \u2014 not songs with beginnings and endings, but a continuous pulse that seemed to sync with his nervous system. Psytrance didn\u2019t ask to be understood; it asked to be felt.',
        'By December 1999, wearing a yellow suit from a charity shop, he had his first truly transformative dancefloor experience. The world outside had never made sense. The world inside \u2014 the one running at 140 BPM \u2014 made perfect sense. By morning they were calling him the Chicken Man. By the following year, he\u2019d graduated to the Cow Man. But that first drop was the night the operating system updated.',
        'In the early 2000s, Ash attended two to four festivals a month in Cape Town. This wasn\u2019t casual attendance. This was a way of life. He went to every single Alien Safari and every single Vortex for years. The dancefloor was classroom, gallery, church, and community centre. After 25+ years immersed in psytrance, his heart now beats for house and techno too \u2014 the roots remain, but the branches have grown. The evolution is natural: the dancefloor teaches you to follow the energy, not the genre.',
      ],
    },
    {
      id: 'dancefloor-classroom',
      title: 'The dancefloor as classroom',
      paragraphs: [
        'Psytrance culture shaped Ash\u2019s identity, creative vision, and community long before he picked up a paintbrush. Twenty years of dancefloor immersion \u2014 understanding what makes someone light up under UV, how bodies move to specific frequencies, when a crowd becomes a single organism \u2014 all of this became the foundation for his UV art.',
        'Working in festival conditions \u2014 loud, dark, crowded, constantly moving \u2014 is what shaped the ambidextrous painting technique. The dancefloor selected for speed, adaptability, and reading energy in real time. The art evolved not despite the chaos, but because of it.',
        'The ADHD brain found its natural habitat here. The sensory richness, the freedom from convention, the community of fellow misfits who communicate in bass frequencies rather than small talk. When the environment matches the wiring, everything clicks.',
      ],
    },
    {
      id: 'synesthesia',
      title: 'Music + UV art: the synesthesia effect',
      paragraphs: [
        'Ash doesn\u2019t sketch designs beforehand. He reads the energy of the music and lets it guide the brush. A driving bassline produces sharp geometric patterns. A melodic breakdown opens into flowing organic shapes. The relationship between what he hears and what he paints is so direct that people watching often describe it as visible music.',
        'Under UV light, this connection intensifies. The same frequencies that make a body move make neon paint appear to breathe and pulse. It\u2019s not synesthesia in the clinical sense \u2014 it\u2019s something trained over twenty-five years of dancing and painting in the same space. The dancefloor is simultaneously studio, gallery, and concert hall.',
        'The best painting sessions happen during sunrise sets. The transition from darkness to light, from UV cannons to natural sun, creates a shift in energy that changes everything. Faces painted in neon take on a different character as dawn breaks. The art evolves with the music, with the light, with the collective energy of hundreds of people who\u2019ve danced through the night together.',
      ],
    },
    {
      id: 'sacred-bass',
      title: 'Sacred space in bass frequencies',
      paragraphs: [
        'The dancefloor became sacred space \u2014 never about escape, always about deeper engagement with reality. Integration through dancing, cycling, creating, and trusted friendships. Ego is optional; connection is everything.',
        'Festival energy moves fast. The best art happens in the moment \u2014 spontaneous connections on the dancefloor, seeking out the radiant souls amplifying the energy. If the vibe matches, magic happens. If it doesn\u2019t, move on. No ego, no business cards, no Instagram handles. Just paint, music, and presence.',
        'From Cape Town bush parties to Berlin warehouse raves to Thai island gatherings, the same truth holds: the less you carry, the further you go. This applies to luggage, to ego, and to creative baggage. Festival selection now follows clear criteria \u2014 quality over quantity, energy over hype. And always with hearing protection: Loop Experience 2 ear plugs, because longevity on the dancefloor means protecting the instrument you need most. Show up with paint, an open mind, and trust in the bass. The dancefloor will do the rest.',
      ],
    },
    {
      id: 'playlists',
      title: 'Curated playlists',
      paragraphs: [
        'Ash curates playlists that trace the journey from early Goa trance through full-on psytrance to the progressive and dark psy sounds that dominate his current rotation. Each playlist is a time capsule \u2014 the Cape Town years, the Berlin discovery era, the festival pilgrimage mixes.',
        'The \u201cSunrise Set\u201d playlist is the one he shares most: the tracks that soundtrack those 5am\u20137am golden hours when the dancefloor is at its most intimate and the music shifts from driving to transcendent. These are the moments when UV paint glows brightest and faces become art installations.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LIGHTSPEED — The Day Job
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface LightSpeedTeamMember {
  id: string;
  name: string;
  role: string;
  joined: string;
}

export interface LightSpeedStat {
  id: string;
  label: string;
  value: string;
}

export interface LightSpeedKeyPerson {
  id: string;
  name: string;
  narrative: string;
}

export interface LightSpeedMilestone {
  id: string;
  year: string;
  event: string;
}

export interface LightSpeedLesson {
  id: string;
  title: string;
  description: string;
}

export interface LightSpeedPageData extends AboutSubpageData {
  pullQuote: string;
  stats: LightSpeedStat[];
  team: LightSpeedTeamMember[];
  barcampStory: {
    id: string;
    title: string;
    paragraphs: string[];
  };
  keyPeople: LightSpeedKeyPerson[];
  companyMilestones: LightSpeedMilestone[];
  lessonsLearned: LightSpeedLesson[];
}

export const lightspeedPageData: LightSpeedPageData = {
  hero: {
    badge: 'LightSpeed',
    title: 'The day job',
    description:
      'LightSpeedDevelopment \u2014 LSD for short. A WordPress agency founded in 2003 that bridges the gap between Ash\u2019s technical professional self and his creative festival self. 23 years of web development, design systems, and open-source community.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'LightSpeed' },
  ],
  pullQuote:
    'The acronym is LSD. The business started as IT support in 2003 and evolved into one of South Africa\u2019s most respected WordPress agencies. The same obsessive attention to detail that Ash brings to UV face painting, he brings to design systems.',
  stats: [
    { id: 'founded', label: 'Founded', value: '2003' },
    { id: 'team', label: 'Team size', value: '13' },
    { id: 'years', label: 'Years active', value: '23' },
    { id: 'stack', label: 'Core stack', value: 'WordPress' },
    { id: 'wordcamps', label: 'WordCamps', value: '20+' },
    { id: 'products', label: 'Products', value: 'LSX \u00b7 Tour Operator' },
    { id: 'speaker', label: 'Speaker', value: 'WCEU 2025' },
    { id: 'community', label: 'Community', value: 'Organiser \u00b7 Volunteer' },
    { id: 'remote', label: 'Work style', value: 'Hybrid / Remote' },
    { id: 'location', label: 'HQ', value: 'Cape Town' },
  ],
  team: [
    { id: 'ash', name: 'Ash Shaw', role: 'CEO, CTO, CMO, Content Strategist, Business Development & Mentor', joined: 'January 2003' },
    { id: 'warwick', name: 'Warwick Booth', role: 'Lead Developer', joined: 'December 2006' },
    { id: 'chris', name: 'Chris Vancoillie', role: 'Systems Administrator', joined: 'September 2009' },
    { id: 'barbara', name: 'Barbara Kerr', role: 'COO, CFO & HR', joined: '2010' },
    { id: 'justin', name: 'Justin Abrahamse', role: 'Frontend Developer, Online Marketing', joined: '2006\u20132009, rejoined 2020' },
    { id: 'lourens', name: 'Lourens Visser', role: 'Project Manager & Support Manager', joined: 'August 2021' },
    { id: 'adam', name: 'Adam Wale', role: 'Designer', joined: '2021 (part-time / freelance)' },
    { id: 'tibi', name: 'Tibi Buzdugan', role: 'Frontend & Backend Developer', joined: 'July 2023' },
    { id: 'zared', name: 'Zared Rogers', role: 'Web Designer & WordPress Developer', joined: 'August 2023' },
    { id: 'hugo', name: 'Hugo Gravito', role: 'Block Theme Developer Intern', joined: '15 August 2025' },
    { id: 'brandon', name: 'Brandon Marshall', role: 'Block Theme Developer Intern', joined: '25 August 2025' },
    { id: 'seren', name: 'Seren van der Merve', role: 'Block Theme Developer Intern', joined: '1 September 2025' },
    { id: 'jose', name: 'Jos\u00e9 Abreu', role: 'Block Theme & Block Developer', joined: 'Aug 2017\u2013Apr 2019, rejoined 5 Sep 2025' },
  ],

  /* ── BarCamp story (from ebook Ch19) ── */
  barcampStory: {
    id: 'barcamp-story',
    title: 'BarCamp Cape Town 2006: the pivot',
    paragraphs: [
      'BarCamp was an unconference \u2014 no preset agenda, no keynote speakers, no hierarchy. Attendees showed up and created the programme on the morning of the event. Topics were written on Post-it notes and arranged on a whiteboard. If you wanted to talk about something, you claimed a slot.',
      'Dave Duarte was there. He gave an impassioned talk about this open-source CMS called WordPress and why it was going to change the web. Ash was running an IT support company and dabbling in web design. Something clicked. Not just the technology \u2014 the philosophy. Open source. Community-driven. Transparent. Accessible. These were the same values his parents had instilled.',
      'The people at that BarCamp didn\u2019t just introduce him to WordPress \u2014 they introduced him to a way of working and building that would define the next two decades. Jeremy Thurgood, Jonathan Sobel, and dozens of others who became part of the extended LightSpeed network. Twenty-nine people at that event impacted his career in ways he\u2019s still discovering.',
    ],
  },

  /* ── Key people spotlights (from ebook Ch19) ── */
  keyPeople: [
    {
      id: 'warwick',
      name: 'Warwick Booth',
      narrative: 'Joined December 2006. Lead Developer. Nearly two decades of working together, building together, problem-solving together. Warwick is the technical backbone of LightSpeed. When Ash says "the right people change everything," Warwick is the first name he thinks of. He understood the vision from day one and has been instrumental in every major project since.',
    },
    {
      id: 'barbara',
      name: 'Barbara Kerr',
      narrative: 'Partner, COO/CFO/HR. Barbara and Ash built two businesses together \u2014 LightSpeed and Six Cats. She handles the operations, the finances, the human side of the business. Without Barbara, LightSpeed would be a very different company. She brought the structure that an ADHD brain needs but cannot create alone. Their partnership \u2014 personal and professional \u2014 is one of the most important relationships of his life.',
    },
    {
      id: 'jose-spotlight',
      name: 'Jos\u00e9 Abreu',
      narrative: 'The return story. Jos\u00e9 first joined in 2017, left after two years, and returned in September 2025. His comeback was seamless \u2014 as if he\u2019d never left. The fact that someone would choose to return to LightSpeed after experiencing other workplaces tells you everything about the culture they\u2019ve built.',
    },
  ],

  /* ── Company milestones (from ebook Ch19) ── */
  companyMilestones: [
    { id: 'ms-2003', year: '2003', event: 'Founded LightSpeed at age twenty-two. Initially an IT support company working from a spare bedroom in Cape Town.' },
    { id: 'ms-2005', year: '2005', event: 'Hired the first employee. The shift from solo operator to employer \u2014 one of the biggest psychological adjustments of the journey.' },
    { id: 'ms-2006', year: '2006', event: 'BarCamp Cape Town. Met Dave Duarte. WordPress pivot. Warwick Booth joined in December. Everything changed.' },
    { id: 'ms-2009', year: '2009', event: 'Chris Vancoillie joined. Another key addition that strengthened development capacity.' },
    { id: 'ms-2010', year: '2010', event: 'Barbara Kerr joined and became a partner. COO, CFO, and HR \u2014 the operational roles that brought structure to a creative company.' },
    { id: 'ms-2011', year: '2011\u20132012', event: 'Organised WordCamp Cape Town. Gave back to the community that gave them everything.' },
    { id: 'ms-2017', year: '2017\u20132019', event: 'Jos\u00e9 Abreu joined for his first period. A talented developer who brought fresh energy and perspective.' },
    { id: 'ms-2020', year: '2020', event: 'Justin Abrahamse rejoined. Having someone return after time away \u2014 it means the culture works.' },
    { id: 'ms-2021', year: '2021', event: 'Lourens Visser joined. The team continued to grow with people who shared the values.' },
    { id: 'ms-2023', year: '2023', event: 'Tibi Buzdugan and Zared Rogers joined. The team expanding into its strongest configuration.' },
    { id: 'ms-2025', year: '2025', event: 'Three interns selected from 450 LinkedIn applicants. Jos\u00e9 Abreu returned in September. WCEU Basel speaker.' },
    { id: 'ms-2026', year: '2026', event: 'Thirteen people. The most optimal team in twenty-three years.' },
  ],

  /* ── Lessons learned (from ebook Ch19) ── */
  lessonsLearned: [
    {
      id: 'lesson-structure',
      title: 'Freedom requires structure',
      description: 'The most liberating thing you can build is a system that works without you. ADHD brains need structure to function, so they build the best structures \u2014 GitHub workflows, daily planning templates, curriculum frameworks.',
    },
    {
      id: 'lesson-people',
      title: 'The right people change everything',
      description: 'From Warwick in 2006 to the interns in 2025, every right hire shifted the trajectory. The wrong hires taught equally valuable lessons. Hiring is the single most impactful thing a founder does.',
    },
    {
      id: 'lesson-adhd',
      title: 'ADHD is an engine, not a handicap',
      description: 'The hyperfocus. The pattern recognition. The need to build systems to manage the chaos. The ability to context-switch between design, code, client strategy, and team management. These are features, not bugs.',
    },
    {
      id: 'lesson-art-biz',
      title: 'The business feeds the art, the art feeds the business',
      description: 'The same brain that builds WordPress design systems is the brain that designs neon faces at 3am on a dancefloor. LightSpeed has run profitably for twenty-three years because the entrepreneurial drive and the creative drive are the same thing.',
    },
    {
      id: 'lesson-autonomy',
      title: 'Autonomy is non-negotiable',
      description: 'The freedom given to the LightSpeed team mirrors the freedom Ash demands for himself. The company is the container that makes the rest possible \u2014 the Berlin summers, the Thailand bootcamps, the festival circuits, the art. LightSpeed is the financial engine that funds a life lived in full colour.',
    },
  ],

  sections: [
    {
      id: 'origin-story',
      title: 'The origin story (2003)',
      paragraphs: [
        'LightSpeed was founded in 2003 as an IT support company. Ash was 22, self-taught, and driven by the same relentless curiosity that would later define his art. Before LightSpeed, he\u2019d already cut his teeth as a bicycle courier at Peddlars, an IT support intern at DuxTel, a sysadmin at City Varsity, Qeo Wireless, and SynthaSite, and a Scrum Master at Media24. The company name \u2014 LightSpeedDevelopment, acronym LSD \u2014 was deliberate. If you know, you know.',
        'The pivot came after BarCamp Cape Town in 2006, where Ash met Dave Duarte, who inspired him to explore WordPress. Within months, Warwick Booth joined as lead developer, and LightSpeed transformed from IT support into a WordPress web development agency. That decision changed everything. The entrepreneurial drive came from his parents\u2019 values: honesty, hard work, dedication, good business ethics, and a good, honest set of morals.',
      ],
    },
    {
      id: 'wordpress-community',
      title: 'WordPress & the open source community',
      paragraphs: [
        'Ash didn\u2019t just use WordPress \u2014 he became part of the community. He organised WordCamp Cape Town in 2011 and 2012, spoke at WordCamp Europe 2025 in Basel, volunteered at WCEU 2024 in Torino, and attended over 20 WordCamp and WooConf events across four continents.',
        'The community provided mentorship, business opportunities, and lifelong friendships. The same networking instinct that connects people on a dancefloor connected Ash to the global WordPress ecosystem. From BarCamp 2006 to Basel 2025, every event opened doors.',
        'At WordCamp Europe 2025, Ash spoke about \u201cBridging Design and Development: Figma Design Systems for WordPress Success\u201d \u2014 the culmination of years building the LSX Design System, an open-source tool for designers and developers.',
      ],
    },
    {
      id: 'design-systems',
      title: 'Block-based themes & design systems',
      paragraphs: [
        'LightSpeed\u2019s flagship products include the LSX Design System \u2014 an open-source WordPress block theme design system built in Figma \u2014 and Tour Operator, a WordPress plugin suite for travel websites.',
        'The design system work reflects the same pattern-recognition that drives Ash\u2019s art: seeing connections between seemingly unrelated things, building systems that are both beautiful and functional, and obsessing over the details until everything clicks.',
        'The company publishes themes and plugins on WordPress.org, maintains comprehensive documentation, and contributes to the broader open-source community. It\u2019s the same ethos as the festival scene: share what you have, build together, lift each other up.',
      ],
    },
    {
      id: 'ai-workflows',
      title: 'AI workflows & modern publishing',
      paragraphs: [
        'LightSpeed has embraced AI-driven publishing workflows, integrating GitHub Copilot, Microsoft Learn courses, and advanced automation into the team\u2019s daily work. Ash doesn\u2019t just manage the AI transition \u2014 he mentors the entire team through it. Everyone at LightSpeed upskills together, learning in lockstep because that\u2019s how the culture works.',
        'The same ADHD hyperfocus that creates UV art on a dancefloor builds meticulously detailed workflows, internship curricula, GitHub contributing guidelines, and daily planning templates. Out of 450 applicants for the internship programme, only 2 made it through \u2014 because \u201ca will to learn\u201d is the number one hiring criterion. ADHD brains need structure to function, so they build the best structures.',
      ],
    },
    {
      id: 'day-night',
      title: 'What the day job teaches the night artist',
      paragraphs: [
        'The connection between LightSpeed and UV art isn\u2019t a stretch \u2014 it\u2019s the same brain applied to different canvases. Design systems teach composition and consistency. Project management teaches reading a room. Remote team leadership teaches trust. All of these transfer directly to the dancefloor.',
        'An ADHD founder literally cannot micromanage. Ash builds systems that run without constant oversight, hires people who thrive with freedom, and trusts the process. It\u2019s ADHD management style, accidentally revolutionary \u2014 and it works for both a WordPress agency and a festival art practice.',
        'LightSpeed runs profitably because of the lifestyle, not despite it. A founder who cycles 300 km to a psytrance festival with a 40 kg bike pack is not someone who lacks discipline \u2014 he channels it differently.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EDUCATION — The Unconventional Classroom
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface EducationEntry {
  id: string;
  year: string;
  institution: string;
  qualification: string;
  description: string;
}

export interface EducationStat {
  id: string;
  label: string;
  value: string;
}

export interface EducationPageData extends AboutSubpageData {
  pullQuote: string;
  stats: EducationStat[];
  formalEducation: EducationEntry[];
}

export const educationPageData: EducationPageData = {
  hero: {
    badge: 'Education',
    title: 'The unconventional classroom',
    description:
      'From Paarl Boys High to self-taught web developer, from BarCamp to WordCamp Europe keynote. Ash\u2019s educational journey proves that the most transformative classrooms don\u2019t have walls.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Education' },
  ],
  pullQuote:
    'Formal education failed his ADHD brain. Self-directed learning succeeded. Therefore, at LightSpeed: \u201ca will to learn\u201d is the number one hiring criterion.',
  stats: [
    { id: 'matric', label: 'Matric', value: 'Age 17' },
    { id: 'school', label: 'School', value: 'Paarl Boys High' },
    { id: 'formal-end', label: 'Last formal', value: '1999' },
    { id: 'self-taught', label: 'Self-Taught Since', value: '2000' },
    { id: 'certs', label: 'Certifications', value: '5+' },
    { id: 'wordpress', label: 'WordPress Since', value: '2006' },
    { id: 'speaking', label: 'Conference speaker', value: 'WCEU 2025' },
    { id: 'mentoring', label: 'Mentoring', value: 'Active' },
    { id: 'ai', label: 'AI Integration', value: 'Since 2024' },
    { id: 'festival-edu', label: 'Festival classroom', value: '25+ years' },
  ],
  formalEducation: [
    {
      id: 'edu-school',
      year: '1986\u20131998',
      institution: 'Paarl Junior School \u2192 Paarl Boys High',
      qualification: 'Matric (finished at age 17)',
      description:
        'Grew up in Paarl, Western Cape, South Africa. ADHD was undiagnosed \u2014 the school system wasn\u2019t designed for brains like his. The sports field was where he thrived: Western Province mountain bike colours in 1997 (3rd), 1998 (1st \u2014 champion), and 1999 (3rd).',
    },
    {
      id: 'edu-daemelin',
      year: '1999',
      institution: 'Daemelin College',
      qualification: 'Marketing',
      description:
        'Studied marketing while training extensively for the Western Province and South African mountain bike championships. The same year as the first Vortex festivals that would redirect the course of his entire life.',
    },
    {
      id: 'edu-mcse',
      year: '1999\u20132006',
      institution: 'Microsoft Self-Study',
      qualification: 'MCSE Curriculum (NT 4.0, 2000, 2003)',
      description:
        'Self-studied the MCSE curriculum while doing freelance IT work. Windows NT 4.0, then 2000, then 2003 Server. Also completed Microsoft Operations Framework Essentials.',
    },
    {
      id: 'edu-cityvarsity',
      year: '2002',
      institution: 'City Varsity',
      qualification: 'Advanced Web Design',
      description:
        'Programming fundamentals, HTML, CSS, XML, PHP, SQL, MySQL, JavaScript, database connectivity, and e-Commerce site creation using PHP.',
    },
    {
      id: 'edu-apple',
      year: '2006',
      institution: 'Core Group \u2014 Apple Training',
      qualification: 'Mac OS X Support Essentials',
      description:
        'Three-day hands-on course covering installation, file systems, permissions, networking, peripherals, printing, and troubleshooting.',
    },
    {
      id: 'edu-lpi',
      year: '2006\u20132008',
      institution: 'LPI Institute',
      qualification: 'Linux IT Professional Certification (Levels 1\u20133)',
      description:
        'Linux System Administration certification \u2014 Levels 1, 2, and 3. Still the foundation of LightSpeed\u2019s hosting infrastructure on Ubuntu today.',
    },
    {
      id: 'edu-webpr',
      year: '2007',
      institution: 'Quirk Education',
      qualification: 'WebPR+ Online Reputation Management',
      description:
        'Online reputation management, content strategies, and PR for Web 2.0 \u2014 strengthening company presence and building brands online.',
    },
  ],
  sections: [
    {
      id: 'formal-short',
      title: 'Formal education (the short version)',
      paragraphs: [
        'Ash attended school in Paarl, Western Cape, South Africa from preschool through to the end of high school. Paarl Junior School from 1986, then Paarl Boys High from 1994, finishing Matric at age 17 in 1998. Before school even began, the signs were there: hours alone in his room building intricate Lego systems \u2014 towers, complex multi-level structures spanning an entire bookshelf, with systems for the Lego men to move between levels. The ADHD hyperfocus and the creative engineering mind were already emerging.',
        'At age 12\u201313, his dad gave him a gold computer. He taught himself to install Windows 3.1 from twelve stiffy discs, then taught himself to strip the machine and put it back together. His friend Ron helped him troubleshoot hardware problems. The self-taught tech journey started right there. At Paarl Junior School, Miss Scott saw the potential in him \u2014 she first taught him in Standard 1, then again in Standard 3, 4, and 5. In a system that didn\u2019t know how to handle his ADHD brain, she was the teacher who recognised what was there and encouraged it.',
        'While the classroom was a struggle, the sports field was where he thrived. Racing bicycles since 1994, representing Western Province in cross-country mountain biking by 1995, winning provincial colours by 1997. Known as the \u201c2 o\u2019clock club\u201d because at 2pm he went home \u2014 to train on his bicycle. He was also bullied as a kid because he was small. One particularly painful memory: being made to stand on stage and apologise to the entire school for not knowing the inter-school songs.',
        'After one year at Daemelin College studying marketing in 1999, formal education ended. The same year, the first Vortex festival happened \u2014 and the real education began. In Standard 9 and 10 he\u2019d worked at a coffee shop in Tyger Valley on Sundays for extra cash. He grew up speaking Afrikaans fluently in an Afrikaans town \u2014 still speaks it fluently today.',
      ],
    },
    {
      id: 'self-taught',
      title: 'The self-taught developer',
      paragraphs: [
        'Everything Ash knows about web development, design, and business management was self-taught. From HTML and CSS in the early 2000s to WordPress block-based themes and AI-powered editorial workflows today \u2014 all learned by doing, not by degree.',
        'He studied Microsoft certifications while doing freelance IT work, completed Apple training and Linux professional certification, and attended City Varsity for advanced web design. But the real learning happened on the job \u2014 building LightSpeed from a one-person IT support operation into a 13-person WordPress agency.',
        'This approach shapes LightSpeed\u2019s hiring philosophy: \u201ca will to learn\u201d is the number one criterion. Past experience can mean bad habits; fresh minds with drive are preferred. Out of 450 applicants for the internship programme, only 2 made it through.',
      ],
    },
    {
      id: 'festival-education',
      title: 'Festival as education',
      paragraphs: [
        'The dancefloor became the classroom where everything made sense. ADHD brains learn by immersion, by doing, by feeling \u2014 not by sitting in rows. Psytrance culture taught community building, creative risk-taking, ego dissolution, and pattern recognition across altered states.',
        'The 86-hour bus ride to the Zambian solar eclipse festival in 2001 taught more about resilience, connection, and perspective than any formal programme. The international festival circuit from Cape Town to Berlin to Thailand taught cultural adaptation, logistical problem-solving, and the art of carrying only what matters.',
      ],
    },
    {
      id: 'teaching-others',
      title: 'Teaching others',
      paragraphs: [
        'Ash\u2019s educational philosophy comes full circle in how he leads LightSpeed. The internship programme he built is modelled on self-directed learning: structured enough to provide direction, free enough to allow individual exploration.',
        'He organises WordPress meetups, speaks at WordCamp conferences, contributes to open-source projects, and mentors his team through daily collaboration. At WordCamp Europe 2025 in Basel, he presented on bridging design and development with Figma design systems for WordPress.',
      ],
    },
    {
      id: 'younger-self',
      title: 'What he\u2019d tell his younger self',
      paragraphs: [
        'The ADHD isn\u2019t broken. The school system is. Find the environments that match your brain \u2014 the dancefloor, the bicycle, the festival campsite, the code editor \u2014 and pour everything into those. The rest will sort itself out.',
        'The network matters more than the degree. BarCamp 2006 led to WordPress. WordPress led to WordCamp. WordCamp led to a global community that opened every door. Show up, share what you know, and the right people will find you.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PARTNERS — The People Along the Way
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface PartnersPageData extends AboutSubpageData {
  pullQuote: string;
}

export const partnersPageData: PartnersPageData = {
  hero: {
    badge: 'Partners',
    title: 'The people along the way',
    description:
      'The significant relationships that shaped Ash \u2014 romantic partners, creative collaborators, chosen family. Not a dating history. A gratitude page.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Partners' },
  ],
  pullQuote:
    'The heart loves what the heart loves. Every significant relationship in Ash\u2019s life was forged on the dancefloor, in festival conditions, in moments of shared intensity \u2014 on the trance floor, at 3am, in the glow of UV light.',
  sections: [
    {
      id: 'dancefloor-connections',
      title: 'The ones who changed everything',
      paragraphs: [
        'The significant relationships in Ash\u2019s life share a common thread: they were all forged on the dancefloor. Front left speaker at a December Vortex festival. A shared drop at Sisyphos in Berlin. The pattern is consistent \u2014 real connection happens when the music is right, the ego dissolves, and two people meet each other without pretence.',
        'Barbara Kerr has been one of the most important people in Ash\u2019s life. They went through every chapter of the story together \u2014 including the 86-hour bus to the Zambian solar eclipse that sealed their unity. They still live together in Cape Town and run two businesses as partners: LightSpeed, their software company, and Six Cats, their cannabis club. They separated amicably, and finding clear boundaries was essential for maintaining the friendship and partnerships. Barbara is one of Ash\u2019s best friends, if not his best friend \u2014 he\u2019s made every effort to resolve any issues and discuss clear boundaries for things that don\u2019t work. That\u2019s not a failure of relationships \u2014 it\u2019s the highest possible outcome: love that transforms rather than diminishes.',
        'They met at the December Vortex in 2000, connected deeply on the dancefloor immediately, went to the Zambian solar eclipse festival together, and built both a life and a business side by side. She joined LightSpeed in 2010 and became a partner. Today, they remain best friends and business partners in two companies \u2014 proof that love can evolve into something even more valuable when it\u2019s built on genuine respect.',
        'Aixa Reynosa entered Ash\u2019s world at Sisyphos in Berlin \u2014 \u201clove at first drop,\u201d as they tell it. They chased each other around the world for a while, connected through shared creativity and shared dancefloors. Though the romantic chapter eventually closed, they remain friends. As a dear friend once said: the heart loves what the heart loves.',
      ],
    },
    {
      id: 'creative-collaborators',
      title: 'Creative collaborators',
      paragraphs: [
        'Ash\u2019s creative world extends far beyond romantic relationships. The festival community is built on collaboration \u2014 DJs who provide the soundtrack, visual artists who build the environments, fire dancers who add the spectacle, sound engineers who make it all work.',
        'Warwick Booth, LightSpeed\u2019s lead developer, joined in December 2006 and has been by Ash\u2019s side for nearly two decades of web development. The professional partnership is as significant as any personal one \u2014 built on trust, shared values, and the kind of mutual respect that only comes from years of working through challenges together.',
        'The LightSpeed team itself is a chosen family. Thirteen people who believe in the same values: freedom, quality, continuous learning, and the idea that work should serve life, not the other way around.',
      ],
    },
    {
      id: 'festival-family',
      title: 'The festival family',
      paragraphs: [
        'The people met at the Solipse solar eclipse festival in Zambia in 2001 are still friends and a part of Ash\u2019s life today. Three weeks in the bush, three border crossings, 3.5 minutes of totality, and a lifetime of connection. The festival family doesn\u2019t require frequent contact \u2014 you pick up where you left off, every time.',
        'From the Cape Town psytrance scene of the early 2000s to Berlin\u2019s underground clubs to Thai island gatherings, the same people keep appearing. The dancefloor selects for a type: present, sincere, ready to share energy without agenda.',
        'These are the people who understand that creativity isn\u2019t a career, it\u2019s a way of being. The people who get on an 86-hour bus to Zambia, who cycle 300 km to Origin Festival, who paint their faces at 3am because the music and the moment demand it. The chosen family.',
      ],
    },
    {
      id: 'gratitude',
      title: 'Gratitude',
      paragraphs: [
        'Every person mentioned on this page made Ash who he is. The partners who shared the journey. The collaborators who built alongside him. The festival family who showed up, time after time, with nothing but energy and sincerity.',
        'Barbara is one of Ash\u2019s best friends and a business partner in two businesses. That\u2019s not a failure of relationships \u2014 it\u2019s the highest possible outcome. Love that transforms rather than diminishes.',
        'This page exists not to catalogue relationships, but to honour them. Every connection, every dancefloor meeting, every shared sunrise \u2014 they\u2019re all part of the story. And the story continues.',
      ],
    },
  ],
};

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   FITNESS — The Moving Body
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface FitnessSport {
  id: string;
  name: string;
  since: string;
  description: string;
}

export interface FitnessStat {
  id: string;
  label: string;
  value: string;
}

export interface FitnessTrainingDetail {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface FitnessIntersection {
  id: string;
  from: string;
  to: string;
  connection: string;
}

export interface FitnessPageData extends AboutSubpageData {
  pullQuote: string;
  stats: FitnessStat[];
  sports: FitnessSport[];
  kohPhanganTraining: FitnessTrainingDetail;
  intersectionModel: {
    id: string;
    title: string;
    intro: string;
    connections: FitnessIntersection[];
    closing: string;
  };
}

export const fitnessPageData: FitnessPageData = {
  hero: {
    badge: 'Fitness',
    title: 'The moving body',
    description:
      'For ADHD brains, movement isn\u2019t optional \u2014 it\u2019s medication. Cycling, dance, yoga, running, triathlon, Muay Thai, swimming. The body as creative instrument, neurological regulator, and festival endurance machine.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Fitness' },
  ],
  pullQuote:
    'Movement is medicine for the ADHD brain. The cycling is meditation. The festival dancing is hours of physical expression. The Muay Thai is controlled aggression. The yoga is stillness. Together, they create the physical foundation that makes the art possible.',
  stats: [
    { id: 'cycling-since', label: 'Cycling since', value: '1994' },
    { id: 'yoga-since', label: 'Yoga since', value: '2005' },
    { id: 'running-since', label: 'Running since', value: '2006' },
    { id: 'triathlon-since', label: 'Triathlon since', value: '2010' },
    { id: 'swimming-since', label: 'Swimming since', value: '2010' },
    { id: 'muaythai-since', label: 'Muay Thai since', value: '2019' },
    { id: 'disciplines', label: 'Disciplines', value: '7' },
    { id: 'active-years', label: 'Active years', value: '30+' },
    { id: 'daily', label: 'Daily movement', value: 'Always' },
    { id: 'festival-hrs', label: 'Festival endurance', value: 'Multi-day' },
  ],
  sports: [
    {
      id: 'sport-cycling',
      name: 'Cycling',
      since: '1994',
      description:
        'The longest and deepest sporting relationship. From Western Province mountain bike champion to Berlin daily commuter to festival pilgrim. Identity on two wheels.',
    },
    {
      id: 'sport-yoga',
      name: 'Yoga',
      since: '2005',
      description:
        'Mostly personal training and self-practice. The counterbalance to high-intensity sport: flexibility, breath work, mindfulness.',
    },
    {
      id: 'sport-running',
      name: 'Running',
      since: '2006',
      description:
        'Top 10 finisher in the Table Mountain Challenge three times and the Hout Bay Trail Challenge once. Part of the overall endurance picture.',
    },
    {
      id: 'sport-triathlon',
      name: 'Triathlon',
      since: '2010',
      description:
        'The ultimate multi-discipline challenge: swimming, cycling, and running combined. The variety keeps the ADHD brain engaged.',
    },
    {
      id: 'sport-swimming',
      name: 'Open water swimming',
      since: '2010 (proficient by 2019)',
      description:
        'Started as triathlon training, became its own discipline after two years training with Lourens Visser. Now ventures into longer distance open water sea swimming.',
    },
    {
      id: 'sport-muaythai',
      name: 'Muay Thai',
      since: '2019',
      description:
        'A source of discipline, strength, and power. Currently training with a skilled Muay Thai trainer on Koh Phangan. Controlled aggression, striking technique, and the mental focus required for combat sport.',
    },
  ],

  /* ── Koh Phangan training base (from ebook Ch9) ── */
  kohPhanganTraining: {
    id: 'koh-phangan-training',
    title: 'Koh Phangan: the training base',
    paragraphs: [
      'Koh Phangan became the third home, after Cape Town and Berlin. Not for the Full Moon Party \u2014 for the training.',
      'Morning routine: swim out to the coral reefs. Not laps in a pool \u2014 open water, salt water, fish darting beneath you, sea urchins in the rocks, the sun already hot at 7am. The swim is meditation and exercise simultaneously, the ADHD brain focused by the sensory richness of the ocean.',
      'Muay Thai with a skilled trainer. Since 2019, with intensive seasons in 2023 and 2025. The gym on Koh Phangan is a meeting point for digital nomads, fighters, yogis, and people who have opted out of conventional life. The training is brutal and beautiful \u2014 pad work, bag work, clinching, sparring. Your body is your primary tool, and the tool needs maintenance.',
      'Triathlon training in tropical heat: swim, bike, run. The island is small enough to lap it by bicycle in a few hours but hilly enough to challenge you. Running in 35-degree humidity is character building. The herbal steam bath at the temple afterward \u2014 recovery and meditation combined, the steam thick with eucalyptus and lemongrass, the monks moving quietly around you.',
      'Remote work from the island completed the picture. The laptop-and-bike lifestyle: mornings for training, afternoons for LightSpeed, evenings for the dancefloor or the sunset. Koh Phangan became the third home because it offered everything needed in one small, beautiful, slightly chaotic place.',
    ],
  },

  /* ── Intersection model (from ebook Ch15) ── */
  intersectionModel: {
    id: 'intersection-model',
    title: 'The intersection model',
    intro: 'The conventional framework asks: "What do you do for a living?" and expects a single answer. Ash\u2019s answer is a Venn diagram with six overlapping circles: cycling, dancing, painting, growing, building, and fighting. The magic \u2014 the artist\u2019s lifestyle \u2014 lives in the overlaps.',
    connections: [
      { id: 'int-cycle-dance', from: 'Cycling', to: 'Dance', connection: 'Builds the cardiovascular engine that powers twelve-hour dance sessions.' },
      { id: 'int-dance-muaythai', from: 'Dance', to: 'Muay Thai', connection: 'Teaches body awareness that improves striking technique.' },
      { id: 'int-muaythai-art', from: 'Muay Thai', to: 'UV painting', connection: 'Sharpens focus that improves painting precision.' },
      { id: 'int-art-biz', from: 'UV painting', to: 'LightSpeed', connection: 'Builds the creative confidence that makes client work more innovative.' },
      { id: 'int-biz-travel', from: 'LightSpeed', to: 'Travel', connection: 'Generates the income that funds the festival circuits.' },
      { id: 'int-travel-art', from: 'Travel', to: 'UV painting', connection: 'Provides the festivals that need the painting.' },
    ],
    closing: 'It\u2019s a flywheel, not a balance sheet. Nothing is sacrificed for the others because they are all expressions of the same underlying drive: the ADHD brain\u2019s need for novelty, stimulation, and deep engagement.',
  },

  sections: [
    {
      id: 'movement-medicine',
      title: 'Movement as medicine',
      paragraphs: [
        'For ADHD brains, movement isn\u2019t optional \u2014 it\u2019s medication. Cycling daily in Berlin isn\u2019t fitness; it\u2019s brain chemistry. The 300 km loaded-bike pilgrimage to Origin Festival isn\u2019t adventure; it\u2019s the ultimate dopamine regulation strategy.',
        'The pattern is clear: cycling since 1994, yoga since the early 2000s, running since 2006, triathlon since 2010, swimming from 2010, Muay Thai since 2019 in Thailand. Thirty years of discovering new ways to move, each one adding a different dimension to the physical practice that keeps the mind clear and the creativity flowing.',
        'This isn\u2019t gym fitness. This is functional endurance built through decades of sport, shaped by the specific demands of the psytrance lifestyle \u2014 dancing for hours, setting up and painting all day, cycling to and from festivals with full gear, recovering between sets, between days, between festivals.',
      ],
    },
    {
      id: 'festival-endurance',
      title: 'Festival endurance',
      paragraphs: [
        'Multi-day festivals require a specific kind of fitness that no gym programme can provide. Dancing for hours in heat or cold. Setting up camp and painting faces all day, then dancing all night. Cycling to the festival with 40 kg of gear, then having the energy to create art for three or four days straight.',
        'The endurance built through decades of competitive cycling, trail running, and triathlon transfers directly to festival conditions. The comfort with suffering, the ability to push through when the body says stop, the understanding that energy is a resource to be managed, not burned. Hearing protection is essential: Loop Experience 2 ear plugs protect without killing the music.',
        'Recovery is part of the practice. The yoga provides flexibility and breath work. The swimming provides low-impact active recovery \u2014 on Koh Phangan, that means swimming out to coral reefs, seeing colourful fish and sea urchins. The cycling between festival days provides the repetitive motion that an ADHD brain needs to process the sensory overload of the previous night.',
      ],
    },
    {
      id: 'cycling-meditation',
      title: 'Cycling as meditation',
      paragraphs: [
        'Every ride has a meditative quality. The repetitive motion, the breath, the gradual unspooling of thoughts. By the time Ash arrives at a festival after 150 km of riding, he\u2019s processed everything the conscious mind was holding. The creative work that follows is cleaner, more instinctive, more honest.',
        'The loaded touring bike is a metaphor for the entire philosophy: portability isn\u2019t a limitation \u2014 it\u2019s a design constraint that forces creative efficiency. Everything an artist needs, on two wheels.',
      ],
    },
    {
      id: 'mind-body-art',
      title: 'The mind-body-art connection',
      paragraphs: [
        'The connection between physical fitness and creative output is direct and measurable. The best painting sessions follow the best physical days. The sharpest business decisions follow morning cycling rides. The deepest creative states happen when the body is exhausted enough to let the mind stop trying to control the process.',
        'Ash shapes his year around what feeds his brain: cycling for daily regulation, festivals for creative immersion, sport for physical structure, dance for sensory processing. Every part of the life is designed to work with the ADHD wiring, not against it.',
      ],
    },
    {
      id: 'daily-practices',
      title: 'Daily practices',
      paragraphs: [
        'The daily practice is non-negotiable: cycling in Berlin, every day, regardless of weather or schedule. It\u2019s the anchor that holds everything else together. On top of that, weekly Muay Thai sessions for discipline, yoga for flexibility and breath work, and swimming when access to open water allows.',
        'On festival weekends, the dancefloor becomes the primary movement practice \u2014 hours of continuous movement that doubles as creative preparation, social connection, and the most effective ADHD intervention Ash has ever found. Berlin summer 2025 set a personal record: approximately 900\u202Fkm or one million steps over eight weeks, mostly dancing. After 25+ years immersed in psytrance, his heart now beats for house and techno too \u2014 though the roots remain.',
      ],
    },
  ],
};