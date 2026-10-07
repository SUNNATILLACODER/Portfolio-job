import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ activeSection }) => {
  const { t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'about', label: t.nav.about },
    { id: 'process', label: t.nav.process },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080A0A]/90 backdrop-blur-md border-b border-white/[0.07] py-3.5 shadow-sm shadow-black/40'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo with __war1pov__ branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#00F5A0] rounded p-1"
            aria-label="Sunnatilla - __war1pov__"
          >
            <div className="flex items-center">
              <span className="font-mono text-base font-bold tracking-tight text-[#F3F4F0] group-hover:text-white transition-colors">
                <span className="text-[#00F5A0] font-bold">__</span>
                <span>war1pov</span>
                <span className="text-[#00F5A0] font-bold">__</span>
              </span>
            </div>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#00F5A0]/80 ml-1" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`px-3 py-1.5 text-xs font-mono tracking-wide rounded-md transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'text-[#00F5A0] bg-white/[0.04] font-semibold'
                      : 'text-[#8E9691] hover:text-[#F3F4F0] hover:bg-white/[0.02]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />

            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md text-xs font-mono font-medium text-[#F3F4F0] bg-[#101413] border border-white/[0.08] hover:border-[#00F5A0]/40 hover:text-[#00F5A0] transition-colors cursor-pointer"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight size={12} className="text-[#00F5A0]" />
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md bg-[#101413] border border-white/[0.08] text-[#F3F4F0] hover:text-[#00F5A0] cursor-pointer"
              aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#080A0A]/95 backdrop-blur-xl border-b border-white/[0.08] p-6 md:hidden shadow-2xl"
          >
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`px-4 py-3 rounded-lg text-sm font-mono flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-white/[0.06] text-[#00F5A0] font-semibold'
                        : 'text-[#8E9691] hover:text-[#F3F4F0] hover:bg-white/[0.02]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full text-center py-3 rounded-lg bg-[#00F5A0] text-[#080A0A] font-mono font-semibold text-xs tracking-wider uppercase cursor-pointer"
                >
                  {t.hero.secondaryCta}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
