import React, { useState, useEffect } from 'react';
import { LanguageContext } from './context';
import { translations } from './translations';

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_language');
      if (saved === 'en' || saved === 'uz' || saved === 'ru') {
        return saved;
      }
      if (typeof navigator !== 'undefined' && navigator.language) {
        if (navigator.language.startsWith('ru')) return 'ru';
        if (navigator.language.startsWith('uz')) return 'uz';
      }
    } catch {
      // ignore
    }
    return 'uz';
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_language', lang);
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => {
      if (prev === 'uz') return 'ru';
      if (prev === 'ru') return 'en';
      return 'uz';
    });
  };

  const setLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'uz' || newLang === 'ru') {
      setLang(newLang);
    }
  };

  const t = translations[lang] || translations.uz || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
