import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { GERMAN_VERBS, PRONOUNS } from '../utils/germanVerbsData';
import '../styles/GermanVerbsPage.css';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const QUIZ_STATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

// ─── Tables Mode ─────────────────────────────────────────────────────────────

const VerbCard = ({ verb, language }) => {
  const typeLabel = verb.type === 'regular'
    ? (language === 'es' ? 'Regular' : 'Regular')
    : (language === 'es' ? 'Irregular' : 'Irregular');

  return (
    <div className="gv-card">
      <div className="gv-card-header">
        <div className="gv-card-verb-group">
          <div className="gv-card-infinitive">{verb.infinitive}</div>
          <div className="gv-card-meaning">{verb.en}</div>
          <div className="gv-card-meaning-es">{verb.es}</div>
          {verb.stemChange && (
            <span className="gv-stem-change">{verb.stemChange}</span>
          )}
        </div>
        <span className={`gv-type-badge ${verb.type}`}>{typeLabel}</span>
      </div>

      <div>
        {PRONOUNS.map(pronoun => {
          const { form, highlight } = verb.forms[pronoun];
          return (
            <div key={pronoun} className="gv-table-row">
              <span className="gv-pronoun">{pronoun}</span>
              <span className={`gv-form ${highlight ? 'highlight' : ''}`}>{form}</span>
            </div>
          );
        })}
      </div>

      {verb.note && (
        <div className="gv-note">
          ℹ️ {verb.note[language] ?? verb.note.en}
        </div>
      )}
    </div>
  );
};

const TablesMode = ({ language }) => {
  const [filter, setFilter] = useState('all');

  const filtered = useMemo(() => {
    if (filter === 'regular')   return GERMAN_VERBS.filter(v => v.type === 'regular');
    if (filter === 'irregular') return GERMAN_VERBS.filter(v => v.type === 'irregular');
    return GERMAN_VERBS;
  }, [filter]);

  const labels = {
    all:       { en: 'All',       es: 'Todos' },
    regular:   { en: 'Regular',   es: 'Regulares' },
    irregular: { en: 'Irregular', es: 'Irregulares' },
  };

  return (
    <>
      <div className="gv-filters">
        {['all', 'regular', 'irregular'].map(f => (
          <button
            key={f}
            className={`gv-filter-btn ${filter === f ? 'active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {labels[f][language] ?? labels[f].en}
          </button>
        ))}
      </div>
      <div className="gv-grid">
        {filtered.map(verb => (
          <VerbCard key={verb.id} verb={verb} language={language} />
        ))}
      </div>
    </>
  );
};

// ─── Quiz Mode ────────────────────────────────────────────────────────────────

function buildQuestions() {
  // One question per verb × pronoun combination
  return shuffleArray(
    GERMAN_VERBS.flatMap(verb =>
      PRONOUNS.map(pronoun => ({ verb, pronoun, answer: verb.forms[pronoun].form }))
    )
  );
}

function buildOptions(question, allQuestions) {
  const correct = question.answer;
  const pool = allQuestions
    .filter(q => q.pronoun === question.pronoun && q.answer !== correct)
    .map(q => q.answer);
  const distractors = shuffleArray([...new Set(pool)]).slice(0, 3);
  // Pad with generic distractors if not enough unique options
  while (distractors.length < 3) distractors.push(`${question.verb.infinitive.slice(0, -2)}t`);
  const options = shuffleArray([correct, ...distractors]);
  return { options, correctIndex: options.indexOf(correct) };
}

const QuizMode = ({ language }) => {
  const [questions] = useState(buildQuestions);
  const [index, setIndex]     = useState(0);
  const [status, setStatus]   = useState(QUIZ_STATUS.IDLE);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [wrongIds, setWrongIds] = useState([]);

  const q = questions[index];
  const total = questions.length;

  const { options, correctIndex } = useMemo(
    () => q ? buildOptions(q, questions) : { options: [], correctIndex: 0 },
    [q, questions]
  );

  const handleSelect = useCallback((i) => {
    if (status !== QUIZ_STATUS.IDLE) return;
    setSelected(i);
    setStatus(QUIZ_STATUS.ANSWERED);
    if (i === correctIndex) {
      setCorrect(c => c + 1);
    } else {
      setWrongIds(prev => [...prev, index]);
    }
  }, [status, correctIndex, index]);

  const handleNext = useCallback(() => {
    if (index + 1 >= total) {
      setStatus(QUIZ_STATUS.DONE);
    } else {
      setIndex(i => i + 1);
      setSelected(null);
      setStatus(QUIZ_STATUS.IDLE);
    }
  }, [index, total]);

  // Auto-advance on correct
  useEffect(() => {
    if (status === QUIZ_STATUS.ANSWERED && selected === correctIndex) {
      const t = setTimeout(handleNext, 900);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIndex, handleNext]);

  const restartAll = useCallback(() => {
    setIndex(0);
    setSelected(null);
    setStatus(QUIZ_STATUS.IDLE);
    setCorrect(0);
    setWrongIds([]);
  }, []);

  const pct   = Math.round((correct / total) * 100);
  const isLast = index + 1 >= total;

  if (status === QUIZ_STATUS.DONE) {
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="gv-quiz-done">
        <div className="gv-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="gv-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>
        <p className="gv-quiz-done-score">{correct} / {total} — {pct}%</p>
        <p className="gv-quiz-done-sub">
          {language === 'es'
            ? `${wrongIds.length} respuestas incorrectas`
            : `${wrongIds.length} incorrect answers`}
        </p>
        <div className="gv-quiz-done-actions">
          <button className="gv-quiz-done-btn primary" onClick={restartAll}>
            {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="gv-quiz">
      <div className="gv-quiz-progress-row">
        <span className="gv-quiz-progress-text">{index + 1} / {total}</span>
        <span className="gv-quiz-score-text">✓ {correct}</span>
      </div>
      <div className="gv-quiz-progress-track">
        <div className="gv-quiz-progress-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="gv-quiz-card">
        <div className="gv-quiz-pronoun">{q.pronoun}</div>
        <div className="gv-quiz-infinitive">{q.verb.infinitive}</div>
        <div className="gv-quiz-hint">
          {q.verb.en}
          {q.verb.stemChange && (
            <span className="gv-quiz-stem-badge" style={{ marginLeft: 8 }}>
              {q.verb.stemChange}
            </span>
          )}
        </div>
        <p className="gv-quiz-prompt">
          {language === 'es' ? '¿Cuál es la forma correcta?' : 'Which form is correct?'}
        </p>
      </div>

      <div className="gv-quiz-options">
        {options.map((opt, i) => {
          let cls = 'gv-quiz-option';
          if (status === QUIZ_STATUS.ANSWERED) {
            if (i === correctIndex) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={status === QUIZ_STATUS.ANSWERED}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {status === QUIZ_STATUS.ANSWERED && selected !== correctIndex && (
        <button className="gv-quiz-next-btn" onClick={handleNext}>
          {isLast
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Root Page ────────────────────────────────────────────────────────────────

const GermanVerbsPage = ({ onHome }) => {
  const { language } = useI18n();
  const [tab, setTab] = useState('tables');

  return (
    <div className="gv-container">
      <div className="gv-content">

        <div className="gv-header">
          <button className="gv-back-btn" onClick={onHome} aria-label="Back">&#8592;</button>
          <div className="gv-header-text">
            <h1 className="gv-title">Verben &amp; Konjugation</h1>
            <div className="gv-subtitle">
              {language === 'es' ? 'Presente de indicativo' : 'Present tense conjugation'}
            </div>
          </div>
        </div>

        <div className="gv-tabs">
          <button
            className={`gv-tab ${tab === 'tables' ? 'active' : ''}`}
            onClick={() => setTab('tables')}
          >
            📋 {language === 'es' ? 'Tablas' : 'Tables'}
          </button>
          <button
            className={`gv-tab ${tab === 'quiz' ? 'active' : ''}`}
            onClick={() => setTab('quiz')}
          >
            🧠 Quiz
          </button>
        </div>

        {tab === 'tables'
          ? <TablesMode language={language} />
          : <QuizMode key={tab} language={language} />
        }

      </div>
    </div>
  );
};

export default GermanVerbsPage;
