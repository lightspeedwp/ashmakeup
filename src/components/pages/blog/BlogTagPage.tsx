/**
 * @fileoverview Blog tag archive page
 * Displays blog posts filtered by tag
 *
 * @component BlogTagPage
 * @version 1.0.0
 */

import React, { useMemo, useEffect } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import { Calendar, Clock, BookOpen } from 'lucide-react';
import { blogPosts } from '../../../data/mock/blog/posts';
import { blogTags, findBlogTagBySlug } from '../../../data/mock/blog/tags';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { formatDate } from '../../../utils/formatDate';
import { setSEO } from '../../../utils/seo';
import { blogTagSEO } from '../../../data/mock/seo';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';
import '../../../styles/blocks/blog-page.css';
import '../../../styles/blocks/archive-filters.css';

export function BlogTagPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const tag = findBlogTagBySlug(slug ?? '');

  useEffect(() => {
    if (tag) {
      setSEO(blogTagSEO(tag.name));
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        `${tag.name} | Insights`,
        blogTagSEO(tag.name).description,
        `/blog/tag/${slug}`,
        filteredPosts.length,
      ));
    }
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [tag, slug]);

  const filteredPosts = useMemo(() => {
    if (!slug) return [];
    const tagName = tag?.name ?? slug.replace(/-/g, ' ');
    return blogPosts
      .filter(post =>
        (post.tags ?? []).some(t => t.toLowerCase() === tagName.toLowerCase()),
      )
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
  }, [slug, tag]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="blog-list-view bg-atomic-noise">
      <div className="blog-list-header" data-blog-header>
        <div className="container-7xl">
          <Breadcrumbs items={blogTagBreadcrumbs(tag?.name ?? slug ?? '')} centered />
          <div className="blog-list-header__content">
            <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
              Tag: {tag?.name ?? slug}
            </h1>
            {tag?.description && (
              <p className="text-body-guideline">{tag.description}</p>
            )}
            <p className="archive-filters__result-count">
              Number of results: <strong>{filteredPosts.length}</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="blog-list-content">
        <div className="container-7xl py-fluid-lg">
          {filteredPosts.length > 0 ? (
            <div className="blog-preview__grid">
              {filteredPosts.map(post => (
                <article
                  key={post.id}
                  className="blog-card"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <div className="blog-card__image-container">
                    {post.featuredImage ? (
                      <OptimizedImage
                        src={post.featuredImage.src}
                        alt={post.featuredImage.alt}
                        className="blog-card__image"
                        preset="thumbnail"
                      />
                    ) : (
                      <div className="blog-card__placeholder">
                        <BookOpen className="blog-card__placeholder-icon" />
                      </div>
                    )}
                    <div className="blog-card__category">{post.category}</div>
                  </div>
                  <div className="blog-card__content">
                    <h2 className="blog-card__title">{post.title}</h2>
                    <p className="blog-card__excerpt">{post.excerpt}</p>
                    <div className="blog-card__footer">
                      <div className="blog-card__date">
                        <Calendar className="icon-xs" />
                        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                      </div>
                      {post.readTime && (
                        <div className="blog-card__date">
                          <Clock className="icon-xs" />
                          <span>{post.readTime} min</span>
                        </div>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="error-card">
              <h3 className="error-title">{emptyStateMessages.blog.title}</h3>
              <p className="error-message">{emptyStateMessages.blog.tagMessage}</p>
            </div>
          )}
        </div>
      </div>

      <FaqSection pageId="blog" />
    </main>
  );
}