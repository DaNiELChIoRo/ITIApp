import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';
import '../styles/GermanLanding.css';

const TOOLS = [
  {
    icon: '🇩🇪',
    key: 'flashcards',
    en: 'Vocabulary',
    es: 'Vocabulario',
    path: '/german/flashcards',
  },
  {
    icon: '🔤',
    key: 'verben',
    en: 'Verbs',
    es: 'Verbos',
    path: '/german/verben',
  },
  {
    icon: '🔢',
    key: 'numbers',
    en: 'Numbers',
    es: 'Números',
    path: '/german/numbers',
  },
  {
    icon: '❓',
    key: 'wfragen',
    en: 'W-Fragen',
    es: 'W-Fragen',
    path: '/german/w-fragen',
  },
  {
    icon: '🧩',
    key: 'compounds',
    en: 'Compound Words',
    es: 'Palabras Compuestas',
    path: '/german/compound-words',
  },
  {
    icon: '🗺️',
    key: 'map',
    en: 'Germany Map',
    es: 'Mapa de Alemania',
    path: '/german/map',
  },
  {
    icon: '🎙️',
    key: 'speaking',
    en: 'Speaking Game',
    es: 'Juego de Pronunciación',
    path: '/german/speaking',
  },
];

const SONG_PREVIEWS = [
  'Engel', 'Rosenrot', 'Wo bist du?', 'Amour',
  'Stirb nicht vor mir', 'Mann gegen Mann', 'Feuer und Wasser',
  'Spiel mit mir', 'Seemann',
];

const GermanLanding = () => {
  const navigate = useNavigate();
  const { language } = useI18n();

  return (
    <div className="gl-container">
      <div className="gl-content">

        {/* Header */}
        <header className="gl-header">
          <div className="gl-flag">🇩🇪</div>
          <h1 className="gl-title">
            {language === 'es' ? 'Alemán' : 'German'}
          </h1>
          <p className="gl-subtitle">
            {language === 'es'
              ? 'Vocabulario, gramática y pronunciación'
              : 'Vocabulary, grammar and pronunciation'}
          </p>
        </header>

        {/* Study tools */}
        <div className="gl-section">
          <h2 className="gl-section-label">
            {language === 'es' ? '📚 Herramientas' : '📚 Study tools'}
          </h2>
          <div className="gl-tools-grid">
            {TOOLS.map(tool => (
              <button
                key={tool.key}
                className="gl-tool-btn"
                onClick={() => navigate(tool.path)}
              >
                <span className="gl-tool-icon">{tool.icon}</span>
                <span className="gl-tool-name">
                  {language === 'es' ? tool.es : tool.en}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Songs subsection — single block */}
        <div className="gl-section">
          <h2 className="gl-section-label">
            {language === 'es' ? '🎸 Canciones' : '🎸 Songs'}
          </h2>
          <button
            className="gl-songs-block"
            onClick={() => navigate('/german/songs')}
          >
            <div className="gl-songs-top">
              <span className="gl-songs-band">Rammstein</span>
              <span className="gl-songs-badge">
                {SONG_PREVIEWS.length} {language === 'es' ? 'canciones' : 'songs'}
              </span>
            </div>
            <p className="gl-songs-preview">
              {SONG_PREVIEWS.join(' · ')}
            </p>
            <span className="gl-songs-cta">
              {language === 'es' ? 'Ver todas →' : 'Browse all →'}
            </span>
          </button>
        </div>

        {/* Back */}
        <button className="gl-back-btn" onClick={() => navigate('/')}>
          &#8592; {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
        </button>

      </div>
    </div>
  );
};

export default GermanLanding;
