/**
 * @fileoverview Icon shared types (v26.0.0)
 *
 * @version 26.0.0 - Types only, no factory
 */

import type { CSSProperties, MouseEventHandler } from 'react';

export interface IconProps {
  size?: number | string;
  width?: number | string;
  height?: number | string;
  strokeWidth?: number | string;
  className?: string;
  style?: CSSProperties;
  onClick?: MouseEventHandler<SVGSVGElement>;
  onMouseEnter?: MouseEventHandler<SVGSVGElement>;
  onMouseLeave?: MouseEventHandler<SVGSVGElement>;
  id?: string;
  role?: string;
  tabIndex?: number;
  ariaHidden?: boolean | 'true' | 'false';
  ariaLabel?: string;
  ariaLabelledby?: string;
  dataTestid?: string;
  color?: string;
}

export type LucideIcon = (props: IconProps) => JSX.Element;
