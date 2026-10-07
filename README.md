# Sunnatilla — Futuristic Frontend Developer Portfolio

A production-ready personal portfolio built for **Sunnatilla**, an independent frontend developer. Designed with a creative-futuristic visual identity combining deep obsidian backgrounds, vivid emerald accents (`#00F5A0`), electric cyan highlights (`#35D9FF`), smooth micro-interactions, genuine bilingual support (English & Uzbek), and accessible, high-performance architecture.

---

## 🚀 Key Highlights & Features

- **Distinctive Creative-Futuristic Identity**: Curated dark palette (`#050807` / `#0B1110`), subtle cyber gridlines, ambient glows, and clean typography.
- **Genuine Bilingual System (EN / UZ)**: Real-time translation of all interface copy, navigation, project case data, and forms with `localStorage` persistence and dynamic `html lang` synchronization.
- **Project Case Studies**:
  - **Online Shop**: Showcased with an authentic CSS-crafted UI preview, verified features list, technical architecture breakdown, and editable links.
  - **More Coming Soon**: Thoughtfully designed blueprint slot representing upcoming productions without broken layouts.
- **Interactive Case Study Modal**: Accessible detail dialog with Esc key support and responsive layout.
- **Honest Contact Experience**: Real social profiles (Telegram `@war1pov_developer`, GitHub `SUNNATILLACODER`) and an honest form that triggers `mailto:` or copies messages directly for Telegram without simulated fake backend delivery.
- **Accessible & Responsive**: Full keyboard navigation, semantic HTML landmarks (`<header>`, `<main>`, `<section>`, `<footer>`), visible focus states, and mobile-first layouts tested from 320px screens to large desktop displays.

---

## 🛠️ Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | [React 19](https://react.dev/) |
| **Bundler & Tooling** | [Vite 8](https://vite.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite` |
| **Typography** | [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) |
| **Motion** | [Framer Motion](https://motion.dev/) |
| **Icons** | [Lucide React](https://lucide.dev/) + Custom SVG icons |

---

## 📂 Project Structure

```text
Portfolio/
├── public/
│   └── favicon.svg               # Futuristic glowing monogram favicon
├── src/
│   ├── assets/
│   │   └── hero.png              # Isometric layered UI platform graphic
│   ├── components/
│   │   ├── icons/
│   │   │   └── GithubIcon.jsx    # Reliable SVG GitHub icon
│   │   ├── Navbar.jsx            # Sticky navbar with active scroll spy & mobile drawer
│   │   ├── LanguageSwitcher.jsx  # English/Uzbek toggle
│   │   ├── Hero.jsx              # Hero section with interactive isometric graphic
│   │   ├── About.jsx             # Biography, designed monogram avatar & 4 principles
│   │   ├── Projects.jsx          # Project showcase container
│   │   ├── ProjectCard.jsx       # Large visual project preview cards
│   │   ├── ProjectModal.jsx      # Detailed project case study dialog
│   │   ├── Skills.jsx            # Core frontend, tools, & architecture cards
│   │   ├── Process.jsx           # 4-stage systematic development workflow
│   │   ├── Contact.jsx           # Direct links & functional message handler
│   │   └── Footer.jsx            # Minimal footer with back-to-top & copyright
│   ├── data/
│   │   ├── projects.js           # Centralized project case studies & URLs
│   │   ├── skills.js             # Technical skills & practical capabilities
│   │   └── contact.js            # Social handles & contact configurations
│   ├── hooks/
│   │   └── useActiveSection.js   # Precision scroll spy hook
│   ├── i18n/
│   │   ├── LanguageContext.jsx   # React context for active language state
│   │   └── translations.js       # Complete EN & UZ translation dictionaries
│   ├── App.jsx                   # Main layout and semantic landmarks
│   ├── index.css                 # Design tokens, grid patterns, glassmorphism
│   └── main.jsx                  # React application entry point
├── vercel.json                   # Vercel SPA routing configuration
├── vite.config.js                # Vite build config with Tailwind plugin
└── package.json                  # Dependencies and build scripts
```

---

## 💻 Local Installation & Development

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Creates an optimized, minified production bundle in the `dist/` directory.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ⚙️ Configuration Guide

### 1. Updating Project URLs (Online Shop & New Projects)
Open [`src/data/projects.js`](file:///c:/Users/User/OneDrive/Desktop/Project/Portfolio/src/data/projects.js):
```javascript
export const projectsData = [
  {
    id: "online-shop",
    links: {
      liveDemo: "https://your-online-shop-demo.vercel.app", // Enter live site URL here
      viewSource: "https://github.com/SUNNATILLACODER/online-shop", // Enter repository URL
      isLiveConfigured: true,
      isSourceConfigured: true
    },
    // ...
  }
];
```

### 2. Updating Contact Information & Social Profiles
Open [`src/data/contact.js`](file:///c:/Users/User/OneDrive/Desktop/Project/Portfolio/src/data/contact.js):
```javascript
export const contactConfig = {
  name: "Sunnatilla",
  githubUrl: "https://github.com/SUNNATILLACODER",
  telegramUrl: "https://t.me/war1pov_developer",
  email: "your-actual-email@gmail.com", // Set your preferred email address
};
```

### 3. Adding the Second Project Slot
In [`src/data/projects.js`](file:///c:/Users/User/OneDrive/Desktop/Project/Portfolio/src/data/projects.js), change `isUpcoming: false` on the second entry, specify your title, description, tags, and URLs.

### 4. Editing Bilingual Text
Edit [`src/i18n/translations.js`](file:///c:/Users/User/OneDrive/Desktop/Project/Portfolio/src/i18n/translations.js) to add or alter any copy in English or Uzbek.

---

## 🚀 Deployment Guide

### Deploying to Vercel

1. Push your repository to GitHub:
   ```bash
   git init
   git add .
   git commit -m "feat: initial production portfolio for Sunnatilla"
   git branch -M main
   git remote add origin https://github.com/SUNNATILLACODER/<your-repo-name>.git
   git push -u origin main
   ```
2. Log into [Vercel](https://vercel.com).
3. Click **Add New Project** and select your GitHub repository.
4. Framework Preset will be automatically detected as **Vite**.
5. Build Command: `npm run build`
6. Output Directory: `dist`
7. Click **Deploy**. The included `vercel.json` ensures all route and asset handling functions seamlessly.

---

## 📄 License
MIT © Sunnatilla. All rights reserved.
