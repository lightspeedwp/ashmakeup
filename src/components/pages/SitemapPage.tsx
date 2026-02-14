/**
 * @fileoverview Sitemap page — visual site index with every link, category, tag,
 * and post organised by content type with a rainbow decoration
 *
 * Sections:
 * 1. Pages — all main site pages
 * 2. Portfolio Categories — with descriptions
 * 3. Blog Categories — with descriptions and post counts
 * 4. Blog Posts — all posts with date and category
 * 5. Tags — all tags with short descriptions
 * 6. Legal — terms, privacy
 *
 * @component SitemapPage
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React from "react";
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
} from "lucide-react";
import { sitemapContent, tagDescriptors } from "../../data/mock/ui/sitemap";
import { navigationItems } from "../../data/mock/ui/navigation";
import { formatDate } from "../../utils/formatDate";
import { blogCategories } from "../../data/mock/blog/categories";
import { blogPosts } from "../../data/mock/blog/posts";
import { PORTFOLIO_CATEGORIES } from "../../utils/portfolioService";
import "@/styles/blocks/sitemap-page.css";

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
  blog: BookOpen,
  contact: Mail,
};

export function SitemapPage() {
  const navigate = useNavigate();

  const go = (path: string) => {
    navigate(path);
  };

  /** Portfolio categories excluding "All Work" */
  const portfolioCategories = PORTFOLIO_CATEGORIES.filter(
    (cat) => cat.id !== "all"
  );

  /** Sort blog posts newest first */
  const sortedPosts = [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <div className="sitemap">
      {/* Rainbow bar */}
      <div className="sitemap__rainbow" aria-hidden="true" />
      <div className="sitemap__rainbow-glow" aria-hidden="true" />

      <main id="main-content" tabIndex={-1}>
        {/* Header */}
        <header className="sitemap__header">
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
                    <span className="sitemap__link-title">{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
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
                onClick={() => go(`/portfolio/${cat.slug}`)}
              >
                <div className="sitemap__link-content">
                  <span className="sitemap__link-title">{cat.name}</span>
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
            {blogCategories.map((cat) => (
              <button
                key={cat.id}
                className="sitemap__link"
                onClick={() => go(`/blog?category=${cat.slug}`)}
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
                    {cat.count != null && (
                      <span className="sitemap__link-meta">
                        {" "}
                        ({cat.count})
                      </span>
                    )}
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
            {tagDescriptors.map((tag, idx) => (
              <button
                key={tag.slug}
                className="sitemap__link"
                onClick={() =>
                  go(`/blog?tag=${encodeURIComponent(tag.name)}`)
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
                  <span className="sitemap__link-title">{tag.name}</span>
                  <span className="sitemap__link-desc">
                    {tag.description}
                  </span>
                </div>
              </button>
            ))}
          </div>
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
            <li>
              <button
                className="sitemap__link"
                onClick={() => go("/terms")}
              >
                <FileText
                  className="sitemap__link-icon"
                  aria-hidden="true"
                />
                <span className="sitemap__link-title">
                  Terms &amp; Conditions
                </span>
              </button>
            </li>
            <li>
              <button
                className="sitemap__link"
                onClick={() => go("/privacy")}
              >
                <FileText
                  className="sitemap__link-icon"
                  aria-hidden="true"
                />
                <span className="sitemap__link-title">Privacy Policy</span>
              </button>
            </li>
            <li>
              <button
                className="sitemap__link"
                onClick={() => go("/sitemap")}
              >
                <Layers
                  className="sitemap__link-icon"
                  aria-hidden="true"
                />
                <span className="sitemap__link-title">Sitemap</span>
              </button>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}