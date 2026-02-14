/**
 * @fileoverview Error UI data
 * @module data/mock/ui/error
 */

export const errorMessages = {
  default: {
    title: 'Something went wrong',
    message: 'An unexpected error occurred. Please try again.',
  },
  browserExtension: {
    title: 'Browser Extension Interference',
    message: 'A browser extension may be interfering with the page. This is a common issue with ad blockers or privacy extensions.',
    suggestions: [
      'Try disabling browser extensions temporarily',
      'Use an incognito/private browsing window',
      'Refresh the page and try again',
      'The page should still function normally',
    ]
  },
  timeout: {
    title: 'Request Timeout',
    message: 'The request took too long to complete. This might be due to a slow connection or server issues.',
    suggestions: [
      'Check your internet connection',
      'Try refreshing the page',
      'Wait a moment and try again',
    ]
  },
  network: {
    title: 'Network Error',
    message: 'Unable to connect to the server. Please check your internet connection.',
    suggestions: [
      'Check your internet connection',
      'Try refreshing the page',
      'Check if other websites are working',
    ]
  },
  content: {
    title: 'Content Loading Error',
    message: 'Unable to load content from the content management system. The site will use static content instead.',
    suggestions: [
      'The page should still function with static content',
      'Try refreshing to reconnect to the CMS',
      'Content may be temporarily unavailable',
    ]
  },
  actions: {
    retry: 'Try Again',
    reload: 'Reload Page',
    debug: 'Debug Information (Development Only)'
  }
};
