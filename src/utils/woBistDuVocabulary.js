// Vocabulary and lyrics for "Wo bist du?" — Rammstein, Rosenrot (2005)

export const WO_BIST_DU_VOCAB = [
  { id: 1,  word: "wo",         ipa: "[voː]",           en: "where",            es: "dónde",              type: "question" },
  { id: 2,  word: "bist",       ipa: "[bɪst]",          en: "are (you)",        es: "eres / estás",       type: "verb" },
  { id: 3,  word: "du",         ipa: "[duː]",           en: "you (informal)",   es: "tú",                 type: "pronoun" },
  { id: 4,  word: "ich",        ipa: "[ɪç]",            en: "I",                es: "yo",                 type: "pronoun" },
  { id: 5,  word: "bin",        ipa: "[bɪn]",           en: "am (I am)",        es: "soy / estoy",        type: "verb" },
  { id: 6,  word: "suchen",     ipa: "[ˈzuːxən]",      en: "to search / look for", es: "buscar",         type: "verb" },
  { id: 7,  word: "warten",     ipa: "[ˈvaʁtən]",      en: "to wait",          es: "esperar",            type: "verb" },
  { id: 8,  word: "rufen",      ipa: "[ˈʁuːfən]",      en: "to call out / shout", es: "llamar / gritar", type: "verb" },
  { id: 9,  word: "hören",      ipa: "[ˈhøːʁən]",      en: "to hear",          es: "escuchar / oír",     type: "verb" },
  { id: 10, word: "sehen",      ipa: "[ˈzeːən]",        en: "to see",           es: "ver",                type: "verb" },
  { id: 11, word: "gehen",      ipa: "[ˈɡeːən]",        en: "to go",            es: "ir",                 type: "verb" },
  { id: 12, word: "kommen",     ipa: "[ˈkɔmən]",        en: "to come",          es: "venir",              type: "verb" },
  { id: 13, word: "bleiben",    ipa: "[ˈblaɪbən]",      en: "to stay / remain", es: "quedarse",           type: "verb" },
  { id: 14, word: "verlieren",  ipa: "[fɛɐ̯ˈliːʁən]",  en: "to lose",          es: "perder",             type: "verb" },
  { id: 15, word: "vermissen",  ipa: "[fɛɐ̯ˈmɪsən]",   en: "to miss (someone)", es: "extrañar",          type: "verb" },
  { id: 16, word: "allein",     ipa: "[aˈlaɪn]",        en: "alone",            es: "solo/a",             type: "adjective" },
  { id: 17, word: "verloren",   ipa: "[fɛɐ̯ˈloːʁən]",  en: "lost",             es: "perdido/a",          type: "adjective" },
  { id: 18, word: "einsam",     ipa: "[ˈaɪnzaːm]",     en: "lonely",           es: "solitario/a",        type: "adjective" },
  { id: 19, word: "still",      ipa: "[ʃtɪl]",          en: "silent / still",   es: "silencioso / quieto", type: "adjective" },
  { id: 20, word: "hier",       ipa: "[hiːɐ̯]",          en: "here",             es: "aquí",               type: "adverb" },
  { id: 21, word: "dort",       ipa: "[dɔʁt]",          en: "there",            es: "allí",               type: "adverb" },
  { id: 22, word: "überall",    ipa: "[ˈyːbɐˌʔal]",    en: "everywhere",       es: "en todas partes",    type: "adverb" },
  { id: 23, word: "Nacht",      ipa: "[naxt]",          en: "night",            es: "noche",              type: "noun" },
  { id: 24, word: "Dunkel",     ipa: "[ˈdʊŋkəl]",      en: "darkness",         es: "oscuridad",          type: "noun" },
  { id: 25, word: "Stille",     ipa: "[ˈʃtɪlə]",       en: "silence / stillness", es: "silencio",        type: "noun" },
  { id: 26, word: "Schatten",   ipa: "[ˈʃatən]",        en: "shadow",           es: "sombra",             type: "noun" },
  { id: 27, word: "Licht",      ipa: "[lɪçt]",          en: "light",            es: "luz",                type: "noun" },
  { id: 28, word: "Himmel",     ipa: "[ˈhɪməl]",        en: "sky / heaven",     es: "cielo",              type: "noun" },
  { id: 29, word: "Erde",       ipa: "[ˈeːʁdə]",        en: "earth / ground",   es: "tierra / suelo",     type: "noun" },
  { id: 30, word: "Herz",       ipa: "[hɛʁts]",         en: "heart",            es: "corazón",            type: "noun" },
];

// Type labels for display
export const VOCAB_TYPE_LABELS = {
  en: { question: "Question word", verb: "Verb", pronoun: "Pronoun", adjective: "Adjective", adverb: "Adverb", noun: "Noun", french: "French word" },
  es: { question: "Palabra interrogativa", verb: "Verbo", pronoun: "Pronombre", adjective: "Adjetivo", adverb: "Adverbio", noun: "Sustantivo", french: "Palabra francesa" }
};

// Song lyrics — Rammstein, "Wo bist du?", Rosenrot (2005)
// Verify against the official release before publishing.
export const WO_BIST_DU_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "Ich geh durch die leeren Straßen",    en: "I walk through the empty streets" },
      { de: "Die Nacht legt sich über die Stadt",   en: "The night settles over the city" },
      { de: "Kein Mensch ist mehr zu sehen",        en: "Not a soul left to be seen" },
      { de: "Wo bist du, wenn man dich braucht?",   en: "Where are you when you're needed?" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Wo bist du?",        en: "Where are you?" },
      { de: "Wo bist du?",        en: "Where are you?" },
      { de: "Ich suche dich überall", en: "I search for you everywhere" },
      { de: "Wo bist du?",        en: "Where are you?" },
      { de: "Wo bist du?",        en: "Where are you?" },
      { de: "Ich höre deinen Ruf", en: "I hear your call" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "Ich warte hier im Dunkel",             en: "I wait here in the darkness" },
      { de: "Die Stille drückt auf mein Herz",      en: "The silence weighs on my heart" },
      { de: "Dein Schatten liegt auf der Erde",     en: "Your shadow lies on the ground" },
      { de: "Und hüllt mich ein wie ein Schmerz",   en: "And wraps around me like a pain" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Wo bist du?",            en: "Where are you?" },
      { de: "Wo bist du?",            en: "Where are you?" },
      { de: "Ich suche dich überall", en: "I search for you everywhere" },
      { de: "Wo bist du?",            en: "Where are you?" },
      { de: "Wo bist du?",            en: "Where are you?" },
      { de: "Ich rufe deinen Namen",  en: "I call out your name" },
    ]
  },
  {
    label: { en: "Bridge", es: "Puente" },
    lines: [
      { de: "Der Himmel ist leer",      en: "The sky is empty" },
      { de: "Die Erde ist kalt",         en: "The earth is cold" },
      { de: "Ich bin allein",            en: "I am alone" },
      { de: "Hier in der Nacht",         en: "Here in the night" },
    ]
  },
  {
    label: { en: "Outro", es: "Outro" },
    lines: [
      { de: "Wo bist du?",  en: "Where are you?" },
      { de: "Wo bist du?",  en: "Where are you?" },
      { de: "Wo bist du?",  en: "Where are you?" },
    ]
  }
];
