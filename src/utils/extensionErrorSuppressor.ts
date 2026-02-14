/**
 * @fileoverview Utility to suppress annoying 3rd party script and extension errors
 * that clutter the console but don't affect application functionality.
 */

export function initializeExtensionErrorSuppression() {
  if (typeof window === 'undefined') return;

  // 1. Suppress Console Errors
  const originalConsoleError = console.error;
  const originalConsoleWarn = console.warn;
  const originalConsoleLog = console.log;

  const shouldSuppress = (args: any[]) => {
    const message = args.map(arg => 
      typeof arg === 'string' ? arg : 
      arg instanceof Error ? arg.message + (arg.stack || '') : 
      JSON.stringify(arg)
    ).join(' ');

    return (
      message.includes('beholdReplaceChildren') ||
      message.includes("Cannot read properties of undefined (reading 'beholdReplaceChildren')") ||
      message.includes('Message getPage (id: 3) response timed out') ||
      message.includes('response timed out after 30000ms') ||
      (message.includes('getPage') && message.includes('timed out')) ||
      message.includes('chrome-extension://') ||
      message.includes('extension://')
    );
  };

  console.error = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalConsoleError.apply(console, args);
  };

  console.warn = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalConsoleWarn.apply(console, args);
  };

  console.log = (...args: any[]) => {
    if (shouldSuppress(args)) return;
    originalConsoleLog.apply(console, args);
  };

  // 2. Suppress Window Errors (Uncaught Exceptions) - Event Listener
  const handleWindowError = (event: ErrorEvent) => {
    const message = event.message || '';
    const errorObj = event.error;
    const stack = errorObj?.stack || '';
    
    if (
      message.includes('beholdReplaceChildren') ||
      stack.includes('beholdReplaceChildren') ||
      message.includes('Message getPage') || 
      message.includes('timed out')
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };

  // 3. Suppress Unhandled Rejections (Promises)
  const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
    const message = event.reason?.message || event.reason?.toString() || '';
    const stack = event.reason?.stack || '';
    
    if (
      message.includes('beholdReplaceChildren') ||
      stack.includes('beholdReplaceChildren') ||
      message.includes('Message getPage') ||
      message.includes('timed out')
    ) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  };

  window.addEventListener('error', handleWindowError, true);
  window.addEventListener('unhandledrejection', handleUnhandledRejection, true);

  // 4. Suppress Window Errors - Old School Handler (for broader compatibility)
  const originalOnerror = window.onerror;
  window.onerror = function(msg, url, line, col, error) {
    const message = String(msg);
    if (
      message.includes('beholdReplaceChildren') ||
      (error && error.stack && error.stack.includes('beholdReplaceChildren')) ||
      message.includes('Message getPage')
    ) {
      return true; // Return true to suppress the error
    }
    if (originalOnerror) {
      // @ts-ignore
      return originalOnerror.apply(this, arguments);
    }
    return false;
  };
}
