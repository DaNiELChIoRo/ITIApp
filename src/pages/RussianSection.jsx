import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FlashCards from './FlashCards';
import RussianGrammarCases from './RussianGrammarCases';
import RussianLanding from './RussianLanding';

const RussianSection = () => {
  const navigate = useNavigate();
  const goSection = () => navigate('/russian');

  return (
    <Routes>
      <Route index element={<RussianLanding />} />
      <Route path="flashcards" element={<FlashCards quizId="russian-vocabulary" onHome={goSection} />} />
      <Route path="grammar" element={<RussianGrammarCases onHome={goSection} />} />
    </Routes>
  );
};

export default RussianSection;
