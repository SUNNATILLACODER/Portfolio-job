import React from 'react';
import { useLanguage } from '../i18n/useLanguage';
import { Globe } from 'lucide-react';

export const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLanguage } = useLanguage();

  return (
    <div
      role="group"
      aria-label="Language selector"
      className={`inline-flex items-center p-1 rounded-full bg-[#0B1110] border border-white/10 ${className}`}
    >
      <div className="pl-2 pr-1 text-[#9AA6A0]">
        <Globe size={14} className="text-[#00F5A0]" aria-hidden="true" />
      </div>
      <button
        type="button"
        onClick={() => setLanguage('en')}
        aria-pressed={lang === 'en'}
        aria-label="Switch language to English"
        className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
          lang === 'en'
            ? 'bg-[#00F5A0] text-[#050807] font-semibold shadow-[0_0_12px_rgba(0,245,160,0.4)]'
            : 'text-[#9AA6A0] hover:text-[#F4F7F5]'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLanguage('uz')}
        aria-pressed={lang === 'uz'}
        aria-label="Tilni o'zbekchaga o'zgartirish"
        className={`px-2.5 py-1 text-xs font-mono font-medium rounded-full transition-all duration-200 cursor-pointer ${
          lang === 'uz'
            ? 'bg-[#00F5A0] text-[#050807] font-semibold shadow-[0_0_12px_rgba(0,245,160,0.4)]'
            : 'text-[#9AA6A0] hover:text-[#F4F7F5]'
        }`}
      >
        UZ
      </button>
    </div>
  );
};
