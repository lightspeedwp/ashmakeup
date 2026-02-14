/**
 * @fileoverview About page component for Ash Shaw Makeup Portfolio
 * Provides immersive storytelling through full-width sections, gradient frames,
 * Contentful CMS integration, and accessibility-compliant structure with creative visual elements.
 * Features a responsive CSS Grid layout for skills section.
 *
 * @author Ash Shaw Portfolio Team
 * @version 4.0.0 - Pure Responsive Grid Layout
 */

import React from "react";
import { Palette, Layers, Fingerprint, Zap, Droplets, Sparkles } from "lucide-react";
import { Compass, Music, Building2, Flashlight, Paintbrush, Wand2, Brain, Rocket } from "lucide-react";
import "../../../styles/globals.css";
import { HeroLayout } from "../../sections/HeroLayout";
import { ScrollToTop } from "../../ui/ScrollToTop";

import { SectionCard } from "../../ui/SectionCard";
import { ABOUT_SECTION_THEMES } from "../../common/Constants";
import { aboutHeroImages } from "../../../data/mock/images/hero-images";
import { aboutHero, aboutPageText } from "../../../data/mock/pages/about";
import { aboutUI } from "../../../data/mock/ui/about";
import { useAboutPageContent } from "../../../hooks/useContentful";
import { useAppNavigate } from "../../../hooks/useAppNavigate";
import "@/styles/blocks/about-page.css";

/**
 * About page component providing Ash Shaw's complete makeup artistry story with Contentful CMS integration
 */
export function AboutPage() {
  const setCurrentPage = useAppNavigate();

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
      icon: Fingerprint,
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
            onClick={refreshContent}
            className="btn btn--neon-primary"
          >
            {aboutUI.loading.retry}
          </button>
          <button
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
    aboutContent?.hero.title || "My journey through";
  const heroSubtitle =
    aboutContent?.hero.subtitle ||
    "colour, creativity, and connection since 2019.";
  const heroDescription =
    aboutContent?.hero.description ||
    "What began as simple experimentation quickly turned into a passion that's taken me from intimate gatherings to massive festival stages, from underground Berlin clubs to innovative UV explorations. This is my story of colour, connection, and creative growth.";
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
              colour
            </em>
            ,{" "}
            <em className="text-gradient-purple-violet">
              creativity
            </em>
            , and{" "}
            <em className="text-gradient-blue-cyan">
              connection
            </em>{" "}
            since 2019.
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
      <div className="about-content">
        {/* Section-scoped noise texture (inline style bypasses CSS bundler) */}
        <div
          className="about-content__noise"
          aria-hidden="true"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Journey Section */}
        <SectionCard
          id="journey-section"
          title={aboutUI.sections.journey.title}
          theme={ABOUT_SECTION_THEMES.journey}
          quote={aboutUI.sections.journey.quote}
          icon={Compass}
        >
          <p className="text-body-p text-inherit">
            {aboutPageText.journey}
          </p>
        </SectionCard>

        {/* Festival Section */}
        <SectionCard
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
          title={aboutUI.sections.uv.title}
          theme={ABOUT_SECTION_THEMES.uv}
          icon={Flashlight}
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
          title={aboutUI.sections.uvMakeup.title}
          theme={ABOUT_SECTION_THEMES.nails}
          icon={Wand2}
          actions={
            <div className="about-cta-center">
              <button
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
          title={aboutUI.sections.future.title}
          theme={ABOUT_SECTION_THEMES.future}
          icon={Rocket}
          actions={
            <div className="about-cta-center">
              <button
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
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop
        showAfter={300}
        ariaLabel="Scroll to top of about page"
      />
    </div>
  );
}