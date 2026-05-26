import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useI18n } from '../i18n/I18nContext';

const SONGS = [
  { icon: '😇', title: 'Engel',              meta: 'Sehnsucht (1997)',   path: '/german/engel' },
  { icon: '🌹', title: 'Rosenrot',           meta: 'Rosenrot (2005)',    path: '/german/rosenrot' },
  { icon: '🎸', title: 'Wo bist du?',        meta: 'Rosenrot (2005)',    path: '/german/wo-bist-du' },
  { icon: '🎶', title: 'Amour',              meta: 'Reise, Reise (2004)',path: '/german/amour' },
  { icon: '🥀', title: 'Stirb nicht vor mir',meta: 'Rosenrot (2005)',    path: '/german/stirb-nicht' },
  { icon: '⚔️', title: 'Mann gegen Mann',    meta: 'Rosenrot (2005)',    path: '/german/mann-gegen-mann' },
  { icon: '🔥', title: 'Feuer und Wasser',   meta: 'Mutter (2001)',      path: '/german/feuer-und-wasser' },
  { icon: '🎮', title: 'Spiel mit mir',      meta: 'Sehnsucht (1997)',   path: '/german/spiel-mit-mir' },
  { icon: '⚓', title: 'Seemann',            meta: 'Herzeleid (1995)',   path: '/german/seemann' },
  { icon: '🌊', title: 'Alter Mann',         meta: 'Sehnsucht (1997)',   path: '/german/alter-mann' },
];

const GermanSongsLanding = ({ onHome }) => {
  const navigate = useNavigate();
  const { language } = useI18n();

  return (
    <div className="gl-container">
      <div className="gl-content">
        <header className="gl-header">
          <div style={{ fontSize: '2.8rem' }}>🎸</div>
          <h1 className="gl-title">Rammstein</h1>
          <p className="gl-subtitle">
            {language === 'es'
              ? 'Vocabulario y letra de cada canción'
              : 'Vocabulary flashcards and full lyrics'}
          </p>
        </header>

        <div className="gl-tools-grid" style={{ gridTemplateColumns: '1fr' }}>
          {SONGS.map(song => (
            <button
              key={song.path}
              className="gl-tool-btn"
              style={{ flexDirection: 'row', justifyContent: 'flex-start', gap: 14, padding: '14px 18px' }}
              onClick={() => navigate(song.path)}
            >
              <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{song.icon}</span>
              <span style={{ textAlign: 'left' }}>
                <span style={{ display: 'block', fontSize: '0.95rem', fontWeight: 800 }}>{song.title}</span>
                <span style={{ display: 'block', fontSize: '0.72rem', color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>{song.meta}</span>
              </span>
            </button>
          ))}
        </div>

        <button className="gl-back-btn" onClick={onHome}>
          &#8592; {language === 'es' ? 'Volver' : 'Back'}
        </button>
      </div>
    </div>
  );
};

export default GermanSongsLanding;
