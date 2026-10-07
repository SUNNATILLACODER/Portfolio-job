import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { MapPin, Check, Terminal, Compass, Shield, Zap } from 'lucide-react';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 border-b border-white/[0.06] bg-[#080A0A]"
      aria-label="About the developer"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 pb-6 border-b border-white/[0.06]">
          <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
            {t.about.eyebrow}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F4F0] tracking-tight leading-tight">
            {t.about.heading}
          </h2>
        </div>

        {/* Narrative & Developer Profile Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Monogram & Developer Signature */}
          <div className="lg:col-span-5">
            <div className="rounded-xl surface-card p-8 border border-white/[0.08] relative overflow-hidden">
              <div className="flex flex-col items-start">
                
                {/* Monogram Badge */}
                <div className="w-16 h-16 rounded-xl bg-[#080A0A] border border-white/[0.12] flex items-center justify-center font-mono text-2xl font-bold text-[#00F5A0] mb-6 shadow-inner">
                  &lt;W&gt;
                </div>

                <div className="font-mono text-xl font-bold text-[#F3F4F0] mb-1">
                  Sunnatilla <span className="text-[#00F5A0]">__war1pov__</span>
                </div>
                <div className="text-xs font-mono text-[#8E9691] mb-6">
                  {t.about.developerBadge}
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#080A0A] border border-white/[0.06] text-xs font-mono text-[#8E9691] mb-8">
                  <MapPin size={13} className="text-[#00F5A0]" />
                  <span>{t.about.basedIn}</span>
                </div>

                {/* Focus Badges */}
                <div className="w-full pt-6 border-t border-white/[0.06] space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-[#8E9691]">Focus</span>
                    <span className="text-[#F3F4F0]">Interface Systems</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/[0.04]">
                    <span className="text-[#8E9691]">Framework</span>
                    <span className="text-[#00F5A0]">React 19 & Tailwind</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-[#8E9691]">Availability</span>
                    <span className="text-[#82FCD0]">Freelance & Contract</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Authentic Editorial Narrative */}
          <div className="lg:col-span-7 space-y-6 text-[#8E9691] leading-relaxed text-base sm:text-lg font-sans">
            <p className="text-xl sm:text-2xl text-[#F3F4F0] font-normal leading-relaxed font-sans">
              "{t.about.bio1}"
            </p>
            <p>
              {t.about.bio2}
            </p>

            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
              <div className="p-4 rounded-lg bg-[#101413] border border-white/[0.06]">
                <div className="text-[#00F5A0] font-semibold mb-1">01 // TACTILE FEEDBACK</div>
                <div className="text-[#8E9691]">Interactions should feel immediate, predictable, and responsive to every user gesture.</div>
              </div>
              <div className="p-4 rounded-lg bg-[#101413] border border-white/[0.06]">
                <div className="text-[#82FCD0] font-semibold mb-1">02 // ZERO NOISE</div>
                <div className="text-[#8E9691]">Every border, token, and spacing value exists to clarify information hierarchy.</div>
              </div>
            </div>
          </div>

        </div>

        {/* 4 Genuine Development Principles */}
        <div>
          <div className="flex items-center gap-2 pb-4 mb-8 border-b border-white/[0.06]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#F3F4F0] font-semibold">
              // {t.about.principlesTitle}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.about.principles.map((item) => (
              <div
                key={item.number}
                className="p-6 rounded-xl surface-card border border-white/[0.06] flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs text-[#00F5A0] font-bold block mb-4">
                    {item.number}
                  </span>
                  <h4 className="text-base font-semibold text-[#F3F4F0] mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#8E9691] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
