import React, { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export const Projects = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenDetails = (project) => {
    setSelectedProject(project);
  };

  const handleCloseDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="relative py-24 sm:py-32 border-b border-white/[0.06] bg-[#080A0A]"
      aria-label="Selected Work"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.06]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
              {t.projects.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F4F0] tracking-tight">
              {t.projects.heading}
            </h2>
          </div>

          <p className="text-sm text-[#A3AAA5] max-w-md leading-relaxed font-sans">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Selected Projects Showcase */}
        <div className="space-y-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

      </div>

      {/* Case Study Technical Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseDetails}
      />
    </section>
  );
};
