/**
 * @fileoverview Why I Do Makeup section using ThreeColumnLayout pattern
 * Displays the philosophical reasons for pursuing makeup artistry with interactive cards
 * Supports light and dark mode themes
 *
 * @author Ash Shaw Portfolio Team
 * @version 4.0.0 - Added dark mode support
 */

import React from "react";
import { ThreeColumnLayout } from "./ThreeColumnLayout";
import {
  ShineIcon,
  JoyIcon,
  GrowthIcon,
} from "../common/ColorfulIcons";
import { whyReasons } from "../../data/mock/pages/home";
import { BlurredCircles } from "../ui/BlurredCircles";

// Map icon string IDs to icon components
const iconMap = {
  shine: ShineIcon,
  joy: JoyIcon,
  growth: GrowthIcon,
} as const;

/**
 * Why I Do Makeup section featuring three core messaging pillars with custom icons
 *
 * Content Strategy:
 * - Three philosophical reasons for pursuing makeup artistry (from mock data)
 * - Each card represents a core value: service to others, personal joy, continuous growth
 * - Custom animated icons reinforce messaging through visual metaphors
 *
 * Visual Design:
 * - Purple to pink to orange gradient background creating warmth
 * - Large background blur elements for subtle depth
 * - Responsive card grid (single column mobile, three columns desktop)
 * - Consistent card styling with hover effects and shadows
 *
 * Icon Integration:
 * - ShineIcon: Radiant star representing making others feel special
 * - JoyIcon: Paint palette and heart showing personal fulfillment
 * - GrowthIcon: Flowering plant symbolizing continuous learning
 *
 * @param {Object} props - Component properties
 * @param {Function} props.setCurrentPage - Navigation function to switch to About page
 *
 * @returns {JSX.Element} Why makeup section with icon cards and call-to-action
 *
 * @design
 * - Cards use `gap-fluid-lg` spacing per Guidelines.md specifications
 * - Background decorative elements positioned at 1/4 and 3/4 viewport positions
 * - Typography hierarchy maintains accessibility with proper contrast ratios
 */
export function WhySection({
  setCurrentPage,
}: {
  setCurrentPage: (page: string) => void;
}) {
  const decorativeElements = <BlurredCircles variant="why" />;

  const headerContent = (
    <div className="why-section-header">
      <h2
        id="why-section"
        className="text-section-h2 why-section-title"
      >
        Why I Do Makeup
      </h2>
      <p className="text-fluid-lg why-section-subtitle">
        The heart of my creative journey
      </p>
    </div>
  );

  const footerContent = (
    <div className="text-center">
      <button
        onClick={() => setCurrentPage("about")}
        className="w-full sm:w-auto justify-center text-center bg-gradient-pink-purple-blue text-white px-button py-button rounded-lg font-body font-medium text-[32px] shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-pink-200 dark:focus:ring-purple-500/50 focus:ring-opacity-50"
        aria-label="Navigate to About page to read full story"
      >
        Read My Full Story
      </button>
    </div>
  );

  return (
    <ThreeColumnLayout
      id="why-section"
      gap="lg"
      mobileColumns={1}
      tabletColumns={2}
      decorativeElements={decorativeElements}
      header={headerContent}
      footer={footerContent}
    >
      {whyReasons.map((reason, index) => {
        const IconComponent = iconMap[reason.icon];
        return (
          <div
            key={index}
            className="why-card-container group bg-why-card backdrop-blur-sm rounded-why-card shadow-why-card hover:shadow-xl border border-why-card"
            onClick={() => setCurrentPage("about")}
          >
            <div className="why-card-icon-container">
              <IconComponent
                size="lg"
                className="why-card-icon icon-why-card"
              />
            </div>
            <h3 className="why-card-title-text font-heading font-semibold text-why-card-title">
              {reason.title}
            </h3>
            <p className="why-card-description-text font-body font-normal text-why-card-description">
              {reason.description}
            </p>
          </div>
        );
      })}
    </ThreeColumnLayout>
  );
}