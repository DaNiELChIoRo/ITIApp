import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useTextToSpeech } from '../hooks/useTextToSpeech';
import { VOCAB_TYPE_LABELS } from '../utils/woBistDuVocabulary';
import '../styles/WoBistDuLesson.css';

const CARDS_PER_PAGE = 6;
const QUIZ_STATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

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

function buildSongQuizOptions(card, allVocab) {
  const correct = card.en;
  const distractors = shuffleArray(
    allVocab.filter(c => c.id !== card.id).map(c => c.en)
  ).slice(0, 3);
  const pool = shuffleArray([correct, ...distractors]);
  return { options: pool, correctIndex: pool.indexOf(correct) };
}

// ─── Song Quiz Mode ───────────────────────────────────────────────────────────

const SongQuizMode = ({ vocab, knownIds, setKnownIds, language, storageKey }) => {
  const { supported: ttsSupported, speakingId, speak } = useTextToSpeech();

  const [quizCards, setQuizCards]   = useState(() => shuffleArray(vocab));
  const [index, setIndex]           = useState(0);
  const [status, setStatus]         = useState(QUIZ_STATUS.IDLE);
  const [selected, setSelected]     = useState(null);
  const [sessionCorrect, setCorrect] = useState(0);
  const [wrongIds, setWrongIds]     = useState([]);
  const [onlyWrong, setOnlyWrong]   = useState(false);

  const card = quizCards[index];

  const { options, correctIndex } = useMemo(
    () => card ? buildSongQuizOptions(card, vocab) : { options: [], correctIndex: 0 },
    [card, vocab]
  );

  const speakId    = `song-quiz-${storageKey}-${card?.id}`;
  const isSpeaking = speakingId === speakId;

  const handleSelect = useCallback((i) => {
    if (status !== QUIZ_STATUS.IDLE) return;
    setSelected(i);
    setStatus(QUIZ_STATUS.ANSWERED);
    if (i === correctIndex) {
      setCorrect(prev => prev + 1);
      setKnownIds(prev => prev.includes(card.id) ? prev : [...prev, card.id]);
    } else {
      setWrongIds(prev => prev.includes(card.id) ? prev : [...prev, card.id]);
    }
  }, [status, correctIndex, card, setKnownIds]);

  const handleNext = useCallback(() => {
    if (index + 1 >= quizCards.length) {
      setStatus(QUIZ_STATUS.DONE);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setStatus(QUIZ_STATUS.IDLE);
    }
  }, [index, quizCards.length]);

  useEffect(() => {
    if (status === QUIZ_STATUS.ANSWERED && selected === correctIndex) {
      const t = setTimeout(handleNext, 900);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIndex, handleNext]);

  const restartWrong = useCallback(() => {
    const wrong = vocab.filter(c => wrongIds.includes(c.id));
    setQuizCards(shuffleArray(wrong.length ? wrong : vocab));
    setIndex(0); setSelected(null); setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0); setWrongIds([]); setOnlyWrong(wrong.length > 0);
  }, [vocab, wrongIds]);

  const restartAll = useCallback(() => {
    setQuizCards(shuffleArray(vocab));
    setIndex(0); setSelected(null); setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0); setWrongIds([]); setOnlyWrong(false);
  }, [vocab]);

  const total = quizCards.length;
  const pct   = Math.round((sessionCorrect / total) * 100);
  const isLast = index + 1 >= total;

  if (status === QUIZ_STATUS.DONE) {
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="wbd-quiz-done">
        <div className="wbd-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="wbd-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>
        <p className="wbd-quiz-done-score">{sessionCorrect} / {total} — {pct}%</p>
        <p className="wbd-quiz-done-known">
          {language === 'es'
            ? `${knownIds.length} palabras marcadas como aprendidas`
            : `${knownIds.length} words marked as learned`}
        </p>
        <div className="wbd-quiz-done-actions">
          {wrongIds.length > 0 && (
            <button className="wbd-quiz-done-btn primary" onClick={restartWrong}>
              {language === 'es' ? `🔁 Repetir errores (${wrongIds.length})` : `🔁 Retry wrong (${wrongIds.length})`}
            </button>
          )}
          <button className="wbd-quiz-done-btn" onClick={restartAll}>
            {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="wbd-quiz">
      <div className="wbd-quiz-progress">
        <span className="wbd-quiz-progress-text">
          {index + 1} / {total}
          {onlyWrong && <span className="wbd-quiz-wrong-badge">
            {language === 'es' ? ' · solo errores' : ' · wrong only'}
          </span>}
        </span>
        <span className="wbd-quiz-score-text">✓ {sessionCorrect}</span>
      </div>
      <div className="wbd-quiz-progress-track">
        <div className="wbd-quiz-progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="wbd-quiz-card">
        <div className="wbd-quiz-word">{card?.word}</div>
        {card?.ipa && <div className="wbd-quiz-ipa">{card.ipa}</div>}
        {ttsSupported && (
          <button
            className={`wbd-quiz-speak-btn ${isSpeaking ? 'speaking' : ''}`}
            onClick={() => speak(card.word, speakId)}
            aria-label={`Pronounce ${card?.word}`}
          >
            {isSpeaking ? '🔊' : '🔈'}
          </button>
        )}
        <p className="wbd-quiz-prompt">
          {language === 'es' ? '¿Cuál es el significado?' : 'What does this mean?'}
        </p>
      </div>

      <div className="wbd-quiz-options">
        {options.map((opt, i) => {
          let cls = 'wbd-quiz-option';
          if (status === QUIZ_STATUS.ANSWERED) {
            if (i === correctIndex) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)}
              disabled={status === QUIZ_STATUS.ANSWERED}>
              {opt}
            </button>
          );
        })}
      </div>

      {status === QUIZ_STATUS.ANSWERED && selected !== correctIndex && (
        <button className="wbd-quiz-next-btn" onClick={handleNext}>
          {isLast
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
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
            className={`wbd-tab ${tab === 'quiz' ? 'active' : ''}`}
            onClick={() => setTab('quiz')}
          >
            🧠 {language === 'es' ? 'Quiz' : 'Quiz'}
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

        {/* ── QUIZ TAB ── */}
        {tab === 'quiz' && (
          <SongQuizMode
            vocab={vocab}
            knownIds={knownIds}
            setKnownIds={setKnownIds}
            language={language}
            storageKey={storageKey}
          />
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
                  ? (language === 'es' ? 'Ocultar inglés' : 'Hide English')
                  : (language === 'es' ? 'Mostrar inglés' : 'Show English')}
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
                      {line.es && (
                        <div className="wbd-line-es">
                          <span className="wbd-line-flag">🇪🇸</span> {line.es}
                        </div>
                      )}
                      <div className="wbd-line-de">
                        {line.es && <span className="wbd-line-flag">🇩🇪</span>} {line.de}
                      </div>
                      {showTranslation && line.en && (
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
