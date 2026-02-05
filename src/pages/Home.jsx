import React from 'react';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { useStats } from '../hooks/useStats';
import { useI18n } from '../i18n/I18nContext';
import '../styles/Home.css';

/**
 * Home/Welcome screen component
 */
const Home = ({ onStart }) => {
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
            <div className="info-item">
              <span className="info-icon">🎯</span>
              <span className="info-text">{t('home.orderChallenge')}</span>
            </div>
          </div>

          <Button
            onClick={onStart}
            variant="primary"
            size="large"
            className="start-button"
          >
            {t('home.startQuiz')}
          </Button>
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
