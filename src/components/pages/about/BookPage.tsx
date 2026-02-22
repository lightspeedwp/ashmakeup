/**
 * @fileoverview Book page — "This one time on acid…"
 *
 * Features a neon pink/yellow book cover visualisation,
 * chapter previews, and the story behind the book.
 *
 * @component BookPage
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { useNavigate } from '../../../lib/router';
import { BookOpen } from 'lucide-react';
import { bookPageData } from '../../../data/mock/pages/about-subpages';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { useReducedMotion } from '../../../hooks/useReducedMotion';
import '../../../styles/blocks/about-subpage.css';
import '../../../styles/blocks/button.css';

export function BookPage() {
  const navigate = useNavigate();
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    setSEO(pageSEO.book);
  }, []);

  const { hero, breadcrumbs, sections, book } = bookPageData;

  return (
    <main
      id="main-content"
      role="main"
      tabIndex={-1}
      className="about-subpage about-subpage--book bg-atomic-noise"
    >
      {/* ── Hero ── */}
      <header className="about-subpage__hero">
        <div className="about-subpage__hero-content">
          <Breadcrumbs items={breadcrumbs} centered />

          <span className="about-subpage__hero-badge">
            {hero.badge}
          </span>

          <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
            {hero.title}
          </h1>

          <p className="about-subpage__hero-desc text-body-p">
            {hero.description}
          </p>
        </div>
      </header>

      {/* ── Book Cover Visualisation ── */}
      <div className="about-subpage__body">
        <div className="book-cover" aria-label="Book cover preview">
          <span className="book-cover__status">{book.status}</span>
          <h2 className="book-cover__title">{book.title}</h2>
          <p className="book-cover__subtitle">{book.subtitle}</p>
          <span className="book-cover__author">{book.author}</span>
        </div>

        {/* ── Blurb ── */}
        <section className="about-subpage__section">
          {book.blurb.map((line, i) => (
            <p key={`blurb-${i}`} className="about-subpage__section-text">
              {line}
            </p>
          ))}
        </section>

        {/* ── Body Sections ── */}
        {sections.map((section) => (
          <section key={section.id} className="about-subpage__section">
            <h2 className="about-subpage__section-title">{section.title}</h2>
            {section.paragraphs.map((p, i) => (
              <p key={`${section.id}-p-${i}`} className="about-subpage__section-text">
                {p}
              </p>
            ))}
          </section>
        ))}
      </div>

      {/* ── Chapter Previews ── */}
      <div className="about-subpage__chapters">
        <h2 className="about-subpage__chapters-title">{book.chaptersHeading}</h2>
        {book.chapters.map((ch) => (
          <article key={ch.id} className="about-subpage__chapter">
            <div className="about-subpage__chapter-number">{ch.number}</div>
            <div className="about-subpage__chapter-body">
              <h3 className="about-subpage__chapter-title">{ch.title}</h3>
              <p className="about-subpage__chapter-teaser">{ch.teaser}</p>
            </div>
          </article>
        ))}
      </div>

      {/* ── Read Sample Chapters ── */}
      <div className="about-subpage__body">
        <section className="about-subpage__section">
          <h2 className="about-subpage__section-title">{book.sampleHeading}</h2>
          <p className="about-subpage__section-text">
            {book.sampleDescription}
          </p>
          <button
            type="button"
            className="btn btn--neon-primary btn--sm"
            onClick={() => {
              navigate('/ebook');
              window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
            }}
            aria-label="Read sample chapters from the eBook"
          >
            <BookOpen className="btn__icon" aria-hidden="true" />
            {book.sampleCta}
          </button>
        </section>
      </div>
    </main>
  );
}