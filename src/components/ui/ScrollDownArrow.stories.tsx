import type { Meta, StoryObj } from '@storybook/react';
import { ScrollDownArrow } from './ScrollDownArrow';
import { action } from '@storybook/test';

/**
 * The ScrollDownArrow component provides an animated, accessible button
 * that scrolls users to the next section of the page.
 *
 * ## Features
 * - Circular button with gradient border
 * - Smooth bounce animation
 * - Hover and focus states with scale effects
 * - Smooth scrolling to target section
 * - Full keyboard accessibility
 * - Screen reader announcements
 *
 * ## Usage
 * Use ScrollDownArrow in hero sections to guide users to content below.
 * Can target a specific section ID or automatically scroll to next section.
 */
const meta: Meta<typeof ScrollDownArrow> = {
  title: 'UI/ScrollDownArrow',
  component: ScrollDownArrow,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Animated scroll indicator that smoothly navigates to the next section with accessibility features.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    targetSectionId: {
      control: 'text',
      description: 'ID of section to scroll to',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
    onClick: {
      description: 'Custom click handler',
      action: 'clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollDownArrow>;

/**
 * Default scroll down arrow
 */
export const Default: Story = {
  args: {
    ariaLabel: 'Scroll to next section',
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Hero Section</h1>
          <p className="text-lg text-gray-600">Scroll down to see more content</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * With custom target section
 */
export const WithTargetSection: Story = {
  args: {
    targetSectionId: 'content-section',
    ariaLabel: 'Scroll to content',
  },
  decorators: [
    (Story) => (
      <div>
        <div className="relative h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Hero Section</h1>
            <p className="text-lg text-gray-600">Click the arrow to scroll to content</p>
          </div>
          <Story />
        </div>
        <section id="content-section" className="min-h-screen bg-white p-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">Content Section</h2>
          <p className="text-gray-600">This is the target section that was scrolled to.</p>
        </section>
      </div>
    ),
  ],
};

/**
 * Dark mode version
 */
export const DarkMode: Story = {
  args: {
    ariaLabel: 'Scroll to next section',
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
        <div className="relative h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-heading font-bold text-white mb-4">Hero Section</h1>
            <p className="text-lg text-purple-200">Scroll down to see more content</p>
          </div>
          <Story />
        </div>
      );
    },
  ],
};

/**
 * With custom click handler
 */
export const CustomClickHandler: Story = {
  args: {
    onClick: action('custom-click'),
    ariaLabel: 'Trigger custom action',
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Custom Action</h1>
          <p className="text-lg text-gray-600">Click the arrow to trigger custom handler</p>
        </div>
        <Story />
      </div>
    ),
  ],
};

/**
 * Multiple scroll arrows (demonstrates positioning)
 */
export const MultipleArrows: Story = {
  render: () => (
    <div className="space-y-0">
      <div className="relative h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Section 1</h1>
        </div>
        <ScrollDownArrow targetSectionId="section-2" />
      </div>
      <div id="section-2" className="relative h-screen bg-gradient-to-br from-blue-100 via-teal-100 to-green-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Section 2</h1>
        </div>
        <ScrollDownArrow targetSectionId="section-3" />
      </div>
      <div id="section-3" className="h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-gray-900 mb-4">Section 3</h1>
          <p className="text-gray-600">Final section</p>
        </div>
      </div>
    </div>
  ),
};

/**
 * With custom styling
 */
export const CustomStyling: Story = {
  args: {
    className: 'border-blue-500 hover:shadow-blue-200/30',
    ariaLabel: 'Scroll down',
  },
  decorators: [
    (Story) => (
      <div className="relative h-screen bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold text-white mb-4">Custom Styled Arrow</h1>
          <p className="text-lg text-blue-100">Blue theme variant</p>
        </div>
        <Story />
      </div>
    ),
  ],
};
