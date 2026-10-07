import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const activeSection = useActiveSection([
    'home',
    'about',
    'projects',
    'skills',
    'process',
    'contact'
  ]);

  return (
    <div className="relative min-h-screen bg-[#050807] text-[#F4F7F5] selection:bg-[#00F5A0]/20 selection:text-[#00F5A0] overflow-x-hidden">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00F5A0] focus:text-[#050807] focus:font-bold focus:rounded-lg focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Persistent Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Landmarks */}
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Process />
        <Contact />
      </main>

      {/* Footer Landmark */}
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <PortfolioApp />
    </LanguageProvider>
  );
}
