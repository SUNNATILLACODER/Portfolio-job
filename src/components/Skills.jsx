import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { skillsData } from '../data/skills';
import { GithubIcon } from './icons/GithubIcon';
import { 
  Atom, 
  Code2, 
  Palette, 
  FileCode, 
  Layout, 
  GitBranch, 
  Zap, 
  Terminal, 
  Smartphone, 
  ShieldCheck, 
  Boxes, 
  Gauge,
  CheckCircle2
} from 'lucide-react';

import { motion } from 'framer-motion';

export const Skills = () => {
  const { lang, t } = useLanguage();

  const getFrontendIcon = (name) => {
    switch (name) {
      case 'React': return <Atom size={22} className="text-[#00F5A0]" />;
      case 'JavaScript (ES6+)': return <Code2 size={22} className="text-[#35D9FF]" />;
      case 'Tailwind CSS': return <Palette size={22} className="text-[#00F5A0]" />;
      case 'HTML5': return <FileCode size={22} className="text-[#35D9FF]" />;
      case 'CSS3': return <Layout size={22} className="text-[#00F5A0]" />;
      default: return <Code2 size={22} className="text-[#00F5A0]" />;
    }
  };

  const getToolIcon = (name) => {
    switch (name) {
      case 'Git': return <GitBranch size={20} className="text-[#00F5A0]" />;
      case 'GitHub': return <GithubIcon size={20} className="text-white" />;
      case 'Vite': return <Zap size={20} className="text-[#35D9FF]" />;
      case 'Browser DevTools': return <Terminal size={20} className="text-[#00F5A0]" />;
      default: return <Terminal size={20} className="text-[#00F5A0]" />;
    }
  };

  const getPracticeIcon = (index) => {
    switch (index) {
      case 0: return <Smartphone size={20} className="text-[#00F5A0]" />;
      case 1: return <ShieldCheck size={20} className="text-[#35D9FF]" />;
      case 2: return <Boxes size={20} className="text-[#00F5A0]" />;
      case 3: return <Gauge size={20} className="text-[#35D9FF]" />;
      default: return <CheckCircle2 size={20} className="text-[#00F5A0]" />;
    }
  };

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 border-t border-white/5 bg-[#080D0B]"
      aria-label="Skills & Capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
            {t.skills.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7F5] tracking-tight leading-tight mb-4">
            {t.skills.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#9AA6A0] leading-relaxed">
            {t.skills.subtitle}
          </p>
        </div>

        {/* Group 1: Core Frontend (5 refined cards) */}
        <div className="mb-14">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#9AA6A0] mb-6 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
            <span>// {t.skills.categories.frontend}</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillsData.coreFrontend.map((skill) => {
              const description = skill.description[lang] || skill.description.en;
              return (
                <div
                  key={skill.name}
                  className="group p-5 rounded-2xl bg-[#0B1110] border border-white/8 hover:border-[#00F5A0]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#050807] border border-white/10 group-hover:border-[#00F5A0]/30 transition-colors">
                      {getFrontendIcon(skill.name)}
                    </div>
                    <span className="text-[10px] font-mono text-[#00F5A0] px-2 py-0.5 rounded bg-[#00F5A0]/10 border border-[#00F5A0]/20">
                      {skill.badge}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#F4F7F5] mb-1 group-hover:text-[#00F5A0] transition-colors">
                    {skill.name}
                  </h4>
                  <div className="text-[11px] font-mono text-[#9AA6A0]/80 mb-2.5">
                    {skill.category}
                  </div>
                  <p className="text-xs text-[#9AA6A0] leading-relaxed">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Group 2 & 3: Dev Tools & Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Dev Tools (4 items) */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9AA6A0] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF]" />
              <span>// {t.skills.categories.tools}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.devTools.map((tool) => {
                const desc = tool.description[lang] || tool.description.en;
                return (
                  <div
                    key={tool.name}
                    className="p-4 rounded-xl bg-[#0B1110] border border-white/5 hover:border-[#35D9FF]/40 transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-[#050807] border border-white/5">
                        {getToolIcon(tool.name)}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#F4F7F5] group-hover:text-[#35D9FF] transition-colors">
                          {tool.name}
                        </h4>
                        <span className="text-[10px] font-mono text-[#9AA6A0]">
                          {tool.role}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-[#9AA6A0] leading-relaxed mt-2">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Architecture & Engineering Standards (4 items) */}
          <div className="lg:col-span-6">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#9AA6A0] mb-6 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
              <span>// {t.skills.categories.architecture}</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skillsData.practices.map((practice, index) => {
                const title = practice.title[lang] || practice.title.en;
                const desc = practice.description[lang] || practice.description.en;
                return (
                  <div
                    key={index}
                    className="p-4 rounded-xl bg-[#0B1110] border border-white/5 hover:border-[#00F5A0]/30 transition-all group"
                  >
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="p-1.5 rounded-lg bg-[#050807] border border-white/5">
                        {getPracticeIcon(index)}
                      </div>
                      <h4 className="text-xs font-bold text-[#F4F7F5] group-hover:text-[#00F5A0] transition-colors">
                        {title}
                      </h4>
                    </div>
                    <p className="text-xs text-[#9AA6A0] leading-relaxed">
                      {desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
