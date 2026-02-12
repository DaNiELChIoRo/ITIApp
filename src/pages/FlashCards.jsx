import React, { useState, useMemo, useCallback } from 'react';
import { useData } from '../contexts/DataContext';
import { useI18n } from '../i18n/I18nContext';
import '../styles/FlashCards.css';

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function parseGreekWord(questionText) {
  // Extract Greek word in parentheses like (ἀγάπη)
  const greekMatch = questionText.match(/\(([^)]*[\u0370-\u03FF\u1F00-\u1FFF][^)]*)\)/);
  // Extract transliteration like 'agape' or 'logos'
  const translitMatch = questionText.match(/'([a-zA-Z]+)'/);
  return {
    greek: greekMatch ? greekMatch[1] : '',
    transliteration: translitMatch ? translitMatch[1] : ''
  };
}

const FlashCards = ({ quizId = 'greek-vocabulary', onHome }) => {
  const { quizzes } = useData();
  const { t, language } = useI18n();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [shuffleKey, setShuffleKey] = useState(0);

  const cards = useMemo(() => {
    const quiz = quizzes.find(q => q.id === quizId);
    if (!quiz) return [];
    const langData = quiz[language] || quiz.en || [];
    return shuffleArray(langData);
  }, [quizzes, quizId, language, shuffleKey]);

  const currentCard = cards[currentIndex];

  const goTo = useCallback((index) => {
    setIsFlipped(false);
    setCurrentIndex(index);
  }, []);

  const handleShuffle = useCallback(() => {
    setShuffleKey(k => k + 1);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, []);

  if (!cards.length) {
    return (
      <div className="flashcards-container">
        <div className="flashcards-content">
          <p style={{ color: 'white', textAlign: 'center' }}>No cards available.</p>
          <div className="flashcards-actions">
            <button className="flashcard-action-btn" onClick={onHome}>
              {t('flashcards.backToHome')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const { greek, transliteration } = parseGreekWord(currentCard.question);
  const meaning = currentCard.options[currentCard.correctIndex];

  return (
    <div className="flashcards-container">
      <div className="flashcards-content">
        <div className="flashcards-header">
          <h1 className="flashcards-title">{t('flashcards.title')}</h1>
        </div>

        <div className="flashcard-scene" onClick={() => setIsFlipped(f => !f)}>
          <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
            <div className="flashcard-face flashcard-front">
              <div className="flashcard-greek">{greek}</div>
              <div className="flashcard-transliteration">{transliteration}</div>
              <div className="flashcard-hint">{t('flashcards.tapToFlip')}</div>
            </div>
            <div className="flashcard-face flashcard-back">
              <div className="flashcard-meaning">{meaning}</div>
              <div className="flashcard-reference">{currentCard.reference}</div>
            </div>
          </div>
        </div>

        <div className="flashcards-nav">
          <button
            className="flashcard-nav-btn"
            onClick={() => goTo(currentIndex - 1)}
            disabled={currentIndex === 0}
            aria-label={t('flashcards.previous')}
          >
            &#8592;
          </button>
          <span className="flashcard-nav-indicator">
            {currentIndex + 1} / {cards.length}
          </span>
          <button
            className="flashcard-nav-btn"
            onClick={() => goTo(currentIndex + 1)}
            disabled={currentIndex === cards.length - 1}
            aria-label={t('flashcards.next')}
          >
            &#8594;
          </button>
        </div>

        <div className="flashcards-actions">
          <button className="flashcard-action-btn" onClick={handleShuffle}>
            {t('flashcards.shuffle')}
          </button>
          <button className="flashcard-action-btn" onClick={onHome}>
            {t('flashcards.backToHome')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
