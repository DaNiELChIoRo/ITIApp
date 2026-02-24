import React, { useState, useMemo, useCallback } from 'react';
import { useData } from '../contexts/DataContext';
import { useI18n } from '../i18n/I18nContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
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

function parseScriptWord(questionText) {
  // Match parentheses containing Greek or Hebrew script characters
  const scriptMatch = questionText.match(/\(([^)]*[\u0370-\u03FF\u1F00-\u1FFF\u05B0-\u05EA][^)]*)\)/);
  const translitMatch = questionText.match(/'([a-zA-Z]+)'/);
  return {
    script: scriptMatch ? scriptMatch[1] : '',
    transliteration: translitMatch ? translitMatch[1] : ''
  };
}

const FlashCards = ({ quizId = 'greek-vocabulary', onHome }) => {
  const { quizzes } = useData();
  const { t, language } = useI18n();
  const [page, setPage] = useState(0);
  const [flippedCards, setFlippedCards] = useState(new Set());
  const [shuffleKey, setShuffleKey] = useState(0);
  const [knownIds, setKnownIds] = useLocalStorage(`itiapp-flashcard-progress-${quizId}`, []);
  const [filter, setFilter] = useState('all');

  const quiz = useMemo(() => quizzes.find(q => q.id === quizId), [quizzes, quizId]);
  const quizTitle = useMemo(
    () => quiz?.title?.[language] || quiz?.title?.en || t('flashcards.title'),
    [quiz, language, t]
  );

  const allCards = useMemo(() => {
    if (!quiz) return [];
    const langData = quiz[language] || quiz.en || [];
    return shuffleArray(langData);
  }, [quiz, language, shuffleKey]);

  const cards = useMemo(() => {
    if (filter === 'notLearned') {
      return allCards.filter(c => !knownIds.includes(c.id));
    }
    return allCards;
  }, [allCards, filter, knownIds]);

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

  const markKnown = useCallback((cardId, e) => {
    e.stopPropagation();
    setKnownIds(prev => prev.includes(cardId) ? prev : [...prev, cardId]);
  }, [setKnownIds]);

  const resetProgress = useCallback(() => {
    setKnownIds([]);
  }, [setKnownIds]);

  // Reset page when filter changes and current page is out of bounds
  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
    setPage(0);
    setFlippedCards(new Set());
  }, []);

  if (!allCards.length) {
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
          <h1 className="flashcards-title">{quizTitle}</h1>
        </div>

        <div className="flashcards-progress-bar">
          <div className="flashcards-progress-text">
            {knownIds.length} / {allCards.length} {t('flashcards.learned')}
          </div>
          <div className="flashcards-progress-track">
            <div
              className="flashcards-progress-fill"
              style={{ width: `${(knownIds.length / allCards.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="flashcards-filter">
          <button
            className={`flashcards-filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => handleFilterChange('all')}
          >
            {t('flashcards.all')}
          </button>
          <button
            className={`flashcards-filter-btn ${filter === 'notLearned' ? 'active' : ''}`}
            onClick={() => handleFilterChange('notLearned')}
          >
            {t('flashcards.notLearned')}
          </button>
        </div>

        {cards.length === 0 ? (
          <p style={{ color: 'white', textAlign: 'center', padding: '2rem 0' }}>
            {t('flashcards.all')} {t('flashcards.learned')}!
          </p>
        ) : (
          <>
            <div className="flashcards-grid">
              {pageCards.map((card, i) => {
                const { script, transliteration } = parseScriptWord(card.question);
                const meaning = card.options[card.correctIndex];
                const isFlipped = flippedCards.has(i);
                const isKnown = knownIds.includes(card.id);

                return (
                  <div key={`${page}-${i}`} className="flashcard-scene" onClick={() => toggleCard(i)}>
                    <div className={`flashcard ${isFlipped ? 'is-flipped' : ''}`}>
                      <div className="flashcard-face flashcard-front">
                        {isKnown && <span className="flashcard-known-badge">&#10003;</span>}
                        <div className="flashcard-greek">{script}</div>
                        <div className="flashcard-transliteration">{transliteration}</div>
                      </div>
                      <div className="flashcard-face flashcard-back">
                        <div className="flashcard-meaning">{meaning}</div>
                        <div className="flashcard-reference">{card.reference}</div>
                        {!isKnown && (
                          <button
                            className="flashcard-know-btn"
                            onClick={(e) => markKnown(card.id, e)}
                          >
                            {t('flashcards.knowIt')}
                          </button>
                        )}
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
          </>
        )}

        <div className="flashcards-actions">
          <button className="flashcard-action-btn" onClick={toggleAll}>
            {allFlipped ? t('flashcards.hideAll') : t('flashcards.showAll')}
          </button>
          <button className="flashcard-action-btn" onClick={handleShuffle}>
            {t('flashcards.shuffle')}
          </button>
          {knownIds.length > 0 && (
            <button className="flashcard-action-btn" onClick={resetProgress}>
              {t('flashcards.resetProgress')}
            </button>
          )}
          <button className="flashcard-action-btn" onClick={onHome}>
            {t('flashcards.backToHome')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashCards;
