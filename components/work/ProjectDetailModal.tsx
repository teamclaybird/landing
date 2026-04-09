'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Eye, Heart, MessageCircle } from 'lucide-react';
import { Project, formatNumber, formatDate } from '@/lib/projects-data';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  // ESC key and body scroll lock
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('keydown', handleEsc);
        document.body.style.overflow = 'unset';
      };
    }
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-2 md:p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: 'spring', damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-7xl"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute -top-12 right-0 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors z-10"
            aria-label="Close project details"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Content Container */}
          <div className="flex flex-col md:flex-row gap-0 md:gap-6 max-w-7xl w-full bg-black border-2 border-white/20 overflow-hidden">
            {/* Left: Video */}
            <div className="w-full md:w-2/3 aspect-video bg-black flex items-center justify-center">
              <video
                src={project.videoUrl}
                className="w-full h-full object-contain"
                controls
                autoPlay
                muted
                playsInline
              />
            </div>

            {/* Right: Stats Panel */}
            <div className="w-full md:w-1/3 p-6 md:p-8 bg-black overflow-y-auto max-h-[50vh] md:max-h-[80vh]">
              <div className="space-y-6">
                {/* Title & Client */}
                <div>
                  <h2
                    id="modal-title"
                    className="text-2xl md:text-3xl font-serif mb-2 text-white"
                    style={{ fontFamily: 'Libre Caslon Condensed, serif' }}
                  >
                    {project.title}
                  </h2>
                  <p className="text-sm text-red-500 tracking-wider uppercase">
                    {project.client}
                  </p>
                </div>

                {/* Stats Row */}
                <div className="flex gap-6 text-white/80">
                  <div className="flex items-center gap-2" title="Views">
                    <Eye className="w-5 h-5" />
                    <span className="text-lg font-semibold">
                      {formatNumber(project.stats.views)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2" title="Likes">
                    <Heart className="w-5 h-5" />
                    <span className="text-lg font-semibold">
                      {formatNumber(project.stats.likes)}
                    </span>
                  </div>
                  <div className="flex items-center gap-2" title="Comments">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-lg font-semibold">
                      {project.stats.comments}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/80 leading-relaxed text-sm md:text-base">
                  {project.description}
                </p>

                {/* Role Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="px-3 py-1 text-sm bg-white/10 rounded-full border border-white/20 text-white"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* Category & Meta */}
                <div className="pt-4 border-t border-white/10 space-y-2 text-sm text-white/60">
                  <div className="flex justify-between">
                    <span>Category:</span>
                    <span className="text-red-500">{project.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span className="text-white">{project.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Released:</span>
                    <span className="text-white">{formatDate(project.date)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
