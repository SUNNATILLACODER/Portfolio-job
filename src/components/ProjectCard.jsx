import React, { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { GithubIcon } from './icons/GithubIcon';
import { ArrowUpRight, ShoppingBag, Eye, SlidersHorizontal, Plus, Check } from 'lucide-react';


export const ProjectCard = ({ project, onOpenDetails }) => {
  const { lang, t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartCount, setCartCount] = useState(2);
  const [addedItem, setAddedItem] = useState(null);

  const title = project.title[lang] || project.title.en;
  const category = project.category[lang] || project.category.en;
  const summary = project.summary[lang] || project.summary.en;

  const handleSimulateCart = (itemTitle) => {
    setAddedItem(itemTitle);
    setCartCount((c) => c + 1);
    setTimeout(() => setAddedItem(null), 1800);
  };

  if (project.isUpcoming) {
    return (
      <div className="rounded-xl surface-card p-6 sm:p-8 border border-white/[0.08] flex flex-col justify-between relative overflow-hidden group">
        <div className="absolute inset-0 bg-editorial-grid opacity-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
            <span className="text-[11px] font-mono tracking-wider text-[#82FCD0] uppercase flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#82FCD0]" />
              {t.projects.comingSoonTag}
            </span>
            <span className="text-xs font-mono text-[#8E9691]">{t.projects.slotLabel}</span>
          </div>

          <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#F3F4F0] mb-3">
            {title}
          </h3>

          <p className="text-sm text-[#8E9691] leading-relaxed mb-8 max-w-lg">
            {summary}
          </p>

          {/* Reserved Architectural Wireframe Visualization */}
          <div className="aspect-[16/9] w-full rounded-lg bg-[#080A0A] border border-white/[0.06] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden my-4">
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-[#8E9691] mb-3">
              <SlidersHorizontal size={20} className="text-[#00F5A0]" />
            </div>
            <div className="font-mono text-xs font-semibold text-[#F3F4F0] uppercase tracking-wider mb-1">
              ARCHITECTURAL WIREFRAME // PHASE 02
            </div>
            <div className="text-[11px] font-mono text-[#8E9691] max-w-xs">
              Next responsive frontend system currently in design and component staging.
            </div>
          </div>
        </div>

        {/* Bottom Tags & Source */}
        <div className="relative z-10 pt-6 mt-4 border-t border-white/[0.06] flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded bg-[#080A0A] border border-white/[0.06] text-[11px] font-mono text-[#8E9691]"
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.links.viewSource}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-[#8E9691] hover:text-[#00F5A0] transition-colors"
          >
            <span>GitHub</span>
            <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    );
  }

  // Flagship Project 1: Online Shop
  return (
    <div className="rounded-xl surface-card p-6 sm:p-10 border border-white/[0.08] relative overflow-hidden flex flex-col justify-between">
      
      {/* Top Metadata Header */}
      <div>
        <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0]" />
            <span className="text-xs font-mono tracking-wider text-[#00F5A0] uppercase font-semibold">
              {t.projects.featuredTag}
            </span>
            <span className="text-xs font-mono text-[#8E9691] ml-2">
              // {category}
            </span>
          </div>

          <span className="text-xs font-mono text-[#8E9691]">01 // SELECTED</span>
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-[#F3F4F0] mb-2">
              {title}
            </h3>
            <p className="text-sm sm:text-base text-[#8E9691] max-w-2xl leading-relaxed">
              {summary}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onOpenDetails(project)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono font-medium text-[#F3F4F0] hover:border-[#00F5A0]/40 hover:text-[#00F5A0] transition-colors cursor-pointer"
            >
              <Eye size={13} />
              <span>{t.projects.viewDetails}</span>
            </button>

            {project.links.viewSource && (
              <a
                href={project.links.viewSource}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-[#8E9691] hover:text-white transition-colors cursor-pointer"
                title="View Source on GitHub"
                aria-label="View Source on GitHub"
              >
                <GithubIcon size={16} />
              </a>
            )}

            {project.links.liveDemo && (
              <a
                href={project.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-semibold text-xs tracking-wide hover:bg-[#82FCD0] transition-colors cursor-pointer"
              >
                <span>{t.projects.liveDemo}</span>
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Flagship Interactive UI Simulation (Authentic TechGear Store Representation) */}
      <div className="w-full rounded-xl bg-[#080A0A] border border-white/[0.08] p-4 sm:p-6 my-6 shadow-inner">
        {/* Mockup Top Navigation Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06] text-xs font-mono">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
            </div>
            <span className="font-extrabold text-amber-400 tracking-tight text-sm">
              TECH<span className="text-white">GEAR</span>
            </span>
          </div>

          {/* Interactive Category Filter Tabs from TechGear */}
          <div className="hidden sm:flex items-center gap-1 bg-[#101413] p-1 rounded-md border border-white/[0.06]">
            {['Barchasi', 'Smartfonlar', 'Noutbuklar'].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`px-2.5 py-1 rounded text-[11px] cursor-pointer transition-colors ${
                  activeCategory === cat ? 'bg-[#00F5A0] text-[#080A0A] font-bold' : 'text-[#8E9691] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Interactive Cart & Theme Badge */}
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-amber-400 font-mono hidden md:inline">● REST API</span>
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#101413] border border-white/[0.08] text-[11px] text-[#F3F4F0]">
              <ShoppingBag size={13} className="text-[#00F5A0]" />
              <span>Savat ({cartCount})</span>
            </div>
          </div>
        </div>

        {/* Mockup Catalog Grid: 2 High-Precision Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
          
          {/* Product 1 */}
          <div className="p-4 rounded-lg bg-[#101413] border border-white/[0.06] flex flex-col justify-between group/item hover:border-white/20 transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className="text-[10px] font-mono text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">
                Smartfonlar
              </span>
              <span className="text-xs font-mono font-bold text-[#F3F4F0]">$1,099.00</span>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-[#F3F4F0] mb-1">
                iPhone 15 Pro Max Titanium
              </h4>
              <p className="text-xs text-[#8E9691]">
                A17 Pro chip, Super Retina XDR display, 48MP camera system.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleSimulateCart('phone')}
              className="w-full py-2 rounded bg-[#080A0A] border border-white/[0.08] text-xs font-mono text-[#F3F4F0] hover:border-[#00F5A0] hover:text-[#00F5A0] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {addedItem === 'phone' ? (
                <>
                  <Check size={13} className="text-[#00F5A0]" />
                  <span className="text-[#00F5A0]">Savatga qo'shildi</span>
                </>
              ) : (
                <>
                  <Plus size={13} />
                  <span>Savatga qo'shish</span>
                </>
              )}
            </button>
          </div>

          {/* Product 2 */}
          <div className="p-4 rounded-lg bg-[#101413] border border-white/[0.06] flex flex-col justify-between group/item hover:border-white/20 transition-all">
            <div className="flex items-start justify-between mb-3">
              <span className="text-[10px] font-mono text-[#00F5A0] bg-[#00F5A0]/10 px-2 py-0.5 rounded">
                Noutbuklar
              </span>
              <span className="text-xs font-mono font-bold text-[#F3F4F0]">$1,999.00</span>
            </div>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-[#F3F4F0] mb-1">
                MacBook Pro 16" M3 Max
              </h4>
              <p className="text-xs text-[#8E9691]">
                Liquid Retina XDR, 36GB Unified Memory, 512GB SSD storage.
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleSimulateCart('laptop')}
              className="w-full py-2 rounded bg-[#080A0A] border border-white/[0.08] text-xs font-mono text-[#F3F4F0] hover:border-[#00F5A0] hover:text-[#00F5A0] transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              {addedItem === 'laptop' ? (
                <>
                  <Check size={13} className="text-[#00F5A0]" />
                  <span className="text-[#00F5A0]">Savatga qo'shildi</span>
                </>
              ) : (
                <>
                  <Plus size={13} />
                  <span>Savatga qo'shish</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Mockup Telemetry Strip */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-[#8E9691]">
          <span>Jonli qidiruv, toifalar saralashi va Dark/Light rejim</span>
          <span className="text-[#00F5A0]">sunnatillacoder.github.io/Tech-gear</span>
        </div>
      </div>

      {/* Tags and Technical Specifications */}
      <div className="pt-4 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-[#080A0A] border border-white/[0.06] text-xs font-mono text-[#8E9691]"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="text-xs font-mono text-[#8E9691]">
          Configured in <code className="text-[#F3F4F0]">src/data/projects.js</code>
        </span>
      </div>

    </div>
  );
};
