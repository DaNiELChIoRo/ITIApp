import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useData } from '../contexts/DataContext';
import { useI18n } from '../i18n/I18nContext';
import BookCard from '../components/features/BookCard';
import ProgressBar from '../components/common/ProgressBar';
import Button from '../components/common/Button';
import '../styles/Quiz.css';

/**
 * Quiz screen component
 * Displays shuffled books and manages user selections.
 * Correctly selected books animate to their proper position at the front of the grid.
 */
const Quiz = ({ onComplete, onHome }) => {
  const {
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
  } = useQuiz();

  const { books } = useData();
  const { t, translateBook } = useI18n();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [correctlyPlaced, setCorrectlyPlaced] = useState([]);
  const [lastPlaced, setLastPlaced] = useState(null);

  useEffect(() => {
    if (!isInitialized) {
      initializeQuiz();
    }
  }, [isInitialized, initializeQuiz]);

  const handleBookClick = useCallback((book) => {
    if (isBookSelected(book)) return;

    const nextIndex = selectedBooks.length;
    const nextCorrectBook = books[nextIndex];

    selectBook(book);

    if (book === nextCorrectBook) {
      setCorrectlyPlaced(prev => [...prev, book]);
      setLastPlaced(book);
      setTimeout(() => setLastPlaced(null), 600);
    }
  }, [isBookSelected, selectedBooks.length, books, selectBook]);

  const handleUndo = useCallback(() => {
    const lastBook = selectedBooks[selectedBooks.length - 1];
    undoLastSelection();
    if (correctlyPlaced.includes(lastBook)) {
      setCorrectlyPlaced(prev => prev.filter(b => b !== lastBook));
    }
    setLastPlaced(null);
  }, [selectedBooks, undoLastSelection, correctlyPlaced]);

  const handleReset = useCallback(() => {
    resetSelections();
    setCorrectlyPlaced([]);
    setLastPlaced(null);
  }, [resetSelections]);

  const handleSubmit = () => {
    if (selectedBooks.length === shuffledBooks.length) {
      setShowConfirmation(true);
    }
  };

  const handleConfirmSubmit = () => {
    const score = calculateScore();
    onComplete(score);
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  // Display order: correctly placed books first (in correct order), then remaining shuffled books
  const displayBooks = useMemo(() => {
    const remaining = shuffledBooks.filter(b => !correctlyPlaced.includes(b));
    return [...correctlyPlaced, ...remaining];
  }, [shuffledBooks, correctlyPlaced]);

  const progress = shuffledBooks.length > 0
    ? (selectedBooks.length / shuffledBooks.length) * 100
    : 0;

  const allSelected = selectedBooks.length === shuffledBooks.length;

  return (
    <div className="quiz-container">
      <button className="quiz-exit-btn" onClick={onHome}>
        <span className="quiz-exit-btn-arrow">&#8592;</span> {t('exit')}
      </button>
      <header className="quiz-header">
        <h1 className="quiz-title">{t('quiz.title')}</h1>
        <p className="quiz-instruction">
          {t('quiz.instruction')}
        </p>
      </header>

      <div className="quiz-progress">
        <ProgressBar progress={progress} />
        <div className="progress-text">
          {selectedBooks.length} / {shuffledBooks.length} {t('quiz.selected')}
        </div>
      </div>

      <div className="quiz-content">
        <div className="books-grid">
          {displayBooks.map((book) => (
            <BookCard
              key={book}
              book={book}
              displayName={translateBook(book)}
              isSelected={isBookSelected(book)}
              isCorrectlyPlaced={correctlyPlaced.includes(book)}
              isLastPlaced={lastPlaced === book}
              selectionIndex={getSelectionIndex(book)}
              onClick={() => handleBookClick(book)}
            />
          ))}
        </div>
      </div>

      <div className="quiz-actions">
        <Button
          onClick={handleUndo}
          variant="secondary"
          disabled={selectedBooks.length === 0}
          className="action-button"
        >
          {t('quiz.undoLast')}
        </Button>
        <Button
          onClick={handleReset}
          variant="secondary"
          disabled={selectedBooks.length === 0}
          className="action-button"
        >
          {t('quiz.resetAll')}
        </Button>
        <Button
          onClick={handleSubmit}
          variant="primary"
          disabled={!allSelected}
          className="action-button submit-button"
        >
          {t('quiz.submitAnswer')}
        </Button>
      </div>

      {showConfirmation && (
        <div className="confirmation-overlay" onClick={handleCancelSubmit}>
          <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="confirmation-title">{t('quiz.confirmTitle')}</h2>
            <p className="confirmation-text">
              {t('quiz.confirmText', { count: shuffledBooks.length })}
            </p>
            <div className="confirmation-actions">
              <Button onClick={handleCancelSubmit} variant="secondary">
                {t('quiz.goBack')}
              </Button>
              <Button onClick={handleConfirmSubmit} variant="primary">
                {t('quiz.yesSubmit')}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
