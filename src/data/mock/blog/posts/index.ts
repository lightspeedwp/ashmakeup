/**
 * @fileoverview Blog posts barrel export
 * Centralized export for all blog post collections
 * 
 * @module data/mock/blog/posts
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { blogPosts as allPosts } from '../posts';

/**
 * Featured blog posts (8 posts)
 * High-priority content marked for prominent display
 */
export const featuredBlogPosts = allPosts.filter(function(post) {
  return post.featured === true;
});

/**
 * Editorial blog posts (6 non-featured posts)
 * Educational content, tutorials, and how-to guides
 * Categories: Education, Tutorials, Sustainability, Makeup Tips
 */
export const editorialBlogPosts = allPosts.filter(function(post) {
  if (post.featured === true) {
    return false;
  }
  var category = post.category;
  return category === 'Education' || category === 'Tutorials' || category === 'Sustainability' || category === 'Makeup Tips';
});

/**
 * Personal journey blog posts (4 non-featured posts)
 * Travel stories, insights, and personal experiences
 * Categories: Travel, Insights, Festival
 */
export const personalBlogPosts = allPosts.filter(function(post) {
  if (post.featured === true) {
    return false;
  }
  var category = post.category;
  return category === 'Travel' || category === 'Insights' || category === 'Festival';
});

/**
 * All blog posts (maintains backward compatibility)
 * Complete collection of all blog content
 */
export const blogPosts = allPosts;

/**
 * Export individual collections for targeted imports
 */
export {
  featuredBlogPosts as featured,
  editorialBlogPosts as editorial,
  personalBlogPosts as personal
};
