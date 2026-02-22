/**
 * @fileoverview Component API Reference — props/interface reference for all exported components
 *
 * @component ComponentApiPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { componentApiUI } from '../../../data/mock/ui/component-api';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/component-api.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const CATEGORY_ORDER = ['common', 'ui', 'page', 'utility'] as const;
const CATEGORY_LABELS: Record<string, string> = {
  common: 'Common',
  ui: 'UI',
  page: 'Page',
  utility: 'Utility',
};

export function ComponentApiPage() {
  const [search, setSearch] = useState('');
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    setSEO(devToolsSEO.api);
  }, []);

  const filteredComponents = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return componentApiUI.components;
    return componentApiUI.components.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q) ||
        c.props.some((p) => p.name.toLowerCase().includes(q))
    );
  }, [search]);

  const scrollTo = useCallback((id: string) => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const el = document.getElementById(`comp-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? 'auto' : 'smooth', block: 'start' });
    }
  }, []);

  const copyImport = useCallback(async (id: string, statement: string) => {
    try {
      await navigator.clipboard.writeText(statement);
      setCopied(id);
      setTimeout(() => setCopied(null), 1500);
    } catch {
      if (import.meta.env.DEV) {
        console.log('Clipboard write failed');
      }
    }
  }, []);

  /** Group by category for sidebar */
  const grouped = useMemo(() => {
    const map = new Map<string, typeof filteredComponents>();
    for (const cat of CATEGORY_ORDER) {
      const items = filteredComponents.filter((c) => c.category === cat);
      if (items.length > 0) map.set(cat, items);
    }
    return map;
  }, [filteredComponents]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={componentApiUI.breadcrumbs} centered />
          <span className="specimen-page__hero-badge">{componentApiUI.hero.badge}</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {componentApiUI.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {componentApiUI.hero.description}
          </p>
        </div>
      </header>

      {/* Mobile search */}
      <div className="comp-api__mobile-search">
        <input
          type="search"
          className="comp-api__mobile-input"
          placeholder="Search components..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search components"
        />
      </div>

      {/* Layout */}
      <div className="comp-api__layout">
        {/* Sidebar */}
        <nav className="comp-api__sidebar" aria-label="Component list">
          <input
            type="search"
            className="comp-api__sidebar-search"
            placeholder="Filter..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Filter components"
          />
          <ul className="comp-api__sidebar-list">
            {Array.from(grouped.entries()).map(([cat, items]) => (
              <React.Fragment key={cat}>
                <li className="comp-api__sidebar-cat">
                  {CATEGORY_LABELS[cat] || cat}
                </li>
                {items.map((c) => (
                  <li key={c.id}>
                    <button
                      className="comp-api__sidebar-link"
                      onClick={() => scrollTo(c.id)}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </React.Fragment>
            ))}
          </ul>
        </nav>

        {/* Main */}
        <div className="comp-api__main">
          {filteredComponents.length === 0 ? (
            <p className="comp-api__empty text-body-p">
              No components found matching &ldquo;{search}&rdquo;.
            </p>
          ) : (
            filteredComponents.map((comp) => (
              <article
                key={comp.id}
                id={`comp-${comp.id}`}
                className="comp-api__component"
              >
                {/* Header */}
                <div className="comp-api__component-header">
                  <h2 className="comp-api__component-name">{comp.name}</h2>
                  <span className="comp-api__component-cat">
                    {CATEGORY_LABELS[comp.category] || comp.category}
                  </span>
                  <span className="comp-api__component-path">{comp.path}</span>
                </div>

                {/* Body */}
                <div className="comp-api__component-body">
                  <p className="comp-api__component-desc">{comp.description}</p>

                  {/* Import statement */}
                  <div className="comp-api__import">
                    <code className="comp-api__import-code">
                      {comp.importStatement}
                    </code>
                    <button
                      type="button"
                      className="comp-api__copy-btn"
                      onClick={() => copyImport(comp.id, comp.importStatement)}
                      aria-label={`Copy import for ${comp.name}`}
                    >
                      {copied === comp.id ? 'Copied!' : 'Copy'}
                    </button>
                  </div>

                  {/* Props table */}
                  {comp.props.length > 0 ? (
                    <div className="comp-api__table-wrap">
                      <table className="comp-api__table">
                        <thead>
                          <tr>
                            <th>Prop</th>
                            <th>Type</th>
                            <th>Required</th>
                            <th>Default</th>
                            <th>Description</th>
                          </tr>
                        </thead>
                        <tbody>
                          {comp.props.map((p) => (
                            <tr key={p.name}>
                              <td className="comp-api__prop-name">{p.name}</td>
                              <td className="comp-api__prop-type">{p.type}</td>
                              <td>
                                {p.required ? (
                                  <span className="comp-api__prop-required">Yes</span>
                                ) : (
                                  'No'
                                )}
                              </td>
                              <td>{p.default}</td>
                              <td>{p.description}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="comp-api__no-props">
                      No public props — this component manages its own state internally.
                    </p>
                  )}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </main>
  );
}