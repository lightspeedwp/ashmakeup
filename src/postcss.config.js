/**
 * PostCSS Configuration
 * 
 * PostCSS processes CSS with JavaScript plugins.
 * Currently using autoprefixer for cross-browser compatibility.
 * 
 * Note: Tailwind CSS processing happens via @tailwind directives in globals.css
 * We don't need the tailwindcss PostCSS plugin anymore since we're using
 * custom semantic classes built on top of Tailwind's foundation.
 */
export default {
  plugins: {
    autoprefixer: {}, // Adds vendor prefixes for browser compatibility
  },
};
