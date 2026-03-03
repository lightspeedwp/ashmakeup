/**
 * @fileoverview Main application component for Ash Shaw Makeup Portfolio
 * Uses custom lightweight router with RouterProvider for declarative routing.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 3.3.0 - Bundler-safe: no console.error with mixed args
 */

import React from 'react';
import { RouterProvider } from './lib/router';
import { router } from './routes';
import { ErrorBoundary } from './components/common/ErrorBoundary';

/**
 * Pre-defined error handler extracted outside JSX to avoid bundler issues
 * with && and || operators inside inline callback props.
 */
function handleAppError(error: Error, errorInfo: React.ErrorInfo) {
  const errorMessage = error && error.message ? error.message : '';
  const errorString = error ? error.toString() : '';
  const finalMessage = errorMessage ? errorMessage : errorString;
  
  const hasGetPageTimeout = finalMessage.includes('Message getPage (id: 3) response timed out');
  const hasGenericTimeout = finalMessage.includes('response timed out after 30000ms');
  const hasGetPageAndTimeout = finalMessage.includes('getPage') && finalMessage.includes('timed out');
  
  const shouldIgnore = hasGetPageTimeout || hasGenericTimeout || hasGetPageAndTimeout;
  
  if (shouldIgnore) {
    return;
  }

  // Production-safe: silently swallow non-ignorable errors
  // Dev logging removed — import.meta.env.DEV crashes this bundler
}

export default function App() {
  return (
    <ErrorBoundary onError={handleAppError}>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}