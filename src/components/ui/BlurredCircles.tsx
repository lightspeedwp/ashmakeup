/**
 * @fileoverview Decorative blurred circles component for visual enhancement
 * 
 * Creates colorful blurred circle elements for background decoration
 * matching the Ash Shaw brand aesthetic with pink, purple, and blue tones.
 * 
 * Features:
 * - Multiple preset configurations for different sections
 * - Customizable positions, sizes, and colors
 * - Optimized for performance with CSS blur filters
 * - Fully accessible (hidden from screen readers)
 * - Responsive sizing with fluid scales
 * 
 * @component
 * @example
 * // Preset configuration
 * <BlurredCircles variant="hero" />
 * 
 * // Custom configuration
 * <BlurredCircles
 *   circles={[
 *     { color: 'pink', size: 'lg', position: 'top-left', opacity: 60 },
 *     { color: 'purple', size: 'md', position: 'bottom-right', opacity: 40 }
 *   ]}
 * />
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React from 'react';

/**
 * Circle configuration interface
 */
interface Circle {
  /** Circle color variant */
  color: 'pink' | 'purple' | 'blue' | 'teal' | 'gold' | 'coral' | 'green' | 'pink-purple' | 'blue-teal' | 'yellow-pink' | 'yellow-cream' | 'peach-coral' | 'mint-green' | 'teal-cyan' | 'rose-pink' | 'purple-lavender';
  /** Circle size */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** Position preset or custom positioning */
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'top-center' | 'bottom-center';
  /** Opacity percentage (0-100) */
  opacity?: number;
  /** Custom positioning overrides */
  customPosition?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
}

/**
 * Component props interface
 */
interface BlurredCirclesProps {
  /** Preset variant for common layouts */
  variant?: 'hero' | 'section' | 'minimal' | 'vibrant' | 'festival' | 'nightlife' | 'why' | 'featured' | 'blog';
  /** Custom circle configurations (overrides variant) */
  circles?: Circle[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * Preset circle configurations for different section types
 */
const presets: Record<string, Circle[]> = {
  hero: [
    // Top left - Pink to purple gradient
    { color: 'pink-purple', size: 'xl', position: 'top-left', opacity: 24 },
    // Top right - Blue to teal gradient
    { color: 'blue-teal', size: 'lg', position: 'top-right', opacity: 47 },
    // Bottom left - Yellow to pink gradient
    { color: 'yellow-pink', size: 'xl', position: 'bottom-left', opacity: 20 },
  ],
  why: [
    // Journey section warm tones
    { color: 'yellow-cream', size: 'xl', position: 'top-left', opacity: 30 },
    { color: 'peach-coral', size: 'lg', position: 'bottom-right', opacity: 25 },
  ],
  featured: [
    // Festival/fresh mint tones
    { color: 'mint-green', size: 'xl', position: 'top-right', opacity: 35 },
    { color: 'teal-cyan', size: 'lg', position: 'bottom-left', opacity: 30 },
  ],
  blog: [
    // Professional soft pink tones
    { color: 'rose-pink', size: 'lg', position: 'top-left', opacity: 28 },
    { color: 'purple-lavender', size: 'md', position: 'bottom-right', opacity: 32 },
  ],
  section: [
    { color: 'purple-lavender', size: 'lg', position: 'top-right', opacity: 30 },
    { color: 'pink-purple', size: 'md', position: 'bottom-left', opacity: 40 },
  ],
  minimal: [
    { color: 'blue-teal', size: 'sm', position: 'top-right', opacity: 20 },
  ],
  vibrant: [
    { color: 'pink-purple', size: '2xl', position: 'top-left', opacity: 70 },
    { color: 'purple-lavender', size: 'xl', position: 'top-right', opacity: 60 },
    { color: 'blue-teal', size: 'lg', position: 'bottom-left', opacity: 50 },
    { color: 'teal-cyan', size: 'md', position: 'bottom-right', opacity: 40 },
  ],
  festival: [
    { color: 'mint-green', size: 'xl', position: 'top-left', opacity: 50 },
    { color: 'teal-cyan', size: 'lg', position: 'top-right', opacity: 40 },
    { color: 'blue-teal', size: 'md', position: 'bottom-center', opacity: 30 },
  ],
  nightlife: [
    { color: 'purple-lavender', size: 'xl', position: 'top-right', opacity: 60 },
    { color: 'pink-purple', size: 'lg', position: 'bottom-left', opacity: 50 },
    { color: 'peach-coral', size: 'md', position: 'bottom-right', opacity: 40 },
  ],
};

/**
 * Color classes mapping with exact Figma gradient values
 */
const colorClasses: Record<Circle['color'], string> = {
  // Single colors (legacy support)
  pink: 'bg-pink-400',
  purple: 'bg-purple-500',
  blue: 'bg-blue-400',
  teal: 'bg-teal-400',
  gold: 'bg-yellow-400',
  coral: 'bg-orange-400',
  green: 'bg-green-400',
  
  // Figma-accurate gradient combinations
  'pink-purple': 'bg-gradient-to-br from-[#fda5d5] to-[#c27aff]',
  'blue-teal': 'bg-gradient-to-br from-[#8ec5ff] to-[#00d5be]',
  'yellow-pink': 'bg-gradient-to-br from-[#ffdf20] to-[#fb64b6]',
  'yellow-cream': 'bg-gradient-to-br from-[#ffedc2] to-[#fff9c2]',
  'peach-coral': 'bg-gradient-to-br from-[#ff9966] to-[#ff5e62]',
  'mint-green': 'bg-gradient-to-br from-[#dcfce7] to-[#cbfbf1]',
  'teal-cyan': 'bg-gradient-to-br from-[#20c997] to-[#00d5be]',
  'rose-pink': 'bg-gradient-to-br from-[#ffe4e6] to-[#fce7f3]',
  'purple-lavender': 'bg-gradient-to-br from-[#f3e8ff] to-[#ede9fe]',
};

/**
 * Size classes mapping (responsive)
 */
const sizeClasses: Record<Circle['size'], string> = {
  xs: 'w-32 h-32 md:w-40 md:h-40',
  sm: 'w-40 h-40 md:w-56 md:h-56',
  md: 'w-56 h-56 md:w-80 md:h-80',
  lg: 'w-80 h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]',
  xl: 'w-96 h-96 md:w-[28rem] md:h-[28rem] lg:w-[36rem] lg:h-[36rem]',
  '2xl': 'w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem] lg:w-[44rem] lg:h-[44rem]',
};

/**
 * Position classes mapping
 */
const positionClasses: Record<Circle['position'], string> = {
  'top-left': 'top-0 left-0 -translate-x-1/2 -translate-y-1/2',
  'top-right': 'top-0 right-0 translate-x-1/2 -translate-y-1/2',
  'bottom-left': 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
  'bottom-right': 'bottom-0 right-0 translate-x-1/2 translate-y-1/2',
  'center': 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'top-center': 'top-0 left-1/2 -translate-x-1/2 -translate-y-1/2',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2',
};

/**
 * BlurredCircles - Decorative background circles with blur effect
 * 
 * @param {BlurredCirclesProps} props - Component properties
 * @returns {JSX.Element} Rendered decorative circles
 */
export function BlurredCircles({
  variant = 'hero',
  circles,
  className = '',
}: BlurredCirclesProps): JSX.Element {
  // Use custom circles or preset variant
  const circleConfig = circles || presets[variant] || presets.hero;

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
      role="presentation"
    >
      {circleConfig.map((circle, index) => {
        // Calculate opacity as decimal (0-1) for inline style
        const opacityValue = circle.opacity ? circle.opacity / 100 : 0.5;
        
        return (
          <div
            key={`blur-circle-${index}`}
            className={`
              absolute rounded-full
              ${colorClasses[circle.color]}
              ${sizeClasses[circle.size]}
              ${positionClasses[circle.position]}
              blur-[100px]
              transition-all duration-1000
            `}
            style={{
              opacity: opacityValue,
              ...circle.customPosition
            }}
          />
        );
      })}
    </div>
  );
}

/**
 * Export preset configurations for reference
 */
export { presets as blurredCirclePresets };
export type { Circle, BlurredCirclesProps };
