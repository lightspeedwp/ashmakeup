/**
 * @fileoverview Error Boundary component for catching and handling React errors
 * 
 * Provides comprehensive error catching and user-friendly error display with recovery options.
 * Includes timeout error handling, API error recovery, and accessibility support.
 * 
 * @author Ash Shaw Portfolio Team
 * @version 1.3.0 - Bundler-safe: no && or || in JSX
 */

import React, { Component, ReactNode } from 'react';
import { TriangleAlert, RefreshCw } from '../../lib/icons';
import { errorMessages } from '../../data/mock/ui/error';
import "../../styles/blocks/button.css";

// import.meta.env access completely removed — proven unreliable in this bundler
const _ebIsDev = false;

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
    const errorMessage = error && error.message ? error.message : '';
    const errorToString = error ? error.toString() : '';
    const finalErrorMessage = errorMessage ? errorMessage : errorToString;
    
    const errorStack = error && error.stack ? error.stack : '';
    const errorName = error && error.name ? error.name : '';
    
    // Check for timeout errors in message
    const isTimeoutMsg = finalErrorMessage.includes('Message getPage (id: 3) response timed out after 30000ms');
    const isGenericTimeout = finalErrorMessage.includes('response timed out after 30000ms');
    const hasGetPage = finalErrorMessage.includes('getPage');
    const hasTimedOut = finalErrorMessage.includes('timed out');
    const isGetPageTimeout = hasGetPage && hasTimedOut;
    const isGetPageMsg = finalErrorMessage.includes('Message getPage');
    
    // Check for extension errors in message
    const isBeholdError = finalErrorMessage.includes('beholdReplaceChildren');
    const hasExtensionUrl = finalErrorMessage.includes('extension://');
    const hasChromeExt = finalErrorMessage.includes('chrome-extension://');
    const hasMozExt = finalErrorMessage.includes('moz-extension://');
    
    // Check for async_hooks errors in message
    const hasAsyncHooks = finalErrorMessage.includes('async_hooks');
    const hasEsmNode = finalErrorMessage.includes('esm.sh/node/');
    
    // Check for errors in stack trace
    const stackHasAsyncHooks = errorStack.includes('async_hooks');
    const stackHasEsmNode = errorStack.includes('esm.sh/node/');
    const stackHasExtension = errorStack.includes('extension://');
    
    // Check for named errors
    const isTimeoutError = errorName === 'TimeoutError';
    const isExtensionError = errorName === 'ExtensionError';
    
    // Combine all checks
    const shouldIgnoreError = 
      isTimeoutMsg ||
      isGenericTimeout ||
      isGetPageTimeout ||
      isGetPageMsg ||
      isBeholdError ||
      hasExtensionUrl ||
      hasChromeExt ||
      hasMozExt ||
      hasAsyncHooks ||
      hasEsmNode ||
      stackHasAsyncHooks ||
      stackHasEsmNode ||
      stackHasExtension ||
      isTimeoutError ||
      isExtensionError;
    
    if (shouldIgnoreError) {
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

    if (_ebIsDev) {
      console.error('Error Boundary caught an error:');
      console.error(error);
      console.error('Error Info:');
      console.error(errorInfo);
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

      const messageText = error && error.message ? error.message : '';
      const hasTimedOut = messageText.includes('timed out');
      const hasTimeout = messageText.includes('timeout');
      const isTimeoutError = hasTimedOut ? true : hasTimeout;
      
      const hasNetwork = messageText.includes('network');
      const hasFetch = messageText.includes('fetch');
      const isNetworkError = hasNetwork ? true : hasFetch;
      
      const hasContentful = messageText.includes('Contentful');
      const hasCMS = messageText.includes('CMS');
      const isContentError = hasContentful ? true : hasCMS;
      
      const isBrowserExtensionError = messageText.includes('extension');

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

      const hasSuggestions = suggestions.length > 0;
      const shouldShowReload = retryCount > 1;
      const shouldShowDebug = _ebIsDev && error;
      const hasErrorInfo = this.state.errorInfo !== null;
      const shouldShowRetryCount = retryCount > 0;

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
                <TriangleAlert className="error-boundary__icon" />
              </div>
              <h1 className="error-boundary__title">
                {errorTitle}
              </h1>
              <p className="error-boundary__message">
                {errorMessage}
              </p>
            </div>

            {/* Suggestions */}
            {hasSuggestions ? (
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
            ) : null}

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

              {shouldShowReload ? (
                <button
                  type="button"
                  onClick={this.handleReload}
                  className="btn btn--neon-secondary error-boundary__btn"
                  aria-label="Reload the entire page"
                >
                  Reload Page
                </button>
              ) : null}
            </div>

            {/* Debug Info (Development Only) */}
            {shouldShowDebug ? (
              <details className="error-boundary__debug">
                <summary className="error-boundary__debug-summary">
                  Debug Information (Development Only)
                </summary>
                <div className="error-boundary__debug-content">
                  <p><strong>Error:</strong> {error.toString()}</p>
                  <p><strong>Stack:</strong></p>
                  <pre className="error-boundary__pre">{error.stack}</pre>
                  {hasErrorInfo ? (
                    <>
                      <p><strong>Component Stack:</strong></p>
                      <pre className="error-boundary__pre">{this.state.errorInfo ? this.state.errorInfo.componentStack : ''}</pre>
                    </>
                  ) : null}
                </div>
              </details>
            ) : null}

            {/* Retry Count Display */}
            {shouldShowRetryCount ? (
              <p className="error-boundary__retry-count">
                Retry attempts: {retryCount}
              </p>
            ) : null}
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