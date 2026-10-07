import React from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { contactConfig } from '../data/contact';
import { GithubIcon } from './icons/GithubIcon';
import { ArrowUp, Send } from 'lucide-react';

const CURRENT_YEAR = new Date().getFullYear();


export const Footer = () => {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const navLinks = [
    { id: 'projects', label: t.nav.projects },
    { id: 'skills', label: t.nav.skills },
    { id: 'about', label: t.nav.about },
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
    <footer className="relative bg-[#080A0A] py-14 sm:py-20 border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Row: Brand + Navigation + Social Links */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/[0.06]">
          
          {/* Brand with __war1pov__ */}
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="font-mono text-base font-bold text-[#F3F4F0]">
                <span className="text-[#00F5A0] font-bold">__</span>
                <span>war1pov</span>
                <span className="text-[#00F5A0] font-bold">__</span>
              </span>
            </div>
            <p className="text-xs font-mono text-[#8E9691]">
              Sunnatilla // Frontend Engineering & Creative Development
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-5 text-xs font-mono text-[#8E9691]" aria-label="Footer Navigation">
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

          {/* Direct Social & Back-to-top */}
          <div className="flex items-center gap-4">
            <a
              href={contactConfig.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#101413] border border-white/[0.06] text-[#8E9691] hover:text-[#00F5A0] transition-colors cursor-pointer"
              title="Telegram"
              aria-label="Telegram Profile"
            >
              <Send size={15} />
            </a>

            <a
              href={contactConfig.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#101413] border border-white/[0.06] text-[#8E9691] hover:text-white transition-colors cursor-pointer"
              title="GitHub"
              aria-label="GitHub Profile"
            >
              <GithubIcon size={15} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#101413] border border-white/[0.06] text-xs font-mono text-[#8E9691] hover:text-[#F3F4F0] hover:border-white/20 transition-colors cursor-pointer"
              aria-label={t.footer.backToTop}
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8E9691]">
          <div>
            © {CURRENT_YEAR} Sunnatilla (__war1pov__). {t.footer.allRights}
          </div>
          <div>
            {t.footer.designedAndBuilt}
          </div>
        </div>

      </div>
    </footer>
  );
};
