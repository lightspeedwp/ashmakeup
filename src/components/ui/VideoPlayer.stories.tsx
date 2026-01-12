import type { Meta, StoryObj } from '@storybook/react';
import { VideoPlayer } from './VideoPlayer';

/**
 * The VideoPlayer component provides a custom, accessible video player
 * with controls for play/pause, volume, seeking, and fullscreen.
 *
 * ## Features
 * - Custom play/pause controls
 * - Volume control with mute toggle
 * - Seek bar for timeline navigation
 * - Fullscreen support
 * - Responsive design
 * - Keyboard accessibility
 * - Poster image support
 *
 * ## Usage
 * Use VideoPlayer for testimonials, portfolio videos, or any video content
 * that requires custom styling and controls.
 */
const meta: Meta<typeof VideoPlayer> = {
  title: 'UI/VideoPlayer',
  component: VideoPlayer,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Accessible video player component with custom controls and responsive design for showcasing video testimonials and portfolio content.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Video source URL',
    },
    poster: {
      control: 'text',
      description: 'Poster image URL (shown before video plays)',
    },
    title: {
      control: 'text',
      description: 'Video title for accessibility',
    },
    autoPlay: {
      control: 'boolean',
      description: 'Auto-play video on load',
    },
    loop: {
      control: 'boolean',
      description: 'Loop video playback',
    },
    muted: {
      control: 'boolean',
      description: 'Start video muted',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

/**
 * Default video player
 * Note: Using sample video from Big Buck Bunny (open source)
 */
export const Default: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800',
    title: 'Sample makeup tutorial video',
  },
};

/**
 * Video with autoplay and muted
 */
export const AutoPlayMuted: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    title: 'Auto-playing demonstration',
    autoPlay: true,
    muted: true,
  },
};

/**
 * Looping video
 */
export const Looping: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    title: 'Looping video example',
    loop: true,
    muted: true,
    autoPlay: true,
  },
};

/**
 * Video player in dark mode
 */
export const DarkMode: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800',
    title: 'Dark mode video player',
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
      return (
        <div className="bg-purple-950 p-8 rounded-xl">
          <Story />
        </div>
      );
    },
  ],
};

/**
 * Testimonial video context
 */
export const TestimonialContext: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    title: 'Client testimonial - Sarah Johnson',
  },
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto p-6 bg-white dark:bg-purple-900 rounded-xl shadow-xl">
        <div className="mb-6">
          <h3 className="text-2xl font-heading font-bold text-gray-900 dark:text-white mb-2">
            Client Testimonial
          </h3>
          <p className="text-gray-600 dark:text-purple-200">
            Sarah Johnson - Festival Makeup Experience
          </p>
        </div>
        <Story />
        <div className="mt-6">
          <p className="text-gray-700 dark:text-purple-100 italic">
            "Ash's work is absolutely stunning! The attention to detail and creativity
            really made my festival look unforgettable."
          </p>
        </div>
      </div>
    ),
  ],
};

/**
 * Grid of video players
 */
export const VideoGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      <VideoPlayer
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800"
        title="Tutorial 1"
      />
      <VideoPlayer
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800"
        title="Tutorial 2"
      />
      <VideoPlayer
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://images.unsplash.com/photo-1596704017254-9b121068ec31?w=800"
        title="Tutorial 3"
      />
      <VideoPlayer
        src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        poster="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=800"
        title="Tutorial 4"
      />
    </div>
  ),
};

/**
 * Responsive video player
 */
export const Responsive: Story = {
  args: {
    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    poster: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800',
    title: 'Responsive video',
    className: 'w-full',
  },
  decorators: [
    (Story) => (
      <div className="max-w-6xl mx-auto p-4">
        <div className="aspect-video">
          <Story />
        </div>
      </div>
    ),
  ],
};
