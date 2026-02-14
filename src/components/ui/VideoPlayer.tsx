/**
 * Video Player Component
 * 
 * Accessible video player with custom controls and responsive design
 * 
 * @component
 * @returns {JSX.Element} Video player with controls
 * @version 1.1.1 - Semantic BEM Refactor
 */

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import "@/styles/blocks/video-player.css";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

export function VideoPlayer({
  src,
  poster,
  title = 'Video',
  className = '',
  autoPlay = false,
  loop = false,
  muted = false
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(muted);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    
    const handleTimeUpdate = () => setCurrentTime(video.currentTime);
    const handleDurationChange = () => setDuration(video.duration);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('durationchange', handleDurationChange);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('durationchange', handleDurationChange);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);
  
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };
  
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };
  
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };
  
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const vol = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.volume = vol;
      setVolume(vol);
      setIsMuted(vol === 0);
    }
  };
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };
  
  return (
    <div className={`video-player group ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="video-player__element"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline
        onClick={togglePlay}
      >
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
      
      {/* Custom Controls */}
      <div className="video-player__controls">
        {/* Progress Bar */}
        <div className="video-player__progress-container">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="video-player__progress"
            aria-label="Video progress"
          />
          <div className="video-player__time">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
        
        {/* Control Buttons */}
        <div className="video-player__buttons">
          {/* Play/Pause */}
          <button
            onClick={togglePlay}
            className="video-player__btn"
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
          >
            {isPlaying ? (
              <Pause />
            ) : (
              <Play />
            )}
          </button>
          
          {/* Volume */}
          <div className="video-player__volume-controls">
            <button
              onClick={toggleMute}
              className="video-player__btn"
              aria-label={isMuted ? 'Unmute video' : 'Mute video'}
            >
              {isMuted ? (
                <VolumeX />
              ) : (
                <Volume2 />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="video-player__volume"
              aria-label="Volume control"
            />
          </div>
          
          {/* Spacer */}
          <div className="video-player__spacer" />
          
          {/* Fullscreen */}
          <button
            onClick={toggleFullscreen}
            className="video-player__btn"
            aria-label="Toggle fullscreen"
          >
            <Maximize />
          </button>
        </div>
      </div>
      
      {/* Play Button Overlay */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="video-player__overlay-btn"
          aria-label="Play video"
        >
          <div className="video-player__play-icon">
            <Play />
          </div>
        </button>
      )}
      
      {/* Title Overlay */}
      {title && !isPlaying && (
        <div className="video-player__title-overlay">
          <h3 className="video-player__title">
            {title}
          </h3>
        </div>
      )}
    </div>
  );
}
