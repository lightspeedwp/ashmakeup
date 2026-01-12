import type { Meta, StoryObj } from '@storybook/react';

/**
 * Design Tokens showcase for the Ash Shaw Makeup Portfolio.
 * 
 * This story demonstrates the complete design system including:
 * - Color palette and gradients
 * - Typography scale and hierarchy
 * - Spacing system
 * - Component-specific tokens
 */

const meta: Meta = {
  title: 'Design System/Design Tokens',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Complete design token system showcasing colors, typography, and spacing used throughout the portfolio.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj;

/**
 * Color Palette
 * Showcases all brand colors and gradients
 */
export const ColorPalette: Story = {
  render: () => (
    <div className="p-8 bg-gray-50 dark:bg-purple-950">
      <h1 className="text-4xl font-heading font-bold mb-8 text-gray-900 dark:text-white">
        Color Palette
      </h1>

      {/* Primary Gradients */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Primary Gradients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <div className="h-32 bg-gradient-pink-purple-blue rounded-lg shadow-lg" />
            <p className="font-body text-sm text-gray-700 dark:text-purple-200">
              <strong>Primary CTA:</strong> Pink → Purple → Blue
            </p>
            <code className="text-xs bg-white dark:bg-purple-900 px-2 py-1 rounded">
              bg-gradient-pink-purple-blue
            </code>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-gradient-blue-teal-green rounded-lg shadow-lg" />
            <p className="font-body text-sm text-gray-700 dark:text-purple-200">
              <strong>Secondary CTA:</strong> Blue → Teal → Green
            </p>
            <code className="text-xs bg-white dark:bg-purple-900 px-2 py-1 rounded">
              bg-gradient-blue-teal-green
            </code>
          </div>
          <div className="space-y-2">
            <div className="h-32 bg-gradient-gold-peach-coral rounded-lg shadow-lg" />
            <p className="font-body text-sm text-gray-700 dark:text-purple-200">
              <strong>Accent:</strong> Gold → Peach → Coral
            </p>
            <code className="text-xs bg-white dark:bg-purple-900 px-2 py-1 rounded">
              bg-gradient-gold-peach-coral
            </code>
          </div>
        </div>
      </section>

      {/* Text Gradients */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Text Gradients
        </h2>
        <div className="space-y-4 bg-white dark:bg-purple-900 p-6 rounded-lg">
          <h3 className="text-4xl font-heading font-bold text-gradient-pink-purple-blue">
            Primary Text Gradient
          </h3>
          <code className="text-xs bg-gray-100 dark:bg-purple-800 px-2 py-1 rounded">
            text-gradient-pink-purple-blue
          </code>
          <h3 className="text-4xl font-heading font-bold text-gradient-blue-teal-green">
            Secondary Text Gradient
          </h3>
          <code className="text-xs bg-gray-100 dark:bg-purple-800 px-2 py-1 rounded">
            text-gradient-blue-teal-green
          </code>
        </div>
      </section>

      {/* Dark Mode Colors */}
      <section>
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Dark Mode Theme
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-24 bg-purple-950 rounded-lg border border-purple-700" />
            <p className="font-body text-sm text-gray-700 dark:text-purple-200">
              <strong>Base:</strong> #1e1b4b
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-purple-900 rounded-lg border border-purple-700" />
            <p className="font-body text-sm text-gray-700 dark:text-purple-200">
              <strong>Surface:</strong> purple-900
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-purple-800 rounded-lg border border-purple-700" />
            <p className="font-body text-sm text-gray-700 dark:text-purple-200">
              <strong>Hover:</strong> purple-800
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-24 bg-purple-700 rounded-lg border border-purple-700" />
            <p className="font-body text-sm text-gray-700 dark:text-purple-200">
              <strong>Border:</strong> purple-700
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * Typography Scale
 * Showcases fluid typography system
 */
export const Typography: Story = {
  render: () => (
    <div className="p-8 bg-white dark:bg-purple-950">
      <h1 className="text-4xl font-heading font-bold mb-8 text-gray-900 dark:text-white">
        Typography System
      </h1>

      {/* Font Families */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Font Families
        </h2>
        <div className="space-y-4 bg-gray-50 dark:bg-purple-900 p-6 rounded-lg">
          <div>
            <p className="font-heading text-3xl text-gray-900 dark:text-white">
              Playfair Display - Elegant Headings
            </p>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              font-heading
            </code>
          </div>
          <div>
            <p className="font-body text-xl text-gray-900 dark:text-white">
              Inter - Clean Body Text
            </p>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              font-body
            </code>
          </div>
          <div>
            <p className="font-title text-2xl text-gray-900 dark:text-white">
              Righteous - Bold Display Titles
            </p>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              font-title
            </code>
          </div>
        </div>
      </section>

      {/* Fluid Typography Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Fluid Typography Scale
        </h2>
        <div className="space-y-6 bg-gray-50 dark:bg-purple-900 p-6 rounded-lg">
          <div>
            <h1 className="text-hero-h1 font-heading font-bold text-gray-900 dark:text-white">
              Hero H1 - 36px → 120px
            </h1>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              text-hero-h1
            </code>
          </div>
          <div>
            <h2 className="text-section-h2 font-heading font-bold text-gray-900 dark:text-white">
              Section H2 - 24px → 48px
            </h2>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              text-section-h2
            </code>
          </div>
          <div>
            <h3 className="text-card-h3 font-heading font-bold text-gray-900 dark:text-white">
              Card H3 - 18px → 28px
            </h3>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              text-card-h3
            </code>
          </div>
          <div>
            <p className="text-body-guideline font-body text-gray-900 dark:text-white">
              Body Guideline - 16px → 20px - Regular paragraph text for guidelines and documentation.
            </p>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              text-body-guideline
            </code>
          </div>
          <div>
            <p className="text-button-fluid font-body font-medium text-gray-900 dark:text-white">
              Button Fluid - 14px → 18px
            </p>
            <code className="text-xs bg-white dark:bg-purple-800 px-2 py-1 rounded">
              text-button-fluid
            </code>
          </div>
        </div>
      </section>

      {/* Font Weights */}
      <section>
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Font Weights (Variable Fonts)
        </h2>
        <div className="space-y-2 bg-gray-50 dark:bg-purple-900 p-6 rounded-lg">
          <p className="text-xl font-body font-light text-gray-900 dark:text-white">
            Light (300) - font-light
          </p>
          <p className="text-xl font-body font-normal text-gray-900 dark:text-white">
            Regular (400) - font-normal
          </p>
          <p className="text-xl font-body font-medium text-gray-900 dark:text-white">
            Medium (500) - font-medium
          </p>
          <p className="text-xl font-body font-semibold text-gray-900 dark:text-white">
            Semibold (600) - font-semibold
          </p>
          <p className="text-xl font-body font-bold text-gray-900 dark:text-white">
            Bold (700) - font-bold
          </p>
          <p className="text-xl font-body font-extrabold text-gray-900 dark:text-white">
            Extrabold (800) - font-extrabold
          </p>
        </div>
      </section>
    </div>
  ),
};

/**
 * Spacing System
 * Showcases fluid spacing tokens
 */
export const Spacing: Story = {
  render: () => (
    <div className="p-8 bg-gray-50 dark:bg-purple-950">
      <h1 className="text-4xl font-heading font-bold mb-8 text-gray-900 dark:text-white">
        Spacing System
      </h1>

      {/* Fluid Spacing Scale */}
      <section className="mb-12">
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Fluid Spacing Scale
        </h2>
        <div className="space-y-4">
          {[
            { name: 'XS', class: 'p-fluid-xs', size: '0.5rem → 0.75rem' },
            { name: 'SM', class: 'p-fluid-sm', size: '0.75rem → 1rem' },
            { name: 'MD', class: 'p-fluid-md', size: '1rem → 1.5rem' },
            { name: 'LG', class: 'p-fluid-lg', size: '1.5rem → 2rem' },
            { name: 'XL', class: 'p-fluid-xl', size: '2rem → 3rem' },
            { name: '2XL', class: 'p-fluid-2xl', size: '2.5rem → 4rem' },
            { name: '3XL', class: 'p-fluid-3xl', size: '3rem → 5rem' },
          ].map((item) => (
            <div key={item.name} className="bg-white dark:bg-purple-900 rounded-lg overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-purple-700">
                <span className="font-body font-semibold text-gray-900 dark:text-white">
                  {item.name}
                </span>
                <code className="text-xs bg-gray-100 dark:bg-purple-800 px-2 py-1 rounded">
                  {item.class}
                </code>
                <span className="font-body text-sm text-gray-600 dark:text-purple-300">
                  {item.size}
                </span>
              </div>
              <div className={`${item.class} bg-gradient-pink-purple-blue`}>
                <div className="h-8" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Component Spacing */}
      <section>
        <h2 className="text-2xl font-heading font-semibold mb-4 text-gray-800 dark:text-purple-100">
          Component-Specific Spacing
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-purple-900 p-6 rounded-lg">
            <h3 className="font-heading font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Button Padding
            </h3>
            <button className="px-button py-button bg-gradient-pink-purple-blue text-white rounded-lg font-body font-medium">
              px-button py-button
            </button>
          </div>
          <div className="bg-white dark:bg-purple-900 p-6 rounded-lg">
            <h3 className="font-heading font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Section Spacing
            </h3>
            <div className="py-section bg-gradient-blue-teal-green rounded-lg flex items-center justify-center">
              <span className="text-white font-body font-medium">py-section</span>
            </div>
          </div>
          <div className="bg-white dark:bg-purple-900 p-6 rounded-lg">
            <h3 className="font-heading font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Card Padding
            </h3>
            <div className="p-card-responsive bg-gradient-gold-peach-coral rounded-lg flex items-center justify-center">
              <span className="text-white font-body font-medium">p-card-responsive</span>
            </div>
          </div>
          <div className="bg-white dark:bg-purple-900 p-6 rounded-lg">
            <h3 className="font-heading font-bold text-lg mb-4 text-gray-900 dark:text-white">
              Gap Utilities
            </h3>
            <div className="flex gap-fluid-sm">
              <div className="w-16 h-16 bg-pink-500 rounded" />
              <div className="w-16 h-16 bg-purple-500 rounded" />
              <div className="w-16 h-16 bg-blue-500 rounded" />
            </div>
            <code className="text-xs bg-gray-100 dark:bg-purple-800 px-2 py-1 rounded mt-2 inline-block">
              gap-fluid-sm
            </code>
          </div>
        </div>
      </section>
    </div>
  ),
};

/**
 * All Design Tokens
 * Complete overview in one view
 */
export const AllTokens: Story = {
  render: () => (
    <div className="space-y-12 p-8 bg-gray-50 dark:bg-purple-950">
      <div>
        <h1 className="text-hero-h1 font-title font-bold text-gradient-pink-purple-blue mb-4">
          Design Tokens Overview
        </h1>
        <p className="text-body-guideline font-body text-gray-700 dark:text-purple-200 max-w-3xl">
          Complete design system showcasing colors, typography, and spacing tokens
          used throughout the Ash Shaw Makeup Portfolio.
        </p>
      </div>

      {/* Quick Reference Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-card-h3 font-heading font-bold mb-4 text-gray-900 dark:text-white">
            🎨 Colors
          </h3>
          <ul className="space-y-2 font-body text-sm text-gray-700 dark:text-purple-200">
            <li>• 3 Primary Gradients</li>
            <li>• Text Gradients</li>
            <li>• Dark Mode Theme</li>
            <li>• Semantic Colors</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-card-h3 font-heading font-bold mb-4 text-gray-900 dark:text-white">
            ✍️ Typography
          </h3>
          <ul className="space-y-2 font-body text-sm text-gray-700 dark:text-purple-200">
            <li>• 3 Font Families</li>
            <li>• Fluid Type Scale</li>
            <li>• Variable Fonts</li>
            <li>• 8 Font Weights</li>
          </ul>
        </div>
        <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg">
          <h3 className="text-card-h3 font-heading font-bold mb-4 text-gray-900 dark:text-white">
            📏 Spacing
          </h3>
          <ul className="space-y-2 font-body text-sm text-gray-700 dark:text-purple-200">
            <li>• Fluid Scale (XS-6XL)</li>
            <li>• Component Tokens</li>
            <li>• Responsive Patterns</li>
            <li>• Gap Utilities</li>
          </ul>
        </div>
      </div>
    </div>
  ),
};
