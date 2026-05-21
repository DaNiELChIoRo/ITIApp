import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import CompleteQuiz from './pages/CompleteQuiz';
import MultipleChoiceQuiz from './pages/MultipleChoiceQuiz';
import FlashCards from './pages/FlashCards';
import Results from './pages/Results';
import Admin from './pages/Admin';
import { QuizProvider } from './contexts/QuizContext';

function App() {
  const navigate = useNavigate();
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
    if (quizId === 'german-vocabulary') { navigate('/german/flashcards'); return; }
    if (quizId === 'russian-vocabulary') { navigate('/russian/flashcards'); return; }
    setActiveQuizId(quizId);
    setCurrentScreen('flashcards');
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
    <QuizProvider>
      {currentScreen === 'home' && (
        <Home
          onStartOrder={navigateToOrderQuiz}
          onStartComplete={navigateToCompleteQuiz}
          onStartCovenants={navigateToCovenantsQuiz}
          onStartQuiz={navigateToMultipleChoiceQuiz}
          onStartFlashCards={navigateToFlashCards}
          onNavigateAdmin={navigateToAdmin}
          onGermanyMap={() => navigate('/german/map')}
          onSpeakingGame={() => navigate('/german/speaking')}
          onRussianGrammar={() => navigate('/russian/grammar')}
          onWoBistDu={() => navigate('/german/wo-bist-du')}
          onAmour={() => navigate('/german/amour')}
          onGermanSection={() => navigate('/german')}
          onRussianSection={() => navigate('/russian')}
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
      {currentScreen === 'admin' && (
        <Admin onBack={navigateToHome} />
      )}
    </QuizProvider>
  );
}

export default App;
