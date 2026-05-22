import React from 'react';
import SongLesson from './SongLesson';
import { TOSKA_VOCAB, TOSKA_LYRICS } from '../utils/toskaVocabulary';

const ToskaLesson = ({ onHome }) => (
  <SongLesson
    title="Тоска"
    meta="Molchat Doma"
    vocab={TOSKA_VOCAB}
    lyrics={TOSKA_LYRICS}
    storageKey="itiapp-toska-known"
    appleMusic="https://music.youtube.com/search?q=Molchat+Doma+Toska"
    onHome={onHome}
  />
);

export default ToskaLesson;
