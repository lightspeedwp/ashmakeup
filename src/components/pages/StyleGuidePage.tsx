/**
 * @fileoverview Style Guide page for Ash Shaw Makeup Portfolio
 *
 * Comprehensive design-system reference displaying every token, component,
 * and icon used across the site. Organised into clearly labelled sections
 * following strict BEM architecture.
 *
 * @component StyleGuidePage
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React from "react";
import {
  Home,
  User,
  Image,
  Play,
  BookOpen,
  Mail,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Palette,
  Layers,
  Fingerprint,
  Paintbrush,
  Droplets,
  Sparkles,
  Wand2,
  Calendar,
  Clock,
  Tag,
  Eye,
  Heart,
  Newspaper,
  FileText,
  FolderOpen,
  X,
  Plus,
  Minus,
  Check,
  Copy,
  Share2,
  Link2,
  Download,
  Grid,
  ZoomIn,
  ZoomOut,
  GripVertical,
  Scale,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  Zap,
  Flashlight,
  MapPin,
  Compass,
  Building2,
  Music,
  Brain,
  Rocket,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Logo } from "../common/Logo";
import { SocialLinks } from "../common/SocialLinks";
import { ShineIcon, JoyIcon, GrowthIcon } from "../common/ColorfulIcons";
import { ScrollToTop } from "../ui/ScrollToTop";

import {
  styleGuideContent,
  neonColorSwatches,
  neutralSwatches,
  gradientPresets,
  typographyScale,
  fontFamilies,
  buttonVariants,
  buttonSizes,
  spacingTokens,
  borderRadiusTokens,
  shadowTokens,
  iconCategories,
} from "../../data/mock/ui/style-guide";

import "@/styles/blocks/style-guide-page.css";
import "@/styles/blocks/button.css";

/** Lookup map from icon name string to Lucide component */
const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  User,
  Image,
  Play,
  BookOpen,
  Mail,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  Palette,
  Layers,
  Fingerprint,
  Paintbrush,
  Droplets,
  Sparkles,
  Wand2,
  Calendar,
  Clock,
  Tag,
  Eye,
  Heart,
  Newspaper,
  FileText,
  FolderOpen,
  X,
  Plus,
  Minus,
  Check,
  Copy,
  Share2,
  Link2,
  Download,
  Grid,
  ZoomIn,
  ZoomOut,
  GripVertical,
  Scale,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  Zap,
  Flashlight,
  MapPin,
  Compass,
  Building2,
  Music,
  Brain,
  Rocket,
  Instagram,
  Facebook,
  MessageCircle,
};

/** Approximate pixel widths for the spacing bar visualisation */
const SPACING_BAR_WIDTHS: Record<string, string> = {
  "--wp--preset--spacing--fluid-xs": "8%",
  "--wp--preset--spacing--fluid-sm": "14%",
  "--wp--preset--spacing--fluid-md": "22%",
  "--wp--preset--spacing--fluid-lg": "34%",
  "--wp--preset--spacing--fluid-xl": "48%",
  "--wp--preset--spacing--fluid-2xl": "70%",
  "--wp--preset--spacing--section-horizontal": "18%",
  "--wp--preset--spacing--section-vertical": "55%",
};

/**
 * StyleGuidePage — comprehensive design-system reference
 */
export function StyleGuidePage() {
  return (
    <article className="style-guide" aria-label="Style Guide">
      {/* ── Hero ── */}
      <header className="style-guide__hero">
        <div className="style-guide__hero-content">
          <span className="style-guide__hero-badge">
            {styleGuideContent.hero.subtitle}
          </span>
          <h1 className="style-guide__hero-title text-hero-h1 text-gradient-pink-purple-blue">
            {styleGuideContent.hero.title}
          </h1>
          <p className="style-guide__hero-desc text-body-p">
            {styleGuideContent.hero.description}
          </p>
        </div>
      </header>

      {/* ═══════════════════════════════════════════
          1. BRANDING
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-branding"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-branding" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.branding.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.branding.description}
          </p>
        </div>

        <div className="style-guide__branding-grid">
          {/* Light mode logo */}
          <div className="style-guide__branding-card">
            <p className="style-guide__branding-card-title">Logo — Light Mode</p>
            <div className="style-guide__branding-logo-wrap">
              <Logo size="xl" />
            </div>
          </div>

          {/* Dark mode logo */}
          <div className="style-guide__branding-card">
            <p className="style-guide__branding-card-title">Logo — Dark Mode</p>
            <div className="style-guide__branding-logo-wrap style-guide__branding-logo-wrap--dark">
              <Logo size="xl" forceDark />
            </div>
          </div>

          {/* Site Icon / Favicon */}
          <div className="style-guide__branding-card">
            <p className="style-guide__branding-card-title">Site Icon / Favicon</p>
            <div className="style-guide__favicon-wrap">
              <div className="style-guide__favicon-item">
                <img
                  src="/favicon.svg"
                  alt="Ash Shaw SVG favicon"
                  width="64"
                  height="64"
                  className="style-guide__favicon-img"
                />
                <span className="style-guide__favicon-label">SVG 64px</span>
              </div>
              <div className="style-guide__favicon-item">
                <img
                  src="/favicon.svg"
                  alt="Ash Shaw SVG favicon small"
                  width="32"
                  height="32"
                  className="style-guide__favicon-img"
                />
                <span className="style-guide__favicon-label">SVG 32px</span>
              </div>
              <div className="style-guide__favicon-item">
                <img
                  src="/favicon.ico"
                  alt="Ash Shaw ICO favicon"
                  width="32"
                  height="32"
                  className="style-guide__favicon-img"
                />
                <span className="style-guide__favicon-label">ICO 32px</span>
              </div>
            </div>
          </div>

          {/* Brand Identity */}
          <div className="style-guide__branding-card">
            <p className="style-guide__branding-card-title">Brand Identity</p>
            <div>
              <p className="style-guide__font-sample style-guide__font-sample--title style-guide__font-sample--brand-title">
                Ash Shaw
              </p>
              <p className="style-guide__font-usage style-guide__font-usage--flush">
                MAKEUP ARTIST — Personal Art Portfolio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. COLOUR PALETTE
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-colors"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-colors" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.colors.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.colors.description}
          </p>
        </div>

        {/* Neon colours */}
        <h3 className="text-card-h3">Neon Palette</h3>
        <div className="style-guide__swatch-grid">
          {neonColorSwatches.map((swatch) => (
            <div key={swatch.token} className="style-guide__swatch">
              <div
                className="style-guide__swatch-color"
                style={{ backgroundColor: swatch.hex }}
                aria-label={`${swatch.name}: ${swatch.hex}`}
              />
              <div className="style-guide__swatch-info">
                <span className="style-guide__swatch-name">{swatch.name}</span>
                <span className="style-guide__swatch-hex">{swatch.hex}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Neutrals */}
        <h3 className="text-card-h3 style-guide__subsection-title">Neutral Ramp</h3>
        <div className="style-guide__swatch-grid style-guide__swatch-grid--neutrals">
          {neutralSwatches.map((swatch) => (
            <div key={swatch.token} className="style-guide__swatch">
              <div
                className="style-guide__swatch-color style-guide__swatch-color--neutral"
                style={{ backgroundColor: swatch.hex }}
                aria-label={`${swatch.name}: ${swatch.hex}`}
              />
              <div className="style-guide__swatch-info">
                <span className="style-guide__swatch-name">{swatch.name}</span>
                <span className="style-guide__swatch-hex">{swatch.hex}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. GRADIENTS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-gradients"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-gradients" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.gradients.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.gradients.description}
          </p>
        </div>

        <div className="style-guide__gradient-grid">
          {gradientPresets.map((grad) => (
            <div key={grad.token} className="style-guide__gradient-card">
              <div
                className={`style-guide__gradient-preview ${grad.name === "Hyperpop" ? "style-guide__gradient-preview--animated" : ""}`}
                style={{ background: grad.css, backgroundSize: grad.name === "Hyperpop" ? "300% 300%" : undefined }}
                aria-label={`${grad.name} gradient preview`}
              />
              <div className="style-guide__gradient-info">
                <p className="style-guide__gradient-name">{grad.name}</p>
                <p className="style-guide__gradient-desc">{grad.description}</p>
                <p className="style-guide__gradient-token">{grad.token}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Text gradients */}
        <h3 className="text-card-h3 style-guide__subsection-title">Text Gradients</h3>
        <div className="style-guide__text-gradient-grid">
          <div className="style-guide__text-gradient-card">
            <p className="style-guide__text-gradient-sample text-gradient-pink-purple-blue">
              Cyberpunk Text
            </p>
            <p className="style-guide__text-gradient-label">.text-gradient-pink-purple-blue</p>
          </div>
          <div className="style-guide__text-gradient-card">
            <p className="style-guide__text-gradient-sample text-gradient-blue-teal-green">
              Toxic Lime Text
            </p>
            <p className="style-guide__text-gradient-label">.text-gradient-blue-teal-green</p>
          </div>
          <div className="style-guide__text-gradient-card">
            <p className="style-guide__text-gradient-sample text-gradient-gold-peach-coral">
              Solar Flare Text
            </p>
            <p className="style-guide__text-gradient-label">.text-gradient-gold-peach-coral</p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. TYPOGRAPHY
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-typography"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-typography" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.typography.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.typography.description}
          </p>
        </div>

        {/* Type scale */}
        <div className="style-guide__type-list">
          {typographyScale.map((item) => (
            <div key={item.label} className="style-guide__type-item">
              <div className="style-guide__type-meta">
                <span className="style-guide__type-label">{item.label}</span>
                <span className="style-guide__type-token">{item.token}</span>
              </div>
              <p className={`style-guide__type-sample ${item.cssClass}`}>
                {item.sample}
              </p>
            </div>
          ))}
        </div>

        {/* Font families */}
        <h3 className="text-card-h3 style-guide__subsection-title">Font Families</h3>
        <div className="style-guide__font-grid">
          {fontFamilies.map((font) => (
            <div key={font.name} className="style-guide__font-card">
              <p className="style-guide__font-name">{font.name}</p>
              <p className="style-guide__font-usage">{font.usage}</p>
              <p
                className={`style-guide__font-sample ${
                  font.name === "Righteous"
                    ? "style-guide__font-sample--title"
                    : font.name === "Playfair Display"
                      ? "style-guide__font-sample--heading"
                      : "style-guide__font-sample--body"
                }`}
              >
                {font.sample}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. BUTTONS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-buttons"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-buttons" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.buttons.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.buttons.description}
          </p>
        </div>

        {/* Variants */}
        <div className="style-guide__button-section">
          <p className="style-guide__button-section-label">Variants</p>
          <div className="style-guide__button-group">
            {buttonVariants.map((btn) => (
              <button key={btn.label} className={btn.classes} type="button">
                {btn.text}
              </button>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="style-guide__button-section">
          <p className="style-guide__button-section-label">Sizes</p>
          <div className="style-guide__button-group">
            {buttonSizes.map((btn) => (
              <button key={btn.label} className={btn.classes} type="button">
                {btn.text}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. ICON LIBRARY
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-icons"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-icons" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.icons.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.icons.description}
          </p>
        </div>

        {iconCategories.map((cat) => (
          <div key={cat.category} className="style-guide__icon-category">
            <h3 className="style-guide__icon-category-title">{cat.category}</h3>
            <div className="style-guide__icon-grid">
              {cat.icons.map((iconName) => {
                const IconComp = ICON_MAP[iconName];
                if (!IconComp) return null;
                return (
                  <div key={`${cat.category}-${iconName}`} className="style-guide__icon-item">
                    <IconComp aria-hidden="true" />
                    <span className="style-guide__icon-name">{iconName}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </section>

      {/* ═══════════════════════════════════════════
          7. CUSTOM BRAND ICONS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-custom-icons"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-custom-icons" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.customIcons.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.customIcons.description}
          </p>
        </div>

        <div className="style-guide__custom-icon-grid">
          <div className="style-guide__custom-icon-card">
            <ShineIcon size="lg" />
            <span className="style-guide__custom-icon-label">ShineIcon</span>
            <p className="style-guide__custom-icon-desc">
              Radiant starburst — &ldquo;Make People Shine&rdquo;
            </p>
          </div>
          <div className="style-guide__custom-icon-card">
            <JoyIcon size="lg" />
            <span className="style-guide__custom-icon-label">JoyIcon</span>
            <p className="style-guide__custom-icon-desc">
              Paint palette with heart — &ldquo;Brings Me Joy&rdquo;
            </p>
          </div>
          <div className="style-guide__custom-icon-card">
            <GrowthIcon size="lg" />
            <span className="style-guide__custom-icon-label">GrowthIcon</span>
            <p className="style-guide__custom-icon-desc">
              Flowering plant — &ldquo;To Keep Growing&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. SPACING TOKENS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-spacing"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-spacing" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.spacing.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.spacing.description}
          </p>
        </div>

        <div className="style-guide__spacing-list">
          {spacingTokens.map((tok) => (
            <div key={tok.token} className="style-guide__spacing-item">
              <span className="style-guide__spacing-name">{tok.name}</span>
              <div className="style-guide__spacing-bar-wrap">
                <div
                  className="style-guide__spacing-bar"
                  style={{ width: SPACING_BAR_WIDTHS[tok.token] || "20%" }}
                />
              </div>
              <span className="style-guide__spacing-value">{tok.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. BORDER RADIUS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-borders"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-borders" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.borders.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.borders.description}
          </p>
        </div>

        <div className="style-guide__radius-grid">
          {borderRadiusTokens.map((tok) => (
            <div key={tok.token} className="style-guide__radius-item">
              <div
                className="style-guide__radius-preview"
                style={{ borderRadius: tok.value }}
                aria-label={`Border radius ${tok.name}: ${tok.value}`}
              />
              <span className="style-guide__radius-label">{tok.name}</span>
              <span className="style-guide__radius-value">{tok.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. SHADOWS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-shadows"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-shadows" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.shadows.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.shadows.description}
          </p>
        </div>

        <div className="style-guide__shadow-grid">
          {shadowTokens.map((tok) => (
            <div
              key={tok.token}
              className="style-guide__shadow-item"
              style={{ boxShadow: `var(${tok.token})` }}
            >
              <span className="style-guide__shadow-label">{tok.name}</span>
              <p className="style-guide__shadow-desc">{tok.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          11. SOCIAL LINKS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section"
        aria-labelledby="sg-social"
      >
        <div className="style-guide__section-header">
          <h2 id="sg-social" className="style-guide__section-title text-section-h2">
            {styleGuideContent.sections.socialLinks.title}
          </h2>
          <p className="style-guide__section-desc text-body-p">
            {styleGuideContent.sections.socialLinks.description}
          </p>
        </div>

        <div className="style-guide__social-row">
          <div className="style-guide__social-variant">
            <p className="style-guide__social-variant-label">Default (Platform Colours)</p>
            <SocialLinks variant="default" />
          </div>
          <div className="style-guide__social-variant">
            <p className="style-guide__social-variant-label">Clean (Bordered)</p>
            <SocialLinks variant="clean" />
          </div>
          <div className="style-guide__social-variant">
            <p className="style-guide__social-variant-label">Minimal (Icon Only)</p>
            <SocialLinks variant="minimal" />
          </div>
        </div>
      </section>

      <ScrollToTop />
    </article>
  );
}