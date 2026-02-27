/**
 * Icons Music–Star (v15.0.0)
 * Bundler-safe: dangerouslySetInnerHTML bypasses jsxs transform for SVG children
 */
import type { IconProps } from './icon-base';

export function Music({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Newspaper({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" /><path d="M18 14h-8" /><path d="M15 18h-5" /><path d="M10 6h8v4h-8V6Z" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Paintbrush({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" /><path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" /><path d="M14.5 17.5 4.5 15" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Palette({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Pause({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<rect width="4" height="16" x="6" y="4" /><rect width="4" height="16" x="14" y="4" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Plane({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Play({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<polygon points="6 3 20 12 6 21 6 3" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Plus({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M5 12h14" /><path d="M12 5v14" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Pointer({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M22 14a8 8 0 0 1-8 8" /><path d="M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" /><path d="M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1" /><path d="M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10" /><path d="M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function RefreshCw({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Rocket({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Ruler({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z" /><path d="m15 5 4 4" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Scissors({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<circle cx="6" cy="6" r="3" /><path d="M8.12 8.12 12 12" /><path d="M20 4 8.12 15.88" /><circle cx="6" cy="18" r="3" /><path d="M14.8 14.8 20 20" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Search({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Share2({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Shield({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Shuffle({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H20" /><path d="m18 2 4 4-4 4" /><path d="M2 6h1.9c1.5 0 2.9.9 3.6 2.2" /><path d="M20 18h-3.9c-1.3 0-2.5-.6-3.3-1.7l-.6-.8" /><path d="m18 14 4 4-4 4" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function SlidersHorizontal({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<line x1="21" x2="14" y1="4" y2="4" /><line x1="10" x2="3" y1="4" y2="4" /><line x1="21" x2="12" y1="12" y2="12" /><line x1="8" x2="3" y1="12" y2="12" /><line x1="21" x2="16" y1="20" y2="20" /><line x1="12" x2="3" y1="20" y2="20" /><line x1="14" x2="14" y1="2" y2="6" /><line x1="8" x2="8" y1="10" y2="14" /><line x1="16" x2="16" y1="18" y2="22" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Sparkles({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}

export function Star({ color, strokeWidth: swp, size: sz, width: wp, height: hp, className: cn, style: st, onClick: oc }: IconProps) {
  const sc = color ? color : "currentColor";
  const sw = swp ? swp : 2;
  const base = sz ? sz : 24;
  const ww = wp ? wp : base;
  const hh = hp ? hp : base;
  const inner = '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />';
  const markup = { __html: inner };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke={sc} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" width={ww} height={hh} className={cn} style={st} onClick={oc} dangerouslySetInnerHTML={markup} />
  );
}
