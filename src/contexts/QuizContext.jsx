import React, { createContext, useContext, useState, useCallback } from 'react';
import { useData } from './DataContext';
import { shuffleArray } from '../utils/helpers';

const QuizContext = createContext();

/**
 * Quiz Context Provider
 * Manages quiz state including shuffled books, user selections, and scoring
 */
export const QuizProvider = ({ children }) => {
  const { books } = useData();
  const [shuffledBooks, setShuffledBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);
  const [isInitialized, setIsInitialized] = useState(false);

  /**
   * Initialize or reset the quiz
   */
  const initializeQuiz = useCallback(() => {
    setShuffledBooks(shuffleArray([...books]));
    setSelectedBooks([]);
    setIsInitialized(true);
  }, [books]);

  /**
   * Add a book to the selection
   */
  const selectBook = useCallback((book) => {
    setSelectedBooks(prev => [...prev, book]);
  }, []);

  /**
   * Remove the last selected book
   */
  const undoLastSelection = useCallback(() => {
    setSelectedBooks(prev => prev.slice(0, -1));
  }, []);

  /**
   * Clear all selections
   */
  const resetSelections = useCallback(() => {
    setSelectedBooks([]);
  }, []);

  /**
   * Calculate the quiz score
   * @returns {Object} Score details including correct count, total, and percentage
   */
  const calculateScore = useCallback(() => {
    let correctCount = 0;

    selectedBooks.forEach((book, index) => {
      if (books[index] === book) {
        correctCount++;
      }
    });

    const total = books.length;
    const percentage = Math.round((correctCount / total) * 100);

    return {
      correct: correctCount,
      total,
      percentage,
      selections: selectedBooks
    };
  }, [selectedBooks, books]);

  /**
   * Check if a book has been selected
   */
  const isBookSelected = useCallback((book) => {
    return selectedBooks.includes(book);
  }, [selectedBooks]);

  /**
   * Get the selection index of a book (1-based)
   */
  const getSelectionIndex = useCallback((book) => {
    const index = selectedBooks.indexOf(book);
    return index === -1 ? null : index + 1;
  }, [selectedBooks]);

  const value = {
    shuffledBooks,
    selectedBooks,
    isInitialized,
    initializeQuiz,
    selectBook,
    undoLastSelection,
    resetSelections,
    calculateScore,
    isBookSelected,
    getSelectionIndex
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

/**
 * Custom hook to use Quiz Context
 */
export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within QuizProvider');
  }
  return context;
};
