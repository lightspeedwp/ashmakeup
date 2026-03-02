/**
 * @fileoverview Style Guide page for Ash Shaw Makeup Portfolio
 *
 * Comprehensive design-system reference displaying every token, component,
 * and icon used across the site. Organised into clearly labelled sections
 * following strict BEM architecture.
 *
 * @component StyleGuidePage
 * @author Ash Shaw Portfolio Team
 * @version 5.0.0 - Expanded animation previews to 26 keyframes (full coverage)
 */

import React, { useEffect, useState, useMemo } from "react";
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
  Paintbrush,
  Sparkles,
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
  LayoutGrid,
  ZoomIn,
  ZoomOut,
  Shield,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  Zap,
  MapPin,
  Music,
  Brain,
  Rocket,
  Camera,
  MessageCircle,
} from "../../lib/icons";
import type { LucideIcon } from "../../lib/icons";

import { Logo } from "../common/Logo";
import { SocialLinks } from "../common/SocialLinks";
import { ShineIcon, JoyIcon, GrowthIcon } from "../common/ColorfulIcons";
import { Breadcrumbs } from "../ui/Breadcrumbs";
import type { BreadcrumbItem } from "../ui/Breadcrumbs";
import { ArchiveFilters } from "../ui/ArchiveFilters";

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
  animationPreviews,
  chipBadgeVariants,
  cardVariants,
  formElements,
  archiveFiltersDemoCategories,
  archiveFiltersDemoSortOptions,
  themeComparisonElements,
} from "../../data/mock/ui/style-guide";

import "../../styles/blocks/style-guide-page.css";
import "../../styles/blocks/button.css";
import "../../styles/blocks/badge.css";
import "../../styles/blocks/archive-filters.css";
import "../../styles/blocks/blog-page.css";

import { setSEO } from '../../utils/seo';
import { pageSEO } from '../../data/mock/seo';

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
  Paintbrush,
  Droplets: Sparkles,
  Sparkles,
  PenTool: Paintbrush,
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
  LayoutGrid,
  ZoomIn,
  ZoomOut,
  Shield,
  Sun,
  Moon,
  Wifi,
  WifiOff,
  Zap,
  MapPin,
  Building2: Rocket,
  Music,
  Brain,
  Rocket,
  Instagram: Camera,
  Camera,
  Facebook: ExternalLink,
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
  useEffect(() => {
    setSEO(pageSEO.styleGuide);
  }, []);

  /** Tracks which animation cards are actively playing */
  const [activeAnimations, setActiveAnimations] = useState(new Set());

  /** ArchiveFilters demo state */
  const demoActiveCategoriesInit: string[] = [];
  const [demoActiveCategories, setDemoActiveCategories] = useState(demoActiveCategoriesInit);
  const [demoSortBy, setDemoSortBy] = useState("recent");

  const demoResultCount = demoActiveCategories.length === 0
    ? 42
    : archiveFiltersDemoCategories
        .filter((cat) => demoActiveCategories.includes(cat.slug))
        .reduce((sum, cat) => sum + (cat.count ? cat.count : 0), 0);

  const handleDemoCategoryToggle = (slug: string) => {
    setDemoActiveCategories((prev) =>
      prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug]
    );
  };

  const handleDemoClearAll = () => {
    setDemoActiveCategories([]);
    setDemoSortBy("recent");
  };

  const toggleAnimation = (keyframe: string) => {
    setActiveAnimations((prev) => {
      const next = new Set(prev);
      if (next.has(keyframe)) {
        next.delete(keyframe);
      } else {
        next.add(keyframe);
      }
      return next;
    });
  };

  const breadcrumbs: BreadcrumbItem[] = useMemo(() => [
    { label: 'Home', href: '/' },
    { label: 'Developer Tools', href: '/dev-tools' },
    { label: 'Style Guide' },
  ], []);

  return (
    <article className="style-guide bg-atomic-noise" aria-label="Style Guide">
      {/* ── Hero ── */}
      <header className="style-guide__hero">
        <div className="style-guide__hero-content">
          <Breadcrumbs items={breadcrumbs} centered />

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
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-branding"
      >
        <div className="container-wide section-container">
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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
                    loading="lazy"
                    decoding="async"
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          2. COLOUR PALETTE
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-colors"
      >
        <div className="container-wide section-container">
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
                  <div className="style-guide__swatch-contrast">
                    <span
                      className={`style-guide__swatch-ratio style-guide__swatch-ratio--${swatch.contrastOnWhite.level === 'Fail' ? 'fail' : 'pass'}`}
                      title={`vs White: ${swatch.contrastOnWhite.ratio}`}
                    >
                      <Sun className="style-guide__swatch-ratio-icon" aria-hidden="true" />
                      <span className="style-guide__swatch-ratio-value">{swatch.contrastOnWhite.ratio}</span>
                      {swatch.contrastOnWhite.level}
                    </span>
                    <span
                      className={`style-guide__swatch-ratio style-guide__swatch-ratio--${swatch.contrastOnBlack.level === 'Fail' ? 'fail' : 'pass'}`}
                      title={`vs Atomic Black: ${swatch.contrastOnBlack.ratio}`}
                    >
                      <Moon className="style-guide__swatch-ratio-icon" aria-hidden="true" />
                      <span className="style-guide__swatch-ratio-value">{swatch.contrastOnBlack.ratio}</span>
                      {swatch.contrastOnBlack.level}
                    </span>
                  </div>
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          3. GRADIENTS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-gradients"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          4. TYPOGRAPHY
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-typography"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          5. BUTTONS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-buttons"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          6. ICON LIBRARY
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-icons"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          7. CUSTOM BRAND ICONS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-custom-icons"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          8. SPACING TOKENS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-spacing"
      >
        <div className="container-wide section-container">
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
                    style={{ width: SPACING_BAR_WIDTHS[tok.token] ? SPACING_BAR_WIDTHS[tok.token] : "20%" }}
                  />
                </div>
                <span className="style-guide__spacing-value">{tok.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          9. BORDER RADIUS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-borders"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          10. SHADOWS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-shadows"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          11. ANIMATIONS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-animations"
      >
        <div className="container-wide section-container">
          <div className="style-guide__section-header">
            <h2 id="sg-animations" className="style-guide__section-title text-section-h2">
              {styleGuideContent.sections.animations.title}
            </h2>
            <p className="style-guide__section-desc text-body-p">
              {styleGuideContent.sections.animations.description}
            </p>
          </div>

          <div className="style-guide__anim-grid">
            {animationPreviews.map((anim) => {
              const isActive = activeAnimations.has(anim.keyframe);
              return (
                <div key={anim.keyframe} className="style-guide__anim-card">
                  <div
                    className={`style-guide__anim-preview ${isActive ? 'style-guide__anim-preview--playing' : ''}`}
                    style={isActive ? { animation: `${anim.keyframe} ${anim.duration} ${anim.timing}` } : undefined}
                    aria-label={`${anim.name} animation preview`}
                  />
                  <div className="style-guide__anim-info">
                    <p className="style-guide__anim-name">{anim.name}</p>
                    <p className="style-guide__anim-desc">{anim.description}</p>
                    <p className="style-guide__anim-token">
                      {anim.keyframe} &middot; {anim.duration}
                    </p>
                  </div>
                  <button
                    type="button"
                    className={`style-guide__anim-toggle ${isActive ? 'style-guide__anim-toggle--active' : ''}`}
                    onClick={() => toggleAnimation(anim.keyframe)}
                    aria-pressed={isActive}
                  >
                    {isActive ? 'Stop' : 'Play'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          12. CHIPS & BADGES
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-chips"
      >
        <div className="container-wide section-container">
          <div className="style-guide__section-header">
            <h2 id="sg-chips" className="style-guide__section-title text-section-h2">
              {styleGuideContent.sections.chips.title}
            </h2>
            <p className="style-guide__section-desc text-body-p">
              {styleGuideContent.sections.chips.description}
            </p>
          </div>

          {chipBadgeVariants.map((group) => (
            <div key={group.group} className="style-guide__chip-group">
              <h3 className="style-guide__chip-group-title">{group.group}</h3>
              <div className="style-guide__chip-row">
                {group.items.map((item) => (
                  <div key={`${group.group}-${item.label}`} className="style-guide__chip-item">
                    <span className={item.classes}>{item.label}</span>
                    <span className="style-guide__chip-variant-label">{item.variant}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          13. SOCIAL LINKS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-social"
      >
        <div className="container-wide section-container">
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
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          14. CARD VARIANTS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-cards"
      >
        <div className="container-wide section-container">
          <div className="style-guide__section-header">
            <h2 id="sg-cards" className="style-guide__section-title text-section-h2">
              {styleGuideContent.sections.cards.title}
            </h2>
            <p className="style-guide__section-desc text-body-p">
              {styleGuideContent.sections.cards.description}
            </p>
          </div>

          <div className="style-guide__card-grid">
            {cardVariants.map((card) => (
              <div key={card.cssBlock} className="style-guide__card-showcase">
                <div className="style-guide__card-preview">
                  <div className="style-guide__card-mock">
                    <div className="style-guide__card-mock-image" aria-hidden="true" />
                    <div className="style-guide__card-mock-body">
                      <span className="style-guide__card-mock-badge">Category</span>
                      <span className="style-guide__card-mock-title">Card Title</span>
                      <span className="style-guide__card-mock-excerpt">
                        Brief description text…
                      </span>
                    </div>
                  </div>
                </div>
                <div className="style-guide__card-info">
                  <p className="style-guide__card-info-name">{card.name}</p>
                  <p className="style-guide__card-info-desc">{card.description}</p>
                  <p className="style-guide__card-info-token">
                    <code>.{card.cssBlock}</code>
                  </p>
                  <p className="style-guide__card-info-usage">
                    Used in: {card.usage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          15. FORM ELEMENTS
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-forms"
      >
        <div className="container-wide section-container">
          <div className="style-guide__section-header">
            <h2 id="sg-forms" className="style-guide__section-title text-section-h2">
              {styleGuideContent.sections.forms.title}
            </h2>
            <p className="style-guide__section-desc text-body-p">
              {styleGuideContent.sections.forms.description}
            </p>
          </div>

          <div className="style-guide__form-grid">
            {formElements.map((el) => (
              <div key={el.name} className="style-guide__form-item">
                <label className="style-guide__form-label">{el.name}</label>
                <div className="style-guide__form-control">
                  {el.element === 'textarea' ? (
                    <textarea
                      className="form-control"
                      placeholder={el.placeholder}
                      rows={3}
                      aria-label={el.name}
                    />
                  ) : el.element === 'select' ? (
                    <div className="form-control--select-wrapper">
                      <select className="form-control form-control--select" aria-label={el.name}>
                        {(el.options ? el.options : []).map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>
                  ) : el.element === 'checkbox' ? (
                    <label className="form-checkbox">
                      <input type="checkbox" className="form-checkbox__input" />
                      <span className="form-checkbox__label">{el.placeholder}</span>
                    </label>
                  ) : (
                    <input
                      type={el.type}
                      className="form-control"
                      placeholder={el.placeholder}
                      aria-label={el.name}
                    />
                  )}
                </div>
                <p className="style-guide__form-desc">{el.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          16. ARCHIVE FILTERS DEMO
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-archive-filters"
      >
        <div className="container-wide section-container">
          <div className="style-guide__section-header">
            <h2 id="sg-archive-filters" className="style-guide__section-title text-section-h2">
              {styleGuideContent.sections.archiveFilters.title}
            </h2>
            <p className="style-guide__section-desc text-body-p">
              {styleGuideContent.sections.archiveFilters.description}
            </p>
          </div>

          {/* Live interactive demo */}
          <div className="style-guide__filters-demo">
            <p className="style-guide__filters-demo-label">Interactive Demo</p>
            <ArchiveFilters
              contentType="style-guide-demo"
              categories={archiveFiltersDemoCategories}
              activeCategories={demoActiveCategories}
              sortBy={demoSortBy}
              sortOptions={archiveFiltersDemoSortOptions}
              resultCount={demoResultCount}
              onCategoryToggle={handleDemoCategoryToggle}
              onSortChange={setDemoSortBy}
              onClearAll={handleDemoClearAll}
            />
            <p className="style-guide__filters-demo-note">
              Click chips and sort options above to see multi-select, active filter pills, and live result count in action.
            </p>
          </div>

          {/* Props reference */}
          <h3 className="text-card-h3 style-guide__subsection-title">Component Props</h3>
          <div className="style-guide__filters-demo-props">
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">contentType</span>
              <span className="style-guide__filters-demo-prop-value">string — unique ID for the filter instance</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">categories</span>
              <span className="style-guide__filters-demo-prop-value">{'FilterCategory[] — { id, name, slug, count? }'}</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">activeCategories</span>
              <span className="style-guide__filters-demo-prop-value">string[] — currently selected category slugs</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">sortBy</span>
              <span className="style-guide__filters-demo-prop-value">string — active sort option value</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">sortOptions</span>
              <span className="style-guide__filters-demo-prop-value">{'SortOption[] — { value, label }'}</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">resultCount</span>
              <span className="style-guide__filters-demo-prop-value">number — filtered result count</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">onCategoryToggle</span>
              <span className="style-guide__filters-demo-prop-value">{'(slug: string) => void'}</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">onSortChange</span>
              <span className="style-guide__filters-demo-prop-value">{'(sortBy: string) => void'}</span>
            </div>
            <div className="style-guide__filters-demo-prop">
              <span className="style-guide__filters-demo-prop-name">onClearAll</span>
              <span className="style-guide__filters-demo-prop-value">{'() => void'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          17. DARK / LIGHT MODE COMPARISON
          ═══════════════════════════════════════════ */}
      <section
        className="style-guide__section section-spacing px-horizontal-section"
        aria-labelledby="sg-theme"
      >
        <div className="container-wide section-container">
          <div className="style-guide__section-header">
            <h2 id="sg-theme" className="style-guide__section-title text-section-h2">
              {styleGuideContent.sections.themeComparison.title}
            </h2>
            <p className="style-guide__section-desc text-body-p">
              {styleGuideContent.sections.themeComparison.description}
            </p>
          </div>

          <div className="style-guide__theme-grid">
            {/* Light panel */}
            <div className="style-guide__theme-panel style-guide__theme-panel--light">
              <div className="style-guide__theme-panel-header">
                <Sun aria-hidden="true" />
                <span className="style-guide__theme-panel-label">Light Mode</span>
              </div>
              <div className="style-guide__theme-panel-body">
                {/* Card */}
                <div>
                  <p className="style-guide__theme-element-label">Content Card</p>
                  <div className="style-guide__theme-card">
                    <div className="style-guide__theme-card-image" aria-hidden="true" />
                    <div className="style-guide__theme-card-body">
                      <span className="style-guide__theme-card-badge">Festival</span>
                      <span className="style-guide__theme-card-title">Neon Dreams</span>
                      <span className="style-guide__theme-card-excerpt">
                        UV reactive body art under blacklight at Fusion Festival…
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div>
                  <p className="style-guide__theme-element-label">Buttons</p>
                  <div className="style-guide__theme-buttons">
                    <span className="style-guide__theme-btn style-guide__theme-btn--primary">Primary</span>
                    <span className="style-guide__theme-btn style-guide__theme-btn--outline">Outline</span>
                    <span className="style-guide__theme-btn style-guide__theme-btn--ghost">Ghost</span>
                  </div>
                </div>

                {/* Chips */}
                <div>
                  <p className="style-guide__theme-element-label">Filter Chips</p>
                  <div className="style-guide__theme-chips">
                    <span className="style-guide__theme-chip style-guide__theme-chip--active">UV &amp; Glow</span>
                    <span className="style-guide__theme-chip style-guide__theme-chip--inactive">Editorial</span>
                    <span className="style-guide__theme-chip style-guide__theme-chip--inactive">Festival</span>
                  </div>
                </div>

                {/* Input */}
                <div>
                  <p className="style-guide__theme-element-label">Form Input</p>
                  <input
                    type="text"
                    className="style-guide__theme-input"
                    placeholder="Search the portfolio…"
                    readOnly
                    tabIndex={-1}
                    aria-label="Light mode input demo"
                  />
                </div>
              </div>
            </div>

            {/* Dark panel */}
            <div className="style-guide__theme-panel style-guide__theme-panel--dark">
              <div className="style-guide__theme-panel-header">
                <Moon aria-hidden="true" />
                <span className="style-guide__theme-panel-label">Dark Mode</span>
              </div>
              <div className="style-guide__theme-panel-body">
                {/* Card */}
                <div>
                  <p className="style-guide__theme-element-label">Content Card</p>
                  <div className="style-guide__theme-card">
                    <div className="style-guide__theme-card-image" aria-hidden="true" />
                    <div className="style-guide__theme-card-body">
                      <span className="style-guide__theme-card-badge">Festival</span>
                      <span className="style-guide__theme-card-title">Neon Dreams</span>
                      <span className="style-guide__theme-card-excerpt">
                        UV reactive body art under blacklight at Fusion Festival…
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div>
                  <p className="style-guide__theme-element-label">Buttons</p>
                  <div className="style-guide__theme-buttons">
                    <span className="style-guide__theme-btn style-guide__theme-btn--primary">Primary</span>
                    <span className="style-guide__theme-btn style-guide__theme-btn--outline">Outline</span>
                    <span className="style-guide__theme-btn style-guide__theme-btn--ghost">Ghost</span>
                  </div>
                </div>

                {/* Chips */}
                <div>
                  <p className="style-guide__theme-element-label">Filter Chips</p>
                  <div className="style-guide__theme-chips">
                    <span className="style-guide__theme-chip style-guide__theme-chip--active">UV &amp; Glow</span>
                    <span className="style-guide__theme-chip style-guide__theme-chip--inactive">Editorial</span>
                    <span className="style-guide__theme-chip style-guide__theme-chip--inactive">Festival</span>
                  </div>
                </div>

                {/* Input */}
                <div>
                  <p className="style-guide__theme-element-label">Form Input</p>
                  <input
                    type="text"
                    className="style-guide__theme-input"
                    placeholder="Search the portfolio…"
                    readOnly
                    tabIndex={-1}
                    aria-label="Dark mode input demo"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
