/**
 * @fileoverview Header navigation component for Ash Shaw Makeup Portfolio
 * 
 * Core Features:
 * - Responsive navigation with desktop menu and mobile burger button
 * - React Router integration with Link components and active state via useLocation
 * - About dropdown with animated process-flow diagram
 * - Portfolio mega menu with featured card, recent work, and neon categories
 * - Blog mega menu with featured post, recent posts, and neon categories
 * - Contact mini menu with contact form and social media links
 * - Full keyboard navigation with Tab, Enter, Escape support
 * - Screen reader announcements for navigation changes and page transitions
 * - Logo component integration with clickable home navigation
 * - SearchInput component for global search (Ctrl+K / Cmd+K)
 * - Scroll-spy active state highlighting on the homepage
 * - Scroll-position-based transparent/compact header states
 * 
 * @author Ash Shaw Portfolio Team
 * @version 7.2.0 - Scroll-spy + sticky header states
 */

import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useLocation, useNavigate } from "../../lib/router";
import { X } from "../../lib/icons";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { useModal } from "./ModalContext";
import { ThemeToggle } from "./ThemeToggle";
import { SearchInput } from "../ui/SearchInput";
import { AboutDropdown } from "./AboutDropdown";
import { PortfolioMegaMenu } from "./PortfolioMegaMenu";
import { BlogMegaMenu } from "./BlogMegaMenu";
import { ContactMiniMenu } from "./ContactMiniMenu";
import { headerNavigationItems } from "../../data/mock/ui/navigation";
import { branding } from "../../data/mock/ui/branding";
import { getPageIdFromPath } from "../../hooks/useAppNavigate";
import { useClickOutside } from "../../hooks/useClickOutside";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import "../../styles/blocks/header.css";

/** IDs of nav items that have mega-menu dropdowns */
const MEGA_MENU_IDS = new Set(['about', 'portfolio', 'blog', 'contact']);

/** Homepage section IDs observed by scroll spy */
const HOMEPAGE_SECTION_IDS = [
  'hero-section',
  'why-section',
  'work',
  'blog-preview',
  'testimonials',
  'festival-countdown',
  'instagram-feed',
  'uv-makeup',
  'faq-section',
];

/** Maps a homepage section ID to the corresponding nav item ID */
const SECTION_TO_NAV: Record<string, string> = {
  'work': 'portfolio',
  'blog-preview': 'blog',
  'uv-makeup': 'portfolio',
};

/**
 * Header - Comprehensive navigation component with accessibility and mobile optimization
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  /** Which dropdown/mega-menu is currently open (only one at a time) */
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const wrapperRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const location = useLocation();
  const navigate = useNavigate();
  const locationPathname = location.pathname;
  const currentPage = getPageIdFromPath(locationPathname);

  /* ── Scroll-spy: highlight nav items based on visible homepage section ── */
  const isHomePage = locationPathname === '/';
  const activeSection = useScrollSpy(HOMEPAGE_SECTION_IDS, {
    rootMargin: '-20% 0px -60% 0px',
    threshold: 0,
    enabled: isHomePage,
    fallbackId: 'hero-section',
  });

  /** Nav item ID to highlight — scroll-spy on homepage, route-based elsewhere */
  const activeNavId = useMemo(() => {
    if (!isHomePage) return currentPage;
    if (!activeSection) return 'home';
    return SECTION_TO_NAV[activeSection] ? SECTION_TO_NAV[activeSection] : 'home';
  }, [isHomePage, currentPage, activeSection]);

  /* ── Scroll position: transparent-at-top → compact-when-scrolled ── */
  const SCROLL_THRESHOLD = 80;
  const { isScrolledPast } = useScrollPosition({ throttleMs: 60 });
  const isScrolled = isScrolledPast(SCROLL_THRESHOLD);

  /** Build the header BEM class string */
  const headerClassName = useMemo(() => {
    const classes = ['header'];
    if (isHomePage && !isScrolled) {
      classes.push('header--at-top');
    }
    if (isScrolled) {
      classes.push('header--scrolled');
    }
    return classes.join(' ');
  }, [isHomePage, isScrolled]);

  const { registerModal, updateModal, unregisterModal } = useModal();

  useEffect(() => {
    registerModal('mobile-menu', 'drawer', { component: 'Header' });
    return () => unregisterModal('mobile-menu');
  }, [registerModal, unregisterModal]);

  useEffect(() => {
    updateModal('mobile-menu', isMobileMenuOpen, { component: 'Header' });
  }, [updateModal, isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) {
      const btn = menuButtonRef.current;
      if (btn) {
        btn.focus();
      }
    }
  }, [isMobileMenuOpen]);

  // Close all dropdowns when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setOpenDropdown(null);
    }
  }, [isSearchOpen]);

  // Close everything on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [locationPathname]);

  // Handle outside clicks to close dropdowns
  const activeDropdownRef = useRef<HTMLElement | null>(null);
  
  useEffect(() => {
    activeDropdownRef.current = openDropdown ? wrapperRefs.current[openDropdown] : null;
  }, [openDropdown]);

  useClickOutside(
    () => setOpenDropdown(null),
    [activeDropdownRef],
    !!openDropdown,
    ['.mega-menu', '.contact-mini']
  );

  /* ── Shared open / close helpers ── */

  const openMenu = useCallback((id: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(id);
  }, []);

  const closeMenu = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  }, []);

  const closeMenuImmediate = useCallback((id: string) => {
    setOpenDropdown(null);
    const btn = triggerRefs.current[id];
    if (btn) {
      btn.focus();
    }
  }, []);

  /* ── Navigation helpers ── */

  const prefersReduced = useReducedMotion();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      announceToScreenReader(`Navigated to ${sectionId.replace("-", " ")} section`);
    }
  };

  const handleNavigation = (path: string, pageId: string, sectionId?: string) => {
    setIsMobileMenuOpen(false);

    if (sectionId && pageId === "home") {
      if (currentPage !== "home") {
        navigate("/");
        setTimeout(() => scrollToSection(sectionId), 300);
      } else {
        scrollToSection(sectionId);
      }
    } else {
      navigate(path);
      const pageNames: Record<string, string> = {
        home: "Home",
        about: "About",
        portfolio: "Portfolio",
        blog: "Blog",
        contact: "Contact",
      };
      const pageName = pageNames[pageId] ? pageNames[pageId] : pageId;
      announceToScreenReader(`Navigated to ${pageName} page`);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  /** Keyboard handler for dropdown trigger buttons */
  const handleTriggerKeyDown = (e: React.KeyboardEvent, id: string) => {
    const isArrowDown = e.key === 'ArrowDown';
    const isEnter = e.key === 'Enter';
    const isSpace = e.key === ' ';
    const shouldOpen = isArrowDown || isEnter || isSpace;
    if (shouldOpen) {
      e.preventDefault();
      setOpenDropdown(id);
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
      const btn = triggerRefs.current[id];
      if (btn) {
        btn.focus();
      }
    }
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.setAttribute("class", "sr-only");
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(() => document.body.removeChild(announcement), 1000);
  };

  /** Render the correct dropdown component for a given nav id */
  const renderDropdown = (id: string) => {
    const isOpen = openDropdown === id;
    const onClose = () => closeMenuImmediate(id);

    /** Keep the menu alive when the user hovers over the mega-menu panel itself */
    const megaMouseEnter = () => openMenu(id);
    const megaMouseLeave = closeMenu;

    switch (id) {
      case 'about':
        return <AboutDropdown isOpen={isOpen} onClose={onClose} />;
      case 'portfolio':
        return (
          <PortfolioMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            onMouseEnter={megaMouseEnter}
            onMouseLeave={megaMouseLeave}
          />
        );
      case 'blog':
        return (
          <BlogMegaMenu
            isOpen={isOpen}
            onClose={onClose}
            onMouseEnter={megaMouseEnter}
            onMouseLeave={megaMouseLeave}
          />
        );
      case 'contact':
        return (
          <ContactMiniMenu
            isOpen={isOpen}
            onClose={onClose}
            onMouseEnter={megaMouseEnter}
            onMouseLeave={megaMouseLeave}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <nav
        className={headerClassName}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="header__nav">
          {/* Logo - clickable to home */}
          <div className="header__logo-container">
            <button
              type="button"
              onClick={() => handleNavigation("/", "home")}
              className="header__logo-button"
              aria-label={`Go to ${branding.company.name} home page`}
            >
              <Logo size="header" className="header__logo-image" />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="header__desktop-nav" role="menubar">
            {isSearchOpen ? (
              /* ── Search Overlay: replaces navigation when active ── */
              <div className="header__search-overlay" role="search" aria-label="Search all content">
                <SearchInput
                  className="header__search-overlay-input"
                  isOpen={isSearchOpen}
                  onOpenChange={setIsSearchOpen}
                />
                <button
                  type="button"
                  className="header__search-close"
                  onClick={() => setIsSearchOpen(false)}
                  aria-label="Close search"
                >
                  <X className="header__search-close-icon" aria-hidden="true" />
                </button>
                <ThemeToggle />
              </div>
            ) : (
              /* ── Standard Navigation ── */
              <>
                {headerNavigationItems.map((item) => {
                  /* Items with mega-menu / dropdown */
                  if (MEGA_MENU_IDS.has(item.id)) {
                    return (
                      <div
                        key={item.id}
                        className="header__nav-item header__nav-item--has-dropdown"
                        ref={(el) => { wrapperRefs.current[item.id] = el; }}
                        onMouseEnter={() => openMenu(item.id)}
                        onMouseLeave={closeMenu}
                      >
                        <button
                          type="button"
                          ref={(el) => { triggerRefs.current[item.id] = el; }}
                          onClick={() => handleNavigation(item.path, item.id)}
                          onKeyDown={(e) => handleTriggerKeyDown(e, item.id)}
                          className={`header__nav-link ${
                            activeNavId === item.id ? "header__nav-link--active" : ""
                          }`}
                          role="menuitem"
                          aria-current={activeNavId === item.id ? "page" : undefined}
                          aria-haspopup="true"
                          aria-expanded={openDropdown === item.id}
                        >
                          <item.icon className="header__nav-icon" aria-hidden="true" />
                          {item.label}
                        </button>

                        {renderDropdown(item.id)}
                      </div>
                    );
                  }

                  /* Regular nav links */
                  return (
                    <button
                      type="button"
                      key={item.id}
                      onClick={() => handleNavigation(item.path, item.id)}
                      className={`header__nav-link ${
                        activeNavId === item.id ? "header__nav-link--active" : ""
                      }`}
                      role="menuitem"
                      aria-current={activeNavId === item.id ? "page" : undefined}
                    >
                      <item.icon className="header__nav-icon" aria-hidden="true" />
                      {item.label}
                    </button>
                  );
                })}

                {/* Search trigger - Desktop */}
                <SearchInput
                  isOpen={isSearchOpen}
                  onOpenChange={setIsSearchOpen}
                />

                {/* Theme Toggle - Desktop */}
                <ThemeToggle />
              </>
            )}
          </div>

          {/* Mobile Controls: Theme Toggle + Burger Menu */}
          <div className="header__mobile-controls">
            <ThemeToggle />
            <button
              type="button"
              ref={menuButtonRef}
              className="header__burger-button"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="header__burger-icon">
                <span className="header__burger-line" aria-hidden="true" />
                <span className="header__burger-line" aria-hidden="true" />
                <span className="header__burger-line" aria-hidden="true" />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}