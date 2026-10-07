import React, { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { LanguageSwitcher } from './LanguageSwitcher';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ activeSection }) => {
  const { t, lang } = useLanguage();
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

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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

  const menuContainerVariants = {
    closed: {
      opacity: 0,
      y: -18,
      scale: 0.98,
      transition: {
        duration: 0.22,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        damping: 24,
        stiffness: 280,
        staggerChildren: 0.05,
        delayChildren: 0.06,
      },
    },
  };

  const menuItemVariants = {
    closed: { opacity: 0, x: -14 },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 320,
        damping: 24,
      },
    },
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
          <div className="flex items-center gap-2.5 md:hidden">
            <LanguageSwitcher />
            
            {/* Custom Animated Morphing Hamburger Button */}
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`relative w-10 h-10 rounded-xl flex flex-col items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00F5A0] ${
                mobileMenuOpen
                  ? 'bg-[#141C18] border border-[#00F5A0]/50 text-[#00F5A0] shadow-[0_0_15px_rgba(0,245,160,0.2)]'
                  : 'bg-[#101413] border border-white/[0.08] text-[#F3F4F0] hover:text-[#00F5A0] hover:border-[#00F5A0]/30 hover:bg-[#131916]'
              }`}
              aria-label={mobileMenuOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={mobileMenuOpen}
            >
              <motion.span
                animate={mobileMenuOpen ? { rotate: 45, y: 8, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="h-[2px] bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { opacity: 0, scaleX: 0, x: -6 } : { opacity: 1, scaleX: 1, x: 0 }}
                transition={{ duration: 0.18, ease: 'easeOut' }}
                className="h-[2px] w-[14px] self-end mr-[10px] bg-current rounded-full"
              />
              <motion.span
                animate={mobileMenuOpen ? { rotate: -45, y: -8, width: 20 } : { rotate: 0, y: 0, width: 20 }}
                transition={{ type: 'spring', stiffness: 320, damping: 22 }}
                className="h-[2px] bg-current rounded-full"
              />
            </motion.button>
          </div>

        </div>
      </header>

      {/* Backdrop & Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark blurred backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.24 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/75 backdrop-blur-md md:hidden"
              aria-hidden="true"
            />

            {/* Elevated Mobile Drawer Card */}
            <motion.div
              variants={menuContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed inset-x-0 top-[68px] z-50 px-3.5 sm:px-6 md:hidden pointer-events-none"
            >
              <div className="max-w-md mx-auto rounded-2xl bg-[#090D0B]/95 backdrop-blur-2xl border border-white/[0.1] shadow-[0_20px_50px_rgba(0,0,0,0.85),0_0_30px_rgba(0,245,160,0.08)] overflow-hidden pointer-events-auto">
                {/* Glowing emerald accent top bar */}
                <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#00F5A0] to-transparent opacity-85" />

                {/* Status indicator bar */}
                <div className="px-5 py-3 border-b border-white/[0.06] flex items-center justify-between bg-white/[0.01]">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F5A0] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F5A0]"></span>
                    </span>
                    <span className="text-[11px] font-mono tracking-wider text-[#00F5A0] uppercase font-semibold">
                      {lang === 'uz' ? 'Aloqa uchun ochiq' : lang === 'ru' ? 'Доступен для проектов' : 'Available for work'}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#8E9691] tracking-widest uppercase">
                    {lang === 'uz' ? 'MENYU' : lang === 'ru' ? 'НАВИГАЦИЯ' : 'NAVIGATION'}
                  </span>
                </div>

                {/* Staggered Navigation items */}
                <nav className="p-3.5 flex flex-col gap-1.5" aria-label="Mobile Navigation">
                  {navLinks.map((link, idx) => {
                    const isActive = activeSection === link.id;
                    const numberFormatted = `0${idx + 1}`;
                    return (
                      <motion.a
                        key={link.id}
                        variants={menuItemVariants}
                        href={`#${link.id}`}
                        onClick={(e) => handleNavClick(e, link.id)}
                        className={`group px-3.5 py-2.5 rounded-xl text-sm font-mono flex items-center justify-between transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'bg-[#00F5A0]/10 border border-[#00F5A0]/30 text-[#00F5A0] font-semibold shadow-[0_0_15px_rgba(0,245,160,0.08)]'
                            : 'text-[#9AA29D] hover:text-[#F3F4F0] hover:bg-white/[0.04] border border-transparent'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-[11px] font-mono tracking-wider transition-colors ${
                              isActive ? 'text-[#00F5A0]' : 'text-[#555E59] group-hover:text-[#00F5A0]'
                            }`}
                          >
                            {numberFormatted} //
                          </span>
                          <span className="text-sm font-medium tracking-wide">
                            {link.label}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {isActive ? (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#00F5A0] shadow-[0_0_6px_#00F5A0]" />
                          ) : (
                            <ChevronRight
                              size={14}
                              className="text-[#555E59] group-hover:text-[#00F5A0] group-hover:translate-x-0.5 transition-all"
                            />
                          )}
                        </div>
                      </motion.a>
                    );
                  })}

                  {/* Drawer Footer CTA */}
                  <motion.div
                    variants={menuItemVariants}
                    className="pt-3 mt-1 border-t border-white/[0.06] flex flex-col gap-2.5"
                  >
                    <a
                      href="#contact"
                      onClick={(e) => handleNavClick(e, 'contact')}
                      className="group w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#00F5A0] to-[#82FCD0] text-[#080A0A] font-mono font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,160,0.25)] hover:shadow-[0_0_30px_rgba(0,245,160,0.4)] transition-all cursor-pointer"
                    >
                      <span>{t.hero.secondaryCta}</span>
                      <ArrowUpRight
                        size={14}
                        className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                      />
                    </a>

                    <div className="flex items-center justify-between px-1 pt-1 text-[10px] font-mono text-[#6A736E]">
                      <span>__war1pov__</span>
                      <span>Frontend Developer</span>
                    </div>
                  </motion.div>
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
