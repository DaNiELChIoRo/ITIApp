import React, { useState } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import CompleteQuiz from './pages/CompleteQuiz';
import Results from './pages/Results';
import { QuizProvider } from './contexts/QuizContext';
import { I18nProvider } from './i18n/I18nContext';
import LanguageSelector from './components/common/LanguageSelector';
import './styles/App.css';

/**
 * Main App component managing screen navigation
 */
function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [quizScore, setQuizScore] = useState(null);
  const [quizType, setQuizType] = useState('order');

  const navigateToOrderQuiz = () => {
    setQuizType('order');
    setCurrentScreen('quiz');
    setQuizScore(null);
  };

  const navigateToCompleteQuiz = () => {
    setQuizType('complete');
    setCurrentScreen('completeQuiz');
    setQuizScore(null);
  };

  const navigateToResults = (score) => {
    setQuizScore({ ...score, quizType });
    setCurrentScreen('results');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
    setQuizScore(null);
  };

  const handleRetry = () => {
    if (quizType === 'complete') {
      navigateToCompleteQuiz();
    } else {
      navigateToOrderQuiz();
    }
  };

  return (
    <I18nProvider>
      <QuizProvider>
        <div className="app">
          <div className="app-language-selector">
            <LanguageSelector />
          </div>
          {currentScreen === 'home' && (
            <Home
              onStartOrder={navigateToOrderQuiz}
              onStartComplete={navigateToCompleteQuiz}
            />
          )}
          {currentScreen === 'quiz' && <Quiz onComplete={navigateToResults} />}
          {currentScreen === 'completeQuiz' && <CompleteQuiz onComplete={navigateToResults} />}
          {currentScreen === 'results' && (
            <Results
              score={quizScore}
              onRetry={handleRetry}
              onHome={navigateToHome}
            />
          )}
        </div>
      </QuizProvider>
    </I18nProvider>
  );
}

export default App;
