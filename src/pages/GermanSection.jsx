import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FlashCards from './FlashCards';
import GermanyMap from './GermanyMap';
import GermanSpeakingGame from './GermanSpeakingGame';
import WoBistDuLesson from './WoBistDuLesson';
import AmourLesson from './AmourLesson';
import StirNichtLesson from './StirNichtLesson';
import EngelLesson from './EngelLesson';
import RosenrotLesson from './RosenrotLesson';
import GermanLanding from './GermanLanding';

const GermanSection = () => {
  const navigate = useNavigate();
  const goSection = () => navigate('/german');

  return (
    <Routes>
      <Route index element={<GermanLanding />} />
      <Route path="flashcards" element={<FlashCards quizId="german-vocabulary" onHome={goSection} />} />
      <Route path="map" element={<GermanyMap onHome={goSection} />} />
      <Route path="speaking" element={<GermanSpeakingGame onHome={goSection} />} />
      <Route path="wo-bist-du" element={<WoBistDuLesson onHome={goSection} />} />
      <Route path="amour" element={<AmourLesson onHome={goSection} />} />
      <Route path="stirb-nicht" element={<StirNichtLesson onHome={goSection} />} />
      <Route path="engel" element={<EngelLesson onHome={goSection} />} />
      <Route path="rosenrot" element={<RosenrotLesson onHome={goSection} />} />
    </Routes>
  );
};

export default GermanSection;
