import React, { useState, useMemo, useCallback } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { VOCAB_TYPE_LABELS } from '../utils/woBistDuVocabulary';
import '../styles/WoBistDuLesson.css';

const CARDS_PER_PAGE = 6;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const TYPE_COLORS = {
  question:  '#ffb74d',
  verb:      '#ef9a9a',
  pronoun:   '#80cbc4',
  adjective: '#a5d6a7',
  adverb:    '#90caf9',
  noun:      '#ce93d8',
  french:    '#f48fb1',
};

/**
 * Generic reusable song-lesson page.
 *
 * Props:
 *   title       – displayed song title (string)
 *   meta        – artist / album line (string)
 *   vocab       – array of { id, word, ipa, en, es, type }
 *   lyrics      – array of { label:{en,es}, lines:[{de,en}] }
 *   storageKey  – localStorage key for "known" progress
 *   onHome      – back-button callback
 */
const SongLesson = ({ title, meta, vocab, lyrics, storageKey, onHome }) => {
  const { language } = useI18n();
  const [tab, setTab]               = useState('vocab');
  const [filter, setFilter]         = useState('all');
  const [shuffleKey, setShuffleKey] = useState(0);
  const [page, setPage]             = useState(0);
  const [flipped, setFlipped]       = useState(new Set());
  const [knownIds, setKnownIds]     = useLocalStorage(storageKey, []);
  const [showTranslation, setShowTranslation] = useState(true);

  const { supported: ttsSupported, speakingId, speak } = useTextToSpeech();

  const allCards = useMemo(() => shuffleArray(vocab), [shuffleKey, vocab]);

  const filtered = useMemo(() => {
    if (filter === 'notLearned') return allCards.filter(c => !knownIds.includes(c.id));
    if (filter !== 'all') return allCards.filter(c => c.type === filter);
    return allCards;
  }, [allCards, filter, knownIds]);

  const totalPages = Math.ceil(filtered.length / CARDS_PER_PAGE);
  const pageCards  = filtered.slice(page * CARDS_PER_PAGE, page * CARDS_PER_PAGE + CARDS_PER_PAGE);

  const goToPage = useCallback((n) => { setPage(n); setFlipped(new Set()); }, []);

  const toggleCard = useCallback((i) => {
    setFlipped(prev => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }, []);

  const allFlipped = pageCards.length > 0 && flipped.size === pageCards.length;

  const toggleAll = useCallback(() => {
    setFlipped(allFlipped ? new Set() : new Set(pageCards.map((_, i) => i)));
  }, [allFlipped, pageCards]);

  const markKnown = useCallback((id, e) => {
    e.stopPropagation();
    setKnownIds(prev => prev.includes(id) ? prev : [...prev, id]);
  }, [setKnownIds]);

  const handleFilterChange = useCallback((f) => {
    setFilter(f);
    setPage(0);
    setFlipped(new Set());
  }, []);

  const handleShuffle = useCallback(() => {
    setShuffleKey(k => k + 1);
    setPage(0);
    setFlipped(new Set());
  }, []);

  const typeLabels   = VOCAB_TYPE_LABELS[language] || VOCAB_TYPE_LABELS.en;
  const uniqueTypes  = [...new Set(vocab.map(c => c.type))];

  return (
    <div className="wbd-container">
      <div className="wbd-content">

        {/* Header */}
        <div className="wbd-header">
          <button className="wbd-back-btn" onClick={onHome}>&#8592;</button>
          <div className="wbd-header-text">
            <h1 className="wbd-song-title">{title}</h1>
            <div className="wbd-song-meta">{meta}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="wbd-tabs">
          <button
            className={`wbd-tab ${tab === 'vocab' ? 'active' : ''}`}
            onClick={() => setTab('vocab')}
          >
            🃏 {language === 'es' ? `Vocabulario (${vocab.length})` : `Vocabulary (${vocab.length})`}
          </button>
          <button
            className={`wbd-tab ${tab === 'lyrics' ? 'active' : ''}`}
            onClick={() => setTab('lyrics')}
          >
            🎸 {language === 'es' ? 'Letra' : 'Lyrics'}
          </button>
        </div>

        {/* ── VOCABULARY TAB ── */}
        {tab === 'vocab' && (
          <>
            <div className="wbd-progress">
              <div className="wbd-progress-text">
                {knownIds.length} / {vocab.length}{' '}
                {language === 'es' ? 'aprendidas' : 'learned'}
              </div>
              <div className="wbd-progress-track">
                <div
                  className="wbd-progress-fill"
                  style={{ width: `${(knownIds.length / vocab.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="wbd-filters">
              <button
                className={`wbd-filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => handleFilterChange('all')}
              >
                {language === 'es' ? 'Todas' : 'All'}
              </button>
              <button
                className={`wbd-filter-btn ${filter === 'notLearned' ? 'active' : ''}`}
                onClick={() => handleFilterChange('notLearned')}
              >
                {language === 'es' ? 'No aprendidas' : 'Not learned'}
              </button>
              {uniqueTypes.map(type => (
                <button
                  key={type}
                  className={`wbd-filter-btn ${filter === type ? 'active' : ''}`}
                  onClick={() => handleFilterChange(type)}
                >
                  {typeLabels[type] || type}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <p style={{ color: 'white', textAlign: 'center', padding: '2rem 0' }}>
                {language === 'es' ? '¡Todas aprendidas!' : 'All learned!'}
              </p>
            ) : (
              <>
                <div className="wbd-grid">
                  {pageCards.map((card, i) => {
                    const isFlipped  = flipped.has(i);
                    const isKnown    = knownIds.includes(card.id);
                    const speakId    = `${storageKey}-${card.id}`;
                    const isSpeaking = speakingId === speakId;
                    const typeColor  = TYPE_COLORS[card.type] || 'white';

                    return (
                      <div key={`${page}-${i}`} className="wbd-card-scene" onClick={() => toggleCard(i)}>
                        <div className={`wbd-card ${isFlipped ? 'is-flipped' : ''}`}>
                          <div className="wbd-card-face wbd-card-front">
                            {isKnown && <span className="wbd-known-badge">✓</span>}
                            <div className="wbd-word">{card.word}</div>
                            <div className="wbd-ipa">{card.ipa}</div>
                            {ttsSupported && (
                              <button
                                style={{
                                  position: 'absolute', bottom: 28,
                                  background: 'none', border: 'none',
                                  cursor: 'pointer', fontSize: '1.1rem'
                                }}
                                onClick={e => { e.stopPropagation(); speak(card.word, speakId); }}
                                aria-label={`Pronounce ${card.word}`}
                              >
                                {isSpeaking ? '🔊' : '🔈'}
                              </button>
                            )}
                            <div className="wbd-type-badge" style={{ color: typeColor }}>
                              {typeLabels[card.type] || card.type}
                            </div>
                          </div>

                          <div className="wbd-card-face wbd-card-back">
                            <div className="wbd-meaning">{card.en}</div>
                            <div className="wbd-meaning-es">{card.es}</div>
                            {!isKnown && (
                              <button className="wbd-know-btn" onClick={e => markKnown(card.id, e)}>
                                {language === 'es' ? 'La sé ✓' : 'Got it ✓'}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {totalPages > 1 && (
                  <div className="wbd-nav">
                    <button className="wbd-nav-btn" onClick={() => goToPage(page - 1)} disabled={page === 0}>
                      &#8592; {language === 'es' ? 'Ant.' : 'Prev'}
                    </button>
                    <span className="wbd-nav-indicator">{page + 1} / {totalPages}</span>
                    <button className="wbd-nav-btn" onClick={() => goToPage(page + 1)} disabled={page >= totalPages - 1}>
                      {language === 'es' ? 'Sig.' : 'Next'} &#8594;
                    </button>
                  </div>
                )}
              </>
            )}

            <div className="wbd-actions">
              <button className="wbd-action-btn" onClick={toggleAll}>
                {allFlipped
                  ? (language === 'es' ? 'Ocultar todo' : 'Hide all')
                  : (language === 'es' ? 'Mostrar todo' : 'Show all')}
              </button>
              <button className="wbd-action-btn" onClick={handleShuffle}>
                {language === 'es' ? 'Mezclar' : 'Shuffle'}
              </button>
              {knownIds.length > 0 && (
                <button className="wbd-action-btn" onClick={() => setKnownIds([])}>
                  {language === 'es' ? 'Reiniciar progreso' : 'Reset progress'}
                </button>
              )}
            </div>
          </>
        )}

        {/* ── LYRICS TAB ── */}
        {tab === 'lyrics' && (
          <div className="wbd-lyrics-wrapper">
            <div className="wbd-lyrics-controls">
              <span className="wbd-lyrics-info">{meta}</span>
              <button
                className={`wbd-transl-toggle ${showTranslation ? 'on' : ''}`}
                onClick={() => setShowTranslation(v => !v)}
              >
                {showTranslation
                  ? (language === 'es' ? 'Ocultar traducción' : 'Hide translation')
                  : (language === 'es' ? 'Mostrar traducción' : 'Show translation')}
              </button>
            </div>

            {lyrics.map((stanza, si) => (
              <div key={si} className="wbd-stanza">
                <div className="wbd-stanza-label">
                  {stanza.label[language] || stanza.label.en}
                </div>
                <div className="wbd-lines">
                  {stanza.lines.map((line, li) => (
                    <div key={li} className="wbd-line">
                      <div className="wbd-line-de">{line.de}</div>
                      {showTranslation && (
                        <div className="wbd-line-en">{line.en}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  );
};

export default SongLesson;
