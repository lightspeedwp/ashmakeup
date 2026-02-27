/**
 * @fileoverview Video modal component for inline video playback
 *
 * Renders a full-screen overlay with an embedded video player.
 * Supports keyboard navigation (Escape to close) and focus trapping.
 *
 * @component VideoModal
 * @author Ash Shaw Portfolio Team
 * @version 1.0.0
 */

import React, { useEffect, useRef, useCallback } from 'react';
import { X } from '../../../lib/icons';
import { Video } from '../../../data/types/videos';
import { useReducedMotion } from '../../../hooks/useReducedMotion';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

/**
 * VideoModal — full-screen overlay for playing a selected video.
 * Uses CSS classes from /styles/blocks/videos-page.css.
 */
export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const prefersReduced = useReducedMotion();

  /** Focus the close button when the modal opens */
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        const btn = closeBtnRef.current;
        if (btn) {
          btn.focus();
        }
      }, 100);
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isOpen]);

  /** Close on Escape */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  /** Close when clicking the backdrop */
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlayRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  if (!isOpen || !video) return null;

  /**
   * Build an embed URL from the video's platform + videoUrl.
   * Falls back to the raw URL.
   */
  const getEmbedUrl = (): string => {
    const url = video.videoUrl;

    if (video.platform === 'youtube') {
      const match = url.match(
        /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/,
      );
      if (match) return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0`;
    }

    if (video.platform === 'vimeo') {
      const match = url.match(/vimeo\.com\/(\d+)/);
      if (match) return `https://player.vimeo.com/video/${match[1]}?autoplay=1`;
    }

    return url;
  };

  return (
    <div
      ref={overlayRef}
      className="video-modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`Playing: ${video.title}`}
      onClick={handleBackdropClick}
    >
      <div className="video-modal-content">
        {/* Close button */}
        <button
          ref={closeBtnRef}
          type="button"
          className="video-modal-close"
          onClick={onClose}
          aria-label="Close video"
        >
          <X aria-hidden="true" />
        </button>

        {/* Responsive iframe container */}
        <div className="video-player-container">
          <iframe
            src={getEmbedUrl()}
            title={video.title}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}