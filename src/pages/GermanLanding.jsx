import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import Card from '../components/common/Card';
import '../styles/Home.css';
import '../styles/SectionLanding.css';

const GermanLanding = () => {
  const navigate = useNavigate();
  const { t, language } = useI18n();

  const tools = [
    {
      icon: '🇩🇪',
      title: t('home.studyTypes.germanFlashCards.title'),
      desc: t('home.studyTypes.germanFlashCards.description'),
      path: '/german/flashcards'
    },
    {
      icon: '🗺️',
      title: t('home.studyTypes.germanyMap.title'),
      desc: t('home.studyTypes.germanyMap.description'),
      path: '/german/map'
    },
    {
      icon: '🎙️',
      title: t('home.studyTypes.speakingGame.title'),
      desc: t('home.studyTypes.speakingGame.description'),
      path: '/german/speaking'
    },
    {
      icon: '🎸',
      title: 'Wo bist du? — Rammstein',
      desc: language === 'es'
        ? 'Vocabulario y letra del álbum Rosenrot (2005)'
        : 'Vocabulary flashcards and full lyrics from Rosenrot (2005)',
      path: '/german/wo-bist-du'
    },
    {
      icon: '🎶',
      title: 'Amour — Rammstein',
      desc: language === 'es'
        ? 'Vocabulario alemán-francés y letra de Reise, Reise (2004)'
        : 'German–French vocabulary and full lyrics from Reise, Reise (2004)',
      path: '/german/amour'
    },
    {
      icon: '🥀',
      title: 'Stirb nicht vor mir — Rammstein',
      desc: language === 'es'
        ? 'Dúo alemán/inglés con Sharleen Spiteri — Rosenrot (2005)'
        : 'German/English duet feat. Sharleen Spiteri — Rosenrot (2005)',
      path: '/german/stirb-nicht'
    },
    {
      icon: '😇',
      title: 'Engel — Rammstein',
      desc: language === 'es'
        ? 'Vocabulario y letra de Sehnsucht (1997)'
        : 'Vocabulary flashcards and full lyrics from Sehnsucht (1997)',
      path: '/german/engel'
    },
    {
      icon: '🌹',
      title: 'Rosenrot — Rammstein',
      desc: language === 'es'
        ? 'Vocabulario y letra de Rosenrot (2005)'
        : 'Vocabulary flashcards and full lyrics from Rosenrot (2005)',
      path: '/german/rosenrot'
    },
    {
      icon: '⚔️',
      title: 'Mann gegen Mann — Rammstein',
      desc: language === 'es'
        ? 'Vocabulario y letra de Rosenrot (2005)'
        : 'Vocabulary flashcards and full lyrics from Rosenrot (2005)',
      path: '/german/mann-gegen-mann'
    }
  ];

  return (
    <div className="section-landing-container">
      <div className="section-landing-content">
        <header className="section-landing-header">
          <div className="section-landing-flag">🇩🇪</div>
          <h1 className="section-landing-title">
            {language === 'es' ? 'Aprendizaje de Alemán' : 'German Learning'}
          </h1>
          <p className="section-landing-subtitle">
            {language === 'es'
              ? 'Vocabulario, geografía y práctica de pronunciación'
              : 'Vocabulary, geography and pronunciation practice'}
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

export default GermanLanding;
