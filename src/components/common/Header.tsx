/**
 * @fileoverview Header navigation component for Ash Shaw Makeup Portfolio
 * 
 * Core Features:
 * - Responsive navigation with desktop menu and mobile burger button
 * - React Router integration with Link components and active state via useLocation
 * - 220px wide logo in header for enhanced brand presence
 * - Full keyboard navigation with Tab, Enter, Escape support
 * - Screen reader announcements for navigation changes and page transitions
 * - Logo component integration with clickable home navigation
 * 
 * @author Ash Shaw Portfolio Team
 * @version 4.0.0 - React Router Migration
 */

import React, { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { useModal } from "./ModalContext";
import { ThemeToggle } from "./ThemeToggle";
import { navigationItems } from "../../data/mock/ui/navigation";
import { branding } from "../../data/mock/ui/branding";
import { getPageIdFromPath } from "../../hooks/useAppNavigate";
import "@/styles/blocks/header.css";

/**
 * Header - Comprehensive navigation component with accessibility and mobile optimization
 */
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      const announcement = `Navigated to ${sectionId.replace("-", " ")} section`;
      announceToScreenReader(announcement);
    }
  };

  const handleNavigation = (
    path: string,
    pageId: string,
    sectionId?: string,
  ) => {
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
        videos: "Videos",
        contact: "Contact",
      };
      const pageName = pageNames[pageId] || pageId;
      announceToScreenReader(`Navigated to ${pageName} page`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const announceToScreenReader = (message: string) => {
    const announcement = document.createElement("div");
    announcement.setAttribute("aria-live", "polite");
    announcement.setAttribute("aria-atomic", "true");
    announcement.setAttribute("class", "sr-only");
    announcement.textContent = message;
    document.body.appendChild(announcement);
    setTimeout(
      () => document.body.removeChild(announcement),
      1000,
    );
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
          <div
            className="header__desktop-nav"
            role="menubar"
          >
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.path, item.id)}
                className={`header__nav-link ${
                  currentPage === item.id
                    ? "header__nav-link--active"
                    : ""
                }`}
                role="menuitem"
                aria-current={
                  currentPage === item.id ? "page" : undefined
                }
              >
                <item.icon className="header__nav-icon" aria-hidden="true" />
                {item.label}
              </button>
            ))}
            
            {/* Theme Toggle - Desktop */}
            <ThemeToggle />
          </div>

          {/* Mobile Controls: Theme Toggle + Burger Menu */}
          <div className="header__mobile-controls">
            {/* Theme Toggle - Mobile */}
            <ThemeToggle />
            
            {/* Mobile Burger Menu Button */}
            <button
              ref={menuButtonRef}
              className="header__burger-button"
              onClick={toggleMobileMenu}
              aria-label={
                isMobileMenuOpen
                  ? "Close mobile menu"
                  : "Open mobile menu"
              }
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="header__burger-icon">
                <span
                  className="header__burger-line"
                  aria-hidden="true"
                />
                <span
                  className="header__burger-line"
                  aria-hidden="true"
                />
                <span
                  className="header__burger-line"
                  aria-hidden="true"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Component */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={closeMobileMenu}
      />
    </>
  );
}