import React, { useState } from 'react';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import CompleteQuiz from './pages/CompleteQuiz';
import MultipleChoiceQuiz from './pages/MultipleChoiceQuiz';
import FlashCards from './pages/FlashCards';
import GermanyMap from './pages/GermanyMap';
import GermanSpeakingGame from './pages/GermanSpeakingGame';
import RussianGrammarCases from './pages/RussianGrammarCases';
import Results from './pages/Results';
import Admin from './pages/Admin';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { QuizProvider } from './contexts/QuizContext';
import { I18nProvider } from './i18n/I18nContext';
import LanguageSelector from './components/common/LanguageSelector';
import './styles/App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [quizScore, setQuizScore] = useState(null);
  const [quizType, setQuizType] = useState('order');
  const [activeQuizId, setActiveQuizId] = useState('genesis-covenants');

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

  const navigateToCovenantsQuiz = () => {
    setQuizType('covenants');
    setActiveQuizId('genesis-covenants');
    setCurrentScreen('covenantsQuiz');
    setQuizScore(null);
  };

  const navigateToMultipleChoiceQuiz = (quizId) => {
    setQuizType('covenants');
    setActiveQuizId(quizId);
    setCurrentScreen('covenantsQuiz');
    setQuizScore(null);
  };

  const navigateToResults = (score) => {
    setQuizScore({ ...score, quizType: score.quizType || quizType });
    setCurrentScreen('results');
  };

  const navigateToHome = () => {
    setCurrentScreen('home');
    setQuizScore(null);
  };

  const navigateToFlashCards = (quizId) => {
    setActiveQuizId(quizId);
    setCurrentScreen('flashcards');
  };

  const navigateToGermanyMap = () => {
    setCurrentScreen('germanyMap');
  };

  const navigateToSpeakingGame = () => {
    setCurrentScreen('speakingGame');
  };

  const navigateToRussianGrammar = () => {
    setCurrentScreen('russianGrammar');
  };

  const navigateToAdmin = () => {
    setCurrentScreen('admin');
  };

  const handleRetry = () => {
    if (quizType === 'complete') {
      navigateToCompleteQuiz();
    } else if (quizType === 'covenants') {
      navigateToMultipleChoiceQuiz(activeQuizId);
    } else {
      navigateToOrderQuiz();
    }
  };

  return (
    <AuthProvider>
    <DataProvider>
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
                onStartCovenants={navigateToCovenantsQuiz}
                onStartQuiz={navigateToMultipleChoiceQuiz}
                onStartFlashCards={navigateToFlashCards}
                onNavigateAdmin={navigateToAdmin}
                onGermanyMap={navigateToGermanyMap}
                onSpeakingGame={navigateToSpeakingGame}
                onRussianGrammar={navigateToRussianGrammar}
              />
            )}
            {currentScreen === 'quiz' && <Quiz onComplete={navigateToResults} onHome={navigateToHome} />}
            {currentScreen === 'completeQuiz' && <CompleteQuiz onComplete={navigateToResults} onHome={navigateToHome} />}
            {currentScreen === 'covenantsQuiz' && (
              <MultipleChoiceQuiz onComplete={navigateToResults} onHome={navigateToHome} quizId={activeQuizId} />
            )}
            {currentScreen === 'results' && (
              <Results
                score={quizScore}
                onRetry={handleRetry}
                onHome={navigateToHome}
              />
            )}
            {currentScreen === 'flashcards' && (
              <FlashCards quizId={activeQuizId} onHome={navigateToHome} />
            )}
            {currentScreen === 'germanyMap' && (
              <GermanyMap onHome={navigateToHome} />
            )}
            {currentScreen === 'speakingGame' && (
              <GermanSpeakingGame onHome={navigateToHome} />
            )}
            {currentScreen === 'russianGrammar' && (
              <RussianGrammarCases onHome={navigateToHome} />
            )}
            {currentScreen === 'admin' && (
              <Admin onBack={navigateToHome} />
            )}
          </div>
        </QuizProvider>
      </I18nProvider>
    </DataProvider>
    </AuthProvider>
  );
}

export default App;
