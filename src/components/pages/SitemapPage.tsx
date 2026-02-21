/**
 * @fileoverview Sitemap page — visual site index with every link, category, tag,
 * and post organised by content type with a rainbow decoration
 *
 * Sections:
 * 1. Pages — all main site pages
 * 2. Portfolio Categories — with descriptions
 * 3. Blog Categories — with descriptions and post counts
 * 4. Blog Posts — all posts with date and category
 * 5. Podcasts — all episodes with date and duration
 * 6. Videos — all videos with date and duration
 * 7. Tags — all tags with short descriptions
 * 8. Developer Tools — all 23 dev-tool sub-pages
 * 9. Legal — terms, privacy
 *
 * @component SitemapPage
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 — Full 23-tool developer tools section, all pages listed
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import {
  Home,
  User,
  Image,
  Play,
  BookOpen,
  Mail,
  Layers,
  FolderOpen,
  Tag,
  FileText,
  Scale,
  Newspaper,
  Palette,
  Mic,
  HelpCircle,
  MessageSquare,
  Sparkles,
  Wrench,
  Type,
  Ruler,
  Cloudy,
  Circle,
  MousePointerClick,
  LayoutGrid,
  Zap,
  Shield,
  Gauge,
  SwatchBook,
  Bookmark,
  FileCode,
  FlaskConical,
  Activity,
  Rocket,
  BarChart3,
  Component,
  Scissors,
  SplitSquareHorizontal,
  TestTube,
  Search,
  Sticker,
  MapPin,
  Book,
  UserCircle,
  Paintbrush,
  Diamond,
  Clock,
  Plane,
  Calendar,
  Headphones,
  Music,
  BookOpenCheck,
  Bike,
  Brain,
  Waves,
  Briefcase,
  GraduationCap,
  Heart,
  Compass,
  Code,
  Building2,
} from "lucide-react";
import { sitemapContent, tagDescriptors, pageTaglines, devToolTaglines, legalTaglines, sitemapExtraPages, sitemapLegalPages, sitemapDevToolsHub } from "../../data/mock/ui/sitemap";
import { devToolsPageUI } from "../../data/mock/ui/dev-tools";
import { navigationItems } from "../../data/mock/ui/navigation";
import { formatDate } from "../../utils/formatDate";
import { blogCategories } from "../../data/mock/blog/categories";
import { blogPosts } from "../../data/mock/blog/posts";
import { podcastEpisodes } from "../../data/mock/podcasts/episodes";
import { PORTFOLIO_CATEGORIES } from "../../utils/portfolioService";
import { portfolioTagData } from "../../data/mock/portfolio/tags";
import { videos, videoCategories, videoTags } from "../../data/mock/videos";
import { podcastCategories } from "../../data/mock/podcasts/categories";
import { podcastTags } from "../../data/mock/podcasts/tags";
import { allEvents } from "../../data/mock/events";
import { eventCategories, eventTags } from "../../data/mock/events/categories";
import { hiddenAboutData } from "../../data/mock/pages/hidden-about";
import {
  getBlogCategoryCount,
  getBlogTagCount,
  getPortfolioCategoryCount,
  getPortfolioTagCount,
  getVideoCategoryCount,
  getVideoTagCount,
  getPodcastCategoryCount,
  getPodcastTagCount,
  getEventCategoryCount,
  getEventTagCount,
} from "../../utils/contentCounts";
import "@/styles/blocks/sitemap-page.css";

import { setSEO } from "../../utils/seo";
import { pageSEO } from "../../data/mock/seo";
import { Breadcrumbs } from "../ui/Breadcrumbs";

/** Neon colours cycled across tag dots for visual variety */
const NEON_DOT_COLORS = [
  "var(--wp--preset--color--neon-pink)",
  "var(--wp--preset--color--neon-blue)",
  "var(--wp--preset--color--neon-green)",
  "var(--wp--preset--color--neon-orange)",
  "var(--wp--preset--color--neon-purple)",
  "var(--wp--preset--color--neon-cyan)",
  "var(--wp--preset--color--neon-yellow)",
  "var(--wp--preset--color--neon-red)",
];

/** Map page ids to Lucide icons */
const PAGE_ICONS: Record<string, React.ElementType> = {
  home: Home,
  about: User,
  portfolio: Image,
  videos: Play,
  events: Calendar,
  blog: BookOpen,
  contact: Mail,
};

const ABOUT_ICONS: Record<string, React.ElementType> = {
  Compass,
  User,
  Building2,
  Paintbrush,
  Book,
  Sparkles,
  Clock,
  Plane,
  Mic,
  BookOpen,
  Zap,
  Bike,
  Waves,
  Music,
  Code,
  GraduationCap,
  Heart,
  Activity,
};

/** Map icon string names (from mock data) to Lucide components */
const ICON_MAP: Record<string, React.ElementType> = {
  Home, User, Image, Play, BookOpen, Mail, Layers, FolderOpen, Tag, FileText,
  Scale, Newspaper, Palette, Mic, HelpCircle, MessageSquare, Sparkles, Wrench,
  Type, Ruler, Cloudy, Circle, MousePointerClick, LayoutGrid, Zap, Shield,
  Gauge, SwatchBook, Bookmark, FileCode, FlaskConical, Activity, Rocket,
  BarChart3, Component, Scissors, SplitSquareHorizontal, TestTube, Search,
  Sticker, MapPin, Book, UserCircle, Paintbrush, Diamond, Clock, Plane,
  Calendar, Headphones, Music, BookOpenCheck, Bike, Brain, Waves, Briefcase,
  GraduationCap, Heart, Compass, Code, Building2,
};

export function SitemapPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setSEO(pageSEO.sitemap);
  }, []);

  const go = (path: string) => {
    navigate(path);
  };

  /** Portfolio categories excluding "All Work" and empty categories */
  const portfolioCategories = PORTFOLIO_CATEGORIES.filter(
    (cat) => cat.id !== "all" && getPortfolioCategoryCount(cat.id) > 0
  );

  /** Sort blog posts newest first */
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="sitemap bg-atomic-noise">
      {/* Rainbow bar */}
      <div className="sitemap__rainbow" aria-hidden="true" />
      <div className="sitemap__rainbow-glow" aria-hidden="true" />

      <main id="main-content" tabIndex={-1}>
        {/* Header */}
        <header className="sitemap__header">
          <Breadcrumbs items={sitemapContent.breadcrumbs} centered />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {sitemapContent.title}
          </h1>
          <p className="text-body-p sitemap__subtitle">
            {sitemapContent.subtitle}
          </p>
        </header>

        {/* ──────────── 1. Pages ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-pages">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--pink" />
            <Layers
              className="sitemap__section-icon"
              aria-hidden="true"
            />
            <h2 className="text-section-h2" id="sitemap-pages">
              {sitemapContent.sections.pages}
            </h2>
          </div>
          <ul className="sitemap__list">
            {navigationItems.map((item) => {
              const Icon = PAGE_ICONS[item.id] || FileText;
              const tagline = pageTaglines[item.id];
              return (
                <li key={item.id}>
                  <button
                    className="sitemap__link"
                    onClick={() => go(item.path)}
                  >
                    <Icon
                      className="sitemap__link-icon"
                      aria-hidden="true"
                    />
                    <div className="sitemap__link-content">
                      <span className="sitemap__link-title">{item.label}</span>
                      {tagline && (
                        <span className="sitemap__link-desc">{tagline}</span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
            {sitemapExtraPages.map((page) => {
              const Icon = ICON_MAP[page.icon] || FileText;
              const tagline = pageTaglines[page.id];
              return (
                <li key={page.id}>
                  <button
                    className="sitemap__link"
                    onClick={() => go(page.path)}
                  >
                    <Icon
                      className="sitemap__link-icon"
                      aria-hidden="true"
                    />
                    <div className="sitemap__link-content">
                      <span className="sitemap__link-title">{page.label}</span>
                      {tagline && (
                        <span className="sitemap__link-desc">{tagline}</span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ── About Sub-Pages ── */}
          <h3 className="sitemap__subsection-title">{sitemapContent.subsections.aboutAsh}</h3>
          <div className="sitemap__grid">
            {hiddenAboutData.subpages.map((page) => {
              const Icon = ABOUT_ICONS[page.icon] || Sparkles;
              return (
                <button
                  key={page.href}
                  className="sitemap__link"
                  onClick={() => go(page.href)}
                >
                  <Icon
                    className="sitemap__link-icon"
                    aria-hidden="true"
                  />
                  <div className="sitemap__link-content">
                    <span className="sitemap__link-title">{page.label}</span>
                    <span className="sitemap__link-desc">{page.tagline}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 2. Portfolio Categories ──────────── */}
        <section
          className="sitemap__section"
          aria-labelledby="sitemap-portfolio"
        >
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--blue" />
            <Image
              className="sitemap__section-icon"
              aria-hidden="true"
            />
            <h2 className="text-section-h2" id="sitemap-portfolio">
              {sitemapContent.sections.portfolioCategories}
            </h2>
          </div>
          <div className="sitemap__grid">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.id}
                className="sitemap__link"
                onClick={() => go(`/portfolio/category/${cat.slug}`)}
              >
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">
                    {cat.name}
                    <span className="sitemap__link-meta">
                      {" "}({getPortfolioCategoryCount(cat.id)})
                    </span>
                  </span>
                  {cat.description && (
                    <span className="sitemap__link-desc">
                      {cat.description}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Portfolio Tags */}
          {portfolioTagData.length > 0 && (() => {
            const visibleTags = portfolioTagData.filter(
              ptag => getPortfolioTagCount(ptag.name) > 0
            );
            return visibleTags.length > 0 ? (
              <div className="sitemap__grid sitemap__grid--tags">
                {visibleTags.map((ptag, idx) => (
                  <button
                    key={ptag.id}
                    className="sitemap__link"
                    onClick={() => go(`/portfolio/tag/${ptag.slug}`)}
                  >
                    <div
                      className="sitemap__tag-dot"
                      style={{
                        backgroundColor:
                          NEON_DOT_COLORS[idx % NEON_DOT_COLORS.length],
                      }}
                      aria-hidden="true"
                    />
                    <div className="sitemap__link-content">
                      <span className="sitemap__link-title">
                        {ptag.name}
                        <span className="sitemap__link-meta">
                          {" "}({getPortfolioTagCount(ptag.name)})
                        </span>
                      </span>
                      {ptag.description && (
                        <span className="sitemap__link-desc">
                          {ptag.description}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : null;
          })()}
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 3. Blog Categories ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-blog-cats">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--green" />
            <FolderOpen
              className="sitemap__section-icon"
              aria-hidden="true"
            />
            <h2 className="text-section-h2" id="sitemap-blog-cats">
              {sitemapContent.sections.blogCategories}
            </h2>
          </div>
          <div className="sitemap__grid">
            {blogCategories.filter(cat => getBlogCategoryCount(cat.name) > 0).map((cat) => (
              <button
                key={cat.id}
                className="sitemap__link"
                onClick={() => go(`/blog/category/${cat.slug}`)}
              >
                {cat.color && (
                  <div
                    className="sitemap__cat-swatch"
                    style={{ backgroundColor: cat.color }}
                    aria-hidden="true"
                  />
                )}
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">
                    {cat.name}
                    <span className="sitemap__link-meta">
                      {" "}({getBlogCategoryCount(cat.name)})
                    </span>
                  </span>
                  {cat.description && (
                    <span className="sitemap__link-desc">
                      {cat.description}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 4. Blog Posts ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-posts">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--orange" />
            <Newspaper
              className="sitemap__section-icon"
              aria-hidden="true"
            />
            <h2 className="text-section-h2" id="sitemap-posts">
              {sitemapContent.sections.blogPosts}
            </h2>
          </div>
          <div className="sitemap__grid">
            {sortedPosts.map((post) => (
              <button
                key={post.id}
                className="sitemap__link"
                onClick={() => go(`/blog/${post.slug}`)}
              >
                <FileText
                  className="sitemap__link-icon"
                  aria-hidden="true"
                />
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">{post.title}</span>
                  <span className="sitemap__link-meta">
                    {formatDate(post.publishedAt)}
                    {post.category ? ` \u00B7 ${post.category}` : ""}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 4b. Podcasts ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-podcasts">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--pink" />
            <Mic
              className="sitemap__section-icon"
              aria-hidden="true"
            />
            <h2 className="text-section-h2" id="sitemap-podcasts">
              {sitemapContent.sections.podcasts}
            </h2>
          </div>

          {/* Podcast Categories */}
          <div className="sitemap__grid">
            {podcastCategories.filter(cat => getPodcastCategoryCount(cat.name) > 0).map((cat) => (
              <button
                key={cat.id}
                className="sitemap__link"
                onClick={() => go(`/podcasts/category/${cat.slug}`)}
              >
                {cat.color && (
                  <div
                    className="sitemap__cat-swatch"
                    style={{ backgroundColor: cat.color }}
                    aria-hidden="true"
                  />
                )}
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">
                    {cat.name}
                    <span className="sitemap__link-meta">
                      {" "}({getPodcastCategoryCount(cat.name)})
                    </span>
                  </span>
                  {cat.description && (
                    <span className="sitemap__link-desc">
                      {cat.description}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Podcast Episodes */}
          <div className="sitemap__grid">
            {podcastEpisodes.map((ep) => (
              <button
                key={ep.id}
                className="sitemap__link"
                onClick={() => go(`/podcast/${ep.slug}`)}
              >
                <Mic
                  className="sitemap__link-icon"
                  aria-hidden="true"
                />
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">
                    EP {ep.episodeNumber}: {ep.title}
                  </span>
                  <span className="sitemap__link-meta">
                    {formatDate(ep.publishedAt)}
                    {` \u00B7 ${ep.duration}`}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Podcast Tags */}
          {podcastTags.length > 0 && (() => {
            const visiblePodTags = podcastTags.filter(
              ptag => getPodcastTagCount(ptag.name) > 0
            );
            return visiblePodTags.length > 0 ? (
              <div className="sitemap__grid sitemap__grid--tags">
                {visiblePodTags.map((ptag, idx) => (
                  <button
                    key={ptag.id}
                    className="sitemap__link"
                    onClick={() => go(`/podcasts/tag/${ptag.slug}`)}
                  >
                    <div
                      className="sitemap__tag-dot"
                      style={{
                        backgroundColor:
                          NEON_DOT_COLORS[idx % NEON_DOT_COLORS.length],
                      }}
                      aria-hidden="true"
                    />
                    <div className="sitemap__link-content">
                      <span className="sitemap__link-title">
                        {ptag.name}
                        <span className="sitemap__link-meta">
                          {" "}({getPodcastTagCount(ptag.name)})
                        </span>
                      </span>
                      {ptag.description && (
                        <span className="sitemap__link-desc">
                          {ptag.description}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : null;
          })()}
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 4c. Videos ──────────── */}
        {videos.length > 0 && (
          <section className="sitemap__section" aria-labelledby="sitemap-videos">
            <div className="sitemap__section-header">
              <div className="sitemap__section-accent sitemap__section-accent--cyan" />
              <Play
                className="sitemap__section-icon"
                aria-hidden="true"
              />
              <h2 className="text-section-h2" id="sitemap-videos">
                {sitemapContent.sections.videos}
              </h2>
            </div>

            {/* Video Categories */}
            <div className="sitemap__grid">
              {videoCategories.filter(cat => getVideoCategoryCount(cat.name) > 0).map((cat) => (
                <button
                  key={cat.id}
                  className="sitemap__link"
                  onClick={() => go(`/videos/category/${cat.slug}`)}
                >
                  <div className="sitemap__link-content">
                    <span className="sitemap__link-title">
                      {cat.name}
                      <span className="sitemap__link-meta">
                        {" "}({getVideoCategoryCount(cat.name)})
                      </span>
                    </span>
                    {cat.description && (
                      <span className="sitemap__link-desc">
                        {cat.description}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Video Entries */}
            <div className="sitemap__grid">
              {videos.map((vid) => (
                <button
                  key={vid.id}
                  className="sitemap__link"
                  onClick={() => go(`/video/${vid.slug}`)}
                >
                  <Play
                    className="sitemap__link-icon"
                    aria-hidden="true"
                  />
                  <div className="sitemap__link-content">
                    <span className="sitemap__link-title">{vid.title}</span>
                    <span className="sitemap__link-meta">
                      {formatDate(vid.publishedAt)}
                      {` \u00B7 ${vid.duration}`}
                      {` \u00B7 ${vid.category}`}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Video Tags */}
            {videoTags.length > 0 && (() => {
              const visibleVidTags = videoTags.filter(
                vtag => getVideoTagCount(vtag.name) > 0
              );
              return visibleVidTags.length > 0 ? (
                <div className="sitemap__grid sitemap__grid--tags">
                  {visibleVidTags.map((vtag, idx) => (
                    <button
                      key={vtag.id}
                      className="sitemap__link"
                      onClick={() => go(`/videos/tag/${vtag.slug}`)}
                    >
                      <div
                        className="sitemap__tag-dot"
                        style={{
                          backgroundColor:
                            NEON_DOT_COLORS[idx % NEON_DOT_COLORS.length],
                        }}
                        aria-hidden="true"
                      />
                      <div className="sitemap__link-content">
                        <span className="sitemap__link-title">
                          {vtag.name}
                          <span className="sitemap__link-meta">
                            {" "}({getVideoTagCount(vtag.name)})
                          </span>
                        </span>
                        {vtag.description && (
                          <span className="sitemap__link-desc">
                            {vtag.description}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              ) : null;
            })()}
          </section>
        )}

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 4d. Events ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-events">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--green" />
            <Calendar
              className="sitemap__section-icon"
              aria-hidden="true"
            />
            <h2 className="text-section-h2" id="sitemap-events">
              {sitemapContent.sections.events}
            </h2>
          </div>

          {/* Event Categories */}
          <div className="sitemap__grid">
            {eventCategories.filter(cat => getEventCategoryCount(cat.slug) > 0).map((cat) => (
              <button
                key={cat.id}
                className="sitemap__link"
                onClick={() => go(`/events/category/${cat.slug}`)}
              >
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">
                    {cat.name}
                    <span className="sitemap__link-meta">
                      {" "}({getEventCategoryCount(cat.slug)})
                    </span>
                  </span>
                  {cat.description && (
                    <span className="sitemap__link-desc">
                      {cat.description}
                    </span>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Event Entries */}
          {allEvents.length > 0 && (
            <div className="sitemap__grid">
              {allEvents.map((event) => (
                <button
                  key={event.slug}
                  className="sitemap__link"
                  onClick={() => go(`/events/${event.slug}`)}
                >
                  <Music
                    className="sitemap__link-icon"
                    aria-hidden="true"
                  />
                  <div className="sitemap__link-content">
                    <span className="sitemap__link-title">{event.name}</span>
                    <span className="sitemap__link-meta">
                      {event.editions.length} edition{event.editions.length !== 1 ? 's' : ''}
                      {event.location?.region ? ` \u00B7 ${event.location.region}, ${event.location.country}` : ''}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* Event Tags */}
          {eventTags.length > 0 && (() => {
            const visibleEvTags = eventTags.filter(
              etag => getEventTagCount(etag.name) > 0
            );
            return visibleEvTags.length > 0 ? (
              <div className="sitemap__grid sitemap__grid--tags">
                {visibleEvTags.map((etag, idx) => (
                  <button
                    key={etag.id}
                    className="sitemap__link"
                    onClick={() => go(`/events/tag/${etag.slug}`)}
                  >
                    <div
                      className="sitemap__tag-dot"
                      style={{
                        backgroundColor:
                          NEON_DOT_COLORS[idx % NEON_DOT_COLORS.length],
                      }}
                      aria-hidden="true"
                    />
                    <div className="sitemap__link-content">
                      <span className="sitemap__link-title">
                        {etag.name}
                        <span className="sitemap__link-meta">
                          {" "}({getEventTagCount(etag.name)})
                        </span>
                      </span>
                      {etag.description && (
                        <span className="sitemap__link-desc">
                          {etag.description}
                        </span>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            ) : null;
          })()}
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 5. Tags ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-tags">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--purple" />
            <Tag className="sitemap__section-icon" aria-hidden="true" />
            <h2 className="text-section-h2" id="sitemap-tags">
              {sitemapContent.sections.tags}
            </h2>
          </div>
          <div className="sitemap__grid sitemap__grid--tags">
            {tagDescriptors.filter(tag => getBlogTagCount(tag.name) > 0).map((tag, idx) => (
              <button
                key={tag.slug}
                className="sitemap__link"
                onClick={() =>
                  go(`/blog/tag/${tag.slug}`)
                }
              >
                <div
                  className="sitemap__tag-dot"
                  style={{
                    backgroundColor:
                      NEON_DOT_COLORS[idx % NEON_DOT_COLORS.length],
                  }}
                  aria-hidden="true"
                />
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">
                    {tag.name}
                    <span className="sitemap__link-meta">
                      {" "}({getBlogTagCount(tag.name)})
                    </span>
                  </span>
                  <span className="sitemap__link-desc">
                    {tag.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 5b. Developer Tools ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-devtools">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--orange" />
            <Wrench
              className="sitemap__section-icon"
              aria-hidden="true"
            />
            <h2 className="text-section-h2" id="sitemap-devtools">
              {sitemapContent.sections.devTools}
            </h2>
          </div>
          <ul className="sitemap__list">
            {[sitemapDevToolsHub, ...devToolsPageUI.tools.map((t) => ({
              id: t.id,
              label: t.title,
              path: t.href,
              icon: t.icon,
            }))].map((tool) => {
              const Icon = ICON_MAP[tool.icon] || Wrench;
              const tagline = devToolTaglines[tool.id === 'hub' ? 'hub' : tool.id];
              return (
                <li key={tool.path}>
                  <button
                    className="sitemap__link"
                    onClick={() => go(tool.path)}
                  >
                    <Icon
                      className="sitemap__link-icon"
                      aria-hidden="true"
                    />
                    <div className="sitemap__link-content">
                      <span className="sitemap__link-title">{tool.label}</span>
                      {tagline && (
                        <span className="sitemap__link-desc">{tagline}</span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>

        <div className="sitemap__divider" aria-hidden="true" />

        {/* ──────────── 6. Legal ──────────── */}
        <section className="sitemap__section" aria-labelledby="sitemap-legal">
          <div className="sitemap__section-header">
            <div className="sitemap__section-accent sitemap__section-accent--cyan" />
            <Scale className="sitemap__section-icon" aria-hidden="true" />
            <h2 className="text-section-h2" id="sitemap-legal">
              {sitemapContent.sections.legal}
            </h2>
          </div>
          <ul className="sitemap__list">
            {sitemapLegalPages.map((page) => {
              const Icon = ICON_MAP[page.icon] || FileText;
              const tagline = legalTaglines[page.id];
              return (
                <li key={page.id}>
                  <button
                    className="sitemap__link"
                    onClick={() => go(page.path)}
                  >
                    <Icon
                      className="sitemap__link-icon"
                      aria-hidden="true"
                    />
                    <div className="sitemap__link-content">
                      <span className="sitemap__link-title">{page.label}</span>
                      {tagline && (
                        <span className="sitemap__link-desc">{tagline}</span>
                      )}
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
      </main>
    </div>
  );
}