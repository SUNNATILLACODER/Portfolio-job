import React, { useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GithubIcon } from './icons/GithubIcon';
import { X, ExternalLink, CheckCircle, ShieldCheck, ArrowRight, Layers, Tag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';


export const ProjectModal = ({ project, isOpen, onClose }) => {
  const { lang, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const currentTitle = project.title[lang] || project.title.en;
  const currentCategory = project.category[lang] || project.category.en;
  const currentSummary = project.summary[lang] || project.summary.en;
  const currentDescription = project.description[lang] || project.description.en;
  const currentChallenge = project.challenge ? (project.challenge[lang] || project.challenge.en) : null;
  const currentApproach = project.approach ? (project.approach[lang] || project.approach.en) : null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        {/* Backdrop click */}
        <div
          className="absolute inset-0"
          onClick={onClose}
          aria-hidden="true"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-[#0B1110] border border-[#00F5A0]/30 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050807]">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#9AA6A0]">
                {t.projects.modal.title} // {currentCategory}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#9AA6A0] hover:text-white hover:bg-white/10 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
              aria-label={t.projects.modal.closeModal}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Title & Category */}
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-xs font-mono text-[#00F5A0] mb-2">
                {currentCategory}
              </div>
              <h3 id="project-modal-title" className="text-2xl sm:text-3xl font-extrabold text-[#F4F7F5]">
                {currentTitle}
              </h3>
              <p className="text-sm sm:text-base text-[#9AA6A0] mt-2 leading-relaxed">
                {currentSummary}
              </p>
            </div>

            {/* Overview / In-depth Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00F5A0]">
                // {t.projects.modal.overview}
              </h4>
              <p className="text-sm text-[#F4F7F5] leading-relaxed">
                {currentDescription}
              </p>
            </div>

            {/* Challenge & Solution */}
            {currentChallenge && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <h5 className="text-xs font-mono text-[#35D9FF] uppercase mb-1">
                    The Problem
                  </h5>
                  <p className="text-xs text-[#9AA6A0] leading-relaxed">
                    {currentChallenge}
                  </p>
                </div>
                {currentApproach && (
                  <div className="p-4 rounded-xl bg-[#00F5A0]/5 border border-[#00F5A0]/20">
                    <h5 className="text-xs font-mono text-[#00F5A0] uppercase mb-1">
                      The Design Approach
                    </h5>
                    <p className="text-xs text-[#9AA6A0] leading-relaxed">
                      {currentApproach}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Verified Features */}
            {project.verifiedFeatures && project.verifiedFeatures.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-[#00F5A0]">
                  // {t.projects.modal.verifiedFeatures}
                </h4>
                <div className="space-y-2">
                  {project.verifiedFeatures.map((feat, index) => {
                    const featText = feat[lang] || feat.en;
                    return (
                      <div key={index} className="flex items-start gap-2.5 text-xs text-[#F4F7F5]">
                        <CheckCircle size={15} className="text-[#00F5A0] mt-0.5 shrink-0" />
                        <span>{featText}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Technologies */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00F5A0]">
                // {t.projects.modal.techStack}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg bg-[#050807] border border-white/10 text-xs font-mono text-[#F4F7F5]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-[#050807] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#00F5A0] text-[#050807] font-semibold text-xs transition-transform hover:scale-[1.02] cursor-pointer"
                >
                  <ExternalLink size={14} />
                  <span>{t.projects.modal.visitLive}</span>
                </a>
              )}

              {project.links.viewSource && (
                <a
                  href={project.links.viewSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-[#F4F7F5] font-semibold text-xs hover:border-[#00F5A0]/40 transition-colors cursor-pointer"
                >
                  <GithubIcon size={14} />
                  <span>{t.projects.modal.browseSource}</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-[#9AA6A0] hover:text-white transition-colors cursor-pointer"
            >
              {t.projects.modal.closeModal}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
