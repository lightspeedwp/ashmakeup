/**
 * @fileoverview Videos Page Component
 * 
 * Showcases makeup tutorials, behind-the-scenes, and showcase videos.
 * Features a neon/atomic aesthetic with a responsive grid layout.
 */

import React, { useState } from 'react';
import { videos } from '../../../data/mock/videos';
import { Video } from '../../../data/types/videos';
import { VideoModal } from './VideoModal';
import { Play } from 'lucide-react';
import "@/styles/blocks/videos-page.css";
import { ImageWithFallback } from '../../figma/ImageWithFallback';
import { ResponsiveGridSlider } from '../../ui/ResponsiveGridSlider';
import { formatDate } from '../../../utils/formatDate';

// Import the video thumbnail image
import videoThumbnail from 'figma:asset/f0c4301e83be5c7dcfa724f611ca2ffcca9bf032.png';

// Map video IDs to their imported thumbnail images
const videoThumbnails: Record<string, string> = {
  'vid-1': videoThumbnail,
};

export function VideosPage() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVideoClick = (video: Video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Tiny delay to clear video after animation
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <main id="main-content" role="main" tabIndex={-1} className="videos-page">
      <div className="videos-header">
        <div className="videos-header__content">
          <h1 className="text-hero-h1 text-gradient-pink-purple-blue mb-fluid-md">
            Videos
          </h1>
          <p className="text-body-guideline mb-fluid-lg videos-header__description">
            Artistry in motion. Experience the energy of Berlin clubbing, cycle trips to parties, and the stories behind my makeup transformations.
          </p>
        </div>
      </div>

      {/* Unified Responsive Layout: Grid on Desktop, Slider on Mobile */}
      <section className="videos-grid-section px-horizontal-section">
        <ResponsiveGridSlider
          items={videos}
          keyExtractor={(video) => video.id}
          desktopColumns={3}
          renderItem={(video) => (
             <div 
              className="video-card"
              onClick={() => handleVideoClick(video)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleVideoClick(video);
                }
              }}
              aria-label={`Play video: ${video.title}`}
            >
              <div className="video-card__thumbnail-container">
                <ImageWithFallback 
                  src={videoThumbnails[video.id] || video.thumbnailUrl} 
                  alt={video.title} 
                  className="video-card__thumbnail"
                />
                <div className="video-card__play-button">
                  <Play className="video-card__play-icon" />
                </div>
                <div className="video-card__duration">
                  {video.duration}
                </div>
              </div>
              <div className="video-card__content">
                <h3 className="video-card__title">{video.title}</h3>
                <div className="video-card__meta">
                  <span>{video.category}</span>
                  <time>{formatDate(video.publishedAt)}</time>
                </div>
                <p className="video-card__description">{video.description}</p>
              </div>
            </div>
          )}
        />
      </section>

      <VideoModal 
        video={selectedVideo} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </main>
  );
}