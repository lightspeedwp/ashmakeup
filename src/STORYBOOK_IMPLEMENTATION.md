# Storybook Implementation - Ash Shaw Makeup Portfolio

## 🎨 Overview

Storybook has been successfully implemented for the Ash Shaw Makeup Portfolio, providing comprehensive component documentation, interactive testing, and design system showcase.

**Version:** 8.0.0  
**Framework:** React + Vite + TypeScript  
**Implementation Date:** January 2025

---

## 📦 What's Included

### Storybook Configuration
- **`.storybook/main.ts`** - Main Storybook configuration with Vite builder
- **`.storybook/preview.tsx`** - Global decorators, parameters, and dark mode setup

### Component Stories
Successfully created stories for:

#### 1. Brand Components
- ✅ **Logo.stories.tsx** - 8 logo size variants + comparison view
- ✅ **ThemeToggle.stories.tsx** - Light/dark mode toggle with animations
- ✅ **SocialLinks.stories.tsx** - Social media links with platform gradients

#### 2. UI Components
- ✅ **PortfolioCard.stories.tsx** - Portfolio cards with image carousels
- ✅ **ScrollDownArrow.stories.tsx** - Animated scroll indicator
- ✅ **VideoPlayer.stories.tsx** - Custom video player with controls

#### 3. Form Components
- ✅ **ContactForm.stories.tsx** - SendGrid-powered contact system

#### 4. Design System Documentation
- ✅ **Introduction.stories.mdx** - Welcome page and project overview
- ✅ **DesignTokens.stories.tsx** - Colors, typography, and spacing showcase

---

## 🚀 Getting Started

### Installation

The necessary dependencies have been added to `package.json`:

```json
"devDependencies": {
  "@storybook/react": "^8.0.0",
  "@storybook/react-vite": "^8.0.0",
  "@storybook/addon-essentials": "^8.0.0",
  "@storybook/addon-interactions": "^8.0.0",
  "@storybook/addon-links": "^8.0.0",
  "@storybook/addon-themes": "^8.0.0",
  "@storybook/blocks": "^8.0.0",
  "@storybook/test": "^8.0.0",
  "storybook": "^8.0.0"
}
```

### Install Dependencies

```bash
npm install
```

### Running Storybook

```bash
# Start Storybook development server
npm run storybook
```

Storybook will open at **http://localhost:6006**

### Building Storybook

```bash
# Build static Storybook for deployment
npm run build-storybook
```

This creates a `storybook-static` folder ready for deployment.

---

## 📚 Storybook Features

### 1. Component Documentation

Each component story includes:
- **Props table** - Auto-generated from TypeScript interfaces
- **Interactive controls** - Adjust props in real-time
- **Code examples** - View component implementation
- **Multiple variants** - See different component states
- **Accessibility info** - WCAG compliance details

### 2. Dark Mode Support

Toggle between light and dark themes:
- **Toolbar toggle** - Moon/sun icon in top toolbar
- **Theme decorator** - Applies `dark` class to components
- **Background options** - Light/dark background presets

### 3. Responsive Testing

Test components at different viewports:
- **Mobile** - 375px, 414px
- **Tablet** - 768px, 1024px
- **Desktop** - 1280px, 1920px

Use the viewport toolbar in Storybook to switch between sizes.

### 4. Interactive Testing

Stories include interaction tests using `@storybook/test`:
- **User events** - Simulate clicks, typing, etc.
- **Assertions** - Verify component behavior
- **Actions panel** - See event callbacks

### 5. Design System Showcase

The Design Tokens stories provide:
- **Color palette** - All gradients and semantic colors
- **Typography scale** - Fluid typography system
- **Spacing tokens** - Component-specific spacing
- **Usage examples** - Code snippets for each token

---

## 📖 Story Organization

Stories are organized by category:

```
Storybook/
├── Introduction/
│   └── Welcome
├── Design System/
│   └── Design Tokens
│       ├── Color Palette
│       ├── Typography
│       ├── Spacing
│       └── All Tokens
├── Brand/
│   ├── Logo
│   └── ThemeToggle
├── UI/
│   ├── ScrollDownArrow
│   └── VideoPlayer
├── Portfolio/
│   └── PortfolioCard
└── Forms/
    └── ContactForm
```

---

## 🎯 Creating New Stories

### Basic Story Template

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Category/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Component description here.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    propName: {
      control: 'text',
      description: 'Prop description',
    },
  },
};

export default meta;
type Story = StoryObj<typeof ComponentName>;

export const Default: Story = {
  args: {
    propName: 'value',
  },
};
```

### Story with Decorators

```tsx
export const WithContext: Story = {
  args: {
    propName: 'value',
  },
  decorators: [
    (Story) => (
      <div className="p-8 bg-gradient-to-br from-pink-500 to-purple-500">
        <Story />
      </div>
    ),
  ],
};
```

### Interactive Story

```tsx
import { within, userEvent, expect } from '@storybook/test';

export const WithInteraction: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');
    await userEvent.click(button);
    await expect(button).toHaveTextContent('Clicked');
  },
};
```

---

## 🎨 Design System Integration

### Using Design Tokens in Stories

All stories use the same design tokens as the application:

```tsx
// Typography
<h1 className="text-hero-h1 font-heading font-bold">Title</h1>

// Colors
<div className="bg-gradient-pink-purple-blue">Content</div>

// Spacing
<button className="px-button py-button">Button</button>
```

### Tailwind CSS Support

Storybook is configured to use the same Tailwind setup as the main app:
- **`styles/globals.css`** - Imported in `.storybook/preview.tsx`
- **All custom classes** - Available in stories
- **Dark mode** - Configured with `withThemeByClassName` decorator

---

## 📊 Story Coverage

### Current Coverage
- **9 story files** created
- **60+ story variants** across components
- **4 component categories** organized

### Recommended Next Steps

Create stories for these components:

#### High Priority
1. **Header.tsx** - Navigation and mobile menu
2. **Footer.tsx** - Footer layout and social links
3. **HeroSection.tsx** - Hero layouts
4. **FeaturedSection.tsx** - Portfolio grid
5. **BlogPreviewSection.tsx** - Blog preview cards

#### Medium Priority
6. **TestimonialsSection.tsx** - Testimonial carousel
7. **InstagramFeed.tsx** - Instagram integration
8. **FestivalCountdown.tsx** - Countdown timer
9. **EnhancedLightbox.tsx** - Image lightbox
10. **ShareComponent.tsx** - Social sharing

#### UI Components
11. **BlogPagination.tsx** - Pagination controls
12. **ReadMoreButton.tsx** - Read more CTA
13. **SliderCard.tsx** - Slider components
14. **SectionCard.tsx** - Section cards

---

## 🚀 Deployment

### Netlify Deployment

To deploy Storybook to Netlify:

1. **Build Storybook**
   ```bash
   npm run build-storybook
   ```

2. **Deploy to Netlify**
   ```bash
   netlify deploy --dir=storybook-static --prod
   ```

Or add to `netlify.toml`:

```toml
[[redirects]]
  from = "/storybook/*"
  to = "/storybook/:splat"
  status = 200
```

### GitHub Pages Deployment

Add to `.github/workflows/storybook.yml`:

```yaml
name: Deploy Storybook
on:
  push:
    branches: [main]
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build-storybook
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

---

## 🔧 Troubleshooting

### Issue: Figma Assets Not Loading

**Problem:** Images imported with `figma:asset` scheme don't work in Storybook.

**Solution:** Use mock images from Unsplash or update Vite config:

```typescript
// .storybook/main.ts
viteFinal: async (config) => {
  config.resolve.alias = {
    ...config.resolve.alias,
    'figma:asset': '/public/images',
  };
  return config;
}
```

### Issue: Dark Mode Not Working

**Problem:** Dark mode toggle doesn't apply theme.

**Solution:** Ensure preview.tsx includes the theme decorator:

```typescript
import { withThemeByClassName } from '@storybook/addon-themes';

export default {
  decorators: [
    withThemeByClassName({
      themes: {
        light: '',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
  ],
};
```

### Issue: Tailwind Classes Not Applied

**Problem:** Custom Tailwind classes don't work in Storybook.

**Solution:** Import globals.css in preview.tsx:

```typescript
import '../styles/globals.css';
```

---

## 📈 Best Practices

### 1. Story Naming
- Use descriptive names: `Default`, `WithData`, `DarkMode`, `Responsive`
- Create comparison stories: `AllSizes`, `GridLayout`, `MultipleForms`

### 2. Documentation
- Add JSDoc comments to story descriptions
- Document props with argTypes descriptions
- Include usage examples in MDX stories

### 3. Accessibility
- Test keyboard navigation in stories
- Document ARIA labels and roles
- Verify color contrast in both themes

### 4. Performance
- Use lazy loading for heavy components
- Optimize images in stories
- Avoid expensive computations in decorators

### 5. Maintenance
- Keep stories in sync with components
- Update stories when props change
- Add stories for new components

---

## 🎓 Learning Resources

### Official Documentation
- [Storybook Documentation](https://storybook.js.org/docs)
- [React Storybook Guide](https://storybook.js.org/docs/react/get-started/introduction)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)

### Addons Used
- [@storybook/addon-essentials](https://storybook.js.org/docs/react/essentials/introduction) - Core addons bundle
- [@storybook/addon-interactions](https://storybook.js.org/docs/react/writing-tests/interaction-testing) - Component testing
- [@storybook/addon-themes](https://storybook.js.org/docs/react/essentials/toolbars-and-globals) - Theme switching

### Community Resources
- [Storybook Discord](https://discord.gg/storybook)
- [GitHub Discussions](https://github.com/storybookjs/storybook/discussions)
- [Component Encyclopedia](https://storybook.js.org/showcase)

---

## ✅ Implementation Checklist

- [x] Install Storybook dependencies
- [x] Configure Storybook for Vite + React + TypeScript
- [x] Set up dark mode support with addon-themes
- [x] Import Tailwind globals.css
- [x] Create Welcome/Introduction story
- [x] Create Design Tokens showcase
- [x] Create Logo component stories
- [x] Create ThemeToggle component stories
- [x] Create SocialLinks component stories
- [x] Create PortfolioCard component stories
- [x] Create ScrollDownArrow component stories
- [x] Create VideoPlayer component stories
- [x] Create ContactForm component stories
- [x] Add npm scripts (storybook, build-storybook)
- [x] Document implementation in this file

### Next Steps
- [ ] Create stories for Header/Footer components
- [ ] Create stories for section components
- [ ] Create stories for remaining UI components
- [ ] Add interaction tests for form validation
- [ ] Deploy Storybook to Netlify subdomain
- [ ] Add visual regression testing with Chromatic

---

## 📝 Notes

### Component Asset Handling
Some components use Figma assets via the `figma:asset` import scheme. In Storybook, these should be replaced with mock images or handled via Vite configuration.

### Mock Data Integration
Stories use the centralized mock data system from `/data/mock/` for realistic component previews.

### Testing Integration
Storybook stories can serve as visual tests and can be integrated with Chromatic for visual regression testing.

---

**Last Updated:** January 2025  
**Maintained by:** Ash Shaw Portfolio Team  
**Status:** ✅ Complete and Ready to Use

For questions or issues, refer to the [Storybook Documentation](https://storybook.js.org/docs) or the project's Guidelines.md file.