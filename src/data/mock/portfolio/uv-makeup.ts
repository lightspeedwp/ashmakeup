/**
 * @fileoverview UV/blacklight makeup portfolio
 * Neon and glow-in-the-dark makeup for club and rave environments
 * 
 * @module data/mock/portfolio/uv-makeup
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - Added 5 Berlin club/warehouse entries (2019-2023)
 */

import { PortfolioEntry } from '../../types';

// Import Figma assets
import rainbowLightningImg from 'figma:asset/d99e9e671329d5df41ad0f55042fb3f135e30fdf.png';
import electricBlueImg from 'figma:asset/bb2d15f1b5450668f0a032ad3765e13d8db4fdd2.png';

/**
 * UV Makeup Portfolio
 * Neon, blacklight, and glow-in-the-dark work
 * 
 * @constant {PortfolioEntry[]}
 */
export const uvMakeupWork: PortfolioEntry[] = [
  {
    id: 'neon-warehouse-nights',
    slug: 'neon-warehouse-nights',
    title: 'Neon warehouse nights',
    category: 'UV Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1541844053589-346841d0b273?w=800&q=90&fit=crop',
        alt: 'Electric green and hot pink UV gradients blended across temples and cheekbones glowing under techno strobe lights',
        title: 'Neon warehouse nights - main',
        caption: 'UV gradients Berghain',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Electric green and hot pink UV gradients designed for Berlin techno temple strobes'
      }
    ],
    location: 'Berghain Panorama Bar, Berlin',
    event: 'Techno Warehouse Session',
    date: '2019-08-23',
    description: 'Electric green and hot pink UV gradients blended across the temples and cheekbones, designed to glow under the relentless strobe lights of Berlin\'s most iconic techno temple. First experiment with full-face UV coverage. This piece marked the beginning of his exploration into club-specific makeup that responds to industrial lighting environments.',
    excerpt: 'First full-face UV experiment at Berghain',
    tags: ['UV', 'Berlin', 'Techno', 'Berghain', 'Gradient', 'Club'],
    featured: false,
    order: 10
  },
  {
    id: 'cyberpunk-revival',
    slug: 'cyberpunk-revival',
    title: 'Cyberpunk revival',
    category: 'UV Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1534224039826-c7a0eda0e6b3?w=800&q=90&fit=crop',
        alt: 'Royal blue and violet purple asymmetrical design with sharp angular lines cutting across face for Valentine warehouse rave',
        title: 'Cyberpunk revival - main',
        caption: 'Asymmetrical UV design',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Royal blue and violet purple asymmetrical angular design for warehouse rave'
      }
    ],
    location: 'About Blank, Berlin',
    event: 'Valentine\'s Day Warehouse Rave',
    date: '2020-02-14',
    description: 'Royal blue and violet purple asymmetrical design with sharp angular lines cutting across the face. Created for a Valentine\'s Day warehouse rave, pushing the boundaries of club makeup into full body paint territory. The design challenged conventional symmetry expectations in makeup application.',
    excerpt: 'Asymmetrical blue and purple for Valentine\'s warehouse',
    tags: ['UV', 'Berlin', 'Cyberpunk', 'Asymmetrical', 'Warehouse', 'Club'],
    featured: false,
    order: 11
  },
  {
    id: 'toxic-lime-awakening',
    slug: 'toxic-lime-awakening',
    title: 'Toxic lime awakening',
    category: 'UV Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&q=90&fit=crop',
        alt: 'Pure electric green UV paint with aqua cyan accents featuring flowing organic shapes inspired by garden venue',
        title: 'Toxic lime awakening - main',
        caption: 'Post-lockdown green UV',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Electric green UV paint with aqua cyan accents celebrating return to open-air dancing'
      }
    ],
    location: '://about blank Open Air, Berlin',
    event: 'Post-Lockdown Open Air',
    date: '2021-06-19',
    description: 'Pure electric green UV paint with aqua cyan accents, celebrating the return to open-air dancing after lockdown. The design featured flowing organic shapes inspired by the venue\'s garden setting. This piece represents the emotional release and joy of returning to dancefloor culture after isolation.',
    excerpt: 'Organic green UV celebrating post-lockdown freedom',
    tags: ['UV', 'Berlin', 'Green', 'Organic', 'Open Air', 'Garden'],
    featured: false,
    order: 12
  },
  {
    id: 'atomic-sunset',
    slug: 'atomic-sunset',
    title: 'Atomic sunset',
    category: 'UV Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?w=800&q=90&fit=crop',
        alt: 'Blazing orange to pure yellow gradient across eyelids and cheeks with hot red accents along jawline during golden hour',
        title: 'Atomic sunset - main',
        caption: 'Sunset gradient UV',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Orange to yellow sunset gradient with hot red accents for industrial venue'
      }
    ],
    location: 'Griessmuehle, Berlin',
    event: 'Golden Hour Open Air',
    date: '2022-07-08',
    description: 'Blazing orange to pure yellow gradient across the eyelids and cheeks, with hot red accents along the jawline. Created during golden hour before an all-night open-air session in the legendary industrial venue. The warm color palette mirrors the transition from daylight to UV-lit night.',
    excerpt: 'Warm sunset gradients for Griessmuehle golden hour',
    tags: ['UV', 'Berlin', 'Sunset', 'Gradient', 'Warm', 'Industrial'],
    featured: false,
    order: 13
  },
  {
    id: 'aqua-dream-sequence',
    slug: 'aqua-dream-sequence',
    title: 'Aqua dream sequence',
    category: 'UV Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=800&q=90&fit=crop',
        alt: 'Aqua cyan and royal blue swirls flowing from temples to collarbones with water-like fluidity and geometric interruptions',
        title: 'Aqua dream sequence - main',
        caption: 'Fluid aqua UV swirls',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Aqua cyan and royal blue fluid patterns inspired by lakeside venue location'
      }
    ],
    location: 'Sisyphos, Berlin',
    event: 'Lakeside Techno Marathon',
    date: '2023-04-22',
    description: 'Aqua cyan and royal blue swirls flowing from the temples down to the collarbones, inspired by the venue\'s lakeside location. The design incorporated water-like fluidity with sharp geometric interruptions. This piece explores the tension between organic movement and structured techno aesthetics.',
    excerpt: 'Fluid aqua patterns for Sisyphos lakeside',
    tags: ['UV', 'Berlin', 'Aqua', 'Fluid', 'Geometric', 'Lakeside'],
    featured: false,
    order: 14
  },
  {
    id: 'rainbow-lightning',
    slug: 'rainbow-lightning',
    title: 'Rainbow lightning',
    category: 'UV Makeup',
    date: '2024-11-02',
    images: [
      {
        src: rainbowLightningImg,
        alt: 'Rainbow Lightning - UV dots under eyes with rainbow body paint',
        title: 'Rainbow lightning',
        caption: 'Rainbow dots',
        description: 'Redhead with UV dots under eyes and rainbow body paint',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Psytrance Festival',
    description: 'Vibrant UV dots and rainbow body paint creating electric energy for the main stage.',
    excerpt: 'Electric rainbow UV art',
    tags: ['UV', 'Rainbow', 'Neon', 'Electric', 'Psytrance'],
    featured: false,
    order: 2
  },
  {
    id: 'electric-blue',
    slug: 'electric-blue',
    title: 'Electric blue',
    category: 'UV Makeup',
    date: '2024-11-15',
    images: [
      {
        src: electricBlueImg,
        alt: 'Electric Blue - rainbow UV face paint with jellyfish ear accessory',
        title: 'Electric blue',
        caption: 'Rainbow UV',
        description: 'Man with rainbow UV face paint and jellyfish ear accessory',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Berlin Underground',
    description: 'Bold rainbow UV face paint with unique jellyfish accessories, designed for the deep techno bunker.',
    excerpt: 'Playful rainbow UV patterns',
    tags: ['UV', 'Rainbow', 'Creative', 'Techno', 'Bold'],
    featured: false,
    order: 3
  },
  {
    id: 'neon-galaxy',
    slug: 'neon-galaxy',
    title: 'Neon galaxy',
    category: 'UV Makeup',
    date: '2024-10-20',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1534174876306-04f2dcf19596?w=800',
        alt: 'Neon Galaxy - cosmic UV body paint with starfield patterns',
        title: 'Neon galaxy',
        caption: 'Cosmic UV',
        description: 'Swirling galaxyUV body paint with glowing star patterns',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Origin Festival',
    description: 'Cosmic-inspired UV body art with swirling galaxy patterns and glowing stars for the ambient chill zone.',
    excerpt: 'Cosmic UV masterpiece',
    tags: ['UV', 'Galaxy', 'Cosmic', 'Ambient', 'Psytrance'],
    featured: false,
    order: 4
  },
  {
    id: 'toxic-green',
    slug: 'toxic-green',
    title: 'Toxic green',
    category: 'UV Makeup',
    date: '2024-10-05',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1563158274-2cbb56857e21?w=800',
        alt: 'Toxic Green - neon green UV tribal patterns',
        title: 'Toxic green',
        caption: 'Tribal neon',
        description: 'Intense neon green UV tribal face paint',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Vortex Festival',
    description: 'Bold neon green tribal patterns that glow intensely under blacklight, perfect for the main stage energy.',
    excerpt: 'Intense green tribal UV',
    tags: ['UV', 'Green', 'Tribal', 'Bold', 'Techno'],
    featured: false,
    order: 5
  },
  {
    id: 'pink-cyberpunk',
    slug: 'pink-cyberpunk',
    title: 'Pink cyberpunk',
    category: 'UV Makeup',
    date: '2024-09-22',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1580052614080-2290c2e43303?w=800',
        alt: 'Pink Cyberpunk - hot pink UV geometric patterns',
        title: 'Pink cyberpunk',
        caption: 'Cyber neon',
        description: 'Geometric hot pink UV face paint with cyber aesthetic',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    location: 'Berlin Techno Club',
    description: 'Futuristic hot pink UV geometric designs with sharp lines and cyber aesthetics for the industrial techno floor.',
    excerpt: 'Futuristic pink UV geometry',
    tags: ['UV', 'Pink', 'Cyberpunk', 'Geometric', 'Techno'],
    featured: false,
    order: 6
  },
  {
    id: 'aqua-waves',
    slug: 'aqua-waves',
    title: 'Aqua waves',
    category: 'UV Makeup',
    date: '2024-09-10',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800',
        alt: 'Aqua Waves - flowing cyan UV body patterns',
        title: 'Aqua waves',
        caption: 'Flowing cyan',
        description: 'Flowing cyan UV body art with wave-like patterns',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    location: 'Solipse Festival',
    description: 'Flowing cyan UV body art with organic wave patterns, creating an aquatic dream for the downtempo stage.',
    excerpt: 'Flowing cyan UV waves',
    tags: ['UV', 'Cyan', 'Waves', 'Organic', 'Ambient'],
    featured: false,
    order: 7
  }
];