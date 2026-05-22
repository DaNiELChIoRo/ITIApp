import React from 'react';
import SongLesson from './SongLesson';
import { VOLNY_VOCAB, VOLNY_LYRICS } from '../utils/volnyVocabulary';

const VolnyLesson = ({ onHome }) => (
  <SongLesson
    title="Волны"
    meta="Molchat Doma"
    vocab={VOLNY_VOCAB}
    lyrics={VOLNY_LYRICS}
    storageKey="itiapp-volny-known"
    appleMusic="https://music.youtube.com/search?q=Molchat+Doma+Volny"
    onHome={onHome}
  />
);

export default VolnyLesson;
