import React, { useEffect, useState, useMemo, useCallback, useRef } from 'react';
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
 * Selected books animate to the front of the grid in selection order.
 */
const Quiz = ({ onComplete, onHome }) => {
  const {
    shuffledBooks,
    selectedBooks,
    isInitialized,
    initializeQuiz,
    selectBook,
    deselectBook,
    undoLastSelection,
    resetSelections,
    calculateScore,
    isBookSelected,
    getSelectionIndex
  } = useQuiz();

  const { books } = useData();
  const { t, translateBook } = useI18n();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [lastSelected, setLastSelected] = useState(null);
  const [fabOpen, setFabOpen] = useState(false);
  const [search, setSearch] = useState('');
  const fabRef = useRef(null);

  useEffect(() => {
    if (!isInitialized) {
      initializeQuiz();
    }
  }, [isInitialized, initializeQuiz]);

  // Close FAB when tapping outside
  useEffect(() => {
    if (!fabOpen) return;
    const handleTap = (e) => {
      if (fabRef.current && !fabRef.current.contains(e.target)) {
        setFabOpen(false);
      }
    };
    document.addEventListener('pointerdown', handleTap);
    return () => document.removeEventListener('pointerdown', handleTap);
  }, [fabOpen]);

  const handleBookClick = useCallback((book) => {
    if (isBookSelected(book)) return;
    selectBook(book);
    setLastSelected(book);
    setSearch('');
    setTimeout(() => setLastSelected(null), 600);
  }, [isBookSelected, selectBook]);

  const handleUndo = useCallback(() => {
    undoLastSelection();
    setLastSelected(null);
    setFabOpen(false);
  }, [undoLastSelection]);

  const handleReset = useCallback(() => {
    resetSelections();
    setLastSelected(null);
    setFabOpen(false);
  }, [resetSelections]);

  const handleSubmit = () => {
    if (selectedBooks.length === shuffledBooks.length) {
      setShowConfirmation(true);
      setFabOpen(false);
    }
  };

  const handleConfirmSubmit = () => {
    const score = calculateScore();
    onComplete(score);
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  // Display order: selected books first (in selection order), then remaining shuffled books
  // Search only filters unselected cards
  const displayBooks = useMemo(() => {
    const remaining = shuffledBooks.filter(b => !selectedBooks.includes(b));
    const query = search.trim().toLowerCase();
    const filtered = query
      ? remaining.filter(b => {
          const display = translateBook(b).toLowerCase();
          const internal = b.toLowerCase();
          return display.includes(query) || internal.includes(query);
        })
      : remaining;
    return [...selectedBooks, ...filtered];
  }, [shuffledBooks, selectedBooks, search, translateBook]);

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

      <div className="quiz-search">
        <input
          className="quiz-search-input"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t('quiz.searchPlaceholder')}
        />
        {search && (
          <button className="quiz-search-clear" onClick={() => setSearch('')} aria-label="Clear">
            &times;
          </button>
        )}
      </div>

      <div className="quiz-content">
        <div className="books-grid">
          {displayBooks.map((book) => {
            const selIdx = getSelectionIndex(book);
            const isCorrect = selIdx !== null && books[selIdx - 1] === book;

            return (
              <BookCard
                key={book}
                book={book}
                displayName={translateBook(book)}
                isSelected={isBookSelected(book)}
                isCorrectlyPlaced={isCorrect}
                isLastPlaced={lastSelected === book}
                selectionIndex={selIdx}
                onClick={() => handleBookClick(book)}
                onDeselect={() => deselectBook(book)}
              />
            );
          })}
        </div>
      </div>

      {/* Desktop: sticky action bar */}
      <div className="quiz-actions quiz-actions-desktop">
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

      {/* Mobile: floating action button */}
      <div className="quiz-fab-wrapper" ref={fabRef}>
        {fabOpen && (
          <div className="quiz-fab-menu">
            <button
              className="quiz-fab-menu-item quiz-fab-menu-submit"
              onClick={handleSubmit}
              disabled={!allSelected}
            >
              {t('quiz.submitAnswer')}
            </button>
            <button
              className="quiz-fab-menu-item"
              onClick={handleUndo}
              disabled={selectedBooks.length === 0}
            >
              {t('quiz.undoLast')}
            </button>
            <button
              className="quiz-fab-menu-item"
              onClick={handleReset}
              disabled={selectedBooks.length === 0}
            >
              {t('quiz.resetAll')}
            </button>
          </div>
        )}
        <button
          className={`quiz-fab ${fabOpen ? 'quiz-fab-open' : ''}`}
          onClick={() => setFabOpen(prev => !prev)}
          aria-label="Actions"
        >
          <span className="quiz-fab-icon">{fabOpen ? '\u00D7' : '\u2026'}</span>
        </button>
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
