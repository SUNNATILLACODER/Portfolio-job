import React, { useEffect } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { GithubIcon } from './icons/GithubIcon';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-sm"
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
          initial={{ opacity: 0, scale: 0.98, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 10 }}
          transition={{ duration: 0.18 }}
          className="relative z-10 w-full max-w-3xl max-h-[90vh] bg-[#101413] border border-white/[0.12] rounded-xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#080A0A]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00F5A0]" />
              <span className="text-xs font-mono uppercase tracking-wider text-[#8E9691]">
                {t.projects.modal.title} // {currentCategory}
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#8E9691] hover:text-white hover:bg-white/[0.04] transition-colors cursor-pointer"
              aria-label={t.projects.modal.closeModal}
            >
              <X size={18} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            <div>
              <span className="text-xs font-mono text-[#00F5A0] uppercase block mb-1">
                {currentCategory}
              </span>
              <h3 id="project-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-[#F3F4F0]">
                {currentTitle}
              </h3>
              <p className="text-sm text-[#8E9691] mt-2 leading-relaxed">
                {currentSummary}
              </p>
            </div>

            {/* In-depth Overview */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00F5A0]">
                // {t.projects.modal.overview}
              </h4>
              <p className="text-sm text-[#F3F4F0] leading-relaxed">
                {currentDescription}
              </p>
            </div>

            {/* Problem & Approach */}
            {currentChallenge && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-[#080A0A] border border-white/[0.06]">
                  <h5 className="text-xs font-mono text-[#82FCD0] uppercase mb-1">
                    Problem / Requirements
                  </h5>
                  <p className="text-xs text-[#8E9691] leading-relaxed">
                    {currentChallenge}
                  </p>
                </div>
                {currentApproach && (
                  <div className="p-4 rounded-lg bg-[#080A0A] border border-white/[0.06]">
                    <h5 className="text-xs font-mono text-[#00F5A0] uppercase mb-1">
                      Architecture & Design
                    </h5>
                    <p className="text-xs text-[#8E9691] leading-relaxed">
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
                      <div key={index} className="flex items-start gap-2.5 text-xs text-[#F3F4F0]">
                        <CheckCircle size={14} className="text-[#00F5A0] mt-0.5 shrink-0" />
                        <span>{featText}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-[#00F5A0]">
                // {t.projects.modal.techStack}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded bg-[#080A0A] border border-white/[0.08] text-xs font-mono text-[#F3F4F0]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-6 py-4 bg-[#080A0A] border-t border-white/[0.08] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {project.links.liveDemo && (
                <a
                  href={project.links.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-semibold text-xs transition-colors hover:bg-[#82FCD0]"
                >
                  <ExternalLink size={13} />
                  <span>{t.projects.modal.visitLive}</span>
                </a>
              )}

              {project.links.viewSource && (
                <a
                  href={project.links.viewSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#101413] border border-white/[0.08] text-[#F3F4F0] font-mono text-xs hover:border-white/20 transition-colors"
                >
                  <GithubIcon size={14} />
                  <span>{t.projects.modal.browseSource}</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-mono text-[#8E9691] hover:text-white transition-colors cursor-pointer"
            >
              {t.projects.modal.closeModal}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
