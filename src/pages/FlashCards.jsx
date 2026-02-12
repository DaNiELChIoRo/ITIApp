import React, { useState, useMemo, useCallback } from 'react';
import { useData } from '../contexts/DataContext';
import { useI18n } from '../i18n/I18nContext';
import '../styles/FlashCards.css';

const CARDS_PER_PAGE = 6;

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function parseGreekWord(questionText) {
  const greekMatch = questionText.match(/\(([^)]*[\u0370-\u03FF\u1F00-\u1FFF][^)]*)\)/);
  const translitMatch = questionText.match(/'([a-zA-Z]+)'/);
  return {
    greek: greekMatch ? greekMatch[1] : '',
    transliteration: translitMatch ? translitMatch[1] : ''
  };
}

const FlashCards = ({ quizId = 'greek-vocabulary', onHome }) => {
  const { quizzes } = useData();
  const { t, language } = useI18n();
  const [page, setPage] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [shuffleKey, setShuffleKey] = useState(0);

  const cards = useMemo(() => {
    const quiz = quizzes.find(q => q.id === quizId);
    if (!quiz) return [];
    const langData = quiz[language] || quiz.en || [];
    return shuffleArray(langData);
  }, [quizzes, quizId, language, shuffleKey]);

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);
  const pageCards = cards.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const goToPage = useCallback((newPage) => {
    setPage(newPage);
    setFlippedCards(new Set());
  }, []);

  const toggleCard = useCallback((index) => {
    setFlippedCards(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  }, []);

  const allFlipped = pageCards.length > 0 && flippedCards.size === pageCards.length;

  const toggleAll = useCallback(() => {
    if (allFlipped) {
      setFlippedCards(new Set());
    } else {
      setFlippedCards(new Set(pageCards.map((_, i) => i)));
    }
  }, [allFlipped, pageCards]);

  const handleShuffle = useCallback(() => {
    setShuffleKey(k => k + 1);
    setPage(0);
    setFlippedCards(new Set());
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

  return (
    <div className="flashcards-container">
      <div className="flashcards-content">
        <div className="flashcards-header">
          <h1 className="flashcards-title">{t('flashcards.title')}</h1>
        </div>

        <div className="flashcards-grid">
          {pageCards.map((card, i) => {
            const { greek, transliteration } = parseGreekWord(card.question);
            const meaning = card.options[card.correctIndex];
            const isFlipped = flippedCards.has(i);

            return (
              <div key={`${page}-${i}`} className="flashcard-scene" onClick={() => toggleCard(i)}>
                <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
                  <div className="flashcard-face flashcard-front">
                    <div className="flashcard-greek">{greek}</div>
                    <div className="flashcard-transliteration">{transliteration}</div>
                  </div>
                  <div className="flashcard-face flashcard-back">
                    <div className="flashcard-meaning">{meaning}</div>
                    <div className="flashcard-reference">{card.reference}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flashcards-nav">
          <button
            className="flashcard-nav-btn"
            onClick={() => goToPage(page - 1)}
            disabled={page === 0}
            aria-label={t('flashcards.previous')}
          >
            &#8592;
          </button>
          <span className="flashcard-nav-indicator">
            {page + 1} / {totalPages}
          </span>
          <button
            className="flashcard-nav-btn"
            onClick={() => goToPage(page + 1)}
            disabled={page >= totalPages - 1}
            aria-label={t('flashcards.next')}
          >
            &#8594;
          </button>
        </div>

        <div className="flashcards-actions">
          <button className="flashcard-action-btn" onClick={toggleAll}>
            {allFlipped ? t('flashcards.hideAll') : t('flashcards.showAll')}
          </button>
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
