import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useData } from '../contexts/DataContext';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import '../styles/CompleteQuiz.css';

/**
 * Get hint from book name (first letters)
 * For numbered books like "1 Samuel", returns "1 S..."
 * For regular books, returns first 2-3 letters
 */
const getHint = (bookName, translatedName) => {
  const name = translatedName || bookName;

  // Handle numbered books (1 Samuel, 2 Kings, etc.)
  if (/^\d/.test(name)) {
    const parts = name.split(' ');
    if (parts.length > 1) {
      return `${parts[0]} ${parts[1].charAt(0)}...`;
    }
  }

  // For short names (3-4 chars), show first letter only
  if (name.length <= 4) {
    return `${name.charAt(0)}...`;
  }

  // For longer names, show first 2 letters
  return `${name.substring(0, 2)}...`;
};

/**
 * Normalize string for comparison (remove accents, lowercase)
 */
const normalizeString = (str) => {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .trim();
};

/**
 * Complete Quiz Component
 * Users type the full book name based on first letter hints
 */
const CompleteQuiz = ({ onComplete, onHome }) => {
  const { t, translateBook, language } = useI18n();
  const { books } = useData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [answers, setAnswers] = useState(Array(books.length).fill(null));
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const inputRef = useRef(null);

  const currentBook = books[currentIndex];
  const translatedBook = translateBook(currentBook);
  const hint = getHint(currentBook, translatedBook);

  useEffect(() => {
    // Focus input when component mounts or index changes
    if (inputRef.current && !showResult) {
      inputRef.current.focus();
    }
  }, [currentIndex, showResult]);

  const handleInputFocus = () => {
    // Wait for mobile keyboard to finish opening, then scroll input into view
    setTimeout(() => {
      inputRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 300);
  };

  const checkAnswer = () => {
    const normalizedInput = normalizeString(userInput);
    const normalizedAnswer = normalizeString(translatedBook);
    const normalizedOriginal = normalizeString(currentBook);

    // Accept both translated and original book names
    const correct = normalizedInput === normalizedAnswer || normalizedInput === normalizedOriginal;

    setIsCorrect(correct);
    setShowResult(true);

    // Save the answer
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      input: userInput,
      correct: correct,
      correctAnswer: translatedBook
    };
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentIndex < books.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput('');
      setShowResult(false);
      setIsCorrect(null);
    } else {
      // Quiz complete
      handleSubmit();
    }
  };

  const handleSkip = () => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      input: '',
      correct: false,
      correctAnswer: translatedBook,
      skipped: true
    };
    setAnswers(newAnswers);

    if (currentIndex < books.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserInput('');
      setShowResult(false);
      setIsCorrect(null);
    } else {
      handleSubmit();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (showResult) {
        handleNext();
      } else if (userInput.trim()) {
        checkAnswer();
      }
    }
  };

  const handleSubmit = () => {
    setShowConfirmation(true);
  };

  const handleConfirmSubmit = () => {
    const correctCount = answers.filter(a => a?.correct).length;
    const total = books.length;
    const percentage = Math.round((correctCount / total) * 100);

    onComplete({
      correct: correctCount,
      total,
      percentage,
      selections: answers.map((a, i) => a?.input || ''),
      answers: answers,
      quizType: 'complete'
    });
  };

  const handleCancelSubmit = () => {
    setShowConfirmation(false);
  };

  const completedCount = answers.filter(a => a !== null).length;
  const progress = (completedCount / books.length) * 100;

  return (
    <div className="complete-quiz-container">
      <button className="quiz-exit-btn" onClick={onHome}>
        <span className="quiz-exit-btn-arrow">&#8592;</span> {t('exit')}
      </button>
      <header className="complete-quiz-header">
        <h1 className="complete-quiz-title">{t('completeQuiz.title')}</h1>
        <p className="complete-quiz-instruction">{t('completeQuiz.instruction')}</p>
      </header>

      <div className="complete-quiz-progress">
        <ProgressBar progress={progress} />
        <div className="progress-text">
          {t('completeQuiz.progress', { completed: completedCount, total: books.length })}
        </div>
      </div>

      <div className="complete-quiz-content">
        <div className="book-number">{currentIndex + 1}</div>

        <div className="hint-card">
          <div className="hint-text">{hint}</div>
          <div className="hint-label">
            {t('completeQuiz.hint', { hint: `${translatedBook.length} ${language === 'es' ? 'letras' : 'letters'}` })}
          </div>
        </div>

        {!showResult ? (
          <div className="input-section">
            <input
              ref={inputRef}
              type="text"
              className="book-input"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={handleKeyPress}
              onFocus={handleInputFocus}
              placeholder={t('completeQuiz.placeholder')}
              autoComplete="off"
              autoCapitalize="words"
            />
            <div className="input-actions">
              <Button
                onClick={handleSkip}
                variant="secondary"
                className="skip-button"
              >
                {t('completeQuiz.skip')}
              </Button>
              <Button
                onClick={checkAnswer}
                variant="primary"
                disabled={!userInput.trim()}
                className="check-button"
              >
                {t('completeQuiz.check')}
              </Button>
            </div>
          </div>
        ) : (
          <div className={`result-section ${isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="result-icon">
              {isCorrect ? '✓' : '✗'}
            </div>
            <div className="result-message">
              {isCorrect ? t('completeQuiz.correct') : t('completeQuiz.incorrect')}
            </div>
            {!isCorrect && (
              <div className="correct-answer">
                {t('completeQuiz.correctAnswer', { answer: translatedBook })}
              </div>
            )}
            <Button
              onClick={handleNext}
              variant="primary"
              className="next-button"
            >
              {currentIndex < books.length - 1
                ? t('completeQuiz.next')
                : t('completeQuiz.submitAll')}
            </Button>
          </div>
        )}
      </div>

      <div className="books-overview">
        {books.map((_, index) => {
          const answer = answers[index];
          let statusClass = 'pending';
          if (answer) {
            statusClass = answer.correct ? 'correct' : 'incorrect';
          } else if (index === currentIndex) {
            statusClass = 'current';
          }
          return (
            <div
              key={index}
              className={`book-dot ${statusClass}`}
              title={`${index + 1}. ${translateBook(books[index])}`}
            />
          );
        })}
      </div>

      {showConfirmation && (
        <div className="confirmation-overlay" onClick={handleCancelSubmit}>
          <div className="confirmation-modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="confirmation-title">{t('completeQuiz.confirmTitle')}</h2>
            <p className="confirmation-text">
              {t('completeQuiz.confirmText', {
                completed: completedCount,
                total: books.length
              })}
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

export default CompleteQuiz;
