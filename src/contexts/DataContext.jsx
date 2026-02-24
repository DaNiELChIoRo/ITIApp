import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { getBooks, getAllQuizzes, getTranslations as fetchTranslations } from '../firebase/firestoreService';
import { OLD_TESTAMENT_BOOKS } from '../utils/constants';
import { GENESIS_COVENANTS_QUIZ } from '../utils/genesisCovenants';
import { GREEK_VOCABULARY_QUIZ } from '../utils/greekVocabulary';
import { HEBREW_VOCABULARY_QUIZ } from '../utils/hebrewVocabulary';
import { OLD_TESTAMENT_FACTS_QUIZ } from '../utils/oldTestamentFacts';
import { translations as hardcodedTranslations } from '../i18n/translations';

const DataContext = createContext(null);

// Build fallback quizzes array from hardcoded data
const FALLBACK_QUIZZES = [
  {
    id: 'genesis-covenants',
    title: { en: "Jacob's Covenants", es: 'Pactos de Jacob' },
    description: {
      en: 'Multiple choice questions about the covenants in Genesis',
      es: 'Preguntas de opcion multiple sobre los pactos en Genesis'
    },
    icon: '\uD83D\uDCDC',
    category: 'knowledge',
    en: GENESIS_COVENANTS_QUIZ.en,
    es: GENESIS_COVENANTS_QUIZ.es
  },
  {
    id: 'greek-vocabulary',
    title: { en: 'Greek Vocabulary', es: 'Vocabulario Griego' },
    description: {
      en: 'Learn key Greek words from the New Testament',
      es: 'Aprende palabras clave en griego del Nuevo Testamento'
    },
    icon: '\u03B1\u03B2',
    category: 'knowledge',
    en: GREEK_VOCABULARY_QUIZ.en,
    es: GREEK_VOCABULARY_QUIZ.es
  },
  {
    id: 'hebrew-vocabulary',
    title: { en: 'Hebrew Vocabulary', es: 'Vocabulario Hebreo' },
    description: {
      en: 'Learn key Hebrew words from the Old Testament',
      es: 'Aprende palabras clave en hebreo del Antiguo Testamento'
    },
    icon: '\u05D0\u05D1',
    category: 'knowledge',
    en: HEBREW_VOCABULARY_QUIZ.en,
    es: HEBREW_VOCABULARY_QUIZ.es
  },
  {
    id: 'old-testament-facts',
    title: { en: 'Old Testament Facts', es: 'Datos del Antiguo Testamento' },
    description: {
      en: 'Questions about the structure and key facts of the Old Testament',
      es: 'Preguntas sobre la estructura y datos clave del Antiguo Testamento'
    },
    icon: '\uD83D\uDCD6',
    category: 'knowledge',
    en: OLD_TESTAMENT_FACTS_QUIZ.en,
    es: OLD_TESTAMENT_FACTS_QUIZ.es
  }
];

export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState(OLD_TESTAMENT_BOOKS);
  const [quizzes, setQuizzes] = useState(FALLBACK_QUIZZES);
  const [translations, setTranslations] = useState(hardcodedTranslations);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const [firestoreBooks, firestoreQuizzes, firestoreEn, firestoreEs] = await Promise.all([
        getBooks(),
        getAllQuizzes(),
        fetchTranslations('en'),
        fetchTranslations('es')
      ]);

      if (firestoreBooks) setBooks(firestoreBooks);
      if (firestoreQuizzes && firestoreQuizzes.length > 0) setQuizzes(firestoreQuizzes);
      if (firestoreEn || firestoreEs) {
        setTranslations(prev => ({
          ...prev,
          ...(firestoreEn ? { en: firestoreEn } : {}),
          ...(firestoreEs ? { es: firestoreEs } : {})
        }));
      }
    } catch (err) {
      console.warn('Failed to load Firestore data, using fallbacks:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const refreshData = useCallback(() => {
    // Clear caches and reload
    Object.keys(localStorage).forEach(key => {
      if (key.startsWith('firestore_')) localStorage.removeItem(key);
    });
    return loadData();
  }, [loadData]);

  const value = {
    books,
    quizzes,
    translations,
    loading,
    error,
    refreshData,
    setBooks,
    setQuizzes,
    setTranslations
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};
