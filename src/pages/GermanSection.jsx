import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FlashCards from './FlashCards';
import GermanyMap from './GermanyMap';
import GermanSpeakingGame from './GermanSpeakingGame';
import WoBistDuLesson from './WoBistDuLesson';
import AlterMannLesson from './AlterMannLesson';
import AmourLesson from './AmourLesson';
import StirNichtLesson from './StirNichtLesson';
import EngelLesson from './EngelLesson';
import RosenrotLesson from './RosenrotLesson';
import MannGegenMannLesson from './MannGegenMannLesson';
import FeuerUndWasserLesson from './FeuerUndWasserLesson';
import WFragenLesson from './WFragenLesson';
import GermanCompoundWords from './GermanCompoundWords';
import GermanVerbsPage from './GermanVerbsPage';
import GermanNumbersPage from './GermanNumbersPage';
import SpielMitMirLesson from './SpielMitMirLesson';
import TattooLesson from './TattooLesson';
import KeineLustLesson from './KeineLustLesson';
import PuppeLesson from './PuppeLesson';
import GermanSongsLanding from './GermanSongsLanding';
import SeemannLesson from './SeemannLesson';
import GermanLanding from './GermanLanding';

const GermanSection = () => {
  const navigate = useNavigate();
  const goSection = () => navigate('/german');
  const goSongs = () => navigate('/german/songs');

  return (
    <Routes>
      <Route index element={<GermanLanding />} />
      <Route path="flashcards" element={<FlashCards quizId="german-vocabulary" onHome={goSection} />} />
      <Route path="map" element={<GermanyMap onHome={goSection} />} />
      <Route path="speaking" element={<GermanSpeakingGame onHome={goSection} />} />
      <Route path="wo-bist-du" element={<WoBistDuLesson onHome={goSongs} />} />
      <Route path="amour" element={<AmourLesson onHome={goSongs} />} />
      <Route path="stirb-nicht" element={<StirNichtLesson onHome={goSongs} />} />
      <Route path="engel" element={<EngelLesson onHome={goSongs} />} />
      <Route path="rosenrot" element={<RosenrotLesson onHome={goSongs} />} />
      <Route path="mann-gegen-mann" element={<MannGegenMannLesson onHome={goSongs} />} />
      <Route path="feuer-und-wasser" element={<FeuerUndWasserLesson onHome={goSongs} />} />
      <Route path="w-fragen" element={<WFragenLesson onHome={goSection} />} />
      <Route path="compound-words" element={<GermanCompoundWords onHome={goSection} />} />
      <Route path="verben"   element={<GermanVerbsPage    onHome={goSection} />} />
      <Route path="numbers" element={<GermanNumbersPage  onHome={goSection} />} />
      <Route path="spiel-mit-mir" element={<SpielMitMirLesson onHome={goSongs} />} />
      <Route path="alter-mann" element={<AlterMannLesson onHome={goSongs} />} />
      <Route path="seemann" element={<SeemannLesson onHome={goSongs} />} />
      <Route path="tattoo" element={<TattooLesson onHome={goSongs} />} />
      <Route path="keine-lust" element={<KeineLustLesson onHome={goSongs} />} />
      <Route path="puppe" element={<PuppeLesson onHome={goSongs} />} />
      <Route path="songs" element={<GermanSongsLanding onHome={goSection} />} />
    </Routes>
  );
};

export default GermanSection;
