/**
 * @fileoverview Mock data for Six Cats Club about sub-page
 *
 * Ash Shaw started the Six Cats Cannabis Club in Cape Town in May 2019.
 * He built the website at https://sixcats.club/ and grew craft cannabis
 * with nearly 20 years of experience. This page tells the story of
 * the club, the cats, and the cultivation philosophy.
 *
 * @module data/mock/pages/six-cats
 * @version 1.0.0
 */

import type { BreadcrumbItem } from '../../../components/ui/Breadcrumbs';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   TYPES
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export interface SixCatsCat {
  id: string;
  name: string;
  nickname: string;
  status: 'alive' | 'memorial';
  role: string;
  bio: string;
  datePassed?: string;
}

export interface SixCatsGrade {
  id: string;
  grade: string;
  name: string;
  tagline: string;
  description: string;
}

export interface SixCatsValue {
  id: string;
  title: string;
  description: string;
}

export interface SixCatsCultivation {
  id: string;
  title: string;
  description: string;
}

export interface SixCatsSection {
  id: string;
  title: string;
  paragraphs: string[];
}

export interface SixCatsPageData {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  breadcrumbs: BreadcrumbItem[];
  website: {
    name: string;
    tagline: string;
    url: string;
  };
  vision: string;
  mission: string;
  values: SixCatsValue[];
  grades: SixCatsGrade[];
  cultivation: SixCatsCultivation[];
  harvest: SixCatsSection[];
  packaging: SixCatsSection[];
  cats: SixCatsCat[];
  sections: SixCatsSection[];
  a11y: {
    catsListLabel: string;
    memorialLabel: string;
    gradesLabel: string;
    valuesLabel: string;
    cultivationLabel: string;
    harvestLabel: string;
    packagingLabel: string;
    visionMissionLabel: string;
  };
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   DATA
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const sixCatsPageData: SixCatsPageData = {
  hero: {
    badge: 'Six Cats Club',
    title: 'Craft Cannabis \u2014 Consciously Cultivated',
    description:
      'In May 2019, Ash started the Six Cats Cannabis Club in Cape Town \u2014 a conscious cannabis community built on nearly 20 years of growing experience, sustainable farming, and a house full of rescue cats who became the brand\u2019s soul.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Six Cats Club' },
  ],
  website: {
    name: 'Six Cats',
    tagline: 'Craft Cannabis Club',
    url: 'https://sixcats.club/',
  },
  vision:
    'To enrich and improve lives through consciously crafted cannabis.',
  mission:
    'To grow, dry and cure exceptional cannabis using organic techniques that provide our customers with ethical, high-quality products and a world-class craft cannabis club experience.',

  /* ── Values ── */
  values: [
    {
      id: 'authenticity',
      title: 'Authenticity',
      description:
        'We spend a lot of our time researching the strains we grow, and have benefitted from the assistance given to us by our international network of fellow growers. The end result is a product that\u2019s verifiable as the real deal, every time.',
    },
    {
      id: 'consciousness',
      title: 'Consciousness',
      description:
        'From start to finish, seed to flower, we apply our whole mind to providing every small batch of our crop with care and nurturing energy, to ensure that the final result we share with you provides positivity and joy.',
    },
    {
      id: 'consistency',
      title: 'Consistency',
      description:
        'We regularly update our seed stock from the world\u2019s best cup-winning seed banks, and from season to season, we diligently examine every batch to make certain that this year\u2019s product matches the last, every time.',
    },
    {
      id: 'experience',
      title: 'Experience',
      description:
        'We have earned our knowledge from 20 years\u2019 worth of careful growing, and have learned with every season. This is the basis of our craft: careful and considerate observation, and the application of every lesson we\u2019ve learned along the way.',
    },
    {
      id: 'meticulousness',
      title: 'Meticulousness',
      description:
        'We go the distance to check and double-check our crop at every stage of its growth, taking care to make sure that every batch receives attention when needed to ensure as superb an end product as possible.',
    },
    {
      id: 'sustainability',
      title: 'Sustainability',
      description:
        'With every crop we grow, we apply our full mind to finding ways to work with nature, whether it comes to the materials we use to raise our batches to full flower, or how best to fall in step with the natural rhythms of each cycle\u2019s growth.',
    },
    {
      id: 'passion',
      title: 'Passion',
      description:
        'The craft of growing superior cannabis flowers has been our passion for two decades, and drives us to constantly be open to learning more with every season. Every plant gets our full attention and care.',
    },
    {
      id: 'quality',
      title: 'Quality',
      description:
        'With every choice of strain, we strive to meet the high standards that we hold ourselves to \u2014 and it\u2019s this that enables us to produce small-batch crops that are of a superior quality, every single time.',
    },
  ],

  /* ── Grading system ── */
  grades: [
    {
      id: 'quads',
      grade: 'AAAA',
      name: 'Quads',
      tagline: 'The best of the best!',
      description:
        'This premium cannabis ranks highest in all traits; well cured, with a pungent odour, a sharp flavour, and a smooth, clean-smelling burn & potent smoke. Our hand-selected quads are our best-trimmed buds and cost slightly more than topshelf.',
    },
    {
      id: 'topshelf',
      grade: 'AAA',
      name: 'Topshelf',
      tagline: 'Quality fitting for connoisseurs.',
      description:
        'Topshelf will exhibit an aesthetically pleasing cannabis flower structure, demonstrate desirable terpene aromas and flavours, and have a high cannabinoid content. The bud is dense and in good form. No harsh aftertaste is a good sign of this grade.',
    },
    {
      id: 'standard',
      grade: 'AA',
      name: 'Standard',
      tagline: 'Smaller buds than topshelf, but still top quality.',
      description:
        'Standard Grade has many of the same characteristics of Topshelf, but less bud density. Although it is still of excellent quality, many of the same qualities of the Topshelf bud are still present. The THC potency is also still high.',
    },
    {
      id: 'preground',
      grade: 'A+',
      name: 'Preground',
      tagline: 'Save time with fine-sieved convenience.',
      description:
        'Stretch your stash with the budtender\u2019s preground cannabis blend. We pass a blend of cannabis through a sieve to remove unwanted plant matter like stalks and seeds, giving you a smooth smoke.',
    },
    {
      id: 'budget',
      grade: 'A',
      name: 'Budget Blend',
      tagline: 'Perfect for making edibles.',
      description:
        'Budget grade is great for stretching your bud or making edibles. We do a tight trim on our Standard and Topshelf buds, which yields a lot of powdery goodness. This grade also includes some small popcorn buds \u2014 you\u2019re bound to find some gold nuggets in every jar.',
    },
  ],

  /* ── Cultivation ── */
  cultivation: [
    {
      id: 'living-soil',
      title: 'Living Soil',
      description:
        'We recycle all our food waste using Bokashi bins and a worm farm composter. At the start of Spring each year, we work the organic waste into the soil, adding valuable nutrients, minerals and microorganisms for the new season of growing.',
    },
    {
      id: 'rainwater',
      title: 'Rainwater Harvesting',
      description:
        'Cape Town was one of the first cities to almost run out of water in 2018. We collect rainwater and store 13,500 litres for household and growing usage. The water is pumped through a triple filter with UV light to ensure a neutral pH balance.',
    },
    {
      id: 'companion-planting',
      title: 'Companion Planting',
      description:
        'Companion planting is the practice of pairing certain varieties of flora to naturally deter pests. We specifically plant basil with every cannabis plant we grow. We also use sulphur and diatomaceous earth for natural pest management.',
    },
    {
      id: 'worm-tea',
      title: 'Worm Tea',
      description:
        'We brew worm compost tea every two weeks throughout the growing season using an aerobic compost tea system. The system efficiently extracts and amplifies beneficial microorganisms from the compost. It must be bubbled for 48 hours for best results.',
    },
  ],

  /* ── Harvest phases ── */
  harvest: [
    {
      id: 'flushing',
      title: 'Flushing',
      paragraphs: [
        'We start 10 days before harvest with flushing the cannabis plants. Flushing involves running water through the soil medium to remove traces of minerals and other nutrients, forcing the plant to consume stored nutrients in its final week.',
      ],
    },
    {
      id: 'drying',
      title: 'Drying',
      paragraphs: [
        'We hang the plants in darkness in the drying room, kept at 16\u201318\u00b0C with a relative humidity of 55\u201360%. A fan on low speed ensures decent air circulation to prevent mould. Once the branches snap, they are dry enough to jar.',
      ],
    },
    {
      id: 'dry-trimming',
      title: 'Dry Trimming',
      paragraphs: [
        'After about 1\u20132 weeks on the drying nets, most moisture is gone. We do a very tight trim on our Standard Grade and Topshelf buds, which yields a lot of powdery goodness that we package as our Budget Grade.',
      ],
    },
    {
      id: 'curing',
      title: 'Curing',
      paragraphs: [
        'We place the dry flowers into airtight glass jars. During the first three weeks, we open the jars for ten minutes every day in a dark room. We taste the flowers every week to check their ripeness. After about 2 months we start to package and label \u2014 Homegrown Happiness!',
      ],
    },
  ],

  /* ── Packaging ── */
  packaging: [
    {
      id: 'glass',
      title: 'Glass & Recycling',
      paragraphs: [
        'Our customers prefer purchasing products in glass packaging. Customers return the jars, which we sanitise and recycle for the next season\u2019s products. Glass is non-porous and impermeable, preserving the taste and aroma of our cannabis for well over a year.',
        'Glass bottles are endlessly recyclable. About 80% of recovered glass becomes new containers or other products. It\u2019s our way of saying thanks to Mother Earth.',
      ],
    },
    {
      id: 'sustainability',
      title: 'Sustainable Growth',
      paragraphs: [
        'The Humans at Six Cats have an eco-friendly mindset and aim to make environmentally conscious decisions when growing, producing and dispensing our products. We grow our cannabis organically outdoors, using the natural cycles of the sun and seasons.',
      ],
    },
  ],

  /* ── The Cats ── */
  cats: [
    {
      id: 'timmy',
      name: 'Timmy',
      nickname: 'Timmmaaaahh',
      status: 'alive',
      role: 'Resident Therapy Cat',
      bio: 'Timmy is the sole remaining member of the original six. His innate ability to sense when someone needs a cuddle makes him an invaluable part of the team. His gentle and loving nature provides comfort and warmth to everyone.',
    },
    {
      id: 'wendy',
      name: 'Wendy',
      nickname: 'Wendells \u2014 The Agile Matriarch',
      status: 'alive',
      role: 'Matriarch',
      bio: 'Rescued during a rainstorm at 5 weeks old, Wendy quickly established herself. Following Lucy\u2019s passing, she stepped up as matriarch. Known for her agility and playful nature, she\u2019s a master at soccer with rolled-up paper balls \u2014 but engage on her terms, those claws are real.',
    },
    {
      id: 'jimmy',
      name: 'Jimmy',
      nickname: 'Super Slim Jim',
      status: 'alive',
      role: 'FIV Fighter',
      bio: 'Jimmy is our FIV-positive cat \u2014 a living example of resilience. After a serious illness in late 2023 that nearly took him, he made a remarkable recovery. His laid-back and non-confrontational nature ensures peaceful coexistence with everyone.',
    },
    {
      id: 'bean',
      name: 'Bean',
      nickname: 'The Survivor',
      status: 'alive',
      role: 'Rescue Cat',
      bio: 'Rescued in January 2022 from under a Wendy house at a local shopping centre, shortly after the loss of Moe. Her early days were marked by skittishness and a feral nature, but with time and love she blossomed. Bean\u2019s resilience is a testament to the power of patience.',
    },
    {
      id: 'jeff',
      name: 'Jeff',
      nickname: 'The Wanderer',
      status: 'alive',
      role: 'Rescue Cat',
      bio: 'Found wandering alone in May 2022, Jeff nestled into Ash\u2019s arms with immediate trust. His curious nature leads him to occasional adventures away from home, but his return is always a heartwarming moment. His charismatic personality adds dynamic energy to the club.',
    },
    {
      id: 'frank',
      name: 'Frank',
      nickname: 'Blue Eyes',
      status: 'alive',
      role: 'Stray Visitor',
      bio: 'Frank, the enigmatic stray with striking blue eyes \u2014 named after Frank Sinatra \u2014 has been gracing the household for over a year. Not quite a permanent member of the pack, his peaceful demeanour and ability to coexist harmoniously make him a valued visitor.',
    },
    {
      id: 'lisa',
      name: 'Lisa',
      nickname: 'Granny Cat',
      status: 'memorial',
      role: 'Original Matriarch',
      bio: 'Lisa was with the humans from around 2003 and lived to a grand old age of 17. She looked pretty amazing right up until the end \u2014 a special feline who was usually quite satisfied with the service she got.',
      datePassed: 'July 2020',
    },
    {
      id: 'moe',
      name: 'Moe',
      nickname: 'Fat-Boy-Fat',
      status: 'memorial',
      role: 'Couch Commissioner',
      bio: 'Moe could usually be found on one of the office couches for most of the day. He didn\u2019t do much of anything ever, except silly things \u2014 like going crazy when you blew air at him. He snored the day away and left a massive gap when he left.',
      datePassed: '4 January 2022',
    },
    {
      id: 'lucy',
      name: 'Lucy',
      nickname: 'Dennis the Menace',
      status: 'memorial',
      role: 'Welcoming Committee',
      bio: 'Lucy was a cross-Burmese who took the role of matriarch after Lisa died. She was incredibly talkative, would visit everyone, sit in front of screens, tap your face, and reach out to touch customers from a shelf to say hello. She was the welcoming cat.',
      datePassed: '24 October 2023',
    },
  ],

  /* ── Body sections ── */
  sections: [
    {
      id: 'the-humans',
      title: 'The Humans',
      paragraphs: [
        'Six Cats was created for members to easily browse the product range and find either something to smoke or a medicinal remedy. Whether you are someone wanting to learn more on the subject, a patient with a medical condition or a veteran smoker, you\u2019re welcome in the private space.',
        'The Humans at Six Cats carry a wide range of high-quality homegrown products. The mission is to bring awareness to the way cannabis products are perceived in society, through education, accessibility and shared experience.',
      ],
    },
    {
      id: 'the-cats-intro',
      title: 'The Cats \u2014 Rulers of the Humans',
      paragraphs: [
        'The first cats were adopted in 2003, a brother and sister called Bart and Lisa. They quickly became the mascots for the yearly harvest. Over the years, a total of 9 homeless cats have been adopted, sadly losing 3 to illness along the way.',
        'The current pack plays a vital role in the running of the homegrown operation, making the humans laugh with silly antics and giving some much-needed therapy time. They are the soul of Six Cats.',
      ],
    },
    {
      id: 'craft-cannabis',
      title: 'What Craft Cannabis Means to Us',
      paragraphs: [
        'Led by a passion for growing and consuming cannabis, we are committed to people, product quality and innovation. Our promise is simple: we will provide homegrown and homemade products, cultivated from carefully selected strains, of the highest quality.',
        'A craft product should be produced with intention, with a connection to the community it\u2019s produced in. We do all the growing and harvesting ourselves, hand-trimming with long curing times to develop a craft flower. Small-batch, hand-tended, high-quality flower grown outdoors using organic and environmentally friendly methods.',
        'From in-house skills and consistent genetic profiles to artisanal methods and locally sourced infusions \u2014 quality, trust and choice define Six Cats.',
      ],
    },
  ],

  /* ── Accessibility labels ── */
  a11y: {
    catsListLabel: 'Six Cats \u2014 cat profiles',
    memorialLabel: 'In memoriam \u2014 cats no longer with us',
    gradesLabel: 'Cannabis grading system',
    valuesLabel: 'Six Cats core values',
    cultivationLabel: 'Cultivation methods',
    harvestLabel: 'Harvest phases',
    packagingLabel: 'Packaging and sustainability',
    visionMissionLabel: 'Vision and mission',
  },
};
