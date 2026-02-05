import React, { createContext, useContext, useState, useCallback, useMemo, useEffect } from 'react';
import { translations } from './translations';

const I18nContext = createContext(null);

/**
 * Get stored language from localStorage or detect from browser
 */
const getInitialLanguage = () => {
  // Check localStorage first
  const stored = localStorage.getItem('language');
  if (stored && translations[stored]) {
    return stored;
  }

  // Detect from browser
  const browserLang = navigator.language?.split('-')[0];
  if (browserLang && translations[browserLang]) {
    return browserLang;
  }

  return 'en';
};

/**
 * I18n Provider component
 */
export const I18nProvider = ({ children }) => {
  const [language, setLanguageState] = useState(getInitialLanguage);

  // Update document lang attribute when language changes
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
    }
  }, []);

  /**
   * Get translation for a key path
   * Supports nested keys like 'home.welcomeTitle'
   */
  const t = useCallback((keyPath, params = {}) => {
    const keys = keyPath.split('.');
    let value = translations[language];

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        // Fallback to English
        value = translations.en;
        for (const k of keys) {
          if (value && typeof value === 'object' && k in value) {
            value = value[k];
          } else {
            return keyPath; // Return key if not found
          }
        }
        break;
      }
    }

    // Replace parameters like {count}, {correct}, etc.
    if (typeof value === 'string' && Object.keys(params).length > 0) {
      return value.replace(/\{(\w+)\}/g, (match, param) => {
        return params[param] !== undefined ? params[param] : match;
      });
    }

    return value || keyPath;
  }, [language]);

  /**
   * Translate a book name
   */
  const translateBook = useCallback((bookName) => {
    return translations[language]?.books?.[bookName] || bookName;
  }, [language]);

  /**
   * Get score message based on percentage
   */
  const getScoreMessage = useCallback((percentage) => {
    const scores = translations[language]?.scores || translations.en.scores;
    if (percentage === 100) return scores.perfect;
    if (percentage >= 90) return scores.excellent;
    if (percentage >= 80) return scores.great;
    if (percentage >= 70) return scores.good;
    if (percentage >= 60) return scores.notBad;
    if (percentage >= 50) return scores.keepPracticing;
    return scores.tryAgain;
  }, [language]);

  const availableLanguages = useMemo(() => Object.keys(translations), []);

  const value = useMemo(() => ({
    language,
    setLanguage,
    t,
    translateBook,
    getScoreMessage,
    availableLanguages
  }), [language, setLanguage, t, translateBook, getScoreMessage, availableLanguages]);

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};

/**
 * Hook to use i18n context
 */
export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
};

export default I18nContext;
