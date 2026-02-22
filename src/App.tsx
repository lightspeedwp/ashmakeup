/**
 * @fileoverview Main application component for Ash Shaw Makeup Portfolio
 * Uses React Router Data mode with RouterProvider for declarative routing.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 3.0.0 - React Router Migration
 */

import React from 'react';
import { RouterProvider } from './lib/router';
import { router } from './routes';
import { ErrorBoundary } from './components/common/ErrorBoundary';

export default function App() {
  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        const errorMessage = error?.message || error?.toString() || '';

        // Let the extensionErrorSuppressor handle these
        if (
          errorMessage.includes('Message getPage (id: 3) response timed out') ||
          errorMessage.includes('response timed out after 30000ms') ||
          (errorMessage.includes('getPage') && errorMessage.includes('timed out')) ||
          errorMessage.includes('beholdReplaceChildren')
        ) {
          return;
        }

        if (import.meta?.env?.DEV) {
          console.error('App Error Boundary caught error:', error, errorInfo);
        }
      }}
    >
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}