/**
 * @fileoverview Reusable breadcrumb navigation component
 *
 * Renders a horizontal breadcrumb trail with Schema.org BreadcrumbList
 * structured data (JSON-LD) for SEO. Each crumb is a link except the
 * last item (current page), which is rendered as plain text.
 *
 * @component Breadcrumbs
 * @version 1.0.0
 */

import React, { useEffect } from 'react';
import { Link } from '../../lib/router';
import { ChevronRight, Home } from '../../lib/icons';
import '../../styles/blocks/breadcrumbs.css';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  /** Centre the breadcrumb list horizontally — use inside hero sections */
  centered?: boolean;
}

const SCHEMA_SCRIPT_ID = 'breadcrumb-jsonld';

export function Breadcrumbs({ items, centered = false }: BreadcrumbsProps) {
  // Inject Schema.org BreadcrumbList JSON-LD
  useEffect(() => {
    const existing = document.getElementById(SCHEMA_SCRIPT_ID);
    if (existing) existing.remove();

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(item.href
          ? { item: `${window.location.origin}${item.href}` }
          : {}),
      })),
    };

    const script = document.createElement('script');
    script.id = SCHEMA_SCRIPT_ID;
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById(SCHEMA_SCRIPT_ID);
      if (el) el.remove();
    };
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className={`breadcrumbs${centered ? ' breadcrumbs--centered' : ''}`} aria-label="Breadcrumb">
      <ol className="breadcrumbs__list">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isHome = index === 0 && item.label === 'Home';

          return (
            <li
              key={`${item.label}-${index}`}
              className={`breadcrumbs__item${isLast ? ' breadcrumbs__item--current' : ''}`}
            >
              {index > 0 && (
                <ChevronRight
                  className="breadcrumbs__separator"
                  aria-hidden="true"
                />
              )}
              {isLast ? (
                <span className="breadcrumbs__text" aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <Link to={item.href} className="breadcrumbs__link">
                  {isHome && (
                    <Home
                      className="breadcrumbs__home-icon"
                      aria-hidden="true"
                    />
                  )}
                  <span>{item.label}</span>
                </Link>
              ) : (
                <span className="breadcrumbs__text">{item.label}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}