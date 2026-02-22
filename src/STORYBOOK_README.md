# Storybook Quick Start Guide

This directory contains the Storybook configuration for the Ash Shaw Makeup Portfolio component library.

## 🚀 Quick Start

```bash
# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 📁 Configuration Files

### `main.ts`
Main Storybook configuration file:
- Defines story file patterns
- Configures addons (essentials, interactions, themes)
- Sets up Vite builder
- Configures path aliases

### `preview.tsx`
Global settings and decorators:
- Imports Tailwind CSS (`globals.css`)
- Configures dark mode theme switching
- Sets up background presets
- Defines default parameters for stories

## 🎨 Addons Included

1. **@storybook/addon-essentials** - Core features
   - Controls - Adjust props dynamically
   - Actions - Log component events
   - Docs - Auto-generated documentation
   - Viewport - Responsive testing
   - Backgrounds - Test on different backgrounds

2. **@storybook/addon-themes** - Theme switching
   - Light/dark mode toggle
   - Applies `dark` class to HTML element

3. **@storybook/addon-interactions** - Component testing
   - Simulate user interactions
   - Test component behavior

4. **@storybook/addon-links** - Navigate between stories
   - Create links to other stories
   - Build documentation flows

## 🎯 Story Organization

Stories are located in two places:

```
components/**/*.stories.tsx    # Component stories
stories/**/*.stories.tsx       # Documentation stories
stories/**/*.stories.mdx       # MDX documentation
```

### Categories:
- **Brand/** - Logo, ThemeToggle, SocialLinks
- **UI/** - ScrollDownArrow, VideoPlayer, etc.
- **Portfolio/** - PortfolioCard
- **Forms/** - ContactForm
- **Design System/** - Design tokens and guidelines

## 🔧 Customization

### Adding New Addons

1. Install the addon:
   ```bash
   npm install --save-dev @storybook/addon-name
   ```

2. Add to `main.ts`:
   ```typescript
   addons: [
     // ... existing addons
     '@storybook/addon-name',
   ]
   ```

### Changing Theme Colors

Edit `preview.tsx` to customize the dark mode theme:

```typescript
decorators: [
  withThemeByClassName({
    themes: {
      light: '',
      dark: 'custom-dark-class', // Your custom class
    },
    defaultTheme: 'light',
  }),
]
```

### Adding Global Styles

Import CSS in `preview.tsx`:

```typescript
import '../path/to/your/styles.css';
```

## 📚 Documentation

- **Full Guide:** `/STORYBOOK_IMPLEMENTATION.md`
- **Summary:** `/STORYBOOK_COMPLETE.md`
- **Component Guidelines:** `/guidelines/`

## 🐛 Troubleshooting

### Stories Not Loading
- Check file patterns in `main.ts`
- Ensure story files end with `.stories.tsx` or `.stories.mdx`

### Styles Not Applied
- Verify `globals.css` import in `preview.tsx`
- Check Tailwind configuration

### Dark Mode Not Working
- Verify `@storybook/addon-themes` is installed
- Check decorator configuration in `preview.tsx`

### Path Aliases Not Resolving
- Update `viteFinal` config in `main.ts`
- Ensure aliases match `tsconfig.json`

## 🎓 Resources

- [Storybook Docs](https://storybook.js.org/docs)
- [Writing Stories](https://storybook.js.org/docs/react/writing-stories/introduction)
- [Addons](https://storybook.js.org/addons)
- [Configuration](https://storybook.js.org/docs/react/configure/overview)

---

**Need Help?** Check the full implementation guide in `/STORYBOOK_IMPLEMENTATION.md`
