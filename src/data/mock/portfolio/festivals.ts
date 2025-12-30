/**
 * @fileoverview General festival makeup portfolio
 * Diverse collection of festival makeup from various events
 * 
 * @module data/mock/portfolio/festivals
 * @author Ash Shaw Portfolio Team
 * @version 2.0.0 - Updated with actual Figma assets
 */

import { PortfolioEntry } from '../../types';

/**
 * Festival Makeup Portfolio
 * From music festivals to cultural celebrations
 * 
 * @constant {PortfolioEntry[]}
 */
export const festivalWork: PortfolioEntry[] = [
  {
    id: 'nation-of-gondwana',
    slug: 'nation-of-gondwana-festival',
    title: 'Nation of Gondwana Festival',
    category: 'Festival Makeup',
    images: [
      {
        src: 'figma:asset/74b708f3be9c02b929444ed900d4217477ac45ad.png',
        alt: 'Nation of Gondwana Festival - beautiful woman with rainbow UV face paint streaks and bright smile',
        title: 'Rainbow Festival Magic',
        caption: 'Rainbow Festival Magic',
        description: 'Vibrant rainbow UV face paint creating pure festival joy',
        position: 'center',
        aspectRatio: '4:3'
      },
      {
        src: 'figma:asset/d99e9e671329d5df41ad0f55042fb3f135e30fdf.png',
        alt: 'Nation of Gondwana Festival - redhead with UV dots under eyes and rainbow body paint',
        title: 'Electric UV Artistry',
        caption: 'Electric UV Artistry',
        description: 'UV reactive dots and rainbow body paint',
        position: 'right',
        aspectRatio: '3:4'
      },
      {
        src: 'figma:asset/bb2d15f1b5450668f0a032ad3765e13d8db4fdd2.png',
        alt: 'Nation of Gondwana Festival - man with rainbow UV face paint and jellyfish ear accessory',
        title: 'Cosmic Festival Warrior',
        caption: 'Cosmic Festival Warrior',
        description: 'Bold rainbow UV patterns with creative accessories',
        position: 'left',
        aspectRatio: '4:3'
      }
    ],
    event: 'Nation of Gondwana',
    description: 'Capturing the vibrant energy and creative spirit of Nation of Gondwana Festival with UV reactive rainbow face paint and body art.',
    excerpt: 'Rainbow UV festival energy',
    tags: ['Nation of Gondwana', 'UV', 'Rainbow', 'Festival', 'Body Paint'],
    featured: true,
    order: 1
  },
  {
    id: 'jungle-festival-koh-phangan',
    slug: 'jungle-festival-koh-phangan',
    title: 'Jungle Festival Magic',
    category: 'Festival Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1533408944756-4950754f3ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqdW5nbGUlMjBmZXN0aXZhbCUyMG1ha2V1cCUyMFVWJTIwbmVvbnxlbnwxfHx8fDE3NTkyMzc4MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Jungle Festival makeup with tropical and vibrant elements',
        title: 'Jungle Festival Magic',
        caption: 'Jungle Vibes',
        position: 'center',
        aspectRatio: '16:9'
      }
    ],
    location: 'Koh Phangan',
    event: 'Jungle Festival',
    date: 'Friday 26 September',
    description: 'Capturing the wild energy and natural beauty of jungle festival celebrations.',
    excerpt: 'Wild jungle festival energy',
    tags: ['Jungle', 'Festival', 'Tropical', 'Nature', 'Wild'],
    featured: false,
    order: 2
  },
  {
    id: 'origin-festival-explosive',
    slug: 'origin-festival-explosive',
    title: 'Origin Festival Explosive Energy',
    category: 'Festival Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1080',
        alt: 'Origin Festival makeup with bold and explosive colors',
        title: 'Origin Festival Explosive Energy',
        caption: 'Explosive Energy',
        position: 'center',
        aspectRatio: '4:3'
      }
    ],
    event: 'Origin Festival',
    description: 'Bold and explosive makeup capturing the high-energy atmosphere of Origin Festival.',
    excerpt: 'Explosive festival energy and bold colors',
    tags: ['Origin', 'Festival', 'Explosive', 'Bold', 'High Energy'],
    featured: false,
    order: 3
  },
  {
    id: 'little-forest-new-year',
    slug: 'little-forest-new-year',
    title: 'Little Forest New Year',
    category: 'Festival Makeup',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=1080',
        alt: 'Little Forest New Year celebration makeup with peaceful and natural elements',
        title: 'Little Forest New Year',
        caption: 'Peaceful Celebration',
        position: 'center',
        aspectRatio: '3:4'
      }
    ],
    event: 'Little Forest',
    date: 'New Year',
    description: 'Peaceful New Year celebrations blending forest aesthetics with festival spirit.',
    excerpt: 'Peaceful forest New Year celebration',
    tags: ['Little Forest', 'New Year', 'Peaceful', 'Nature', 'Celebration'],
    featured: false,
    order: 4
  }
];