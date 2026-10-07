import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio_language');
      if (saved === 'en' || saved === 'uz') {
        return saved;
      }
      // Check browser language
      if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('uz')) {
        return 'uz';
      }
    } catch {
      // LocalStorage access might fail in restricted environments
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('portfolio_language', lang);
    } catch {
      // ignore storage error
    }
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'uz' : 'en'));
  };

  const setLanguage = (newLang) => {
    if (newLang === 'en' || newLang === 'uz') {
      setLang(newLang);
    }
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
