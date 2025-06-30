import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, TranslationKey } from '../types';
import { allTranslations } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationKey, ...args: any[]) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: TranslationKey, ...args: any[]): string => {
    const translations = allTranslations[language];
    const value = translations[key];
    
    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'function') {
      return value(...args);
    } else if (Array.isArray(value)) {
      return value.join(' ');
    }
    
    // Fallback to key if translation not found
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};