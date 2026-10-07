import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { projectsData } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Sparkles, Layers } from 'lucide-react';

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
      className="relative py-24 sm:py-32 border-t border-white/5 bg-[#050807]"
      aria-label="Projects showcase"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
            {t.projects.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7F5] tracking-tight leading-tight mb-4">
            {t.projects.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#9AA6A0] leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* 2-Card Showcase Grid (Online Shop + Reserved Slot) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={handleOpenDetails}
            />
          ))}
        </div>

        {/* Honest documentation note */}
        <div className="mt-12 p-4 rounded-xl bg-[#0B1110] border border-white/5 flex items-center justify-between flex-wrap gap-3 text-xs font-mono text-[#9AA6A0]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0]" />
            <span>{t.projects.demoConfigNotice}</span>
          </div>
          <span className="text-[#35D9FF]">Modular projects.js config ready</span>
        </div>

      </div>

      {/* Case Details Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={handleCloseDetails}
      />
    </section>
  );
};
