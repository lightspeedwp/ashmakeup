/**
 * @fileoverview Hidden About landing page — the unlisted gateway to Ash's world.
 *
 * This page lives at /about but is NOT linked from any navigation.
 * It tells Ash's full story in summary, promotes media (podcast, videos,
 * portfolio, blog), shows social accounts, and links to all 17 about sub-pages
 * with taglines.
 *
 * Always renders on an atomic-black background regardless of theme.
 *
 * Phase 5 Polish — bundler-safe syntax (no arrow functions, const, destructuring,
 * template literals, Record generics)
 *
 * @component HiddenAboutPage
 * @version 2.0.0
 */

import React, { useEffect } from 'react';
import { Link } from '../../../lib/router';
import {
  User,
  Paintbrush,
  Book,
  Sparkles,
  Clock,
  Plane,
  Mic,
  BookOpen,
  Zap,
  Music,
  Code,
  GraduationCap,
  Heart,
  Activity,
  Headphones,
  Play,
  Image,
  MapPin,
  Leaf,
} from '../../../lib/icons';
import { hiddenAboutData } from '../../../data/mock/pages/hidden-about';
import { SocialLinks } from '../../common/SocialLinks';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import '../../../styles/blocks/hidden-about.css';

/**
 * Resolve icon by name string from mock data
 */
function getIcon(name) {
  if (name === 'Compass') return MapPin;
  if (name === 'User') return User;
  if (name === 'Building2') return Sparkles;
  if (name === 'Paintbrush') return Paintbrush;
  if (name === 'Book') return Book;
  if (name === 'Sparkles') return Sparkles;
  if (name === 'Clock') return Clock;
  if (name === 'Plane') return Plane;
  if (name === 'Mic') return Mic;
  if (name === 'BookOpen') return BookOpen;
  if (name === 'Zap') return Zap;
  if (name === 'Bike') return MapPin;
  if (name === 'Waves') return Activity;
  if (name === 'Music') return Music;
  if (name === 'Code') return Code;
  if (name === 'GraduationCap') return GraduationCap;
  if (name === 'Heart') return Heart;
  if (name === 'Activity') return Activity;
  if (name === 'Headphones') return Headphones;
  if (name === 'Play') return Play;
  if (name === 'Image') return Image;
  if (name === 'Leaf') return Leaf;
  return Sparkles;
}

export function HiddenAboutPage() {
  useEffect(function () {
    setSEO(pageSEO.hiddenAbout);
  }, []);

  var hero = hiddenAboutData.hero;
  var story = hiddenAboutData.story;
  var media = hiddenAboutData.media;
  var subpages = hiddenAboutData.subpages;

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="hidden-about bg-atomic-noise"
      aria-label="Hidden about page \u2014 Ash Shaw's complete story"
    >
      {/* ── Hero ── */}
      <header className="hidden-about__hero">
        <div className="hidden-about__hero-inner">
          <span className="hidden-about__greeting">{hero.greeting}</span>
          <h1 className="hidden-about__title">{hero.title}</h1>
          <p className="hidden-about__subtitle">{hero.subtitle}</p>
          <p className="hidden-about__description">{hero.description}</p>
        </div>
      </header>

      <div className="hidden-about__content">
        {/* ── The Short Version ── */}
        <section className="hidden-about__story" aria-labelledby="hidden-story-title">
          <h2 id="hidden-story-title" className="hidden-about__story-title">
            {story.title}
          </h2>
          {story.paragraphs.map(function (p, i) {
            return (
              <p key={'story-' + i} className="hidden-about__story-text">{p}</p>
            );
          })}
        </section>

        <div className="hidden-about__divider" aria-hidden="true" />

        {/* ── Watch. Listen. Follow. ── */}
        <section className="hidden-about__media" aria-labelledby="hidden-media-title">
          <div className="hidden-about__media-header">
            <h2 id="hidden-media-title" className="hidden-about__media-title">
              {media.title}
            </h2>
            <p className="hidden-about__media-subtitle">{media.subtitle}</p>
          </div>

          <div className="hidden-about__media-grid">
            {media.items.map(function (item) {
              var Icon = getIcon(item.icon);
              var cardClass = 'hidden-about__media-card hidden-about__media-card--' + item.accent;
              return (
                <Link
                  key={item.id}
                  to={item.href}
                  className={cardClass}
                >
                  <Icon className="hidden-about__media-icon" aria-hidden="true" />
                  <span className="hidden-about__media-label">{item.label}</span>
                  <span className="hidden-about__media-tagline">{item.tagline}</span>
                </Link>
              );
            })}
          </div>
        </section>

        <div className="hidden-about__divider" aria-hidden="true" />

        {/* ── Social Accounts ── */}
        <section className="hidden-about__social" aria-labelledby="hidden-social-title">
          <h2 id="hidden-social-title" className="hidden-about__social-title">
            Find Ash Everywhere
          </h2>
          <SocialLinks variant="clean" />
        </section>

        <div className="hidden-about__divider" aria-hidden="true" />

        {/* ── All About Sub-Pages ── */}
        <section className="hidden-about__subpages" aria-labelledby="hidden-subpages-title">
          <div className="hidden-about__subpages-header">
            <h2 id="hidden-subpages-title" className="hidden-about__subpages-title">
              Every Chapter
            </h2>
            <p className="hidden-about__subpages-subtitle">
              {subpages.length + ' pages. One life. Tap any card to dive deeper.'}
            </p>
          </div>

          <div className="hidden-about__subpages-grid">
            {subpages.map(function (page) {
              var Icon = getIcon(page.icon);
              var cardClass = 'hidden-about__card hidden-about__card--' + page.accent;
              return (
                <Link
                  key={page.id}
                  to={page.href}
                  className={cardClass}
                >
                  <div className="hidden-about__card-dot">
                    <Icon className="hidden-about__card-dot-icon" aria-hidden="true" />
                  </div>
                  <div className="hidden-about__card-body">
                    <span className="hidden-about__card-label">{page.label}</span>
                    <span className="hidden-about__card-tagline">{page.tagline}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>

    </main>
  );
}
