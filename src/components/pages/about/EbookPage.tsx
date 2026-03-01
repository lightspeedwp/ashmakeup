/**
 * @fileoverview Unified responsive eBook reader.
 *
 * Breakpoints:
 *   - Mobile compact (320-419px): single-page, 18px body, tight padding
 *   - Mobile (420-767px): single-page, 20px body, moderate padding
 *   - Tablet portrait (768-1023px): single-page, 22px body, line-length constrained
 *   - Tablet landscape (1024-1279px): two-page spread, 18px body (narrow pages)
 *   - Desktop (1280-1439px): two-page spread, 19px body
 *   - Large desktop (1440px+): two-page spread, 22px body, max-width reached
 *
 * Max-width: 1440px. Typography custom properties overridden per breakpoint.
 * Touch swipe, keyboard arrows, and button navigation all supported.
 *
 * @component EbookPage
 * @version 4.3.0 - Audit fixes: hardcoded strings centralised, redundant role removed, font sizes increased
 */

import React, { useEffect, useState, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, List, X, Maximize, Minimize, SlidersHorizontal } from '../../../lib/icons';
import { bookPages } from '../../../data/mock/pages/ebook-pages';
import type { BookPage } from '../../../data/mock/pages/ebook-pages';
import { ebookUI } from '../../../data/mock/ui/ebook';
import { ebookBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { EbookSettingsModal } from '../../ui/EbookSettingsModal';
import {
  readSavedPage,
  savePage,
  readFontSize,
  saveFontSize,
  readMinimalMode,
  saveMinimalMode,
  FONT_SIZE_SCALE,
  type FontSizePreset,
} from '../../../utils/ebookPreferences';
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
        const partNum = page.part || 1;
        const partNumeralIdx = partNum - 1;
        const partNumeral = ebookUI.partNumerals[partNumeralIdx] || ebookUI.partNumerals[0];
        entries.push({
          pageIndex: idx,
          label: `${ebookUI.labels.part} ${partNumeral} — ${page.title}`,
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
   PAGE CONTENT RENDERER
   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */

function PageContent(props: { page: BookPage }) {
  const page = props.page;
  
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
          {page.paragraphs ? page.paragraphs.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__blurb">{p}</p>
          )) : null}
        </div>
      );

    case 'inside-front':
      return (
        <div className="ebook-reader__page-inner">
          {page.paragraphs ? page.paragraphs.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__meta-line">{p}</p>
          )) : null}
        </div>
      );

    case 'title':
      const pageParagraphs = page.paragraphs || [];
      const titleAuthor = pageParagraphs.length > 0 ? pageParagraphs[0] : '';
      return (
        <div className="ebook-reader__page-inner">
          <h2 className="ebook-page__title">{page.title}</h2>
          <p className="ebook-page__subtitle">{page.subtitle}</p>
          <span className="ebook-page__author">{titleAuthor}</span>
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'dedication':
      return (
        <div className="ebook-reader__page-inner">
          {page.paragraphs ? page.paragraphs.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__dedication-line">{p}</p>
          )) : null}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'epigraph':
      return (
        <div className="ebook-reader__page-inner">
          {page.paragraphs ? page.paragraphs.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__epigraph-line">{p}</p>
          )) : null}
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
            {page.tocItems ? page.tocItems.map((item, idx) =>
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
            ) : null}
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
          {page.paragraphs ? page.paragraphs.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__paragraph">{p}</p>
          )) : null}
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
      const ptPartNum = page.part || 1;
      const ptWordIdx = ptPartNum - 1;
      const ptWord = ebookUI.partWords[ptWordIdx] || ebookUI.partWords[0];
      return (
        <div className="ebook-reader__page-inner">
          <span className="ebook-page__part-label">
            {ebookUI.labels.part} {ptWord}
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
          {page.paragraphs ? page.paragraphs.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__paragraph">{p}</p>
          )) : null}
          {page.pageNumber != null && (
            <span className="ebook-reader__page-number">{page.pageNumber}</span>
          )}
        </div>
      );

    case 'about-author':
      return (
        <div className="ebook-reader__page-inner">
          <h2 className="ebook-page__section-title">{page.title}</h2>
          {page.paragraphs ? page.paragraphs.map((p, i) => (
            <p key={`${page.id}-p-${i}`} className="ebook-page__paragraph">{p}</p>
          )) : null}
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

/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
  const isSpreadMode = useSpreadMode();
  const mainRefInit: HTMLElement | null = null;
  const mainRef = useRef(mainRefInit);

  const spreads = React.useMemo(() => buildSpreads(bookPages), []);
  const totalPages = bookPages.length;
  const totalSpreads = spreads.length;

  /* ── Full Screen ── */
  const [isFullScreen, setIsFullScreen] = useState(false);

  useEffect(() => {
    // Apply fullscreen class to body when in fullscreen mode
    if (isFullScreen) {
      document.body.classList.add('ebook-fullscreen');
    } else {
      document.body.classList.remove('ebook-fullscreen');
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove('ebook-fullscreen');
    };
  }, [isFullScreen]);

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
           // Dev logging removed — import.meta.env.DEV crashes this bundler
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
  const flipStateInit: 'idle' | 'forward' | 'backward' = 'idle';
  const [flipState, setFlipState] = useState(flipStateInit);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  /* ── Chapter drawer state ── */
  const [drawerOpen, setDrawerOpen] = useState(false);

  /* ── Settings modal state ── */
  const [settingsOpen, setSettingsOpen] = useState(false);

  /* ── Font size state ── */
  const [fontSize, setFontSize] = useState(() => readFontSize());

  /* ── Minimal mode state ── */
  const [minimalMode, setMinimalMode] = useState(() => readMinimalMode());

  /* ── Apply font size to CSS custom properties ── */
  useEffect(() => {
    const scale = FONT_SIZE_SCALE[fontSize];
    if (mainRef.current) {
      mainRef.current.style.setProperty('--ebook-font-scale', String(scale));
    }
    saveFontSize(fontSize);
  }, [fontSize]);

  /* ── Persist minimal mode ── */
  useEffect(() => {
    saveMinimalMode(minimalMode);
  }, [minimalMode]);

  /* ── Touch refs ── */
  const touchStartXInit: number | null = null;
  const touchStartX = useRef(touchStartXInit);
  const touchStartYInit: number | null = null;
  const touchStartY = useRef(touchStartYInit);
  const isSwiping = useRef(false);
  const readerRefInit: HTMLDivElement | null = null;
  const readerRef = useRef(readerRefInit);

  /* ── Swipe zone visual feedback ── */
  const [leftSwipeActive, setLeftSwipeActive] = useState(false);
  const [rightSwipeActive, setRightSwipeActive] = useState(false);

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
      setTimeout(() => {
        const nextSpreadIdx = Math.min(currentSpread + 1, totalSpreads - 1);
        setCurrentPage(spreadToPage(nextSpreadIdx));
        setFlipState('idle');
      }, 600); // Match 3D flip animation duration
    } else {
      if (!canGoForwardSingle) return;
      setIsAnimating(true);
      setSwipeOffset(-100);
      setTimeout(() => {
        setCurrentPage((p) => Math.min(p + 1, totalPages - 1));
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 400); // Smoother animation timing
    }
  }, [isSpreadMode, canGoForwardSpread, canGoForwardSingle, flipState, isAnimating, totalPages, currentSpread, totalSpreads]);

  const goBackward = useCallback(() => {
    if (isAnimating) return;
    if (isSpreadMode) {
      if (!canGoBackwardSpread || flipState !== 'idle') return;
      setFlipState('backward');
      setTimeout(() => {
        const prevSpreadIdx = Math.max(currentSpread - 1, 0);
        setCurrentPage(spreadToPage(prevSpreadIdx));
        setFlipState('idle');
      }, 600); // Match 3D flip animation duration
    } else {
      if (!canGoBackwardSingle) return;
      setIsAnimating(true);
      setSwipeOffset(100);
      setTimeout(() => {
        setCurrentPage((p) => Math.max(p - 1, 0));
        setSwipeOffset(0);
        setIsAnimating(false);
      }, 400); // Smoother animation timing
    }
  }, [isSpreadMode, canGoBackwardSpread, canGoBackwardSingle, flipState, isAnimating, currentSpread]);

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

  /* ── Chapter jump ── */
  const jumpToPage = useCallback((pageIndex: number) => {
    setCurrentPage(Math.max(0, Math.min(pageIndex, totalPages - 1)));
    setFlipState('idle');
    setSwipeOffset(0);
    setIsAnimating(false);
    setDrawerOpen(false);
  }, [totalPages]);

  /* ── Keyboard ── */
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Escape key handling (highest priority)
      if (e.key === 'Escape') {
        if (drawerOpen) {
          e.preventDefault();
          setDrawerOpen(false);
          return;
        }
        if (settingsOpen) {
          e.preventDefault();
          setSettingsOpen(false);
          return;
        }
        if (isFullScreen) {
          e.preventDefault();
          toggleFullScreen();
          return;
        }
        return;
      }

      // Don't handle shortcuts when modal/drawer is open
      if (drawerOpen || settingsOpen) return;

      // Navigation shortcuts
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        goForward();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        goBackward();
      } else if (e.key === 'Home') {
        e.preventDefault();
        jumpToPage(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        jumpToPage(totalPages - 1);
      }
      // Settings shortcuts (case-insensitive)
      else if (e.key === 's' || e.key === 'S') {
        e.preventDefault();
        setSettingsOpen(true);
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        setMinimalMode(!minimalMode);
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        toggleFullScreen();
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        setDrawerOpen(true);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goForward, goBackward, drawerOpen, settingsOpen, isFullScreen, toggleFullScreen, minimalMode, jumpToPage, totalPages]);

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

      // Visual feedback for swipe zones
      if (percent < -10) {
        setLeftSwipeActive(true);
        setRightSwipeActive(false);
      } else if (percent > 10) {
        setLeftSwipeActive(false);
        setRightSwipeActive(true);
      } else {
        setLeftSwipeActive(false);
        setRightSwipeActive(false);
      }
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

    // Reset swipe zone visual feedback
    setLeftSwipeActive(false);
    setRightSwipeActive(false);
  }, [goForward, goBackward]);

  /* ── Spread data for desktop ── */
  const spread = spreads[currentSpread];
  const nextSpread = currentSpread < totalSpreads - 1 ? spreads[currentSpread + 1] : null;
  const prevSpread = currentSpread > 0 ? spreads[currentSpread - 1] : null;

  /* ── Progress ── */
  const progressSingle = currentPage / Math.max(totalPages - 1, 1);
  const progressSpread = currentSpread / Math.max(totalSpreads - 1, 1);
  const progress = isSpreadMode ? progressSpread : progressSingle;

  /* ── Display label ── */
  const pageLabel = (() => {
    if (isSpreadMode) {
      // Spread mode: show range of actual page numbers
      const leftNum = spread.left != null && spread.left.pageNumber != null ? spread.left.pageNumber : null;
      const rightNum = spread.right != null && spread.right.pageNumber != null ? spread.right.pageNumber : null;
      
      if (leftNum != null && rightNum != null) {
        return `Pages ${leftNum}–${rightNum}`;
      }
      if (leftNum != null) {
        return `Page ${leftNum}`;
      }
      if (rightNum != null) {
        return `Page ${rightNum}`;
      }
      // No page numbers (cover, TOC, etc.)
      return `${currentSpread + 1} / ${totalSpreads}`;
    } else {
      // Single-page mode: show actual page number
      const currentPageData = bookPages[currentPage];
      if (currentPageData != null && currentPageData.pageNumber != null) {
        return `Page ${currentPageData.pageNumber}`;
      }
      // No page number (cover, TOC, etc.)
      return `${currentPage + 1} / ${totalPages}`;
    }
  })();

  /* ── Breadcrumbs ── */
  const breadcrumbs = ebookBreadcrumbs();

  /* ── Single-page neighbours for peek effect ── */
  const prevPage = currentPage > 0 ? bookPages[currentPage - 1] : null;
  const nextPage = currentPage < totalPages - 1 ? bookPages[currentPage + 1] : null;
  const activePage = bookPages[currentPage];

  /* ── Current chapter index (for drawer active state) ── */
  const currentChapterIdx = React.useMemo(() => {
    // Find the last chapter entry that is <= currentPage
    var idx = -1;
    for (var i = 0; i < chapterIndex.length; i++) {
      if (chapterIndex[i].pageIndex <= currentPage) {
        idx = i;
      } else {
        break;
      }
    }
    return idx;
  }, [currentPage]);

  // Extract || operators to avoid bundler issues
  const cannotGoBackward = !canGoBackwardSpread || flipState !== 'idle';
  const cannotGoForward = !canGoForwardSpread || flipState !== 'idle';
  const disableBackwardSingle = !canGoBackwardSingle || isAnimating;
  const disableForwardSingle = !canGoForwardSingle || isAnimating;

  return (
    <main
      ref={mainRef}
      id="main-content"
      tabIndex={-1}
      className={`ebook-reader bg-atomic-noise ${minimalMode ? 'ebook-reader--minimal' : ''}`}
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
          aria-label={ebookUI.fullscreen.exit}
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
          aria-label={ebookUI.aria.singlePage(currentPage + 1, totalPages)}
          aria-live="polite"
        >
          <div
            className="ebook-reader__single-track"
            style={{
              transform: `translateX(${swipeOffset}%)`,
              transition: (() => {
                if (isAnimating) return 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)';
                if (swipeOffset !== 0) return 'none';
                return 'transform 200ms ease';
              })(),
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
            aria-label={ebookUI.aria.spreadPage(currentSpread + 1, totalSpreads)}
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
              disabled={cannotGoBackward}
              aria-label={ebookUI.nav.prev}
              tabIndex={-1}
            />
            <button
              type="button"
              className={`ebook-reader__click-zone ebook-reader__click-zone--right ${
                !canGoForwardSpread ? 'ebook-reader__click-zone--disabled' : ''
              }`}
              onClick={goForward}
              disabled={cannotGoForward}
              aria-label={ebookUI.nav.next}
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
      <nav className="ebook-reader__nav" aria-label={ebookUI.nav.ariaLabel}>
        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={() => setDrawerOpen(true)}
          aria-label={ebookUI.nav.openChapters}
          aria-expanded={drawerOpen}
        >
          <List className="ebook-reader__nav-icon" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={goBackward}
          disabled={isSpreadMode ? cannotGoBackward : disableBackwardSingle}
          aria-label={ebookUI.nav.prev}
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
          disabled={isSpreadMode ? cannotGoForward : disableForwardSingle}
          aria-label={ebookUI.nav.next}
        >
          <ChevronRight className="ebook-reader__nav-icon" aria-hidden="true" />
        </button>

        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={toggleFullScreen}
          aria-label={isFullScreen ? ebookUI.fullscreen.exit : ebookUI.fullscreen.enter}
        >
          {isFullScreen ? 
            <Minimize className="ebook-reader__nav-icon" aria-hidden="true" /> : 
            <Maximize className="ebook-reader__nav-icon" aria-hidden="true" />
          }
        </button>

        <button
          type="button"
          className="ebook-reader__nav-btn"
          onClick={() => setSettingsOpen(true)}
          aria-label={ebookUI.nav.settings}
        >
          <SlidersHorizontal className="ebook-reader__nav-icon" aria-hidden="true" />
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
        aria-label={ebookUI.drawer.ariaLabel}
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
          {chapterIndex.map((entry, idx) => {
            // Extract nested ternaries to avoid bundler issues
            const indentClass = entry.indent ? 'ebook-drawer__item--indent' : 'ebook-drawer__item--section';
            const activeClass = idx === currentChapterIdx ? 'ebook-drawer__item--active' : '';
            return (
              <button
                type="button"
                key={`ch-idx-${idx}`}
                className={`ebook-drawer__item ${indentClass} ${activeClass}`}
                onClick={() => jumpToPage(entry.pageIndex)}
              >
                {entry.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* ══════════════════════════════════════
         SETTINGS MODAL
         ══════════════════════════════════════ */}
      <EbookSettingsModal
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        currentPage={currentPage}
        totalPages={totalPages}
        fontSize={fontSize}
        minimalMode={minimalMode}
        onPageJump={jumpToPage}
        onFontSizeChange={setFontSize}
        onMinimalModeToggle={() => setMinimalMode(!minimalMode)}
        progressPercent={progress * 100}
        currentChapterTitle={chapterIndex[currentChapterIdx]?.label}
      />

      {/* ══════════════════════════════════════
         MINIMAL MODE — Floating Settings Button
         ══════════════════════════════════════ */}
      {minimalMode && (
        <button
          type="button"
          className="ebook-reader__floating-settings"
          onClick={() => setSettingsOpen(true)}
          aria-label="Open reader settings"
        >
          <SlidersHorizontal size={24} aria-hidden="true" />
        </button>
      )}
    </main>
  );
}