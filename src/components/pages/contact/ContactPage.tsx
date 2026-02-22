/**
 * @fileoverview Contact page component for Ash Shaw Makeup Portfolio
 * 
 * Dedicated contact page featuring Typeform embed, social links, and about information
 * with comprehensive dark mode support and WCAG AAA accessibility compliance.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.3.0 - Typeform Integration
 * @since 2025-01-03
 */

import React, { useEffect } from "react";
import { TypeformEmbed } from "../../common/TypeformEmbed";
import { SocialLinks } from "../../common/SocialLinks";
import { Breadcrumbs } from "../../ui/Breadcrumbs";
import { FaqSection } from "../../sections/FaqSection";
import { OptimizedImage } from "../../ui/OptimizedImage";
import { contactUI } from "../../../data/mock/ui/contact";
import { contactBreadcrumbs } from "../../../data/mock/ui/breadcrumbs";
import contactGraphic from "figma:asset/6095d8818a83e64a063161f9df091d561fde7105.png";
import "../../../styles/blocks/contact-page.css";

import { setSEO } from '../../../utils/seo';
import { pageSEO } from '../../../data/mock/seo';

/**
 * ContactPage - Dedicated contact page with form and social links
 * Uses the shared global Footer from RootLayout (no inline footer)
 */
export function ContactPage() {
  useEffect(() => {
    setSEO(pageSEO.contact);
  }, []);

  return (
    <div className="contact-page-container bg-atomic-noise">
      {/* Background decoration */}
      <div className="contact-decoration-1" aria-hidden="true" />
      <div className="contact-decoration-2" aria-hidden="true" />

      <main
        id="main-content"
        className="contact-page-main"
      >
        {/* Page Header */}
        <div className="contact-page-header">
          <Breadcrumbs items={contactBreadcrumbs} centered />
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-md">
            {contactUI.header.title}
          </h1>
          <p className="text-body-guideline text-contact-body">
            {contactUI.header.description}
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="contact-page-grid">
          {/* Left Column - About, Social, FAQ */}
          <div className="contact-page-about">
            <h2 className="text-section-h2 text-gradient-blue-teal-green mb-fluid-sm">
              {contactUI.about.title}
            </h2>
            <p className="text-body-guideline text-contact-body mb-fluid-sm">
              {contactUI.about.description}
            </p>
            <p className="contact-page-quote text-gradient-pink-purple-blue">
              {contactUI.about.quote}
            </p>

            {/* Social Links */}
            <div>
              <h3 className="contact-page-connect-title text-contact-heading">
                {contactUI.connect.title}
              </h3>
              <SocialLinks className="contact-page-social-links" />
            </div>

            {/* FAQ Section */}
            <div className="contact-page-faq-inline">
              <FaqSection pageId="contact" />
            </div>
          </div>

          {/* Right Column - Contact Form & Graphic */}
          <div className="contact-page-form">
            <h2 className="text-section-h2 text-gradient-gold-peach-coral mb-fluid-sm">
              {contactUI.form.title}
            </h2>
            <TypeformEmbed 
              formId="01KGP965M86E2TCRWEVS0WJX57"
              height="600px"
            />
            
            {/* Contact Graphic */}
            <div className="contact-page-graphic">
              <OptimizedImage 
                src={contactGraphic} 
                alt={contactUI.graphic.alt}
                className="contact-page-graphic-image"
                preset="content"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}