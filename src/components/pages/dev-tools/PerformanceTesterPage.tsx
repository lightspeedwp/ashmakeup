/**
 * @fileoverview Performance Tester developer tool
 *
 * Measures real-time performance metrics using the browser Performance API.
 * Displays navigation timing, resource breakdown, DOM complexity stats,
 * an image audit, and Core Web Vitals estimates.
 *
 * @component PerformanceTesterPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback, useMemo } from 'react';
import {
  Gauge,
  RefreshCw,
  Trash2,
  Lightbulb,
  FileCode2,
  Image as ImageIcon,
  Type,
  Globe,
  Layers,
  Clock,
  ChevronDown,
} from 'lucide-react';
import { performanceTesterUI } from '../../../data/mock/ui/performance-tester';
import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/perf-tester.css';

/* ── Types ── */

interface TimingResult {
  domContentLoaded: number;
  loadComplete: number;
  firstPaint: number | null;
  firstContentfulPaint: number | null;
  ttfb: number;
  domInteractive: number;
  redirectTime: number;
  dnsTime: number;
  connectTime: number;
}

interface ResourceSummary {
  type: string;
  count: number;
  totalSize: number;
  totalDuration: number;
}

interface DomStats {
  totalNodes: number;
  maxDepth: number;
  elements: number;
  textNodes: number;
  commentNodes: number;
}

interface ImageAuditResult {
  total: number;
  missingLazy: number;
  missingAlt: number;
  oversized: number;
  withDimensions: number;
}

interface PerfResults {
  timing: TimingResult;
  resources: ResourceSummary[];
  dom: DomStats;
  images: ImageAuditResult;
  lcpValue: number | null;
  clsValue: number | null;
}

/* ── Measurement Helpers ── */

function measureTiming(): TimingResult {
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  const paintEntries = performance.getEntriesByType('paint');

  const fp = paintEntries.find((e) => e.name === 'first-paint');
  const fcp = paintEntries.find((e) => e.name === 'first-contentful-paint');

  if (nav) {
    return {
      domContentLoaded: Math.round(nav.domContentLoadedEventEnd - nav.startTime),
      loadComplete: Math.round(nav.loadEventEnd - nav.startTime),
      firstPaint: fp ? Math.round(fp.startTime) : null,
      firstContentfulPaint: fcp ? Math.round(fcp.startTime) : null,
      ttfb: Math.round(nav.responseStart - nav.startTime),
      domInteractive: Math.round(nav.domInteractive - nav.startTime),
      redirectTime: Math.round(nav.redirectEnd - nav.redirectStart),
      dnsTime: Math.round(nav.domainLookupEnd - nav.domainLookupStart),
      connectTime: Math.round(nav.connectEnd - nav.connectStart),
    };
  }

  /* Fallback for browsers without Navigation Timing L2 */
  const t = performance.timing;
  return {
    domContentLoaded: t.domContentLoadedEventEnd - t.navigationStart,
    loadComplete: t.loadEventEnd - t.navigationStart,
    firstPaint: fp ? Math.round(fp.startTime) : null,
    firstContentfulPaint: fcp ? Math.round(fcp.startTime) : null,
    ttfb: t.responseStart - t.navigationStart,
    domInteractive: t.domInteractive - t.navigationStart,
    redirectTime: t.redirectEnd - t.redirectStart,
    dnsTime: t.domainLookupEnd - t.domainLookupStart,
    connectTime: t.connectEnd - t.connectStart,
  };
}

function measureResources(): ResourceSummary[] {
  const entries = performance.getEntriesByType('resource') as PerformanceResourceTiming[];
  const map: Record<string, ResourceSummary> = {};

  entries.forEach((entry) => {
    let type = 'other';
    if (entry.initiatorType === 'script' || entry.name.endsWith('.js')) type = 'script';
    else if (entry.initiatorType === 'css' || entry.initiatorType === 'link' || entry.name.endsWith('.css')) type = 'stylesheet';
    else if (entry.initiatorType === 'img' || /\.(png|jpg|jpeg|gif|webp|avif|svg)/.test(entry.name)) type = 'img';
    else if (entry.initiatorType === 'font' || /\.(woff2?|ttf|otf|eot)/.test(entry.name)) type = 'font';
    else if (entry.initiatorType === 'fetch' || entry.initiatorType === 'xmlhttprequest') type = 'fetch';

    if (!map[type]) {
      map[type] = { type, count: 0, totalSize: 0, totalDuration: 0 };
    }
    map[type].count++;
    map[type].totalSize += entry.transferSize || 0;
    map[type].totalDuration += entry.duration;
  });

  return Object.values(map).sort((a, b) => b.totalSize - a.totalSize);
}

function measureDom(): DomStats {
  let totalNodes = 0;
  let elements = 0;
  let textNodes = 0;
  let commentNodes = 0;
  let maxDepth = 0;

  function walk(node: Node, depth: number) {
    totalNodes++;
    if (depth > maxDepth) maxDepth = depth;

    if (node.nodeType === Node.ELEMENT_NODE) elements++;
    else if (node.nodeType === Node.TEXT_NODE) textNodes++;
    else if (node.nodeType === Node.COMMENT_NODE) commentNodes++;

    node.childNodes.forEach((child) => walk(child, depth + 1));
  }

  walk(document.body, 0);

  return { totalNodes, maxDepth, elements, textNodes, commentNodes };
}

function auditImages(): ImageAuditResult {
  const images = Array.from(document.querySelectorAll('img'));
  const total = images.length;
  let missingLazy = 0;
  let missingAlt = 0;
  let oversized = 0;
  let withDimensions = 0;

  images.forEach((img) => {
    if (img.getAttribute('loading') !== 'lazy' && img.getAttribute('loading') !== 'eager') {
      missingLazy++;
    }
    if (!img.hasAttribute('alt')) {
      missingAlt++;
    }
    if (img.naturalWidth > 0 && img.clientWidth > 0 && img.naturalWidth > img.clientWidth * 2) {
      oversized++;
    }
    if (img.hasAttribute('width') && img.hasAttribute('height')) {
      withDimensions++;
    }
  });

  return { total, missingLazy, missingAlt, oversized, withDimensions };
}

function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(1))} ${sizes[i]}`;
}

function ratingClass(value: number, thresholds: { good: number; moderate: number }): string {
  if (value <= thresholds.good) return 'good';
  if (value <= thresholds.moderate) return 'moderate';
  return 'poor';
}

/* ── Resource type icon ── */

function ResourceIcon({ type }: { type: string }) {
  switch (type) {
    case 'script':
      return <FileCode2 className="perf-tester__res-icon" aria-hidden="true" />;
    case 'stylesheet':
      return <Type className="perf-tester__res-icon" aria-hidden="true" />;
    case 'img':
      return <ImageIcon className="perf-tester__res-icon" aria-hidden="true" />;
    case 'font':
      return <Type className="perf-tester__res-icon" aria-hidden="true" />;
    case 'fetch':
      return <Globe className="perf-tester__res-icon" aria-hidden="true" />;
    default:
      return <Layers className="perf-tester__res-icon" aria-hidden="true" />;
  }
}

/* ── Component ── */

export function PerformanceTesterPage() {
  const [results, setResults] = useState<PerfResults | null>(null);
  const [isRunning, setIsRunning] = useState(false);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(['vitals', 'timing', 'resources', 'dom', 'images'])
  );

  useEffect(() => {
    setSEO(devToolsSEO.performance);
  }, []);

  const handleRunTest = useCallback(() => {
    setIsRunning(true);
    // Allow a tick for the UI to update, then measure
    requestAnimationFrame(() => {
      setTimeout(() => {
        const timing = measureTiming();
        const resources = measureResources();
        const dom = measureDom();
        const images = auditImages();

        /* Attempt LCP via PerformanceObserver entries already buffered */
        let lcpValue: number | null = null;
        let clsValue: number | null = null;

        try {
          const lcpEntries = performance.getEntriesByType('largest-contentful-paint');
          if (lcpEntries.length > 0) {
            lcpValue = Math.round(lcpEntries[lcpEntries.length - 1].startTime);
          }
        } catch {
          /* Not supported */
        }

        try {
          const layoutShiftEntries = performance.getEntriesByType('layout-shift') as (PerformanceEntry & { value?: number; hadRecentInput?: boolean })[];
          if (layoutShiftEntries.length > 0) {
            clsValue = layoutShiftEntries
              .filter((e) => !e.hadRecentInput)
              .reduce((sum, e) => sum + (e.value || 0), 0);
            clsValue = parseFloat(clsValue.toFixed(4));
          }
        } catch {
          /* Not supported */
        }

        setResults({ timing, resources, dom, images, lcpValue, clsValue });
        setIsRunning(false);
      }, 400);
    });
  }, []);

  const handleClear = useCallback(() => {
    setResults(null);
  }, []);

  const toggleSection = useCallback((id: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  /* Total resource size */
  const totalResourceSize = useMemo(() => {
    if (!results) return 0;
    return results.resources.reduce((sum, r) => sum + r.totalSize, 0);
  }, [results]);

  const totalResourceCount = useMemo(() => {
    if (!results) return 0;
    return results.resources.reduce((sum, r) => sum + r.count, 0);
  }, [results]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="perf-tester">
      {/* ── Hero ── */}
      <header className="perf-tester__hero">
        <div className="perf-tester__hero-content">
          <Breadcrumbs items={performanceTesterUI.breadcrumbs} centered />

          <span className="perf-tester__hero-badge">
            {performanceTesterUI.hero.badge}
          </span>

          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {performanceTesterUI.hero.title}
          </h1>

          <p className="perf-tester__hero-desc text-body-p">
            {performanceTesterUI.hero.description}
          </p>

          {/* Actions */}
          <div className="perf-tester__actions">
            <button
              type="button"
              className="perf-tester__btn perf-tester__btn--primary"
              onClick={handleRunTest}
              disabled={isRunning}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="perf-tester__btn-icon perf-tester__btn-icon--spin" aria-hidden="true" />
                  {performanceTesterUI.actions.running}
                </>
              ) : (
                <>
                  <Gauge className="perf-tester__btn-icon" aria-hidden="true" />
                  {results ? performanceTesterUI.actions.retest : performanceTesterUI.actions.runTest}
                </>
              )}
            </button>
            {results && (
              <button
                type="button"
                className="perf-tester__btn perf-tester__btn--ghost"
                onClick={handleClear}
              >
                <Trash2 className="perf-tester__btn-icon" aria-hidden="true" />
                {performanceTesterUI.actions.clear}
              </button>
            )}
          </div>
        </div>
      </header>

      {results && (
        <>
          {/* ── Core Web Vitals ── */}
          <CollapsibleSection
            id="vitals"
            title={performanceTesterUI.sections.vitals}
            isExpanded={expandedSections.has('vitals')}
            onToggle={toggleSection}
          >
            <div className="perf-tester__vitals-grid">
              {/* FCP */}
              {results.timing.firstContentfulPaint !== null && (
                <MetricGauge
                  label={performanceTesterUI.metrics.firstContentfulPaint.label}
                  value={results.timing.firstContentfulPaint}
                  unit="ms"
                  thresholds={performanceTesterUI.metrics.firstContentfulPaint.thresholds}
                  description={performanceTesterUI.metrics.firstContentfulPaint.description}
                />
              )}

              {/* LCP */}
              {results.lcpValue !== null && (
                <MetricGauge
                  label={performanceTesterUI.metrics.largestContentfulPaint.label}
                  value={results.lcpValue}
                  unit="ms"
                  thresholds={performanceTesterUI.metrics.largestContentfulPaint.thresholds}
                  description={performanceTesterUI.metrics.largestContentfulPaint.description}
                />
              )}

              {/* CLS */}
              {results.clsValue !== null && (
                <MetricGauge
                  label={performanceTesterUI.metrics.cumulativeLayoutShift.label}
                  value={results.clsValue}
                  unit=""
                  thresholds={performanceTesterUI.metrics.cumulativeLayoutShift.thresholds}
                  description={performanceTesterUI.metrics.cumulativeLayoutShift.description}
                />
              )}

              {/* DCL */}
              <MetricGauge
                label={performanceTesterUI.metrics.domContentLoaded.label}
                value={results.timing.domContentLoaded}
                unit="ms"
                thresholds={performanceTesterUI.metrics.domContentLoaded.thresholds}
                description={performanceTesterUI.metrics.domContentLoaded.description}
              />

              {/* Page Load */}
              <MetricGauge
                label={performanceTesterUI.metrics.loadComplete.label}
                value={results.timing.loadComplete}
                unit="ms"
                thresholds={performanceTesterUI.metrics.loadComplete.thresholds}
                description={performanceTesterUI.metrics.loadComplete.description}
              />
            </div>
          </CollapsibleSection>

          {/* ── Navigation Timing ── */}
          <CollapsibleSection
            id="timing"
            title={performanceTesterUI.sections.timing}
            isExpanded={expandedSections.has('timing')}
            onToggle={toggleSection}
          >
            <div className="perf-tester__timing-list">
              <TimingRow label="Time to First Byte (TTFB)" value={results.timing.ttfb} unit="ms" />
              <TimingRow label="DNS Lookup" value={results.timing.dnsTime} unit="ms" />
              <TimingRow label="TCP Connect" value={results.timing.connectTime} unit="ms" />
              <TimingRow label="Redirect Time" value={results.timing.redirectTime} unit="ms" />
              <TimingRow label="DOM Interactive" value={results.timing.domInteractive} unit="ms" />
              <TimingRow label="DOM Content Loaded" value={results.timing.domContentLoaded} unit="ms" />
              <TimingRow label="Page Load Complete" value={results.timing.loadComplete} unit="ms" />
              {results.timing.firstPaint !== null && (
                <TimingRow label="First Paint" value={results.timing.firstPaint} unit="ms" />
              )}
              {results.timing.firstContentfulPaint !== null && (
                <TimingRow label="First Contentful Paint" value={results.timing.firstContentfulPaint} unit="ms" />
              )}
            </div>
          </CollapsibleSection>

          {/* ── Resource Breakdown ── */}
          <CollapsibleSection
            id="resources"
            title={performanceTesterUI.sections.resources}
            isExpanded={expandedSections.has('resources')}
            onToggle={toggleSection}
          >
            <div className="perf-tester__res-summary">
              <span className="perf-tester__res-total">
                {totalResourceCount} resources &middot; {formatBytes(totalResourceSize)}
              </span>
            </div>
            <div className="perf-tester__res-list">
              {results.resources.map((res) => (
                <div key={res.type} className="perf-tester__res-row">
                  <div className="perf-tester__res-type">
                    <ResourceIcon type={res.type} />
                    <span>{(performanceTesterUI.resourceTypes as Record<string, string>)[res.type] || res.type}</span>
                  </div>
                  <div className="perf-tester__res-stats">
                    <span className="perf-tester__res-count">{res.count}</span>
                    <span className="perf-tester__res-size">{formatBytes(res.totalSize)}</span>
                    <div className="perf-tester__res-bar-wrap">
                      <div
                        className="perf-tester__res-bar"
                        style={{ width: `${totalResourceSize > 0 ? Math.max(4, (res.totalSize / totalResourceSize) * 100) : 0}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          {/* ── DOM Complexity ── */}
          <CollapsibleSection
            id="dom"
            title={performanceTesterUI.sections.dom}
            isExpanded={expandedSections.has('dom')}
            onToggle={toggleSection}
          >
            <div className="perf-tester__dom-grid">
              <DomStat
                label={performanceTesterUI.domStats.totalNodes}
                value={results.dom.totalNodes}
                rating={results.dom.totalNodes < 1500 ? 'good' : results.dom.totalNodes < 3000 ? 'moderate' : 'poor'}
              />
              <DomStat
                label={performanceTesterUI.domStats.maxDepth}
                value={results.dom.maxDepth}
                rating={results.dom.maxDepth < 15 ? 'good' : results.dom.maxDepth < 30 ? 'moderate' : 'poor'}
              />
              <DomStat
                label={performanceTesterUI.domStats.elements}
                value={results.dom.elements}
                rating="neutral"
              />
              <DomStat
                label={performanceTesterUI.domStats.textNodes}
                value={results.dom.textNodes}
                rating="neutral"
              />
            </div>
          </CollapsibleSection>

          {/* ── Image Audit ── */}
          <CollapsibleSection
            id="images"
            title={performanceTesterUI.sections.images}
            isExpanded={expandedSections.has('images')}
            onToggle={toggleSection}
          >
            <div className="perf-tester__img-grid">
              <ImgStat label={performanceTesterUI.imageAudit.total} value={results.images.total} rating="neutral" />
              <ImgStat label={performanceTesterUI.imageAudit.missingLazy} value={results.images.missingLazy} rating={results.images.missingLazy === 0 ? 'good' : 'warning'} />
              <ImgStat label={performanceTesterUI.imageAudit.missingAlt} value={results.images.missingAlt} rating={results.images.missingAlt === 0 ? 'good' : 'poor'} />
              <ImgStat label={performanceTesterUI.imageAudit.oversized} value={results.images.oversized} rating={results.images.oversized === 0 ? 'good' : 'warning'} />
              <ImgStat label={performanceTesterUI.imageAudit.withDimensions} value={results.images.withDimensions} rating="neutral" />
            </div>
          </CollapsibleSection>
        </>
      )}

      {/* ── Tips ── */}
      <section className="perf-tester__tips" aria-labelledby="perf-tips-title">
        <div className="perf-tester__tips-inner">
          <h2 id="perf-tips-title" className="perf-tester__tips-title text-card-h3">
            <Lightbulb className="perf-tester__tips-icon" aria-hidden="true" />
            {performanceTesterUI.sections.tips}
          </h2>
          <div className="perf-tester__tips-grid">
            {performanceTesterUI.tips.map((tip) => (
              <div key={tip.id} className="perf-tester__tip-card">
                <h3 className="perf-tester__tip-title">{tip.title}</h3>
                <p className="perf-tester__tip-desc">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

/* ── Sub-components ── */

function CollapsibleSection({
  id,
  title,
  isExpanded,
  onToggle,
  children,
}: {
  id: string;
  title: string;
  isExpanded: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}) {
  return (
    <section className="perf-tester__section" aria-labelledby={`perf-${id}-title`}>
      <div className="perf-tester__section-inner">
        <button
          type="button"
          className="perf-tester__section-header"
          onClick={() => onToggle(id)}
          aria-expanded={isExpanded}
          id={`perf-${id}-title`}
        >
          <Clock className="perf-tester__section-icon" aria-hidden="true" />
          <span className="perf-tester__section-title text-card-h3">{title}</span>
          <ChevronDown className={`perf-tester__section-chevron ${isExpanded ? 'perf-tester__section-chevron--open' : ''}`} aria-hidden="true" />
        </button>
        {isExpanded && <div className="perf-tester__section-body">{children}</div>}
      </div>
    </section>
  );
}

function MetricGauge({
  label,
  value,
  unit,
  thresholds,
  description,
}: {
  label: string;
  value: number;
  unit: string;
  thresholds: { good: number; moderate: number };
  description: string;
}) {
  const rating = ratingClass(value, thresholds);
  const displayValue = unit === 'ms' ? `${value}${unit}` : `${value}`;

  return (
    <div className={`perf-tester__gauge perf-tester__gauge--${rating}`} title={description}>
      <span className="perf-tester__gauge-value">{displayValue}</span>
      <span className="perf-tester__gauge-label">{label}</span>
      <span className={`perf-tester__gauge-badge perf-tester__gauge-badge--${rating}`}>
        {rating === 'good' ? performanceTesterUI.gaugeLabels.good : rating === 'moderate' ? performanceTesterUI.gaugeLabels.moderate : performanceTesterUI.gaugeLabels.poor}
      </span>
    </div>
  );
}

function TimingRow({ label, value, unit }: { label: string; value: number; unit: string }) {
  return (
    <div className="perf-tester__timing-row">
      <span className="perf-tester__timing-label">{label}</span>
      <span className="perf-tester__timing-value">
        {value}{unit}
      </span>
    </div>
  );
}

function DomStat({ label, value, rating }: { label: string; value: number; rating: string }) {
  return (
    <div className={`perf-tester__dom-stat perf-tester__dom-stat--${rating}`}>
      <span className="perf-tester__dom-stat-value">{value.toLocaleString()}</span>
      <span className="perf-tester__dom-stat-label">{label}</span>
    </div>
  );
}

function ImgStat({ label, value, rating }: { label: string; value: number; rating: string }) {
  return (
    <div className={`perf-tester__img-stat perf-tester__img-stat--${rating}`}>
      <span className="perf-tester__img-stat-value">{value}</span>
      <span className="perf-tester__img-stat-label">{label}</span>
    </div>
  );
}