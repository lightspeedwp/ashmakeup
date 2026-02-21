/**
 * @fileoverview Press Kit page mock data
 */

export const pressKitData = {
  hero: {
    title: 'Press & Media Kit',
    subtitle: 'Resources for Organizers & Journalists',
    description: 'Download high-resolution assets, official biographies, and brand guidelines for features, interviews, and festival lineups.',
  },
  
  bios: {
    short: {
      title: 'Short Bio (50 words)',
      content: 'Ash Shaw is a Berlin-based makeup artist specializing in UV-reactive and neon aesthetics for festivals and nightlife. Blending cyberpunk influences with tribal patterns, his work transforms faces into living art pieces under blacklight. He has been featured at major international psytrance festivals and Berlin underground events.',
    },
    long: {
      title: 'Full Biography',
      content: 'Ash Shaw is a makeup artist and creative technologist based in Berlin, Germany. His journey began in the vibrant underground scene of 2019, where he first experimented with UV-reactive paints. Since then, he has developed a signature style that fuses "Atomic Black" minimalism with explosive neon color palettes.\n\nAsh is not just a makeup artist but a visual storyteller who believes in the transformative power of adornment. His work is strictly non-commercial and driven by artistic expression, focusing on the connection between the performer and the audience. He is a regular contributor to the visual landscape of festivals like Ozora and MoDem, and his tutorials have inspired a growing community of aspiring artists.\n\nBeyond makeup, Ash advocates for accessibility in digital spaces and sustainable artistic practices.',
    },
  },

  assets: [
    {
      id: 'headshots',
      title: 'Headshots & Portraits',
      description: 'High-resolution professional photos for promotional use.',
      items: [
        { label: 'Studio Portrait (Color)', format: 'JPG', size: '4.2 MB' },
        { label: 'Festival Action Shot', format: 'JPG', size: '3.8 MB' },
        { label: 'Black & White Headshot', format: 'JPG', size: '2.1 MB' },
      ]
    },
    {
      id: 'logos',
      title: 'Brand Assets',
      description: 'Official logos and color palette specifications.',
      items: [
        { label: 'Logo Pack (Vector)', format: 'SVG/AI', size: '1.5 MB' },
        { label: 'Neon Color Palette', format: 'PDF', size: '0.8 MB' },
        { label: 'Brand Guidelines', format: 'PDF', size: '2.5 MB' },
      ]
    }
  ],

  contact: {
    email: 'press@ashshaw.makeup',
    instagram: '@ashshaw.makeup',
    location: 'Berlin, Germany'
  }
};
