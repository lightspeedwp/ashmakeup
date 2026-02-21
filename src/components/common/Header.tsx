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
 * 
 * @author Ash Shaw Portfolio Team
 * @version 7.0.0 - Portfolio & Blog mega menus
 */

import React, { useState, useEffect, useRef, useCallback } from "react";
import { useLocation, useNavigate } from "react-router";
import { X } from "lucide-react";
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
import "@/styles/blocks/header.css";

/** IDs of nav items that have mega-menu dropdowns */
const MEGA_MENU_IDS = new Set(['about', 'portfolio', 'blog', 'contact']);

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
  const currentPage = getPageIdFromPath(location.pathname);

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
      menuButtonRef.current?.focus();
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
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!openDropdown) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as Node;
      const wrapper = wrapperRefs.current[openDropdown];

      // Check if click is inside the trigger wrapper
      if (wrapper && wrapper.contains(target)) return;

      // Check if click is inside the fixed-position mega-menu panel
      const megaMenu = document.querySelector('.mega-menu');
      if (megaMenu && megaMenu.contains(target)) return;

      // Check if click is inside the contact mini menu
      const contactMini = document.querySelector('.contact-mini');
      if (contactMini && contactMini.contains(target)) return;

      setOpenDropdown(null);
    };

    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, [openDropdown]);

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
    triggerRefs.current[id]?.focus();
  }, []);

  /* ── Navigation helpers ── */

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
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
      announceToScreenReader(`Navigated to ${pageNames[pageId] || pageId} page`);
    }
  };

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  /** Keyboard handler for dropdown trigger buttons */
  const handleTriggerKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setOpenDropdown(id);
    } else if (e.key === 'Escape') {
      setOpenDropdown(null);
      triggerRefs.current[id]?.focus();
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
        className="header"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="header__nav">
          {/* Logo - clickable to home */}
          <div className="header__logo-container">
            <button
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
                          ref={(el) => { triggerRefs.current[item.id] = el; }}
                          onClick={() => handleNavigation(item.path, item.id)}
                          onKeyDown={(e) => handleTriggerKeyDown(e, item.id)}
                          className={`header__nav-link ${
                            currentPage === item.id ? "header__nav-link--active" : ""
                          }`}
                          role="menuitem"
                          aria-current={currentPage === item.id ? "page" : undefined}
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
                      key={item.id}
                      onClick={() => handleNavigation(item.path, item.id)}
                      className={`header__nav-link ${
                        currentPage === item.id ? "header__nav-link--active" : ""
                      }`}
                      role="menuitem"
                      aria-current={currentPage === item.id ? "page" : undefined}
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