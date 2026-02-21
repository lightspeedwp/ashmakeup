/**
 * @fileoverview Documentation Generator — auto-generates component docs from JSDoc
 *
 * Displays the JSDoc-extracted documentation for each component file,
 * including description, props, version, and file path.
 *
 * @component DocumentationGeneratorPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { componentApiUI } from '../../../data/mock/ui/component-api';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '@/styles/blocks/specimen-page.css';
import '@/styles/blocks/component-api.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Documentation Generator');

/** Generate markdown-style doc from component data */
function generateDoc(comp: typeof componentApiUI.components[0]): string {
  const lines: string[] = [];
  lines.push(`# ${comp.name}`);
  lines.push('');
  lines.push(`**Path:** \`${comp.path}\``);
  lines.push(`**Category:** ${comp.category}`);
  lines.push('');
  lines.push(`## Description`);
  lines.push('');
  lines.push(comp.description);
  lines.push('');
  lines.push(`## Import`);
  lines.push('');
  lines.push('```tsx');
  lines.push(comp.importStatement);
  lines.push('```');
  lines.push('');

  if (comp.props.length > 0) {
    lines.push(`## Props`);
    lines.push('');
    lines.push('| Prop | Type | Required | Default | Description |');
    lines.push('| ---- | ---- | -------- | ------- | ----------- |');
    for (const p of comp.props) {
      lines.push(
        `| \`${p.name}\` | \`${p.type}\` | ${p.required ? 'Yes' : 'No'} | ${p.default} | ${p.description} |`
      );
    }
    lines.push('');
  } else {
    lines.push('*No public props — internal state only.*');
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  return lines.join('\n');
}

export function DocumentationGeneratorPage() {
  const [search, setSearch] = useState('');
  const [copiedAll, setCopiedAll] = useState(false);

  useEffect(() => {
    setSEO(devToolsSEO.docs);
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return componentApiUI.components;
    return componentApiUI.components.filter(
      (c) => c.name.toLowerCase().includes(q) || c.description.toLowerCase().includes(q)
    );
  }, [search]);

  const allDocs = useMemo(() => filtered.map(generateDoc).join('\n'), [filtered]);

  const copyAll = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(allDocs);
      setCopiedAll(true);
      setTimeout(() => setCopiedAll(false), 1500);
    } catch {
      if (import.meta.env.DEV) {
        console.log('Clipboard write failed');
      }
    }
  }, [allDocs]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Docs</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            Documentation Generator
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            Auto-generated markdown documentation for every public component. Filter, preview, and copy to clipboard.
          </p>
        </div>
      </header>

      {/* Controls */}
      <div className="comp-api__mobile-search">
        <input
          type="search"
          className="comp-api__mobile-input"
          placeholder="Filter components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Filter components"
        />
      </div>

      {/* Content */}
      <div className="comp-api__layout">
        <div className="comp-api__main">
          {/* Copy All button */}
          <div className="snippet__controls" style={{ flexDirection: 'row' as const, alignItems: 'center' }}>
            <span className="snippet__label">
              {filtered.length} component{filtered.length !== 1 ? 's' : ''} documented
            </span>
            <button
              type="button"
              className="comp-api__copy-btn"
              onClick={copyAll}
              aria-label="Copy all documentation"
            >
              {copiedAll ? 'Copied!' : 'Copy All Docs'}
            </button>
          </div>

          {/* Generated docs */}
          {filtered.map((comp) => (
            <article key={comp.id} className="comp-api__component">
              <div className="comp-api__component-header">
                <h2 className="comp-api__component-name">{comp.name}</h2>
                <span className="comp-api__component-cat">{comp.category}</span>
                <span className="comp-api__component-path">{comp.path}</span>
              </div>
              <div className="comp-api__component-body">
                <pre className="snippet__code">
                  <code>{generateDoc(comp)}</code>
                </pre>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}