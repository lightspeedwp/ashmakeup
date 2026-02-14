/**
 * @fileoverview Video Modal Component
 * 
 * Displays a video in a modal lightbox.
 */

import React, { useEffect, useRef } from 'react';
import { Video } from '../../../data/types/videos';
import { X } from 'lucide-react';
import { useModal } from '../../common/ModalContext';

interface VideoModalProps {
  video: Video | null;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ video, isOpen, onClose }: VideoModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const { registerModal, updateModal, unregisterModal } = useModal();

  // Register modal with context
  useEffect(() => {
    registerModal('video-lightbox', 'lightbox');
    return () => unregisterModal('video-lightbox');
  }, [registerModal, unregisterModal]);

  // Sync open state
  useEffect(() => {
    updateModal('video-lightbox', isOpen);
  }, [isOpen, updateModal]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Focus trap
  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen || !video) return null;

  // Helper to ensure autoplay works or correct URL format
  const getVideoEmbedUrl = (url: string, platform: string) => {
    try {
      if (platform === 'youtube') {
        // Ensure it's an embed URL
        if (url.includes('watch?v=')) {
          return url.replace('watch?v=', 'embed/');
        }
        // Add autoplay
        return `${url}${url.includes('?') ? '&' : '?'}autoplay=1`;
      }
      if (platform === 'vimeo') {
         return `${url}${url.includes('?') ? '&' : '?'}autoplay=1`;
      }
      return url;
    } catch (e) {
      return url;
    }
  };

  const embedUrl = getVideoEmbedUrl(video.videoUrl, video.platform);

  return (
    <div 
      className="video-modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${video.title}`}
    >
      <div 
        className="video-modal-content" 
        onClick={e => e.stopPropagation()}
        ref={modalRef}
        tabIndex={-1}
      >
        <button 
          className="video-modal-close" 
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={32} />
        </button>
        
        <div className="video-player-container">
          <iframe 
            src={embedUrl} 
            title={video.title} 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
