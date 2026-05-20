import React, { useState, useCallback } from 'react';
import { useI18n } from '../i18n/I18nContext';
import { RUSSIAN_CASES } from '../utils/russianGrammarData';
import '../styles/RussianGrammarCases.css';

function highlightWord(sentence, word, color) {
  const idx = sentence.indexOf(word);
  if (idx === -1) return <span>{sentence}</span>;
  return (
    <>
      {sentence.slice(0, idx)}
      <span className="grammar-example-highlight" style={{ color, borderColor: color }}>
        {word}
      </span>
      {sentence.slice(idx + word.length)}
    </>
  );
}

const RussianGrammarCases = ({ onHome }) => {
  const { language } = useI18n();
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCase = RUSSIAN_CASES[activeIndex];

  const goNext = useCallback(() => setActiveIndex(i => Math.min(i + 1, RUSSIAN_CASES.length - 1)), []);
  const goPrev = useCallback(() => setActiveIndex(i => Math.max(i - 1, 0)), []);

  return (
    <div className="grammar-container">
      <div className="grammar-content">
        {/* Header */}
        <div className="grammar-header">
          <button className="grammar-back-btn" onClick={onHome}>&#8592;</button>
          <h1 className="grammar-title">
            {language === 'es' ? 'Casos Gramaticales' : 'Grammar Cases'}
          </h1>
        </div>

        {/* Intro */}
        <div className="grammar-intro">
          {language === 'es'
            ? 'El ruso tiene 6 casos gramaticales. Cada caso cambia la terminación de los sustantivos, pronombres y adjetivos según su función en la oración.'
            : 'Russian has 6 grammatical cases. Each case changes the ending of nouns, pronouns, and adjectives according to their role in the sentence.'}
        </div>

        {/* Case tabs */}
        <div className="grammar-tabs">
          {RUSSIAN_CASES.map((c, i) => (
            <button
              key={c.id}
              className={`grammar-tab ${i === activeIndex ? 'active' : ''}`}
              style={i === activeIndex ? { borderColor: c.color, color: c.color } : {}}
              onClick={() => setActiveIndex(i)}
            >
              {c.name[language] || c.name.en}
            </button>
          ))}
        </div>

        {/* Case card */}
        <div className="grammar-case-card" style={{ background: `linear-gradient(135deg, ${activeCase.color}22, ${activeCase.color}11)` }}>
          <div className="grammar-case-header" style={{ background: `linear-gradient(135deg, ${activeCase.color}cc, ${activeCase.color}99)` }}>
            <span className="grammar-case-emoji">{activeCase.emoji}</span>
            <div className="grammar-case-title-group">
              <div className="grammar-case-name">{activeCase.name[language] || activeCase.name.en}</div>
              <div className="grammar-case-name-ru">{activeCase.name.ru}</div>
              <div className="grammar-case-question">{activeCase.question[language] || activeCase.question.en}</div>
            </div>
          </div>

          <div className="grammar-case-body">
            {/* Usage */}
            <div className="grammar-usage-block">
              <div className="grammar-usage-label">
                {language === 'es' ? 'Uso' : 'Usage'}
              </div>
              <div className="grammar-usage-text">
                {activeCase.usage[language] || activeCase.usage.en}
              </div>
            </div>

            {/* Endings */}
            <div className="grammar-endings-block">
              <div className="grammar-endings-label">
                {language === 'es' ? 'Terminaciones comunes' : 'Common endings'}
              </div>
              <div className="grammar-endings-text">
                {activeCase.endings[language] || activeCase.endings.en}
              </div>
            </div>

            {/* Examples */}
            <div className="grammar-examples-label">
              {language === 'es' ? 'Ejemplos' : 'Examples'}
            </div>
            {activeCase.examples.map((ex, i) => (
              <div
                key={i}
                className="grammar-example"
                style={{ borderColor: activeCase.color, color: activeCase.color }}
              >
                <div className="grammar-example-ru">
                  {highlightWord(ex.ru, ex.highlight, activeCase.color)}
                </div>
                <div className="grammar-example-translit">{ex.transliteration}</div>
                <div className="grammar-example-translation">
                  {ex[language] || ex.en}
                </div>
                <div className="grammar-example-note">
                  {ex.note[language] || ex.note.en}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="grammar-nav">
          <button
            className="grammar-nav-btn"
            onClick={goPrev}
            disabled={activeIndex === 0}
          >
            &#8592; {language === 'es' ? 'Anterior' : 'Previous'}
          </button>
          <span className="grammar-nav-indicator">
            {activeIndex + 1} / {RUSSIAN_CASES.length}
          </span>
          <button
            className="grammar-nav-btn"
            onClick={goNext}
            disabled={activeIndex === RUSSIAN_CASES.length - 1}
          >
            {language === 'es' ? 'Siguiente' : 'Next'} &#8594;
          </button>
        </div>

        <div className="grammar-bottom">
          <button className="grammar-home-btn" onClick={onHome}>
            {language === 'es' ? 'Volver al inicio' : 'Back to Home'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default RussianGrammarCases;
