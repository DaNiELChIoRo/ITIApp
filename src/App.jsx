import React, { useState } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
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

  const navigateToQuiz = () => {
    setCurrentScreen('quiz');
    setQuizScore(null);
  };

  const navigateToResults = (score) => {
    setQuizScore(score);
    setCurrentScreen('results');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
    setQuizScore(null);
  };

  return (
    <I18nProvider>
      <QuizProvider>
        <div className="app">
          <div className="app-language-selector">
            <LanguageSelector />
          </div>
          {currentScreen === 'home' && <Home onStart={navigateToQuiz} />}
          {currentScreen === 'quiz' && <Quiz onComplete={navigateToResults} />}
          {currentScreen === 'results' && (
            <Results
              score={quizScore}
              onRetry={navigateToQuiz}
              onHome={navigateToHome}
            />
          )}
        </div>
      </QuizProvider>
    </I18nProvider>
  );
}

export default App;
