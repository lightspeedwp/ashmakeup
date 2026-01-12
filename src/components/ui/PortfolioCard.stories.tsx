import type { Meta, StoryObj } from '@storybook/react';
import { PortfolioCard } from './PortfolioCard';
import { action } from '@storybook/test';

/**
 * The PortfolioCard component displays portfolio entries with featured images,
 * gallery sliders, and category tags.
 *
 * ## Features
 * - Featured image display with gallery carousel
 * - Category tag in top right corner
 * - Navigation arrows for desktop
 * - Pagination dots for image count
 * - Touch/swipe support for mobile
 * - WCAG 2.1 AA accessibility compliance
 *
 * ## Usage
 * Use PortfolioCard to display portfolio entries in grid layouts.
 * The component supports up to 6 images total (1 featured + 5 gallery).
 */
const meta: Meta<typeof PortfolioCard> = {
  title: 'Portfolio/PortfolioCard',
  component: PortfolioCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Portfolio card component featuring image carousel, category tags, and interactive navigation.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    onImageClick: {
      description: 'Callback when image is clicked to open lightbox',
      action: 'image-clicked',
    },
    onNavigateToDetail: {
      description: 'Optional callback for navigating to portfolio detail page',
      action: 'navigate-to-detail',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PortfolioCard>;

// Mock portfolio entry data
const mockEntry = {
  id: '1',
  title: 'Festival Face Paint',
  subtitle: 'Colorful Expression',
  description: 'Vibrant festival makeup featuring rainbow colors and glitter accents for a bold artistic statement.',
  featuredImage: {
    src: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800',
    alt: 'Festival face paint with rainbow colors',
  },
  images: [
    {
      src: 'https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800',
      alt: 'Festival face paint with rainbow colors',
    },
    {
      src: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
      alt: 'Close-up of glitter makeup',
    },
    {
      src: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
      alt: 'Side view of colorful makeup',
    },
  ],
  category: 'Festival Makeup',
};

const mockEntryUVMakeup = {
  id: '2',
  title: 'UV Reactive Artistry',
  subtitle: 'Glow in the Dark',
  description: 'Stunning UV reactive makeup that glows under blacklight, perfect for nightclub environments.',
  featuredImage: {
    src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800',
    alt: 'UV reactive makeup glowing under blacklight',
  },
  images: [
    {
      src: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800',
      alt: 'UV reactive makeup glowing under blacklight',
    },
    {
      src: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
      alt: 'Neon makeup detail',
    },
  ],
  category: 'UV Makeup',
};

const mockEntryNailArt = {
  id: '3',
  title: 'Fusion Nails',
  subtitle: 'Artistic Expression',
  description: 'Intricate nail art designs combining multiple techniques and vibrant color palettes.',
  featuredImage: {
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
    alt: 'Colorful nail art design',
  },
  images: [
    {
      src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800',
      alt: 'Colorful nail art design',
    },
    {
      src: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?w=800',
      alt: 'Detailed nail art',
    },
    {
      src: 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800',
      alt: 'Glitter nail polish',
    },
    {
      src: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800',
      alt: 'French manicure variation',
    },
  ],
  category: 'Nail Art',
};

/**
 * Default portfolio card with festival makeup
 */
export const Default: Story = {
  args: {
    entry: mockEntry,
    onImageClick: action('image-clicked'),
    onNavigateToDetail: action('navigate-to-detail'),
  },
};

/**
 * Portfolio card with UV makeup
 */
export const UVMakeup: Story = {
  args: {
    entry: mockEntryUVMakeup,
    onImageClick: action('image-clicked'),
    onNavigateToDetail: action('navigate-to-detail'),
  },
};

/**
 * Portfolio card with nail art (more images)
 */
export const NailArt: Story = {
  args: {
    entry: mockEntryNailArt,
    onImageClick: action('image-clicked'),
    onNavigateToDetail: action('navigate-to-detail'),
  },
};

/**
 * Portfolio card with single image
 */
export const SingleImage: Story = {
  args: {
    entry: {
      ...mockEntry,
      images: [mockEntry.featuredImage],
    },
    onImageClick: action('image-clicked'),
  },
};

/**
 * Portfolio card in dark mode
 */
export const DarkMode: Story = {
  args: {
    entry: mockEntry,
    onImageClick: action('image-clicked'),
    onNavigateToDetail: action('navigate-to-detail'),
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => {
      React.useEffect(() => {
        document.documentElement.classList.add('dark');
        return () => document.documentElement.classList.remove('dark');
      }, []);
      return <Story />;
    },
  ],
};

/**
 * Portfolio card grid layout
 */
export const GridLayout: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-50 dark:bg-purple-950">
      <PortfolioCard
        entry={mockEntry}
        onImageClick={action('image-clicked')}
        onNavigateToDetail={action('navigate-to-detail')}
      />
      <PortfolioCard
        entry={mockEntryUVMakeup}
        onImageClick={action('image-clicked')}
        onNavigateToDetail={action('navigate-to-detail')}
      />
      <PortfolioCard
        entry={mockEntryNailArt}
        onImageClick={action('image-clicked')}
        onNavigateToDetail={action('navigate-to-detail')}
      />
    </div>
  ),
};

/**
 * Responsive portfolio cards
 */
export const ResponsiveLayout: Story = {
  render: () => (
    <div className="max-w-7xl mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-fluid-md">
        <PortfolioCard
          entry={mockEntry}
          onImageClick={action('image-clicked')}
        />
        <PortfolioCard
          entry={mockEntryUVMakeup}
          onImageClick={action('image-clicked')}
        />
        <PortfolioCard
          entry={mockEntryNailArt}
          onImageClick={action('image-clicked')}
        />
        <PortfolioCard
          entry={{...mockEntry, id: '4', title: 'Bold Colors'}}
          onImageClick={action('image-clicked')}
        />
        <PortfolioCard
          entry={{...mockEntryUVMakeup, id: '5', title: 'Neon Nights'}}
          onImageClick={action('image-clicked')}
        />
        <PortfolioCard
          entry={{...mockEntryNailArt, id: '6', title: 'Artistic Nails'}}
          onImageClick={action('image-clicked')}
        />
      </div>
    </div>
  ),
};
