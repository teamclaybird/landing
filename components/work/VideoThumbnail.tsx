'use client';

import { useEffect, useRef } from 'react';

interface VideoThumbnailProps {
  src: string;
  alt: string;
  className?: string;
  seekTime?: number; // Time in seconds to seek to for thumbnail
}

export function VideoThumbnail({ src, alt, className = '', seekTime = 2 }: VideoThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      // Seek to specific time for thumbnail
      video.currentTime = Math.min(seekTime, video.duration);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [seekTime]);

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      playsInline
      preload="metadata"
      aria-label={alt}
      style={{ borderRadius: 0 }}
    />
  );
}
