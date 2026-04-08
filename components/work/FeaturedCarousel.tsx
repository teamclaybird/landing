'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/lib/projects-data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeaturedCarouselProps {
  projects: Project[];
  onWatchClick: (project: Project) => void;
}

export function FeaturedCarousel({ projects, onWatchClick }: FeaturedCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentProject = projects[currentSlide];

  // Auto-advance logic
  useEffect(() => {
    if (!isPaused && projects.length > 1) {
      autoPlayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % projects.length);
      }, 5000);

      return () => {
        if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      };
    }
  }, [isPaused, projects.length]);

  // Handle video play/pause on hover
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovering) {
      video.play().catch(() => {
        // Ignore play errors
      });
    } else {
      video.pause();
      video.currentTime = currentProject.thumbnailTime; // Reset to thumbnail frame
    }
  }, [isHovering, currentSlide, currentProject.thumbnailTime]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  if (projects.length === 0) return null;

  return (
    <div
      className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
      onMouseEnter={() => {
        setIsPaused(true);
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsPaused(false);
        setIsHovering(false);
      }}
      role="region"
      aria-label="Featured projects"
      aria-live="polite"
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          {/* Background Video */}
          <div className="absolute inset-0">
            <video
              ref={videoRef}
              src={currentProject.videoUrl}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onLoadedMetadata={(e) => {
                const video = e.currentTarget;
                video.currentTime = currentProject.thumbnailTime;
              }}
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.95) 100%)',
            }}
          />

          {/* Bottom-left Content */}
          <div className="absolute bottom-0 left-0 p-4 md:p-12 z-10 max-w-2xl">
            <p className="text-sm text-red-500 mb-2 tracking-wider uppercase">
              {currentProject.client}
            </p>
            <h2
              className="text-3xl md:text-7xl font-serif mb-4 text-white"
              style={{ fontFamily: 'Libre Caslon Condensed, serif' }}
            >
              {currentProject.title}
            </h2>
            <p className="text-base md:text-lg text-white/80 mb-6">
              {currentProject.tagline}
            </p>
            <Button
              onClick={() => onWatchClick(currentProject)}
              className="bg-white text-black hover:bg-white/90 font-semibold px-8 py-6 text-lg"
            >
              Watch
            </Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow Navigation (Desktop only) */}
      {projects.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            aria-label="Previous featured project"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all duration-300"
            aria-label="Next featured project"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </>
      )}

      {/* Dot Indicators */}
      {projects.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {projects.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                currentSlide === idx ? 'bg-white w-8' : 'bg-white/40 w-2'
              )}
              aria-label={`Go to slide ${idx + 1}`}
              aria-current={currentSlide === idx ? 'true' : 'false'}
            />
          ))}
        </div>
      )}
    </div>
  );
}
