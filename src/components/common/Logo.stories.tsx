/**
 * Logo Component Stories
 * 
 * Showcases the brand logo in various sizes and theme modes
 * 
 * @component Logo
 * @version 3.0.0 - Added dark mode support
 */

import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from './Logo';

const meta = {
  title: 'Common/Logo',
  component: Logo,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
The Logo component displays the Ash Shaw brand logo with automatic dark mode adaptation.

**Features:**
- Automatic theme detection with MutationObserver
- Enhanced visibility in dark mode (brightness, contrast, glow)
- Smooth transitions between themes
- Multiple size variants for different use cases
- Responsive scaling with mobile optimization

**Dark Mode Behavior:**
- Light mode: Original logo appearance
- Dark mode: +10% brightness, +10% contrast, purple glow effect
        `,
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', 'header', 'mobile-sm'],
      description: 'Size variant of the logo',
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default logo at medium size
 */
export const Default: Story = {
  args: {
    size: 'md',
  },
};

/**
 * Small logo for compact spaces
 */
export const Small: Story = {
  args: {
    size: 'sm',
  },
};

/**
 * Large logo for prominent display
 */
export const Large: Story = {
  args: {
    size: 'lg',
  },
};

/**
 * Extra large logo for hero sections
 */
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
  },
};

/**
 * Header size optimized for navigation
 */
export const HeaderSize: Story = {
  args: {
    size: 'header',
  },
};

/**
 * Mobile small size for mobile menu
 */
export const MobileSmall: Story = {
  args: {
    size: 'mobile-sm',
  },
};

/**
 * All sizes comparison in light mode
 */
export const AllSizesLight: Story = {
  render: () => (
    <div className="flex flex-col gap-8 items-start p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Small</h3>
        <Logo size="sm" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Medium (Default)</h3>
        <Logo size="md" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Large</h3>
        <Logo size="lg" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Extra Large</h3>
        <Logo size="xl" />
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Header</h3>
        <Logo size="header" />
      </div>
    </div>
  ),
};

/**
 * All sizes comparison in dark mode
 */
export const AllSizesDark: Story = {
  render: () => (
    <div className="dark">
      <div className="flex flex-col gap-8 items-start p-8 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-purple-950/30">
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-purple-200 mb-4">Small</h3>
          <Logo size="sm" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-purple-200 mb-4">Medium (Default)</h3>
          <Logo size="md" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-purple-200 mb-4">Large</h3>
          <Logo size="lg" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-purple-200 mb-4">Extra Large</h3>
          <Logo size="xl" />
        </div>
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-purple-200 mb-4">Header</h3>
          <Logo size="header" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * Side-by-side theme comparison
 */
export const ThemeComparison: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      {/* Light Mode */}
      <div className="p-8 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 rounded-xl">
        <h3 className="text-lg font-heading font-bold text-gray-800 mb-6">Light Mode</h3>
        <div className="space-y-6">
          <Logo size="md" />
          <Logo size="lg" />
          <Logo size="xl" />
        </div>
      </div>
      
      {/* Dark Mode */}
      <div className="dark">
        <div className="p-8 bg-gradient-to-br from-purple-950/30 via-purple-900/20 to-purple-950/30 rounded-xl">
          <h3 className="text-lg font-heading font-bold text-purple-100 mb-6">Dark Mode</h3>
          <div className="space-y-6">
            <Logo size="md" />
            <Logo size="lg" />
            <Logo size="xl" />
          </div>
        </div>
      </div>
    </div>
  ),
};

/**
 * In navigation context (light)
 */
export const InNavigationLight: Story = {
  render: () => (
    <nav className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 px-6 py-4">
      <div className="flex items-center justify-between">
        <Logo size="header" />
        <div className="flex gap-6 text-sm font-body text-gray-600">
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#blog">Blog</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  ),
};

/**
 * In navigation context (dark)
 */
export const InNavigationDark: Story = {
  render: () => (
    <div className="dark">
      <nav className="bg-purple-950/95 backdrop-blur-sm shadow-sm border-b border-purple-800 px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo size="header" />
          <div className="flex gap-6 text-sm font-body text-purple-200">
            <a href="#about">About</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>
    </div>
  ),
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

/**
 * Responsive behavior demonstration
 */
export const ResponsiveSizes: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Desktop (header size)</h3>
        <div className="hidden lg:block">
          <Logo size="header" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Tablet (large)</h3>
        <div className="hidden md:block lg:hidden">
          <Logo size="lg" />
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold text-gray-600 mb-4">Mobile (mobile-sm)</h3>
        <div className="block md:hidden">
          <Logo size="mobile-sm" />
        </div>
      </div>
    </div>
  ),
};
