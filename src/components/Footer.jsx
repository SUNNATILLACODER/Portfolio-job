import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { contactConfig } from '../data/contact';
import { ArrowUp, Send, Mail, Heart } from 'lucide-react';


export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
    <footer className="relative bg-[#050807] border-t border-white/8 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#0B1110] border border-[#00F5A0]/30 flex items-center justify-center">
              <span className="font-mono font-bold text-base text-[#00F5A0]">S</span>
            </div>
            <div>
              <span className="font-bold text-base text-[#F4F7F5] block">
                Sunnatilla
              </span>
              <span className="text-xs text-[#9AA6A0]">
                {t.footer.tagline}
              </span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#9AA6A0]" aria-label="Footer Navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="hover:text-[#00F5A0] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1110] border border-white/10 text-xs font-mono text-[#9AA6A0] hover:text-[#00F5A0] hover:border-[#00F5A0]/40 transition-colors cursor-pointer"
            aria-label={t.footer.backToTop}
          >
            <span>{t.footer.backToTop}</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom copyright & attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9AA6A0]/80">
          <div>
            © {new Date().getFullYear()} Sunnatilla. {t.footer.allRights}
          </div>
          <div className="flex items-center gap-4">
            <span>{t.footer.designedAndBuilt}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
