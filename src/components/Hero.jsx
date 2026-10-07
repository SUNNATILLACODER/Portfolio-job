import React, { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import sunnatillaImg from '../assets/sunnatilla.jpg';
import { MiniCity3D } from './MiniCity3D';

export const Hero = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('city');


  const techStack = [
    { name: "React 19", role: "Component Architecture" },
    { name: "Three.js", role: "3D Digital World" },
    { name: "JavaScript", role: "ES6+ / Logic" },
    { name: "Tailwind CSS", role: "Design Systems" },
    { name: "Vite 8", role: "Tooling & Bundling" },
  ];

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
      const elPosition = el.getBoundingClientRect().top;
      const offsetPosition = elPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-28 border-b border-white/[0.06] bg-editorial-grid"
      aria-label="Introduction"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Developer Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-[#F3F4F0] uppercase">
              Sunnatilla <span className="text-[#8E9691]">// __war1pov__</span>
            </span>
            <span className="text-xs font-mono text-[#8E9691] hidden sm:inline">
              — {t.hero.badge}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#8E9691]">
            <span>{t.hero.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/20" />
            <span className="text-[#00F5A0]">{t.hero.statusIndicator}</span>
          </div>
        </div>

        {/* Hero Asymmetric Grid: Headline + 3D Mini-City Architecture Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F3F4F0] leading-[1.05] mb-6">
              {t.hero.headlineLine1}{' '}
              <span className="text-gradient-accent block sm:inline">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#8E9691] leading-relaxed max-w-xl mb-10 font-sans">
              {t.hero.supporting}
            </p>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="group px-6 py-3.5 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#82FCD0] hover:shadow-[0_0_20px_rgba(0,245,160,0.25)] flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 rounded-lg bg-[#101413] border border-white/[0.08] text-[#F3F4F0] font-mono font-medium text-xs tracking-wider uppercase transition-colors hover:border-white/20 hover:text-white flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowUpRight size={13} className="text-[#8E9691]" />
              </button>
            </div>

            {/* Horizontal Tech Signature */}
            <div className="pt-6 border-t border-white/[0.06] w-full">
              <span className="text-[10px] font-mono tracking-widest text-[#8E9691] uppercase block mb-3">
                {t.hero.techSignature}
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1 rounded bg-[#101413] border border-white/[0.06] text-xs font-mono text-[#F3F4F0]"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Mini-City & Architecture Viewport */}
          <div className="lg:col-span-5">
            <div className="rounded-xl surface-card p-5 sm:p-6 border border-white/[0.08] shadow-2xl relative overflow-hidden">
              
              {/* Terminal Header Bar with Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="text-[11px] font-mono text-[#8E9691] ml-2">
                    architecture.config.js
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#080A0A] p-0.5 rounded border border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('city')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                      activeTab === 'city' ? 'bg-[#00F5A0] text-[#080A0A] font-bold' : 'text-[#8E9691] hover:text-white'
                    }`}
                  >
                    3D CITY
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                      activeTab === 'profile' ? 'bg-[#00F5A0] text-[#080A0A] font-bold' : 'text-[#8E9691] hover:text-white'
                    }`}
                  >
                    PROFILE
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('specs')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                      activeTab === 'specs' ? 'bg-[#00F5A0] text-[#080A0A] font-bold' : 'text-[#8E9691] hover:text-white'
                    }`}
                  >
                    TOKENS
                  </button>
                </div>
              </div>

              {/* Tab 1: 3D Futuristic Digital Mini-City */}
              {activeTab === 'city' && (
                <div className="space-y-4">
                  <MiniCity3D />

                  {/* Component Spec Rows */}
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">3D Engine</span>
                      <span className="text-[#F3F4F0] font-medium">Three.js WebGL</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">Atmosphere</span>
                      <span className="text-[#00F5A0] font-medium">Neon Fog & Streams</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Developer Portrait (Full Uncropped) */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="relative aspect-square w-full rounded-lg bg-[#080A0A] border border-white/[0.08] overflow-hidden flex items-center justify-center p-1">
                    <img
                      src={sunnatillaImg}
                      alt="Sunnatilla - Frontend Developer"
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">Developer</span>
                      <span className="text-[#F3F4F0] font-medium">Sunnatilla (__war1pov__)</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">Role</span>
                      <span className="text-[#00F5A0] font-medium">Frontend Engineer</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 3: Design Tokens Code Inspector */}
              {activeTab === 'specs' && (
                <div className="p-4 rounded-lg bg-[#080A0A] border border-white/[0.06] font-mono text-[11px] space-y-2 text-[#8E9691]">
                  <div className="text-[#00F5A0]">// 3D Mini-City & System Tokens</div>
                  <div><span className="text-white">const</span> world = &#123;</div>
                  <div className="pl-4">engine: <span className="text-[#82FCD0]">"Three.js r174"</span>,</div>
                  <div className="pl-4">ambientLighting: <span className="text-[#82FCD0]">"Emerald #00F5A0"</span>,</div>
                  <div className="pl-4">dataHighways: <span className="text-[#a78bfa]">"Violet + Cyan"</span>,</div>
                  <div className="pl-4">fogDensity: <span className="text-emerald-400">0.038</span>,</div>
                  <div className="pl-4">fpsTarget: <span className="text-emerald-400">60</span>,</div>
                  <div className="pl-4">parallaxControl: <span className="text-emerald-400">true</span></div>
                  <div>&#125;;</div>
                  <div className="pt-2 text-[10px] text-white/40">Hardware-accelerated WebGL rendering</div>
                </div>
              )}

              {/* Bottom Telemetry Bar */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#8E9691]">
                <span className="flex items-center gap-1.5 text-[#F3F4F0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
                  <span>3D Digital World Active</span>
                </span>
                <span>Three.js · React 19</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
