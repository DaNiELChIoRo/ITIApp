// Vocabulary and lyrics for "Stirb nicht vor mir (Don't Die Before Me)"
// Rammstein feat. Sharleen Spiteri — Rosenrot (2005)
// Bilingual German/English duet: Till Lindemann (DE) + Sharleen Spiteri (EN)
// English lyrics stored in line.es and displayed with 🇬🇧 flag via altFlag prop.

export const STIRB_NICHT_VOCAB = [
  // Title words
  { id: 1,  word: "stirb",     ipa: "[ʃtɪʁp]",          en: "die! (imperative)",       es: "¡muere! (imperativo)",    type: "verb" },
  { id: 2,  word: "sterben",   ipa: "[ˈʃtɛʁbən]",        en: "to die",                  es: "morir",                   type: "verb" },
  { id: 3,  word: "nicht",     ipa: "[nɪçt]",            en: "not",                     es: "no",                      type: "adverb" },
  { id: 4,  word: "vor",       ipa: "[foːɐ̯]",            en: "before / in front of",    es: "antes de / delante de",   type: "adverb" },
  { id: 5,  word: "mir",       ipa: "[miːɐ̯]",            en: "me (dative)",             es: "me / a mí",               type: "pronoun" },
  // Pronouns and to-be verbs
  { id: 6,  word: "du",        ipa: "[duː]",             en: "you (informal)",          es: "tú",                      type: "pronoun" },
  { id: 7,  word: "ich",       ipa: "[ɪç]",              en: "I",                       es: "yo",                      type: "pronoun" },
  { id: 8,  word: "bist",      ipa: "[bɪst]",            en: "are (you are)",           es: "eres / estás",            type: "verb" },
  { id: 9,  word: "bin",       ipa: "[bɪn]",             en: "am (I am)",               es: "soy / estoy",             type: "verb" },
  // Nature / element nouns from the chorus
  { id: 10, word: "Luft",      ipa: "[lʊft]",            en: "air",                     es: "aire",                    type: "noun" },
  { id: 11, word: "atmen",     ipa: "[ˈaːtmən]",         en: "to breathe",              es: "respirar",                type: "verb" },
  { id: 12, word: "Feuer",     ipa: "[ˈfɔʏɐ]",           en: "fire",                    es: "fuego",                   type: "noun" },
  { id: 13, word: "Rauch",     ipa: "[ʁaʊx]",            en: "smoke",                   es: "humo",                    type: "noun" },
  { id: 14, word: "Wasser",    ipa: "[ˈvasɐ]",           en: "water",                   es: "agua",                    type: "noun" },
  { id: 15, word: "Boot",      ipa: "[boːt]",            en: "boat",                    es: "barca / bote",            type: "noun" },
  { id: 16, word: "Kälte",     ipa: "[ˈkɛltə]",          en: "cold (noun) / coldness",  es: "frío / frialdad",         type: "noun" },
  { id: 17, word: "Nacht",     ipa: "[naxt]",            en: "night",                   es: "noche",                   type: "noun" },
  { id: 18, word: "Licht",     ipa: "[lɪçt]",            en: "light",                   es: "luz",                     type: "noun" },
  { id: 19, word: "Dunkel",    ipa: "[ˈdʊŋkəl]",         en: "darkness",                es: "oscuridad",               type: "noun" },
  // Emotional / abstract nouns
  { id: 20, word: "Herz",      ipa: "[hɛʁts]",           en: "heart",                   es: "corazón",                 type: "noun" },
  { id: 21, word: "Leben",     ipa: "[ˈleːbən]",         en: "life",                    es: "vida",                    type: "noun" },
  { id: 22, word: "Tod",       ipa: "[toːt]",            en: "death",                   es: "muerte",                  type: "noun" },
  { id: 23, word: "Seele",     ipa: "[ˈzeːlə]",          en: "soul",                    es: "alma",                    type: "noun" },
  { id: 24, word: "Atem",      ipa: "[ˈaːtəm]",          en: "breath",                  es: "aliento / respiración",   type: "noun" },
  // Adjectives / adverbs
  { id: 25, word: "allein",    ipa: "[aˈlaɪn]",          en: "alone",                   es: "solo/a",                  type: "adjective" },
  { id: 26, word: "warm",      ipa: "[vaʁm]",            en: "warm",                    es: "cálido/a",                type: "adjective" },
  { id: 27, word: "kalt",      ipa: "[kalt]",            en: "cold",                    es: "frío/a",                  type: "adjective" },
  // Verbs
  { id: 28, word: "schlafen",  ipa: "[ˈʃlaːfən]",        en: "to sleep",                es: "dormir",                  type: "verb" },
  { id: 29, word: "halten",    ipa: "[ˈhaltən]",         en: "to hold / to keep",       es: "sostener / mantener",     type: "verb" },
  { id: 30, word: "brauchen",  ipa: "[ˈbʁaʊxən]",        en: "to need",                 es: "necesitar",               type: "verb" },
];

export const STIRB_NICHT_LYRICS = [
  {
    label: { en: "Verse 1 — Sharleen", es: "Estrofa 1 — Sharleen" },
    lines: [
      { es: "When the light goes out" },
      { es: "And darkness fills the room" },
      { es: "I reach out for your hand" },
      { es: "I know you'll be here soon" },
    ]
  },
  {
    label: { en: "Chorus — Till", es: "Coro — Till" },
    lines: [
      { de: "Du bist die Luft die ich zum Atmen brauch",   en: "You are the air I need to breathe" },
      { de: "Du bist das Feuer und ich bin der Rauch",     en: "You are the fire and I am the smoke" },
      { de: "Du bist das Wasser und ich bin das Boot",     en: "You are the water and I am the boat" },
      { de: "Stirb nicht vor mir",                         en: "Don't die before me" },
      { de: "Stirb nicht vor mir",                         en: "Don't die before me" },
    ]
  },
  {
    label: { en: "Verse 2 — Sharleen", es: "Estrofa 2 — Sharleen" },
    lines: [
      { es: "When everything seems lost" },
      { es: "And I've nowhere left to turn" },
      { es: "I feel your warmth beside me" },
      { es: "A fire that still burns" },
    ]
  },
  {
    label: { en: "Chorus — Till", es: "Coro — Till" },
    lines: [
      { de: "Du bist die Luft die ich zum Atmen brauch",   en: "You are the air I need to breathe" },
      { de: "Du bist das Feuer und ich bin der Rauch",     en: "You are the fire and I am the smoke" },
      { de: "Du bist das Wasser und ich bin das Boot",     en: "You are the water and I am the boat" },
      { de: "Stirb nicht vor mir",                         en: "Don't die before me" },
      { de: "Stirb nicht vor mir",                         en: "Don't die before me" },
    ]
  },
  {
    label: { en: "Bridge — Both", es: "Puente — Ambos" },
    lines: [
      { es: "Don't die before me",   de: "Stirb nicht vor mir",  en: "Don't die before me" },
      { es: "Don't die before me",   de: "Stirb nicht vor mir",  en: "Don't die before me" },
      { es: "Don't die before me",   de: "Stirb nicht vor mir",  en: "Don't die before me" },
    ]
  },
  {
    label: { en: "Outro — Till", es: "Outro — Till" },
    lines: [
      { de: "Du bist die Kälte in der Sommernacht",        en: "You are the cold in the summer night" },
      { de: "Du bist das Dunkel wenn das Licht erwacht",   en: "You are the darkness when the light awakens" },
      { de: "Du bist mein Herz und meine Seele auch",      en: "You are my heart and my soul too" },
      { de: "Stirb nicht vor mir",                         en: "Don't die before me" },
      { de: "Stirb nicht vor mir",                         en: "Don't die before me" },
    ]
  },
];
