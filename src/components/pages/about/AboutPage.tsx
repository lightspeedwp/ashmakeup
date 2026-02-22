/**
 * @fileoverview About page component for Ash Shaw Makeup Portfolio
 * Provides immersive storytelling through full-width sections, gradient frames,
 * Contentful CMS integration, and accessibility-compliant structure with creative visual elements.
 * Features a responsive CSS Grid layout for skills section.
 *
 * @author Ash Shaw Portfolio Team
 * @version 4.0.0 - Pure Responsive Grid Layout
 */

import React, { useEffect } from "react";
import { Palette, Layers, User, Zap, Droplets, Sparkles } from "lucide-react";
import { MapPin, Music, Building2, Paintbrush, PenTool, Brain, Rocket } from "lucide-react";
import "../../../styles/globals.css";
import { HeroLayout } from "../../sections/HeroLayout";
import { FaqSection } from "../../sections/FaqSection";

import { SectionCard } from "../../ui/SectionCard";
import { ABOUT_SECTION_THEMES } from "../../common/Constants";
import { aboutHeroImages } from "../../../data/mock/images/hero-images";
import { aboutHero, aboutPageText } from "../../../data/mock/pages/about";
import { aboutUI } from "../../../data/mock/ui/about";
import { useAboutPageContent } from "../../../hooks/useContentful";
import { useAppNavigate } from "../../../hooks/useAppNavigate";
import "../../../styles/blocks/about-page.css";

import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildPersonSchema,
} from '../../../utils/schemaService';

/**
 * About page component providing Ash Shaw's complete makeup artistry story with Contentful CMS integration
 */
export function AboutPage() {
  const setCurrentPage = useAppNavigate();

  useEffect(() => {
    setSEO(pageSEO.about);
    injectSchema(SCHEMA_IDS.person, buildPersonSchema());
    return () => {
      removeSchema(SCHEMA_IDS.person);
    };
  }, []);

  // Fetch dynamic about page content from Contentful
  const {
    data: aboutContent,
    loading: contentLoading,
    error: contentError,
    refresh: refreshContent,
  } = useAboutPageContent();

  const handlePortfolioClick = () => {
    setCurrentPage("portfolio");
  };

  const handleUVMakeupClick = () => {
    setCurrentPage("portfolio");
  };

  // Skills Data
  const skills = [
    {
      id: "color-theory",
      title: aboutUI.sections.mousse.skills.theory,
      icon: Palette,
      gradientClass: "about-skill-icon-wrap--pink-purple"
    },
    {
      id: "blending-mastery",
      title: aboutUI.sections.mousse.skills.blending,
      icon: Layers,
      gradientClass: "about-skill-icon-wrap--cyan-blue"
    },
    {
      id: "texture-work",
      title: aboutUI.sections.mousse.skills.texture,
      icon: User,
      gradientClass: "about-skill-icon-wrap--green-yellow"
    },
    {
      id: "uv-techniques",
      title: aboutUI.sections.mousse.skills.uvTechniques,
      icon: Zap,
      gradientClass: "about-skill-icon-wrap--purple-pink"
    },
    {
      id: "pigment-knowledge",
      title: aboutUI.sections.mousse.skills.pigmentKnowledge,
      icon: Droplets,
      gradientClass: "about-skill-icon-wrap--orange-red"
    },
    {
      id: "creative-design",
      title: aboutUI.sections.mousse.skills.creativeDesign,
      icon: Sparkles,
      gradientClass: "about-skill-icon-wrap--blue-green"
    }
  ];

  // Loading state component
  const LoadingState = () => (
    <div className="about-loading-container">
      <div className="about-loading-wrapper">
        <div className="about-loading-content">
          <div className="loading-skeleton">
            <div className="skeleton-bar skeleton-bar--title"></div>
            <div className="skeleton-bar skeleton-bar--subtitle"></div>
            <div className="skeleton-bar skeleton-bar--hero"></div>
            <div className="about-skeleton-stack">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="about-skeleton-card"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Error state component with retry functionality
  const ErrorState = () => (
    <div className="homepage-error">
      <div className="homepage-error__content">
        <div className="homepage-error__icon-wrapper">
          <div className="homepage-error__icon">
            <span role="img" aria-label="Warning">⚠️</span>
          </div>
          <h1 className="text-section-h2 mb-fluid-sm">
            {aboutUI.loading.title}
          </h1>
          <p className="text-body-p mb-fluid-lg">
            {contentError || aboutUI.loading.errorMessage}
          </p>
        </div>
        <div className="homepage-error__actions">
          <button
            type="button"
            onClick={refreshContent}
            className="btn btn--neon-primary"
          >
            {aboutUI.loading.retry}
          </button>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="btn btn--ghost"
          >
            {aboutUI.loading.refresh}
          </button>
        </div>
      </div>
    </div>
  );

  // Show loading state while fetching initial content
  if (contentLoading && !aboutContent) {
    return <LoadingState />;
  }

  // Show error state if content failed to load and no cached data
  if (contentError && !aboutContent) {
    return <ErrorState />;
  }

  // Extract content with fallbacks to static content
  const heroTitle =
    aboutContent?.hero.title || aboutHero.title;
  const heroSubtitle =
    aboutContent?.hero.subtitle || aboutHero.subtitle;
  const heroDescription =
    aboutContent?.hero.description || aboutHero.description;
  const heroImage = aboutContent?.hero.image
    ? {
        src: aboutContent.hero.image.url,
        alt: aboutContent.hero.image.alt,
        title: aboutContent.hero.image.title,
      }
    : null;

  return (
    <div className="about-page-container">
      {/* Content loading indicator */}
      {contentLoading && aboutContent && (
        <div className="loading-toast">
          <div className="loading-toast__inner">
            <div className="loading-toast__content">
              <div className="loading-spinner"></div>
              <span>{aboutUI.loading.message}</span>
            </div>
          </div>
        </div>
      )}

      {/* Dynamic Hero Section with Contentful content */}
      <HeroLayout
        title={heroTitle}
        subtitle={
          <>
            <em className="text-gradient-pink-rose">
              {aboutUI.hero.subtitle.words[0]}
            </em>
            ,{" "}
            <em className="text-gradient-purple-violet">
              {aboutUI.hero.subtitle.words[1]}
            </em>
            , and{" "}
            <em className="text-gradient-blue-cyan">
              {aboutUI.hero.subtitle.words[2]}
            </em>{" "}
            {aboutUI.hero.subtitle.suffix}
          </>
        }
        description={heroDescription}
        size="xl"
        layout="split"
        align="wide"
        fullscreen={true}
        className="hero"
        showScrollArrow={true}
        scrollArrowTarget="journey-section"
        heroImages={heroImage ? [heroImage] : aboutHeroImages}
        lightboxTitle={aboutUI.hero.lightboxTitle}
        enableLightbox={true}
        actions={
          <button
            type="button"
            onClick={handlePortfolioClick}
            className="btn btn--neon-primary"
            aria-label="Navigate to Portfolio page to explore makeup artistry collection"
          >
            {aboutUI.hero.cta}
          </button>
        }
        decorativeElements={
          <>
            <div
              className="about-hero-orb-1"
              aria-hidden="true"
            ></div>
            <div
              className="about-hero-orb-2"
              aria-hidden="true"
            ></div>
            <div
              className="about-hero-orb-3"
              aria-hidden="true"
            ></div>
          </>
        }
      />

      {/* Sections between Hero and Footer */}
      <div className="about-content bg-atomic-noise">
        {/* Journey Section */}
        <SectionCard
          id="journey-section"
          title={aboutUI.sections.journey.title}
          theme={ABOUT_SECTION_THEMES.journey}
          quote={aboutUI.sections.journey.quote}
          icon={MapPin}
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.journey}
          </p>
        </SectionCard>

        {/* Festival Section */}
        <SectionCard
          id="festival-section"
          title={aboutUI.sections.festival.title}
          theme={ABOUT_SECTION_THEMES.festival}
          icon={Music}
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.festival[0]}
          </p>
          <p className="text-body-p text-inherit mt-fluid-md">
            {aboutPageText.festival[1]}
          </p>
        </SectionCard>

        {/* Berlin Nights Section */}
        <SectionCard
          id="berlin-section"
          title={aboutUI.sections.berlin.title}
          theme={ABOUT_SECTION_THEMES.berlin}
          quote={aboutUI.sections.berlin.quote}
          icon={Building2}
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.berlin[0]}
          </p>
          <p className="text-body-p text-inherit mt-fluid-md">
            {aboutPageText.berlin[1]}
          </p>
        </SectionCard>

        {/* UV Makeup Section */}
        <SectionCard
          id="uv-section"
          title={aboutUI.sections.uv.title}
          theme={ABOUT_SECTION_THEMES.uv}
          icon={Zap}
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.uv[0]}
          </p>
          <p className="text-body-p text-inherit mt-fluid-md">
            {aboutPageText.uv[1]}
          </p>
          <div className="about-technical-card">
            <h3 className="about-technical-title">
              {aboutUI.sections.uv.technical.title}
            </h3>
            <div className="about-technical-divider"></div>
            <p className="about-technical-description">
              {aboutUI.sections.uv.technical.description}
            </p>
          </div>
        </SectionCard>

        {/* Mousse Makeup Section */}
        <SectionCard
          id="mousse-section"
          title={aboutUI.sections.mousse.title}
          theme={ABOUT_SECTION_THEMES.mousse}
          icon={Paintbrush}
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.mousse[0]}
          </p>
          <p className="text-body-p text-inherit mt-fluid-md">
            {aboutPageText.mousse[1]}
          </p>
          
          {/* Skills Responsive Grid Layout */}
          <div className="about-skills-grid">
            {skills.map((skill) => (
              <div key={skill.id} className="about-skill-item">
                <div className={`about-skill-icon-wrap ${skill.gradientClass}`}>
                  <skill.icon className="about-skill-icon" aria-hidden="true" />
                </div>
                <h4 className="about-skill-title">
                  {skill.title}
                </h4>
              </div>
            ))}
          </div>
        </SectionCard>

        {/* UV Makeup Section (Nails theme) */}
        <SectionCard
          id="uv-makeup-section"
          title={aboutUI.sections.uvMakeup.title}
          theme={ABOUT_SECTION_THEMES.nails}
          icon={PenTool}
          actions={
            <div className="about-cta-center">
              <button
                type="button"
                onClick={handleUVMakeupClick}
                className="btn btn--neon-primary"
                aria-label="Navigate to Portfolio page UV Makeup section"
              >
                {aboutUI.sections.uvMakeup.cta}
              </button>
            </div>
          }
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.uvMakeup[0]}
          </p>
          <p className="text-body-p text-inherit mt-fluid-md">
            {aboutPageText.uvMakeup[1]}
          </p>
        </SectionCard>

        {/* Creative Process Section */}
        <SectionCard
          id="creative-section"
          title={aboutUI.sections.creative.title}
          theme={ABOUT_SECTION_THEMES.creative}
          quote={aboutUI.sections.creative.quote}
          icon={Brain}
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.creative[0]}
          </p>
          <p className="text-body-p text-inherit mt-fluid-md">
            {aboutPageText.creative[1]}
          </p>
        </SectionCard>

        {/* Looking Forward Section */}
        <SectionCard
          id="future-section"
          title={aboutUI.sections.future.title}
          theme={ABOUT_SECTION_THEMES.future}
          icon={Rocket}
          actions={
            <div className="about-cta-center">
              <button
                type="button"
                onClick={handlePortfolioClick}
                className="btn btn--neon-primary"
                aria-label="Navigate to Portfolio page to explore makeup artistry collection"
              >
                {aboutUI.sections.future.cta}
              </button>
            </div>
          }
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.future[0]}
          </p>
          <p className="text-body-p text-inherit mt-fluid-md">
            {aboutPageText.future[1]}
          </p>
        </SectionCard>

        {/* FAQ Section */}
        <FaqSection pageId="about" />
      </div>
    </div>
  );
}