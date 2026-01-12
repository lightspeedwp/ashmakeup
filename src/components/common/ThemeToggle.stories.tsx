import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from './ThemeToggle';

/**
 * The ThemeToggle component allows users to switch between light and dark mode themes.
 * It features animated sun/moon icons and persists the user's preference in localStorage.
 *
 * ## Features
 * - Smooth animated transition between light/dark modes
 * - localStorage persistence
 * - System preference detection
 * - Full keyboard accessibility
 * - Animated sun/moon icons with rotation and scale effects
 *
 * ## Accessibility
 * - ARIA labels for screen readers
 * - Keyboard navigation (Tab, Enter, Space)
 * - Focus visible indicators
 * - Reduced motion support
 */
const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Toggle button that switches between light and deep purple dark mode themes with smooth animations and localStorage persistence.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

/**
 * Default theme toggle button
 */
export const Default: Story = {};

/**
 * Theme toggle in light mode context
 */
export const LightMode: Story = {
  parameters: {
    backgrounds: { default: 'light' },
  },
  decorators: [
    (Story) => {
      // Ensure light mode for this story
      React.useEffect(() => {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }, []);
      return <Story />;
    },
  ],
};

/**
 * Theme toggle in dark mode context
 */
export const DarkMode: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
  decorators: [
    (Story) => {
      // Ensure dark mode for this story
      React.useEffect(() => {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }, []);
      return <Story />;
    },
  ],
};

/**
 * Theme toggle with custom background
 */
export const OnGradientBackground: Story = {
  decorators: [
    (Story) => (
      <div className="p-12 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-xl">
        <Story />
      </div>
    ),
  ],
};

/**
 * Multiple theme toggles (demonstrates independence)
 */
export const MultipleToggles: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <ThemeToggle />
      <ThemeToggle />
      <ThemeToggle />
    </div>
  ),
};

/**
 * Theme toggle in a header-like context
 */
export const InHeaderContext: Story = {
  decorators: [
    (Story) => (
      <div className="w-full bg-white dark:bg-purple-900 border-b border-gray-200 dark:border-purple-700 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <span className="font-heading text-2xl text-gray-900 dark:text-white">Logo</span>
          <Story />
        </div>
      </div>
    ),
  ],
};
