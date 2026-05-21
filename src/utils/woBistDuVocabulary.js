// Vocabulary and lyrics for "Wo bist du?" — Rammstein, Rosenrot (2005)
// Bilingual Spanish/German song — words taken directly from the song lyrics.

export const WO_BIST_DU_VOCAB = [
  // Core question words (song title)
  { id: 1,  word: "wo",          ipa: "[voː]",             en: "where",                 es: "dónde",                  type: "question" },
  { id: 2,  word: "bist",        ipa: "[bɪst]",            en: "are (you are)",         es: "eres / estás",           type: "verb" },
  { id: 3,  word: "du",          ipa: "[duː]",             en: "you (informal)",        es: "tú",                     type: "pronoun" },
  { id: 4,  word: "ich",         ipa: "[ɪç]",              en: "I",                     es: "yo",                     type: "pronoun" },
  // Key verbs from song
  { id: 5,  word: "lieben",      ipa: "[ˈliːbən]",         en: "to love",               es: "amar",                   type: "verb" },
  { id: 6,  word: "suchen",      ipa: "[ˈzuːxən]",         en: "to search / look for",  es: "buscar",                 type: "verb" },
  { id: 7,  word: "sein",        ipa: "[zaɪn]",            en: "to be",                 es: "ser / estar",            type: "verb" },
  { id: 8,  word: "bleiben",     ipa: "[ˈblaɪbən]",        en: "to stay / remain",      es: "quedarse / permanecer",  type: "verb" },
  { id: 9,  word: "stehen",      ipa: "[ˈʃteːən]",         en: "to stand / stop",       es: "pararse / detenerse",    type: "verb" },
  { id: 10, word: "einschlafen", ipa: "[ˈaɪnˌʃlaːfən]",   en: "to fall asleep",        es: "dormirse",               type: "verb" },
  // Adjectives from song
  { id: 11, word: "schön",       ipa: "[ʃøːn]",            en: "beautiful / nice",      es: "hermoso/a",              type: "adjective" },
  { id: 12, word: "warm",        ipa: "[vaʁm]",            en: "warm",                  es: "cálido/a",               type: "adjective" },
  { id: 13, word: "kalt",        ipa: "[kalt]",            en: "cold",                  es: "frío/a",                 type: "adjective" },
  { id: 14, word: "gesund",      ipa: "[ɡəˈzʊnt]",         en: "healthy",               es: "saludable / sano/a",     type: "adjective" },
  { id: 15, word: "allein",      ipa: "[aˈlaɪn]",          en: "alone",                 es: "solo/a",                 type: "adjective" },
  // Nouns from song
  { id: 16, word: "Mädchen",     ipa: "[ˈmɛːtçən]",        en: "girl",                  es: "chica / muchacha",       type: "noun" },
  { id: 17, word: "Hände",       ipa: "[ˈhɛndə]",          en: "hands",                 es: "manos",                  type: "noun" },
  { id: 18, word: "Uhren",       ipa: "[ˈuːʁən]",          en: "clocks / watches",      es: "relojes",                type: "noun" },
  { id: 19, word: "Lachen",      ipa: "[ˈlaxən]",          en: "laughter / laughing",   es: "risa / reír",            type: "noun" },
  { id: 20, word: "Licht",       ipa: "[lɪçt]",            en: "light",                 es: "luz",                    type: "noun" },
  { id: 21, word: "Stein",       ipa: "[ʃtaɪn]",           en: "stone",                 es: "piedra",                 type: "noun" },
  { id: 22, word: "Messer",      ipa: "[ˈmɛsɐ]",           en: "knife",                 es: "cuchillo",               type: "noun" },
  // Function words / adverbs from song
  { id: 23, word: "nicht",       ipa: "[nɪçt]",            en: "not",                   es: "no",                     type: "adverb" },
  { id: 24, word: "mehr",        ipa: "[meːɐ̯]",            en: "more / anymore",        es: "más / ya no",            type: "adverb" },
  { id: 25, word: "noch",        ipa: "[nɔx]",             en: "still / yet",           es: "todavía / aún",          type: "adverb" },
  { id: 26, word: "bald",        ipa: "[balt]",            en: "soon",                  es: "pronto",                 type: "adverb" },
  { id: 27, word: "hinter",      ipa: "[ˈhɪntɐ]",          en: "behind",                es: "detrás de",              type: "adverb" },
  { id: 28, word: "oder",        ipa: "[ˈoːdɐ]",           en: "or",                    es: "o",                      type: "adverb" },
  { id: 29, word: "weniger",     ipa: "[ˈveːnɪɡɐ]",        en: "less",                  es: "menos",                  type: "adverb" },
  { id: 30, word: "als",         ipa: "[als]",             en: "as / than / when",      es: "como / que / cuando",    type: "adverb" },
];

// Type labels for display
export const VOCAB_TYPE_LABELS = {
  en: { question: "Question word", verb: "Verb", pronoun: "Pronoun", adjective: "Adjective", adverb: "Adverb", noun: "Noun", french: "French word" },
  es: { question: "Palabra interrogativa", verb: "Verbo", pronoun: "Pronombre", adjective: "Adjetivo", adverb: "Adverbio", noun: "Sustantivo", french: "Palabra francesa" }
};

// Song lyrics — Rammstein, "Wo bist du?", Rosenrot (2005)
// Bilingual: each line has es (Spanish original) + de (German original) + en (English translation)
export const WO_BIST_DU_LYRICS = [
  {
    label: { en: "Intro", es: "Intro" },
    lines: [
      { es: "Te amo",                        de: "Ich liebe dich",             en: "I love you" },
      { es: "ya no te quiero",               de: "Ich liebe dich nicht",       en: "I don't love you" },
      { es: "ya no te amo",                  de: "Ich liebe dich nicht mehr",  en: "I don't love you anymore" },
      { es: "ya no te amo",                  de: "Ich liebe dich nicht mehr",  en: "I don't love you anymore" },
    ]
  },
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { es: "ya no te amo",                  de: "Ich liebe dich nicht mehr",       en: "I don't love you anymore" },
      { es: "O menos que tú",                de: "Oder weniger als du",             en: "Or less than you" },
      { es: "cuando me amabas",              de: "Als du mich geliebt hast",        en: "When you loved me" },
      { es: "Cuando todavía me amabas",      de: "Als du mich noch geliebt hast",   en: "When you still loved me" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { es: "Las chicas hermosas no son hermosas",   de: "Die schönen Mädchen sind nicht schön",   en: "The beautiful girls are not beautiful" },
      { es: "Las manos cálidas son tan frías",       de: "Die warmen Hände sind so kalt",          en: "The warm hands are so cold" },
      { es: "Todos los relojes se detienen",         de: "Alle Uhren bleiben steh'n",              en: "All the clocks stand still" },
      { es: "La risa ya no es saludable y pronto",   de: "Lachen ist nicht mehr gesund und bald",  en: "Laughter is no longer healthy, and soon" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { es: "Te estoy buscando detrás de la luz",    de: "Such ich dich hinter dem Licht",    en: "I'm searching for you behind the light" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
      { es: "no quiero estar solo así",              de: "So allein will ich nicht sein",     en: "I don't want to be so alone" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
    ]
  },
  {
    label: { en: "Verse 2 (repeat)", es: "Estrofa 2 (rep.)" },
    lines: [
      { es: "Las chicas hermosas no son hermosas",   de: "Die schönen Mädchen sind nicht schön",   en: "The beautiful girls are not beautiful" },
      { es: "Las manos cálidas son tan frías",       de: "Die warmen Hände sind so kalt",          en: "The warm hands are so cold" },
      { es: "Todos los relojes se detienen",         de: "Alle Uhren bleiben steh'n",              en: "All the clocks stand still" },
      { es: "La risa ya no es saludable y pronto",   de: "Lachen ist nicht mehr gesund und bald",  en: "Laughter is no longer healthy, and soon" },
    ]
  },
  {
    label: { en: "Chorus 2", es: "Coro 2" },
    lines: [
      { es: "Te estoy buscando detrás de la luz",    de: "Ich suche dich hinter dem Licht",   en: "I'm searching for you behind the light" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
      { es: "no quiero estar solo así",              de: "So allein will ich nicht sein",     en: "I don't want to be so alone" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
    ]
  },
  {
    label: { en: "Bridge / Outro", es: "Puente / Outro" },
    lines: [
      { es: "Te busco debajo de cada piedra",        de: "Ich such dich unter jedem Stein",   en: "I search for you under every stone" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
      { es: "me quedo dormido con un cuchillo",      de: "Ich schlaf mit einem Messer ein",   en: "I fall asleep with a knife" },
      { es: "¿Dónde estás? ¿Dónde estás?",           de: "Wo bist du? Wo bist du?",           en: "Where are you? Where are you?" },
    ]
  },
];
