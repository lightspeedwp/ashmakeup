/**
 * @fileoverview Style Guide page mock data
 * Single source of truth for all style guide content
 *
 * @module data/mock/ui/style-guide
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

export const styleGuideContent = {
  hero: {
    title: "Style Guide",
    subtitle: "Neon vs Atomic Black Design System",
    description:
      "A comprehensive reference of every design token, component, and icon used across the Ash Shaw Makeup Portfolio. This living document ensures visual consistency and brand integrity.",
  },

  sections: {
    branding: {
      title: "Branding",
      description:
        "Core brand assets including the logo, site icon, and brand identity elements.",
    },
    colors: {
      title: "Colour Palette",
      description:
        "The Neon vs Atomic Black palette features 8 high-saturation neon colours with WCAG-compliant accessible text variants for light mode.",
    },
    gradients: {
      title: "Gradients",
      description:
        "Four signature gradient presets that define the brand's visual energy.",
    },
    typography: {
      title: "Typography",
      description:
        "Three font families power the typographic hierarchy with fluid responsive sizing.",
    },
    buttons: {
      title: "Buttons",
      description:
        "All button variants follow the neon ghost-button pill styling with WCAG-compliant focus states.",
    },
    icons: {
      title: "Icon Library",
      description:
        "Every Lucide React icon used across the site, organised by functional category.",
    },
    customIcons: {
      title: "Custom Brand Icons",
      description:
        "Purpose-built animated SVG icons representing core brand values with sophisticated gradients.",
    },
    spacing: {
      title: "Spacing Tokens",
      description:
        "Fluid spacing system using CSS clamp() for seamless responsive scaling.",
    },
    borders: {
      title: "Border Radius",
      description:
        "Consistent rounding tokens from subtle cards to fully rounded pills.",
    },
    shadows: {
      title: "Shadows",
      description:
        "Neon glow shadows and card elevation shadows for depth and emphasis.",
    },
    socialLinks: {
      title: "Social Links",
      description:
        "Platform-authentic social media icons rendered in three variant styles.",
    },
  },
};

/** Neon colour swatches for the palette section */
export const neonColorSwatches = [
  {
    name: "Neon Green",
    token: "--wp--preset--color--neon-green",
    hex: "#39FF14",
    textClass: "text-neon-green",
  },
  {
    name: "Neon Pink",
    token: "--wp--preset--color--neon-pink",
    hex: "#FF10F0",
    textClass: "text-neon-pink",
  },
  {
    name: "Neon Blue",
    token: "--wp--preset--color--neon-blue",
    hex: "#1F51FF",
    textClass: "text-neon-blue",
  },
  {
    name: "Neon Yellow",
    token: "--wp--preset--color--neon-yellow",
    hex: "#FFFF00",
    textClass: "text-neon-yellow",
  },
  {
    name: "Neon Orange",
    token: "--wp--preset--color--neon-orange",
    hex: "#FF5F1F",
    textClass: "text-neon-orange",
  },
  {
    name: "Neon Purple",
    token: "--wp--preset--color--neon-purple",
    hex: "#BE00FE",
    textClass: "text-neon-purple",
  },
  {
    name: "Neon Cyan",
    token: "--wp--preset--color--neon-cyan",
    hex: "#00F7FF",
    textClass: "text-neon-cyan",
  },
  {
    name: "Neon Red",
    token: "--wp--preset--color--neon-red",
    hex: "#FF3131",
    textClass: "text-neon-red",
  },
];

/** Neutral ramp swatches */
export const neutralSwatches = [
  { name: "Neutral 50", token: "--wp--preset--color--neutral-50", hex: "#f9fafb" },
  { name: "Neutral 100", token: "--wp--preset--color--neutral-100", hex: "#f3f4f6" },
  { name: "Neutral 200", token: "--wp--preset--color--neutral-200", hex: "#e5e7eb" },
  { name: "Neutral 300", token: "--wp--preset--color--neutral-300", hex: "#d1d5db" },
  { name: "Neutral 400", token: "--wp--preset--color--neutral-400", hex: "#9ca3af" },
  { name: "Neutral 500", token: "--wp--preset--color--neutral-500", hex: "#6b7280" },
  { name: "Neutral 600", token: "--wp--preset--color--neutral-600", hex: "#4b5563" },
  { name: "Neutral 700", token: "--wp--preset--color--neutral-700", hex: "#374151" },
  { name: "Neutral 800", token: "--wp--preset--color--neutral-800", hex: "#1f2937" },
  { name: "Neutral 900", token: "--wp--preset--color--neutral-900", hex: "#111827" },
  { name: "Atomic Black", token: "--wp--preset--color--atomic-black", hex: "#0F0F0F" },
];

/** Gradient presets */
export const gradientPresets = [
  {
    name: "Cyberpunk",
    token: "--wp--preset--gradient--cyberpunk",
    css: "linear-gradient(135deg, #FF10F0 0%, #1F51FF 100%)",
    description: "Pink to Blue",
  },
  {
    name: "Toxic Lime",
    token: "--wp--preset--gradient--toxic-lime",
    css: "linear-gradient(to right, #39FF14 0%, #12FFF7 100%)",
    description: "Green to Cyan",
  },
  {
    name: "Solar Flare",
    token: "--wp--preset--gradient--solar-flare",
    css: "linear-gradient(45deg, #FF5F1F 0%, #FFFF00 100%)",
    description: "Orange to Yellow",
  },
  {
    name: "Hyperpop",
    token: "--wp--preset--gradient--hyperpop",
    css: "linear-gradient(-45deg, #FF10F0, #1F51FF, #00F7FF, #39FF14)",
    description: "Animated Multi-colour",
  },
];

/** Typography scale entries */
export const typographyScale = [
  { label: "Hero H1", cssClass: "text-hero-h1", sample: "Ash Shaw", token: "--wp--preset--font-size--hero" },
  { label: "Section H2", cssClass: "text-section-h2", sample: "Section Heading", token: "--wp--preset--font-size--section" },
  { label: "Card H3", cssClass: "text-card-h3", sample: "Card Title", token: "--wp--preset--font-size--500" },
  { label: "Card H4", cssClass: "text-card-h4", sample: "Sub Heading", token: "--wp--preset--font-size--400" },
  { label: "Body", cssClass: "text-body-p", sample: "Body text used for paragraphs and general content throughout the site.", token: "--wp--preset--font-size--200" },
  { label: "Small", cssClass: "text-body-small-p", sample: "Small caption or metadata text.", token: "--wp--preset--font-size--100" },
];

/** Font families */
export const fontFamilies = [
  {
    name: "Righteous",
    usage: "Hero titles, brand name",
    cssClass: "font-title",
    token: "--wp--preset--font-family--brand-title",
    sample: "Ash Shaw Makeup Artist",
  },
  {
    name: "Playfair Display",
    usage: "Section headings, card titles",
    cssClass: "font-heading",
    token: "--wp--preset--font-family--brand-heading",
    sample: "Elegant Serif Headings",
  },
  {
    name: "Inter",
    usage: "Body text, UI elements, buttons",
    cssClass: "font-body",
    token: "--wp--preset--font-family--brand-body",
    sample: "Clean and readable body text for optimal user experience.",
  },
];

/** Button variants */
export const buttonVariants = [
  { label: "Neon Primary", classes: "btn btn--neon-primary", text: "Primary Action" },
  { label: "Neon Outline", classes: "btn btn--neon-outline", text: "Ghost Button" },
  { label: "Neon Secondary", classes: "btn btn--neon-secondary", text: "Secondary" },
  { label: "Default", classes: "btn btn--default", text: "Default" },
  { label: "Outline", classes: "btn btn--outline", text: "Outline" },
  { label: "Secondary", classes: "btn btn--secondary", text: "Secondary" },
  { label: "Ghost", classes: "btn btn--ghost", text: "Ghost" },
  { label: "Destructive", classes: "btn btn--destructive", text: "Destructive" },
  { label: "Link", classes: "btn btn--link", text: "Link Style" },
];

/** Button sizes */
export const buttonSizes = [
  { label: "Small", classes: "btn btn--neon-primary btn--sm", text: "Small" },
  { label: "Default", classes: "btn btn--neon-primary", text: "Default" },
  { label: "Large", classes: "btn btn--neon-primary btn--lg", text: "Large" },
  { label: "Icon", classes: "btn btn--neon-primary btn--icon", text: "+" },
];

/** Spacing tokens */
export const spacingTokens = [
  { name: "Fluid XS", token: "--wp--preset--spacing--fluid-xs", value: "clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)" },
  { name: "Fluid SM", token: "--wp--preset--spacing--fluid-sm", value: "clamp(0.75rem, 0.5rem + 1vw, 1.25rem)" },
  { name: "Fluid MD", token: "--wp--preset--spacing--fluid-md", value: "clamp(1rem, 0.6rem + 2vw, 2rem)" },
  { name: "Fluid LG", token: "--wp--preset--spacing--fluid-lg", value: "clamp(1.5rem, 1rem + 2.5vw, 3rem)" },
  { name: "Fluid XL", token: "--wp--preset--spacing--fluid-xl", value: "clamp(2rem, 1.2rem + 4vw, 4rem)" },
  { name: "Fluid 2XL", token: "--wp--preset--spacing--fluid-2xl", value: "clamp(3rem, 1.5rem + 7.5vw, 6rem)" },
  { name: "Section H", token: "--wp--preset--spacing--section-horizontal", value: "clamp(1.5rem, 1.35rem + 0.714vw, 2rem)" },
  { name: "Section V", token: "--wp--preset--spacing--section-vertical", value: "clamp(2rem, 0.5rem + 4vw, 5rem)" },
];

/** Border radius tokens */
export const borderRadiusTokens = [
  { name: "SM", token: "--wp--preset--border-radius--sm", value: "0.25rem" },
  { name: "MD", token: "--wp--preset--border-radius--md", value: "0.5rem" },
  { name: "LG", token: "--wp--preset--border-radius--lg", value: "1rem" },
  { name: "XL", token: "--wp--preset--border-radius--xl", value: "1.5rem" },
  { name: "2XL", token: "--wp--preset--border-radius--2xl", value: "2rem" },
  { name: "Full", token: "--wp--preset--border-radius--full", value: "9999px" },
];

/** Shadow tokens */
export const shadowTokens = [
  { name: "Card", token: "--wp--preset--shadow--card", description: "Default card elevation" },
  { name: "Card Hover", token: "--wp--preset--shadow--card-hover", description: "Elevated card on hover" },
  { name: "Neon SM", token: "--wp--preset--shadow--neon-sm", description: "Subtle neon glow" },
  { name: "Neon MD", token: "--wp--preset--shadow--neon-md", description: "Medium neon glow" },
  { name: "Neon LG", token: "--wp--preset--shadow--neon-lg", description: "Strong neon glow" },
];

/** Icon categories with their Lucide icon names */
export const iconCategories = [
  {
    category: "Navigation",
    icons: ["Home", "User", "Image", "Play", "BookOpen", "Mail", "ArrowLeft", "ArrowRight", "ArrowUp", "ChevronLeft", "ChevronRight", "ChevronDown", "ExternalLink"],
  },
  {
    category: "Makeup & Art",
    icons: ["Palette", "Layers", "Fingerprint", "Paintbrush", "Droplets", "Sparkles", "Wand2"],
  },
  {
    category: "Content & Media",
    icons: ["Calendar", "Clock", "Tag", "Eye", "Heart", "BookOpen", "Newspaper", "FileText", "FolderOpen"],
  },
  {
    category: "Actions & UI",
    icons: ["X", "Plus", "Minus", "Check", "Copy", "Share2", "Link2", "Download", "Grid", "ZoomIn", "ZoomOut", "GripVertical", "Scale"],
  },
  {
    category: "Theme & Status",
    icons: ["Sun", "Moon", "Wifi", "WifiOff", "Zap", "Flashlight"],
  },
  {
    category: "Places & Concepts",
    icons: ["MapPin", "Compass", "Building2", "Music", "Brain", "Rocket", "Instagram", "Facebook", "MessageCircle"],
  },
];
