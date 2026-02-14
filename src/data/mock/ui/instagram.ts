/**
 * @fileoverview Instagram Feed UI data and Behold widget configuration
 * @module data/mock/ui/instagram
 */

/**
 * Behold.so widget configuration
 * Replace the feedId with your actual Behold feed ID from https://app.behold.so
 */
export const instagramConfig = {
  /** Behold.so feed ID — replace with your actual feed ID */
  beholdFeedId: "2L0UZ8zUxYgVZhpvykIf",
  /** Behold widget script URL */
  scriptUrl: "https://w.behold.so/widget.js",
  /** Instagram profile URL */
  profileUrl: "https://instagram.com/feedmymedia",
};

export const instagramUI = {
  header: {
    title: "Follow My Journey",
    subtitle: "See my latest work and behind-the-scenes moments on Instagram.",
    handle: "@feedmymedia"
  },
  stats: {
    lastUpdated: (hours: number) => `Last updated: ${hours < 1 ? 'Just now' : `${Math.round(hours)} hours ago`}`
  },
  actions: {
    follow: "Follow @feedmymedia on Instagram",
    refresh: "Refresh Feed",
    refreshing: "Refreshing..."
  },
  videoBadge: "VIDEO"
};