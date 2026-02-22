/**
 * @fileoverview Unified responsive eBook reader.
 *
 * Breakpoints:
 *   - Mobile compact (320-419px): single-page, 14px body, tight padding
 *   - Mobile (420-767px): single-page, 16px body, moderate padding
 *   - Tablet portrait (768-1023px): single-page, 17.6px body, line-length constrained
 *   - Tablet landscape (1024-1279px): two-page spread, 14px body (narrow pages)
 *   - Desktop (1280-1439px): two-page spread, 15px body
 *   - Large desktop (1440px+): two-page spread, 17px body, max-width reached
 *
 * Max-width: 1440px. Typography custom properties overridden per breakpoint.
 * Touch swipe, keyboard arrows, and button navigation all supported.
 *
 * @component EbookPage
 * @version 4.2.0 - Full screen support, removed back button
 */

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { useNavigate } from '../../../lib/router';
import { ChevronLeft, ChevronRight, List, X, Maximize, Minimize } from 'lucide-react';
import { bookPages } from '../../../data/mock/pages/ebook-pages';
import type { BookPage } from '../../../data/mock/pages/ebook-pages';
import { ebookUI } from '../../../data/mock/ui/ebook';
import { ebookBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/ebook.css';
import '../../../styles/blocks/button.css';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CONSTANTS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

const SPREAD_BREAKPOINT = '(min-width: 1024px)';
const SWIPE_THRESHOLD = 40;
const SWIPE_ANGLE_MAX = Math.PI / 4;
const STORAGE_KEY = 'ash-ebook-position';

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   CHAPTER INDEX (for jump drawer)
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

interface ChapterEntry {
  pageIndex: number;
  label: string;
  indent: boolean;
}

function buildChapterIndex(pages: BookPage[]): ChapterEntry[] {
  const entries: ChapterEntry[] = [];
  pages.forEach((page, idx) => {
    switch (page.type) {
      case 'cover':
        entries.push({ pageIndex: idx, label: ebookUI.chapterIndex.cover, indent: false });
        break;
      case 'toc':
        if (page.title === 'Contents') {
          entries.push({ pageIndex: idx, label: ebookUI.chapterIndex.contents, indent: false });
        }
        break;
      case 'foreword':
        entries.push({ pageIndex: idx, label: page.title || ebookUI.chapterIndex.foreword, indent: false });
        break;
      case 'part-title':
        entries.push({
          pageIndex: idx,
          label: `${ebookUI.labels.part} ${ebookUI.partNumerals[(page.part ?? 1) - 1] ?? ebookUI.partNumerals[0]} — ${page.title}`,
          indent: false,
        });
        break;
      case 'chapter-start':
        entries.push({
          pageIndex: idx,
          label: `${page.chapter}. ${page.title}`,
          indent: true,
        });
        break;
      case 'appendix-title':
        entries.push({ pageIndex: idx, label: `${ebookUI.labels.appendix} — ${page.title}`, indent: false });
        break;
      case 'afterword':
        entries.push({ pageIndex: idx, label: page.title || ebookUI.chapterIndex.afterword, indent: false });
        break;
      case 'about-author':
        entries.push({ pageIndex: idx, label: page.title || ebookUI.chapterIndex.aboutAuthor, indent: false });
        break;
      case 'back-cover':
        entries.push({ pageIndex: idx, label: ebookUI.chapterIndex.backCover, indent: false });
        break;
    }
  });
  return entries;
}

const chapterIndex = buildChapterIndex(bookPages);

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   LOCALSTORAGE HELPERS
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function readSavedPage(maxIndex: number): number {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw === null) return 0;
    const parsed = parseInt(raw, 10);
    if (Number.isNaN(parsed) || parsed < 0 || parsed > maxIndex) return 0;
    return parsed;
  } catch {
    return 0;
  }
}

function savePage(pageIndex: number): void {
  try {
    localStorage.setItem(STORAGE_KEY, String(pageIndex));
  } catch {
    /* storage full or blocked — silent fail */
  }
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   PAGE CONTENT RENDERER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function PageContent({ page }: { page: BookPage }) {
  switch (page.type) {
    case 'cover':
      return (
        <div className="ebook-reader__page-inner">
          <span className="ebook-page__status">{ebookUI.cover.status}</span>
          <h2 className="ebook-page__title">{page.title}</h2>
          <p className="ebook-page__subtitle">{page.subtitle}</p>
          <span className="ebook-page__author">{ebookUI.cover.author}</span>
        </div>
      );

    case 'back-cover':
      return (
        <div className="ebook-reader__page-inner">
          <h2 className="ebook-page__title">{page.title}</h2>
          {page.paragraphs?.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__blurb">{p}</p>
          ))}
        </div>
      );

    case 'inside-front':
      return (
        <div className="ebook-reader__page-inner">
          {page.paragraphs?.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__meta-line">{p}</p>
          ))}
        </div>
      );

    case 'title':
      return (
        <div className="ebook-reader__page-inner">
          <h2 className="ebook-page__title">{page.title}</h2>
          <p className="ebook-page__subtitle">{page.subtitle}</p>
          <span className="ebook-page__author">{page.paragraphs?.[0]}</span>
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'dedication':
      return (
        <div className="ebook-reader__page-inner">
          {page.paragraphs?.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__dedication-line">{p}</p>
          ))}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'epigraph':
      return (
        <div className="ebook-reader__page-inner">
          {page.paragraphs?.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__epigraph-line">{p}</p>
          ))}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'toc':
      return (
        <div className="ebook-reader__page-inner">
          <h2 className="ebook-page__toc-title">{page.title}</h2>
          <ol className="ebook-page__toc-list">
            {page.tocItems?.map((item, idx) =>
              item.partLabel ? (
                <li key={`part-${item.partLabel}-${idx}`} className="ebook-page__toc-part-label">
                  <span className="ebook-page__toc-part-numeral">{item.partLabel}</span>
                  <span>{item.title}</span>
                </li>
              ) : (
                <li key={`ch-${item.number}-${idx}`} className="ebook-page__toc-item">
                  <span className="ebook-page__toc-number">{item.number}</span>
                  <span>{item.title}</span>
                  <span className="ebook-page__toc-dots" aria-hidden="true" />
                </li>
              )
            )}
          </ol>
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'foreword':
    case 'afterword':
      return (
        <div className="ebook-reader__page-inner">
          <h2 className="ebook-page__section-title">{page.title}</h2>
          {page.paragraphs?.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__paragraph">{p}</p>
          ))}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'chapter-start':
      return (
        <div className="ebook-reader__page-inner">
          <span className="ebook-page__chapter-number">
            {ebookUI.labels.chapter} {page.chapter}
          </span>
          <h2 className="ebook-page__title">{page.title}</h2>
          <p className="ebook-page__subtitle">{page.subtitle}</p>
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'part-title':
      return (
        <div className="ebook-reader__page-inner">
          <span className="ebook-page__part-label">
            {ebookUI.labels.part} {ebookUI.partWords[(page.part ?? 1) - 1] ?? ebookUI.partWords[0]}
          </span>
          <h2 className="ebook-page__title">{page.title}</h2>
          {page.subtitle && (
            <p className="ebook-page__subtitle">{page.subtitle}</p>
          )}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'appendix-title':
      return (
        <div className="ebook-reader__page-inner">
          <span className="ebook-page__part-label">{ebookUI.labels.appendix}</span>
          <h2 className="ebook-page__title">{page.title}</h2>
          {page.subtitle && (
            <p className="ebook-page__subtitle">{page.subtitle}</p>
          )}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'chapter-content':
      return (
        <div className="ebook-reader__page-inner">
          {page.chapter != null && (
            <span className="ebook-page__chapter-heading">
              {ebookUI.labels.chapter} {page.chapter}
            </span>
          )}
          {page.paragraphs?.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__paragraph">{p}</p>
          ))}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'about-author':
      return (
        <div className="ebook-reader__page-inner">
          <h2 className="ebook-page__section-title">{page.title}</h2>
          {page.paragraphs?.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__paragraph">{p}</p>
          ))}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    default:
      return <div className="ebook-reader__page-inner" />;
  }
}

/** CSS class for page type */
function pageTypeClass(page: BookPage): string {
  return `ebook-page--${page.type}`;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   SPREAD COMPUTATION
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

interface Spread {
  left: BookPage | null;
  right: BookPage | null;
}

function buildSpreads(pages: BookPage[]): Spread[] {
  const spreads: Spread[] = [];
  spreads.push({ left: null, right: pages[0] });
  for (let i = 1; i < pages.length; i += 2) {
    spreads.push({
      left: pages[i] || null,
      right: pages[i + 1] || null,
    });
  }
  return spreads;
}

/** Map a single-page index to the spread index that contains it */
function pageToSpread(pageIndex: number): number {
  if (pageIndex <= 0) return 0;
  return Math.ceil(pageIndex / 2);
}

/** Map a spread index to the first single-page index in that spread */
function spreadToPage(spreadIndex: number): number {
  if (spreadIndex <= 0) return 0;
  return spreadIndex * 2 - 1;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   HOOK: useSpreadMode
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function useSpreadMode(): boolean {
  const [isSpread, setIsSpread] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(SPREAD_BREAKPOINT).matches;
  });

  useEffect(() => {
    const mql = window.matchMedia(SPREAD_BREAKPOINT);
    const handler = (e: MediaQueryListEvent) => setIsSpread(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  return isSpread;
}

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
   EBOOK PAGE COMPONENT
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

export function EbookPage() {
  const navigate = useNavigate();
  const isSpreadMode = useSpreadMode();
  const mainRef = useRef<HTMLElement>(null);

  const spreads = React.useMemo(() => buildSpreads(bookPages), []);
  const totalPages = bookPages.length;
  const totalSpreads = spreads.length;

  /* ── Full Screen ── */
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    const handleFullScreenChange = () => {
      // Only sync if the browser actually changed mode. 
      // This handles the user pressing ESC to exit native fullscreen.
      if (document.fullscreenElement !== null) {
         setIsFullScreen(true);
      } else {
         // If we are not in native fullscreen, we might still be in "visual" fullscreen
         // if the API failed. However, if the USER initiated the exit via ESC,
         // the browser exits native fullscreen, and we should reflect that.
         setIsFullScreen(false);
      }
    };
    
    // Also listen for ESC key to exit "visual" fullscreen if native didn't work
    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullScreen) {
         // If native fullscreen is active, the browser handles it and fires fullscreenchange.
         // If native fullscreen is NOT active (API failed), we need to handle it manually.
         if (!document.fullscreenElement) {
            setIsFullScreen(false);
         }
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    window.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isFullScreen]);

  const toggleFullScreen = useCallback(() => {
    if (!isFullScreen) {
      // Enter Full Screen
      // 1. Optimistically update UI to look like full screen immediately
      setIsFullScreen(true);

      // 2. Try native API (might fail in iframes/Figma)
      if (mainRef.current && mainRef.current.requestFullscreen) {
        mainRef.current.requestFullscreen().catch((err) => {
           // If denied, we silently stay in "visual" full screen mode (state remains true).
           // The UI will look correct (no header, full height), just constrained to the window.
           if (import.meta.env.DEV) {
             console.warn(`Native full-screen denied (${err.message}). Falling back to visual full-screen.`);
           }
        });
      }
    } else {
      // Exit Full Screen
      setIsFullScreen(false);
      
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => { /* ignore exit errors */ });
      }
    }
  }, [isFullScreen]);

  /* ── Primary state: single-page index (source of truth) ── */
  const [currentPage, setCurrentPage] = useState(() => readSavedPage(totalPages - 1));
  const [flipState, setFlipState] = useState<'idle' | 'forward' | 'backward'>('idle');
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  /* ── Chapter drawer state ── */
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* ── Touch refs ── */
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isSwiping = useRef(false);
  const readerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSEO(pageSEO.ebook);
  }, []);

  /* ── Persist reading position ── */
  useEffect(() => {
    savePage(currentPage);
  }, [currentPage]);

  /* ── Derived spread index ── */
  const currentSpread = pageToSpread(currentPage);

  /* ── Navigation ── */
  const canGoForwardSingle = currentPage < totalPages - 1;
  const canGoBackwardSingle = currentPage > 0;
  const canGoForwardSpread = currentSpread < totalSpreads - 1;
  const canGoBackwardSpread = currentSpread > 0;

  const goForward = useCallback(() => {
    if (isAnimating) return;
    if (isSpreadMode) {
      if (!canGoForwardSpread || flipState !== 'idle') return;
      setFlipState('forward');
    } else {
      if (!canGoForwardSingle) return;
      setIsAnimating(true);
      setSwipeOffset(-100);
      setTimeout(() => {
        setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 280);
    }
  }, [isSpreadMode, canGoForwardSpread, canGoForwardSingle, flipState, isAnimating, totalPages]);

  const goBackward = useCallback(() => {
    if (isAnimating) return;
    if (isSpreadMode) {
      if (!canGoBackwardSpread || flipState !== 'idle') return;
      setFlipState('backward');
    } else {
      if (!canGoBackwardSingle) return;
      setIsAnimating(true);
      setSwipeOffset(100);
      setTimeout(() => {
        setCurrentPage((p) => Math.max(p - 1, 0));
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 280);
    }
  }, [isSpreadMode, canGoBackwardSpread, canGoBackwardSingle, flipState, isAnimating]);

  const handleFlipEnd = useCallback(() => {
    if (flipState === 'forward') {
      const nextSpreadIdx = Math.min(currentSpread + 1, totalSpreads - 1);
      setCurrentPage(spreadToPage(nextSpreadIdx));
    } else if (flipState === 'backward') {
      const prevSpreadIdx = Math.max(currentSpread - 1, 0);
      setCurrentPage(spreadToPage(prevSpreadIdx));
    }
    setFlipState('idle');
  }, [flipState, currentSpread, totalSpreads]);

  /* ── Keyboard ── */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && drawerOpen) {
        e.preventDefault();
        setDrawerOpen(false);
        return;
      }
      if (drawerOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        goForward();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        goBackward();
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goForward, goBackward, drawerOpen]);

  /* ── Touch swipe (works in both modes) ── */
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    isSwiping.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;

    if (!isSwiping.current) {
      if (Math.abs(dx) > 10 && Math.abs(dx) > Math.abs(dy)) {
        isSwiping.current = true;
      } else if (Math.abs(dy) > 10) {
        touchStartX.current = null;
        return;
      }
    }

    if (isSwiping.current && !isSpreadMode && !isAnimating) {
      const percent = (dx / window.innerWidth) * 100;
      setSwipeOffset(Math.max(-50, Math.min(50, percent)));
    }
  }, [isSpreadMode, isAnimating]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    const dy = e.changedTouches[0].clientY - touchStartY.current;

    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dy) < Math.abs(dx) * Math.tan(SWIPE_ANGLE_MAX)) {
      if (dx < 0) {
        goForward();
      } else {
        goBackward();
      }
    } else {
      setSwipeOffset(0);
    }

    touchStartX.current = null;
    touchStartY.current = null;
    isSwiping.current = false;
  }, [goForward, goBackward]);

  /* ── Chapter jump ── */
  const jumpToPage = useCallback((pageIndex: number) => {
    setCurrentPage(Math.max(0, Math.min(pageIndex, totalPages - 1)));
    setFlipState('idle');
    setSwipeOffset(0);
    setIsAnimating(false);
    setDrawerOpen(false);
  }, [totalPages]);

  /** Find which chapter entry the current page is closest to (at or after) */
  const currentChapterIdx = React.useMemo(() => {
    let best = 0;
    for (let i = 0; i < chapterIndex.length; i++) {
      if (chapterIndex[i].pageIndex <= currentPage) best = i;
    }
    return best;
  }, [currentPage]);

  /* ── Spread data for desktop ── */
  const spread = spreads[currentSpread];
  const nextSpread = currentSpread < totalSpreads - 1 ? spreads[currentSpread + 1] : null;
  const prevSpread = currentSpread > 0 ? spreads[currentSpread - 1] : null;

  /* ── Progress ── */
  const progressSingle = currentPage / Math.max(totalPages - 1, 1);
  const progressSpread = currentSpread / Math.max(totalSpreads - 1, 1);
  const progress = isSpreadMode ? progressSpread : progressSingle;

  /* ── Display label ── */
  const pageLabel = isSpreadMode
    ? `${currentSpread + 1} / ${totalSpreads}`
    : `${currentPage + 1} / ${totalPages}`;

  /* ── Breadcrumbs ── */
  const breadcrumbs = ebookBreadcrumbs;

  /* ── Single-page neighbours for peek effect ── */
  const prevPage = currentPage > 0 ? bookPages[currentPage - 1] : null;
  const nextPage = currentPage < totalPages - 1 ? bookPages[currentPage + 1] : null;
  const activePage = bookPages[currentPage];

  return (
    <main
      ref={mainRef}
      id="main-content"
      role="main"
      tabIndex={-1}
      className="ebook-reader bg-atomic-noise"
      aria-label={ebookUI.readerAriaLabel}
    >
      {/* ── Slim Hero ── */}
      {!isFullScreen && (
        <header className="ebook-reader__hero">
          <div className="ebook-reader__hero-inner">
            <Breadcrumbs items={breadcrumbs} centered />
          </div>
        </header>
      )}

      {/* ── Fullscreen Close Button ── */}
      {isFullScreen && (
        <button
          type="button"
          className="ebook-reader__fullscreen-close"
          onClick={toggleFullScreen}
          aria-label="Exit full screen"
        >
          <X size={24} />
        </button>
      )}

      {/* ══════════════════════════════════════
         SINGLE-PAGE MODE (mobile + portrait tablet)
         ══════════════════════════════════════ */}
      {!isSpreadMode && (
        <div
          className="ebook-reader__single-wrapper"
          ref={readerRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label={`Page ${currentPage + 1} of ${totalPages}`}
          aria-live="polite"
        >
          <div
            className="ebook-reader__single-track"
            style={{
              transform: `translateX(${swipeOffset}%)`,
              transition: isAnimating ? 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)' : swipeOffset !== 0 ? 'none' : 'transform 200ms ease',
            }}
          >
            {/* Previous page (off-screen left) */}
            <div
              className={`ebook-reader__single-page ebook-reader__single-page--prev ${prevPage ? pageTypeClass(prevPage) : ''}`}
              aria-hidden="true"
            >
              {prevPage ? <PageContent page={prevPage} /> : <div className="ebook-reader__page-inner" />}
            </div>

            {/* Current page */}
            <div
              className={`ebook-reader__single-page ebook-reader__single-page--current ${pageTypeClass(activePage)}`}
            >
              <PageContent page={activePage} />
            </div>

            {/* Next page (off-screen right) */}
            <div
              className={`ebook-reader__single-page ebook-reader__single-page--next ${nextPage ? pageTypeClass(nextPage) : ''}`}
              aria-hidden="true"
            >
              {nextPage ? <PageContent page={nextPage} /> : <div className="ebook-reader__page-inner" />}
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════════
         SPREAD MODE (landscape tablet + desktop)
         ══════════════════════════════════════ */
      }
      {isSpreadMode && (
        <div className="ebook-reader__book-wrapper">
          <div
            className="ebook-reader__book"
            role="region"
            aria-label={`Book spread ${currentSpread + 1} of ${totalSpreads}`}
            aria-live="polite"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="ebook-reader__spine" aria-hidden="true" />

            {/* Left page */}
            <div
              className={`ebook-reader__page ebook-reader__page--left ${
                spread.left ? pageTypeClass(spread.left) : ''
              }`}
            >
              {spread.left ? (
                <PageContent page={spread.left} />
              ) : (
                <div className="ebook-reader__page-inner" />
              )}
            </div>

            {/* Right page */}
            <div
              className={`ebook-reader__page ebook-reader__page--right ${
                spread.right ? pageTypeClass(spread.right) : ''
              }`}
            >
              {spread.right ? (
                <PageContent page={spread.right} />
              ) : (
                <div className="ebook-reader__page-inner" />
              )}
            </div>

            {/* 3D Flip forward */}
            {flipState === 'forward' && nextSpread && (
              <div
                className="ebook-reader__flip-layer ebook-reader__flip-layer--forward"
                onAnimationEnd={handleFlipEnd}
              >
                <div
                  className={`ebook-reader__flip-face ebook-reader__flip-face--front ${
                    spread.right ? pageTypeClass(spread.right) : ''
                  }`}
                >
                  {spread.right ? <PageContent page={spread.right} /> : <div className="ebook-reader__page-inner" />}
                </div>
                <div
                  className={`ebook-reader__flip-face ebook-reader__flip-face--back ${
                    nextSpread.left ? pageTypeClass(nextSpread.left) : ''
                  }`}
                >
                  {nextSpread.left ? <PageContent page={nextSpread.left} /> : <div className="ebook-reader__page-inner" />}
                </div>
              </div>
            )}

            {/* 3D Flip backward */}
            {flipState === 'backward' && prevSpread && (
              <div
                className="ebook-reader__flip-layer ebook-reader__flip-layer--backward"
                onAnimationEnd={handleFlipEnd}
              >
                <div
                  className={`ebook-reader__flip-face ebook-reader__flip-face--front ${
                    prevSpread.right ? pageTypeClass(prevSpread.right) : ''
                  }`}
                >
                  {prevSpread.right ? <PageContent page={prevSpread.right} /> : <div className="ebook-reader__page-inner" />}
                </div>
                <div
                  className={`ebook-reader__flip-face ebook-reader__flip-face--back ${
                    spread.left ? pageTypeClass(spread.left) : ''
                  }`}
                >
                  {spread.left ? <PageContent page={spread.left} /> : <div className="ebook-reader__page-inner" />}
                </div>
              </div>
            )}

            {/* Click zones */}
            <button
              type="button"
              className={`ebook-reader__click-zone ebook-reader__click-zone--left ${
                !canGoBackwardSpread ? 'ebook-reader__click-zone--disabled' : ''
              }`}
              onClick={goBackward}
              disabled={!canGoBackwardSpread || flipState !== 'idle'}
              aria-label="Previous page"
              tabIndex={-1}
            />
            <button
              type="button"
              className={`ebook-reader__click-zone ebook-reader__click-zone--right ${
                !canGoForwardSpread ? 'ebook-reader__click-zone--disabled' : ''
              }`}
              onClick={goForward}
              disabled={!canGoForwardSpread || flipState !== 'idle'}
              aria-label="Next page"
              tabIndex={-1}
            />
          </div>
        </div>
      )}

      {/* ── Unified Progress Bar ── */}
      <div className="ebook-reader__progress" aria-hidden="true">
        <div
          className="ebook-reader__progress-fill"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      {/* ── Unified Navigation ── */}
      <nav className="ebook-reader__nav" aria-label="Book navigation">
        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open chapter navigation"
          aria-expanded={drawerOpen}
        >
          <List className="ebook-reader__nav-icon" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={goBackward}
          disabled={isSpreadMode ? (!canGoBackwardSpread || flipState !== 'idle') : (!canGoBackwardSingle || isAnimating)}
          aria-label="Previous page"
        >
          <ChevronLeft className="ebook-reader__nav-icon" aria-hidden="true" />
        </button>

        <span className="ebook-reader__page-counter" aria-live="polite">
          {pageLabel}
        </span>

        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={goForward}
          disabled={isSpreadMode ? (!canGoForwardSpread || flipState !== 'idle') : (!canGoForwardSingle || isAnimating)}
          aria-label="Next page"
        >
          <ChevronRight className="ebook-reader__nav-icon" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={toggleFullScreen}
          aria-label={isFullScreen ? "Exit full screen" : "Enter full screen"}
        >
          {isFullScreen ? 
            <Minimize className="ebook-reader__nav-icon" aria-hidden="true" /> : 
            <Maximize className="ebook-reader__nav-icon" aria-hidden="true" />
          }
        </button>
      </nav>

      {/* ══════════════════════════════════════
         CHAPTER JUMP DRAWER
         ══════════════════════════════════════ */}
      {drawerOpen && (
        <div
          className="ebook-drawer__backdrop"
          onClick={() => setDrawerOpen(false)}
          aria-hidden="true"
        />
      )}
      <aside
        className={`ebook-drawer ${drawerOpen ? 'ebook-drawer--open' : ''}`}
        role="dialog"
        aria-label="Chapter navigation"
        aria-hidden={!drawerOpen}
      >
        <div className="ebook-drawer__header">
          <span className="ebook-drawer__title">{ebookUI.drawer.title}</span>
          <button
            type="button"
            className="ebook-reader__nav-btn"
            onClick={() => setDrawerOpen(false)}
            aria-label={ebookUI.drawer.closeAriaLabel}
          >
            <X className="ebook-reader__nav-icon" aria-hidden="true" />
          </button>
        </div>
        <nav className="ebook-drawer__list" aria-label={ebookUI.drawer.listAriaLabel}>
          {chapterIndex.map((entry, idx) => (
            <button
              type="button"
              key={`ch-idx-${idx}`}
              className={`ebook-drawer__item ${entry.indent ? 'ebook-drawer__item--indent' : 'ebook-drawer__item--section'} ${idx === currentChapterIdx ? 'ebook-drawer__item--active' : ''}`}
              onClick={() => jumpToPage(entry.pageIndex)}
            >
              {entry.label}
            </button>
          ))}
        </nav>
      </aside>
    </main>
  );
}