import type { Meta, StoryObj } from '@storybook/react';
import { SocialLinks } from './SocialLinks';

/**
 * The SocialLinks component displays social media links with platform-authentic
 * gradient backgrounds and interactive hover effects.
 *
 * ## Features
 * - Platform-authentic gradients (Instagram, Facebook, LinkedIn, TikTok, Email)
 * - Circular 48×48px buttons with consistent sizing
 * - Hover scale transforms for interactive feedback
 * - Shadow effects for depth
 * - Full keyboard accessibility
 * - Screen reader friendly labels
 *
 * ## Platforms Supported
 * - **Instagram** - Authentic pink to orange gradient
 * - **Facebook** - Corporate blue gradient
 * - **TikTok** - Black and cyan gradient
 * - **LinkedIn** - Professional blue gradient
 * - **Email** - Success green gradient
 *
 * ## Usage
 * Use SocialLinks in headers, footers, and about sections to provide
 * easy access to social media profiles.
 */
const meta: Meta<typeof SocialLinks> = {
  title: 'Brand/SocialLinks',
  component: SocialLinks,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Social media links component with platform-authentic styling and gradients.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for layout customization',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SocialLinks>;

/**
 * Default social links layout
 */
export const Default: Story = {
  args: {},
};

/**
 * Centered layout for hero sections
 */
export const Centered: Story = {
  args: {
    className: 'justify-center',
  },
};

/**
 * Vertical layout for sidebars
 */
export const Vertical: Story = {
  args: {
    className: 'flex-col',
  },
};

/**
 * With larger gaps
 */
export const LargeGaps: Story = {
  args: {
    className: 'gap-6',
  },
};

/**
 * Dark mode context
 */
export const DarkMode: Story = {
  args: {},
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
 * In footer context
 */
export const InFooter: Story = {
  decorators: [
    (Story) => (
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-2">Connect With Me</h3>
              <p className="text-gray-300">Follow my creative journey</p>
            </div>
            <Story />
          </div>
        </div>
      </footer>
    ),
  ],
};

/**
 * In header context
 */
export const InHeader: Story = {
  decorators: [
    (Story) => (
      <header className="bg-white dark:bg-purple-900 border-b border-gray-200 dark:border-purple-700 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="text-2xl font-heading font-bold text-gray-900 dark:text-white">
            Logo
          </span>
          <Story />
        </div>
      </header>
    ),
  ],
};

/**
 * On gradient background
 */
export const OnGradientBackground: Story = {
  decorators: [
    (Story) => (
      <div className="bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-12 rounded-xl">
        <div className="text-center text-white mb-6">
          <h2 className="text-3xl font-heading font-bold mb-2">Let's Connect</h2>
          <p className="text-white/90">Find me on these platforms</p>
        </div>
        <div className="flex justify-center">
          <Story />
        </div>
      </div>
    ),
  ],
};

/**
 * With custom wrapper styling
 */
export const CustomStyling: Story = {
  args: {
    className: 'flex-wrap justify-center gap-8',
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto p-8 bg-white dark:bg-purple-900 rounded-2xl shadow-2xl">
        <h3 className="text-2xl font-heading font-bold text-center mb-6 text-gray-900 dark:text-white">
          Follow My Work
        </h3>
        <Story />
      </div>
    ),
  ],
};

/**
 * Responsive layout demonstration
 */
export const ResponsiveLayout: Story = {
  render: () => (
    <div className="space-y-8 p-6">
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl">
        <h3 className="font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Mobile (Centered)
        </h3>
        <SocialLinks className="justify-center md:justify-start" />
      </div>
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl">
        <h3 className="font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Tablet/Desktop (Left)
        </h3>
        <SocialLinks className="justify-center lg:justify-start" />
      </div>
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl">
        <h3 className="font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Right Aligned
        </h3>
        <SocialLinks className="justify-end" />
      </div>
    </div>
  ),
};

/**
 * In card grid layout
 */
export const InCardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg text-center">
        <h4 className="font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Social Links
        </h4>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg text-center">
        <h4 className="font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Connect
        </h4>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg text-center">
        <h4 className="font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Follow
        </h4>
        <div className="flex justify-center">
          <SocialLinks />
        </div>
      </div>
    </div>
  ),
};

/**
 * About page context
 */
export const AboutPageContext: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white dark:bg-purple-900 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-pink-purple-blue p-12 text-white text-center">
            <h1 className="text-4xl font-heading font-bold mb-4">About Ash Shaw</h1>
            <p className="text-lg text-white/90">
              Makeup artist specializing in festival artistry and UV makeup
            </p>
          </div>
          <div className="p-8">
            <p className="text-gray-700 dark:text-purple-200 mb-6">
              With years of experience creating bold, expressive makeup looks for festivals
              and special events, I bring color, energy, and connection to every project.
            </p>
            <div className="border-t border-gray-200 dark:border-purple-700 pt-6">
              <h3 className="font-heading font-bold mb-4 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <Story />
            </div>
          </div>
        </div>
      </div>
    ),
  ],
};
