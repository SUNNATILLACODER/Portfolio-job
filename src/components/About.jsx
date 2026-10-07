import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Smartphone, Code, ShieldCheck, Zap, MapPin, CheckCircle2, UserCheck } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  const principleIcons = [
    <Smartphone size={20} className="text-[#00F5A0]" />,
    <Code size={20} className="text-[#35D9FF]" />,
    <ShieldCheck size={20} className="text-[#00F5A0]" />,
    <Zap size={20} className="text-[#35D9FF]" />
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 border-t border-white/5 bg-[#080D0B]"
      aria-label="About section"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
            {t.about.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7F5] tracking-tight leading-tight">
            {t.about.heading}
          </h2>
        </div>

        {/* Main Content Grid: Bio & Monogram Avatar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Visual Monogram & Tech Credentials */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl glass-panel p-8 border border-white/10 overflow-hidden group hover:border-[#00F5A0]/40 transition-all duration-300">
              {/* Subtle cyber background grid */}
              <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                {/* Designed Geometric Monogram Visual */}
                <div className="relative w-32 h-32 mb-6 rounded-2xl bg-[#050807] border-2 border-[#00F5A0]/40 flex items-center justify-center shadow-[0_0_30px_rgba(0,245,160,0.15)] group-hover:scale-105 transition-transform duration-300">
                  <div className="absolute inset-1 rounded-xl border border-dashed border-[#35D9FF]/30" />
                  <span className="font-mono text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#00F5A0] to-[#35D9FF]">
                    S
                  </span>
                  <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-[#00F5A0] text-[#050807] text-[10px] font-mono font-bold">
                    DEV
                  </div>
                </div>

                {/* Profile Identity */}
                <h3 className="text-2xl font-bold text-[#F4F7F5] mb-1">
                  Sunnatilla
                </h3>
                <p className="text-sm font-mono text-[#00F5A0] mb-4">
                  {t.about.developerBadge}
                </p>

                <div className="flex items-center gap-1.5 text-xs font-mono text-[#9AA6A0] bg-[#050807]/60 px-3.5 py-1.5 rounded-full border border-white/5 mb-6">
                  <MapPin size={13} className="text-[#35D9FF]" />
                  <span>{t.about.basedIn}</span>
                </div>

                {/* Live Status Indicators */}
                <div className="w-full pt-4 border-t border-white/10 grid grid-cols-2 gap-3 text-left">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono text-[#9AA6A0] uppercase block">Specialization</span>
                    <span className="text-xs font-semibold text-[#F4F7F5]">Frontend UI/UX</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] font-mono text-[#9AA6A0] uppercase block">Stack</span>
                    <span className="text-xs font-semibold text-[#00F5A0]">React & CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Prose & Focus */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-[#9AA6A0] leading-relaxed text-base sm:text-lg">
            <p className="text-[#F4F7F5] text-lg sm:text-xl font-medium leading-relaxed">
              "{t.about.bio1}"
            </p>
            <p>
              {t.about.bio2}
            </p>

            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B1110] border border-white/5">
                <CheckCircle2 size={18} className="text-[#00F5A0] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F4F7F5]">Pixel Consistency</h4>
                  <p className="text-xs text-[#9AA6A0] mt-0.5">Strict adherence to spacing systems and typographic scales.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-[#0B1110] border border-white/5">
                <CheckCircle2 size={18} className="text-[#35D9FF] mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[#F4F7F5]">Zero Fluff</h4>
                  <p className="text-xs text-[#9AA6A0] mt-0.5">Intentional dependencies, lean JS bundles, and fast loading.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Working Principles Cards */}
        <div>
          <h3 className="text-xs font-mono font-medium tracking-widest uppercase text-[#9AA6A0] mb-8">
            // {t.about.principlesTitle}
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-[#0B1110] border border-white/8 hover:border-[#00F5A0]/40 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#00F5A0] px-2 py-0.5 rounded bg-[#00F5A0]/10 border border-[#00F5A0]/20">
                    {item.number}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors">
                    {principleIcons[index]}
                  </div>
                </div>

                <h4 className="text-base font-bold text-[#F4F7F5] mb-2 group-hover:text-[#00F5A0] transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-[#9AA6A0] leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
