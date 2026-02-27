/**
 * @fileoverview Blog category archive page
 * Displays blog posts filtered by category with ArchiveFilters
 *
 * @component BlogCategoryPage
 * @version 1.0.0
 */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from '../../../lib/router';
import { Calendar, Clock, BookOpen } from '../../../lib/icons';
import { blogPosts } from '../../../data/mock/blog/posts';
import { blogCategories } from '../../../data/mock/blog/categories';
import { ArchiveFilters } from '../../ui/ArchiveFilters';
import { OptimizedImage } from '../../ui/OptimizedImage';
import { FaqSection } from '../../sections/FaqSection';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { formatDate } from '../../../utils/formatDate';
import { getBlogCategoryCount } from '../../../utils/contentCounts';
import { setSEO } from '../../../utils/seo';
import { blogCategorySEO } from '../../../data/mock/seo';
import { blogCategoryBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import { emptyStateMessages } from '../../../data/mock/ui/error';
import {
  injectSchema,
  removeSchema,
  SCHEMA_IDS,
  buildCollectionSchema,
} from '../../../utils/schemaService';
import '../../../styles/blocks/blog-page.css';

const SORT_OPTIONS = [
  { value: 'recent', label: 'Most Recent' },
  { value: 'alphabetical', label: 'A-Z' },
  { value: 'featured', label: 'Featured' },
];

export function BlogCategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const category = blogCategories.find(c => c.slug === slug);
  const [activeCategories, setActiveCategories] = useState<string[]>(slug ? [slug] : []);
  const [sortBy, setSortBy] = useState('recent');

  useEffect(() => {
    if (category) {
      setSEO(blogCategorySEO(category.name));
      const postCount = filteredPosts ? filteredPosts.length : 0;
      injectSchema(SCHEMA_IDS.collection, buildCollectionSchema(
        `${category.name} | Insights`,
        blogCategorySEO(category.name).description,
        `/blog/category/${slug}`,
        postCount,
      ));
    }
    return () => {
      removeSchema(SCHEMA_IDS.collection);
    };
  }, [category, slug]);

  const categories = useMemo(() =>
    blogCategories.map(c => ({
      id: c.id,
      name: c.name,
      slug: c.slug,
      count: getBlogCategoryCount(c.name),
    })).filter(c => c.count > 0),
  []);

  const filteredPosts = useMemo(() => {
    let posts = blogPosts.filter(post => {
      if (activeCategories.length === 0) return true;
      const cat = blogCategories.find(c => c.slug === activeCategories[0]);
      const postCat = post.category;
      return cat ? (postCat ? postCat.toLowerCase() === cat.name.toLowerCase() : false) : true;
    });

    switch (sortBy) {
      case 'recent':
        posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'alphabetical':
        posts.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case 'featured':
        posts.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
    return posts;
  }, [activeCategories, sortBy]);

  useEffect(() => {
    setActiveCategories(slug ? [slug] : []);
  }, [slug]);

  const handleCategoryToggle = useCallback((catSlug: string) => {
    const isActive = activeCategories.includes(catSlug);
    const newCategories = isActive 
      ? activeCategories.filter(s => s !== catSlug) 
      : [catSlug]; // Single select mode implied by current UI
    
    setActiveCategories(newCategories);

    if (newCategories.length === 0) {
      navigate('/blog');
    } else {
      navigate(`/blog/category/${catSlug}`);
    }
  }, [navigate, activeCategories]);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="blog-list-view bg-atomic-noise">
      <div className="blog-list-header" data-blog-header>
        <div className="container-7xl">
          <Breadcrumbs items={blogCategoryBreadcrumbs(category ? category.name : 'Category')} centered />
          <div className="blog-list-header__content">
            <h1 className="text-hero-h1 text-gradient-pink-purple-blue">
              {category ? category.name : 'Blog Category'}
            </h1>
            {category && category.description ? (
              <p className="text-body-guideline">{category.description}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="blog-list-content">
        <div className="container-7xl py-fluid-lg">
          <ArchiveFilters
            contentType="blog"
            categories={categories}
            activeCategories={activeCategories}
            sortBy={sortBy}
            sortOptions={SORT_OPTIONS}
            resultCount={filteredPosts.length}
            onCategoryToggle={handleCategoryToggle}
            onSortChange={setSortBy}
            onClearAll={() => { setActiveCategories([]); navigate('/blog'); }}
          />

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
              <p className="error-message">{emptyStateMessages.blog.categoryMessage}</p>
            </div>
          )}
        </div>
      </div>

      <FaqSection pageId="blog" />
    </main>
  );
}