import React from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { skillsData } from '../data/skills';
import { 
  Atom, 
  Layout, 
  Zap, 
  ShieldCheck 
} from 'lucide-react';


export const Skills = () => {
  const { lang, t } = useLanguage();

  const engineeringPriorities = [
    {
      title: "Responsive Interface Architecture",
      desc: "Engineering fluid layouts from 320px mobile viewports up to large displays using modern CSS Grid, Flexbox, and container strategies without layout shifts.",
      icon: <Layout size={18} className="text-[#00F5A0]" />
    },
    {
      title: "Reusable React Component Systems",
      desc: "Decomposing complex UIs into clean, single-responsibility components with strict prop interfaces, local state hygiene, and maintainable folder structure.",
      icon: <Atom size={18} className="text-[#82FCD0]" />
    },
    {
      title: "Semantic HTML & Accessibility (A11y)",
      desc: "Applying proper landmarks, keyboard focus management, ARIA roles, and high contrast ratios to ensure digital products are inclusive for all users.",
      icon: <ShieldCheck size={18} className="text-[#00F5A0]" />
    },
    {
      title: "Performance & Bundle Discipline",
      desc: "Prioritizing fast first-contentful paints, zero cumulative layout shifts (CLS), clean tree-shaking, and efficient client-side rendering lifecycles.",
      icon: <Zap size={18} className="text-[#82FCD0]" />
    }
  ];

  return (
    <section
      id="skills"
      className="relative py-24 sm:py-32 border-b border-white/[0.06] bg-[#080A0A]"
      aria-label="Capabilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/[0.06]">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-medium tracking-widest uppercase text-[#00F5A0] mb-3 block">
              {t.skills.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F3F4F0] tracking-tight">
              {t.skills.heading}
            </h2>
          </div>

          <p className="text-sm text-[#8E9691] max-w-md leading-relaxed font-sans">
            {t.skills.subtitle}
          </p>
        </div>

        {/* 2-Column Editorial Grid: Engineering Focus vs Tool Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Engineering Philosophy & Focus Areas */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#F3F4F0] font-semibold">
                // {t.skills.philosophyTitle}
              </h3>
            </div>

            <div className="space-y-4">
              {engineeringPriorities.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-xl surface-card surface-card-hover border border-white/[0.06]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-[#080A0A] border border-white/[0.06]">
                      {item.icon}
                    </div>
                    <h4 className="text-sm font-semibold text-[#F3F4F0]">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-xs text-[#8E9691] leading-relaxed pl-11">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Practical Technology Stack Index */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Core Frontend */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#F3F4F0] font-semibold">
                  // {t.skills.categories.frontend}
                </span>
                <span className="text-[11px] font-mono text-[#00F5A0]">Daily Driver</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillsData.coreFrontend.map((item) => (
                  <div
                    key={item.name}
                    className="p-4 rounded-xl bg-[#101413] border border-white/[0.06] flex flex-col justify-between"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold text-[#F3F4F0]">{item.name}</span>
                      <span className="text-[10px] font-mono text-[#00F5A0] bg-[#00F5A0]/10 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#8E9691] leading-relaxed">
                      {item.description[lang] || item.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Tools */}
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.06] mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-[#F3F4F0] font-semibold">
                  // {t.skills.categories.tools}
                </span>
                <span className="text-[11px] font-mono text-[#8E9691]">Workflow</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {skillsData.devTools.map((tool) => (
                  <div
                    key={tool.name}
                    className="p-3.5 rounded-xl bg-[#101413] border border-white/[0.06] text-center"
                  >
                    <span className="text-xs font-mono font-semibold text-[#F3F4F0] block mb-1">
                      {tool.name}
                    </span>
                    <span className="text-[10px] font-mono text-[#8E9691] block truncate">
                      {tool.role}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
