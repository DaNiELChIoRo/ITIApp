import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FlashCards from './FlashCards';
import RussianGrammarCases from './RussianGrammarCases';
import RussianLanding from './RussianLanding';
import KletkaLesson from './KletkaLesson';
import ToskaLesson from './ToskaLesson';
import VolnyLesson from './VolnyLesson';
import ZimnyayaLesson from './ZimnyayaLesson';
import RussianAdjectiveCardsPage from './RussianAdjectiveCardsPage';

const RussianSection = () => {
  const navigate = useNavigate();
  const goSection = () => navigate('/russian');

  return (
    <Routes>
      <Route index element={<RussianLanding />} />
      <Route path="flashcards" element={<FlashCards quizId="russian-vocabulary" onHome={goSection} />} />
      <Route path="grammar" element={<RussianGrammarCases onHome={goSection} />} />
      <Route path="kletka" element={<KletkaLesson onHome={goSection} />} />
      <Route path="toska" element={<ToskaLesson onHome={goSection} />} />
      <Route path="volny" element={<VolnyLesson onHome={goSection} />} />
      <Route path="zimnyaya" element={<ZimnyayaLesson onHome={goSection} />} />
      <Route path="adjectives" element={<RussianAdjectiveCardsPage onHome={goSection} />} />
    </Routes>
  );
};

export default RussianSection;
