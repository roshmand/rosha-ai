import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { en } from '../locales/en';
import { ku } from '../locales/ku';

type Language = 'en' | 'ku';

export type TranslationKey = keyof typeof en;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: TranslationKey, ...args: any[]) => string;
}

const translations = { en, ku };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ku' ? 'rtl' : 'ltr';
  }, [language]);
  
  const t = useCallback((key: TranslationKey, ...args: any[]): string => {
    const stringTemplate = translations[language][key] || translations['en'][key];
    if (typeof stringTemplate === 'function') {
      return (stringTemplate as (...args: any[]) => string)(...args);
    }
    return stringTemplate as string;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};
