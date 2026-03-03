/**
 * @fileoverview Timeline component for chronological story layouts
 *
 * Displays events along a vertical timeline with neon-glowing dots,
 * optional Lucide icons, and color accent system. Supports vertical
 * (default) and horizontal variants.
 *
 * @component Timeline
 * @version 1.0.0
 *
 * @example
 * <Timeline
 *   events={[
 *     { year: '2019', title: 'UV Paint', description: 'The final evolution' },
 *   ]}
 *   colorAccent="pink"
 * />
 *
 * @accessibility
 * - Semantic list structure for screen readers
 * - Descriptive aria-label on the wrapper
 * - Keyboard navigable (natural tab order)
 */

import React from 'react';

/**
 * Single timeline event
 */
interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

/**
 * Props for the Timeline component
 */
interface TimelineProps {
  /** Array of events to display */
  events: TimelineEvent[];
  /** Layout variant */
  variant?: 'vertical' | 'horizontal';
  /** Neon color accent for dots and line */
  colorAccent?: 'pink' | 'green' | 'blue' | 'purple' | 'yellow' | 'orange' | 'red' | 'cyan';
  /** Accessible label for the timeline */
  ariaLabel?: string;
}

/**
 * Timeline component — vertical or horizontal chronological layout
 */
export function Timeline(props: TimelineProps) {
  var events = props.events;
  var variant = props.variant ? props.variant : 'vertical';
  var colorAccent = props.colorAccent ? props.colorAccent : 'pink';
  var ariaLabel = props.ariaLabel ? props.ariaLabel : 'Timeline';

  var accentClass = 'timeline--' + colorAccent;
  var variantClass = variant === 'horizontal' ? 'timeline--horizontal' : '';
  var rootClass = ['timeline', accentClass, variantClass].filter(Boolean).join(' ');

  return (
    <div className={rootClass} role="list" aria-label={ariaLabel}>
      {variant === 'vertical' && (
        <div className="timeline__line" aria-hidden="true"></div>
      )}
      {events.map(function (event, index) {
        return (
          <div className="timeline__event" role="listitem" key={event.year + '-' + index}>
            <div className="timeline__dot" aria-hidden="true">
              {event.icon && (
                <span className="timeline__dot-icon">{event.icon}</span>
              )}
            </div>
            <div className="timeline__year">{event.year}</div>
            <div className="timeline__title">{event.title}</div>
            <div className="timeline__description">{event.description}</div>
          </div>
        );
      })}
    </div>
  );
}