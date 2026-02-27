/**
 * @fileoverview Blog posts mock data
 * Sample blog posts for development and testing
 * 
 * @module data/mock/blog/posts
 * @author Ash Shaw Portfolio Team
 * @version 1.1.0
 */

import { BlogPost } from '../../types';

import houwhoekPass from 'figma:asset/06d4edfbf4b3d5e14311a5a52ea6756b57d2c956.png';
import sunsetView from 'figma:asset/dfc0e7ceee6b7f81fd3e6ccf4d7036097bc79477.png';

/**
 * Blog Posts
 * Sample blog content for makeup tips, festival guides, and creative insights
 * 
 * @constant {BlogPost[]}
 */
export const blogPosts: BlogPost[] = [
  {
    id: 'origin-festival-2026-cycle-adventure',
    slug: 'origin-festival-2026-cycle-adventure',
    title: 'Origin Festival 2026: A Psytrance Cycle Odyssey',
    excerpt: 'A 300km birthday cycle journey to the heart of the psytrance floor. Sunsets, mountain passes, and a weekend of neon connection.',
    content: `
# Origin Festival 2026: A Psytrance Cycle Odyssey

For me, the pilgrimage to a psytrance festival is as important as the event itself. This year, for my birthday, I decided to cycle 300km from my home in Woodstock, Cape Town, to Origin Festival and back.

It wasn't just a ride; it was a meditation. A way to cleanse the mind before entering the psychedelic playground.

![Beautiful sunset over Elgin](${sunsetView})

I watched a beautiful sunset over Elgin, feeling the anticipation building. The energy of the coming gathering was palpable even from kilometers away.

## The Journey Begins

Today's ride to Grabouw via Sir Lowry's pass was 80km of pure adrenaline. I crushed that pass and felt on top of the world. Tomorrow, I celebrate my birthday in style, cycling the final 75km to Origin Festival in Helderstroom. Can't wait for a weekend of stomping, UV vibes, and reuniting with my trance family.

![Conquering Houwhoek Pass](${houwhoekPass})

## Festival Magic

I arrived at the party around 11:30 AM on Friday morning, buzzing with endorphins. I skipped the queue, shouted that it was my birthday, and the welcome was overwhelming!

Origin Festival is a staple of the Cape Town psytrance calendar. Thanks to Monique and Reagan for curating such an incredible space—the psychedelic decor, the thumping basslines, and the beautiful souls on the dancefloor were perfection.

I spent the weekend doing what I love most: painting faces in the shade during the day and watching them glow under the UV cannons at night. To my friends, thanks for making me feel so loved. It was a truly magnificent experience.

## The Return Journey

I cycled back to the farm in Elgin on Monday to decompress, and then finally all the way back to Cape Town on Tuesday.

Just conquered the road back to Cape Town after an unforgettable birthday ride. Completed just short of 300km with a 40kg bike pack, 3200m climbing, 14hrs of pure adrenaline and top speed of over 75km/hr.

Time to dive back into work focus and training for the next adventure. The beat goes on! One love & peace out 💚❤️🌈
    `,
    author: {
      name: 'Ash Shaw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Global Psytrance Artist'
    },
    publishedAt: '2026-02-04',
    updatedAt: '2026-02-04',
    category: 'Travel',
    tags: ['Cycling', 'Psytrance', 'Adventure', 'Origin Festival', 'Birthday', 'Travel'],
    featuredImage: {
      src: houwhoekPass,
      alt: 'Ash Shaw cycling Houwhoek Pass',
      caption: 'Conquering Houwhoek Pass on the way to Origin'
    },
    featured: true,
    readTime: 3
  },
  {
    id: 'festival-makeup-survival-guide',
    slug: 'festival-makeup-survival-guide',
    title: 'Psytrance Survival: 10 Tips for Bulletproof Makeup',
    excerpt: 'From sweat-proof primers to high-impact UV paints, here\'s how to make your makeup last through 12 hours of stomping in the dust.',
    content: `
# Psytrance Survival: 10 Tips for Bulletproof Makeup

Psytrance festivals are extreme environments. We are talking about dust, heat, sweat, and non-stop movement for days. Whether I'm cycling to a gathering in South Africa or dancing in a Thai jungle, one truth remains: **I want to stomp, not touch up my face.**

My "Neon vs Atomic Black" style needs to be crisp. Over the years, I've refined a "survival kit" routine that withstands the intensity of the trance floor.

## 1. Prime Like Your Life Depends On It

When I'm in Thailand, the humidity is 90%. Without a gripping primer, your art will slide off.
*   **For Tropical Climates:** Use sticky, gripping primers.
*   **Pro Tip:** Apply primer to eyelids and even lips. It anchors the neon.

## 2. Waterproof Is Non-Negotiable

If I'm cycling 75km to a festival, I'm sweating.
*   **Liners:** Must be waterproof. No panda eyes on the dancefloor.
*   **Body Paint:** Alcohol-activated paints or theatrical grease paints set with powder are indestructible.
*   **Glitter Glue:** Water-resistant is key for keeping your third eye intact.

## 3. The Sandwich Technique

"Double-setting" is my secret weapon for the Berlin techno bunkers.
1.  **Cream Base:** I work fast with creams.
2.  **Powder Set:** Lock it in.
3.  **Setting Spray:** Drench the face.
4.  **Repeat:** A second layer.

## 4. Embrace the UV

This is where the magic happens.
*   **Vibrant Colors:** Neon pinks, electric blues, acid greens.
*   **Graphic Liner:** Sharp, geometric lines hold up better than messy blending.
*   **Blacklight Check:** Always check your look under a UV torch before heading out.

## 5. Less Is More (Foundation-Wise)

Don't wear a mask. A heavy base cakes in the heat. I prefer spot concealing so the skin can breathe and sweat naturally while the neon design stays sharp.

## 6. Lip Stains Over Lipstick

We are busy dancing! Lip stains dye the skin for color that lasts through water and hydration breaks.

## 7. The "Survival" Kit

I carry my kit in my bike panniers.
*   **Blotting Papers:** For the T-zone.
*   **Mini Setting Spray:** A refreshing spritz cools you down.
*   **Cotton Buds:** For cleaning up edges.

## 8. Hydrate First

Makeup sits better on hydrated skin. A quick wipe and moisturizer makes the paint glide on smoother.

## 9. Strategic Creams

Cream blushes merge with your natural flush from dancing. Just remember to set them!

## 10. Embrace The Imperfection

We are human beings dancing in nature. The best psytrance looks celebrate the wildness. Smudged liner looks grungy and cool. Faded glitter tells the story of a great night.

## Final Thoughts

Psytrance makeup is a ritual. It's about connecting with your tribe. When I stop someone to paint their face, it's a moment of connection. These tips ensure that the art we create together lasts as long as the memory.

Now go out there, paint your face, and find me on the dancefloor! ✨

**Spot the bright guy cycling around? Come say hi! [Get in touch](#contact)**
    `,
    author: {
      name: 'Ash Shaw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Global Psytrance Artist'
    },
    publishedAt: '2024-06-15',
    updatedAt: '2024-06-15',
    category: 'Makeup Tips',
    tags: ['Psytrance', 'Makeup Tips', 'Long-Lasting', 'Berlin', 'Thailand', 'Survival'],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1080',
      alt: 'Festival makeup with vibrant colors',
      caption: 'Festival-ready makeup that lasts'
    },
    featured: true,
    readTime: 8,
    faqs: [
      {
        id: 'survival-faq-1',
        question: 'Will these tips work for outdoor summer festivals in Europe?',
        answer: 'Absolutely. I developed most of these techniques between Berlin open-air events and Cape Town outdoor parties. The heat and sweat challenges are similar — the sandwich technique and waterproof products are universal.'
      },
      {
        id: 'survival-faq-2',
        question: 'What setting spray do you recommend for 12+ hour wear?',
        answer: 'I rotate between a few depending on climate, but the key is layering — two coats of spray between cream and powder layers. The specific brand matters less than the technique of building thin, locked-in layers.'
      }
    ]
  },
  {
    id: 'uv-makeup-guide',
    slug: 'ultimate-uv-makeup-guide',
    title: 'Glowing in the Jungle: The Ultimate UV Guide',
    excerpt: 'Everything you need to know about creating stunning UV-reactive makeup. My guide to glowing under the blacklights of Thailand\'s jungle parties.',
    content: `
# Glowing in the Jungle: The Ultimate UV Guide

There is a special kind of magic that happens in Thailand between August and November. The sun goes down, the blacklights flicker on, and the jungle comes alive with glowing creatures.

UV makeup is the core of my identity. Whether I'm at the Jungle Experience in Koh Phangan or a psytrance rave in Cape Town, mastering the art of the glow allows you to become part of the visual frequency of the party.

## What Makes Makeup UV-Reactive?

It's science, baby! UV makeup contains fluorescent pigments that absorb UV light (blacklight) and instantly re-emit it. This is different from "glow-in-the-dark". UV makeup glows *instantly* and *intensely*.

**My Kit Essentials:**
*   Fluorescent pigments (DayGlo styles)
*   Neon colorants
*   Specific UV-reactive compounds

## The Best UV Makeup Products

I've tested everything in the humid Thai heat.
*   **Neon Paradise UV Face Paint:** Water-activated for fast detailed designs.
*   **Mehron Paradise AQ Neon:** Smells like coconut, glows intensely.
*   **Suva Beauty Hydra Liners:** Unmatched for graphic UV liner work.

## Application Techniques for Maximum Glow

### 1. The White Base Rule
Neon colors pop more on a white background. I often lay down a base of white face paint where I plan to put the neon to make it vibrate.

### 2. High Contrast "Atomic Black"
This is my signature: **Neon vs Atomic Black**.
If everything glows, nothing stands out. You need darkness to appreciate the light.
*   I use deep black liner to outline my neon shapes.
*   The black disappears into the darkness, making the floating neon shapes look 3D and holographic.

### 3. Geometric Patterns & Tribal Designs
UV makeup lends itself perfectly to precision.
*   **Dots:** Perfect circles using the back of a brush.
*   **Lines:** Sharp, architectural rays or tribal markings.
*   **Splatter:** Galaxy effects for a cosmic vibe.

## Safety First!

⚠️ **Important:** Not all neon pigments are eye-safe. Always be careful around the immediate eye area and patch test first.

## My Favorite UV Looks

### The Neon Warrior
Bold tribal lines across the cheekbones, a strong stripe down the chin, and dots above the brow. Electric blue and toxic green for a fierce vibe.

### Cosmic Galaxy
Blending purple and blue UV shadows as a base, then splattering white UV paint over the top to create stars.

## Pro Tips for the Night

1.  **Bring a Keyring Light:** A small UV keyring torch helps you check the makeup in the dark.
2.  **Photos:** Turn off the flash! You need the ambient UV light to capture the glow.

## The Final Glow

UV makeup is about play. It's about letting your inner child run wild in the psychedelic playground.

If you see me in Thailand or on a dance floor in Berlin, come find me. I might just have my UV paints with me, ready to make you glow. ✨

**Ready to create your own UV masterpiece? [Contact me](#contact)!**
    `,
    author: {
      name: 'Ash Shaw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Global Psytrance Artist'
    },
    publishedAt: '2024-05-20',
    updatedAt: '2024-05-22',
    category: 'Tutorials',
    tags: ['UV Makeup', 'Blacklight', 'Neon', 'Rave', 'Thailand', 'Psytrance'],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1566140967404-b8b3932483f5?w=1080',
      alt: 'UV makeup glowing under blacklight',
      caption: 'Neon UV makeup under blacklight'
    },
    featured: true,
    readTime: 10,
    faqs: [
      {
        id: 'uv-faq-1',
        question: 'Is UV face paint safe for sensitive skin?',
        answer: 'Most reputable UV paints are cosmetic-grade and safe for skin. However, not all neon pigments are eye-safe — always patch test on your inner wrist first, especially in the Thai heat where pores are more open. I avoid applying UV paint directly on the eyelids.'
      },
      {
        id: 'uv-faq-2',
        question: 'Do I need a UV torch or blacklight to check my look?',
        answer: 'Yes! A small UV keyring torch is essential. What looks bright under normal light might appear dull under blacklight, and vice versa. I always do a final check with my torch before heading to the dancefloor.'
      },
      {
        id: 'uv-faq-3',
        question: 'How long does UV face paint typically last?',
        answer: 'Water-activated UV paints last 4-8 hours depending on sweat and humidity. Alcohol-activated paints can last 12+ hours. Setting with translucent powder and a spray extends the wear time significantly.'
      }
    ]
  },
  {
    id: 'festival-packing-list',
    slug: 'essential-festival-makeup-packing-list',
    title: 'The Nomad\'s Kit: Essential Festival Packing List',
    excerpt: 'How to pack light for global travel. My essential lightweight makeup kit for cycling to festivals and island hopping.',
    content: `
# The Nomad's Kit: Essential Festival Packing List

Heading to a festival? The excitement is real, but so is the panic of packing. Do you bring everything "just in case," or travel light?

As someone who cycles to festivals (like my 300km trip to Origin!), space is luxury. Everything needs to fit into my bike panniers. Over years of traveling between Cape Town, Berlin, and Thailand, I've refined the **lightweight, mobile makeup kit**.

## The Foundation Essentials

*   **Tinted Moisturizer:** Tubes are lighter than glass bottles.
*   **High-Coverage Concealer:** A tiny pot goes a long way.
*   **Translucent Setting Powder:** Essential for the sweat.
*   **SPF 50:** Non-negotiable for outdoor parties.

## Eye Makeup Must-Haves

*   **One Versatile Palette:** Slim cardboard packaging saves weight.
*   **Waterproof Eyeliner:** Black and White.
*   **Waterproof Mascara:** Essential.
*   **Glitter + Glitter Glue:** Biodegradable only!
*   **Eye Makeup Stickers:** My secret weapon for instant impact.

## Lips & Cheeks

*   **Lip Stain:** Low maintenance color.
*   **Multistick:** Lips, cheeks, eyes. One product, three uses.

## Tools & Accessories

*   **Dual-Ended Brushes:** Space savers.
*   **Fingers:** The best tools!
*   **Small Mirror:** Don't rely on festival bathrooms.
*   **Headlamp:** Crucial for campsite makeup sessions.

## The "Oh Sh*t" Emergency Kit

*   **Band-aids:** For dancing blisters.
*   **Hand Sanitizer:** Hygiene first.
*   **Eye Drops:** For dust and smoke.
*   **Nail Glue:** Quick fixes.

## Pro Packing Tips

1.  **Waterproof Bag:** Keep your kit dry in a dry bag.
2.  **Decant:** Use contact lens cases for small amounts of product.
3.  **Label:** Festivals get messy.
4.  **Trash Bag:** Leave no trace!

Pack smart, travel light, and see you on the road! 🚴‍♂️✨
    `,
    author: {
      name: 'Ash Shaw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Global Psytrance Artist'
    },
    publishedAt: '2024-04-10',
    updatedAt: '2024-04-10',
    category: 'Festival Tips',
    tags: ['Festival', 'Packing List', 'Essentials', 'Tips', 'Travel', 'Cycling'],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1080',
      alt: 'Festival makeup products laid out',
      caption: 'Festival makeup essentials'
    },
    featured: false,
    readTime: 5
  },
  {
    id: 'thailand-festival-experience',
    slug: 'makeup-artistry-thailand-festivals',
    title: 'Neon Jungle: My Thailand Festival Season',
    excerpt: 'Living in Thailand from August to November. Behind the scenes of creating vibrant UV looks in the tropical paradise of Koh Phangan.',
    content: `
# Neon Jungle: My Thailand Festival Season

Thailand. The Land of Smiles. And from August to November, my psychedelic playground.

While Berlin gives me the dark, industrial techno edge, Thailand is where I reconnect with color, nature, and flow. From the Full Moon Parties on Koh Phangan to the deep Jungle Experience, the energy here is pulsating.

## The Tropical Challenge

The first lesson of Thai artistry: humidity takes no prisoners. 90% humidity means sweat starts immediately.

**My Solutions:**
I overhauled my kit. Heavy foundations were out. I focus on "sweat-proof" eye designs using graphic liners and alcohol-activated body paints that stain the skin and move with the sweat.

## Jungle Festival Vibes

There is something primal about partying in the jungle. The aesthetic in Koh Phangan is distinct: glowing, organic, and neon.

*   **UV is King:** The jungle canopy is dark, so UV-reactive paints are essential.
*   **Tropical Palette:** Turquoise like the ocean, coral pinks, and vivid greens.
*   **Natural Skin:** We keep skin fresh and dewy, enhancing tans rather than covering them.

## Cultural Respect

Working in a different culture requires mindfulness. In Thailand, the head is sacred. I always ask permission before touching anyone's face, and respect local customs.

## Favorite Looks from the Season

### The Island Glow
*   **Base:** Ultra-sheer skin tint with illuminator.
*   **Eyes:** Gold or copper shimmer.
*   **Vibe:** "Beach goddess."

### Jungle Warrior
*   **Design:** Sharp, geometric tribal markings in UV Green and Orange.
*   **Eyes:** Blacked out graphic liner.
*   **Vibe:** Fierce and ready to stomp.

### Full Moon Magic
*   **Base:** White face paint patches to boost neon vibrancy.
*   **Design:** Swirling cosmic galaxies.
*   **Vibe:** Ethereal and space-age.

## The Magic of Thai Festival Culture

I love the *Sabai Sabai* (relax, chill) attitude. Everyone is there to connect with nature, the music, and each other.

I've painted faces of people from 50 different countries here, all united by the beat. If you ever get the chance to experience a Thai festival, GO. And let me know—I might just be there with my brushes ready! 🌴✨

**Planning a trip to Thailand? [Get in touch](#contact)!**
    `,
    author: {
      name: 'Ash Shaw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Global Psytrance Artist'
    },
    publishedAt: '2024-03-05',
    updatedAt: '2024-03-05',
    category: 'Travel',
    tags: ['Thailand', 'Festival', 'Travel', 'Experience', 'Tropical', 'Psytrance'],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1080',
      alt: 'Thailand festival makeup in tropical setting',
      caption: 'Festival vibes in Thailand'
    },
    featured: true,
    readTime: 7
  },
  {
    id: 'color-theory-for-makeup',
    slug: 'color-theory-makeup-artists',
    title: 'Psychedelic Color Theory: An Intuitive Approach',
    excerpt: 'How I pick colors for strangers in seconds on the dancefloor. Transforming makeup artistry with intuitive color theory.',
    content: `
# Psychedelic Color Theory: An Intuitive Approach

People often ask me how I decide on a makeup look for a stranger I've just met on a dance floor. I don't have hours. I have seconds.

My process is intuitive, but grounded in **Color Theory**. I look at your skin complexion, your hair, and your eye color, and I instantly see the complementary colors that will make you vibrate.

## The Color Wheel Basics

*   **Primary:** Red, Blue, Yellow.
*   **Secondary:** Orange, Green, Purple.

## My "3-Second" Analysis

1.  **Scan the Eyes:**
    *   **Blue Eyes:** I reach for Oranges, Coppers, and Bronzes (Complementary contrast).
    *   **Green Eyes:** Purples, Reds, or Pinks.
    *   **Brown Eyes:** Vibrant Blues or Turquoise make them pop.

2.  **Scan the Skin Tone:**
    *   **Warm Undertones:** Earth tones, Golds, warm Reds.
    *   **Cool Undertones:** Silvers, Blues, Cool Purples.

## Color Harmonies on the Dance Floor

### 1. Complementary Colors (The "Pop")
Opposites attract. Blue next to Orange creates maximum vibration. Great for high-energy psytrance looks where you want to be seen from a distance.

### 2. Analogous Colors (The "Flow")
Colors that sit next to each other (Blue, Blue-Green, Green). Creates a harmonious, "mermaid" vibe for daytime parties.

### 3. Triadic Colors (The "Bold")
Red, Blue, Yellow. Bold, playful, primary. A statement.

## Temperature: Warm vs. Cool

*   **Warm Colors:** Energetic, sunny. Great for day parties.
*   **Cool Colors:** Mysterious, ethereal. Perfect for Berlin techno bunkers.

## Pro Tips for Practice

1.  **Trust Your Eye:** If it looks good, it IS good.
2.  **Break The Rules:** Clashing colors can look high-fashion and edgy.
3.  **Speed:** Practice making these decisions fast.

Color theory turns makeup from a routine into an art form. It allows me to connect with you instantly and create something that is uniquely *yours*. 🎨

**Want a personalized color consultation? [Contact me](#contact)!**
    `,
    author: {
      name: 'Ash Shaw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Global Psytrance Artist'
    },
    publishedAt: '2024-02-14',
    updatedAt: '2024-02-14',
    category: 'Education',
    tags: ['Color Theory', 'Education', 'Makeup Tips', 'Tutorial', 'Artistry'],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1601742162870-46790bce3120?w=1080',
      alt: 'Colorful makeup demonstrating color theory',
      caption: 'Color theory in action'
    },
    featured: false,
    readTime: 6
  },
  {
    id: 'eco-friendly-glitter-guide',
    slug: 'eco-friendly-glitter-guide',
    title: 'Sparkle Responsibly: The Eco-Glitter Revolution',
    excerpt: 'I love nature as much as I love festivals. That\'s why I refuse to use plastic glitter. Here is my guide to guilt-free sparkling.',
    content: `
# Sparkle Responsibly: The Eco-Glitter Revolution

I spend my life outdoors. I cycle mountain passes, swim in Thai oceans, and dance in forests. I love nature.

That is why there is one rule in my makeup kit: **No Plastic Glitter.**

Traditional glitter is microplastic. It ends up in the ocean and marine life eats it. Not chic. The good news? **Bioglitter** exists.

## What is Biodegradable Glitter?

True biodegradable glitter is made from plant cellulose, primarily eucalyptus trees.

**Why I Love It:**
*   **Feel:** Softer on the skin.
*   **Shine:** Just as metallic and holographic.
*   **Decomposition:** Breaks down naturally.

## My Favorite Brands

*   **Bioglitter™:** The gold standard.
*   **EcoStardust:** Amazing mixes.
*   **Festival Face:** Great chunky mixes.

## How to Apply & Remove

**Application:**
1.  **Prep:** Apply glitter primer or aloe vera gel.
2.  **Pack:** Pat glitter onto the sticky base.
3.  **Set:** Use setting spray.

**Removal:**
1.  **The Wipe:** Wipe off with a reusable cotton pad.
2.  **The Bin:** Throw bulk glitter in the bin/compost.
3.  **The Wash:** Wash your face. Strays are safe for the drain.

## The Future is Sparkly AND Sustainable

Making the switch to eco-glitter is the easiest way to make your festival experience greener. We can shine without leaving a trace.

Let's protect the playgrounds we love to dance in. 🌍✨
    `,
    author: {
      name: 'Ash Shaw',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
      bio: 'Global Psytrance Artist'
    },
    publishedAt: '2024-01-20',
    updatedAt: '2024-01-20',
    category: 'Sustainability',
    tags: ['Eco-Friendly', 'Sustainability', 'Glitter', 'Festival', 'Green'],
    featuredImage: {
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=1080',
      alt: 'Eco-friendly biodegradable glitter',
      caption: 'Sustainable sparkle'
    },
    featured: false,
    readTime: 4
  }
];