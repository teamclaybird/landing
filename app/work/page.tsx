'use client';

import { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { FeaturedCarousel } from '@/components/work/FeaturedCarousel';
import { CategoryRow } from '@/components/work/CategoryRow';
import { ProjectDetailModal } from '@/components/work/ProjectDetailModal';
import { PROJECTS, CATEGORIES, Project } from '@/lib/projects-data';

export default function Work() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter featured projects
  const featuredProjects = useMemo(() => {
    return PROJECTS.filter((p) => p.isFeatured);
  }, []);

  // Group projects by category
  const projectsByCategory = useMemo(() => {
    return CATEGORIES.reduce(
      (acc, category) => {
        acc[category] = PROJECTS.filter((p) => p.category === category);
        return acc;
      },
      {} as Record<string, Project[]>
    );
  }, []);

  return (
    <div className="min-h-screen bg-black" id="our-work">
      <Header />

      {/* Featured Carousel */}
      <FeaturedCarousel
        projects={featuredProjects}
        onWatchClick={(project) => setSelectedProject(project)}
      />

      {/* Category Rows */}
      <main className="relative py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          {CATEGORIES.map((category) => {
            const projects = projectsByCategory[category];
            if (!projects || projects.length === 0) return null;

            return (
              <CategoryRow
                key={category}
                category={category}
                projects={projects}
                onCardClick={(project) => setSelectedProject(project)}
              />
            );
          })}
        </div>
      </main>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
