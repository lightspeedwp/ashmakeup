/**
 * @fileoverview Modern footer component for Ash Shaw Makeup Portfolio
 * Four-column grid layout with brand+CTAs, navigation, blog categories,
 * and portfolio categories. Social icons live in the bottom bar.
 *
 * @author Ash Shaw Portfolio Team
 * @version 5.0.0 - 4-column grid, social in bottom bar
 */

import React from "react";
import { useNavigate } from "react-router";
import { Link2, Check } from "lucide-react";
import { Logo } from "./Logo";
import { SocialLinks } from "./SocialLinks";
import { navigationItems } from "../../data/mock/ui/navigation";
import { footerContent } from "../../data/mock/ui/footer";
import { blogCategories } from "../../data/mock/blog/categories";
import { PORTFOLIO_CATEGORIES } from "../../utils/portfolioService";
import "@/styles/blocks/footer.css";
import "@/styles/blocks/button.css";

/**
 * Footer - Modern 4-column grid with brand, nav, blog, and portfolio columns
 */
export function Footer() {
  const navigate = useNavigate();
  const [linkCopied, setLinkCopied] = React.useState(false);

  const navigateTo = (path: string) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleFaqClick = () => {
    navigate("/contact");
    setTimeout(() => {
      const faqSection = document.getElementById("faq-section");
      if (faqSection) {
        faqSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setLinkCopied(true);
      setTimeout(() => setLinkCopied(false), 2000);
    } catch {
      if (import.meta.env.DEV) {
        console.log("🐞 Clipboard write failed");
      }
    }
  };

  /** Portfolio categories excluding "All Work" */
  const portfolioCategories = PORTFOLIO_CATEGORIES.filter(
    (cat) => cat.id !== "all"
  );

  return (
    <footer className="footer" role="contentinfo">
      {/* Background decoration */}
      <div className="footer__bg-orb footer__bg-orb--1" aria-hidden="true" />
      <div className="footer__bg-orb footer__bg-orb--2" aria-hidden="true" />
      <div className="footer__bg-orb footer__bg-orb--3" aria-hidden="true" />

      <div className="footer__inner">
        {/* ── Main Grid ── */}
        <div className="footer__grid">
          {/* Column 1 — Brand + CTAs */}
          <div className="footer__brand">
            <button
              onClick={() => navigateTo("/")}
              className="footer__logo-btn"
              aria-label="Return to home page"
            >
              <Logo size="2xl" />
            </button>
            <p className="footer__tagline">
              {footerContent.description}
            </p>
            <div className="footer__cta-group">
              <button
                onClick={() => navigateTo("/contact")}
                className="btn btn--neon-primary btn--sm"
                aria-label="Go to contact page"
              >
                {footerContent.ctaButton}
              </button>
              <button
                onClick={handleFaqClick}
                className="btn btn--neon-outline btn--sm"
                aria-label="View Frequently Asked Questions"
              >
                {footerContent.faqButton}
              </button>
            </div>
          </div>

          {/* Column 2 — Explore (nav) */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__heading">{footerContent.navHeading}</h3>
            <ul className="footer__nav-list">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => navigateTo(item.path)}
                    className="footer__nav-link"
                  >
                    <item.icon
                      className="footer__nav-link-icon"
                      aria-hidden="true"
                    />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3 — Blog Categories */}
          <nav className="footer__nav" aria-label="Blog categories">
            <h3 className="footer__heading">{footerContent.blogHeading}</h3>
            <ul className="footer__nav-list">
              {blogCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigateTo(`/blog?category=${cat.slug}`)}
                    className="footer__nav-link"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 4 — Portfolio Categories */}
          <nav className="footer__nav" aria-label="Portfolio categories">
            <h3 className="footer__heading">{footerContent.portfolioHeading}</h3>
            <ul className="footer__nav-list">
              {portfolioCategories.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => navigateTo(`/portfolio/${cat.slug}`)}
                    className="footer__nav-link"
                  >
                    {cat.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ── Divider ── */}
        <div className="footer__divider" aria-hidden="true" />

        {/* ── Bottom Bar ── */}
        <div className="footer__bar">
          <span className="footer__copyright">
            {footerContent.copyright}
          </span>

          <div className="footer__bar-social">
            <SocialLinks variant="minimal" />
            <button
              onClick={handleCopyLink}
              className="footer__copy-link"
              aria-label={linkCopied ? "Link copied" : "Copy page link"}
              title={linkCopied ? "Copied!" : "Copy link"}
            >
              {linkCopied ? (
                <Check className="footer__copy-link-icon footer__copy-link-icon--success" aria-hidden="true" />
              ) : (
                <Link2 className="footer__copy-link-icon" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="footer__legal">
            <button
              onClick={() => navigateTo("/terms")}
              className="footer__legal-link"
            >
              {footerContent.links.terms}
            </button>
            <span className="footer__legal-dot" aria-hidden="true" />
            <button
              onClick={() => navigateTo("/privacy")}
              className="footer__legal-link"
            >
              {footerContent.links.privacy}
            </button>
            <span className="footer__legal-dot" aria-hidden="true" />
            <button
              onClick={() => navigateTo("/sitemap")}
              className="footer__legal-link"
            >
              {footerContent.links.sitemap}
            </button>
            <span className="footer__legal-dot" aria-hidden="true" />
            <button
              onClick={() => navigateTo("/style-guide")}
              className="footer__legal-link"
            >
              {footerContent.links.styleGuide}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}