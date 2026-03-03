/**
 * @fileoverview Phosphor Icons dev tools page — migration comparison tool
 *
 * Displays a searchable grid showing every Lucide icon in the project alongside
 * its Phosphor equivalent name, migration status, and import statement.
 * Lucide icons render live for visual reference. Phosphor names are shown
 * as text — actual Phosphor rendering happens per-file during Phase 2 migration.
 *
 * @component PhosphorIconsPage
 * @version 1.1.0
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';

/* ── Lucide icons for comparison (known working) ── */
import {
  Activity, ArrowLeft, ArrowRight,
  ArrowUp, Book, BookOpen, Bookmark,
  Brain, BusFront, Calendar, Camera,
  CarFront, Check, ChevronDown,
  ChevronLeft, ChevronRight, ChevronUp,
  Circle, Clock, Cloud, Code, Copy,
  Download, Ellipsis, ExternalLink,
  Eye, FileCode, FileText, FolderOpen,
  GraduationCap, Headphones, Heart,
  Home, Image, Info, Layers,
  LayoutGrid, Leaf, Lightbulb, Link2,
  List, Lock, Mail, MapPin, Maximize,
  Menu, MessageCircle, MessageSquare,
  Mic, Minimize, Minus, Moon, Music,
  Newspaper, Paintbrush, Palette,
  Pause, Plane, Play, Plus, Pointer,
  RefreshCw, Rocket, Ruler, Scissors,
  Search, Share2, Shield, Shuffle,
  SlidersHorizontal, Sparkles, Star, Sun,
  Tag, ThumbsUp, TrainFront, Trash2,
  TriangleAlert, Type, User,
  Volume2, VolumeX, Wifi, WifiOff,
  X, Zap, ZoomIn, ZoomOut,
} from '../../../lib/icons';
import { CircleCheck, CircleHelp, CirclePlay, CircleX } from '../../../lib/icons';

/* ── Data ── */
import {
  phosphorIconData,
  phosphorIconsPageUI,
  phosphorWeights,
  phosphorSizeOptions,
  phosphorCategories,
} from '../../../data/mock/ui/phosphor-icons';
import type { PhosphorIconEntry } from '../../../data/mock/ui/phosphor-icons';

/* ── UI ── */
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

/* ── Styles ── */
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/phosphor-icons-page.css';

type PhosphorWeight = 'thin' | 'light' | 'regular' | 'bold' | 'fill' | 'duotone';

/** Map Lucide component names to imported components for live rendering */
var LUCIDE_MAP: Record<string, React.ElementType> = {
  Activity: Activity, Plane: Plane, ArrowLeft: ArrowLeft, ArrowRight: ArrowRight,
  ExternalLink: ExternalLink, ArrowUp: ArrowUp, RefreshCw: RefreshCw,
  Minimize: Minimize, Maximize: Maximize,
  Book: Book, BookOpen: BookOpen, Bookmark: Bookmark, Brain: Brain,
  BusFront: BusFront, Calendar: Calendar, Camera: Camera, CarFront: CarFront,
  ChevronDown: ChevronDown, ChevronLeft: ChevronLeft, ChevronRight: ChevronRight,
  ChevronUp: ChevronUp,
  MessageSquare: MessageSquare, MessageCircle: MessageCircle,
  Check: Check, CircleCheck: CircleCheck, Circle: Circle, Clock: Clock,
  Cloud: Cloud, Code: Code, Copy: Copy,
  Download: Download, Ellipsis: Ellipsis, Eye: Eye,
  FileCode: FileCode, FileText: FileText, FolderOpen: FolderOpen,
  GraduationCap: GraduationCap, Headphones: Headphones, Heart: Heart,
  Home: Home, Image: Image, Info: Info, Layers: Layers, LayoutGrid: LayoutGrid,
  Leaf: Leaf, Lightbulb: Lightbulb, Link2: Link2, List: List, Lock: Lock,
  Mail: Mail, MapPin: MapPin, Menu: Menu, Mic: Mic,
  Minus: Minus, Moon: Moon, Music: Music, Newspaper: Newspaper,
  Paintbrush: Paintbrush, Palette: Palette, Pause: Pause, Play: Play,
  Plus: Plus, Pointer: Pointer,
  CircleHelp: CircleHelp, CirclePlay: CirclePlay, CircleX: CircleX,
  Rocket: Rocket, Ruler: Ruler, Scissors: Scissors,
  Search: Search, Share2: Share2, Shield: Shield, Shuffle: Shuffle,
  SlidersHorizontal: SlidersHorizontal, Sparkles: Sparkles, Star: Star, Sun: Sun,
  Tag: Tag, ThumbsUp: ThumbsUp, TrainFront: TrainFront, Trash2: Trash2,
  TriangleAlert: TriangleAlert, Type: Type, User: User,
  Volume2: Volume2, VolumeX: VolumeX, Wifi: Wifi, WifiOff: WifiOff,
  X: X, Zap: Zap, ZoomIn: ZoomIn, ZoomOut: ZoomOut,
};

export function PhosphorIconsPage() {
  var searchInit = '';
  var [search, setSearch] = useState(searchInit);
  var [selectedWeight, setSelectedWeight] = useState('regular' as PhosphorWeight);
  var [iconSize, setIconSize] = useState(24);
  var [category, setCategory] = useState('all');
  var [darkPreview, setDarkPreview] = useState(false);
  var copiedInit: string | null = null;
  var [copied, setCopied] = useState(copiedInit);

  useEffect(function initSEO() {
    if (devToolsSEO.phosphorIcons) {
      setSEO(devToolsSEO.phosphorIcons);
    }
  }, []);

  /* ── Derived stats ── */
  var stats = useMemo(function computeStats() {
    var total = phosphorIconData.length;
    var same = 0;
    var renamed = 0;
    var migrated = 0;
    for (var i = 0; i < phosphorIconData.length; i++) {
      if (phosphorIconData[i].status === 'same') same = same + 1;
      if (phosphorIconData[i].status === 'renamed') renamed = renamed + 1;
      if (phosphorIconData[i].migrated) migrated = migrated + 1;
    }
    return { total: total, same: same, renamed: renamed, migrated: migrated };
  }, []);

  /* ── Filtered icons ── */
  var filtered = useMemo(function filterIcons() {
    var q = search.trim().toLowerCase();
    var result: PhosphorIconEntry[] = [];
    for (var i = 0; i < phosphorIconData.length; i++) {
      var entry = phosphorIconData[i];
      var matchesCategory = category === 'all' || entry.category === category;
      if (!matchesCategory) continue;
      if (q) {
        var matchesName =
          entry.phosphorName.toLowerCase().indexOf(q) !== -1 ||
          (entry.lucideName != null && entry.lucideName.toLowerCase().indexOf(q) !== -1) ||
          entry.notes.toLowerCase().indexOf(q) !== -1;
        if (!matchesName) continue;
      }
      result.push(entry);
    }
    return result;
  }, [search, category]);

  /* ── Current weight info ── */
  var currentWeight = useMemo(function findWeight() {
    for (var i = 0; i < phosphorWeights.length; i++) {
      if (phosphorWeights[i].value === selectedWeight) return phosphorWeights[i];
    }
    return phosphorWeights[2];
  }, [selectedWeight]);

  /* ── Copy handler ── */
  var copyImport = useCallback(function handleCopy(phosphorName: string) {
    var statement = "import { " + phosphorName + " } from '@phosphor-icons/react';";
    try {
      navigator.clipboard.writeText(statement);
      setCopied(phosphorName);
      setTimeout(function clearCopied() { setCopied(null); }, 1500);
    } catch (e) {
      // Clipboard API not available
    }
  }, []);

  /* ── Search handler ── */
  function handleSearchChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page bg-atomic-noise">
      {/* ── Hero ── */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={phosphorIconsPageUI.breadcrumbs} centered />
          <span className="specimen-page__hero-badge">{phosphorIconsPageUI.hero.badge}</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {phosphorIconsPageUI.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {phosphorIconsPageUI.hero.description}
          </p>
        </div>
      </header>

      {/* ── Stats bar ── */}
      <div className="ph-page__stats">
        <div className="ph-page__stat">
          <span className="ph-page__stat-value ph-page__stat-value--total">{stats.total}</span>
          <span>total icons</span>
        </div>
        <div className="ph-page__stat">
          <span className="ph-page__stat-value ph-page__stat-value--same">{stats.same}</span>
          <span>same name</span>
        </div>
        <div className="ph-page__stat">
          <span className="ph-page__stat-value ph-page__stat-value--renamed">{stats.renamed}</span>
          <span>renamed</span>
        </div>
        <div className="ph-page__stat">
          <span className="ph-page__stat-value ph-page__stat-value--migrated">{stats.migrated}</span>
          <span>migrated</span>
        </div>
      </div>

      {/* ── Search ── */}
      <div className="ph-page__controls">
        <input
          type="search"
          className="ph-page__search"
          placeholder="Search by Phosphor or Lucide name..."
          value={search}
          onChange={handleSearchChange}
          aria-label="Search icons"
        />
      </div>

      {/* ── Weight / Size / Category / Dark controls ── */}
      <div className="ph-page__controls-row">
        {/* Weight */}
        <div className="ph-page__control-group">
          <span className="ph-page__toggle-group-label">Weight</span>
          <div className="ph-page__toggle-group" role="group" aria-label="Icon weight">
            {phosphorWeights.map(function renderWeight(w) {
              var isActive = selectedWeight === w.value;
              var cls = 'ph-page__toggle-btn';
              if (isActive) cls = cls + ' ph-page__toggle-btn--active';
              return (
                <button
                  key={w.value}
                  type="button"
                  className={cls}
                  onClick={function handleWeightClick() { setSelectedWeight(w.value); }}
                  aria-pressed={isActive}
                >
                  {w.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Size */}
        <div className="ph-page__control-group">
          <span className="ph-page__toggle-group-label">Size</span>
          <div className="ph-page__toggle-group" role="group" aria-label="Icon size">
            {phosphorSizeOptions.map(function renderSize(s) {
              var isActive = iconSize === s.value;
              var cls = 'ph-page__toggle-btn';
              if (isActive) cls = cls + ' ph-page__toggle-btn--active';
              return (
                <button
                  key={s.value}
                  type="button"
                  className={cls}
                  onClick={function handleSizeClick() { setIconSize(s.value); }}
                  aria-pressed={isActive}
                >
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category */}
        <div className="ph-page__control-group">
          <span className="ph-page__toggle-group-label">Category</span>
          <div className="ph-page__toggle-group" role="group" aria-label="Category filter">
            {phosphorCategories.map(function renderCat(c) {
              var isActive = category === c.id;
              var cls = 'ph-page__toggle-btn';
              if (isActive) cls = cls + ' ph-page__toggle-btn--active';
              return (
                <button
                  key={c.id}
                  type="button"
                  className={cls}
                  onClick={function handleCatClick() { setCategory(c.id); }}
                  aria-pressed={isActive}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dark preview toggle */}
        <div className="ph-page__control-group">
          <span className="ph-page__toggle-group-label">Preview</span>
          <div className="ph-page__toggle-group">
            <button
              type="button"
              className={'ph-page__toggle-btn' + (darkPreview ? '' : ' ph-page__toggle-btn--active')}
              onClick={function handleLightClick() { setDarkPreview(false); }}
              aria-pressed={!darkPreview}
            >
              Light
            </button>
            <button
              type="button"
              className={'ph-page__toggle-btn' + (darkPreview ? ' ph-page__toggle-btn--active' : '')}
              onClick={function handleDarkClick() { setDarkPreview(true); }}
              aria-pressed={darkPreview}
            >
              Dark
            </button>
          </div>
        </div>
      </div>

      {/* ── Weight info banner ── */}
      <div className="ph-page__weight-info">
        <span className={'ph-page__weight-info-tag ph-page__weight-info-tag--' + currentWeight.a11yRating}>
          {currentWeight.a11yRating === 'safe' ? 'WCAG safe' : currentWeight.a11yRating === 'caution' ? 'Caution' : 'Decorative only'}
        </span>
        {currentWeight.description} — recommended weight: <strong>{selectedWeight}</strong> — min safe size: {currentWeight.minSafeSize}px
      </div>

      {/* ── Result count ── */}
      <p className="ph-page__count">
        Showing <span className="ph-page__count-num">{filtered.length}</span> of{' '}
        {stats.total} icons
        {search ? ' matching "' + search + '"' : ''}
        {category !== 'all' ? ' in ' + category : ''}
      </p>

      {/* ── Icon grid ── */}
      {filtered.length === 0 ? (
        <p className="ph-page__empty text-body-p">
          No icons found. Try a different search term or category.
        </p>
      ) : (
        <div className="ph-page__grid">
          {filtered.map(function renderCard(entry) {
            var lucideName = entry.lucideName;
            var LuIcon = lucideName != null ? LUCIDE_MAP[lucideName] : null;

            var cardCls = 'ph-page__card';
            if (darkPreview) cardCls = cardCls + ' ph-page__card--dark-preview';

            return (
              <div key={entry.phosphorName} className={cardCls}>
                {/* Preview area */}
                <div className="ph-page__card-preview">
                  {/* Phosphor name (rendered as label until migration) */}
                  <div className="ph-page__card-icon-wrap ph-page__card-icon-wrap--phosphor">
                    {LuIcon ? (
                      <LuIcon
                        className="ph-page__card-rendered-icon"
                        size={iconSize}
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="ph-page__card-icon-placeholder">{entry.phosphorName.charAt(0)}</span>
                    )}
                    <span className="ph-page__card-icon-label">Phosphor</span>
                  </div>

                  <span className="ph-page__card-vs" aria-hidden="true">{'\u2192'}</span>

                  {/* Lucide icon (current, live rendered) */}
                  <div className="ph-page__card-icon-wrap ph-page__card-icon-wrap--lucide">
                    {LuIcon ? (
                      <LuIcon
                        className="ph-page__card-rendered-icon"
                        size={iconSize}
                        aria-hidden="true"
                      />
                    ) : (
                      <span className="ph-page__card-icon-label">N/A</span>
                    )}
                    <span className="ph-page__card-icon-label">Lucide</span>
                  </div>
                </div>

                {/* Names */}
                <div className="ph-page__card-names">
                  <span className="ph-page__card-phosphor-name">{entry.phosphorName}</span>
                  {lucideName != null ? (
                    <span className="ph-page__card-lucide-name">
                      {entry.status === 'same' ? 'Same name' : 'from ' + lucideName}
                    </span>
                  ) : (
                    <span className="ph-page__card-lucide-name">Phosphor only</span>
                  )}
                </div>

                {/* Status badge */}
                <span className={'ph-page__card-badge ph-page__card-badge--' + entry.status}>
                  {entry.status}
                </span>

                {/* Notes */}
                {entry.notes ? (
                  <span className="ph-page__card-lucide-name">{entry.notes}</span>
                ) : null}

                {/* Copy button */}
                <button
                  type="button"
                  className="ph-page__copy-btn"
                  onClick={function handleCopyClick() { copyImport(entry.phosphorName); }}
                  aria-label={'Copy import for ' + entry.phosphorName}
                >
                  {copied === entry.phosphorName ? 'Copied!' : 'Copy import'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
