import React, { useEffect, useState } from 'react';
import { useQuiz } from '../contexts/QuizContext';
import { useI18n } from '../i18n/I18nContext';
import BookCard from '../components/features/BookCard';
import ProgressBar from '../components/common/ProgressBar';
import Button from '../components/common/Button';
import '../styles/Quiz.css';

/**
 * Quiz screen component
 * Displays shuffled books and manages user selections
 */
const Quiz = ({ onComplete }) => {
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

  const { t, translateBook } = useI18n();
  const [showConfirmation, setShowConfirmation] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      initializeQuiz();
    }
  }, [isInitialized, initializeQuiz]);

  const handleBookClick = (book) => {
    if (!isBookSelected(book)) {
      selectBook(book);
    }
  };

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

  const progress = shuffledBooks.length > 0
    ? (selectedBooks.length / shuffledBooks.length) * 100
    : 0;

  const allSelected = selectedBooks.length === shuffledBooks.length;

  return (
    <div className="quiz-container">
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
          {shuffledBooks.map((book, index) => (
            <BookCard
              key={`${book}-${index}`}
              book={book}
              displayName={translateBook(book)}
              isSelected={isBookSelected(book)}
              selectionIndex={getSelectionIndex(book)}
              onClick={() => handleBookClick(book)}
            />
          ))}
        </div>
      </div>

      <div className="quiz-actions">
        <Button
          onClick={undoLastSelection}
          variant="secondary"
          disabled={selectedBooks.length === 0}
          className="action-button"
        >
          {t('quiz.undoLast')}
        </Button>
        <Button
          onClick={resetSelections}
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
