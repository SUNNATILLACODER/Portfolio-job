import React, { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { ArrowDownRight, ArrowUpRight, Target } from 'lucide-react';
import sunnatillaImg from '../assets/sunnatilla.jpg';

export const Hero = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');

  const techStack = [
    { name: "HTML5 & CSS3", role: "Semantic & Responsive" },
    { name: "JavaScript", role: "ES6+ Logic" },
    { name: "React.js", role: "Component Architecture" },
    { name: "Flexbox & Grid", role: "Modern Layouts" },
    { name: "Git & GitHub", role: "Version Control" },
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
              Sunnatilla Sharipov <span className="text-[#8E9691]">// __war1pov__</span>
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

        {/* Hero Asymmetric Grid: Headline + Developer Architecture Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F3F4F0] leading-[1.05] mb-6">
              {t.hero.headlineLine1}{' '}
              <span className="text-gradient-accent block sm:inline">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#A3AAA5] leading-relaxed max-w-xl mb-10 font-sans">
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
                <ArrowUpRight size={13} className="text-[#A3AAA5]" />
              </button>
            </div>

            {/* Horizontal Tech Signature */}
            <div className="pt-6 border-t border-white/[0.06] w-full">
              <span className="text-[10px] font-mono tracking-widest text-[#A3AAA5] uppercase block mb-3">
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

          {/* Right Column: Developer Portrait & Resume Viewport */}
          <div className="lg:col-span-5">
            <div className="rounded-xl surface-card p-5 sm:p-6 border border-white/[0.08] shadow-2xl relative overflow-hidden">
              
              {/* Terminal Header Bar with Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  <span className="text-[11px] font-mono text-[#8E9691] ml-2">
                    resume.sunnatilla.dev
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#080A0A] p-0.5 rounded border border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    className={`px-3 py-1 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                      activeTab === 'profile' ? 'bg-[#00F5A0] text-[#080A0A] font-bold' : 'text-[#8E9691] hover:text-white'
                    }`}
                  >
                    {lang === 'uz' ? 'PROFIL' : lang === 'ru' ? 'ПРОФИЛЬ' : 'PROFILE'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('resume')}
                    className={`px-3 py-1 rounded text-[10px] font-mono cursor-pointer transition-colors ${
                      activeTab === 'resume' ? 'bg-[#00F5A0] text-[#080A0A] font-bold' : 'text-[#8E9691] hover:text-white'
                    }`}
                  >
                    {lang === 'uz' ? 'REZUME' : lang === 'ru' ? 'РЕЗЮМЕ' : 'RESUME'}
                  </button>
                </div>
              </div>

              {/* Tab 1: Developer Portrait (Full Uncropped - Visible immediately upon entering) */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="relative aspect-square w-full rounded-lg bg-[#080A0A] border border-white/[0.08] overflow-hidden flex items-center justify-center p-1">
                    <img
                      src={sunnatillaImg}
                      alt="Sunnatilla Sharipov - Frontend Developer"
                      className="w-full h-full object-contain rounded-md"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">
                        {lang === 'uz' ? 'Dasturchi' : lang === 'ru' ? 'Разработчик' : 'Developer'}
                      </span>
                      <span className="text-[#F3F4F0] font-medium">Sunnatilla Sharipov</span>
                    </div>
                    <div className="p-2.5 rounded bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">
                        {lang === 'uz' ? 'Tajriba' : lang === 'ru' ? 'Опыт' : 'Experience'}
                      </span>
                      <span className="text-[#00F5A0] font-medium">
                        {lang === 'uz' ? '1.5 - 2 yil tajriba' : lang === 'ru' ? '1.5 - 2 года опыта' : '1.5 - 2 Years Exp'}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              {/* Tab 2: Professional Resume Dossier */}
              {activeTab === 'resume' && (
                <div className="space-y-3.5 text-xs font-mono">
                  
                  {/* Top Candidate Summary */}
                  <div className="p-3.5 rounded-lg bg-[#080A0A] border border-white/[0.06] flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-display font-bold text-base text-[#F3F4F0]">Sunnatilla Sharipov</span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
                      </div>
                      <div className="text-[#00F5A0] font-semibold text-xs">
                        Frontend Developer
                      </div>
                    </div>
                    <div className="shrink-0 px-2.5 py-1 rounded bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-[11px] font-bold">
                      {lang === 'uz' ? "1.5 - 2 yil tajriba" : lang === 'ru' ? "1.5 - 2 года опыта" : "1.5 - 2 Yrs Exp"}
                    </div>
                  </div>

                  {/* Summary / Haqida */}
                  <div className="p-3.5 rounded-lg bg-[#080A0A] border border-white/[0.06] space-y-1.5">
                    <span className="text-[10px] text-[#8E9691] uppercase tracking-wider block">
                      {lang === 'uz' ? "// Haqida & Yondashuv" : lang === 'ru' ? "// О себе & Подход" : "// Profile Summary"}
                    </span>
                    <p className="text-[#F3F4F0] leading-relaxed text-[11px]">
                      {lang === 'uz'
                        ? "HTML, CSS, JavaScript va React bilan zamonaviy, responsive va foydalanuvchiga qulay web-saytlar yarataman. Yangi texnologiyalarni o‘rganishga va real loyihalarda tajriba oshirishga intilaman."
                        : lang === 'ru'
                        ? "Создаю современные, адаптивные и удобные веб-сайты с использованием HTML, CSS, JavaScript и React. Стремлюсь изучать новые технологии и развивать практический опыт на реальных проектах."
                        : "I build modern, responsive, and user-friendly web applications using HTML, CSS, JavaScript, and React. Committed to exploring modern technologies and leveling up practical engineering skills on real projects."}
                    </p>
                  </div>

                  {/* Maqsad / Goal */}
                  <div className="p-3.5 rounded-lg bg-[#00F5A0]/[0.03] border border-[#00F5A0]/20 flex items-start gap-2.5">
                    <Target size={16} className="text-[#00F5A0] shrink-0 mt-0.5" />
                    <div className="space-y-0.5">
                      <span className="text-[10px] text-[#00F5A0] font-bold uppercase tracking-wider block">
                        {lang === 'uz' ? "Maqsad" : lang === 'ru' ? "Цель" : "Primary Objective"}
                      </span>
                      <p className="text-[#F3F4F0] text-[11px] leading-relaxed">
                        {lang === 'uz'
                          ? "Zamonaviy, tezkor va foydalanuvchilar uchun qulay web-ilovalar yaratish."
                          : lang === 'ru'
                          ? "Создание современных, быстрых и удобных для пользователей веб-приложений."
                          : "Building modern, high-speed, and accessible user-friendly web applications."}
                      </p>
                    </div>
                  </div>

                  {/* Ko'nikmalar / Core Skills Grid */}
                  <div className="p-3.5 rounded-lg bg-[#080A0A] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] text-[#8E9691] uppercase tracking-wider block">
                      {lang === 'uz' ? "// Ko'nikmalar & Texnologiyalar" : lang === 'ru' ? "// Навыки & Технологии" : "// Core Technical Skills"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {(lang === 'uz'
                        ? [
                            "HTML5, CSS3, JavaScript",
                            "React.js",
                            "Responsive Web Design",
                            "Flexbox, CSS Grid",
                            "Git va GitHub",
                            "UI/UX va zamonaviy web dizayn",
                          ]
                        : lang === 'ru'
                        ? [
                            "HTML5, CSS3, JavaScript",
                            "React.js",
                            "Адаптивный веб-дизайн",
                            "Flexbox, CSS Grid",
                            "Git и GitHub",
                            "UI/UX и современный веб-дизайн",
                          ]
                        : [
                            "HTML5, CSS3, JavaScript",
                            "React.js",
                            "Responsive Web Design",
                            "Flexbox, CSS Grid",
                            "Git & GitHub",
                            "UI/UX & Modern Web Design",
                          ]
                      ).map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded bg-[#101413] border border-white/[0.08] text-[10px] text-[#F3F4F0] flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-[#00F5A0]" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              )}

              {/* Bottom Telemetry Bar */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#8E9691]">
                <span className="flex items-center gap-1.5 text-[#F3F4F0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
                  <span>Sunnatilla Sharipov // Frontend Developer</span>
                </span>
                <span>
                  {lang === 'uz' ? '1.5 - 2 Yil Tajriba' : lang === 'ru' ? '1.5 - 2 Года Опыта' : '1.5 - 2 Years Exp'}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
