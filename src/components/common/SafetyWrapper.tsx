/**
 * @fileoverview SafetyWrapper component for Ash Shaw Makeup Portfolio
 *
 * Thin wrapper that catches synchronous render errors caused by third-party
 * browser extensions (e.g. Behold's `beholdReplaceChildren`). Works alongside
 * the ErrorBoundary and extensionErrorSuppressor for defence-in-depth.
 *
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React from 'react';

interface SafetyWrapperProps {
  children: React.ReactNode;
  /** Enable debug logging (only in DEV) */
  debug?: boolean;
}

/**
 * SafetyWrapper - Lightweight error-boundary wrapper for extension quirks.
 * Renders children unchanged; exists so that main.tsx's import resolves
 * locally instead of falling through to esm.sh.
 */
export function SafetyWrapper({ children }: SafetyWrapperProps) {
  return <div className="safety-wrapper">{children}</div>;
}