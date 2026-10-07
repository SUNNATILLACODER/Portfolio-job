import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { GithubIcon } from './icons/GithubIcon';
import { ExternalLink, ArrowUpRight, ShoppingBag, Sparkles, Clock, Check, Eye } from 'lucide-react';
import { motion } from 'framer-motion';


export const ProjectCard = ({ project, onOpenDetails }) => {
  const { lang, t } = useLanguage();

  const title = project.title[lang] || project.title.en;
  const category = project.category[lang] || project.category.en;
  const summary = project.summary[lang] || project.summary.en;

  if (project.isUpcoming) {
    return (
      <div className="group relative rounded-2xl bg-[#0B1110] border border-dashed border-white/15 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#35D9FF]/40">
        {/* Subtle background blueprint grid */}
        <div className="absolute inset-0 bg-tech-grid opacity-15 pointer-events-none" />

        {/* Top Meta */}
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#35D9FF] bg-[#35D9FF]/10 border border-[#35D9FF]/20">
              <Clock size={12} />
              <span>{t.projects.comingSoonTag}</span>
            </span>
            <span className="text-xs font-mono text-[#9AA6A0]">Slot 02</span>
          </div>

          <h3 className="text-2xl font-bold text-[#F4F7F5] mb-2 group-hover:text-[#35D9FF] transition-colors">
            {title}
          </h3>

          <p className="text-sm text-[#9AA6A0] leading-relaxed mb-6">
            {summary}
          </p>
        </div>

        {/* Visual Blueprint Mockup */}
        <div className="relative z-10 w-full aspect-[16/10] rounded-xl bg-[#050807] border border-white/10 flex flex-col items-center justify-center p-6 my-4 overflow-hidden">
          <div className="absolute -inset-10 bg-radial-glow-cyan opacity-40 animate-pulse-glow" />
          <div className="relative flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-[#35D9FF]/10 border border-[#35D9FF]/30 flex items-center justify-center text-[#35D9FF] mb-3 shadow-[0_0_20px_rgba(53,217,255,0.2)]">
              <Sparkles size={24} />
            </div>
            <span className="text-xs font-mono font-semibold text-[#F4F7F5] tracking-wider uppercase">
              NEXT RELEASE IN FLIGHT
            </span>
            <span className="text-[11px] font-mono text-[#9AA6A0] mt-1">
              New responsive architecture under active development
            </span>
          </div>
        </div>

        {/* Bottom tags */}
        <div className="relative z-10 pt-4 border-t border-white/5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono text-[#9AA6A0] px-2.5 py-0.5 rounded bg-white/5 border border-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    );
  }

  // Active Project 1: Online Shop
  return (
    <div className="group relative rounded-2xl glass-panel border border-white/10 p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:border-[#00F5A0]/40 hover:shadow-[0_0_30px_rgba(0,245,160,0.1)]">
      
      {/* Top Meta Info */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-[#00F5A0] bg-[#00F5A0]/10 border border-[#00F5A0]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-pulse" />
            <span>{category}</span>
          </span>
          <span className="text-xs font-mono text-[#00F5A0]">01 // FEATURED</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F4F7F5] mb-2 group-hover:text-[#00F5A0] transition-colors">
          {title}
        </h3>

        <p className="text-sm sm:text-base text-[#9AA6A0] leading-relaxed mb-6">
          {summary}
        </p>
      </div>

      {/* Visual CSS-Crafted UI Preview of Online Shop */}
      <div className="relative w-full aspect-[16/10] rounded-xl bg-[#050807] border border-white/10 p-4 my-2 overflow-hidden shadow-inner flex flex-col justify-between group-hover:border-[#00F5A0]/30 transition-all">
        {/* Mockup browser bar */}
        <div className="flex items-center justify-between pb-3 border-b border-white/5 text-[10px] font-mono text-[#9AA6A0]">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-red-500/70" />
            <span className="w-2 h-2 rounded-full bg-amber-500/70" />
            <span className="w-2 h-2 rounded-full bg-emerald-500/70" />
            <span className="ml-2 text-white/50 hidden sm:inline">shop.preview.dev</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#00F5A0]/10 text-[#00F5A0] text-[9px] font-bold">
              CART (3)
            </span>
          </div>
        </div>

        {/* Mockup Product Grid Display */}
        <div className="grid grid-cols-2 gap-3 py-2 my-auto">
          {/* Card Item 1 */}
          <div className="p-3 rounded-lg bg-[#0B1110] border border-white/5 flex flex-col justify-between">
            <div className="w-full h-12 rounded bg-gradient-to-r from-emerald-950/40 to-slate-900 flex items-center justify-center">
              <ShoppingBag size={18} className="text-[#00F5A0]" />
            </div>
            <div className="mt-2">
              <div className="text-[11px] font-semibold text-[#F4F7F5] truncate">Cyber Minimal Watch</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] font-mono text-[#00F5A0] font-bold">$189</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/10 text-white">Added</span>
              </div>
            </div>
          </div>

          {/* Card Item 2 */}
          <div className="p-3 rounded-lg bg-[#0B1110] border border-white/5 flex flex-col justify-between">
            <div className="w-full h-12 rounded bg-gradient-to-r from-cyan-950/40 to-slate-900 flex items-center justify-center">
              <Sparkles size={18} className="text-[#35D9FF]" />
            </div>
            <div className="mt-2">
              <div className="text-[11px] font-semibold text-[#F4F7F5] truncate">Aura Wireless Headset</div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-[10px] font-mono text-[#35D9FF] font-bold">$249</span>
                <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-[#00F5A0]">In Stock</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mockup footer status */}
        <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#9AA6A0]">
          <span className="text-[#00F5A0]">● Responsive Grid Verified</span>
          <span>Fast Cart Checkout Flow</span>
        </div>
      </div>

      {/* Tags */}
      <div className="pt-4 flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-mono text-[#9AA6A0] px-2.5 py-1 rounded-lg bg-[#050807] border border-white/8"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Card Action Buttons */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => onOpenDetails(project)}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-[#F4F7F5] hover:border-[#00F5A0]/40 hover:text-[#00F5A0] transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
        >
          <Eye size={14} className="text-[#00F5A0]" />
          <span>{t.projects.viewDetails}</span>
        </button>

        <div className="flex items-center gap-2">
          {project.links.viewSource && (
            <a
              href={project.links.viewSource}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#9AA6A0] hover:text-white hover:border-white/20 transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
              aria-label={t.projects.viewSource}
            >
              <GithubIcon size={16} />
            </a>
          )}

          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#00F5A0] text-[#050807] font-semibold text-xs hover:shadow-[0_0_15px_rgba(0,245,160,0.35)] transition-all cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
            >
              <span>{t.projects.liveDemo}</span>
              <ArrowUpRight size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
