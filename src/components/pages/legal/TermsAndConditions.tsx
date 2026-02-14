import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { termsOfService } from "../../../data/mock/pages/legal";
import "@/styles/blocks/legal-page.css";

export function TermsAndConditions() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page-container">
      <div className="legal-page-content">
        <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-lg">
          {termsOfService.title}
        </h1>
        
        <div className="legal-page-body">
          {termsOfService.sections.map((section, index) => (
            <section key={index}>
              <h2 className="text-section-h2 mb-fluid-sm">
                {section.heading}
              </h2>
              <p className="text-body-p mb-fluid-sm">
                {section.content}
              </p>
              {section.list && (
                <ul className="legal-page-list">
                  {section.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <div className="legal-page-footer">
            <button
              onClick={() => navigate("/")}
              className="legal-page-back-btn"
            >
              &larr; Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
