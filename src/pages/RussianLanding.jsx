import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import Card from '../components/common/Card';
import '../styles/Home.css';
import '../styles/SectionLanding.css';

const RussianLanding = () => {
  const navigate = useNavigate();
  const { t, language } = useI18n();

  const tools = [
    {
      icon: '🇷🇺',
      title: t('home.studyTypes.russianFlashCards.title'),
      desc: t('home.studyTypes.russianFlashCards.description'),
      path: '/russian/flashcards'
    },
    {
      icon: '📐',
      title: t('home.studyTypes.russianGrammar.title'),
      desc: t('home.studyTypes.russianGrammar.description'),
      path: '/russian/grammar'
    },
    {
      icon: '🏙️',
      title: t('home.studyTypes.kletka.title'),
      desc: t('home.studyTypes.kletka.description'),
      path: '/russian/kletka'
    }
  ];

  return (
    <div className="section-landing-container">
      <div className="section-landing-content">
        <header className="section-landing-header">
          <div className="section-landing-flag">🇷🇺</div>
          <h1 className="section-landing-title">
            {language === 'es' ? 'Aprendizaje de Ruso' : 'Russian Learning'}
          </h1>
          <p className="section-landing-subtitle">
            {language === 'es'
              ? 'Vocabulario cirílico y casos gramaticales'
              : 'Cyrillic vocabulary and grammatical cases'}
          </p>
        </header>

        <Card className="section-landing-card">
          <div className="quiz-types">
            {tools.map(tool => (
              <button
                key={tool.path}
                className="quiz-type-card"
                onClick={() => navigate(tool.path)}
              >
                <span className="quiz-type-icon">{tool.icon}</span>
                <span className="quiz-type-name">{tool.title}</span>
                <span className="quiz-type-desc">{tool.desc}</span>
              </button>
            ))}
          </div>
        </Card>

        <button className="section-landing-back" onClick={() => navigate('/')}>
          &#8592; {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
        </button>
      </div>
    </div>
  );
};

export default RussianLanding;
