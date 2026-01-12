/**
 * @fileoverview Hero section component with artistic image mosaic and brand messaging
 * Features overlapping images, floating gradient orbs, and responsive design
 * Supports light and dark mode themes
 *
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - Added dark mode support
 * @deprecated This component is legacy. Use HeroLayout instead.
 */

import React, { useState } from "react";
import { homepageHeroImages } from "../../data/mock/images/hero-images";
import { EnhancedLightbox } from "../ui/EnhancedLightbox";

// Import the actual images from hero-images data
const heroImages = homepageHeroImages.slice(0, 3);

export function HeroSection() {
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    images: Array<{ src: string; alt: string; }>;
    currentIndex: number;
    title?: string;
  }>({
    isOpen: false,
    images: [],
    currentIndex: 0,
    title: "",
  });

  const openLightbox = (
    imageSrc: string,
    imageAlt: string,
    title?: string,
  ) => {
    setLightbox({ 
      isOpen: true, 
      images: [{ src: imageSrc, alt: imageAlt }], 
      currentIndex: 0, 
      title 
    });
  };

  const closeLightbox = () => {
    setLightbox({
      isOpen: false,
      images: [],
      currentIndex: 0,
      title: "",
    });
  };

  return (
    <>
      <section className="relative bg-hero-section py-fluid-3xl px-fluid-md overflow-hidden transition-colors duration-300">
        {/* Floating gradient orbs - responsive sizes */}
        <div className="absolute top-10 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 bg-gradient-to-br from-pink-300 to-purple-400 dark:from-pink-500/30 dark:to-purple-500/30 rounded-full opacity-20 dark:opacity-40 animate-pulse"></div>
        <div className="absolute top-20 right-8 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-300 to-teal-400 dark:from-blue-500/30 dark:to-teal-500/30 rounded-full opacity-25 dark:opacity-40 animate-pulse delay-1000"></div>
        <div className="absolute bottom-16 left-1/4 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-yellow-300 to-pink-400 dark:from-yellow-500/30 dark:to-pink-500/30 rounded-full opacity-15 dark:opacity-30 animate-pulse delay-2000"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-fluid-2xl lg:gap-20">
            <div className="flex-1 max-w-2xl text-center lg:text-left">
              <p className="text-fluid-xl font-body font-medium text-gradient-pink-purple-blue mb-fluid-xl">
                Hi, I'm Ash Shaw.
              </p>
              <h1 className="text-hero-h1 font-heading font-bold text-gray-800 dark:text-purple-100 leading-tight mb-fluid-xl">
                Makeup that shines with{" "}
                <em className="italic text-gradient-pink-purple-blue">
                  colour
                </em>
                ,{" "}
                <em className="italic text-gradient-pink-purple-blue">
                  energy
                </em>
                , and{" "}
                <em className="italic text-gradient-blue-teal-green">
                  connection
                </em>
                .
              </h1>
              <p className="text-body-guideline font-body font-normal text-gray-600 dark:text-purple-200 leading-relaxed mb-fluid-xl">
                Makeup is my art, my joy, and my way of bringing
                people together. From festivals to the dance
                floor, I use colour and light to create looks
                that make people feel radiant, confident, and
                alive.
              </p>
              <p className="text-fluid-lg font-body font-medium text-gradient-pink-purple-blue">
                ✨ This portfolio is a growing collection of
                that journey.
              </p>
            </div>

            {/* Artistic Image Mosaic - Mobile optimized */}
            <div className="flex-1 max-w-2xl relative w-full">
              <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
                {/* Main large image - center - responsive positioning */}
                <div
                  className="absolute top-6 left-4 sm:top-12 sm:left-8 w-48 h-56 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-2xl bg-cover bg-center shadow-2xl transform rotate-3 z-20 border-4 border-white dark:border-purple-700 ring-4 ring-gradient-to-r ring-pink-200/50 dark:ring-pink-500/30 cursor-pointer transition-transform hover:scale-105"
                  style={{
                    backgroundImage: `url('${heroImages[1].src}')`,
                  }}
                  onClick={() =>
                    openLightbox(
                      heroImages[1].src,
                      "Thailand Festival Makeup",
                      "Eden Paradise",
                    )
                  }
                />

                {/* Second image - top right - responsive */}
                <div
                  className="absolute top-0 right-0 w-40 h-48 sm:w-64 sm:h-72 md:w-72 md:h-80 rounded-2xl bg-cover bg-center shadow-xl transform -rotate-6 z-10 border-4 border-white dark:border-purple-700 ring-4 ring-purple-200/50 dark:ring-purple-500/30 cursor-pointer transition-transform hover:scale-105"
                  style={{
                    backgroundImage: `url('${heroImages[0].src}')`,
                  }}
                  onClick={() =>
                    openLightbox(
                      heroImages[0].src,
                      "Thailand Festival Makeup",
                      "Lost Paradise",
                    )
                  }
                />

                {/* Third image - bottom left - responsive */}
                <div
                  className="absolute bottom-0 left-0 w-36 h-40 sm:w-60 sm:h-64 md:w-68 md:h-72 rounded-2xl bg-cover bg-center shadow-xl transform rotate-12 z-10 border-4 border-white dark:border-purple-700 ring-4 ring-blue-200/50 dark:ring-blue-500/30 cursor-pointer transition-transform hover:scale-105"
                  style={{
                    backgroundImage: `url('${heroImages[2].src}')`,
                  }}
                  onClick={() =>
                    openLightbox(
                      heroImages[2].src,
                      "Thailand Festival Makeup",
                      "Eden Paradise",
                    )
                  }
                />

                {/* Enhanced decorative elements - responsive */}
                <div className="absolute top-10 right-8 sm:top-20 sm:right-16 w-4 h-4 sm:w-8 sm:h-8 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full opacity-70 dark:opacity-50 animate-pulse z-30 shadow-lg"></div>
                <div className="absolute bottom-16 right-4 sm:bottom-32 sm:right-8 w-3 h-3 sm:w-6 sm:h-6 bg-gradient-to-br from-purple-400 to-violet-500 rounded-full opacity-70 dark:opacity-50 animate-pulse delay-300 z-30 shadow-lg"></div>
                <div className="absolute top-20 left-1 sm:top-40 sm:left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-70 dark:opacity-50 animate-pulse delay-700 z-30 shadow-lg"></div>
                <div className="absolute bottom-8 left-10 sm:bottom-16 sm:left-20 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-70 dark:opacity-50 animate-pulse delay-1000 z-30 shadow-lg"></div>

                {/* Enhanced gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-purple-100/20 to-blue-100/30 dark:from-purple-900/20 dark:via-purple-800/10 dark:to-purple-900/20 rounded-3xl pointer-events-none z-40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnhancedLightbox
        isOpen={lightbox.isOpen}
        onClose={closeLightbox}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        title={lightbox.title}
      />
    </>
  );
}