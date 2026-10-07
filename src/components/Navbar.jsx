import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
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

  // Lock body scroll when mobile menu is open
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
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
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
            ? 'bg-[#050807]/85 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Name */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, 'home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] rounded-lg p-1"
            aria-label="Sunnatilla - Home"
          >
            <div className="relative w-10 h-10 rounded-xl bg-[#0B1110] border border-[#00F5A0]/30 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#00F5A0] group-hover:shadow-[0_0_15px_rgba(0,245,160,0.3)]">
              <span className="font-mono font-bold text-lg text-white group-hover:text-[#00F5A0] transition-colors">
                S
              </span>
              <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#00F5A0] blur-[1px]" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-[#F4F7F5] group-hover:text-white transition-colors">
                Sunnatilla
              </span>
              <span className="text-[11px] font-mono text-[#00F5A0] tracking-wider uppercase hidden sm:block">
                Frontend Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-[#0B1110]/80 border border-white/8 rounded-full px-4 py-1.5 backdrop-blur-sm" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] ${
                    isActive
                      ? 'text-[#050807] font-semibold bg-[#00F5A0] shadow-[0_0_14px_rgba(0,245,160,0.35)]'
                      : 'text-[#9AA6A0] hover:text-[#F4F7F5] hover:bg-white/5'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Language Switcher & Contact Button */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, 'contact')}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-[#F4F7F5] hover:border-[#00F5A0]/40 hover:text-[#00F5A0] hover:bg-[#00F5A0]/5 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0]"
            >
              <span>{t.nav.contact}</span>
              <ArrowUpRight size={13} className="text-[#00F5A0]" />
            </a>
          </div>

          {/* Mobile Menu Button & Language Switcher */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0B1110] border border-white/10 text-[#F4F7F5] hover:text-[#00F5A0] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] cursor-pointer"
              aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[65px] z-40 bg-[#050807]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl p-6 md:hidden max-h-[calc(100vh-70px)] overflow-y-auto"
          >
            <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className={`px-4 py-3 rounded-xl text-base font-medium flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#00F5A0]/10 text-[#00F5A0] border border-[#00F5A0]/30 font-semibold'
                        : 'text-[#9AA6A0] hover:text-[#F4F7F5] hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#00F5A0] shadow-[0_0_8px_#00F5A0]" />
                    )}
                  </a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/10 flex flex-col gap-3">
                <div className="flex items-center gap-2 px-4 py-2 text-xs font-mono text-[#00F5A0] bg-[#00F5A0]/5 rounded-lg border border-[#00F5A0]/20">
                  <span className="w-2 h-2 rounded-full bg-[#00F5A0] animate-pulse" />
                  <span>{t.nav.availableStatus}</span>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="w-full text-center py-3 rounded-xl bg-[#00F5A0] text-[#050807] font-semibold text-sm shadow-[0_0_20px_rgba(0,245,160,0.3)] cursor-pointer"
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
