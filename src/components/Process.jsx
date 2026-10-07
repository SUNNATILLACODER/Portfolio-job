import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

export const Process = () => {
  const { t } = useLanguage();

  return (
    <section
      id="process"
      className="relative py-24 sm:py-32 border-b border-white/[0.06] bg-[#080A0A]"
      aria-label="Workflow"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.06]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
              {t.process.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F4F0] tracking-tight">
              {t.process.heading}
            </h2>
          </div>

          <p className="text-sm text-[#8E9691] max-w-md leading-relaxed font-sans">
            {t.process.subtitle}
          </p>
        </div>

        {/* 4-Phase Chronological Cadence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.process.steps.map((step) => (
            <div
              key={step.number}
              className="p-6 sm:p-7 rounded-xl surface-card surface-card-hover border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
                  <span className="font-mono text-sm font-bold text-[#00F5A0]">
                    PHASE // {step.number}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                </div>

                <h3 className="font-display text-xl font-bold text-[#F3F4F0] mb-2">
                  {step.title}
                </h3>

                <p className="text-xs font-medium text-[#F3F4F0]/80 mb-3 leading-relaxed">
                  {step.summary}
                </p>

                <p className="text-xs text-[#8E9691] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/[0.04] text-[10px] font-mono text-[#8E9691] flex items-center justify-between">
                <span>Step {step.number} of 04</span>
                <span className="text-[#00F5A0]">Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
