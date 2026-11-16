export const skillsData = {
  aiEngineering: [
    {
      name: "Google Gemini AI & LLMs",
      category: "Generative AI",
      badge: "Neural",
      description: {
        en: "Advanced prompt engineering, context grounding, streaming tokens, and multimodal generative AI integration.",
        uz: "Prompt muhandisligi, kontekstni bog'lash, real vaqtda oqimli javoblar va multimodal sun'iy intellekt integratsiyasi.",
        ru: "Промпт-инжиниринг, контекстное связывание, стриминг ответов и мультимодальная интеграция генеративного ИИ."
      },
      icon: "Sparkles"
    },
    {
      name: "Autonomous AI Agents",
      category: "Agentic Systems",
      badge: "Automated",
      description: {
        en: "Multi-step agent workflows, tool calling, structured JSON output validation, and task orchestration.",
        uz: "Ko'p bosqichli AI agentlar, funksiyalarni avtomatik chaqirish, JSON ma'lumotlar sxemasi va vazifalar orkestratsiyasi.",
        ru: "Многошаговые AI-агенты, вызов функций (tool calling), валидация JSON-схем и оркестрация задач."
      },
      icon: "Cpu"
    },
    {
      name: "Python AI Bots (Aiogram 3)",
      category: "Intelligent Automation",
      badge: "Backend & Bots",
      description: {
        en: "Asynchronous Telegram assistants, webhook pipelines, neural Q&A bots, and business automation.",
        uz: "Asinxron Telegram botlar, veb-huklar, Gemini AI bilan bog'langan aqlli biznes yordamchilari va avtomatlashtirish.",
        ru: "Асинхронные Telegram-боты, вебхуки, интеллектуальные Q&A ассистенты на Gemini AI и автоматизация бизнеса."
      },
      icon: "Bot"
    },
    {
      name: "Neural UI & Smart Clients",
      category: "Client-Side AI",
      badge: "Frontend AI",
      description: {
        en: "Connecting React components with streaming AI endpoints, real-time typing simulations, and smart search.",
        uz: "React komponentlarini sun'iy intellekt oqimlari bilan bog'lash, real vaqtda matn generatsiyasi va aqlli qidiruv.",
        ru: "Подключение React к стриминговым AI API, визуализация генерации текста в реальном времени и умный поиск."
      },
      icon: "Brain"
    }
  ],

  creative3D: [
    {
      name: "Three.js & WebGL",
      category: "3D Graphics",
      badge: "60 FPS",
      description: {
        en: "Procedural 3D scene generation, custom shaders, atmospheric fog, and mouse/touch parallax cameras.",
        uz: "Protsedurali 3D sahnani render qilish, maxsus shaderlar, atmosferik tuman va sichqonchaga mos dinamik kamera.",
        ru: "Процедурные 3D сцены, кастомные шейдеры, атмосферный туман и параллакс камеры по движению мыши."
      },
      icon: "Box"
    },
    {
      name: "ACES Filmic & Tone Mapping",
      category: "Cinematic Rendering",
      badge: "WebGL",
      description: {
        en: "Cinematic color reproduction, dynamic light bounce, bloom emulation, and low-latency buffer optimization.",
        uz: "Kinematik rang uzatish, dinamik yorug'lik effektlari va kam resurs sarflovchi bufer optimallashtirish.",
        ru: "Кинематографичная цветопередача, динамическое освещение и оптимизация графических буферов."
      },
      icon: "Sun"
    }
  ],

  coreFrontend: [
    {
      name: "React",
      category: "Frontend Library",
      badge: "Core",
      description: {
        en: "Functional components, custom hooks, state management, and reusable UI architecture.",
        uz: "Funksional komponentlar, maxsus hook'lar, state boshqaruvi va modulli UI arxitekturasi.",
        ru: "Функциональные компоненты, кастомные хуки, управление состоянием и модульная UI архитектура."
      },
      icon: "Atom"
    },
    {
      name: "JavaScript (ES6+)",
      category: "Programming Language",
      badge: "Foundation",
      description: {
        en: "Modern ES6+ syntax, asynchronous programming (Promises, async/await), and DOM manipulation.",
        uz: "Zamonaviy ES6+ sintaksisi, asinxron dasturlash (Promises, async/await) va DOM boshqaruvi.",
        ru: "Современный синтаксис ES6+, асинхронное программирование (Promises, async/await) и работа с DOM."
      },
      icon: "Code2"
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      badge: "Styling",
      description: {
        en: "Utility-first design systems, custom themes, responsive breakpoints, and dark mode styling.",
        uz: "Utility-first dizayn tizimlari, moslashuvchan breakpointlar va qorong'u rejim uslublari.",
        ru: "Utility-first дизайн-системы, адаптивные брейкпоинты и стилизация темного режима."
      },
      icon: "Palette"
    },
    {
      name: "HTML5",
      category: "Markup Language",
      badge: "Standard",
      description: {
        en: "Semantic element structure, accessibility (ARIA), SEO meta practices, and valid markup.",
        uz: "Semantik teglar strukturasi, inklyuzivlik (ARIA), SEO standartlari va toza markup.",
        ru: "Семантическая структура элементов, доступность (ARIA), SEO-практики и валидная верстка."
      },
      icon: "FileCode"
    },
    {
      name: "CSS3",
      category: "Styling Language",
      badge: "Layouts",
      description: {
        en: "Flexbox, CSS Grid, custom properties (variables), transitions, and fluid typography.",
        uz: "Flexbox, CSS Grid, CSS o'zgaruvchilari, silliq o'tishlar va suyuq tipografiya.",
        ru: "Flexbox, CSS Grid, CSS-переменные, плавные переходы и адаптивная типографика."
      },
      icon: "Layout"
    }
  ],

  devTools: [
    {
      name: "Git",
      role: "Version Control",
      description: {
        en: "Branching strategies, clean commit history, and distributed version control.",
        uz: "Tarmoqlanish, tushunarli commitlar va versiyalarni boshqarish tizimi.",
        ru: "Ветвление, понятная история коммитов и распределенный контроль версий."
      },
      icon: "GitBranch"
    },
    {
      name: "GitHub",
      role: "Collaboration & Repos",
      description: {
        en: "Remote repository hosting, pull requests, issue tracking, and GitHub Pages / Vercel workflows.",
        uz: "Repozitoriylarni boshqarish, pull requestlar va Vercel integratsiyasi.",
        ru: "Удаленные репозитории, pull requests, отслеживание задач и деплой на GitHub Pages / Vercel."
      },
      icon: "Github"
    },
    {
      name: "Vite",
      role: "Build Tool & Bundler",
      description: {
        en: "Lightning-fast HMR dev environment, optimized modern build pipelines, and asset bundling.",
        uz: "Tezkor HMR serveri, optimallashtirilgan yig'ish jarayoni va resurslar boshqaruvi.",
        ru: "Быстрая разработка с HMR, оптимизированная сборка и эффективный бандлинг ресурсов."
      },
      icon: "Zap"
    },
    {
      name: "Browser DevTools",
      role: "Debugging & Profiling",
      description: {
        en: "Network inspection, responsive viewport emulation, performance profiling, and console debugging.",
        uz: "Tarmoq so'rovlari tahlili, ekran emulyatsiyasi va unumdorlikni tahlil qilish.",
        ru: "Инспекция сети, эмуляция мобильных устройств, профилирование и отладка в консоли."
      },
      icon: "Terminal"
    }
  ],

  practices: [
    {
      title: {
        en: "Responsive & Fluid Design",
        uz: "Moslashuvchan va Suyuq Dizayn",
        ru: "Адаптивный и Отзывчивый Дизайн"
      },
      description: {
        en: "Mobile-first philosophy ensuring seamless usability from 320px screens up to large monitors.",
        uz: "320px mobil ekranlardan boshlab keng monitorlargacha mukammal ko'rinishni ta'minlash.",
        ru: "Философия Mobile-first: безупречная работа от экранов 320px до широкоформатных мониторов."
      },
      icon: "Smartphone"
    },
    {
      title: {
        en: "Semantic & Accessible HTML",
        uz: "Semantik va Inklyuziv Veb",
        ru: "Семантичный и Доступный HTML"
      },
      description: {
        en: "Proper DOM landmarks, keyboard navigation support, and readable screen reader hierarchy.",
        uz: "To'g'ri DOM ierarxiyasi, klaviatura boshqaruvi va qulay o'qilish standartlari.",
        ru: "Корректная иерархия DOM, поддержка управления с клавиатуры и доступность для скринридеров."
      },
      titleShort: "A11y & Semantics"
    },
    {
      title: {
        en: "Clean Component Architecture",
        uz: "Toza Komponent Arxitekturasi",
        ru: "Чистая Архитектура Компонентов"
      },
      description: {
        en: "Decomposition into focused, maintainable, single-responsibility React components.",
        uz: "Har bir vazifaga aniq yo'naltirilgan, o'qilishi oson bo'lgan React komponentlari.",
        ru: "Разделение на сфокусированные, поддерживаемые React-компоненты с единой ответственностью."
      },
      titleShort: "Clean Code"
    },
    {
      title: {
        en: "Web Performance Engineering",
        uz: "Veb Unumdorlik Muhandisligi",
        ru: "Инженерия Производительности"
      },
      description: {
        en: "Zero layout shifts, efficient rendering lifecycles, and low bundle overhead.",
        uz: "Siljishlarsiz tezkor yuklanish, optimal render qilish va minimal ortiqcha hajm.",
        ru: "Отсутствие сдвигов макета, эффективные циклы рендеринга и легкий размер бандла."
      },
      titleShort: "Performance"
    }
  ]
};
