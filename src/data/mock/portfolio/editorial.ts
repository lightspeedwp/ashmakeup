/**
 * @fileoverview Editorial and experimental portfolio work
 * Studio-based avant-garde makeup art exploring artistic boundaries
 * 
 * @module data/mock/portfolio/editorial
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { PortfolioEntry } from '../../types';

/**
 * Editorial & Experimental Portfolio Work
 * Studio pieces exploring makeup as abstract art and editorial fashion
 * 
 * @constant {PortfolioEntry[]}
 */
export const editorialWork: PortfolioEntry[] = [
  {
    id: 'neon-architecture-series-1',
    slug: 'neon-architecture-series-1',
    title: 'Neon architecture series 1',
    category: 'Special Effects',
    subcategory: 'Editorial',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800&q=90&fit=crop',
        alt: 'Geometric architectural makeup design with sharp angular lines in hot pink and royal blue on model face',
        title: 'Neon architecture series 1 - main',
        caption: 'Architectural geometric design',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Sharp angular lines in hot pink and royal blue inspired by brutalist architecture'
      }
    ],
    location: 'Studio, Berlin',
    event: 'Editorial Session',
    date: '2021-09-12',
    description: 'Architectural geometric design featuring sharp angular lines in hot pink and royal blue. Studio editorial piece exploring the intersection of makeup art and modernist architecture, with brutalist concrete inspiration. This piece pushed the boundaries of traditional makeup application by treating the face as an architectural canvas.',
    excerpt: 'Architectural geometric design inspired by brutalist modernism',
    tags: ['Editorial', 'Geometric', 'Architecture', 'Studio', 'Experimental', 'Berlin'],
    featured: false,
    order: 101
  },
  {
    id: 'abstract-expressionism-face',
    slug: 'abstract-expressionism-face',
    title: 'Abstract expressionism face',
    category: 'Special Effects',
    subcategory: 'Experimental',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=800&q=90&fit=crop',
        alt: 'Avant-garde experimental makeup with chaotic splatter patterns in all 8 neon colors creating abstract art on face',
        title: 'Abstract expressionism face - main',
        caption: 'Abstract splatter art',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Chaotic splatter patterns in all 8 neon colors exploring makeup as pure abstract art'
      }
    ],
    location: 'Studio, Cape Town',
    event: 'Experimental Art Session',
    date: '2022-05-20',
    description: 'Avant-garde experimental piece with chaotic splatter patterns in all 8 neon colors. Pure artistic expression without commercial or festival constraints, exploring the boundaries of makeup as abstract art. This session allowed complete creative freedom to treat the face as a canvas for color exploration and spontaneous expression.',
    excerpt: 'Pure abstract expression with 8-color neon splatter technique',
    tags: ['Experimental', 'Abstract', 'Splatter', 'Studio', 'Avant-garde', 'Cape Town'],
    featured: false,
    order: 102
  },
  {
    id: 'cyborg-renaissance',
    slug: 'cyborg-renaissance',
    title: 'Cyborg renaissance',
    category: 'Special Effects',
    subcategory: 'Experimental',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=90&fit=crop',
        alt: 'Futuristic cyborg makeup combining organic skin with geometric circuit board patterns in aqua cyan and violet purple',
        title: 'Cyborg renaissance - main',
        caption: 'Cyborg circuit design',
        position: 'center',
        aspectRatio: '4:3',
        description: 'Futuristic design merging human and machine with circuit patterns in aqua cyan and violet purple'
      }
    ],
    location: 'Studio, Berlin',
    event: 'Editorial Transhumanism Series',
    date: '2024-03-15',
    description: 'Futuristic cyborg-inspired design combining organic skin with geometric circuit board patterns in aqua cyan and violet purple. Editorial piece exploring transhumanism and technology themes. The piece investigates the relationship between human identity and technological enhancement in the modern age.',
    excerpt: 'Transhumanist editorial exploring human-machine fusion',
    tags: ['Editorial', 'Cyborg', 'Futuristic', 'Technology', 'Studio', 'Berlin'],
    featured: true,
    order: 100
  }
];
