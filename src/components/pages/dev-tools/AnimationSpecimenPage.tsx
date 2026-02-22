/**
 * @fileoverview Neon Animations — interactive preview of every CSS keyframe animation
 * @component AnimationSpecimenPage
 * @version 1.0.0
 */

import React, { useEffect, useState, useCallback } from 'react';
import { Zap, Play, Pause } from 'lucide-react';
import { Breadcrumbs } from '../../ui/Breadcrumbs';
import { devToolBreadcrumbs } from '../../../data/mock/ui/breadcrumbs';
import '../../../styles/blocks/specimen-page.css';
import '../../../styles/blocks/animation-specimen.css';

import { setSEO } from '../../../utils/seo';
import { devToolsSEO } from '../../../data/mock/seo';

const BREADCRUMBS = devToolBreadcrumbs('Neon Animations');

interface AnimationDef {
  id: string;
  name: string;
  keyframes: string;
  duration: string;
  timing: string;
  iteration: string;
  category: 'utility' | 'neon' | 'ui';
  description: string;
}

const ANIMATIONS: AnimationDef[] = [
  // Utility
  { id: 'spin', name: 'spin', keyframes: 'spin', duration: '1s', timing: 'linear', iteration: 'infinite', category: 'utility', description: '360\u00B0 continuous rotation — loading spinners' },
  { id: 'pulse', name: 'pulse', keyframes: 'pulse', duration: '2s', timing: 'ease-in-out', iteration: 'infinite', category: 'utility', description: 'Opacity fade in/out — attention indicators' },
  { id: 'bounce', name: 'bounce', keyframes: 'bounce', duration: '2s', timing: 'ease', iteration: 'infinite', category: 'utility', description: 'Vertical bounce — scroll arrows, CTAs' },
  { id: 'float', name: 'float', keyframes: 'float', duration: '3s', timing: 'ease-in-out', iteration: 'infinite', category: 'utility', description: 'Gentle up/down drift — hero decorations' },
  { id: 'fadeIn', name: 'fadeIn', keyframes: 'fadeIn', duration: '0.5s', timing: 'ease', iteration: '1', category: 'utility', description: 'Opacity 0\u2192 1 — content reveals' },
  { id: 'slideIn', name: 'slideIn', keyframes: 'slideIn', duration: '0.4s', timing: 'ease-out', iteration: '1', category: 'utility', description: 'Slide up + fade — panels, menus' },
  { id: 'slideUp', name: 'slideUp', keyframes: 'slideUp', duration: '0.3s', timing: 'ease-out', iteration: '1', category: 'utility', description: 'Short vertical slide — tooltips' },
  { id: 'scaleIn', name: 'scaleIn', keyframes: 'scaleIn', duration: '0.3s', timing: 'ease-out', iteration: '1', category: 'utility', description: 'Scale 0.9\u21921 + fade — modals, popovers' },

  // Neon
  { id: 'gradientShift', name: 'gradientShift', keyframes: 'gradientShift', duration: '8s', timing: 'ease', iteration: 'infinite', category: 'neon', description: 'Background position shift — hero gradients' },
  { id: 'neonPulse', name: 'neonPulse', keyframes: 'neonPulse', duration: '2s', timing: 'ease-in-out', iteration: 'infinite', category: 'neon', description: 'Glow intensity variation — neon borders' },
  { id: 'neonPulsePurple', name: 'neonPulsePurple', keyframes: 'neonPulsePurple', duration: '2s', timing: 'ease-in-out', iteration: 'infinite', category: 'neon', description: 'Purple-specific glow pulse — featured cards' },
  { id: 'neonPulsePink', name: 'neonPulsePink', keyframes: 'neonPulsePink', duration: '2s', timing: 'ease-in-out', iteration: 'infinite', category: 'neon', description: 'Pink-specific glow pulse — CTAs' },
  { id: 'pulseRing', name: 'pulse-ring', keyframes: 'pulse-ring', duration: '2s', timing: 'ease-out', iteration: 'infinite', category: 'neon', description: 'Expanding ring ripple — scroll indicator' },

  // UI
  { id: 'shine', name: 'shine', keyframes: 'shine', duration: '1.5s', timing: 'ease', iteration: 'infinite', category: 'ui', description: 'Shimmer highlight — skeleton loaders' },
  { id: 'skeletonPulse', name: 'skeleton-pulse', keyframes: 'skeleton-pulse', duration: '2s', timing: 'ease-in-out', iteration: 'infinite', category: 'ui', description: 'Subtle opacity pulse — loading skeletons' },
  { id: 'caretBlink', name: 'caret-blink', keyframes: 'caret-blink', duration: '1.25s', timing: 'ease', iteration: 'infinite', category: 'ui', description: 'Blinking cursor — OTP inputs' },
];

const CATEGORY_LABELS: Record<string, string> = {
  utility: 'Utility Animations',
  neon: 'Neon Effect Animations',
  ui: 'UI Component Animations',
};

const CATEGORIES = ['utility', 'neon', 'ui'] as const;

export function AnimationSpecimenPage() {
  const [paused, setPaused] = useState<Set<string>>(new Set());

  useEffect(() => {
    setSEO(devToolsSEO.neon);
  }, []);

  const toggleAnimation = useCallback((id: string) => {
    setPaused((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const toggleAll = useCallback((category: string) => {
    const ids = ANIMATIONS.filter((a) => a.category === category).map((a) => a.id);
    setPaused((prev) => {
      const next = new Set(prev);
      const allPaused = ids.every((id) => next.has(id));
      ids.forEach((id) => {
        if (allPaused) next.delete(id);
        else next.add(id);
      });
      return next;
    });
  }, []);

  return (
    <main id="main-content" role="main" tabIndex={-1} className="specimen-page">
      <header className="specimen-page__hero">
        <div className="specimen-page__hero-content">
          <Breadcrumbs items={BREADCRUMBS} centered />
          <span className="specimen-page__hero-badge">Animations</span>
          <h1 className="text-section-h2 text-gradient-pink-purple-blue">Neon Animations</h1>
          <p className="specimen-page__hero-desc text-body-p">
            All CSS keyframe animations from the design system. Toggle each preview to play or pause. Animations automatically stop when users prefer reduced motion.
          </p>
        </div>
      </header>

      {CATEGORIES.map((cat) => {
        const anims = ANIMATIONS.filter((a) => a.category === cat);
        return (
          <section key={cat} className="specimen-section" aria-labelledby={`anim-${cat}`}>
            <div className="specimen-section__inner">
              <div className="anim-specimen__section-header">
                <h2 id={`anim-${cat}`} className="specimen-section__title text-card-h3">
                  <Zap className="specimen-section__title-icon" aria-hidden="true" />
                  {CATEGORY_LABELS[cat]}
                </h2>
                <button
                  type="button"
                  className="specimen-toggle"
                  onClick={() => toggleAll(cat)}
                  aria-label={`Toggle all ${CATEGORY_LABELS[cat]}`}
                >
                  {anims.every((a) => paused.has(a.id)) ? (
                    <Play className="specimen-toggle__icon" aria-hidden="true" />
                  ) : (
                    <Pause className="specimen-toggle__icon" aria-hidden="true" />
                  )}
                  {anims.every((a) => paused.has(a.id)) ? 'Play All' : 'Pause All'}
                </button>
              </div>

              <div className="specimen-grid specimen-grid--2">
                {anims.map((anim) => {
                  const isPaused = paused.has(anim.id);
                  return (
                    <div key={anim.id} className="specimen-card anim-specimen__card">
                      <div className="anim-specimen__preview-row">
                        <div
                          className={`anim-specimen__box anim-specimen__box--${anim.id}`}
                          style={{
                            animationPlayState: isPaused ? 'paused' : 'running',
                          }}
                        />
                        <div className="anim-specimen__info">
                          <p className="specimen-card__label">{anim.name}</p>
                          <code className="specimen-card__code">
                            animation: {anim.keyframes} {anim.duration} {anim.timing} {anim.iteration}
                          </code>
                          <p className="specimen-card__meta">{anim.description}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="specimen-toggle"
                        onClick={() => toggleAnimation(anim.id)}
                        aria-label={`${isPaused ? 'Play' : 'Pause'} ${anim.name} animation`}
                      >
                        {isPaused ? (
                          <Play className="specimen-toggle__icon" aria-hidden="true" />
                        ) : (
                          <Pause className="specimen-toggle__icon" aria-hidden="true" />
                        )}
                        {isPaused ? 'Play' : 'Pause'}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}
    </main>
  );
}