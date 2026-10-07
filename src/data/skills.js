export const skillsData = {
  coreFrontend: [
    {
      name: "React",
      category: "Frontend Library",
      badge: "Core",
      description: {
        en: "Functional components, custom hooks, state management, and reusable UI architecture.",
        uz: "Funksional komponentlar, maxsus hook'lar, state boshqaruvi va modulli UI arxitekturasi."
      },
      icon: "Atom"
    },
    {
      name: "JavaScript (ES6+)",
      category: "Programming Language",
      badge: "Foundation",
      description: {
        en: "Modern ES6+ syntax, asynchronous programming (Promises, async/await), and DOM manipulation.",
        uz: "Zamonaviy ES6+ sintaksisi, asinxron dasturlash (Promises, async/await) va DOM boshqaruvi."
      },
      icon: "Code2"
    },
    {
      name: "Tailwind CSS",
      category: "CSS Framework",
      badge: "Styling",
      description: {
        en: "Utility-first design systems, custom themes, responsive breakpoints, and dark mode styling.",
        uz: "Utility-first dizayn tizimlari, moslashuvchan breakpointlar va qorong'u rejim uslublari."
      },
      icon: "Palette"
    },
    {
      name: "HTML5",
      category: "Markup Language",
      badge: "Standard",
      description: {
        en: "Semantic element structure, accessibility (ARIA), SEO meta practices, and valid markup.",
        uz: "Semantik teglar strukturasi, inklyuzivlik (ARIA), SEO standartlari va toza markup."
      },
      icon: "FileCode"
    },
    {
      name: "CSS3",
      category: "Styling Language",
      badge: "Layouts",
      description: {
        en: "Flexbox, CSS Grid, custom properties (variables), transitions, and fluid typography.",
        uz: "Flexbox, CSS Grid, CSS o'zgaruvchilari, silliq o'tishlar va suyuq tipografiya."
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
        uz: "Tarmoqlanish, tushunarli commitlar va versiyalarni boshqarish tizimi."
      },
      icon: "GitBranch"
    },
    {
      name: "GitHub",
      role: "Collaboration & Repos",
      description: {
        en: "Remote repository hosting, pull requests, issue tracking, and GitHub Pages / Vercel workflows.",
        uz: "Repozitoriylarni boshqarish, pull requestlar va Vercel integratsiyasi."
      },
      icon: "Github"
    },
    {
      name: "Vite",
      role: "Build Tool & Bundler",
      description: {
        en: "Lightning-fast HMR dev environment, optimized modern build pipelines, and asset bundling.",
        uz: "Tezkor HMR serveri, optimallashtirilgan yig'ish jarayoni va resurslar boshqaruvi."
      },
      icon: "Zap"
    },
    {
      name: "Browser DevTools",
      role: "Debugging & Profiling",
      description: {
        en: "Network inspection, responsive viewport emulation, performance profiling, and console debugging.",
        uz: "Tarmoq so'rovlari tahlili, ekran emulyatsiyasi va unumdorlikni tahlil qilish."
      },
      icon: "Terminal"
    }
  ],

  practices: [
    {
      title: {
        en: "Responsive & Fluid Design",
        uz: "Moslashuvchan va Suyuq Dizayn"
      },
      description: {
        en: "Mobile-first philosophy ensuring seamless usability from 320px screens up to large monitors.",
        uz: "320px mobil ekranlardan boshlab keng monitorlargacha mukammal ko'rinishni ta'minlash."
      },
      icon: "Smartphone"
    },
    {
      title: {
        en: "Semantic & Accessible HTML",
        uz: "Semantik va Inklyuziv Veb"
      },
      description: {
        en: "Proper DOM landmarks, keyboard navigation support, and readable screen reader hierarchy.",
        uz: "To'g'ri DOM ierarxiyasi, klaviatura boshqaruvi va qulay o'qilish standartlari."
      },
      titleShort: "A11y & Semantics"
    },
    {
      title: {
        en: "Clean Component Architecture",
        uz: "Toza Komponent Arxitekturasi"
      },
      description: {
        en: "Decomposition into focused, maintainable, single-responsibility React components.",
        uz: "Har bir vazifaga aniq yo'naltirilgan, o'qilishi oson bo'lgan React komponentlari."
      },
      titleShort: "Clean Code"
    },
    {
      title: {
        en: "Web Performance Engineering",
        uz: "Veb Unumdorlik Muhandisligi"
      },
      description: {
        en: "Zero layout shifts, efficient rendering lifecycles, and low bundle overhead.",
        uz: "Siljishlarsiz tezkor yuklanish, optimal render qilish va minimal ortiqcha hajm."
      },
      titleShort: "Performance"
    }
  ]
};
