/**
 * @fileoverview Gear page mock data
 */

export const gearPageData = {
  hero: {
    title: 'The Toolkit',
    subtitle: 'What’s In My Bag',
    description: 'A curated list of the tools, pigments, and tech that power every festival look and creative project.',
    image: 'https://images.unsplash.com/photo-1690627931183-991bd45dc2f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY2FtZXJhJTIwZ2VhciUyMHBob3RvZ3JhcGh5JTIwdG9vbHMlMjBjeWJlcnB1bmt8ZW58MXx8fHwxNzcxNjg3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },

  categories: [
    {
      id: 'paints',
      title: 'Neon Pigments & Paints',
      description: 'UV-reactive essentials for maximum glow.',
      items: [
        { name: 'Kryolan Aqua Color', desc: 'Professional water-based face paint', usage: 'Base layers' },
        { name: 'Global Colours Neon', desc: 'High-viscosity neon pigments', usage: 'Highlight details' },
        { name: 'Diamond FX UV', desc: 'Ultra-bright UV reactive cakes', usage: 'Structural lines' },
        { name: 'Mehron Paradise AQ', desc: 'Smooth blending formula', usage: 'Complex gradients' },
      ]
    },
    {
      id: 'brushes',
      title: 'Brushes & Tools',
      description: 'Precision instruments for detailed linework.',
      items: [
        { name: 'Detail Liner 000', desc: 'Fine synthetic liner brush', usage: 'Intricate patterns' },
        { name: 'Angle Shader 1/4"', desc: 'Sharp edge shader', usage: 'Cut creases & shapes' },
        { name: 'Sponges & Stipplers', desc: 'High-density foam', usage: 'Base application' },
        { name: 'Dotting Tools', desc: 'Various sizes', usage: 'Signature dot work' },
      ]
    },
    {
      id: 'tech',
      title: 'Camera & Tech',
      description: 'Capturing the art in low-light environments.',
      items: [
        { name: 'Sony A7IV', desc: 'Full-frame mirrorless camera', usage: 'Primary shooter' },
        { name: '85mm f/1.4 Lens', desc: 'Portrait lens', usage: 'Detail shots' },
        { name: 'UV LED Flashlights', desc: '365nm wavelength', usage: 'Blacklight activation' },
        { name: 'Godox Lights', desc: 'Portable studio lighting', usage: 'On-site setup' },
      ]
    },
    {
      id: 'survival',
      title: 'Festival Survival',
      description: 'Essentials for 5-day desert marathons.',
      items: [
        { name: 'Hydration Pack', desc: '3L reservoir', usage: 'Stay hydrated' },
        { name: 'Power Bank', desc: '20,000mAh', usage: 'Tech charging' },
        { name: 'Earplugs', desc: 'High-fidelity filters', usage: 'Hearing protection' },
        { name: 'Dust Mask', desc: 'Particulate filter', usage: 'Comfort in dust' },
      ]
    }
  ]
};
