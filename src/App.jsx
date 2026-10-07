import React from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { useActiveSection } from './hooks/useActiveSection';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { About } from './components/About';
import { Process } from './components/Process';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function PortfolioApp() {
  const activeSection = useActiveSection([
    'home',
    'projects',
    'skills',
    'about',
    'process',
    'contact'
  ]);

  return (
    <div className="relative min-h-screen bg-[#080A0A] text-[#F3F4F0] selection:bg-[#00F5A0]/20 selection:text-[#00F5A0] overflow-x-hidden antialiased">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#00F5A0] focus:text-[#080A0A] focus:font-mono focus:font-bold focus:rounded-md focus:shadow-xl"
      >
        Skip to main content
      </a>

      {/* Navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main Content */}
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Process />
        <Contact />
      </main>

      {/* Footer */}
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
