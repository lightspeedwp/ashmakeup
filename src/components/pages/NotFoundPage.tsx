/**
 * @fileoverview 404 Not Found Page Component
 * Displays a neon-styled 404 error page with glitch effect and navigation options.
 * Fully responsive and accessible, adhering to the "Neon vs Atomic Black" design system.
 */

import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Home, ArrowLeft } from "lucide-react";
import "@/styles/blocks/not-found-page.css";

export function NotFoundPage() {
  const navigate = useNavigate();

  // Update document title on mount
  useEffect(() => {
    document.title = "Page Not Found | Ash Shaw - Makeup Artist";
  }, []);

  return (
    <main className="not-found-page" role="main">
      <div className="not-found-content">
        {/* Glitch Effect 404 Text */}
        <div className="not-found-glitch-text" data-text="404">
          404
        </div>

        <h1 className="not-found-title">
          Page Not Found
        </h1>

        <p className="not-found-description">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable. Let's get you back to the colorful world of makeup.
        </p>

        <div className="not-found-actions">
          <button
            onClick={() => navigate("/")}
            className="btn btn--neon-primary btn--lg"
            aria-label="Return to homepage"
          >
            <Home className="icon-md" />
            Back to Home
          </button>

          <button
            onClick={() => window.history.back()}
            className="btn btn--outline btn--lg"
            aria-label="Go back to previous page"
          >
            <ArrowLeft className="icon-md" />
            Go Back
          </button>
        </div>
      </div>
    </main>
  );
}
