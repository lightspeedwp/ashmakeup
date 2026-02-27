/**
 * @fileoverview Icon Library — searchable grid of all Lucide icons used across the site
 *
 * Uses a curated static map instead of `import *` to avoid loading the entire
 * lucide-react bundle (1 000+ icons), which crashes the esm.sh CDN runtime.
 *
 * @component IconLibraryPage
 * @version 2.0.0
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import {
  Home, ArrowLeft, ArrowRight, ArrowUp,
  ChevronLeft, ChevronRight, ChevronDown, ExternalLink, Menu, X,
  BookOpen, FileText, Newspaper, FolderOpen, Tag, Calendar, Clock, Layers,
  Play, Pause, Image, Mic, Music, ZoomIn, ZoomOut, LayoutGrid,
  Share2, Download, Copy, Heart, Eye, Plus, Minus, Check, Link2, Search,
  Shield, Zap, Sun, Moon, Wifi, WifiOff, CircleHelp, MessageSquare, TriangleAlert,
  Camera, MessageCircle,
  Palette, Paintbrush, Sparkles, Type, Ruler, Circle, Cloud, Pointer, Lightbulb,
  MapPin, Rocket, Brain, User, Mail, Activity,
} from '../../../lib/icons';
import { iconLibraryUI } from '../../../data/mock/ui/icon-library';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/icon-library.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

type IconSize = 16 | 24 | 32 | 48;

const SIZE_OPTIONS: { label: string; value: IconSize }[] = [
  { label: 'S', value: 16 },
  { label: 'M', value: 24 },
  { label: 'L', value: 32 },
  { label: 'XL', value: 48 },
];

/**
 * Curated icon map — only the icons actually referenced in the icon-library
 * mock data. Avoids `import * as LucideIcons` which crashes esm.sh.
 */
const ICON_MAP: Record<string, React.ElementType> = {
  Home, ArrowLeft, ArrowRight, ArrowUp,
  ChevronLeft, ChevronRight, ChevronDown, ExternalLink, Menu, X,
  BookOpen, FileText, Newspaper, FolderOpen, Tag, Calendar, Clock, Layers,
  Play, Pause, Image, Mic, Music, ZoomIn, ZoomOut, Grid: LayoutGrid, LayoutGrid,
  Share2, Download, Copy, Heart, Eye, Plus, Minus, Check, Link2, Search,
  Shield, Gauge: Activity, Zap, Sun, Moon, Wifi, WifiOff, HelpCircle: CircleHelp, CircleHelp, MessageSquare, AlertTriangle: TriangleAlert, TriangleAlert,
  Instagram: Camera, Camera, Facebook: Heart, MessageCircle,
  Palette, Paintbrush, Sparkles, Wrench: Shield, Type, Ruler, Circle, Cloudy: Cloud, Cloud, MousePointerClick: Pointer, Pointer, Lightbulb,
  MapPin, Compass: MapPin, Building2: Lightbulb, Scale: Shield, Rocket, Brain, Flashlight: Zap, User, Mail, Activity,
};

/** Resolve a Lucide icon component by name */
function getIcon(name: string): React.ElementType | null {
  return ICON_MAP[name] || null;
}

export function IconLibraryPage() {
  const [search, setSearch] = useState('');
  const [size, setSize] = useState<IconSize>(24);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setSEO(devToolsSEO.icons);
  }, []);

  /** Filter categories & icons by search query */
  const filteredCategories = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return iconLibraryUI.categories;

    return iconLibraryUI.categories
      .map((cat) => ({
        ...cat,
        icons: cat.icons.filter(
          (icon) =>
            icon.name.toLowerCase().includes(q) ||
            icon.usage.some((u) => u.toLowerCase().includes(q))
        ),
      }))
      .filter((cat) => cat.icons.length > 0);
  }, [search]);

  const totalFiltered = useMemo(
    () => filteredCategories.reduce((sum, cat) => sum + cat.icons.length, 0),
    [filteredCategories]
  );

  const totalAll = useMemo(
    () => iconLibraryUI.categories.reduce((sum, cat) => sum + cat.icons.length, 0),
    []
  );

  const copyImport = useCallback(
    async (name: string) => {
      const statement = `import { ${name} } from '@/lib/icons';`;
      try {
        await navigator.clipboard.writeText(statement);
        setCopied(name);
        setTimeout(() => setCopied(null), 1500);
      } catch {
        // Dev logging removed — import.meta.env.DEV crashes this bundler
      }
    },
    []
  );

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page bg-atomic-noise">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={iconLibraryUI.breadcrumbs} centered />
          <span className="specimen-page__hero-badge">{iconLibraryUI.hero.badge}</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {iconLibraryUI.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {iconLibraryUI.hero.description}
          </p>
        </div>
      </header>

      {/* Controls */}
      <div className="icon-lib__controls">
        <input
          type="search"
          className="icon-lib__search"
          placeholder="Search icons by name or usage..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search icons"
        />
        <div className="icon-lib__size-toggles" role="group" aria-label="Icon size">
          {SIZE_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              type="button"
              className={`icon-lib__size-btn${size === opt.value ? ' icon-lib__size-btn--active' : ''}`}
              onClick={() => setSize(opt.value)}
              aria-pressed={size === opt.value}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Result count */}
      <p className="icon-lib__count">
        Showing <span className="icon-lib__count-num">{totalFiltered}</span> of{' '}
        {totalAll} icons
        {search && ` matching "${search}"`}
      </p>

      {/* Categories */}
      {filteredCategories.length === 0 ? (
        <p className="icon-lib__empty text-body-p">
          No icons found matching &ldquo;{search}&rdquo;. Try a different search term.
        </p>
      ) : (
        filteredCategories.map((cat) => (
          <section
            key={cat.id}
            className="specimen-section"
            aria-labelledby={`icon-cat-${cat.id}`}
          >
            <div className="specimen-section__inner">
              <h2
                id={`icon-cat-${cat.id}`}
                className="specimen-section__title text-card-h3"
              >
                {cat.title}
                <span className="specimen-card__meta"> ({cat.icons.length})</span>
              </h2>

              <div className="icon-lib__grid">
                {cat.icons.map((icon) => {
                  const Icon = getIcon(icon.name);
                  if (!Icon) return null;

                  return (
                    <div key={icon.name} className="icon-lib__card">
                      <Icon
                        className="icon-lib__card-icon"
                        style={{ width: size, height: size }}
                        aria-hidden="true"
                      />
                      <span className="icon-lib__card-name">{icon.name}</span>
                      <span className="icon-lib__card-usage">
                        {icon.usage.join(', ')}
                      </span>
                      <button
                        type="button"
                        className="icon-lib__copy-btn"
                        onClick={() => copyImport(icon.name)}
                        aria-label={`Copy import for ${icon.name}`}
                      >
                        {copied === icon.name ? 'Copied!' : 'Copy Import'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        ))
      )}
    </main>
  );
}