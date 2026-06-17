import React from 'react';
import SongLesson from './SongLesson';
import { ZIMNYAYA_VOCAB, ZIMNYAYA_LYRICS } from '../utils/zimnyayaVocabulary';

const ZimnyayaLesson = ({ onHome }) => (
  <SongLesson
    title="Зимняя"
    meta="Molchat Doma — Belaya Polosa (2023)"
    vocab={ZIMNYAYA_VOCAB}
    lyrics={ZIMNYAYA_LYRICS}
    storageKey="itiapp-zimnyaya-known"
    appleMusic="https://music.apple.com/search?term=Molchat+Doma+Zimnyaya"
    onHome={onHome}
  />
);

export default ZimnyayaLesson;
