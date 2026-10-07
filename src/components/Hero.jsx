import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ArrowDown, ArrowUpRight, Sparkles, Terminal, Code, Layers, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

export const Hero = () => {
  const { t } = useLanguage();

  const techBadges = [
    { name: "React", icon: "⚛️" },
    { name: "JavaScript", icon: "⚡" },
    { name: "Tailwind CSS", icon: "🎨" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "💎" },
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
      className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 lg:py-24 overflow-hidden bg-tech-grid"
      aria-label="Hero section"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#00F5A0]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-[#35D9FF]/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Eyebrow & Status pill */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6 flex-wrap"
            >
              <span className="px-3.5 py-1 rounded-full text-xs font-mono font-medium tracking-widest uppercase bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] shadow-[0_0_15px_rgba(0,245,160,0.15)] flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
                {t.hero.eyebrow}
              </span>

              <span className="px-3 py-1 rounded-full text-xs font-mono text-[#9AA6A0] bg-[#0B1110] border border-white/10 hidden sm:inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#35D9FF]" />
                {t.hero.statusBadge}
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] text-[#F4F7F5] mb-6 max-w-2xl"
            >
              {t.hero.headingLine1}{' '}
              <span className="text-gradient-emerald inline-block">
                {t.hero.headingHighlight}
              </span>
            </motion.h1>

            {/* Supporting Bio Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-[#9AA6A0] leading-relaxed max-w-xl mb-8"
            >
              {t.hero.supporting}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="group px-7 py-3.5 rounded-xl bg-[#00F5A0] text-[#050807] font-semibold text-sm tracking-wide transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,160,0.45)] hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00F5A0]"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="group px-7 py-3.5 rounded-xl bg-[#0B1110] border border-white/15 text-[#F4F7F5] font-semibold text-sm tracking-wide transition-all duration-300 hover:border-[#00F5A0]/40 hover:text-white hover:bg-[#00F5A0]/5 active:scale-[0.98] flex items-center gap-2 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
              >
                <span>{t.hero.secondaryCta}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
              </button>
            </motion.div>

            {/* Technology Strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-white/10 w-full"
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="text-[11px] font-mono tracking-wider text-[#9AA6A0] uppercase">
                  {t.hero.techStripLabel}
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  {techBadges.map((tech) => (
                    <div
                      key={tech.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B1110] border border-white/10 text-xs font-mono text-[#F4F7F5] hover:border-[#00F5A0]/40 transition-colors"
                    >
                      <span className="text-xs">{tech.icon}</span>
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Striking Abstract 3D / Isometric Futuristic Composition */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square flex items-center justify-center"
            >
              {/* Outer Decorative Tech Rings */}
              <div className="absolute inset-0 rounded-full border border-dashed border-[#00F5A0]/20 animate-spin" style={{ animationDuration: '45s' }} />
              <div className="absolute inset-8 rounded-full border border-[#35D9FF]/15" />
              <div className="absolute inset-16 rounded-full border border-white/5 bg-radial-glow" />

              {/* Main Isometric Layered Platform Card */}
              <div className="relative z-10 w-72 h-72 sm:w-80 sm:h-80 rounded-2xl glass-panel-glow p-6 flex flex-col items-center justify-between shadow-2xl animate-float-slow">
                {/* Header terminal strip */}
                <div className="w-full flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#35D9FF]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[10px] font-mono text-[#00F5A0] tracking-wider">
                    SUNNATILLA.CORE // V2.4
                  </span>
                </div>

                {/* Central Isometric Graphic using existing hero asset */}
                <div className="relative my-auto flex items-center justify-center">
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#00F5A0]/20 to-[#35D9FF]/20 rounded-full blur-xl animate-pulse-glow" />
                  <img
                    src={heroImg}
                    alt="Futuristic Layered UI Architecture"
                    className="relative w-44 h-44 object-contain filter drop-shadow-[0_10px_20px_rgba(0,245,160,0.3)] select-none pointer-events-none"
                    loading="eager"
                  />
                </div>

                {/* Bottom Status bar */}
                <div className="w-full pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#9AA6A0]">
                  <span className="flex items-center gap-1 text-[#F4F7F5]">
                    <Sparkles size={12} className="text-[#00F5A0]" />
                    <span>State: Reactive</span>
                  </span>
                  <span className="text-[#00F5A0]">100% Client Sync</span>
                </div>
              </div>

              {/* Floating Orbiting Micro-cards */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-2 sm:right-2 z-20 px-3.5 py-2 rounded-xl bg-[#0B1110]/90 backdrop-blur-md border border-[#00F5A0]/30 shadow-lg flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-[#00F5A0]/10 text-[#00F5A0]">
                  <Code size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-[#F4F7F5]">React 19 + Vite</div>
                  <div className="text-[9px] font-mono text-[#00F5A0]">Optimized Architecture</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-2 sm:left-2 z-20 px-3.5 py-2 rounded-xl bg-[#0B1110]/90 backdrop-blur-md border border-[#35D9FF]/30 shadow-lg flex items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-[#35D9FF]/10 text-[#35D9FF]">
                  <Layers size={14} />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-semibold text-[#F4F7F5]">Tailwind + Motion</div>
                  <div className="text-[9px] font-mono text-[#35D9FF]">Responsive Fluid UI</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="mt-14 sm:mt-16 flex justify-center">
          <button
            type="button"
            onClick={() => handleScrollTo('about')}
            className="flex flex-col items-center gap-2 text-xs font-mono text-[#9AA6A0] hover:text-[#00F5A0] transition-colors cursor-pointer group focus:outline-none"
            aria-label={t.hero.scrollHint}
          >
            <span>{t.hero.scrollHint}</span>
            <div className="w-5 h-8 rounded-full border border-white/20 group-hover:border-[#00F5A0] flex items-start justify-center p-1 transition-colors">
              <span className="w-1 h-2 rounded-full bg-[#00F5A0] animate-bounce" />
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};
