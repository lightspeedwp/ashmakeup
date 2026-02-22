/**
 * @fileoverview Error Boundary component for catching and handling React errors
 * 
 * Provides comprehensive error catching and user-friendly error display with recovery options.
 * Includes timeout error handling, API error recovery, and accessibility support.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.2.0 - Semantic BEM Refactor
 */

import React, { Component, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { errorMessages } from '../../data/mock/ui/error';
import "../../styles/blocks/button.css";

/**
 * Error boundary props interface
 */
interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
  onError?: (error: Error, errorInfo: React.ErrorInfo) => void;
}

/**
 * Error boundary state interface
 */
interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
  retryCount: number;
}

/**
 * Error Boundary component for catching and handling React errors
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    const errorMessage = error?.message || error?.toString() || '';
    
    if (
      errorMessage.includes('Message getPage (id: 3) response timed out after 30000ms') ||
      errorMessage.includes('response timed out after 30000ms') ||
      errorMessage.includes('getPage') && errorMessage.includes('timed out') ||
      errorMessage.includes('Message getPage') ||
      errorMessage.includes('beholdReplaceChildren') ||
      errorMessage.includes('extension://') ||
      errorMessage.includes('chrome-extension://') ||
      errorMessage.includes('moz-extension://') ||
      errorMessage.includes('async_hooks') ||
      errorMessage.includes('esm.sh/node/') ||
      error?.stack?.includes('async_hooks') ||
      error?.stack?.includes('esm.sh/node/') ||
      error?.stack?.includes('extension://') ||
      error?.name === 'TimeoutError' ||
      error?.name === 'ExtensionError'
    ) {
      this.setState({
        hasError: false,
        error: null,
        errorInfo: null,
      });
      return;
    }

    this.setState({
      error,
      errorInfo,
    });

    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }

    if (import.meta?.env?.DEV) {
      console.error('Error Boundary caught an error:', error);
      console.error('Error Info:', errorInfo);
    }
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1,
    }));
  };

  handleReload = () => {
    window.location.reload();
  };

  render() {
    const { hasError, error, retryCount } = this.state;
    const { children, fallback } = this.props;

    if (hasError) {
      if (fallback) {
        return fallback;
      }

      const isTimeoutError = error?.message?.includes('timed out') || 
                            error?.message?.includes('timeout');
      const isNetworkError = error?.message?.includes('network') || 
                            error?.message?.includes('fetch');
      const isContentError = error?.message?.includes('Contentful') || 
                            error?.message?.includes('CMS');
      const isBrowserExtensionError = error?.message?.includes('extension');

      let errorTitle = errorMessages.default.title;
      let errorMessage = errorMessages.default.message;
      let suggestions: string[] = [];

      if (isBrowserExtensionError) {
        errorTitle = errorMessages.browserExtension.title;
        errorMessage = errorMessages.browserExtension.message;
        suggestions = errorMessages.browserExtension.suggestions;
      } else if (isTimeoutError) {
        errorTitle = errorMessages.timeout.title;
        errorMessage = errorMessages.timeout.message;
        suggestions = errorMessages.timeout.suggestions;
      } else if (isNetworkError) {
        errorTitle = errorMessages.network.title;
        errorMessage = errorMessages.network.message;
        suggestions = errorMessages.network.suggestions;
      } else if (isContentError) {
        errorTitle = errorMessages.content.title;
        errorMessage = errorMessages.content.message;
        suggestions = errorMessages.content.suggestions;
      }

      return (
        <div 
          className="error-boundary"
          role="alert"
          aria-live="assertive"
        >
          <div className="error-boundary__content">
            {/* Error Icon */}
            <div className="error-boundary__header">
              <div className="error-boundary__icon-wrapper">
                <AlertTriangle className="error-boundary__icon" />
              </div>
              <h1 className="error-boundary__title">
                {errorTitle}
              </h1>
              <p className="error-boundary__message">
                {errorMessage}
              </p>
            </div>

            {/* Suggestions */}
            {suggestions.length > 0 && (
              <div className="error-boundary__suggestions">
                <h2 className="error-boundary__suggestions-title">
                  What you can try:
                </h2>
                <ul className="error-boundary__suggestions-list">
                  {suggestions.map((suggestion, index) => (
                    <li key={index} className="error-boundary__suggestion-item">
                      <span className="error-boundary__bullet">•</span>
                      {suggestion}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="error-boundary__actions">
              <button
                type="button"
                onClick={this.handleRetry}
                className="btn btn--neon-primary error-boundary__btn"
                aria-label={`Try again (attempt ${retryCount + 1})`}
              >
                <RefreshCw className="btn__icon" />
                Try Again
              </button>

              {retryCount > 1 && (
                <button
                  type="button"
                  onClick={this.handleReload}
                  className="btn btn--neon-secondary error-boundary__btn"
                  aria-label="Reload the entire page"
                >
                  Reload Page
                </button>
              )}
            </div>

            {/* Debug Info (Development Only) */}
            {import.meta?.env?.DEV && error && (
              <details className="error-boundary__debug">
                <summary className="error-boundary__debug-summary">
                  Debug Information (Development Only)
                </summary>
                <div className="error-boundary__debug-content">
                  <p><strong>Error:</strong> {error.toString()}</p>
                  <p><strong>Stack:</strong></p>
                  <pre className="error-boundary__pre">{error.stack}</pre>
                  {this.state.errorInfo && (
                    <>
                      <p><strong>Component Stack:</strong></p>
                      <pre className="error-boundary__pre">{this.state.errorInfo.componentStack}</pre>
                    </>
                  )}
                </div>
              </details>
            )}

            {/* Retry Count Display */}
            {retryCount > 0 && (
              <p className="error-boundary__retry-count">
                Retry attempts: {retryCount}
              </p>
            )}
          </div>
        </div>
      );
    }

    return children;
  }
}

export function withErrorBoundary<P extends object>(
  Component: React.ComponentType<P>,
  errorBoundaryProps?: Omit<ErrorBoundaryProps, 'children'>
) {
  return function WrappedComponent(props: P) {
    return (
      <ErrorBoundary {...errorBoundaryProps}>
        <Component {...props} />
      </ErrorBoundary>
    );
  };
}

export default ErrorBoundary;