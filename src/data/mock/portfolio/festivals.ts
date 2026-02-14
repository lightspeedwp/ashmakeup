/**
 * @fileoverview General festival makeup portfolio
 * Diverse collection of festival makeup from various events
 * 
 * @module data/mock/portfolio/festivals
 * @author Ash Shaw Portfolio Team
 * @version 2.1.0 - Updated with Origin Festival 2025
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
    date: '2024-07-19',
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
    id: 'origin-festival-2025',
    slug: 'origin-festival-2025',
    title: 'Origin Festival 2026: Birthday Adventure',
    category: 'Festival Makeup',
    date: '2026-02-06',
    images: [
      {
        src: 'figma:asset/e46fceb6809b8f1b7ef5c578d40578eadf301207.png',
        alt: 'Origin Festival Birthday - Pink Mohawk and Neon Eyes',
        title: 'Festival Birthday Joy',
        caption: 'Celebrating life and color',
        description: 'Vibrant birthday celebration look with neon accents',
        position: 'center',
        aspectRatio: '3:4'
      },
      {
        src: 'figma:asset/2678f2e48d60b8ccd6855469149ffc2cd8877e1c.png',
        alt: 'Origin Festival - Geometric Face Paint Profile',
        title: 'Geometric Neon Art',
        caption: 'Precision lines and vibrant colors',
        description: 'Intricate geometric face paint design',
        position: 'left',
        aspectRatio: '3:4'
      },
      {
        src: 'figma:asset/04aa88bd7a81e3f14ceb68f980492bf374b041db.png',
        alt: 'Origin Festival - Neon Grid Makeup',
        title: 'Neon Night Vibes',
        caption: 'Glowing in the festival lights',
        description: 'Neon grid patterns coming alive at night',
        position: 'right',
        aspectRatio: '9:16'
      }
    ],
    event: 'Origin Festival',
    description: 'It was my birthday weekend, I cycled to the event over two days and then cycled home, I brought all my clothes, hammock gear and makeup bags in panniers on my gravel bike. I danced, celebrated and spread the joy of my makeup. I also had some stickers made.',
    excerpt: 'Birthday cycle adventure to Origin Festival',
    tags: ['Origin Festival', 'Birthday', 'Cycling', 'Neon Makeup', 'Stickers'],
    featured: true,
    order: 2
  }
];