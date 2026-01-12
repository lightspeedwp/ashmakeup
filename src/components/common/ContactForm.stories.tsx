import type { Meta, StoryObj } from '@storybook/react';
import { ContactForm } from './ContactForm';
import { within, userEvent, expect } from '@storybook/test';

/**
 * The ContactForm component provides a professional email contact form
 * with SendGrid integration, validation, and accessibility features.
 *
 * ## Features
 * - Professional SendGrid email integration
 * - Dual email system (notification + auto-reply)
 * - Real-time form validation
 * - Loading and success states
 * - Demo mode for development
 * - Full keyboard accessibility
 * - Responsive design
 *
 * ## Email System
 * - Notification email to Ash Shaw
 * - Auto-reply confirmation to sender
 * - Professional HTML templates
 * - Graceful error handling
 */
const meta: Meta<typeof ContactForm> = {
  title: 'Forms/ContactForm',
  component: ContactForm,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Professional contact form with SendGrid integration, validation, and dual email system for client communication.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for custom styling',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ContactForm>;

/**
 * Default contact form
 */
export const Default: Story = {
  args: {},
};

/**
 * Contact form with custom styling
 */
export const CustomStyled: Story = {
  args: {
    className: 'max-w-2xl mx-auto bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl',
  },
};

/**
 * Contact form in dark mode
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
 * Contact form in footer context
 */
export const InFooterContext: Story = {
  decorators: [
    (Story) => (
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left column - Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-300 mb-6">
                Ready to create something amazing? Let's discuss your vision
                and bring your makeup artistry ideas to life.
              </p>
              <div className="space-y-3">
                <p className="text-gray-400">📧 ashley@ashshaw.makeup</p>
                <p className="text-gray-400">📍 Berlin, Germany</p>
              </div>
            </div>
            {/* Right column - Form */}
            <div>
              <Story />
            </div>
          </div>
        </div>
      </footer>
    ),
  ],
};

/**
 * Contact form with gradient background
 */
export const OnGradientBackground: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-8 flex items-center justify-center">
        <div className="w-full max-w-2xl">
          <Story />
        </div>
      </div>
    ),
  ],
};

/**
 * Compact contact form
 */
export const Compact: Story = {
  args: {
    className: 'max-w-md',
  },
};

/**
 * Wide contact form for landing pages
 */
export const Wide: Story = {
  args: {
    className: 'max-w-4xl mx-auto',
  },
};

/**
 * Contact form with filled data (for testing validation)
 */
export const WithFilledData: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Fill in the form fields
    const nameInput = canvas.getByLabelText(/name/i);
    const emailInput = canvas.getByLabelText(/email/i);
    const messageInput = canvas.getByLabelText(/message/i);
    
    await userEvent.type(nameInput, 'Sarah Johnson', { delay: 50 });
    await userEvent.type(emailInput, 'sarah@example.com', { delay: 50 });
    await userEvent.type(messageInput, 'I would love to book a festival makeup session!', { delay: 20 });
  },
};

/**
 * Contact form with validation errors
 */
export const WithValidationErrors: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    
    // Fill in invalid data
    const emailInput = canvas.getByLabelText(/email/i);
    const messageInput = canvas.getByLabelText(/message/i);
    
    await userEvent.type(emailInput, 'invalid-email', { delay: 50 });
    await userEvent.type(messageInput, 'Hi', { delay: 50 });
    
    // Try to submit
    const submitButton = canvas.getByRole('button', { name: /send message/i });
    await userEvent.click(submitButton);
  },
};

/**
 * Multiple contact forms (demonstrates independence)
 */
export const MultipleForms: Story = {
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
          General Inquiry
        </h3>
        <ContactForm />
      </div>
      <div className="bg-white dark:bg-purple-900 p-6 rounded-xl shadow-lg">
        <h3 className="text-xl font-heading font-bold mb-4 text-gray-900 dark:text-white">
          Booking Request
        </h3>
        <ContactForm />
      </div>
    </div>
  ),
};

/**
 * Contact form in a card layout
 */
export const InCardLayout: Story = {
  decorators: [
    (Story) => (
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white dark:bg-purple-900 rounded-2xl shadow-2xl overflow-hidden">
          {/* Card Header */}
          <div className="bg-gradient-pink-purple-blue p-8 text-white text-center">
            <h2 className="text-3xl font-heading font-bold mb-2">
              Let's Connect
            </h2>
            <p className="text-white/90">
              Share your vision and let's create something beautiful together
            </p>
          </div>
          {/* Card Body */}
          <div className="p-8">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};

/**
 * Responsive contact form layout
 */
export const ResponsiveLayout: Story = {
  decorators: [
    (Story) => (
      <div className="min-h-screen bg-gray-50 dark:bg-purple-950 p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-section-h2 font-heading font-bold text-gray-900 dark:text-white mb-4">
              Contact Ash Shaw
            </h1>
            <p className="text-body-guideline text-gray-600 dark:text-purple-200 max-w-2xl mx-auto">
              Whether you're planning for a festival, special event, or creative project,
              I'd love to hear from you.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <Story />
          </div>
        </div>
      </div>
    ),
  ],
};
