/**
 * @fileoverview About landing page — redesigned with Phase 3 content components
 *
 * Uses Timeline, PullQuote, SplitContent, ContentSection, and ChapterNav
 * to create an immersive storytelling experience for Ash Shaw's identity.
 *
 * @author Ash Shaw Portfolio Team
 * @version 5.0.0 - Phase 4 Content Expansion Redesign
 */

import React, { useEffect, useState, useCallback } from "react";
import "../../../styles/globals.css";
import "../../../styles/blocks/about-page.css";

/* ── Layout / Section Components ── */
import { HeroLayout } from "../../sections/HeroLayout";
import { ContentSection } from "../../sections/ContentSection";
import { SplitContent } from "../../sections/SplitContent";
import { FaqSection } from "../../sections/FaqSection";

/* ── UI Components ── */
import { PullQuote } from "../../ui/PullQuote";
import { Timeline } from "../../ui/Timeline";
import { ChapterNav } from "../../ui/ChapterNav";
import { ScrollDownArrow } from "../../ui/ScrollDownArrow";

/* ── Data ── */
import { aboutLandingData } from "../../../data/mock/pages/about-landing";
import { aboutHeroImages } from "../../../data/mock/images/hero-images";
import { aboutHero } from "../../../data/mock/pages/about";
import { aboutUI } from "../../../data/mock/ui/about";

/* ── Hooks ── */
import { useAboutPageContent } from "../../../hooks/useContent";
import { useAppNavigate } from "../../../hooks/useAppNavigate";

/* ── SEO & Schema ── */
import { setSEO } from "../../../utils/seo";
import { pageSEO } from "../../../data/mock/seo";
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildPersonSchema,
} from "../../../utils/schemaService";

/* ── Image for ADHD section ── */
var adhdImageUrl =
  "https://images.unsplash.com/photo-1533408944756-4950754f3ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwVVYlMjBwYWludCUyMGFydGlzdCUyMGZlc3RpdmFsJTIwZmFjZXxlbnwxfHx8fDE3NzIzODEyNTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/**
 * About landing page — immersive identity storytelling with chapter navigation
 */
export function AboutPage() {
  var setCurrentPage = useAppNavigate();
  var landingData = aboutLandingData;

  /* ── Active chapter tracking for ChapterNav ── */
  var defaultChapterId = landingData.chapters.length > 0 ? landingData.chapters[0].id : "";
  var activeChapterState = useState(defaultChapterId);
  var activeChapter = activeChapterState[0];
  var setActiveChapter = activeChapterState[1];

  /* ── SEO + Schema ── */
  useEffect(function () {
    setSEO(pageSEO.about);
    injectSchema(SCHEMA_IDS.person, buildPersonSchema());
    return function () {
      removeSchema(SCHEMA_IDS.person);
    };
  }, []);

  /* ── Scroll spy for active chapter ── */
  useEffect(function () {
    function handleScroll() {
      var chapters = landingData.chapters;
      var found = "";
      for (var i = 0; i < chapters.length; i++) {
        var el = document.getElementById(chapters[i].id);
        if (el) {
          var rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            found = chapters[i].id;
          }
        }
      }
      if (found) {
        setActiveChapter(found);
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* ── Contentful fallback (legacy hook) ── */
  var contentResult = useAboutPageContent();
  var aboutContent = contentResult.data;
  var contentLoading = contentResult.loading;

  var heroTitle = aboutContent && aboutContent.hero
    ? (aboutContent.hero.title || aboutHero.title)
    : aboutHero.title;

  var heroDescription = landingData.hero.description;

  /* ── Handlers ── */
  var handlePortfolioClick = useCallback(function () {
    setCurrentPage("portfolio");
  }, [setCurrentPage]);

  var handleChapterClick = useCallback(function (id: string) {
    var el = document.getElementById(id);
    if (el) {
      var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({
        behavior: prefersReduced ? "auto" : "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <div className="about-page-container">
      {/* ──────────────── HERO ──────────────── */}
      <HeroLayout
        title={heroTitle}
        subtitle={
          <React.Fragment>
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
          </React.Fragment>
        }
        description={heroDescription}
        size="xl"
        layout="split"
        align="wide"
        fullscreen={true}
        className="hero"
        showScrollArrow={true}
        scrollArrowTarget="aquarian-section"
        heroImages={aboutHeroImages}
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
          <React.Fragment>
            <div className="about-hero-orb-1" aria-hidden="true"></div>
            <div className="about-hero-orb-2" aria-hidden="true"></div>
            <div className="about-hero-orb-3" aria-hidden="true"></div>
          </React.Fragment>
        }
      />

      {/* ──────────────── CHAPTER NAV + CONTENT ──────────────── */}
      <div className="about-landing bg-atomic-noise">

        {/* Mobile chapter nav (horizontal, sticky) */}
        <div className="about-landing__mobile-nav">
          <ChapterNav
            chapters={landingData.chapters}
            activeChapter={activeChapter}
            onChapterClick={handleChapterClick}
          />
        </div>

        {/* Desktop sidebar nav */}
        <aside className="about-landing__nav">
          <ChapterNav
            chapters={landingData.chapters}
            activeChapter={activeChapter}
            onChapterClick={handleChapterClick}
          />
        </aside>

        {/* ──────────────── SECTIONS ──────────────── */}
        <div className="about-landing__sections">

          {/* ─── 1. The Aquarian Blueprint ─── */}
          <div className="entrance-fade-up">
            <ContentSection
              id="aquarian-section"
              title={landingData.aquarianBlueprint.title}
              variant="callout"
              colorAccent="blue"
            >
              {landingData.aquarianBlueprint.paragraphs.map(function (para, idx) {
                return (
                  <p className="text-body-p" key={"aq-p-" + idx}>
                    {para}
                  </p>
                );
              })}
              <PullQuote
                quote={landingData.aquarianBlueprint.quote}
                author="Ash Shaw"
                variant="center"
                neonColor="blue"
              />
            </ContentSection>
          </div>

          {/* ─── 2. ADHD — Wired Different ─── */}
          <div className="entrance-fade-up entrance-fade-up--delay-1">
            <ContentSection
              id="adhd-section"
              title={landingData.adhdSection.title}
              variant="default"
              colorAccent="green"
            >
              <SplitContent
                imageUrl={adhdImageUrl}
                imageAlt={landingData.adhdSection.imageAlt}
                imageSide="left"
                variant="even"
              >
                <p className="text-body-p">
                  {landingData.adhdSection.intro}
                </p>

                <h3 className="about-adhd-subheading">
                  {landingData.adhdSection.artHeading}
                </h3>
                <ul className="about-adhd-list">
                  {landingData.adhdSection.artPoints.map(function (point, idx) {
                    return (
                      <li className="about-adhd-list__item" key={"art-" + idx}>
                        {point}
                      </li>
                    );
                  })}
                </ul>

                <h3 className="about-adhd-subheading">
                  {landingData.adhdSection.businessHeading}
                </h3>
                <ul className="about-adhd-list">
                  {landingData.adhdSection.businessPoints.map(function (point, idx) {
                    return (
                      <li className="about-adhd-list__item" key={"biz-" + idx}>
                        {point}
                      </li>
                    );
                  })}
                </ul>
              </SplitContent>
            </ContentSection>
          </div>

          {/* ─── 3. The Costume Evolution ─── */}
          <div className="entrance-fade-up entrance-fade-up--delay-2">
            <ContentSection
              id="costume-section"
              title={landingData.costumeEvolution.title}
              variant="default"
              colorAccent="pink"
            >
              <Timeline
                events={landingData.costumeEvolution.events}
                variant="vertical"
                colorAccent="pink"
              />
            </ContentSection>
          </div>

          {/* ─── 4. Making Others Shine — The Bullied Kid ─── */}
          <div className="entrance-fade-up entrance-fade-up--delay-3">
            <ContentSection
              id="shine-section"
              title="Making Others Shine"
              variant="callout"
              colorAccent="pink"
            >
              {landingData.bulliedKid.contextParagraphs.map(function (para, idx) {
                return (
                  <p className="text-body-p about-context-text" key={"bk-p-" + idx}>
                    {para}
                  </p>
                );
              })}
              <PullQuote
                quote={landingData.bulliedKid.quote}
                variant="center"
                neonColor="pink"
              />
            </ContentSection>
          </div>

          {/* ─── FAQ Section ─── */}
          <FaqSection pageId="about" />
        </div>
      </div>
    </div>
  );
}
