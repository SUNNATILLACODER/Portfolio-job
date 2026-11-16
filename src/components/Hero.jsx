import React, { useState } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Target, 
  Sparkles, 
  Bot, 
  Terminal, 
  Send, 
  Zap, 
  CheckCircle2, 
  MessageSquare 
} from 'lucide-react';
import sunnatillaImg from '../assets/sunnatilla.jpg';

const AI_PRESETS = [
  {
    id: "stack",
    icon: Sparkles,
    label: {
      uz: "AI & Frontend Steki",
      ru: "Стек ИИ и Frontend",
      en: "AI & Frontend Stack"
    },
    question: {
      uz: "Sunnatillaning to'liq AI va Frontend steki qanday?",
      ru: "Какой стек у Суннатиллы по ИИ и фронтенду?",
      en: "What is Sunnatilla's full AI & Frontend stack?"
    },
    answer: {
      uz: "Sunnatilla React 19, zamonaviy JavaScript (ES6+), Tailwind CSS va Three.js (WebGL 3D) bo'yicha mustaqil frontend muhandisi. Shuningdek, Google Gemini AI API, LLM prompt muhandisligi, Python (Aiogram 3) asosidagi aqlli Telegram botlari hamda avtonom AI agentlar tizimini mukammal biladi va amaliyotda qo'llaydi.",
      ru: "Суннатилла разрабатывает интерфейсы на React 19, JavaScript (ES6+), Tailwind CSS и Three.js (WebGL 3D). Также профессионально работает с Google Gemini AI API, промпт-инжинирингом, созданием умных Telegram-ботов на Python (Aiogram 3) и интеграцией автономных AI-агентов.",
      en: "Sunnatilla is a Frontend Engineer specializing in React 19, JavaScript (ES6+), Tailwind CSS, and Three.js (WebGL 3D). He actively integrates Google Gemini AI APIs, prompt engineering, Python (Aiogram 3) smart Telegram bots, and autonomous AI agents into modern applications."
    }
  },
  {
    id: "projects",
    icon: Bot,
    label: {
      uz: "AI Loyihalar",
      ru: "Проекты с ИИ",
      en: "AI Capabilities"
    },
    question: {
      uz: "Sun'iy intellekt bilan qanday loyihalar yarata oladi?",
      ru: "Какие проекты он может разработать с искусственным интеллектом?",
      en: "What AI-powered solutions can he build?"
    },
    answer: {
      uz: "1) Gemini AI bilan integratsiya qilingan aqlli savdo va mijozlarga xizmat ko'rsatish botlari; 2) Veb-saytlarga oqimli (streaming) neyron maslahatchilar; 3) Avtonom agentik ish oqimlari (ma'lumotlarni saralash va avtomatlashtirish); 4) 3D interaktiv vizual tajribalar.",
      ru: "1) Умные боты для продаж и клиентского сервиса на базе Gemini AI; 2) Стриминговые AI-ассистенты для интеграции в веб-сайты; 3) Автономные агентные процессы для автоматизации рутины; 4) 3D интерактивные визуализации.",
      en: "1) Smart sales & support bots powered by Gemini AI; 2) Real-time streaming AI assistants for web applications; 3) Autonomous agent workflows automating business tasks; 4) Interactive 3D WebGL experiences."
    }
  },
  {
    id: "contact",
    icon: Zap,
    label: {
      uz: "Bog'lanish & Narx",
      ru: "Связь и Заказ",
      en: "Hiring & Contact"
    },
    question: {
      uz: "Buyurtma berish yoki hamkorlik qilish tartibi qanday?",
      ru: "Как заказать разработку или начать сотрудничество?",
      en: "How to hire or collaborate on a project?"
    },
    answer: {
      uz: "Telegram orqali to'g'ridan-to'g'ri @war1pov_developer profiliga yozishingiz mumkin. Loyihangiz talablari (veb-sayt, internet-do'kon yoki AI bot) tezkor o'rganilib, eng zamonaviy va tezkor yechim taqdim etiladi.",
      ru: "Напишите напрямую в Telegram @war1pov_developer. Требования к вашему проекту (сайт, интернет-магазин или ИИ-бот) будут оперативно изучены для создания современного решения.",
      en: "Reach out directly via Telegram @war1pov_developer. Your project requirements (website, e-commerce, or AI bot) will be analyzed to build a tailored high-performance solution."
    }
  }
];

export const Hero = () => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedAiPreset, setSelectedAiPreset] = useState(AI_PRESETS[0]);

  const techStack = [
    { name: "React 19 & Next-Gen UI", role: "Component Architecture" },
    { name: "Google Gemini AI & LLMs", role: "Neural Integration" },
    { name: "Three.js & WebGL 3D", role: "60 FPS Interactive" },
    { name: "JavaScript (ES6+)", role: "Modern Async Logic" },
    { name: "Tailwind CSS (v4)", role: "Fluid Design Systems" },
    { name: "Python & AI Bots", role: "Aiogram 3 Automation" }
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
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-20 lg:pt-32 lg:pb-28 border-b border-white/[0.06] bg-editorial-grid overflow-hidden"
      aria-label="Introduction"
    >
      {/* Ambient background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#00F5A0]/[0.035] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-[#38BDF8]/[0.025] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        
        {/* Top Developer Meta Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-8 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F5A0] animate-neural-pulse" />
            <span className="text-xs font-mono tracking-wider text-[#F3F4F0] uppercase font-semibold">
              Sunnatilla Sharipov <span className="text-[#8E9691]">// __war1pov__</span>
            </span>
            <span className="text-xs font-mono text-[#00F5A0] bg-[#00F5A0]/10 px-2 py-0.5 rounded border border-[#00F5A0]/20 hidden sm:inline font-bold">
              FRONTEND &amp; AI ENGINEER
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono text-[#8E9691]">
            <span className="hidden sm:inline">{t.hero.location}</span>
            <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:inline" />
            <span className="text-[#00F5A0] flex items-center gap-1.5 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] animate-ping" />
              <span>{t.hero.statusIndicator}</span>
            </span>
          </div>
        </div>

        {/* Hero Asymmetric Grid: Headline + Developer Architecture Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Bold Editorial Headline */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[11px] font-mono text-[#00F5A0] mb-5">
              <Sparkles size={12} className="animate-spin" style={{ animationDuration: '6s' }} />
              <span>{lang === 'uz' ? "React 19 • Three.js WebGL • Google Gemini AI" : lang === 'ru' ? "React 19 • Three.js WebGL • Google Gemini AI" : "React 19 • Three.js WebGL • Google Gemini AI"}</span>
            </div>

            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#F3F4F0] leading-[1.05] mb-6">
              {t.hero.headlineLine1}{' '}
              <span className="text-gradient-ai block sm:inline">
                {t.hero.headlineLine2}
              </span>
            </h1>

            <p id="hero-intro-text" className="text-base sm:text-lg text-[#A3AAA5] leading-relaxed max-w-xl mb-8 font-sans">
              {lang === 'uz'
                ? "Men Sunnatillaman — toza muhandislik, 3D WebGL vizualizatsiyasi va Google Gemini sun'iy intellekti bilan qurollangan yuqori tezlikdagi zamonaviy veb-ilovalarni yaratuvchi Frontend & AI dasturchi."
                : lang === 'ru'
                ? "Я Суннатилла — Frontend & AI инженер, разрабатывающий высокоскоростные веб-приложения на React 19 с трехмерной графикой Three.js и интеграцией искусственного интеллекта Google Gemini."
                : t.hero.supporting}
            </p>

            {/* Quick High-Impact Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full mb-8">
              <div className="p-3 rounded-xl bg-[#101413] border border-white/[0.06] hover:border-[#00F5A0]/30 transition-all hover:-translate-y-0.5">
                <div className="text-lg sm:text-xl font-display font-bold text-[#00F5A0]">1.5 - 2+</div>
                <div className="text-[10px] font-mono text-[#A3AAA5] truncate">
                  {lang === 'uz' ? "Yil Amaliy Tajriba" : lang === 'ru' ? "Года Практики" : "Years Experience"}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#101413] border border-white/[0.06] hover:border-[#00F5A0]/30 transition-all hover:-translate-y-0.5">
                <div className="text-lg sm:text-xl font-display font-bold text-[#F3F4F0]">React 19</div>
                <div className="text-[10px] font-mono text-[#A3AAA5] truncate">
                  {lang === 'uz' ? "Zamonaviy UI Stek" : lang === 'ru' ? "Современный UI" : "Next-Gen UI"}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#101413] border border-white/[0.06] hover:border-[#00F5A0]/30 transition-all hover:-translate-y-0.5">
                <div className="text-lg sm:text-xl font-display font-bold text-[#82FCD0]">Gemini AI</div>
                <div className="text-[10px] font-mono text-[#A3AAA5] truncate">
                  {lang === 'uz' ? "LLM & Agentlar" : lang === 'ru' ? "LLM & Агенты" : "LLMs & Agents"}
                </div>
              </div>
              <div className="p-3 rounded-xl bg-[#101413] border border-white/[0.06] hover:border-[#00F5A0]/30 transition-all hover:-translate-y-0.5">
                <div className="text-lg sm:text-xl font-display font-bold text-[#00F5A0]">60 FPS</div>
                <div className="text-[10px] font-mono text-[#A3AAA5] truncate">
                  {lang === 'uz' ? "Three.js WebGL" : lang === 'ru' ? "Three.js WebGL" : "Three.js WebGL"}
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                type="button"
                onClick={() => handleScrollTo('projects')}
                className="group px-6 py-3.5 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-semibold text-xs tracking-wider uppercase transition-all duration-200 hover:bg-[#82FCD0] hover:shadow-[0_0_25px_rgba(0,245,160,0.35)] flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.primaryCta}</span>
                <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('contact')}
                className="px-6 py-3.5 rounded-lg bg-[#101413] border border-white/[0.08] text-[#F3F4F0] font-mono font-medium text-xs tracking-wider uppercase transition-colors hover:border-[#00F5A0]/40 hover:text-[#00F5A0] flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.secondaryCta}</span>
                <ArrowUpRight size={13} className="text-[#A3AAA5]" />
              </button>
            </div>

            {/* Horizontal Tech Signature */}
            <div className="pt-6 border-t border-white/[0.06] w-full">
              <span className="text-[10px] font-mono tracking-widest text-[#A3AAA5] uppercase block mb-3 font-semibold">
                {t.hero.techSignature} // ADVANCED CAPABILITIES
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="px-3 py-1 rounded-lg bg-[#101413] border border-white/[0.06] text-xs font-mono text-[#F3F4F0] hover:border-[#00F5A0]/30 transition-colors"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: High-End Developer Interactive Hub */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl surface-card surface-card-ai p-5 sm:p-6 border border-white/[0.1] shadow-2xl relative overflow-hidden">
              
              {/* Terminal Header Bar with 3 Dynamic Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08] mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  <span className="text-[11px] font-mono text-[#8E9691] ml-2 hidden sm:inline">
                    sunnatilla.dev // interactive
                  </span>
                </div>

                <div className="flex items-center gap-1 bg-[#080A0A] p-1 rounded-lg border border-white/[0.06]">
                  <button
                    type="button"
                    onClick={() => setActiveTab('profile')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-all ${
                      activeTab === 'profile' ? 'bg-[#00F5A0] text-[#080A0A] font-bold shadow-sm' : 'text-[#8E9691] hover:text-white'
                    }`}
                  >
                    {lang === 'uz' ? 'PROFIL' : lang === 'ru' ? 'ПРОФИЛЬ' : 'PROFILE'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('resume')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-all ${
                      activeTab === 'resume' ? 'bg-[#00F5A0] text-[#080A0A] font-bold shadow-sm' : 'text-[#8E9691] hover:text-white'
                    }`}
                  >
                    {lang === 'uz' ? 'REZUME' : lang === 'ru' ? 'РЕЗЮМЕ' : 'RESUME'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab('ai-console')}
                    className={`px-2.5 py-1 rounded text-[10px] font-mono cursor-pointer transition-all flex items-center gap-1 ${
                      activeTab === 'ai-console' ? 'bg-[#00F5A0] text-[#080A0A] font-bold shadow-sm' : 'text-[#00F5A0] hover:text-white'
                    }`}
                  >
                    <Sparkles size={10} />
                    <span>AI KONSOL</span>
                  </button>
                </div>
              </div>

              {/* Tab 1: Developer Portrait */}
              {activeTab === 'profile' && (
                <div className="space-y-4">
                  <div className="relative aspect-square w-full rounded-xl bg-[#080A0A] border border-white/[0.08] overflow-hidden flex items-center justify-center p-1.5 group">
                    <img
                      src={sunnatillaImg}
                      alt="Sunnatilla Sharipov - Frontend Developer"
                      width="480"
                      height="480"
                      fetchPriority="high"
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-102"
                    />

                    <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-[#080A0A]/90 backdrop-blur-md border border-white/[0.08] flex items-center justify-between text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
                        <span className="text-[#F3F4F0] text-[11px] font-medium">Toshkent, O'zbekiston</span>
                      </div>
                      <span className="text-[10px] text-[#00F5A0] font-semibold">● ONLINE</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <div className="p-2.5 rounded-lg bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">
                        {lang === 'uz' ? 'Ixtisoslik' : lang === 'ru' ? 'Специализация' : 'Specialization'}
                      </span>
                      <span className="text-[#F3F4F0] font-medium">Frontend &amp; AI</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-[#080A0A] border border-white/[0.04]">
                      <span className="text-[10px] text-[#8E9691] block uppercase">
                        {lang === 'uz' ? 'Tajriba' : lang === 'ru' ? 'Опыт' : 'Experience'}
                      </span>
                      <span className="text-[#00F5A0] font-medium">1.5 - 2+ Yil</span>
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
                        Frontend &amp; AI Systems Developer
                      </div>
                    </div>
                    <div className="shrink-0 px-2.5 py-1 rounded bg-[#00F5A0]/10 border border-[#00F5A0]/20 text-[#00F5A0] text-[11px] font-bold">
                      1.5 - 2+ Yil
                    </div>
                  </div>

                  {/* Summary / Haqida */}
                  <div className="p-3.5 rounded-lg bg-[#080A0A] border border-white/[0.06] space-y-1.5">
                    <span className="text-[10px] text-[#8E9691] uppercase tracking-wider block font-semibold">
                      {lang === 'uz' ? "// Haqida & Yondashuv" : lang === 'ru' ? "// О себе & Подход" : "// Profile Summary"}
                    </span>
                    <p className="text-[#F3F4F0] leading-relaxed text-[11px]">
                      {lang === 'uz'
                        ? "React 19, JavaScript, Tailwind CSS, Three.js 3D va Google Gemini AI integratsiyasi bilan zamonaviy, tezkor va foydalanuvchiga qulay veb-saytlar yarataman. Biznes jarayonlarini aqlli botlar orqali avtomatlashtirish tajribasiga egaman."
                        : lang === 'ru'
                        ? "Создаю быстрые, адаптивные веб-приложения на React 19, Tailwind CSS, Three.js 3D и интегрирую искусственный интеллект Google Gemini. Опыт автоматизации бизнес-процессов умными ботами."
                        : "I engineer modern web applications leveraging React 19, Tailwind CSS, Three.js 3D, and Google Gemini AI integration. Dedicated to clean architecture and intelligent process automation."}
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
                          ? "Mijozlar uchun eng yuqori tezlikdagi, konversiyali veb-ilovalar va sun'iy intellektli aqlli tizimlarni ishlab chiqish."
                          : lang === 'ru'
                          ? "Создание высокоскоростных конверсионных веб-приложений и интеллектуальных систем с искусственным интеллектом."
                          : "Building high-speed, converting web applications and intelligent AI-powered solutions."}
                      </p>
                    </div>
                  </div>

                  {/* Ko'nikmalar / Core Skills Grid */}
                  <div className="p-3.5 rounded-lg bg-[#080A0A] border border-white/[0.06] space-y-2">
                    <span className="text-[10px] text-[#8E9691] uppercase tracking-wider block font-semibold">
                      {lang === 'uz' ? "// Texnologik Stek" : lang === 'ru' ? "// Стек Технологий" : "// Core Technical Stack"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {[
                        "React 19 & Hooks",
                        "Google Gemini AI API",
                        "Three.js & WebGL 3D",
                        "Tailwind CSS (v4)",
                        "Python AI (Aiogram 3)",
                        "JavaScript (ES6+)",
                        "Git & GitHub CI/CD"
                      ].map((skill) => (
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

              {/* Tab 3: Interactive Live AI Console */}
              {activeTab === 'ai-console' && (
                <div className="space-y-3.5 text-xs font-mono">
                  
                  {/* Console Header Bar */}
                  <div className="p-3 rounded-lg bg-[#080A0A] border border-[#00F5A0]/20 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} className="text-[#00F5A0] animate-pulse" />
                      <span className="text-[11px] font-bold text-[#F3F4F0]">
                        Gemini-2.0 Neural Assistant
                      </span>
                    </div>
                    <span className="text-[10px] text-[#00F5A0] bg-[#00F5A0]/10 px-2 py-0.5 rounded border border-[#00F5A0]/20 font-bold">
                      LIVE CONSOLE
                    </span>
                  </div>

                  {/* Preset Question Selectors */}
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-[#8E9691] uppercase tracking-wider block">
                      {lang === 'uz' ? "// Savol tanlang:" : lang === 'ru' ? "// Выберите вопрос:" : "// Select prompt:"}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {AI_PRESETS.map((preset) => (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setSelectedAiPreset(preset)}
                          className={`px-2.5 py-1.5 rounded-md text-[10px] font-mono cursor-pointer transition-all flex items-center gap-1.5 ${
                            selectedAiPreset.id === preset.id
                              ? 'bg-[#00F5A0] text-[#080A0A] font-bold shadow-sm'
                              : 'bg-[#080A0A] border border-white/[0.08] text-[#A3AAA5] hover:text-white hover:border-[#00F5A0]/30'
                          }`}
                        >
                          <preset.icon size={11} />
                          <span>{preset.label[lang] || preset.label.en}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Terminal Dialogue Box */}
                  <div className="p-3.5 rounded-xl bg-[#080A0A] border border-white/[0.08] space-y-3">
                    <div className="flex items-start gap-2">
                      <span className="text-[#00F5A0] font-bold mt-0.5">&gt;</span>
                      <p className="text-[11px] text-[#F3F4F0] font-medium leading-relaxed">
                        {selectedAiPreset.question[lang] || selectedAiPreset.question.en}
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-white/[0.06] flex items-start gap-2">
                      <div className="w-4 h-4 rounded bg-[#00F5A0]/20 flex items-center justify-center text-[#00F5A0] text-[9px] font-bold shrink-0 mt-0.5">
                        AI
                      </div>
                      <p className="text-[11px] text-[#A3AAA5] leading-relaxed">
                        {selectedAiPreset.answer[lang] || selectedAiPreset.answer.en}
                      </p>
                    </div>
                  </div>

                  {/* Quick Telegram Action */}
                  <a
                    href="https://t.me/war1pov_developer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-[#00F5A0]/10 border border-[#00F5A0]/30 hover:bg-[#00F5A0]/20 text-[#00F5A0] text-[11px] font-mono font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send size={12} />
                    <span>{lang === 'uz' ? "Sunnatilla bilan to'g'ridan-to'g'ri bog'lanish" : lang === 'ru' ? "Связаться с Суннатиллой напрямую" : "Direct Contact via Telegram"}</span>
                  </a>

                </div>
              )}

              {/* Bottom Telemetry Bar */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-[#8E9691]">
                <span className="flex items-center gap-1.5 text-[#F3F4F0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
                  <span>Sunnatilla Sharipov // Frontend &amp; AI</span>
                </span>
                <span className="text-[#00F5A0] font-semibold">
                  {lang === 'uz' ? '1.5 - 2+ Yil Tajriba' : lang === 'ru' ? '1.5 - 2+ Года Опыта' : '1.5 - 2+ Years Exp'}
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
