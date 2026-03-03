/**
 * @fileoverview Press & Media Kit page mock data
 */

export const pressKitData = {
  hero: {
    title: 'Press & media kit',
    subtitle: 'Resources for organizers & journalists',
    description: 'Download high-resolution assets, official biographies, and brand guidelines for features, interviews, and festival lineups.',
    image: 'https://images.unsplash.com/photo-1652341483339-9ad5eef3ea74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwcHVycGxlJTIwcGluayUyMGJsdWUlMjBhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzcxNjg3MTA0fDA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  
  bios: {
    short: {
      title: 'Short bio (50 words)',
      content: 'Ash Shaw is a Cape Town-based makeup artist specializing in UV-reactive and neon aesthetics for festivals and nightlife. Blending cyberpunk influences with tribal patterns, his work transforms faces into living art pieces under blacklight. He has been featured at major international psytrance festivals and Berlin underground events.',
    },
    long: {
      title: 'Full biography',
      content: 'Ash Shaw is a makeup artist and creative technologist based in Cape Town, South Africa. His journey began in the vibrant underground scene of 2019, where he first experimented with UV-reactive paints. Since then, he has developed a signature style that fuses "Atomic Black" minimalism with explosive neon color palettes.\n\nAsh follows an annual creative cycle that fuels his artistic energy: based in Woodstock, Cape Town, he travels to Berlin each May for the techno season, returns to South Africa in August-September to swap bicycles, then relocates to Koh Phangan, Thailand (September-November) for Muay Thai training, triathlon, and remote work before returning to Cape Town for the South African summer festival season.\n\nAsh is not just a makeup artist but a visual storyteller who believes in the transformative power of adornment. His work is strictly non-commercial and driven by artistic expression, focusing on the connection between the performer and the audience. He is a regular contributor to the visual landscape of festivals like Ozora and MoDem, and his tutorials have inspired a growing community of aspiring artists.\n\nBeyond makeup, Ash advocates for accessibility in digital spaces and sustainable artistic practices.',
    },
  },

  assets: [
    {
      id: 'headshots',
      title: 'Headshots & portraits',
      description: 'High-resolution professional photos for promotional use.',
      items: [
        { label: 'Studio portrait (color)', format: 'JPG', size: '4.2 MB' },
        { label: 'Festival action shot', format: 'JPG', size: '3.8 MB' },
        { label: 'Black & white headshot', format: 'JPG', size: '2.1 MB' },
      ]
    },
    {
      id: 'logos',
      title: 'Brand assets',
      description: 'Official logos and color palette specifications.',
      items: [
        { label: 'Logo pack (vector)', format: 'SVG/AI', size: '1.5 MB' },
        { label: 'Neon color palette', format: 'PDF', size: '0.8 MB' },
        { label: 'Brand guidelines', format: 'PDF', size: '2.5 MB' },
      ]
    }
  ],

  contact: {
    email: 'press@ashshaw.makeup',
    instagram: '@ashshaw.makeup',
    location: 'Berlin, Germany'
  }
};