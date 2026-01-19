/**
 * Testimonials Section Component
 * 
 * Displays client testimonials in a custom carousel slider
 * Shows exactly 2 testimonials at a time
 * 
 * @component
 * @returns {JSX.Element} Testimonials section with reviews slider
 */

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/data/mock/testimonials';

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Fixed to always show 2 testimonials at a time
  const slidesPerView = 2;
  const maxIndex = Math.max(0, testimonials.length - slidesPerView);
  
  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };
  
  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  
  return (
    <section className="py-section-md px-section-md bg-testimonials-section transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-fluid-2xl">
          <h2 className="text-section-h2 font-heading font-bold text-gradient-pink-purple-blue text-testimonials-heading mb-fluid-sm">
            What Clients Say
          </h2>
          <p className="text-body-guideline font-body max-w-2xl mx-auto text-slider-card-content">
            Real experiences from real people who trusted me with their special moments
          </p>
        </div>
        
        {/* Testimonials Slider */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 bg-gradient-pink-purple-blue p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus-ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 bg-gradient-pink-purple-blue p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus-ring-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          
          {/* Slider Container */}
          <div className="overflow-hidden px-8 md:px-16">
            <div 
              className="flex transition-transform duration-500 ease-out gap-6 testimonial-slider-transform"
              style={{ '--testimonial-index': currentIndex } as React.CSSProperties}
            >
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="flex-shrink-0 testimonial-slide-width"
                >
                  <div className="bg-slider-card backdrop-blur-sm rounded-xl p-fluid-lg border border-slider-card hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    {/* Text */}
                    <p className="text-base font-body text-slider-card-content italic mb-fluid-md flex-grow">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Client */}
                    <div className="border-t border-slider-card-divider pt-fluid-sm mt-auto">
                      <p className="font-heading font-bold text-slider-card-heading">
                        {testimonial.name}
                      </p>
                      {testimonial.event && (
                        <p className="text-sm font-body text-slider-card-subtext">
                          {testimonial.event}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Navigation */}
          <div className="flex items-center justify-center gap-2 mt-fluid-lg">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-pink-purple-blue w-8'
                    : 'bg-slider-dot-inactive w-2'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}