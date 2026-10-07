import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Search, Compass, Cpu, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const Process = () => {
  const { t } = useLanguage();

  const stepIcons = [
    <Search size={22} className="text-[#00F5A0]" />,
    <Compass size={22} className="text-[#35D9FF]" />,
    <Cpu size={22} className="text-[#00F5A0]" />,
    <CheckCircle2 size={22} className="text-[#35D9FF]" />
  ];

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 border-t border-white/5 bg-[#050807]"
      aria-label="Working process"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
            {t.process.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F4F7F5] tracking-tight leading-tight mb-4">
            {t.process.heading}
          </h2>
          <p className="text-base sm:text-lg text-[#9AA6A0] leading-relaxed">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4-Step Process Grid with Connecting Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {t.process.steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative p-7 rounded-2xl bg-[#0B1110] border border-white/8 hover:border-[#00F5A0]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Step number and Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white/40 to-white/10 group-hover:from-[#00F5A0] group-hover:to-[#35D9FF] transition-all">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-xl bg-[#050807] border border-white/10 group-hover:border-[#00F5A0]/40 transition-colors">
                    {stepIcons[index]}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#F4F7F5] mb-2 group-hover:text-[#00F5A0] transition-colors">
                  {step.title}
                </h3>

                {/* Summary */}
                <p className="text-xs font-semibold text-[#00F5A0]/90 mb-3">
                  {step.summary}
                </p>

                {/* Detailed description */}
                <p className="text-xs text-[#9AA6A0] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress Indicator line */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-[#9AA6A0]">
                <span>Phase 0{index + 1}</span>
                <span className="text-[#00F5A0]">Systematic Flow</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
