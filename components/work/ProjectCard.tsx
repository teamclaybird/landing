'use client';

import { motion } from 'motion/react';
import { Project } from '@/lib/projects-data';
import { VideoThumbnail } from './VideoThumbnail';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onClick(project);
    }
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className="group cursor-pointer"
      onClick={() => onClick(project)}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="listitem"
    >
      {/* Thumbnail - Sharp corners enforced */}
      <div className="relative aspect-video overflow-hidden bg-black border border-white/10 group-hover:border-white/60 transition-all duration-300">
        <VideoThumbnail
          src={project.videoUrl}
          alt={`${project.title} thumbnail`}
          className="w-full h-full object-cover"
          seekTime={project.thumbnailTime}
        />
      </div>

      {/* Info below */}
      <div className="mt-3">
        <h3 className="text-lg font-semibold text-white line-clamp-1">
          {project.title}
        </h3>
        <p className="text-sm text-white/60">{project.client}</p>
      </div>
    </motion.div>
  );
}
