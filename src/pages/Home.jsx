import React from 'react';
import Card from '../components/common/Card';
import { useStats } from '../hooks/useStats';
import { useI18n } from '../i18n/I18nContext';
import { useData } from '../contexts/DataContext';
import '../styles/Home.css';

const Home = ({ onStartOrder, onStartComplete, onStartCovenants, onStartQuiz, onStartFlashCards, onNavigateAdmin }) => {
  const { stats } = useStats();
  const { t, language } = useI18n();
  const { quizzes } = useData();

  return (
    <div className="home-container">
      <div className="home-content">
        <header className="home-header">
          <div className="logo-container">
            <div className="logo">
              <span className="logo-icon">📖</span>
            </div>
            <h1 className="app-title">{t('appName')}</h1>
            <p className="app-subtitle">{t('appSubtitle')}</p>
          </div>
        </header>

        <Card className="welcome-card">
          <h2 className="welcome-title">{t('home.welcomeTitle')}</h2>
          <p className="welcome-description">
            {t('home.welcomeDescription')}
          </p>

          <div className="quiz-info">
            <div className="info-item">
              <span className="info-icon">📚</span>
              <span className="info-text">{t('home.booksCount')}</span>
            </div>
            <div className="info-item">
              <span className="info-icon">⏱️</span>
              <span className="info-text">{t('home.unlimitedTime')}</span>
            </div>
          </div>

          <h3 className="quiz-type-title">{t('home.selectQuizType')}</h3>

          <div className="quiz-category">
            <h4 className="quiz-category-title">{t('home.oldTestament')}</h4>
            <div className="quiz-types">
              <button className="quiz-type-card" onClick={onStartOrder}>
                <span className="quiz-type-icon">{t('home.quizTypes.order.icon')}</span>
                <span className="quiz-type-name">{t('home.quizTypes.order.title')}</span>
                <span className="quiz-type-desc">{t('home.quizTypes.order.description')}</span>
              </button>

              <button className="quiz-type-card" onClick={onStartComplete}>
                <span className="quiz-type-icon">{t('home.quizTypes.complete.icon')}</span>
                <span className="quiz-type-name">{t('home.quizTypes.complete.title')}</span>
                <span className="quiz-type-desc">{t('home.quizTypes.complete.description')}</span>
              </button>
            </div>
          </div>

          <div className="quiz-category">
            <h4 className="quiz-category-title">{t('home.knowledge')}</h4>
            <div className="quiz-types">
              {quizzes.map(quiz => (
                <button
                  key={quiz.id}
                  className="quiz-type-card"
                  onClick={() => {
                    if (quiz.id === 'genesis-covenants') {
                      onStartCovenants();
                    } else if (onStartQuiz) {
                      onStartQuiz(quiz.id);
                    }
                  }}
                >
                  <span className="quiz-type-icon">{quiz.icon || '📝'}</span>
                  <span className="quiz-type-name">
                    {quiz.title?.[language] || quiz.title?.en || quiz.id}
                  </span>
                  <span className="quiz-type-desc">
                    {quiz.description?.[language] || quiz.description?.en || ''}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="quiz-category">
            <h4 className="quiz-category-title">{t('home.study')}</h4>
            <div className="quiz-types">
              <button
                className="quiz-type-card"
                onClick={() => onStartFlashCards?.('greek-vocabulary')}
              >
                <span className="quiz-type-icon">🃏</span>
                <span className="quiz-type-name">{t('home.studyTypes.greekFlashCards.title')}</span>
                <span className="quiz-type-desc">{t('home.studyTypes.greekFlashCards.description')}</span>
              </button>
            </div>
          </div>
        </Card>

        {stats.totalAttempts > 0 && (
          <Card className="stats-card">
            <h3 className="stats-title">{t('home.yourProgress')}</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-value">{stats.totalAttempts}</div>
                <div className="stat-label">{t('home.attempts')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.bestScore}%</div>
                <div className="stat-label">{t('home.bestScore')}</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">{stats.averageScore}%</div>
                <div className="stat-label">{t('home.average')}</div>
              </div>
            </div>
          </Card>
        )}

        <footer className="home-footer">
          <p className="footer-text">
            {t('home.footerText')}
          </p>
          <button
            className="admin-link"
            onClick={onNavigateAdmin}
            onContextMenu={(e) => { e.preventDefault(); onNavigateAdmin?.(); }}
          >
            ⚙
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Home;
