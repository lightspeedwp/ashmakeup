/**
 * @fileoverview Full book page content for the HTML5 page flipper eBook reader.
 *
 * 4-part structure:
 *   Part 1 — Early Life (Pre-Y2K)
 *   Part 2 — Carefree 20s & Early
 *   Part 3 — Nomadic Life Begins Before COVID (BC)
 *   Part 4 — Re-emergence & Finding Myself Again
 *
 * Content sourced from /content/book/this-one-time.md and /content/personal/.
 * Design: neon pink cover, neon yellow text on atomic black.
 *
 * @module data/mock/pages/ebook-pages
 * @version 2.0.0
 */

/* ── Page type discriminators ── */

export type BookPageType =
  | 'cover'
  | 'inside-front'
  | 'title'
  | 'dedication'
  | 'epigraph'
  | 'toc'
  | 'foreword'
  | 'part-title'
  | 'chapter-start'
  | 'chapter-content'
  | 'appendix-title'
  | 'afterword'
  | 'about-author'
  | 'back-cover';

export interface BookPage {
  id: string;
  type: BookPageType;
  /** Displayed in footer area */
  pageNumber?: number;
  /** Chapter number (chapter pages only) */
  chapter?: number;
  /** Part number (part-title pages only) */
  part?: number;
  /** Title for chapter-start, section headings, etc. */
  title?: string;
  /** Subtitle / epigraph */
  subtitle?: string;
  /** Body paragraphs */
  paragraphs?: string[];
  /** TOC items — now with optional part label and page number */
  tocItems?: { number: number; title: string; partLabel?: string; page?: number }[];
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   BOOK PAGES
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export const bookPages: BookPage[] = [

  /* ═══════════════════════════════════════════════════════════
     FRONT MATTER
     ═══════════════════════════════════════════════════════════ */

  /* ── 0: Front Cover ── */
  {
    id: 'cover',
    type: 'cover',
    title: 'This one time on acid\u2026',
    subtitle: 'Stories, lessons & the making of a neon soul',
  },

  /* ── 1: Inside Front ── */
  {
    id: 'inside-front',
    type: 'inside-front',
    paragraphs: [
      'First edition \u2014 work in progress',
      'All content \u00A9 Ash Shaw 2026',
      'Neon vs Atomic Black',
    ],
  },

  /* ── 2: Title Page ── */
  {
    id: 'title-page',
    type: 'title',
    pageNumber: 1,
    title: 'This one time on acid\u2026',
    subtitle: 'Stories, lessons & the making of a neon soul',
    paragraphs: ['Ash Shaw'],
  },

  /* ── 3: Dedication ── */
  {
    id: 'dedication',
    type: 'dedication',
    pageNumber: 2,
    paragraphs: [
      'For the ones who dance until sunrise and still see the world differently when the sun comes up.',
      'For the misfits, the questioners, the ones whose brains run at 200\u202Fkm/h.',
      'For Lucy.',
    ],
  },

  /* ── 4: Epigraph ── */
  {
    id: 'epigraph',
    type: 'epigraph',
    pageNumber: 3,
    paragraphs: [
      '\u201CIt is never one thing. Usually it is the culmination of many experiences over a period that finally crystallise into understanding.\u201D',
      '\u2014 Ash Shaw',
    ],
  },

  /* ── 5: Table of Contents (page 1) ── */
  {
    id: 'toc-1',
    type: 'toc',
    pageNumber: 4,
    title: 'Contents',
    tocItems: [
      { number: 0, title: 'Part one \u2014 Early life (pre-Y2K)', partLabel: 'I', page: 8 },
      { number: 1, title: 'Snails in the garden', page: 9 },
      { number: 2, title: 'Wired different', page: 12 },
      { number: 3, title: 'Half colours', page: 15 },
      { number: 4, title: 'The first drop', page: 18 },
      { number: 0, title: 'Part two \u2014 Carefree 20s & early', partLabel: 'II', page: 21 },
      { number: 5, title: 'Eighty-six hours', page: 22 },
      { number: 6, title: 'The costume evolution', page: 28 },
      { number: 7, title: 'The dancefloor gave me everything', page: 33 },
      { number: 8, title: 'LSD', page: 38 },
      { number: 9, title: 'Island time', page: 41 },
    ],
  },

  /* ── 6: Table of Contents (page 2) ── */
  {
    id: 'toc-2',
    type: 'toc',
    pageNumber: 5,
    title: 'Contents (continued)',
    tocItems: [
      { number: 0, title: 'Part three \u2014 Nomadic life begins (BC)', partLabel: 'III', page: 46 },
      { number: 10, title: 'Six Cats: the green garden', page: 47 },
      { number: 11, title: 'Berlin calling', page: 58 },
      { number: 12, title: 'The loaded bike', page: 61 },
      { number: 13, title: 'Neon revelations', page: 64 },
      { number: 14, title: 'The pilgrimage', page: 70 },
      { number: 0, title: 'Part four \u2014 Re-emergence & finding myself again', partLabel: 'IV', page: 73 },
      { number: 15, title: 'The artist\u2019s lifestyle', page: 74 },
      { number: 16, title: 'Dance like no one\u2019s watching', page: 79 },
      { number: 17, title: 'One million steps', page: 82 },
      { number: 18, title: 'Freedom as operating principle', page: 85 },
      { number: 19, title: 'Twenty-three years', page: 88 },
      { number: 20, title: 'The cumulative effect', page: 98 },
    ],
  },

  /* ── 6.5: Table of Contents (page 3) ── */
  {
    id: 'toc-3',
    type: 'toc',
    pageNumber: 6,
    title: 'Contents (continued)',
    tocItems: [
      { number: 0, title: 'Appendices', partLabel: '\u2014', page: 102 },
      { number: 0, title: '  Appendix A \u2014 Dance like no one\u2019s watching', partLabel: '', page: 103 },
      { number: 0, title: '  Appendix B \u2014 The tribes', partLabel: '', page: 106 },
    ],
  },

  /* ── 7: Foreword ── */
  {
    id: 'foreword',
    type: 'foreword',
    pageNumber: 7,
    title: 'How to read this',
    paragraphs: [
      'These are draft excerpts. They\u2019re rough, honest, and unpolished by design. The book is being written in the same way Ash paints \u2014 fast first strokes to capture the energy, refined later to bring out the detail.',
      'The four parts trace a life from small-town South Africa through the dancefloors of three continents. Part One is the soil: childhood, neurodivergence, and a brain that didn\u2019t fit the world it was born into. Part Two is the awakening: the festivals, the relationships, and the business born from restlessness. Part Three is the road: Berlin, bicycles, and the night UV paint changed everything. Part Four is the harvest: the return to self, the creative record, and the cumulative effect of a life lived in full colour.',
      'Read them as snapshots of a work in progress. Some passages will make it to the final book, others will evolve beyond recognition. That\u2019s the process. The book arrives when it\u2019s ready, not before.',
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     PART ONE — EARLY LIFE (PRE-Y2K)
     ═══════════════════════════════════════════════════════════ */

  /* ── 8: Part 1 Title ── */
  {
    id: 'part1-title',
    type: 'part-title',
    pageNumber: 8,
    part: 1,
    title: 'Early life',
    subtitle: 'Pre-Y2K',
  },

  /* ── Chapter 1: Snails in the Garden ── */
  {
    id: 'ch1-title',
    type: 'chapter-start',
    pageNumber: 9,
    chapter: 1,
    title: 'Snails in the garden',
    subtitle: 'An only child in a small Afrikaans town, building worlds nobody asked for.',
  },

  {
    id: 'ch1-content-1',
    type: 'chapter-content',
    pageNumber: 10,
    chapter: 1,
    paragraphs: [
      'I was born in Paarl, a small town in the Western Cape of South Africa, surrounded by vineyards and mountains and the kind of quiet that drives certain types of children slightly mad. I was an only child. I spent a lot of time on my own or with my parents, which meant I was engaging with adults from a young age. My mum encouraged me as much as possible.',
      'My parents modelled the values that still drive me today: honesty, hard work, dedication, good business ethics, and a good, honest set of morals. The foundation for everything that followed was poured in that small house in Paarl.',
      'One of my earliest memories of earning anything was collecting snails in the garden. My parents would pay me a few cents per snail. It doesn\u2019t sound like much, but it was the first time I connected effort to reward \u2014 and the first sign that I\u2019d always prefer to figure out my own way to make things work.',
    ],
  },

  {
    id: 'ch1-content-2',
    type: 'chapter-content',
    pageNumber: 11,
    chapter: 1,
    paragraphs: [
      'I spent hours alone in my room building intricate Lego systems. Towers, complex multi-level structures spanning an entire bookshelf that became my Lego world. The Lego men had systems to move up and down different levels. I would spend hours completely absorbed, amusing myself, building something nobody asked for with an intensity that should have been a clue about what was coming.',
      'When I was twelve or thirteen, my dad gave me a gold computer. I needed to set it up with Windows myself. I went to a friend Guy for a bolt and got hold of Windows 3.1 installation discs on stiffy drives \u2014 about twelve discs to install Windows. I taught myself how to install it, then taught myself how to strip the computer and put it back together. My friend Ron from up the road helped me resolve some hardware issues and taught me how to troubleshoot basic computer hardware problems.',
      'This was the beginning of the self-taught tech journey. Everything I\u2019ve built since \u2014 WordPress agencies, design systems, AI workflows \u2014 started with a twelve-year-old and twelve stiffy discs.',
    ],
  },

  /* ── Chapter 2: Wired Different ── */
  {
    id: 'ch2-title',
    type: 'chapter-start',
    pageNumber: 12,
    chapter: 2,
    title: 'Wired different',
    subtitle: 'ADHD, Aquarius, and the feeling that the world was running on a different operating system.',
  },

  {
    id: 'ch2-content-1',
    type: 'chapter-content',
    pageNumber: 13,
    chapter: 2,
    paragraphs: [
      'Here\u2019s the thing about ADHD that nobody tells you when you\u2019re growing up in a small town in the Western Cape in the 1990s: it\u2019s not a deficit of attention. It\u2019s a surplus of it, all going in directions that school wasn\u2019t designed to handle.',
      'I could spend six hours building a perfect model of something nobody asked for, but I couldn\u2019t sit through forty minutes of mathematics. My brain didn\u2019t reject information \u2014 it rejected boredom. Feed it something interesting and it would devour it with a focus so intense it scared my teachers.',
      'At Paarl Junior School, there was one teacher who saw it differently. Miss Scott recognised the potential from Standard 1, then again in Standard 3, 4, and 5. She was our English and History teacher. In a school system that didn\u2019t know how to handle my brain, she was the teacher who did something different \u2014 she recognised what was there and encouraged it instead of trying to suppress it.',
    ],
  },

  {
    id: 'ch2-content-2',
    type: 'chapter-content',
    pageNumber: 14,
    chapter: 2,
    paragraphs: [
      'I was bullied because I was small. I was a bit of an outlier \u2014 friendly with everyone, had friends in different schools, but wasn\u2019t the most popular kid. One particularly painful memory: the matric kids made me stand on stage and apologise to the entire school for not knowing the inter-school songs. I still cannot remember lyrics.',
      'That kind of public humiliation shapes you. It fed a quiet determination \u2014 a need to make others feel seen and valued. The kid who was made to feel small now makes other people feel radiant, confident, and alive under UV light. The kid who was publicly humiliated now creates moments of public celebration for others.',
      'The Aquarian need to question everything, to reject convention, to see patterns others miss \u2014 amplified by an ADHD brain that moves at 200\u202Fkm/h and makes connections across disciplines, cultures, and altered states. For years, this combination felt like a curse. Too weird for the normal world, too scattered for the creative one. It took me twenty years to understand that this wasn\u2019t broken. It was a feature, not a bug. I just needed to find the right operating system.',
    ],
  },

  /* ── Chapter 3: Half Colours ── */
  {
    id: 'ch3-title',
    type: 'chapter-start',
    pageNumber: 15,
    chapter: 3,
    title: 'Half colours',
    subtitle: 'Racing bicycles, the 2 o\u2019clock club, and finding the first thing that matched the wiring.',
  },

  {
    id: 'ch3-content-1',
    type: 'chapter-content',
    pageNumber: 16,
    chapter: 3,
    paragraphs: [
      'While the classroom was a struggle, the sports field was where I thrived. I started racing bicycles in 1994, age thirteen. My first provincial mountain bike race was in 1995. By 1997 I was representing the Western Province cross-country mountain bike team. I got my colours three years running: third in 1997, first in 1998 \u2014 Western Province champion \u2014 and third again in 1999.',
      'Paarl Boys High called me the \u201C2 o\u2019clock club\u201D because at 2pm, when other kids stay for after-school activities, I went home to train on my bicycle. I earned half colours at school for becoming provincial champion. I even created myself a cycling portfolio to try to get sponsorship \u2014 impressive results for a kid, even if sponsorship was difficult to secure.',
      'This was the first proof of something I didn\u2019t have language for yet: when the environment matches the wiring, the ADHD brain doesn\u2019t just function \u2014 it excels. The classroom wanted me to sit still. The mountain bike trail wanted exactly what my brain provides: intensity, endurance, total commitment, and the ability to process a hundred inputs at speed.',
    ],
  },

  {
    id: 'ch3-content-2',
    type: 'chapter-content',
    pageNumber: 17,
    chapter: 3,
    paragraphs: [
      'In Standard 9 and 10 I worked in Tyger Valley at a coffee shop on Sundays for extra cash. I spoke Afrikaans fluently \u2014 growing up in an Afrikaans town made it essential. Still speak it today.',
      'I wasn\u2019t an average writer initially. With practice over my life, I\u2019ve become a better writer. It doesn\u2019t come naturally, but I\u2019m a good communicator \u2014 able to document what\u2019s in my head and get my message across clearly. That\u2019s probably the ADHD influence too: the thoughts move fast, and the challenge is always catching them in words before they evolve into the next idea.',
      'I finished matric at age seventeen. When I look back at what I\u2019m most proud of from that time, it\u2019s the cycling. Not the academic results or the social status, but the decision to pursue something I was passionate about, the discipline to train while everyone else was socialising, and the entrepreneurial spirit to build a portfolio and chase sponsorship at an age when most kids are just trying to get through school. That thread \u2014 the self-directed, autonomous, \u201CI\u2019ll figure it out myself\u201D energy \u2014 never went away.',
    ],
  },

  /* ── Chapter 4: The First Drop ── */
  {
    id: 'ch4-title',
    type: 'chapter-start',
    pageNumber: 18,
    chapter: 4,
    title: 'The first drop',
    subtitle: 'Every journey starts somewhere impossible. This one started on a dancefloor in the Western Cape bush.',
  },

  {
    id: 'ch4-content-1',
    type: 'chapter-content',
    pageNumber: 19,
    chapter: 4,
    paragraphs: [
      'In 1999 I enrolled at Daemelin College to study marketing while training extensively for the mountain bike championships. It was also the year I went to my first festival \u2014 the Vortex Easter weekend festival. My second festival was the December Vortex, which was my first transformative experience with Lucy.',
      'It was December 1999 and the world was ending. Or starting. Depending on who you asked at the Vortex festival that weekend, the millennium bug would either wipe out civilisation or usher in a new golden age.',
      'I was seventeen and I didn\u2019t care about either outcome. I was on a dancefloor in the Western Cape bush, wearing a yellow suit I\u2019d found at a charity shop, and for the first time in my life, the world made perfect sense. Not the world outside \u2014 that place had never made sense. Not for a kid with undiagnosed ADHD who spent hours alone building Lego worlds, who taught himself to install Windows from twelve stiffy discs. The world inside. The one that runs at 140\u202FBPM and communicates in bass frequencies.',
    ],
  },

  {
    id: 'ch4-content-2',
    type: 'chapter-content',
    pageNumber: 20,
    chapter: 4,
    paragraphs: [
      'By morning they were calling me the Chicken Man.',
      'Then there was the Millennium Vortex for New Year\u2019s 1999/2000. The legendary party. Somewhere between the old world and the new one, on a dancefloor in the bush, I found the operating system my brain had been looking for. The sensory richness, the freedom from convention, the community of fellow misfits. The dancefloor didn\u2019t need me to sit still. It needed exactly what ADHD provides: energy, spontaneity, and the ability to process a hundred inputs simultaneously.',
      'This wasn\u2019t a hobby I\u2019d picked up. This was a homecoming. The last year of formal education and the first year of real education happened simultaneously. One ended at a college campus. The other began on a dancefloor in the bush and has never stopped.',
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     PART TWO — CAREFREE 20s & EARLY
     ═══════════════════════════════════════════════════════════ */

  /* ── Part 2 Title ── */
  {
    id: 'part2-title',
    type: 'part-title',
    pageNumber: 21,
    part: 2,
    title: 'Carefree 20s & early',
    subtitle: 'The scene years, the people, the business',
  },

  /* ── Chapter 5: Eighty-Six Hours ── */
  {
    id: 'ch5-title',
    type: 'chapter-start',
    pageNumber: 22,
    chapter: 5,
    title: 'Eighty-six hours',
    subtitle: 'A bus to Zambia, three border crossings, and three and a half minutes that rearranged everything.',
  },

  {
    id: 'ch5-content-1',
    type: 'chapter-content',
    pageNumber: 23,
    chapter: 5,
    paragraphs: [
      'The first international journey. The defining experience. Solipse \u2014 the solar eclipse festival in Zambia, 2001.',
      'We caught a bus from Cape Town to a few hours above Lusaka \u2014 eighty-six hours from Cape Town to the endpoint. The endpoint was somewhere on the solar eclipse line where the eclipse was the longest, out in the bush. Three border crossings: South Africa into Botswana. Botswana into Zimbabwe at Livingstone. Zimbabwe into Zambia at the Chobe River.',
      'Each border felt like passing through a portal into somewhere more real, more raw, more alive. Three weeks in the bush. One week of festival. Three and a half minutes of solar eclipse \u2014 three and a half minutes of absolute darkness in the middle of the African bush, surrounded by a thousand strangers who felt like family.',
    ],
  },

  {
    id: 'ch5-content-2',
    type: 'chapter-content',
    pageNumber: 24,
    chapter: 5,
    paragraphs: [
      'I was twenty years old, and I had no idea that those three and a half minutes would rearrange my understanding of what matters.',
      'We met some of the most amazing people who are still friends and part of our lives today. This travel experience shaped me as a young adult. It taught me that the world is vast and generous and that the people you meet in extraordinary circumstances become family in ways that ordinary life can\u2019t replicate.',
      'The eighty-six-hour bus ride, the three border crossings, the three weeks in the bush \u2014 Barbara and I went through this together and came out bonded. She was with me, and the trip sealed our unity. When you survive something that wild together, you don\u2019t just have a relationship \u2014 you have a story that nobody else will ever fully understand.',
    ],
  },

  {
    id: 'ch5-content-3',
    type: 'chapter-content',
    pageNumber: 25,
    chapter: 5,
    paragraphs: [
      'Three border crossings in eighty-six hours. Each one a portal.',
      'The first: South Africa into Botswana. The crossing was chaos \u2014 queues of overloaded trucks, hawkers selling cold drinks through bus windows, paperwork in triplicate. But the stamp in the passport was electric. I had never left the country before. The moment the bus pulled away from the South African side, the landscape shifted. Botswana was wide open, flat, endless. The excitement was physical \u2014 chest tight, eyes wide, everything unfamiliar and thrilling.',
      'The second: Botswana into Zimbabwe at Livingstone. Victoria Falls energy filled the air before we could see the water \u2014 the mist, the roar, the sense that nature was doing something magnificent nearby. The border post was smaller, more relaxed. Zimbabwe felt different again \u2014 greener, more lush, the air heavier with moisture.',
      'The third: Zimbabwe into Zambia at the Chobe River. The final crossing. A small ferry, the river wide and brown, hippos visible downstream. Zambia on the other side felt like arriving at the edge of the known world. Each country had been more raw than the last, more alive, less filtered. By the time we reached the festival site \u2014 a clearing in the bush near the solar eclipse line \u2014 we had shed layers of who we thought we were.',
    ],
  },

  {
    id: 'ch5-content-4',
    type: 'chapter-content',
    pageNumber: 26,
    chapter: 5,
    paragraphs: [
      'Three and a half minutes. That is how long totality lasted. Three and a half minutes that rearranged everything.',
      'The countdown began hours before, as the moon started its slow bite out of the sun. The light changed first \u2014 not dimming like sunset, but flattening. Colours lost their warmth. Shadows sharpened to razor edges. The temperature dropped. Birds went quiet. The bush held its breath.',
      'Then totality. The sun vanished. The sky went dark \u2014 not night-dark, but a deep, alien twilight with a 360-degree sunset glow along the horizon. Stars appeared. The solar corona blazed around the black disc of the moon \u2014 a halo of white fire, streamers of plasma reaching into space. A thousand people standing in the African bush fell absolutely silent.',
      'Then the sound came. A roar. Not of fear but of awe \u2014 a collective release of something primal, a thousand voices erupting because the human nervous system has no other response to witnessing the cosmic machinery laid bare. People were crying. People were laughing. People were holding strangers.',
      'Three and a half minutes. Then the diamond ring \u2014 the first bead of sunlight piercing back around the moon\u2019s edge \u2014 and the world snapped back. But I didn\u2019t snap back. Something had shifted. At twenty years old, standing in the Zambian bush, I understood for the first time that the universe is vastly larger than any plan I could make, and that the moments that matter most are the ones you cannot predict or control.',
    ],
  },

  {
    id: 'ch5-content-5',
    type: 'chapter-content',
    pageNumber: 27,
    chapter: 5,
    paragraphs: [
      'The people we met at Solipse became lifelong friends. That is the alchemy of extraordinary circumstances \u2014 you bypass the small talk, the slow getting-to-know-you, the careful social navigation. When you have shared three weeks in the bush, a solar eclipse, and an eighty-six-hour bus ride, you arrive at a depth of connection that ordinary life takes years to build.',
      'Some of those people are still in our lives twenty-five years later. Scattered across continents, linked by a shared memory so vivid that a single reference \u2014 "the bus", "the eclipse", "the border crossing" \u2014 brings it all flooding back. That is the power of travel as transformation, not vacation. A vacation changes your scenery. A journey changes your wiring.',
      'The return journey was another eighty-six hours. The same bus, the same borders, the same distance. But we were different people. Barbara and I were bonded in a way that ordinary dating never achieves. We had survived something wild together, and that shared survival became the foundation of a relationship that would shape the next two decades.',
      'I came home knowing two things I hadn\u2019t known before: that the world is generous beyond measure if you say yes to it, and that the people you meet at the edges of your comfort zone become the most important people in your life. Solipse was the first journey. It set the template for everything that followed.',
    ],
  },

  /* ── Chapter 6: The Costume Evolution ── */
  {
    id: 'ch6-title',
    type: 'chapter-start',
    pageNumber: 28,
    chapter: 6,
    title: 'The costume evolution',
    subtitle: 'From the Chicken Man to the Cow Man \u2014 and the identity that was building underneath.',
  },

  {
    id: 'ch6-content-1',
    type: 'chapter-content',
    pageNumber: 29,
    chapter: 6,
    paragraphs: [
      'In the early 2000s, I discovered a love for dancing at festivals and conceptualised the idea of dressing up at parties. The evolution happened in stages, and each stage taught me something about visibility, identity, and the courage to be different.',
      'First, the yellow suit \u2014 found at a charity shop, first worn at a festival, earned me the nickname the Chicken Man. This was the beginning of standing out on purpose, of making the dancefloor into a stage. Then the red suit \u2014 escalation. If one bold suit works, try another.',
      'Then the white and black cow suit. The pivot to character. No longer just dressed up \u2014 now in costume. The brown and beige cow suit cemented it: I became known as the Cow Man for many years. People at festivals STILL ask if I\u2019m the guy who used to dress as the cow man.',
    ],
  },

  {
    id: 'ch6-content-2',
    type: 'chapter-content',
    pageNumber: 30,
    chapter: 6,
    paragraphs: [
      'In the 2000s I was going to two to four festivals a month in Cape Town. Every single Alien Safari. Every single Vortex. This wasn\u2019t casual attendance. This was a way of life. The dancefloor was classroom, gallery, church, and community centre.',
      'The psytrance buddies became a staple in life. The scene was small enough to know everyone but big enough to always surprise you. The South African outdoor trance scene in the early 2000s was something magical \u2014 wild landscapes, clear stars, proper sound systems, and a community that genuinely cared about each other.',
      'I became very well known at parties because of the unique outfits. But what I didn\u2019t understand yet was that the costumes were preparation. Twenty years of standing out on purpose, of being the most visible person on every dancefloor, of reading energy and crowd dynamics \u2014 all of it was unconscious training for the moment I\u2019d finally pick up a paintbrush.',
    ],
  },

  {
    id: 'ch6-content-3',
    type: 'chapter-content',
    pageNumber: 31,
    chapter: 6,
    paragraphs: [
      'The costume timeline tells the story of an identity being built without the owner knowing it.',
      '1999\u20132000: The yellow suit. Chicken Man era. Vortex festivals in the Western Cape mountains, Alien Safari in the Boland hills. A twenty-year-old in a charity-shop suit dancing like nobody was watching \u2014 except everyone was. That was the point. The first taste of what it feels like to be the most visible person in the room.',
      '2001\u20132003: The red suit. Escalation era. If one loud suit works, try louder. The red suit said: I am here, I am not apologising, and I am going to dance for twelve hours straight. People started recognising me between festivals. "You\u2019re the suit guy." Identity was forming.',
      '2003\u20132006: The white and black cow suit. Character pivot. This wasn\u2019t just dressing up any more \u2014 this was becoming a character. The cow suit had a narrative. People didn\u2019t just notice me; they remembered me. They told stories about me to friends who hadn\u2019t been there.',
      '2006\u20132010: The brown and beige cow suit. "The Cow Man" identity fully cemented. At every festival, without fail, someone would shout across the dancefloor: "It\u2019s the Cow Man!" Years later, people at festivals would approach me: "Are you the guy who used to dress as a cow?" The recognition moments accumulated into something bigger than a costume \u2014 they became proof that standing out is a practice, not a talent.',
      '2010\u20132018: Various themed outfits. The evolution beyond a single character. Onesies, UV-reactive clothing, painted designs on fabric. The costumes were getting closer to the art that was coming \u2014 closer to the skin, closer to the body, closer to painting.',
    ],
  },

  {
    id: 'ch6-content-4',
    type: 'chapter-content',
    pageNumber: 32,
    chapter: 6,
    paragraphs: [
      'The psychological insight only landed in retrospect. Costumes were confidence training.',
      'Every time I put on a loud suit and walked onto a dancefloor, I was practising something essential: the willingness to be seen. Not just seen but stared at, pointed at, photographed, approached by strangers. That takes a kind of courage that builds slowly, one festival at a time, one wild outfit at a time. By the time I picked up UV paint in 2019, I had twenty years of practice being the centre of attention. The transition was seamless.',
      'The bridge from wearing costumes to being the costume was the final step. The suits and onesies were armour \u2014 external identity layered on top of the person. UV paint on skin is the opposite. It transforms the person themselves. No hiding behind fabric. The art is on you, part of you, inseparable from you.',
      'Twenty years of costumes taught me one thing that made me a better makeup artist: standing out is a skill, and once you\u2019ve mastered it for yourself, you can teach others to do it. That is what I do now. I don\u2019t just paint faces \u2014 I give people permission to be the most visible person on the dancefloor. I know what that feels like because I have been doing it since 1999.',
    ],
  },

  /* ── Chapter 7: The Dancefloor Gave Me Everything ── */
  {
    id: 'ch7-title',
    type: 'chapter-start',
    pageNumber: 33,
    chapter: 7,
    title: 'The dancefloor gave me everything',
    subtitle: 'The people, the connections, the life built on 140 BPM.',
  },

  {
    id: 'ch7-content-1',
    type: 'chapter-content',
    pageNumber: 34,
    chapter: 7,
    paragraphs: [
      'The significant relationships in my life share a common thread: they were all forged on the dancefloor, in festival conditions, in moments of shared intensity. Not at dinner parties or through dating apps \u2014 on the trance floor, at 3am, in the glow of UV light.',
      'I met Barbara at a December Vortex. Front left speaker. She was older, I was young and wearing the yellow suit. I protected her against someone from my hometown. We connected deeply on the dancefloor immediately \u2014 that\u2019s the pattern of my life. The dancefloor as the place where real connections happen.',
      'She became one of the most important people in my life. We went through every chapter of the story together. The bus to Zambia sealed it. Barbara is one of my best friends, if not my best friend. We run two businesses together \u2014 LightSpeed and Six Cats. We separated amicably, found clear boundaries, and maintained the friendship and partnerships. That\u2019s not a failure of relationships. It\u2019s the highest possible outcome: love that transforms rather than diminishes.',
    ],
  },

  {
    id: 'ch7-content-2',
    type: 'chapter-content',
    pageNumber: 35,
    chapter: 7,
    paragraphs: [
      'The lesson the dancefloor teaches you, if you stay long enough, is that ego is optional. Connection is everything. The most beautiful art happens when you stop trying to be impressive and start trying to be honest.',
      'After twenty-five years my heart now beats for house and techno too \u2014 the roots remain, but the dancefloor taught me to follow the energy, not the genre. I\u2019m really particular about music now. I\u2019m a bit over trance so it\u2019s got to be really good trance for me to enjoy it. Times change, people change, and you discover new things.',
      'But the dancefloor itself never changes. It\u2019s still the place where ADHD brains find their natural operating environment. Where sensory richness replaces the boredom of conventional spaces. Where community forms without the filters of daily life. Where the kid who was bullied for being small can make strangers feel like the most radiant people in the room.',
    ],
  },

  {
    id: 'ch7-content-3',
    type: 'chapter-content',
    pageNumber: 36,
    chapter: 7,
    paragraphs: [
      'The South African outdoor trance scene in the early 2000s was a golden era. There is no other way to describe it.',
      'Alien Safari was the flagship party series \u2014 legendary sound systems set up in the Boland mountains outside Cape Town, the Stellenbosch winelands as backdrop, and a community that treated every gathering as sacred. Vortex was the spiritual calendar: Easter Vortex and December Vortex were the fixed points around which the entire year was organised. You didn\u2019t ask "are you going to Vortex?" \u2014 you asked "which campsite are you at?"',
      'The Cape Town mountain venues were extraordinary. Dance under the stars with the Table Mountain range visible on the horizon. The Boland backdrop, Western Cape summer, clear skies from October to March. At peak, there were two to four festivals per month. Every weekend was an option. The scene was intimate enough that everyone knew each other but large enough that you could always meet someone new.',
      'The values were real, not performative. Community care \u2014 people looked out for each other. Environmental respect \u2014 "leave no trace" was enforced by the community itself. Creative freedom \u2014 nobody judged your outfit, your dancing, your way of being. The small scene meant genuine relationships, not transactional networking. This was the community that raised me from twenty to thirty, that taught me everything I know about belonging.',
    ],
  },

  {
    id: 'ch7-content-4',
    type: 'chapter-content',
    pageNumber: 37,
    chapter: 7,
    paragraphs: [
      'Here is something I only understood after my ADHD diagnosis at forty: the dancefloor was teaching me to manage my neurology years before I had a name for it.',
      'Sensory richness replacing boredom. The ADHD brain craves stimulation \u2014 it literally underproduces dopamine, so it seeks environments that provide it. A conventional office, a quiet restaurant, a lecture hall \u2014 these are torture chambers for the ADHD brain. A dancefloor at 3am with bass at 140 BPM, UV lights strobing, a hundred bodies moving in synchrony, and the smell of incense and dust? That is the exact stimulation level the ADHD brain needs to feel calm.',
      'Physical endurance as a focus mechanism. Dancing for eight, ten, twelve hours straight is not a party trick \u2014 it is a regulation strategy. The body in motion anchors the mind. Stop moving, and the thoughts scatter. Keep moving, and everything aligns. This is the same principle behind why I cycle 40 kilometres a day: movement is medication.',
      'Community as anchor. The ADHD brain struggles with executive function \u2014 planning, organising, following through. But community provides external structure. The festival calendar is the schedule. The friends are the accountability. The dancefloor is the destination. You don\u2019t need to plan when the community plans for you.',
      'The evolution from psytrance purist to house and techno appreciation was not betrayal \u2014 it was growth. The dancefloor remains sacred. Not as escape from life but as deeper engagement with it. The genre changes, the BPM shifts, the venue evolves. But the fundamental truth is permanent: the dancefloor is where I am most myself.',
    ],
  },

  /* ── Chapter 8: LSD ── */
  {
    id: 'ch8-title',
    type: 'chapter-start',
    pageNumber: 38,
    chapter: 8,
    title: 'LSD',
    subtitle: 'LightSpeedDevelopment. The acronym was intentional.',
  },

  {
    id: 'ch8-content-1',
    type: 'chapter-content',
    pageNumber: 39,
    chapter: 8,
    paragraphs: [
      'I\u2019ve always been entrepreneurial, but I really didn\u2019t like working for an employer. I have my own ideas and things that drive me. I have my own way \u2014 when you work for somebody else they tell you what to do and I would prefer to decide what I do. Throughout my whole life, I\u2019ve designed my life the way I want to live it.',
      'Before LightSpeed there was DuxTel (IT support internship), Peddlars (bicycle courier \u2014 naturally), and City Varsity where I worked as a Systems Administrator. At City Varsity I also took an advanced web design course. But I knew I didn\u2019t want to work there for another year.',
      'You never know if you\u2019re ready to start a business. But in 2003, I founded LightSpeed. Initially it was an IT support company. I named it LightSpeedDevelopment. The acronym is LSD. That was intentional.',
    ],
  },

  {
    id: 'ch8-content-2',
    type: 'chapter-content',
    pageNumber: 40,
    chapter: 8,
    paragraphs: [
      'In 2005, I hired my first employee. Then came the pivotal event: BarCamp Cape Town in 2006. I met Dave Duarte, who inspired me to get started with WordPress. That single networking event redirected LightSpeed from IT support to WordPress web development. Warwick Booth joined the company in December 2006 and has been by my side for nearly two decades.',
      'The business feeds the artist and the artist feeds the business. The management style mirrors the art style: freedom, trust, creative autonomy for the team. LightSpeed has run profitably for twenty-two years with a remote-first team. A founder who cycles 300\u202Fkm to a psytrance festival with a 40\u202Fkg bike pack is not someone who lacks discipline \u2014 he channels it differently.',
      'My parents\u2019 values \u2014 honesty, hard work, dedication, good business ethics \u2014 became the foundation of how LightSpeed operates. The same brain that rejected boredom in school rejected being told what to do at work. The solution was never to fix the brain. It was to build a life that matches it.',
    ],
  },

  /* ── Chapter 9: Island Time ── */
  {
    id: 'ch9-title',
    type: 'chapter-start',
    pageNumber: 41,
    chapter: 9,
    title: 'Island time',
    subtitle: 'Thailand, the island that became a second home, and the road to 7,000 kilometres.',
  },

  {
    id: 'ch9-content-1',
    type: 'chapter-content',
    pageNumber: 42,
    chapter: 9,
    paragraphs: [
      'I travelled to Thailand for the first time in 2005. Met my friend Mel Heinz and Colin on Koh Phangan. First fell in love with island life and the place that would become my third home after Cape Town and Berlin.',
      'We went back for Barbara\u2019s 40th birthday. Because we loved psytrance, we attended the island\u2019s parties: Black Moon, Half Moon, Ban Sabaii after-parties. Never the Full Moon Party \u2014 the psytrance parties were the draw. We also travelled north to Chiang Mai. Experienced the most incredible times.',
      'Koh Phangan is a small but not tiny island with a mountain for hiking, amazing beaches if you\u2019re willing to journey to find them, coral reefs accessible by swimming \u2014 colourful fish, sea urchins, and beauty. There\u2019s a herbal steam bath at a temple for rest and recovery, with massage onsite. During the week I work and train, I live my best life there.',
    ],
  },

  {
    id: 'ch9-content-2',
    type: 'chapter-content',
    pageNumber: 43,
    chapter: 9,
    paragraphs: [
      'Thailand became the stage for some of the most ambitious cycling of my life. Over 7,000 kilometres touring on bicycle. Bangkok to Chiang Rai for a festival, then rode on the Monday to Chiang Mai. Hua Hin to Phuket: nearly 900 kilometres in six days for friend Pierre Vocat\u2019s wedding, then 1,100 kilometres on the return. I got saddle sores with lasting scars from that one.',
      'People at festivals don\u2019t believe me that I\u2019m going to ride home. When they see me riding out of the festival on the Monday morning, they believe me then.',
      'I cycled down the coast of Thailand from Hua Hin, arrived on this magical island, and something clicked. The island life, the training, the remote work between sessions \u2014 it was another environment that matched the wiring. Morning swims out to the coral reefs. Triathlon training: swim, bike, run. Muay Thai with a skilled trainer. Everything you need fits on a bicycle, and everything I needed was already there.',
    ],
  },

  {
    id: 'ch9-content-3',
    type: 'chapter-content',
    pageNumber: 44,
    chapter: 9,
    paragraphs: [
      'The cycling routes deserve their own map.',
      'Bangkok to Chiang Rai: a festival was the destination, and the bicycle was the vehicle. After the festival ended on the Monday, I rode on to Chiang Mai \u2014 because why fly when you can pedal? The roads through northern Thailand are mountain passes, rice paddies, roadside noodle stalls, and the occasional elephant. You see the country at ten kilometres per hour instead of ten thousand feet, and the difference is everything.',
      'Hua Hin to Phuket: nearly 900 kilometres in six days for Pierre Vocat\u2019s wedding. The coast road south is relentless \u2014 heat, humidity, headwinds, and an endless ribbon of tarmac hugging the Gulf of Thailand. I arrived at the wedding sunburned, saddle-sore, and grinning. Then the return: 1,100 kilometres back up. The saddle sores left scars that are still visible. Proudest on-the-road repair: a 14-inch tyre flat fixed with tyre sealant and sheer determination, 40 kilometres from the nearest town.',
      'Total: over 7,000 kilometres touring Thailand by bicycle. People at festivals genuinely do not believe me when I say I cycled there. They think I mean a short ride from a nearby town. When they see me loading panniers onto the bike on Monday morning and pedalling out of the festival gates, their faces are extraordinary. That moment \u2014 the disbelief turning to respect \u2014 never gets old.',
    ],
  },

  {
    id: 'ch9-content-4',
    type: 'chapter-content',
    pageNumber: 45,
    chapter: 9,
    paragraphs: [
      'Koh Phangan became the training base. The third home, after Cape Town and Berlin.',
      'Morning routine: swim out to the coral reefs. Not laps in a pool \u2014 open water, salt water, fish darting beneath you, sea urchins in the rocks, the sun already hot at 7am. The swim is meditation and exercise simultaneously, the ADHD brain focused by the sensory richness of the ocean.',
      'Muay Thai with a skilled trainer. Since 2019, with intensive seasons in 2023 and 2025. The gym on Koh Phangan is a meeting point for digital nomads, fighters, yogis, and people who have opted out of conventional life. The training is brutal and beautiful \u2014 pad work, bag work, clinching, sparring. Your body is your primary tool, and the tool needs maintenance.',
      'Triathlon training in tropical heat: swim, bike, run. The island is small enough to lap it by bicycle in a few hours but hilly enough to challenge you. Running in 35-degree humidity is character building. The herbal steam bath at the temple afterward \u2014 recovery and meditation combined, the steam thick with eucalyptus and lemongrass, the monks moving quietly around you.',
      'Remote work from the island completed the picture. The laptop-and-bike lifestyle: mornings for training, afternoons for LightSpeed, evenings for the dancefloor or the sunset. Koh Phangan became the third home because it offered everything I needed in one small, beautiful, slightly chaotic place. Everything you need fits on a bicycle, and everything I needed was already there.',
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     PART THREE — NOMADIC LIFE BEGINS BEFORE COVID (BC)
     ═══════════════════════════════════════════════════════════ */

  /* ── Part 3 Title ── */
  {
    id: 'part3-title',
    type: 'part-title',
    pageNumber: 46,
    part: 3,
    title: 'Nomadic life begins',
    subtitle: 'Before COVID (BC)',
  },

  /* ── Chapter 10: Six Cats: The Green Garden ── */
  {
    id: 'ch10-title',
    type: 'chapter-start',
    pageNumber: 47,
    chapter: 10,
    title: 'Six Cats: the green garden',
    subtitle: 'A garden in Cape Town, nearly 20 years of growing experience, and a cannabis club born in May 2019.',
  },

  {
    id: 'ch10-content-1',
    type: 'chapter-content',
    pageNumber: 48,
    chapter: 10,
    paragraphs: [
      'I\u2019ve always had green fingers. Long before Six Cats had a name or a website or a grading system, there was a garden in Cape Town and a quiet, patient relationship with growing that had been building for nearly two decades. Cannabis cultivation is an art form that rewards exactly the qualities I have in abundance: meticulousness, patience, obsessive attention to detail, and a genuine respect for the natural process.',
      'In May 2019, that passion became a club. Six Cats Cannabis Club \u2014 named, naturally, for the cats. The first cats were adopted in 2003, a brother and sister called Bart and Lisa. They quickly became the mascots for the yearly harvest. Over the years, nine homeless cats found their way to us, some have left, and the ones who remain are the soul of the operation.',
      'The cultivation philosophy is entirely organic: living soil built from Bokashi composting and worm farming, rainwater harvested and triple-filtered (Cape Town almost ran out of water in 2018 \u2014 we take water seriously), companion planting with basil, worm compost tea brewed every two weeks throughout the growing season. Nothing rushed. Nothing synthetic. Small-batch, hand-tended, high-quality flower grown outdoors using the natural cycles of the sun and seasons.',
    ],
  },

  {
    id: 'ch10-content-2',
    type: 'chapter-content',
    pageNumber: 49,
    chapter: 10,
    paragraphs: [
      '\u2014 THE CATS: RESIDENTS \u2014',
      '',
      'Timmy \u2014 The Resident Therapy Cat. Timmy is the gentle giant of the operation. He arrived as a stray, malnourished and cautious, and over months transformed into the most affectionate cat in the house. He has an uncanny sense for when someone needs comfort \u2014 he\u2019ll appear on your lap during a stressful work call or curl up next to you when you\u2019re feeling low. He is the unofficial emotional support officer of Six Cats. Every harvest, Timmy claims a spot in the drying room and supervises.',
      'Wendy \u2014 The Agile Matriarch. Wendy is old, fast, and takes no nonsense. She rules the garden with quiet authority, patrolling the perimeter with the precision of a security consultant. The other cats defer to her. She was one of the earliest rescues, arriving thin and feral, and within a year she owned every room in the house. Wendy\u2019s survival instinct and adaptability mirror the ethos of Six Cats itself \u2014 resourceful, resilient, and fiercely independent.',
      'Jimmy \u2014 The FIV Fighter. Jimmy tested positive for FIV (Feline Immunodeficiency Virus) when he arrived. The vet said to keep him comfortable. That was years ago. Jimmy is still here, still eating, still fighting, still claiming the best sunny spot in the garden every morning. He is proof that a diagnosis is not a destiny. He requires extra care \u2014 immune-boosting supplements, regular vet checks, and isolation when he\u2019s run-down \u2014 but he gives back more than he takes. Jimmy is the most determined cat I\u2019ve ever known.',
    ],
  },

  {
    id: 'ch10-content-3',
    type: 'chapter-content',
    pageNumber: 50,
    chapter: 10,
    paragraphs: [
      'Bean \u2014 The Survivor. Bean arrived in the worst condition of any cat we\u2019ve taken in. Underweight, dehydrated, covered in fleas, and terrified of humans. The first two months were slow \u2014 leaving food near her hiding spot, sitting quietly in the same room without approaching, waiting for her to decide when she was ready. When she finally climbed onto my lap, it was one of the most rewarding moments of the entire Six Cats journey. Bean is now unrecognisable from the cat who arrived. She\u2019s gained weight, her coat gleams, and she greets visitors at the door like she owns the place. Because she does.',
      'Jeff \u2014 The Wanderer. Jeff is the adventurer. He disappears for hours, sometimes days, returning with the air of someone who\u2019s been on a tremendous journey and has no intention of telling you about it. He\u2019s the most independent of all the cats, preferring the garden and the neighbourhood rooftops to the comfort of the couch. Jeff taught me that not every personality needs to be domesticated. Some spirits need to roam. You just make sure the door is always open for when they come home.',
      'Frank \u2014 Blue Eyes. Frank is striking \u2014 pure white with piercing blue eyes that stop visitors in their tracks. He\u2019s the most photogenic of the crew and seems to know it. Frank is gentle, almost regal, and moves through the house with an elegance the other cats lack. He arrived relatively healthy compared to the others, as though the universe decided to send us one cat who didn\u2019t need fixing. Frank is the calm at the centre of the Six Cats operation \u2014 beautiful, untroubled, and content.',
    ],
  },

  {
    id: 'ch10-content-4',
    type: 'chapter-content',
    pageNumber: 51,
    chapter: 10,
    paragraphs: [
      '\u2014 IN MEMORIAM \u2014',
      '',
      'Lisa (Granny Cat) \u2014 Passed July 2020. Lisa was one of the original two cats, adopted in 2003 alongside her brother Bart. She lived to a grand old age and earned the nickname Granny Cat in her final years. She was slow, dignified, and had a particular fondness for sitting in the exact spot where you needed to work. Lisa set the tone for everything that followed \u2014 the idea that rescued animals deserve not just shelter but a life of comfort and dignity. When she passed, the garden felt emptier for months.',
      'Moe (Fat-Boy-Fat) \u2014 Passed January 2022. Moe earned his nickname honestly. He was enormous, unapologetic, and ate with the enthusiasm of someone who had once known hunger and decided it would never happen again. Moe was the comic relief of Six Cats \u2014 the cat who got stuck in places, who fell off shelves, who ate food that wasn\u2019t his and looked at you as if to say, "And what are you going to do about it?" Behind the comedy was a cat who had been abandoned and found safety. Moe reminded us that joy is a survival mechanism.',
      'Lucy (Dennis the Menace) \u2014 Passed October 2023. Lucy was a cross-Burmese cat with a personality that could fill a stadium. Nicknamed Dennis the Menace for her relentless energy, her mischief, and her ability to be in exactly the wrong place at exactly the wrong time. Lucy was the heartbeat of Six Cats. She was curious, demanding, affectionate on her terms, and utterly impossible to ignore. Her passing hit harder than any of the others. The book is dedicated to her. The green garden carries on, but it carries on with Lucy\u2019s spirit woven into every harvest.',
    ],
  },

  {
    id: 'ch10-content-5',
    type: 'chapter-content',
    pageNumber: 52,
    chapter: 10,
    paragraphs: [
      '\u2014 THE EIGHT VALUES OF SIX CATS \u2014',
      '',
      'Every harvest season, these eight values guide the operation:',
      'Authenticity \u2014 We grow what we say we grow. No relabelling, no exaggeration, no pretence. What you see is what you get.',
      'Consciousness \u2014 Every decision considers impact: on the soil, on the water table, on the neighbourhood, on the people who consume the product. Consciousness is not a marketing term; it\u2019s a daily practice.',
      'Consistency \u2014 Same soil, same methods, same care, every season. The goal is not to reinvent but to refine. Consistency is what separates hobbyists from craftspeople.',
      'Experience \u2014 Nearly twenty years of growing informs every decision. Experience is the compound interest of patience.',
    ],
  },

  {
    id: 'ch10-content-6',
    type: 'chapter-content',
    pageNumber: 53,
    chapter: 10,
    paragraphs: [
      'Meticulousness \u2014 Every plant is observed daily. Leaf colour, soil moisture, pest activity, growth rate. The notebook is sacred. Data drives the decisions, and the decisions drive the quality.',
      'Sustainability \u2014 Rainwater harvesting (13,500 litres of storage capacity). Bokashi composting. Worm farming. Glass packaging returned and reused. Nothing leaves the operation that can be cycled back into it.',
      'Passion \u2014 This is not a side hustle. This is a practice, a meditation, a way of engaging with the natural world. The same passion that drives the art drives the garden.',
      'Quality \u2014 The grading system exists because quality is measurable. Every batch is taste-tested weekly during the two-month curing process. We don\u2019t release anything we wouldn\u2019t consume ourselves.',
    ],
  },

  {
    id: 'ch10-content-7',
    type: 'chapter-content',
    pageNumber: 54,
    chapter: 10,
    paragraphs: [
      '\u2014 CULTIVATION METHODS \u2014',
      '',
      'Living Soil: The foundation of the Six Cats method. We build soil, we don\u2019t buy it. Bokashi bins handle kitchen waste, breaking it down into pre-compost that feeds the worm farm. The worms produce castings and liquid fertiliser (worm tea). This closed-loop system means the garden feeds itself. The soil is alive \u2014 teeming with microorganisms, fungi, and beneficial bacteria that create a root environment no synthetic fertiliser can replicate.',
      'Rainwater Harvesting: Cape Town\u2019s water crisis in 2018 was a wake-up call for every resident. We installed a 13,500-litre rainwater harvesting system with triple filtration. Every drop that touches our plants comes from the sky, collected from our roof, filtered through sediment, carbon, and UV stages. The system means we grow independently of municipal water supply and our plants receive water without chlorine or fluoride.',
      'Companion Planting: Basil grows alongside cannabis in every bed. It repels certain pests, attracts beneficial pollinators, and \u2014 some growers believe \u2014 enhances terpene production in neighbouring cannabis plants. We also plant marigolds, lavender, and rosemary at the garden borders. The garden looks beautiful, smells incredible, and functions as an integrated pest management system.',
    ],
  },

  {
    id: 'ch10-content-8',
    type: 'chapter-content',
    pageNumber: 55,
    chapter: 10,
    paragraphs: [
      'Worm Tea: Every two weeks during the growing season, we brew aerobic compost tea. Worm castings go into a mesh bag, suspended in a bucket of water with an aquarium pump providing oxygen. After 24\u201348 hours of bubbling, the tea is teeming with beneficial microorganisms. Applied as a foliar spray and soil drench, it supercharges the microbial life in the soil and gives the plants a visible growth boost within days.',
      '\u2014 HARVEST PHASES \u2014',
      'Flushing: Ten days before harvest, we stop all feeding and water with plain rainwater only. This forces the plant to use its stored nutrients, resulting in a cleaner, smoother smoke with no chemical aftertaste. The leaves begin to yellow as the plant consumes its own chlorophyll \u2014 a sign that flushing is working.',
      'Drying: The entire plant is hung upside down in a dark, ventilated room at 16\u201318\u00B0C and 55\u201360% humidity. Slow drying over 10\u201314 days preserves terpenes and prevents mould. We check daily. The stems snap, they don\u2019t bend \u2014 that\u2019s when you know it\u2019s ready.',
    ],
  },

  {
    id: 'ch10-content-9',
    type: 'chapter-content',
    pageNumber: 56,
    chapter: 10,
    paragraphs: [
      'Dry Trimming: We trim after drying, not before. Dry trimming preserves the trichomes (the tiny crystal-like structures that contain cannabinoids and terpenes) and produces a tighter, more aesthetically pleasing bud. It\u2019s slower and more labour-intensive than wet trimming, but the quality difference is noticeable.',
      'Curing: Two months in airtight glass jars, burped daily for the first two weeks, then weekly thereafter. Curing is where good flower becomes exceptional flower. The moisture redistributes evenly, the chlorophyll breaks down completely, and the terpene profile develops its full complexity. We taste-test every week. The jars are labelled, dated, and stored in a cool, dark room. Patience is the final ingredient.',
      '\u2014 THE GRADING SYSTEM \u2014',
      'Quads (AAAA): Top-shelf. Dense, trichome-covered, exceptional terpene profile. The best of the season. Trips (AAA): Excellent quality. Slightly less dense or less visually striking, but flavour and effect are outstanding. Doubles (AA): Good, solid flower. The everyday option. Singles (A) / Budget Blend: Smaller buds, less visual appeal, but still grown with the same care. Often used for edibles or pre-rolls.',
    ],
  },

  {
    id: 'ch10-content-10',
    type: 'chapter-content',
    pageNumber: 57,
    chapter: 10,
    paragraphs: [
      '\u2014 ASH\u2019S GREEN FINGERS \u2014',
      '',
      'Six Cats is the outlet for what I call my green fingers \u2014 the deeply satisfying practice of growing something from seed to harvest. These are the same hands that paint neon faces at festivals. Both practices require the same qualities: patience, attention to detail, sensitivity to the subject, and a deep respect for the process. The cannabis plant and the human face both reward the artist who listens before they paint.',
      'Six Cats was started with Barbara, who is also my partner at LightSpeed and one of my best friends. We\u2019ve built two creative businesses together, which is either a testament to our partnership or our mutual stubbornness \u2014 probably both. Every season since 2019 has been a new chapter. The cats have come and gone. Lucy, our cross-Burmese matriarch, left us in October 2023. The green garden carries on.',
      'What started as one man\u2019s garden has become a club, a community, and a philosophy. The eight values aren\u2019t just about cannabis \u2014 they\u2019re about how I approach everything. Authenticity in the art. Consciousness in the business. Consistency on the bicycle. Meticulousness in the code. Sustainability in the lifestyle. Passion in everything. Quality above all. Six Cats is not a side project. It\u2019s a mirror.',
    ],
  },

  /* ── Chapter 11: Berlin Calling ── */
  {
    id: 'ch11-title',
    type: 'chapter-start',
    pageNumber: 58,
    chapter: 11,
    title: 'Berlin calling',
    subtitle: 'A bicycle, a city discovered just before the world stopped, and the freedom to be unapologetically yourself.',
  },

  {
    id: 'ch11-content-1',
    type: 'chapter-content',
    pageNumber: 59,
    chapter: 11,
    paragraphs: [
      'Berlin called to me not through brochures or travel blogs, but through stories whispered at afterparties and painted across the faces of returning festival friends. I discovered it in 2019 \u2014 just before the world stopped \u2014 arriving with a bicycle and the instinct that this city was going to mean something.',
      'What I found was a city that doesn\u2019t just tolerate difference \u2014 it demands it. From Kreuzberg\u2019s graffiti-covered facades to Neuk\u00F6lln\u2019s late-night shawarma runs, Berlin gave me permission to be unapologetically myself.',
      'Berlin\u2019s club culture is legendary, and for good reason. The city\u2019s warehouses, abandoned power stations, and basement bars became my studios. Under UV lights and surrounded by pounding techno, I discovered that makeup art and electronic music are two expressions of the same energy.',
    ],
  },

  {
    id: 'ch11-content-2',
    type: 'chapter-content',
    pageNumber: 60,
    chapter: 11,
    paragraphs: [
      'Berlin gave me three things no other city could. Freedom to be weird \u2014 not just tolerated but expected. A city where cycling to a club in fairy lights with a box of UV paints is completely unremarkable. Affordable creative space \u2014 compared to London, Paris, or San Francisco, Berlin let a young South African build a life without the crushing overhead that kills creativity. And the right scene \u2014 techno and psytrance communities that overlap, collaborate, and welcome outsiders.',
      'I didn\u2019t just find a community in Berlin \u2014 I found my species. DJs, visual artists, fire dancers, sound engineers, fellow festival freaks who understand that creativity isn\u2019t a career; it\u2019s a way of being. The community is specifically neurodivergent creatives who look out for each other, share studio space, and collaborate on wild ideas that would make no sense anywhere else. This is the tribe of misfits \u2014 the people whose brains run on the same frequency.',
      'The flat, endless Berlin streets free the mind. Between Gorlitzer Park and Tempelhof, between the Spree canal and Tiergarten, ideas form with every pedal stroke. Painting faces at open-airs until 3am, cycling home through warm streets that smell of linden trees, and knowing there\u2019s another party tomorrow. And the day after. And the day after that.',
    ],
  },

  /* ── Chapter 12: The Loaded Bike ── */
  {
    id: 'ch12-title',
    type: 'chapter-start',
    pageNumber: 61,
    chapter: 12,
    title: 'The loaded bike',
    subtitle: 'UV paints, brush kit, mirror stand, camping gear, touring panniers. 40 kilograms. Everything an artist needs, on two wheels.',
  },

  {
    id: 'ch12-content-1',
    type: 'chapter-content',
    pageNumber: 62,
    chapter: 12,
    paragraphs: [
      'When I cycle to a festival, the journey becomes part of the art. Hundreds of kilometres of road dissolve the noise of everyday life. By the time I arrive, I\u2019m present, clear, and creatively charged.',
      'The touring kit: a gravel bike, Arkel pannier bags, Tubus racks, a bike bag on the top tube next to the handlebars, phone mount. UV paints, brush kit, mirror stand when heading to festivals. Camping gear. Total weight: 40 kilograms. Portability isn\u2019t a limitation \u2014 it\u2019s a design constraint that forces creative efficiency.',
      'I started bike packing in 2012. It evolved from racing into something fundamentally different \u2014 endurance, self-sufficiency, meditation, and adventure. The relationship with the bicycle transformed from competition to companionship.',
    ],
  },

  {
    id: 'ch12-content-2',
    type: 'chapter-content',
    pageNumber: 63,
    chapter: 12,
    paragraphs: [
      'The notable routes stack up like stories. 300 kilometres from San Francisco to Point Reyes and back in California. Two trips in the Netherlands totalling nearly 800 kilometres. Munich to Amsterdam: 1,000 kilometres in ten days. Bike touring in Bali. And always, the Thai routes \u2014 over 7,000 kilometres total.',
      'The proudest on-the-road repair: riding with a road bike in a trailer with a 14-inch tyre. Got a flat. The tube wasn\u2019t something replaceable in Thailand. Luckily I had tyre sealant \u2014 took the valve out, got the sealant into the tube, pumped it up, and sealed the puncture. Resourcefulness on the road.',
      'I always have a checklist. If I don\u2019t have a checklist, I leave stuff behind. Even with a checklist, I leave stuff behind. So every time I do a party, I adapt my checklist. Times change, gear changes, and needs change. The less you carry, the further you go.',
    ],
  },

  /* ── Chapter 13: Neon Revelations ── */
  {
    id: 'ch13-title',
    type: 'chapter-start',
    pageNumber: 64,
    chapter: 13,
    title: 'Neon revelations',
    subtitle: 'The night Ash picked up UV paint and discovered his voice wasn\u2019t in words.',
  },

  {
    id: 'ch13-content-1',
    type: 'chapter-content',
    pageNumber: 65,
    chapter: 13,
    paragraphs: [
      'July 2019. A psytrance gathering somewhere in Berlin. I picked up UV-reactive face paint for the first time. Something clicked that had been building for twenty years of festival life \u2014 from the yellow Chicken Man suit, through the Cow Man era, through years of being the most visible person on every dancefloor \u2014 but never having an art form of my own.',
      'That night, the art found me.',
      'The evolution was clear in retrospect: dressing up, being seen, then creating. The shift from performer to artist was the final piece. Twenty years of dancefloor immersion, of understanding what makes someone light up under UV, of reading energy and crowd dynamics \u2014 all of it was preparation for picking up that first brush.',
    ],
  },

  {
    id: 'ch13-content-2',
    type: 'chapter-content',
    pageNumber: 66,
    chapter: 13,
    paragraphs: [
      'I don\u2019t sketch beforehand. I don\u2019t look at Pinterest boards or follow trends. The creative process begins with a feeling \u2014 the energy of the music, the light conditions, and the vibe of the person sitting in front of me. This isn\u2019t chaos; it\u2019s trust. Trust in thousands of hours of practice, in the muscle memory of ambidextrous hands, and in the belief that the best art happens when you stop trying to control it.',
      'UV art has a unique property: what you see during application is NOT what you see under blacklight. Colours that look muted in daylight become explosively vivid under UV. Understanding this transformation is central to my process \u2014 I paint for the reveal, not the application. Certain greens that look bland in daylight become nuclear under UV. Pinks that seem aggressive in natural light become ethereal.',
      'I discovered that UV mascara transforms my blonde eyebrows into something that pops under blacklight \u2014 suddenly I had eyebrows. Multiple colours layered on the eyelashes create effects that are subtle yet striking. Co-creating is amazing. I listen to what the person wants, use imagination to create what they describe. I don\u2019t just paint faces; I unlock avatars.',
    ],
  },

  {
    id: 'ch13-content-3',
    type: 'chapter-content',
    pageNumber: 67,
    chapter: 13,
    paragraphs: [
      'The venue was a psytrance gathering somewhere deep in Berlin\u2019s industrial east, the kind of space where the concrete walls still remember the Cold War but the UV lights have turned them into something extraterrestrial. It was July 2019 \u2014 high summer, that golden stretch when Berlin barely gets dark and the city\u2019s energy is electric. The gathering had been running since the previous night. UV rigs lined the walls. Bass moved through the floor.',
      'Someone had a box of UV face paints. I don\u2019t remember whose they were. I picked one up \u2014 a green stick \u2014 and turned to the person next to me. "Can I try something?" The first strokes were tentative. Geometric lines across the cheekbones, dots along the jawline, swirling patterns radiating outward from the eyes. When they stepped under the blacklight, something ignited. The colours that had looked muted under the dim overhead lamps now screamed with life. Their face became a mask, a portal, something other. They looked at their reflection in a phone screen and their whole expression changed.',
      'That was the moment. Not a gradual realisation but a thunderclap. Twenty years of dancefloor immersion \u2014 the costumes, the visibility, the obsession with how bodies and light interact in dark spaces \u2014 all of it had been building to this exact point. The difference between watching art and making art is the difference between standing on the shore and diving in. I had been on the shore my entire festival life. That night, I dove.',
    ],
  },

  {
    id: 'ch13-content-4',
    type: 'chapter-content',
    pageNumber: 68,
    chapter: 13,
    paragraphs: [
      'The technique discoveries came fast. Within the first weeks I realised I was painting ambidextrously \u2014 both hands working simultaneously, one on each side of the face. This wasn\u2019t something I trained. It was how my hands wanted to move. The ADHD brain that had always been doing three things at once had found its perfect outlet: both hemispheres engaged, mirror-image designs flowing outward from the centre.',
      'Then came the colour behaviour revelation, the insight that separates UV art from every other form of face painting. What you see during application is not what you see under blacklight. The transformation is the art. Greens that look bland and almost military in daylight become nuclear, radioactive, alive under UV. Pinks that seem garish and aggressive in natural light become ethereal, soft, otherworldly under blacklight. Oranges that look like construction vests become solar flares. Blues that seem dark and flat become deep-sea bioluminescence.',
      'Understanding this transformation became central to everything. I learned to paint for the reveal, not the application. Every stroke is placed knowing that the real artwork only appears when the blacklight hits. It\u2019s like composing music you won\u2019t hear until the concert hall is full \u2014 you have to trust the physics of light and pigment.',
      'The co-creation philosophy developed naturally. I don\u2019t impose a design. I listen. What does this person want to become tonight? What energy are they carrying? What colours speak to them? Then I translate. Some people want fierce geometry. Others want flowing organic shapes. Some want to disappear into the crowd with subtle accents. Others want to become a beacon. The conversation between artist and canvas is the creative act itself.',
    ],
  },

  {
    id: 'ch13-content-5',
    type: 'chapter-content',
    pageNumber: 69,
    chapter: 13,
    paragraphs: [
      'The creative evolution in those first months was rapid. From simple dots and lines to complex geometric mandalas. From face-only designs to work that flowed down the neck, across the shoulders, along the arms \u2014 eventually full-body pieces that turned people into walking light sculptures. From painting friends who humoured me to strangers approaching at festivals, drawn by the glow of the person I had just finished.',
      'My practice philosophy crystallised early and has never changed: no Pinterest, no pre-sketching, no reference images, no mood boards. Pure spontaneous creation, every single time. Each face is a new canvas with its own bone structure, its own energy, its own story. Pre-planning would kill the thing that makes it alive. The ADHD brain that struggles with routine and repetition thrives in this space where every design must be invented in the moment.',
      'And then the deeper realisation landed. The ADHD brain doesn\u2019t just cope with festival conditions \u2014 it thrives in them. Loud music, dark rooms, crowded spaces, constant movement, hundreds of sensory inputs processed simultaneously. Conditions that would overwhelm most people create the exact environment where my neurology performs best. Total flow state. Hyperfocus engaged. Hours dissolving into minutes. The world narrowing to the face in front of me, the brush in my hand, and the bass in my chest.',
      'Every thread of the life story converges here. The hyperactive child who couldn\u2019t sit still became the dancefloor kid who couldn\u2019t stop moving. The dancefloor kid became the costume character who needed to be seen. The costume character became the artist who needed to create. Twenty years of preparation for a moment I never saw coming. The dancefloor gave me everything, and this was the final gift.',
    ],
  },

  /* ── Chapter 14: The Pilgrimage ── */
  {
    id: 'ch14-title',
    type: 'chapter-start',
    pageNumber: 70,
    chapter: 14,
    title: 'The pilgrimage',
    subtitle: 'The cycling tradition to Origin Festival \u2014 and then the world stopped.',
  },

  {
    id: 'ch14-content-1',
    type: 'chapter-content',
    pageNumber: 71,
    chapter: 14,
    paragraphs: [
      'Origin Festival. Elandskloof Guest Farm, Helderstroom, Western Cape. It falls on my birthday weekend every year. The pilgrimage to a psytrance festival is as important as the event itself \u2014 cycling through mountain passes with a loaded bike is a meditation, a way to cleanse the mind before entering the psychedelic playground.',
      'The first cycling pilgrimage was in 2020, just before COVID lockdowns changed everything. The route: Woodstock, Cape Town through Sir Lowry\u2019s Pass to Grabouw, through the Elgin Valley, over Houwhoek Pass to Helderstroom. About 150 kilometres one way through mountain passes in the Western Cape.',
      'AfricaBurn \u2014 South Africa\u2019s regional Burning Man event \u2014 was another landmark. Attended in 2015, 2017, and 2019. The Experience in Thailand, multiple years from 2010 to 2013. Universo Paralello in Brazil, 2013/14. Oregon Eclipse Festival in the USA, 2017. The circuit was global, and then everything stopped.',
    ],
  },

  {
    id: 'ch14-content-2',
    type: 'chapter-content',
    pageNumber: 72,
    chapter: 14,
    paragraphs: [
      'COVID hit. The festivals disappeared. The dancefloors went dark. For a brain wired for sensory richness and community connection, the silence was deafening.',
      'But the bicycle was still there. The business was still there. The art lived in memory and in photographs. The question became: when the world opens again, who do you come back as?',
      'The answer, it turned out, would take a few years to fully form. It would involve a record-breaking summer in Berlin, a creative output that surprised even me, and the slow realisation that everything \u2014 the Lego, the cycling, the costumes, the festivals, the UV paint, the business, the relationships \u2014 had always been moving toward the same point.',
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     PART FOUR — RE-EMERGENCE & FINDING MYSELF AGAIN
     ═══════════════════════════════════════════════════════════ */

  /* ── Part 4 Title ── */
  {
    id: 'part4-title',
    type: 'part-title',
    pageNumber: 73,
    part: 4,
    title: 'Re-emergence',
    subtitle: '& finding myself again',
  },

  /* ── Chapter 15: The Artist's Lifestyle ── */
  {
    id: 'ch15-title',
    type: 'chapter-start',
    pageNumber: 74,
    chapter: 15,
    title: 'The artist\u2019s lifestyle',
    subtitle: 'Someone at a party told me: \u201CYou live an artist\u2019s lifestyle.\u201D They were right.',
  },

  {
    id: 'ch15-content-1',
    type: 'chapter-content',
    pageNumber: 75,
    chapter: 15,
    paragraphs: [
      'They meant it as an observation, not a compliment or a criticism \u2014 just the plain truth of watching someone who has deliberately shaped his entire life around whatever feeds his creativity and passion.',
      'I don\u2019t separate work from art, or art from life. I shape my year, my movements, my daily rhythms \u2014 everything \u2014 around the things that fuel me. Sport: racing bicycles since 1994, triathlon since 2010, Muay Thai since 2019, yoga since the early 2000s. Growing cannabis: co-founder of Six Cats Club. Dance: the psytrance dancefloor as classroom, gallery, church. Makeup: the visible output of twenty-five years of dancefloor immersion. Business: twenty-two years of building LightSpeed. Problem solving: the ADHD brain that rejected boredom but devoured interesting problems.',
      'The conventional path says: pick a career, build stability, fit hobbies around the edges. My path says: identify what makes you come alive, then engineer your entire existence around those things. This isn\u2019t irresponsibility \u2014 it\u2019s radical prioritisation.',
    ],
  },

  {
    id: 'ch15-content-2',
    type: 'chapter-content',
    pageNumber: 76,
    chapter: 15,
    paragraphs: [
      'The year follows the festivals and the seasons. Cape Town summers: Origin Festival on my birthday weekend, the South African psytrance circuit, cycling in the Western Cape mountains. European summer: Berlin as creative anchor, open-airs in Hasenheide Park, techno nights in Friedrichshain, cycling to festivals across Germany, Czech Republic, Austria. Thailand: island life, Koh Phangan parties, jungle festivals, tropical UV art. The shoulder seasons: connecting it all by bicycle, train, and shared rides.',
      'The quote resonates because it captures something I\u2019d been working toward without always having words for it: a life where creativity isn\u2019t compartmentalised. Where the cycling informs the dancing, the dancing informs the painting, the painting informs the problem-solving, and the problem-solving feeds back into the business that funds all of it.',
      'It\u2019s never one thing. It\u2019s the cumulative effect.',
    ],
  },

  {
    id: 'ch15-content-3',
    type: 'chapter-content',
    pageNumber: 77,
    chapter: 15,
    paragraphs: [
      'The annual rhythm, month by month, reveals the architecture of the lifestyle.',
      'January: Cape Town in full summer. Origin Festival falls on my birthday weekend \u2014 the psytrance homecoming, UV painting under the stars, the South African crew reunited. The rest of January is cycling in the Western Cape mountains, swimming at Clifton, and recovering from the festival season that started in December.',
      'February\u2013March: Transition. Still in Cape Town, wrapping up the South African summer. LightSpeed sprints, client work, the business that funds the freedom. Six Cats Club in its growing phase \u2014 tending the garden, the cats, the rhythm of the property.',
      'April\u2013May: Berlin awakens. The flight from Cape Town to the northern hemisphere. Unpacking the bicycle, reacquainting with the city. The first outdoor parties, Hasenheide Park sessions, the Berlin creative energy ramping up. Muay Thai training at the gym, running along the Spree, the body recalibrating to European time.',
      'June\u2013August: Peak season. Berlin at its best \u2014 barely-dark nights, open-air techno, cycling to festivals across Germany. Czech Republic for Reiserfieber. Austria for the mountain festivals. UV art commissions, festival bookings, the busiest creative stretch. Every weekend is a choice between three or four events.',
      'September\u2013October: Shoulder season. Berlin cooling down, the last outdoor events. Thailand beckons \u2014 sometimes via a cycling route through southern Europe. LightSpeed project work intensifies as clients ramp up for Q4.',
      'November\u2013December: Koh Phangan. Island mode engaged. Morning swims, Muay Thai, jungle festivals, tropical UV art. The herbal steam bath at the temple. December Vortex back in South Africa if the timing works. The year loops back to Origin.',
    ],
  },

  {
    id: 'ch15-content-4',
    type: 'chapter-content',
    pageNumber: 78,
    chapter: 15,
    paragraphs: [
      'Radical prioritisation is the engine. Not time management \u2014 energy management.',
      'The conventional framework asks: "What do you do for a living?" and expects a single answer. My answer is a Venn diagram with six overlapping circles: cycling, dancing, painting, growing, building, and fighting. The magic \u2014 the artist\u2019s lifestyle \u2014 lives in the overlaps.',
      'The intersection model works because each discipline feeds the others. Cycling builds the cardiovascular engine that powers twelve-hour dance sessions. Dance teaches body awareness that improves Muay Thai technique. Muay Thai sharpens focus that improves UV painting precision. Painting builds the creative confidence that makes LightSpeed client work more innovative. LightSpeed generates the income that funds the travel. The travel provides the festivals that need the painting.',
      'It\u2019s a flywheel, not a balance sheet. Nothing is sacrificed for the others because they are all expressions of the same underlying drive: the ADHD brain\u2019s need for novelty, stimulation, and deep engagement.',
      'The person at the party was right. This is an artist\u2019s lifestyle. Not because I make art \u2014 lots of people make art. Because I\u2019ve engineered an entire existence around the conditions that make art possible. The travel, the training, the business, the relationships, the daily rhythms \u2014 everything is infrastructure for creativity. The art isn\u2019t just the UV paint on someone\u2019s face. The art is the life itself.',
    ],
  },

  /* ── Chapter 16: Dance Like No One's Watching ── */
  {
    id: 'ch16-title',
    type: 'chapter-start',
    pageNumber: 79,
    chapter: 16,
    title: 'Dance like no one\u2019s watching',
    subtitle: 'The dancefloor as sacred space, and the art of making people shine.',
  },

  {
    id: 'ch16-content-1',
    type: 'chapter-content',
    pageNumber: 80,
    chapter: 16,
    paragraphs: [
      'The psytrance dancefloor is not metaphorically sacred \u2014 it\u2019s literally sacred. It\u2019s where ADHD brains find their natural operating environment. Where sensory richness replaces the boredom of conventional spaces. Where community forms without the filters of daily life. Never about escape \u2014 always about deeper engagement with reality.',
      'I don\u2019t charge for my makeup. Sometimes people offer money; sometimes I tell them they can buy me a drink. For me it\u2019s the pleasure of being able to do my art on somebody and see them happy afterwards. This is a personal art project, not a professional pursuit.',
      'An experience recently: saw someone after not seeing them for two years. I\u2019d done their makeup two years ago. That day, they felt extremely special \u2014 everyone kept complimenting them and it made their day. This is the lasting impact: the memory of feeling radiant stays with people long after the paint washes off.',
    ],
  },

  {
    id: 'ch16-content-2',
    type: 'chapter-content',
    pageNumber: 81,
    chapter: 16,
    paragraphs: [
      'I\u2019ve also explored an alternative book concept called \u201CDance Like No One\u2019s Watching,\u201D structured through the visual and identity evolution: early days of dancing, the cow suit, the chicken suit, my rave suit, and finally makeup. Whether it becomes a standalone book or merges with this one remains to be decided.',
      'Every region brings different faces, different skin tones, different relationships to body art. Thai festival-goers embrace full-body UV coverage. Berlin clubbers want sharp geometric precision. South African crowds love bold, expressive colour blocks. I\u2019ve learned to read and adapt \u2014 not changing my style, but letting it be informed by the culture and energy of each place.',
      'The best art happens in the moment. I live for the spontaneous connections on the dancefloor. I look for the radiant souls amplifying the energy. If the vibe matches, we create magic. Festival energy moves fast. Working in these conditions \u2014 loud, dark, crowded, constantly moving \u2014 is what shaped the ambidextrous technique.',
    ],
  },

  /* ── Chapter 17: One Million Steps ── */
  {
    id: 'ch17-title',
    type: 'chapter-start',
    pageNumber: 82,
    chapter: 17,
    title: 'One million steps',
    subtitle: 'Berlin summer 2025 \u2014 the record-breaking season.',
  },

  {
    id: 'ch17-content-1',
    type: 'chapter-content',
    pageNumber: 83,
    chapter: 17,
    paragraphs: [
      'Special thanks to dearest friend Vitor who graciously hosted me \u2014 one of the most special humans I know. Berlin summer 2025 was the season where everything came together.',
      'I spoke at WordCamp Europe in June in Basel. Did some of my most inspired work during the time in Berlin \u2014 very proud of my creative output. Practiced doing creative makeup every weekend for two months \u2014 very pleased with the outcome and my improved skills. Sisyphos: my little piece of heaven while I\u2019m in Berlin. Met incredible people, saw old friends, made new memories.',
      'My goal was to dance every weekend while in Europe. The result: approximately 900 kilometres or one million steps over eight weeks, mostly dancing. A new personal record. You don\u2019t count those steps on purpose. You count them afterwards, when you look down at the number and think: so that\u2019s what living in full colour looks like, measured in footsteps.',
    ],
  },

  {
    id: 'ch17-content-2',
    type: 'chapter-content',
    pageNumber: 84,
    chapter: 17,
    paragraphs: [
      'The Origin Festival cycling tradition continued post-COVID. 2022: the annual tradition truly begins. First year back after COVID, on two wheels. Felt like coming home. 2023: the birthday sash ride \u2014 left the festival on my birthday, someone gave me a happy birthday sash. Cycled the whole way to Peregrine Farmstall in Grabouw wearing it.',
      '2026 was the epic one. Day 1: 80 kilometres from Woodstock via Sir Lowry\u2019s Pass to Grabouw. Day 2, my birthday: 75 kilometres to Helderstroom. Arrived at 11:30 in the morning, skipped the queue, shouted it was my birthday. The weekend: painted faces in the shade by day, watched them glow under UV cannons at night. Stats: 300 kilometres total, 40-kilogram bike pack, 3,200 metres of climbing, 14 hours of riding, top speed 75 kilometres per hour.',
      'I am leaving Berlin with a heart filled with joy and love, thanks to those who made my time here special. Peace out.',
    ],
  },

  /* ── Chapter 18: Freedom as Operating Principle ── */
  {
    id: 'ch18-title',
    type: 'chapter-start',
    pageNumber: 85,
    chapter: 18,
    title: 'Freedom as operating principle',
    subtitle: 'The business, the team, and why freedom isn\u2019t the opposite of discipline.',
  },

  {
    id: 'ch18-content-1',
    type: 'chapter-content',
    pageNumber: 86,
    chapter: 18,
    paragraphs: [
      'Freedom shows up everywhere in my life. Berlin: a city that demands difference. LightSpeed: remote-first, flexible hours, creative autonomy for the team. The bicycle: freedom of movement, no schedules, no dependency on infrastructure. Festival life: the dancefloor as the last truly free space. The art: no pre-planning, no Pinterest references, no client briefs. Pure spontaneous creation.',
      'Freedom is something that many employees don\u2019t experience. The freedom given to the LightSpeed team helps them lead happier lives and ultimately benefits the company because they deliver better work. It\u2019s taken a long time and many years of change, adaptation, and adjustment to get to this point.',
      'The team is levelling up week on week at a rate never seen before in my career. Yes, this is because of AI, but without a team that has the drive to learn, progress, and grow, this would not happen. I\u2019m currently mentoring the entire team into a new age of AI-powered workflow: GitHub Copilot, ChatGPT, Claude, Model Context Protocol. The fusion of AI, creativity, and open source has been a radical, life-changing shift.',
    ],
  },

  {
    id: 'ch18-content-2',
    type: 'chapter-content',
    pageNumber: 87,
    chapter: 18,
    paragraphs: [
      'When we advertised for new developers, we posted on LinkedIn and received 450 applicants, of which only a handful properly read the requirements. We expressly did NOT want Elementor or page builder developers. We wanted people with a will to learn. Out of 450 applicants, only 2 made it to interview. Those two interns are now levelling up faster than anyone I\u2019ve ever seen.',
      'The process obsession at LightSpeed isn\u2019t despite ADHD; it\u2019s because of it. ADHD brains need structure to function, so I build meticulous systems \u2014 GitHub workflows, daily planning templates, curriculum structures \u2014 that keep the chaos productive. Radical delegation: giving the team freedom isn\u2019t just philosophy; it\u2019s necessity. An ADHD founder can\u2019t micromanage.',
      'Right now LightSpeed has the most optimal workflow and team it has ever had in the twenty-three years the company has been going. Technology fuels me. I embrace AI daily \u2014 GitHub Copilot, ChatGPT, Claude, and MCP \u2014 bringing them together with my love for Figma prototyping, design systems, and GitHub code management.',
    ],
  },

  /* ── Chapter 19: Twenty-Three Years ── */
  {
    id: 'ch19-title',
    type: 'chapter-start',
    pageNumber: 88,
    chapter: 19,
    title: 'Twenty-three years',
    subtitle: 'The business that became the longest project of a restless life.',
  },

  {
    id: 'ch19-content-1',
    type: 'chapter-content',
    pageNumber: 89,
    chapter: 19,
    paragraphs: [
      'LightSpeedDevelopment \u2014 LSD \u2014 was founded in January 2003. I was twenty-two years old. The acronym was intentional. The company wasn\u2019t born from a business plan; it was born from a fundamental need for autonomy. The same brain that rejected boredom in school rejected being told what to do at work. The solution was to build something of my own.',
      'You never know if you\u2019re ready to start a business, but I knew that I didn\u2019t want to work at City Varsity for another year. I\u2019ve always been entrepreneurial, but I really didn\u2019t like working for an employer. I have my own ideas and things that drive me. I have my own way \u2014 when you work for somebody else they tell you what to do and I would prefer to decide what I do. Throughout my whole life, I\u2019ve designed my life the way I want to live it.',
      'The company is the longest project I have ever worked on \u2014 longer than any festival circuit, any cycling route, any relationship. Twenty-three years is more than half my life. The lessons compound over decades.',
    ],
  },

  {
    id: 'ch19-content-2',
    type: 'chapter-content',
    pageNumber: 90,
    chapter: 19,
    paragraphs: [
      '\u2014 THE TIMELINE \u2014',
      '',
      '2003: Founded LightSpeed at age twenty-two. Initially an IT support company working from a spare bedroom in Cape Town. The name was deliberately chosen \u2014 LightSpeedDevelopment. LSD. That was intentional.',
      '2005: Hired the first employee. The company was no longer just me. That shift \u2014 from solo operator to employer \u2014 was one of the biggest psychological adjustments of the entire journey.',
      '2006: BarCamp Cape Town. The pivotal event. Met Dave Duarte, who introduced me to WordPress. This single unconference \u2014 where attendees create the schedule on the day \u2014 redirected LightSpeed from IT support to WordPress web development. Everything that followed traces back to that room.',
      '2006: Warwick Booth joined in December. He has been by my side for nearly two decades. The first truly right person.',
    ],
  },

  {
    id: 'ch19-content-3',
    type: 'chapter-content',
    pageNumber: 91,
    chapter: 19,
    paragraphs: [
      '2009: Chris Vancoillie joined the team. Another key addition that strengthened the development capacity.',
      '2010: Barbara Kerr joined and became a partner soon after. She took on the roles of COO, CFO, and HR \u2014 all the operational roles that my ADHD brain struggles with. Barbara\u2019s contribution to LightSpeed cannot be overstated. She brought structure, financial discipline, and human management skills that allowed me to focus on what I do best: creative direction, technical strategy, and client relationships.',
      '2011\u20132012: Organised WordCamp Cape Town. Gave back to the community that gave us everything.',
      '2017\u20132019: Jos\u00E9 Abreu joined for his first period. A talented developer who brought fresh energy and perspective.',
      '2020: Justin Abrahamse rejoined the team. Having someone return to the company after time away is one of the most validating things that can happen \u2014 it means the culture works.',
      '2021: Lourens Visser joined. The team continued to grow with people who shared the values.',
    ],
  },

  {
    id: 'ch19-content-4',
    type: 'chapter-content',
    pageNumber: 92,
    chapter: 19,
    paragraphs: [
      '2023: Tibi Buzdugan and Zared Rogers joined. The team was expanding into its strongest configuration yet.',
      '2025: Three interns joined \u2014 selected from 450 LinkedIn applicants, of whom only a handful properly read the requirements. We expressly did NOT want Elementor or page builder developers. We wanted people with a will to learn. Out of 450, only 2 made it to interview. Those interns are now levelling up faster than anyone I\u2019ve ever seen.',
      '2025: Jos\u00E9 Abreu rejoined in September. His return story is one of the best in LightSpeed history \u2014 proof that the right people find their way back.',
      '2026: Thirteen people. The most optimal team in twenty-three years. Core developers, designers, interns, and a founder who cycles to festivals with UV paint in his panniers.',
    ],
  },

  {
    id: 'ch19-content-5',
    type: 'chapter-content',
    pageNumber: 93,
    chapter: 19,
    paragraphs: [
      '\u2014 BARCAMP CAPE TOWN 2006: THE STORY \u2014',
      '',
      'BarCamp was an unconference \u2014 no preset agenda, no keynote speakers, no hierarchy. Attendees showed up and created the programme on the morning of the event. Topics were written on Post-it notes and arranged on a whiteboard. If you wanted to talk about something, you claimed a slot.',
      'Dave Duarte was there. He gave an impassioned talk about this open-source CMS called WordPress and why it was going to change the web. I was running an IT support company and dabbling in web design. Something clicked. Not just the technology \u2014 the philosophy. Open source. Community-driven. Transparent. Accessible. These were the same values my parents had instilled.',
      'The people at that BarCamp didn\u2019t just introduce me to WordPress \u2014 they introduced me to a way of working and building that would define the next two decades. Jeremy Thurgood, Jonathan Sobel, and dozens of others who became part of the extended LightSpeed network. Twenty-nine people at that event impacted my career in ways I\u2019m still discovering.',
    ],
  },

  {
    id: 'ch19-content-6',
    type: 'chapter-content',
    pageNumber: 94,
    chapter: 19,
    paragraphs: [
      '\u2014 THE PEOPLE WHO CHANGED EVERYTHING \u2014',
      '',
      'Warwick Booth \u2014 Joined December 2006. Lead Developer. Nearly two decades of working together, building together, problem-solving together. Warwick is the technical backbone of LightSpeed. When I say "the right people change everything," Warwick is the first name I think of. He understood the vision from day one and has been instrumental in every major project since.',
      'Barbara Kerr \u2014 Partner, COO/CFO/HR. Barbara and I built two businesses together \u2014 LightSpeed and Six Cats. She handles the operations, the finances, the human side of the business. Without Barbara, LightSpeed would be a very different company. She brought the structure that my ADHD brain needs but cannot create alone. Our partnership \u2014 personal and professional \u2014 is one of the most important relationships of my life.',
      'Jos\u00E9 Abreu \u2014 The return story. Jos\u00E9 first joined in 2017, left after two years, and returned in September 2025. His comeback was seamless \u2014 as if he\u2019d never left. The fact that someone would choose to return to LightSpeed after experiencing other workplaces tells you everything about the culture we\u2019ve built.',
    ],
  },

  {
    id: 'ch19-content-7',
    type: 'chapter-content',
    pageNumber: 95,
    chapter: 19,
    paragraphs: [
      '\u2014 PRODUCTS & OPEN SOURCE \u2014',
      '',
      'LSX Design System: Our flagship design system built in Figma. A comprehensive component library, typography scale, colour system, and spacing framework that bridges the gap between design and development. I spoke about it at WordCamp Europe 2025 in Basel.',
      'Tour Operator Plugin Suite: A collection of WordPress plugins for the tourism industry. Tour operators, activity providers, accommodation listings \u2014 a vertical-specific product that grew from our South African client base. The plugins handle bookings, itineraries, and integration with third-party travel systems.',
      'WooCommerce Style Book: A tool for standardising WooCommerce storefront appearance across client projects. Design tokens, component patterns, and a visual regression testing workflow.',
      'Open source has been central to LightSpeed\u2019s identity since the WordPress pivot. We contribute to the WordPress community through code, speaking, organising, and mentoring. The WordPress Theme Review Team, WordCamp organisation, and active participation in the block editor ecosystem.',
    ],
  },

  {
    id: 'ch19-content-8',
    type: 'chapter-content',
    pageNumber: 96,
    chapter: 19,
    paragraphs: [
      '\u2014 AI & THE MODERN WORKFLOW \u2014',
      '',
      'The fusion of AI, creativity, and open source has been a radical, life-changing shift. I\u2019m currently mentoring the entire team into a new age of AI-powered workflow. The tools: GitHub Copilot for code completion and pair programming. ChatGPT for research, content drafting, and brainstorming. Claude for deep analysis, long-form writing, and complex problem-solving. Model Context Protocol (MCP) for connecting AI assistants to our development tools.',
      'The team is levelling up week on week at a rate never seen before in my career. Yes, this is because of AI, but without a team that has the drive to learn, progress, and grow, this would not happen. AI amplifies what\u2019s already there. If the foundation is solid \u2014 curiosity, work ethic, willingness to learn \u2014 AI turns good developers into exceptional ones.',
      'Technology fuels me. I embrace AI daily \u2014 bringing together GitHub Copilot, ChatGPT, Claude, and MCP with my love for Figma prototyping, design systems, and GitHub code management. This portfolio website itself was built using AI-assisted workflows in Figma Make. The future of web development is not AI replacing developers. It\u2019s AI empowering developers to build things they couldn\u2019t build alone.',
    ],
  },

  {
    id: 'ch19-content-9',
    type: 'chapter-content',
    pageNumber: 97,
    chapter: 19,
    paragraphs: [
      '\u2014 WHAT TWENTY-THREE YEARS TEACHES YOU \u2014',
      '',
      'Freedom requires structure. The most liberating thing you can build is a system that works without you. ADHD brains need structure to function, so I build meticulous systems \u2014 GitHub workflows, daily planning templates, curriculum structures \u2014 that keep the chaos productive.',
      'The right people change everything. From Warwick in 2006 to the interns in 2025, every right hire shifted the trajectory. The wrong hires taught equally valuable lessons. Hiring is the single most impactful thing a founder does.',
      'ADHD is an engine, not a handicap. The hyperfocus. The pattern recognition. The need to build systems to manage the chaos. The ability to context-switch between design, code, client strategy, and team management. These are features, not bugs.',
      'The business feeds the art, the art feeds the business. The same brain that builds WordPress design systems is the brain that designs neon faces at 3am on a dancefloor. LightSpeed has run profitably for twenty-three years because the entrepreneurial drive and the creative drive are the same thing.',
      'Autonomy is non-negotiable. The freedom given to the LightSpeed team mirrors the freedom I demand for myself. Happy team, better work, better company. The company is the container that makes the rest possible \u2014 the Berlin summers, the Thailand bootcamps, the festival circuits, the art. LightSpeed is the financial engine that funds a life lived in full colour.',
    ],
  },

  /* ── Chapter 20: The Cumulative Effect ── */
  {
    id: 'ch20-title',
    type: 'chapter-start',
    pageNumber: 98,
    chapter: 20,
    title: 'The cumulative effect',
    subtitle: 'It\u2019s never one moment. It\u2019s the thousand moments that suddenly click.',
  },

  {
    id: 'ch20-content-1',
    type: 'chapter-content',
    pageNumber: 99,
    chapter: 20,
    paragraphs: [
      'It is never one thing. Usually it is the culmination of many experiences over a period that finally crystallise into understanding.',
      'The dancefloor at Vortex 1999. The 86-hour bus to Zambia. The solar eclipse. Berlin. The first time picking up UV paint. The 300-kilometre birthday ride to Origin. None of these alone explain who I am. Together, they are the cumulative effect.',
      'Certain experiences permanently upgraded the resolution at which I perceive the visual world. There\u2019s a before and after in my relationship with colour. Before, colours were things I saw. After, they were things I felt. The way neon paint bleeds under UV light, the way colours breathe and pulse on a dancefloor \u2014 these are things I noticed because my awareness had been opened to what was always there. Once you see the hidden frequency, you can\u2019t unsee it.',
    ],
  },

  {
    id: 'ch20-content-2',
    type: 'chapter-content',
    pageNumber: 100,
    chapter: 20,
    paragraphs: [
      'Every powerful experience is followed by integration \u2014 journaling, cycling, creating, talking with trusted friends. The goal was never to check out of reality. It was to check in more deeply. To bring back something useful \u2014 a new way of seeing colour, a dissolved creative block, a reminder that the universe is far stranger and more beautiful than the default settings suggest.',
      'The cycling is integration. The art is integration. The business is integration. Everything feeds back. LightSpeed has run profitably for twenty-three years because the entrepreneurial drive and the creative drive are the same thing: identify what makes you come alive, then engineer your entire existence around those things.',
      'The conventional path never matched the wiring. The wiring needed Berlin, needed the dancefloor, needed UV paint, needed the bicycle. The wiring needed freedom. And now, at this point in the story, the wiring has found its operating system. The neon soul is fully online.',
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     BACK MATTER
     ═══════════════════════════════════════════════════════════ */

  /* ── Afterword ── */
  {
    id: 'afterword',
    type: 'afterword',
    pageNumber: 101,
    title: 'Afterword',
    paragraphs: [
      'This book is being written the same way the art is made \u2014 not planned to the last detail, but trusted to emerge from the process. Some chapters are drafted from voice notes recorded on cycling rides. Others are still being lived.',
      'If there\u2019s a single lesson in these pages, it\u2019s this: the thing that felt like a curse was always the gift. The ADHD that made school unbearable made the dancefloor electric. The restlessness that frustrated employers built a company. The need to stand out on the dancefloor eventually put a paintbrush in my hand.',
      'If you\u2019ve read this far, you\u2019re already part of the story. The cumulative effect includes everyone who witnessed a glowing face on a dancefloor and understood, even for a moment, that the world is more vivid than we usually allow it to be.',
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     APPENDICES
     ═══════════════════════════════════════════════════════════ */

  /* ── Appendices Divider Page ── */
  {
    id: 'appendices-divider',
    type: 'part-title',
    pageNumber: 102,
    title: 'Appendices',
    subtitle: 'Extended reflections, tribes, and the dance continues.',
  },

  /* ═══════════════════════════════════════════════════════════
     APPENDIX A — DANCE LIKE NO ONE'S WATCHING
     ═════════════════════════════════════════════════════════��═ */

  {
    id: 'appendix-a-title',
    type: 'appendix-title',
    pageNumber: 103,
    title: 'Appendix A: Dance like no one\u2019s watching',
    subtitle: 'The other book \u2014 or maybe this book\u2019s secret twin.',
  },

  {
    id: 'appendix-a-content-1',
    type: 'chapter-content',
    pageNumber: 104,
    paragraphs: [
      'There\u2019s another book inside this book. It traces the same life through a different lens: the visual and identity evolution from the dancefloor outward. Costumes as confidence, movement as medicine, and makeup as the final creative expression.',
      'Chapter one: early days of dancing. A kid in a small town discovering that his body understood rhythm before his brain understood words. The first festivals, the first time losing yourself in the music and finding something better on the other side.',
      'Chapter two: the cow suit. Not just a costume but a transformation. The moment dressing up stopped being a joke and started being a statement. The Cow Man era taught me that visibility is a choice, and that choosing to be seen is the first act of creative courage.',
    ],
  },

  {
    id: 'appendix-a-content-2',
    type: 'chapter-content',
    pageNumber: 105,
    paragraphs: [
      'Chapter three: the chicken suit. Rewinding even further \u2014 the yellow suit at that first Vortex, the name that stuck, the discovery that people remember the ones who dare to be ridiculous. The chicken suit was permission to be absurd, and absurdity is the gateway to freedom.',
      'Chapter four: my rave suit. The evolution into deliberate self-expression. Not a character costume anymore, but an extension of identity. The rave suit era was the bridge between wearing something outrageous and BEING something outrageous.',
      'Chapter five: makeup. The final evolution. The costume became the art became the identity. No longer wearing something outrageous \u2014 now MAKING other people outrageous. The transition from performer to artist, from standing out to helping others stand out. This is where the two books converge: the dancefloor and the paintbrush arriving at the same truth. Whether \u201CDance Like No One\u2019s Watching\u201D becomes its own book or folds into this one remains to be decided. Some stories need two tellings to be fully heard.',
    ],
  },

  /* ═══════════════════════════════════════════════════════════
     APPENDIX B — THE TRIBES
     ══════════════════════════════��════════════════════════════ */

  {
    id: 'appendix-b-title',
    type: 'appendix-title',
    pageNumber: 106,
    title: 'Appendix B: The tribes',
    subtitle: 'The communities that shaped a neon soul.',
  },

  {
    id: 'appendix-b-intro',
    type: 'chapter-content',
    pageNumber: 107,
    paragraphs: [
      'We are the sum of our tribes. Not the families we\u2019re born into, but the communities we choose \u2014 the ones that recognise us before we recognise ourselves. These are the tribes that shaped me, held me, and gave me the freedom to become myself. Some are global networks spanning continents. Others are hyperlocal, defined by geography and a shared way of moving through the world.',
      'This appendix maps the tribes. The psytrance dancefloors. The WordPress community. The Berlin club scene. The trail runners, the cyclists, the festival freaks. These are not separate identities \u2014 they\u2019re overlapping frequencies that, when combined, create the person writing this book.',
    ],
  },

  /* ── Global Tribes ── */
  {
    id: 'appendix-b-global',
    type: 'chapter-content',
    pageNumber: 108,
    paragraphs: [
      '\u2014 GLOBAL TRIBES \u2014',
      '',
      '1. PSYTRANCE / 140 BPM',
      'The first tribe. The dancefloor family that taught me what it means to lose yourself and find yourself in the same breath. From Vortex 1999 to festivals across four continents, the psytrance scene is where I learned to dance, to connect, to create. Rolling basslines, UV lights, and a shared understanding that the dancefloor is a portal to something larger. The tribe that gave me my first costume, my first festival family, and eventually, my art form.',
      '',
      '2. WORDPRESS COMMUNITY',
      'The professional tribe. BarCamp Cape Town 2006 was the gateway \u2014 Dave Duarte, Jeremy Thurgood, and a room full of open-source believers who showed me that business and community don\u2019t have to be opposites. Twenty years of WordCamps across four continents. The Theme Review Team. The late-night discussions about design systems and block themes. This is the tribe that taught me radical transparency, knowledge-sharing, and the power of building in public.',
      '',
      '3. TECHNO & HOUSE MUSIC SCENE',
      'The sonic evolution. While psytrance was the foundation, techno and house are the architecture of my adult musical life. Pounding 4/4 rhythms, hypnotic repetition, and the understanding that electronic music is meditation in motion. From Cape Town\u2019s underground clubs to Berlin\u2019s legendary warehouses, this is the tribe that proved that dancing is a spiritual practice. The DJ booth is an altar. The dancefloor is a ceremony. The bass is the prayer.',
    ],
  },

  /* ── Location-Specific Tribes ── */
  {
    id: 'appendix-b-locations-1',
    type: 'chapter-content',
    pageNumber: 109,
    paragraphs: [
      '\u2014 LOCATION-SPECIFIC TRIBES \u2014',
      '',
      '1. CAPE TOWN PSYTRANCE SCENE',
      'Home base. Origin Festival. Alien Safari. The outdoor gatherings in the Boland mountains where it all started. This is where I learned to paint faces under UV light, where Six Cats Club was born, where the cycling tradition began. The Cape Town psytrance tribe is family \u2014 the ones who witnessed every evolution from Chicken Man to Cow Man to UV artist. The mountain backdrop, the Western Cape summer, the sunrise sets that turn into all-day sessions. This is where the roots grow deep.',
      '',
      '2. BERLIN CLUB SCENE',
      'The laboratory. Sisyphos. Griessm\u00FChle (RIP). About Blank. The warehouses and basements where techno is religion and the door policy is a filter for energy, not status. The Berlin club scene taught me that freedom isn\u2019t chaos \u2014 it\u2019s structure with the rules stripped away. The tribe here is neurodivergent creatives, DJs, visual artists, fire dancers, and festival freaks who understand that creativity isn\u2019t a career; it\u2019s a way of being. This is the tribe of misfits \u2014 the ones whose brains run on the same frequency.',
      '',
      '3. CAPE TOWN WORDPRESS & TECH COMMUNITY',
      'The professional home. LightSpeed\u2019s extended network. The organisers of WordCamp Cape Town. The developers, designers, and agency owners who meet for coffee at truth or Origin Coffee Roasting and talk shop until the espresso runs out. This tribe gave LightSpeed its first clients, its first collaborators, and a city-wide reputation for quality work. The overlap with the cycling and festival communities is significant \u2014 many of these people are multi-tribal.',
    ],
  },

  {
    id: 'appendix-b-locations-2',
    type: 'chapter-content',
    pageNumber: 110,
    paragraphs: [
      '4. TRAIL RUNNING TRIBE',
      'The mountain people. Table Mountain. Lion\u2019s Head. The trails that wind through fynbos and granite. Trail running is meditation in motion, endurance as spiritual practice. The tribe here values grit, humility, and the understanding that the mountain teaches lessons you can\u2019t learn anywhere else. Early morning starts. Vertical climbs. The camaraderie at the summit. This tribe taught me that strength is as much mental as physical.',
      '',
      '5. MOUNTAIN BIKING TRIBE',
      'The cyclists. The ones who understand that a loaded bike is freedom on two wheels. From racing days representing Western Province (1997\u20131999) to bike packing across continents, the mountain biking tribe taught me self-sufficiency, resourcefulness, and the meditative power of pedalling. Munich to Amsterdam. 7,000+ kilometres across Thailand. The 300-kilometre birthday ride to Origin Festival. The bike is the vehicle. The road is the teacher.',
      '',
      '6. TRIATHLON TRIBE',
      'The multi-discipline warriors. Swim, bike, run \u2014 repeat. The triathlon tribe values balance, structure, and the cumulative effect of consistent training. Koh Phangan bootcamps. Thai heat and humidity. The discipline required to train three sports simultaneously while working remotely. This tribe taught me that endurance isn\u2019t about one epic effort \u2014 it\u2019s about showing up every day and stacking small wins into transformation.',
    ],
  },

  /* ── Koh Phangan Muay Thai Crew ── */
  {
    id: 'appendix-b-koh-phangan',
    type: 'chapter-content',
    pageNumber: 111,
    paragraphs: [
      '\u2014 THE KOH PHANGAN MUAY THAI CREW \u2014',
      '',
      'Koh Phangan is not just a holiday destination. It\u2019s a training ground, a creative retreat, and a community that runs on a completely different clock. The Muay Thai crew \u2014 the fighters, the trainers, the people who show up at the gym every morning regardless of how the night before went \u2014 became one of the most important tribes in my life.',
      'I started training Muay Thai in 2019, first in Cape Town, then seriously on Koh Phangan during the 2023 and 2025 training seasons. The island attracts a specific type of person: digital nomads, fighters, yogis, and creatives who have structured their lives around freedom and discipline in equal measure. The gym is the meeting point.',
      'What the Muay Thai crew taught me: Your body is your primary tool. Discipline and freedom are not opposites. Suffering shared in training creates bonds that small talk never could. The island strips away pretence \u2014 at 7am in 35-degree heat, throwing kicks at a heavy bag, there is no room for ego. The Koh Phangan crew taught me that recovery is as important as exertion, that the best ideas come after training, and that a community built around shared physical challenge is one of the most honest tribes you can belong to.',
    ],
  },

  /* ── LightSpeed Team as Tribe ── */
  {
    id: 'appendix-b-lightspeed',
    type: 'chapter-content',
    pageNumber: 112,
    paragraphs: [
      '\u2014 LIGHTSPEED: THE LONGEST TRIBE \u2014',
      '',
      'Thirteen people. Twenty-three years. An extended family that builds websites, ships code, argues about design systems, and celebrates each other\u2019s victories. LightSpeed is not just a company \u2014 it\u2019s a tribe in the truest sense.',
      'The team operates remotely, distributed across South Africa and beyond. We connect through GitHub, Slack, video calls, and the occasional in-person gathering that reminds us why we chose each other. The values are explicit: freedom, autonomy, quality, continuous learning, and radical transparency.',
      'Warwick has been here since 2006. Barbara since 2010. Jos\u00E9 left and came back. The interns are levelling up faster than anyone I\u2019ve ever seen. This is a tribe that chose to be here \u2014 not because they couldn\u2019t find work elsewhere, but because the culture, the freedom, and the shared purpose of building excellent things together is worth more than a corporate salary.',
      'The overlap with other tribes is significant. LightSpeed team members attend WordCamps, ride bicycles, go to festivals, and train Muay Thai. The company is not separate from the life \u2014 it\u2019s integrated into it. The tribe that funds the art. The tribe that makes the freedom possible. The tribe that proves a company can be a family without being a cult.',
    ],
  },

  /* ── Cape Town Creative Community ── */
  {
    id: 'appendix-b-cape-town-creative',
    type: 'chapter-content',
    pageNumber: 113,
    paragraphs: [
      '\u2014 CAPE TOWN CREATIVE COMMUNITY \u2014',
      '',
      'Cape Town\u2019s creative scene is a tribe unto itself. It\u2019s where the garden meets the gallery, where the tech community overlaps with the festival scene, where the cyclists and the dancers and the entrepreneurs share coffee shops and co-working spaces and sunset sessions on Signal Hill.',
      'Six Cats Cannabis Club is part of this community \u2014 the growers, the plant enthusiasts, the people who approach cannabis as a craft rather than a commodity. The Cape Town creative tribe taught me that entrepreneurship and artistry are not separate paths \u2014 they\u2019re the same path viewed from different angles.',
      'The mountain defines this city. Table Mountain is the backdrop to everything \u2014 the training runs, the sunset sessions, the late-night drives home from parties. The creative community here is shaped by geography: mountains, ocean, vineyards, and bush all within a 30-minute drive. The landscape makes the people expansive. The people make the work meaningful.',
      'Cape Town is where I started. It\u2019s where LightSpeed was born, where Six Cats grows, where the cycling tradition began. Every other tribe leads back here eventually. This is the root system.',
    ],
  },

  /* ── The Overlap ── */
  {
    id: 'appendix-b-overlap',
    type: 'chapter-content',
    pageNumber: 114,
    paragraphs: [
      '\u2014 THE OVERLAP IS THE IDENTITY \u2014',
      '',
      'A map of belonging across six continents. The magic happens in the overlap. The WordPress developer who DJs psytrance sets. The trail runner who paints UV faces at festivals. The triathlete who codes during the week and dances all weekend. The Berlin club kid who runs a profitable agency from a laptop. The Muay Thai fighter who grows organic cannabis in a Cape Town garden.',
      'These tribes aren\u2019t separate \u2014 they\u2019re frequencies that, when layered, create something richer than any single identity. The psytrance dancefloor taught me to move. The WordPress community taught me to build. The Berlin scene taught me to be unapologetically myself. The endurance sports taught me discipline. The mountain taught me humility. The bicycle taught me freedom. The Muay Thai gym taught me presence. The LightSpeed team taught me that the right people change everything.',
      'No single tribe defines me. The intersection of all of them does. The overlap is the identity. We are the sum of our tribes. And these are mine.',
    ],
  },

  /* ── About the Author ── */
  {
    id: 'about-author',
    type: 'about-author',
    pageNumber: 115,
    title: 'About the author',
    paragraphs: [
      'Ashley \u201CAsh\u201D Ward Shaw is a South African-born, Berlin-based UV makeup artist, cyclist, WordPress agency founder, dancer, and self-described crazy Aquarian who loves life. He has been a hyperactive individual since childhood \u2014 whenever you see him he is moving and/or talking.',
      'He founded LightSpeedDevelopment (LSD) in 2003, represented Western Province in cross-country mountain biking, has cycled over 7,000 kilometres across Thailand, and has attended psytrance festivals on four continents. He picked up UV paint for the first time in July 2019 and hasn\u2019t put it down since.',
      'He splits his time between Cape Town, Berlin, and Koh Phangan. Transport: bicycle \u2014 always. Pronouns: he/him. Star sign: Aquarius. Neurotype: ADHD. The book arrives when it\u2019s ready, not before.',
    ],
  },

  /* ── Back Cover ── */
  {
    id: 'back-cover',
    type: 'back-cover',
    title: 'This one time on acid\u2026',
    paragraphs: [
      'A raw, honest memoir weaving the wildest stories from the psytrance dancefloor into the deepest lessons they taught. How an Aquarian soul, an ADHD brain, and Lucy in the Sky combined to create an artist, a nomad, and a life lived in full colour.',
      'From snails in a Paarl garden to UV paint on a Berlin dancefloor. From twelve stiffy discs to a million steps of dancing. From the Chicken Man to the Neon Soul. This is the cumulative effect.',
    ],
  },
];