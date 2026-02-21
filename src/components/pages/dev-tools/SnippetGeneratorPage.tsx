/**
 * @fileoverview Snippet Generator — BEM code template builder
 *
 * Pick a template, enter a block name, and get CSS + JSX scaffolding
 * with all BEM naming conventions pre-applied.
 *
 * @component SnippetGeneratorPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { snippetGeneratorUI } from '../../../data/mock/ui/snippet-generator';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import '@/styles/blocks/specimen-page.css';
import '@/styles/blocks/snippet-generator.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

/** Convert kebab-case to PascalCase */
function toPascalCase(str: string): string {
  return str
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
    .join('');
}

/** Replace template placeholders */
function applyTemplate(template: string, blockName: string): string {
  const pascal = toPascalCase(blockName);
  return template
    .replace(/\{\{block\}\}/g, blockName)
    .replace(/\{\{BLOCK\}\}/g, blockName.toUpperCase().replace(/-/g, '_'))
    .replace(/\{\{Block\}\}/g, pascal);
}

export function SnippetGeneratorPage() {
  const [templateId, setTemplateId] = useState(snippetGeneratorUI.templates[0].id);
  const [blockName, setBlockName] = useState('my-component');
  const [copiedCSS, setCopiedCSS] = useState(false);
  const [copiedJSX, setCopiedJSX] = useState(false);

  useEffect(() => {
    setSEO(devToolsSEO.snippets);
  }, []);

  const template = useMemo(
    () => snippetGeneratorUI.templates.find((t) => t.id === templateId) || snippetGeneratorUI.templates[0],
    [templateId]
  );

  /** Sanitize block name to kebab-case */
  const sanitisedName = useMemo(() => {
    return blockName
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '') || 'my-component';
  }, [blockName]);

  const cssOutput = useMemo(() => applyTemplate(template.cssTemplate, sanitisedName), [template, sanitisedName]);
  const jsxOutput = useMemo(() => applyTemplate(template.jsxTemplate, sanitisedName), [template, sanitisedName]);

  const copyToClipboard = useCallback(async (text: string, type: 'css' | 'jsx') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'css') {
        setCopiedCSS(true);
        setTimeout(() => setCopiedCSS(false), 1500);
      } else {
        setCopiedJSX(true);
        setTimeout(() => setCopiedJSX(false), 1500);
      }
    } catch {
      if (import.meta.env.DEV) {
        console.log('Clipboard write failed');
      }
    }
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      {/* Hero */}
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={snippetGeneratorUI.breadcrumbs} centered />
          <span className="specimen-page__hero-badge">{snippetGeneratorUI.hero.badge}</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">
            {snippetGeneratorUI.hero.title}
          </h1>
          <p className="specimen-page__hero-desc text-body-p">
            {snippetGeneratorUI.hero.description}
          </p>
        </div>
      </header>

      <div className="snippet__content">
        {/* Controls */}
        <div className="snippet__controls">
          <div className="snippet__row">
            <div className="snippet__field">
              <label className="snippet__label" htmlFor="snippet-template">Template</label>
              <select
                id="snippet-template"
                className="snippet__select"
                value={templateId}
                onChange={(e) => setTemplateId(e.target.value)}
              >
                {snippetGeneratorUI.templates.map((t) => (
                  <option key={t.id} value={t.id}>
                    {t.name} ({t.category})
                  </option>
                ))}
              </select>
            </div>
            <div className="snippet__field">
              <label className="snippet__label" htmlFor="snippet-name">
                Block Name (kebab-case)
              </label>
              <input
                id="snippet-name"
                className="snippet__input"
                type="text"
                value={blockName}
                onChange={(e) => setBlockName(e.target.value)}
                placeholder="my-component"
              />
            </div>
          </div>
          <p className="snippet__template-desc">{template.description}</p>
        </div>

        {/* Output Panels */}
        <div className="snippet__outputs">
          {/* CSS */}
          <div className="snippet__panel">
            <div className="snippet__panel-header">
              <span className="snippet__panel-title">
                /styles/blocks/{sanitisedName}.css
              </span>
              <button
                type="button"
                className="snippet__copy-btn"
                onClick={() => copyToClipboard(cssOutput, 'css')}
                aria-label="Copy CSS"
              >
                {copiedCSS ? 'Copied!' : 'Copy CSS'}
              </button>
            </div>
            <pre className="snippet__code">
              <code>{cssOutput}</code>
            </pre>
          </div>

          {/* JSX */}
          <div className="snippet__panel">
            <div className="snippet__panel-header">
              <span className="snippet__panel-title">
                /components/{toPascalCase(sanitisedName)}.tsx
              </span>
              <button
                type="button"
                className="snippet__copy-btn"
                onClick={() => copyToClipboard(jsxOutput, 'jsx')}
                aria-label="Copy JSX"
              >
                {copiedJSX ? 'Copied!' : 'Copy JSX'}
              </button>
            </div>
            <pre className="snippet__code">
              <code>{jsxOutput}</code>
            </pre>
          </div>
        </div>
      </div>
    </main>
  );
}