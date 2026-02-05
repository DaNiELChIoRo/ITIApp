import React, { useEffect } from 'react';
import { OLD_TESTAMENT_BOOKS } from '../utils/constants';
import { getScoreColor } from '../utils/helpers';
import { useStats } from '../hooks/useStats';
import { useI18n } from '../i18n/I18nContext';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import '../styles/Results.css';

/**
 * Results screen component
 * Displays quiz score and detailed results
 */
const Results = ({ score, onRetry, onHome }) => {
  const { updateStats } = useStats();
  const { t, translateBook, getScoreMessage } = useI18n();

  useEffect(() => {
    if (score) {
      updateStats(score);
    }
  }, [score, updateStats]);

  if (!score) {
    return (
      <div className="results-container">
        <p>{t('results.noResults')}</p>
        <Button onClick={onHome}>{t('results.goHome')}</Button>
      </div>
    );
  }

  const { correct, total, percentage, selections } = score;
  const scoreMessage = getScoreMessage(percentage);
  const scoreColor = getScoreColor(percentage);

  return (
    <div className="results-container">
      <div className="results-content">
        <header className="results-header">
          <h1 className="results-title">{t('results.title')}</h1>
        </header>

        <Card className="score-card">
          <div className="score-display" style={{ borderColor: scoreColor }}>
            <div className="score-percentage" style={{ color: scoreColor }}>
              {percentage}%
            </div>
            <div className="score-message" style={{ color: scoreColor }}>
              {scoreMessage}
            </div>
            <div className="score-details">
              {t('results.outOf', { correct, total })}
            </div>
          </div>

          <div className="score-breakdown">
            <div className="breakdown-item correct">
              <span className="breakdown-icon">✓</span>
              <span className="breakdown-text">{correct} {t('results.correct')}</span>
            </div>
            <div className="breakdown-item incorrect">
              <span className="breakdown-icon">✗</span>
              <span className="breakdown-text">{total - correct} {t('results.incorrect')}</span>
            </div>
          </div>
        </Card>

        <Card className="details-card">
          <h2 className="details-title">{t('results.yourAnswers')}</h2>
          <div className="answers-list">
            {selections.map((selectedBook, index) => {
              const correctBook = OLD_TESTAMENT_BOOKS[index];
              const isCorrect = selectedBook === correctBook;

              return (
                <div
                  key={index}
                  className={`answer-item ${isCorrect ? 'correct' : 'incorrect'}`}
                >
                  <div className="answer-position">{index + 1}</div>
                  <div className="answer-content">
                    <div className="answer-your-choice">
                      <span className="answer-label">{t('results.yourAnswer')}</span>
                      <span className="answer-book">{translateBook(selectedBook)}</span>
                    </div>
                    {!isCorrect && (
                      <div className="answer-correct-choice">
                        <span className="answer-label">{t('results.correctAnswer')}</span>
                        <span className="answer-book">{translateBook(correctBook)}</span>
                      </div>
                    )}
                  </div>
                  <div className="answer-status">
                    {isCorrect ? (
                      <span className="status-icon correct">✓</span>
                    ) : (
                      <span className="status-icon incorrect">✗</span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        <div className="results-actions">
          <Button onClick={onHome} variant="secondary" size="large">
            {t('results.home')}
          </Button>
          <Button onClick={onRetry} variant="primary" size="large">
            {t('results.tryAgain')}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;
