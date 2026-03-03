/**
 * @fileoverview Editorial and experimental portfolio work
 * Studio-based avant-garde makeup art exploring artistic boundaries
 * 
 * @module data/mock/portfolio/editorial
 * @author Ash Shaw Portfolio Team
 * @version 1.1.0 - Updated Unsplash image URLs
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
        src: 'https://images.unsplash.com/photo-1658777212671-c899f7df20f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBtYWtldXAlMjBhcmNoaXRlY3R1cmUlMjBwaW5rJTIwYmx1ZSUyMG5lb24lMjBzdHVkaW98ZW58MXx8fHwxNzcyNTQ3ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        src: 'https://images.unsplash.com/photo-1679141335462-547b83aa99f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMHNwbGF0dGVyJTIwbWFrZXVwJTIwbmVvbiUyMGNvbG9ycyUyMHN0dWRpbyUyMGFydHxlbnwxfHx8fDE3NzI1NDc4MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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
        src: 'https://images.unsplash.com/photo-1647129916920-6ab0451b3b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY3lib3JnJTIwbWFrZXVwJTIw2lyY3VpdCUyMGJvYXJkJTIwbmVvbiUyMHB1cnBsZSUyMGN5YW4lMjBzdHVkaW98ZW58MXx8fHwxNzcyNTQ3ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
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