import React, { useState, useEffect } from 'react';
import { shuffleQuestions } from '../utils/genesisCovenants';
import { useI18n } from '../i18n/I18nContext';
import { useData } from '../contexts/DataContext';
import Button from '../components/common/Button';
import ProgressBar from '../components/common/ProgressBar';
import '../styles/MultipleChoiceQuiz.css';

/**
 * Multiple Choice Quiz Component
 * Questions about Genesis Covenants
 */
const MultipleChoiceQuiz = ({ onComplete, quizId = 'genesis-covenants' }) => {
  const { t, language } = useI18n();
  const { quizzes } = useData();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const quiz = quizzes.find(q => q.id === quizId);
    const quizData = quiz || quizzes[0];
    if (!quizData) return;
    const quizQuestions = quizData[language] || quizData.en || [];
    setQuestions(shuffleQuestions(quizQuestions));
    setAnswers([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowResult(false);
  }, [language, quizId, quizzes]);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  const handleSelectAnswer = (index) => {
    if (showResult) return;
    setSelectedAnswer(index);
  };

  const handleCheck = () => {
    if (selectedAnswer === null) return;

    const isCorrect = selectedAnswer === currentQuestion.correctIndex;

    // Save answer
    const newAnswers = [...answers];
    newAnswers[currentIndex] = {
      questionId: currentQuestion.id,
      selectedIndex: selectedAnswer,
      correctIndex: currentQuestion.correctIndex,
      correct: isCorrect
    };
    setAnswers(newAnswers);
    setShowResult(true);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      // Quiz complete
      handleFinish();
    }
  };

  const handleFinish = () => {
    const correctCount = answers.filter(a => a?.correct).length;
    const total = questions.length;
    const percentage = Math.round((correctCount / total) * 100);

    onComplete({
      correct: correctCount,
      total,
      percentage,
      answers: answers,
      questions: questions,
      quizType: 'covenants'
    });
  };

  if (!currentQuestion) {
    return (
      <div className="mc-quiz-container">
        <div className="mc-loading">Loading...</div>
      </div>
    );
  }

  const isCorrect = selectedAnswer === currentQuestion.correctIndex;

  return (
    <div className="mc-quiz-container">
      <header className="mc-quiz-header">
        <h1 className="mc-quiz-title">{t('multipleChoice.title')}</h1>
        <p className="mc-quiz-instruction">{t('multipleChoice.instruction')}</p>
      </header>

      <div className="mc-quiz-progress">
        <ProgressBar progress={progress} />
        <div className="mc-progress-text">
          {t('multipleChoice.question', { current: currentIndex + 1, total: questions.length })}
        </div>
      </div>

      <div className="mc-quiz-content">
        <div className="mc-question-card">
          <div className="mc-question-text">
            {currentQuestion.question}
          </div>

          <div className="mc-options">
            {currentQuestion.options.map((option, index) => {
              let optionClass = 'mc-option';

              if (showResult) {
                if (index === currentQuestion.correctIndex) {
                  optionClass += ' correct';
                } else if (index === selectedAnswer && !isCorrect) {
                  optionClass += ' incorrect';
                }
              } else if (index === selectedAnswer) {
                optionClass += ' selected';
              }

              return (
                <button
                  key={index}
                  className={optionClass}
                  onClick={() => handleSelectAnswer(index)}
                  disabled={showResult}
                >
                  <span className="mc-option-letter">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="mc-option-text">{option}</span>
                  {showResult && index === currentQuestion.correctIndex && (
                    <span className="mc-option-icon correct">✓</span>
                  )}
                  {showResult && index === selectedAnswer && !isCorrect && (
                    <span className="mc-option-icon incorrect">✗</span>
                  )}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`mc-result ${isCorrect ? 'correct' : 'incorrect'}`}>
              <div className="mc-result-message">
                {isCorrect ? t('multipleChoice.correct') : t('multipleChoice.incorrect')}
              </div>
              {!isCorrect && (
                <div className="mc-correct-answer">
                  {t('multipleChoice.correctAnswerWas')} {currentQuestion.options[currentQuestion.correctIndex]}
                </div>
              )}
              <div className="mc-reference">
                {t('multipleChoice.reference')} {currentQuestion.reference}
              </div>
            </div>
          )}
        </div>

        <div className="mc-quiz-actions">
          {!showResult ? (
            <Button
              onClick={handleCheck}
              variant="primary"
              disabled={selectedAnswer === null}
              className="mc-action-button"
            >
              {t('completeQuiz.check')}
            </Button>
          ) : (
            <Button
              onClick={handleNext}
              variant="primary"
              className="mc-action-button"
            >
              {currentIndex < questions.length - 1
                ? t('multipleChoice.next')
                : t('multipleChoice.finish')}
            </Button>
          )}
        </div>
      </div>

      <div className="mc-dots-overview">
        {questions.map((_, index) => {
          const answer = answers[index];
          let statusClass = 'pending';
          if (answer) {
            statusClass = answer.correct ? 'correct' : 'incorrect';
          } else if (index === currentIndex) {
            statusClass = 'current';
          }
          return (
            <div
              key={index}
              className={`mc-dot ${statusClass}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MultipleChoiceQuiz;
