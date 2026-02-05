import React from 'react';
import Card from '../components/common/Card';
import { useStats } from '../hooks/useStats';
import { useI18n } from '../i18n/I18nContext';
import '../styles/Home.css';

/**
 * Home/Welcome screen component
 */
const Home = ({ onStartOrder, onStartComplete }) => {
  const { stats } = useStats();
  const { t } = useI18n();

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
        </footer>
      </div>
    </div>
  );
};

export default Home;
