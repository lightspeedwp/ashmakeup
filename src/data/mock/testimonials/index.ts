/**
 * Testimonials Data
 * 
 * Client testimonials and reviews for social proof
 * 
 * @module data/mock/testimonials
 */

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  event?: string;
  rating: number; // 1-5 stars
  text: string;
  image?: string;
  date: string;
  featured?: boolean;
  videoUrl?: string; // Optional video testimonial
  videoPoster?: string; // Video thumbnail
}

export const testimonials: Testimonial[] = [
  {
    id: "test-001",
    name: "Sarah Mitchell",
    role: "Bride",
    event: "Wedding - Byron Bay",
    rating: 5,
    text: "Ash completely transformed my vision into reality! Her attention to detail and ability to enhance natural beauty while creating that festival-inspired glow was absolutely perfect. I felt like the most beautiful version of myself on my wedding day.",
    date: "2025-12-15",
    featured: true,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    videoPoster: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
  },
  {
    id: "test-002",
    name: "Emma Rodriguez",
    event: "Music Festival",
    rating: 5,
    text: "The glitter placement was PERFECTION! Ash understood exactly what I wanted - bold, colorful, and camera-ready. I got so many compliments and the makeup lasted the entire festival weekend!",
    date: "2025-11-28",
    featured: true
  },
  {
    id: "test-003",
    name: "Jessica Chen",
    role: "Event Organizer",
    event: "Corporate Gala",
    rating: 5,
    text: "Ash handled makeup for our entire team of 12 people with grace and efficiency. Every look was tailored perfectly to each person while maintaining a cohesive elegant theme. Absolute professional!",
    date: "2025-11-10",
    featured: true,
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    videoPoster: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
  },
  {
    id: "test-004",
    name: "Mia Thompson",
    event: "Splendour in the Grass",
    rating: 5,
    text: "I've worked with many makeup artists at festivals, but Ash's creativity and use of color is unmatched. She created a unique look that was both wearable and absolutely stunning. Will book again!",
    date: "2025-10-22",
    featured: false
  },
  {
    id: "test-005",
    name: "Rachel Kim",
    role: "Model",
    event: "Fashion Photoshoot",
    rating: 5,
    text: "Ash's technical skill is incredible. She knows how makeup translates on camera and created looks that were editorial-quality. The photos came out better than I could have imagined!",
    date: "2025-10-05",
    featured: false
  },
  {
    id: "test-006",
    name: "Sophie Anderson",
    event: "Birthday Party",
    rating: 5,
    text: "For my 30th birthday, I wanted something special and vibrant. Ash delivered beyond expectations with a gorgeous gradient eye look and the perfect peachy glow. I felt absolutely radiant!",
    date: "2025-09-18",
    featured: false
  },
  {
    id: "test-007",
    name: "Lauren Davies",
    role: "Bridesmaids Group",
    event: "Wedding Party",
    rating: 5,
    text: "Ash did makeup for all 6 bridesmaids and we each looked unique but cohesive. She was calm, professional, and made the whole morning so fun and relaxing. Highly recommend!",
    date: "2025-09-01",
    featured: false
  },
  {
    id: "test-008",
    name: "Olivia Martinez",
    event: "Music Video Shoot",
    rating: 5,
    text: "Working with Ash on our music video was amazing. She brought creative ideas that elevated our concept and executed flawlessly under tight time constraints. True artist!",
    date: "2025-08-12",
    featured: false
  }
];

// Utility functions
export function getFeaturedTestimonials(): Testimonial[] {
  return testimonials.filter(t => t.featured);
}

export function getRecentTestimonials(count: number = 3): Testimonial[] {
  return [...testimonials]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
}

export function getAverageRating(): number {
  const sum = testimonials.reduce((acc, t) => acc + t.rating, 0);
  return sum / testimonials.length;
}

export function getTotalTestimonials(): number {
  return testimonials.length;
}