/**
 * @fileoverview Sticker graphics data
 * Neon spiral/swirl graphics used as decorative elements
 * throughout the site (FAQ sections, empty states, etc.)
 *
 * @module data/mock/images/sticker-graphics
 * @version 7.0.0 - Added 5 new designs (paint dreams eye, geo pattern eye, rainbow flow eye, create universe eye, abstract blocks eye)
 */

// Placeholder images - Replace with actual sticker graphics
const stickerNeonSpiral = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerNeonVortex = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerCosmicEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerRainbowEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerGalaxyEyeDark = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerGalaxyEyeWave = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerGalaxyEyeNeon = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerPsychedelicEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerUfoBreakfastEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerMushroomEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerStarburstEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerNeonSwirlEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerFractalEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerPrismBurstEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerStarfieldEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerNeonWaveEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerAlienTrio = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerHalftoneEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerMosaicEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerAuroraVortexEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerImagineEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerPaintDreamsEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerGeoPatternEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerRainbowFlowEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerCreateUniverseEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";
const stickerAbstractBlocksEye = "https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=80";

export interface StickerGraphic {
  id: string;
  src: string;
  alt: string;
  label: string;
}

/**
 * Collection of neon sticker graphics
 * Add more stickers here as they become available
 */
export const stickerGraphics: StickerGraphic[] = [
  {
    id: 'neon-spiral',
    src: stickerNeonSpiral,
    alt: 'Neon rainbow spiral graphic',
    label: 'Neon Spiral',
  },
  {
    id: 'neon-vortex',
    src: stickerNeonVortex,
    alt: 'Neon blue and pink vortex graphic',
    label: 'Neon Vortex',
  },
  {
    id: 'cosmic-eye',
    src: stickerCosmicEye,
    alt: 'Cosmic rainbow eye with paintbrush, stars and neon swirls',
    label: 'Cosmic Eye',
  },
  {
    id: 'rainbow-paintbrush-eye',
    src: stickerRainbowEye,
    alt: 'Rainbow paintbrush eye with galaxy iris, purple starfield clouds and sparkles',
    label: 'Rainbow Paintbrush Eye',
  },
  {
    id: 'galaxy-eye-dark',
    src: stickerGalaxyEyeDark,
    alt: 'Rainbow paintbrush eye with galaxy iris on dark geometric crystal background',
    label: 'Galaxy Eye Dark',
  },
  {
    id: 'galaxy-eye-wave',
    src: stickerGalaxyEyeWave,
    alt: 'Rainbow paintbrush eye with galaxy iris on vibrant colourful wave background',
    label: 'Galaxy Eye Wave',
  },
  {
    id: 'galaxy-eye-neon',
    src: stickerGalaxyEyeNeon,
    alt: 'Rainbow paintbrush eye with galaxy iris on neon green and yellow gradient',
    label: 'Galaxy Eye Neon',
  },
  {
    id: 'psychedelic-eye',
    src: stickerPsychedelicEye,
    alt: 'Psychedelic rainbow paintbrush eye surrounded by swirling neon patterns and mandala flowers',
    label: 'Psychedelic Eye',
  },
  {
    id: 'ufo-breakfast-eye',
    src: stickerUfoBreakfastEye,
    alt: 'Rainbow paintbrush eye with UFOs beaming down breakfast foods, pancakes, coffee and cereal',
    label: 'UFO Breakfast Eye',
  },
  {
    id: 'mushroom-landscape-eye',
    src: stickerMushroomEye,
    alt: 'Rainbow paintbrush eye with neon green spiral, psychedelic mushroom landscape and cosmic planets',
    label: 'Mushroom Landscape Eye',
  },
  {
    id: 'starburst-eye',
    src: stickerStarburstEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on radiating neon starburst rays',
    label: 'Starburst Eye',
  },
  {
    id: 'neon-swirl-eye',
    src: stickerNeonSwirlEye,
    alt: 'Rainbow paintbrush eye with galaxy iris surrounded by flowing neon light swirls',
    label: 'Neon Swirl Eye',
  },
  {
    id: 'fractal-eye',
    src: stickerFractalEye,
    alt: 'Rainbow paintbrush eye with deep blue galaxy iris on fractal spiral and sparkle background',
    label: 'Fractal Eye',
  },
  {
    id: 'prism-burst-eye',
    src: stickerPrismBurstEye,
    alt: 'Rainbow paintbrush eye with warm-toned iris on prismatic neon light burst background',
    label: 'Prism Burst Eye',
  },
  {
    id: 'starfield-eye',
    src: stickerStarfieldEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on warm purple-to-orange gradient starfield',
    label: 'Starfield Eye',
  },
  {
    id: 'neon-wave-eye',
    src: stickerNeonWaveEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on vibrant neon green, cyan, yellow and pink swirling wave background with sparkles',
    label: 'Neon Wave Eye',
  },
  {
    id: 'alien-trio',
    src: stickerAlienTrio,
    alt: 'Three neon alien characters with big eyes, glitter makeup and psychedelic UV-reactive patterns on deep blue cosmic background',
    label: 'Alien Trio',
  },
  {
    id: 'halftone-eye',
    src: stickerHalftoneEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on retro halftone dot pattern background in pink, cyan and purple',
    label: 'Halftone Eye',
  },
  {
    id: 'mosaic-eye',
    src: stickerMosaicEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on geometric mosaic puzzle piece background with sparkles',
    label: 'Mosaic Eye',
  },
  {
    id: 'aurora-vortex-eye',
    src: stickerAuroraVortexEye,
    alt: 'Eye with rainbow-tinted iris and red lashes on swirling neon aurora vortex background in green, pink and blue',
    label: 'Aurora Vortex Eye',
  },
  {
    id: 'imagine-eye',
    src: stickerImagineEye,
    alt: 'Rainbow paintbrush eye with galaxy iris and retro text Imagine Your Reality on pastel rainbow wave background',
    label: 'Imagine Eye',
  },
  {
    id: 'paint-dreams-eye',
    src: stickerPaintDreamsEye,
    alt: 'Rainbow paintbrush eye with galaxy iris and retro text Paint Your Dreams on pastel rainbow swirl background with sparkles',
    label: 'Paint Your Dreams Eye',
  },
  {
    id: 'geo-pattern-eye',
    src: stickerGeoPatternEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on vibrant pink and yellow geometric circle and diamond repeating pattern',
    label: 'Geo Pattern Eye',
  },
  {
    id: 'rainbow-flow-eye',
    src: stickerRainbowFlowEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on bold neon cyan, yellow, green and pink flowing wave background with sparkles',
    label: 'Rainbow Flow Eye',
  },
  {
    id: 'create-universe-eye',
    src: stickerCreateUniverseEye,
    alt: 'Rainbow paintbrush eye with galaxy iris and retro text Create Your Universe on pastel rainbow swirl background with sparkles',
    label: 'Create Your Universe Eye',
  },
  {
    id: 'abstract-blocks-eye',
    src: stickerAbstractBlocksEye,
    alt: 'Rainbow paintbrush eye with galaxy iris on abstract colourful geometric blocks, clouds and cosmic shapes background',
    label: 'Abstract Blocks Eye',
  },
];

/**
 * Get a sticker graphic by index (wraps around if index exceeds count)
 * Useful for assigning different stickers to different pages
 */
export function getStickerForPage(pageId: string): StickerGraphic {
  const pageMap: Record<string, number> = {
    home: 0,
    about: 1,
    portfolio: 2,
    blog: 3,
    videos: 4,
    podcasts: 5,
    contact: 6,
    faq: 7,
    feedback: 8,
    'style-guide': 9,
    sitemap: 10,
    search: 11,
    privacy: 12,
    terms: 13,
    archive: 14,
    stickers: 0,
  };

  // Content type mapping
  if (pageId.startsWith('blog')) return stickerGraphics[3]; // Rainbow Paintbrush Eye
  if (pageId.startsWith('portfolio')) return stickerGraphics[2]; // Cosmic Eye
  if (pageId.startsWith('video')) return stickerGraphics[4]; // Galaxy Eye Dark
  if (pageId.startsWith('podcast')) return stickerGraphics[5]; // Galaxy Eye Wave
  if (pageId.startsWith('event')) return stickerGraphics[10]; // Starburst Eye

  const index = pageMap[pageId] !== undefined ? pageMap[pageId] : 0;
  return stickerGraphics[index % stickerGraphics.length];
}

/**
 * Get a random sticker graphic from the collection.
 * Uses a seeded-style approach: pass a string key to get a deterministic
 * but varied result (consistent per key across renders, different across keys).
 * If no key is provided, returns a truly random sticker.
 */
export function getRandomSticker(seed?: string): StickerGraphic {
  if (!seed) {
    const randomIndex = Math.floor(Math.random() * stickerGraphics.length);
    return stickerGraphics[randomIndex];
  }

  // Simple hash from seed string for deterministic selection
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0; // Convert to 32-bit integer
  }
  const index = Math.abs(hash) % stickerGraphics.length;
  return stickerGraphics[index];
}