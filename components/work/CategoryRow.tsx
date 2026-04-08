'use client';

import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Project } from '@/lib/projects-data';
import { ProjectCard } from './ProjectCard';

interface CategoryRowProps {
  category: string;
  projects: Project[];
  onCardClick: (project: Project) => void;
}

export function CategoryRow({ category, projects, onCardClick }: CategoryRowProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showArrows, setShowArrows] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  if (projects.length === 0) return null;

  return (
    <section
      className="relative"
      aria-labelledby={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
      onMouseEnter={() => setShowArrows(true)}
      onMouseLeave={() => setShowArrows(false)}
    >
      {/* Category Header */}
      <h2
        id={`category-${category.replace(/\s+/g, '-').toLowerCase()}`}
        className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-red-500 pl-4"
      >
        {category}
      </h2>

      {/* Scroll Container */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth"
          role="list"
          style={{
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-x',
          }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>

          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-none w-[280px] md:w-[400px]"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProjectCard project={project} onClick={onCardClick} />
            </div>
          ))}
        </div>

        {/* Arrow Buttons (Desktop only, visible on hover) */}
        {showArrows && projects.length > 2 && (
          <>
            <button
              onClick={scrollLeft}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all duration-300"
              aria-label={`Scroll ${category} left`}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={scrollRight}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 p-3 rounded-full transition-all duration-300"
              aria-label={`Scroll ${category} right`}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </>
        )}
      </div>
    </section>
  );
}
