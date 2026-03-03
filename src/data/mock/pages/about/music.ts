/**
 * @fileoverview Music sub-page data. Extracted from about-subpages.ts (T17).
 */
import type { AboutSubpageData } from './types';

export interface MusicStat { id: string; label: string; value: string; }
export interface MusicArtist { id: string; name: string; genre: string; description: string; }

export interface MusicPageData extends AboutSubpageData {
  pullQuote: string;
  stats: MusicStat[];
  artists: MusicArtist[];
}

export var musicPageData: MusicPageData = {
  hero: {
    badge: 'Music',
    title: '140 BPM heartbeat',
    description: 'Not just music \u2014 medicine. Psytrance didn\u2019t find Ash; it recognised him. Twenty-five years of dancefloors, bass frequencies, and the specific moment when 140 BPM became the heartbeat of understanding.',
  },
  breadcrumbs: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Music' },
  ],
  pullQuote: 'The world inside. The one that runs at 140 BPM and communicates in bass frequencies. That first drop into the music, the lights, the community \u2014 was the night I understood that I\u2019d been looking for this all along.',
  stats: [
    { id: 'stat-bpm', label: 'Heartbeat BPM', value: '140' },
    { id: 'stat-years', label: 'Years dancing', value: '25+' },
    { id: 'stat-continents', label: 'Continents', value: '4' },
    { id: 'stat-festivals', label: 'Festivals attended', value: '200+' },
    { id: 'stat-first', label: 'First festival', value: '1999' },
  ],
  artists: [
    { id: 'artist-hallucinogen', name: 'Hallucinogen', genre: 'Goa Trance / Psytrance', description: 'Simon Posford\u2019s Hallucinogen project defined the sound that first pulled Ash into altered-state music. LSD and Twisted are gateway albums for every psytrance head.' },
    { id: 'artist-shpongle', name: 'Shpongle', genre: 'Psybient / Psychedelic', description: 'Posford and Raja Ram together. Are You Shpongled? is the album Ash has listened to more than any other. A journey into sound that makes the mundane mythical.' },
    { id: 'artist-infected-mushroom', name: 'Infected Mushroom', genre: 'Full-on Psytrance', description: 'The Israeli duo whose tracks soundtracked the Cape Town scene of the early 2000s. Converting Vegetarians was the album playing at the first face-paint session that mattered.' },
    { id: 'artist-astrix', name: 'Astrix', genre: 'Full-on Psytrance', description: 'The precision of Astrix\u2019s production \u2014 every kick, every riser, every breakdown engineered to move a body. His sunrise sets are when festivals reach their peak.' },
    { id: 'artist-electric-universe', name: 'Electric Universe', genre: 'Progressive Psytrance', description: 'Berlin-based. His live sets in the Hasenheide Park open-airs bridged the gap between Cape Town\u2019s outdoor scene and Berlin\u2019s techno-influenced psytrance community.' },
    { id: 'artist-raja-ram', name: 'Raja Ram', genre: 'Goa Trance / Psytrance', description: 'The godfather. Seeing Raja Ram perform live at 80+ years old, still grinning behind his flute, is a reminder that this culture is built for lifers, not tourists.' },
  ],
  sections: [
    { id: 'first-encounters', title: 'First encounters with psytrance', paragraphs: [
      'It was Easter 1999 and Ash was seventeen at Vortex festival in the Western Cape bush. The music hit differently from anything he\u2019d heard before \u2014 not songs with beginnings and endings, but a continuous pulse that seemed to sync with his nervous system. Psytrance didn\u2019t ask to be understood; it asked to be felt.',
      'By December 1999, wearing a yellow suit from a charity shop, he had his first truly transformative dancefloor experience. The world outside had never made sense. The world inside \u2014 the one running at 140 BPM \u2014 made perfect sense. By morning they were calling him the Chicken Man. By the following year, he\u2019d graduated to the Cow Man. But that first drop was the night the operating system updated.',
      'In the early 2000s, Ash attended two to four festivals a month in Cape Town. This wasn\u2019t casual attendance. This was a way of life. He went to every single Alien Safari and every single Vortex for years. The dancefloor was classroom, gallery, church, and community centre. After 25+ years immersed in psytrance, his heart now beats for house and techno too \u2014 the roots remain, but the branches have grown. The evolution is natural: the dancefloor teaches you to follow the energy, not the genre.',
    ]},
    { id: 'dancefloor-classroom', title: 'The dancefloor as classroom', paragraphs: [
      'Psytrance culture shaped Ash\u2019s identity, creative vision, and community long before he picked up a paintbrush. Twenty years of dancefloor immersion \u2014 understanding what makes someone light up under UV, how bodies move to specific frequencies, when a crowd becomes a single organism \u2014 all of this became the foundation for his UV art.',
      'Working in festival conditions \u2014 loud, dark, crowded, constantly moving \u2014 is what shaped the ambidextrous painting technique. The dancefloor selected for speed, adaptability, and reading energy in real time. The art evolved not despite the chaos, but because of it.',
      'The ADHD brain found its natural habitat here. The sensory richness, the freedom from convention, the community of fellow misfits who communicate in bass frequencies rather than small talk. When the environment matches the wiring, everything clicks.',
    ]},
    { id: 'synesthesia', title: 'Music + UV art: the synesthesia effect', paragraphs: [
      'Ash doesn\u2019t sketch designs beforehand. He reads the energy of the music and lets it guide the brush. A driving bassline produces sharp geometric patterns. A melodic breakdown opens into flowing organic shapes. The relationship between what he hears and what he paints is so direct that people watching often describe it as visible music.',
      'Under UV light, this connection intensifies. The same frequencies that make a body move make neon paint appear to breathe and pulse. It\u2019s not synesthesia in the clinical sense \u2014 it\u2019s something trained over twenty-five years of dancing and painting in the same space. The dancefloor is simultaneously studio, gallery, and concert hall.',
      'The best painting sessions happen during sunrise sets. The transition from darkness to light, from UV cannons to natural sun, creates a shift in energy that changes everything. Faces painted in neon take on a different character as dawn breaks. The art evolves with the music, with the light, with the collective energy of hundreds of people who\u2019ve danced through the night together.',
    ]},
    { id: 'sacred-bass', title: 'Sacred space in bass frequencies', paragraphs: [
      'The dancefloor became sacred space \u2014 never about escape, always about deeper engagement with reality. Integration through dancing, cycling, creating, and trusted friendships. Ego is optional; connection is everything.',
      'Festival energy moves fast. The best art happens in the moment \u2014 spontaneous connections on the dancefloor, seeking out the radiant souls amplifying the energy. If the vibe matches, magic happens. If it doesn\u2019t, move on. No ego, no business cards, no Instagram handles. Just paint, music, and presence.',
      'From Cape Town bush parties to Berlin warehouse raves to Thai island gatherings, the same truth holds: the less you carry, the further you go. This applies to luggage, to ego, and to creative baggage. Festival selection now follows clear criteria \u2014 quality over quantity, energy over hype. And always with hearing protection: Loop Experience 2 ear plugs, because longevity on the dancefloor means protecting the instrument you need most. Show up with paint, an open mind, and trust in the bass. The dancefloor will do the rest.',
    ]},
    { id: 'playlists', title: 'Curated playlists', paragraphs: [
      'Ash curates playlists that trace the journey from early Goa trance through full-on psytrance to the progressive and dark psy sounds that dominate his current rotation. Each playlist is a time capsule \u2014 the Cape Town years, the Berlin discovery era, the festival pilgrimage mixes.',
      'The \u201cSunrise Set\u201d playlist is the one he shares most: the tracks that soundtrack those 5am\u20137am golden hours when the dancefloor is at its most intimate and the music shifts from driving to transcendent. These are the moments when UV paint glows brightest and faces become art installations.',
    ]},
  ],
};
