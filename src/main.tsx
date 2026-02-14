/**
 * @fileoverview Main entry point for the Ash Shaw Makeup Portfolio application
 * Bootstraps React app with proper error handling and performance monitoring
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import { initializeExtensionErrorSuppression } from './utils/extensionErrorSuppressor';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';
import './styles/blocks/pwa-install-prompt.css';
import './styles/blocks/offline-indicator.css';
import { SafetyWrapper } from './components/common/SafetyWrapper';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { registerServiceWorker } from './utils/pwaService';

// Initialize aggressive extension error suppression immediately
initializeExtensionErrorSuppression();

// Ensure we have a root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found. Make sure you have a div with id="root" in your HTML.');
}

// Create React root and render the application
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <SafetyWrapper debug={import.meta.env.DEV}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </SafetyWrapper>
  </React.StrictMode>
);

// Add performance monitoring in development
if (import.meta.env.DEV) {
  // Performance monitoring removed as reportWebVitals.ts is not present
}

// Register PWA service worker for offline functionality
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    registerServiceWorker().catch((error) => {
      if (import.meta.env.DEV) {
        console.error('PWA Service Worker registration failed:', error);
      }
    });
  });
}
