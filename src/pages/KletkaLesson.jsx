import React from 'react';
import SongLesson from './SongLesson';
import { KLETKA_VOCAB, KLETKA_LYRICS } from '../utils/kletkaVocabulary';

const KletkaLesson = ({ onHome }) => (
  <SongLesson
    title="Клетка"
    meta="Molchat Doma — s/t (2018)"
    vocab={KLETKA_VOCAB}
    lyrics={KLETKA_LYRICS}
    storageKey="itiapp-kletka-known"
    appleMusic="https://music.apple.com/search?term=Molchat+Doma+Kletka"
    onHome={onHome}
  />
);

export default KletkaLesson;
