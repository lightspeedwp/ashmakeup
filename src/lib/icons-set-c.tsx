/**
 * Icons Home–Moon (v15.0.0)
 * Bundler-safe: dangerouslySetInnerHTML bypasses jsxs transform for SVG children
 */
import type { IconProps } from './icon-base';

export function Home({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Image({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<rect width="18" height="18" x="3" y="3" rx="2" ry="2" /><circle cx="9" cy="9" r="2" /><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Info({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Layers({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" /><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" /><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function LayoutGrid({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<rect width="7" height="7" x="3" y="3" rx="1" /><rect width="7" height="7" x="14" y="3" rx="1" /><rect width="7" height="7" x="14" y="14" rx="1" /><rect width="7" height="7" x="3" y="14" rx="1" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Leaf({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M11 20A7 7 0 0 1 9.8 6.9C15.5 4.9 20 1 20 1s.7 11.5-8 18.4" /><path d="M10.7 10.7c2.3-2.3 5.9-2.7 6.3-2.7" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Lightbulb({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6" /><path d="M10 22h4" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Link2({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M9 17H7A5 5 0 0 1 7 7h2" /><path d="M15 7h2a5 5 0 1 1 0 10h-2" /><line x1="8" x2="16" y1="12" y2="12" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function List({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<line x1="8" x2="21" y1="6" y2="6" /><line x1="8" x2="21" y1="12" y2="12" /><line x1="8" x2="21" y1="18" y2="18" /><line x1="3" x2="3.01" y1="6" y2="6" /><line x1="3" x2="3.01" y1="12" y2="12" /><line x1="3" x2="3.01" y1="18" y2="18" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Lock({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Mail({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function MapPin({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Maximize({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Menu({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function MessageCircle({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function MessageSquare({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Mic({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" x2="12" y1="19" y2="22" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Minimize({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M8 3v3a2 2 0 0 1-2 2H3" /><path d="M21 8h-3a2 2 0 0 1-2-2V3" /><path d="M3 16h3a2 2 0 0 1 2 2v3" /><path d="M16 21v-3a2 2 0 0 1 2-2h3" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Minus({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M5 12h14" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Moon({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}
