import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useI18n } from '../i18n/I18nContext';
import {
  PERSONAL_CASES, PERSONAL_PERSONS,
  POSSESSIVE_GENDERS, POSSESSIVE_PERSONS,
  REFLEXIVE_CASES, REFLEXIVE_PERSONS,
  buildPronounQuiz,
} from '../utils/germanPronounsData';
import '../styles/GermanPronounsPage.css';

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CASE_COLOR   = { Nominativ: 'blue', Akkusativ: 'orange', Dativ: 'purple' };
const GENDER_COLOR = { M: 'blue', F: 'amber', N: 'green', Pl: 'purple' };

// ─── Tables Mode ─────────────────────────────────────────────────────────────

const PersonalTable = ({ language }) => (
  <div className="gp-table-scroll">
    <table className="gp-ref-table">
      <thead>
        <tr>
          <th className="gp-th-person">{language === 'es' ? 'Persona' : 'Person'}</th>
          {PERSONAL_CASES.map(c => (
            <th key={c} className={`gp-th-case gp-color-${CASE_COLOR[c]}`}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {PERSONAL_PERSONS.map(p => (
          <tr key={p.key}>
            <td className="gp-td-label">{p.label.de}</td>
            {p.forms.map((form, i) => (
              <td key={i} className={`gp-ref-cell gp-color-${CASE_COLOR[PERSONAL_CASES[i]]}`}>
                {form}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const PossessiveTable = ({ language }) => (
  <div className="gp-table-scroll">
    <table className="gp-ref-table">
      <thead>
        <tr>
          <th className="gp-th-person">{language === 'es' ? 'Persona' : 'Person'}</th>
          {POSSESSIVE_GENDERS.map(g => (
            <th key={g} className={`gp-th-case gp-color-${GENDER_COLOR[g]}`}>{g}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {POSSESSIVE_PERSONS.map(p => (
          <tr key={p.key}>
            <td className="gp-td-label">{p.label.de}</td>
            {POSSESSIVE_GENDERS.map(g => (
              <td key={g} className={`gp-ref-cell gp-color-${GENDER_COLOR[g]}`}>
                {p.stems[g]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const ReflexiveTable = ({ language }) => (
  <div className="gp-table-scroll">
    <table className="gp-ref-table">
      <thead>
        <tr>
          <th className="gp-th-person">{language === 'es' ? 'Persona' : 'Person'}</th>
          {REFLEXIVE_CASES.map(c => (
            <th key={c} className={`gp-th-case gp-color-${CASE_COLOR[c]}`}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {REFLEXIVE_PERSONS.map(p => (
          <tr key={p.key}>
            <td className="gp-td-label">{p.label}</td>
            {p.forms.map((form, i) => (
              <td key={i} className={`gp-ref-cell gp-color-${CASE_COLOR[REFLEXIVE_CASES[i]]}`}>
                {form}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const TABLE_SUBTABS = [
  { key: 'personal',   en: 'Personal',   es: 'Personales' },
  { key: 'possessive', en: 'Possessive', es: 'Posesivos'  },
  { key: 'reflexive',  en: 'Reflexive',  es: 'Reflexivos' },
];

const TABLE_NOTES = {
  personal:   { en: 'Nominative · Accusative · Dative',      es: 'Nominativ · Akkusativ · Dativ'           },
  possessive: { en: 'Nominativ forms (M / F / N / Plural)',   es: 'Formas en Nominativ (M / F / N / Plural)' },
  reflexive:  { en: 'Accusative · Dative',                    es: 'Akkusativ · Dativ'                       },
};

const TablesMode = ({ language }) => {
  const [sub, setSub] = useState('personal');
  const lang = language === 'es' ? 'es' : 'en';
  return (
    <>
      <div className="gp-subtabs">
        {TABLE_SUBTABS.map(t => (
          <button
            key={t.key}
            className={`gp-subtab ${sub === t.key ? 'active' : ''}`}
            onClick={() => setSub(t.key)}
          >
            {language === 'es' ? t.es : t.en}
          </button>
        ))}
      </div>
      <div className="gp-table-note">{TABLE_NOTES[sub][lang]}</div>
      {sub === 'personal'   && <PersonalTable   language={language} />}
      {sub === 'possessive' && <PossessiveTable language={language} />}
      {sub === 'reflexive'  && <ReflexiveTable  language={language} />}
    </>
  );
};

// ─── Quiz Mode ────────────────────────────────────────────────────────────────

const QSTATUS = { IDLE: 'idle', ANSWERED: 'answered', DONE: 'done' };

const QuizMode = ({ language }) => {
  const [questions]             = useState(() => buildPronounQuiz());
  const [index, setIndex]       = useState(0);
  const [status, setStatus]     = useState(QSTATUS.IDLE);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect]   = useState(0);

  const q     = questions[index];
  const total = questions.length;

  const { options, correctIdx } = useMemo(() => {
    if (!q) return { options: [], correctIdx: 0 };
    const opts = shuffleArray([q.answer, ...shuffleArray(q.distractors).slice(0, 3)]);
    return { options: opts, correctIdx: opts.indexOf(q.answer) };
  }, [q]);

  const handleSelect = useCallback((i) => {
    if (status !== QSTATUS.IDLE) return;
    setSelected(i);
    setStatus(QSTATUS.ANSWERED);
    if (i === correctIdx) setCorrect(c => c + 1);
  }, [status, correctIdx]);

  const handleNext = useCallback(() => {
    if (index + 1 >= total) setStatus(QSTATUS.DONE);
    else { setIndex(i => i + 1); setSelected(null); setStatus(QSTATUS.IDLE); }
  }, [index, total]);

  useEffect(() => {
    if (status === QSTATUS.ANSWERED && selected === correctIdx) {
      const t = setTimeout(handleNext, 900);
      return () => clearTimeout(t);
    }
  }, [status, selected, correctIdx, handleNext]);

  const restart = useCallback(() => {
    setIndex(0); setSelected(null); setStatus(QSTATUS.IDLE); setCorrect(0);
  }, []);

  if (status === QSTATUS.DONE) {
    const pct   = Math.round((correct / total) * 100);
    const stars = pct >= 90 ? 3 : pct >= 65 ? 2 : 1;
    return (
      <div className="gp-quiz-done">
        <div className="gp-quiz-done-stars">{'⭐'.repeat(stars)}</div>
        <h2 className="gp-quiz-done-title">
          {language === 'es' ? '¡Quiz terminado!' : 'Quiz complete!'}
        </h2>
        <p className="gp-quiz-done-score">{correct} / {total} — {pct}%</p>
        <button className="gp-quiz-done-btn" onClick={restart}>
          {language === 'es' ? '🔀 Empezar de nuevo' : '🔀 Start over'}
        </button>
      </div>
    );
  }

  const catLabel = q.category === 'reflexive'
    ? (language === 'es' ? 'Reflexivo' : 'Reflexive')
    : (language === 'es' ? 'Personal' : 'Personal');

  return (
    <div className="gp-quiz">
      <div className="gp-quiz-progress-row">
        <span className="gp-quiz-counter">{index + 1} / {total}</span>
        <span className="gp-quiz-score-text">✓ {correct}</span>
      </div>
      <div className="gp-quiz-track">
        <div className="gp-quiz-fill" style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>

      <div className="gp-quiz-card">
        <div className="gp-quiz-meta">
          <span className="gp-quiz-cat-tag">{catLabel}</span>
          <span className="gp-quiz-case-tag">{q.caseLabel}</span>
        </div>
        <div className="gp-quiz-person">{q.personLabel}</div>
        <p className="gp-quiz-prompt">
          {language === 'es' ? '¿Cuál es la forma correcta?' : 'Which form is correct?'}
        </p>
      </div>

      <div className="gp-quiz-options">
        {options.map((opt, i) => {
          let cls = 'gp-quiz-opt';
          if (status === QSTATUS.ANSWERED) {
            if (i === correctIdx) cls += ' correct';
            else if (i === selected) cls += ' wrong';
          }
          return (
            <button key={i} className={cls} onClick={() => handleSelect(i)} disabled={status === QSTATUS.ANSWERED}>
              {opt}
            </button>
          );
        })}
      </div>

      {status === QSTATUS.ANSWERED && selected !== correctIdx && (
        <button className="gp-quiz-next-btn" onClick={handleNext}>
          {index + 1 >= total
            ? (language === 'es' ? 'Ver resultados →' : 'See results →')
            : (language === 'es' ? 'Siguiente →' : 'Next →')}
        </button>
      )}
    </div>
  );
};

// ─── Root Page ────────────────────────────────────────────────────────────────

const GermanPronounsPage = ({ onHome }) => {
  const { language } = useI18n();
  const [tab, setTab] = useState('tables');

  return (
    <div className="gp-container">
      <div className="gp-content">

        <div className="gp-header">
          <button className="gp-back-btn" onClick={onHome} aria-label="Back">&#8592;</button>
          <div className="gp-header-text">
            <h1 className="gp-title">Pronomen</h1>
            <div className="gp-subtitle">
              {language === 'es' ? 'Pronombres alemanes' : 'German Pronouns'}
            </div>
          </div>
        </div>

        <div className="gp-tabs">
          <button className={`gp-tab ${tab === 'tables' ? 'active' : ''}`} onClick={() => setTab('tables')}>
            📋 {language === 'es' ? 'Tablas' : 'Tables'}
          </button>
          <button className={`gp-tab ${tab === 'quiz' ? 'active' : ''}`} onClick={() => setTab('quiz')}>
            🧠 Quiz
          </button>
        </div>

        {tab === 'tables'
          ? <TablesMode language={language} />
          : <QuizMode key={tab} language={language} />}

      </div>
    </div>
  );
};

export default GermanPronounsPage;
