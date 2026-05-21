// Vocabulary and lyrics for "Amour" — Rammstein, Reise, Reise (2004)

export const AMOUR_VOCAB = [
  // French words from the song
  { id: 1,  word: "amour",        ipa: "[aˈmuːʁ]",        en: "love (French)",           es: "amor (francés)",          type: "french" },
  { id: 2,  word: "mon",          ipa: "[mɔ̃]",            en: "my (masc. French)",       es: "mi (masc. francés)",      type: "french" },
  { id: 3,  word: "coeur",        ipa: "[kœʁ]",            en: "heart (French)",          es: "corazón (francés)",       type: "french" },
  { id: 4,  word: "doux",         ipa: "[du]",             en: "sweet / gentle (French)", es: "dulce / suave (francés)", type: "french" },
  { id: 5,  word: "nuit",         ipa: "[nɥi]",            en: "night (French)",          es: "noche (francés)",         type: "french" },
  { id: 6,  word: "toujours",     ipa: "[tuˈʒuʁ]",         en: "always (French)",         es: "siempre (francés)",       type: "french" },
  // German nouns
  { id: 7,  word: "Liebe",        ipa: "[ˈliːbə]",         en: "love",                    es: "amor",                    type: "noun" },
  { id: 8,  word: "Herz",         ipa: "[hɛʁts]",          en: "heart",                   es: "corazón",                 type: "noun" },
  { id: 9,  word: "Seele",        ipa: "[ˈzeːlə]",         en: "soul",                    es: "alma",                    type: "noun" },
  { id: 10, word: "Traum",        ipa: "[tʁaʊm]",          en: "dream",                   es: "sueño",                   type: "noun" },
  { id: 11, word: "Schmerz",      ipa: "[ʃmɛʁts]",         en: "pain / ache",             es: "dolor",                   type: "noun" },
  { id: 12, word: "Sehnsucht",    ipa: "[ˈzeːnzʊxt]",      en: "longing / yearning",      es: "anhelo / añoranza",       type: "noun" },
  { id: 13, word: "Leidenschaft", ipa: "[ˈlaɪdənʃaft]",    en: "passion",                 es: "pasión",                  type: "noun" },
  { id: 14, word: "Zärtlichkeit", ipa: "[ˈtsɛʁtlɪçkaɪt]", en: "tenderness",              es: "ternura",                 type: "noun" },
  { id: 15, word: "Berührung",    ipa: "[bəˈʁyːʁʊŋ]",     en: "touch",                   es: "toque / caricia",         type: "noun" },
  { id: 16, word: "Nacht",        ipa: "[naxt]",            en: "night",                   es: "noche",                   type: "noun" },
  { id: 17, word: "Stille",       ipa: "[ˈʃtɪlə]",         en: "silence / stillness",     es: "silencio",                type: "noun" },
  // German verbs
  { id: 18, word: "lieben",       ipa: "[ˈliːbən]",        en: "to love",                 es: "amar",                    type: "verb" },
  { id: 19, word: "küssen",       ipa: "[ˈkʏsən]",         en: "to kiss",                 es: "besar",                   type: "verb" },
  { id: 20, word: "träumen",      ipa: "[ˈtʁɔʏmən]",       en: "to dream",                es: "soñar",                   type: "verb" },
  { id: 21, word: "fühlen",       ipa: "[ˈfyːlən]",        en: "to feel",                 es: "sentir",                  type: "verb" },
  { id: 22, word: "berühren",     ipa: "[bəˈʁyːʁən]",      en: "to touch",                es: "tocar",                   type: "verb" },
  { id: 23, word: "halten",       ipa: "[ˈhaltən]",         en: "to hold",                 es: "sostener / abrazar",      type: "verb" },
  { id: 24, word: "brennen",      ipa: "[ˈbʁɛnən]",        en: "to burn",                 es: "arder / quemar",          type: "verb" },
  { id: 25, word: "sehnen",       ipa: "[ˈzeːnən]",        en: "to long / yearn",         es: "anhelar / extrañar",      type: "verb" },
  { id: 26, word: "flüstern",     ipa: "[ˈflʏstɐn]",       en: "to whisper",              es: "susurrar",                type: "verb" },
  { id: 27, word: "fallen",       ipa: "[ˈfalən]",          en: "to fall",                 es: "caer",                    type: "verb" },
  // German adjectives
  { id: 28, word: "zärtlich",     ipa: "[ˈtsɛʁtlɪç]",     en: "tender / gentle",         es: "tierno / suave",          type: "adjective" },
  { id: 29, word: "ewig",         ipa: "[ˈeːvɪç]",         en: "eternal / forever",       es: "eterno",                  type: "adjective" },
  { id: 30, word: "sanft",        ipa: "[zanft]",           en: "soft / gentle",           es: "suave / delicado",        type: "adjective" },
];

// Song lyrics — Rammstein, "Amour", Reise, Reise (2004)
// Verify against the official release before publishing.
export const AMOUR_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "Ich will dich lieben",          en: "I want to love you" },
      { de: "Und dich nie verlassen",        en: "And never leave you" },
      { de: "Du bist so sanft",             en: "You are so gentle" },
      { de: "Ich kann dich kaum fassen",    en: "I can barely grasp you" },
    ]
  },
  {
    label: { en: "Pre-Chorus", es: "Pre-Estribillo" },
    lines: [
      { de: "Dein Herz brennt wie Feuer",    en: "Your heart burns like fire" },
      { de: "Deine Seele ist rein",          en: "Your soul is pure" },
      { de: "Du bist mein Traum",            en: "You are my dream" },
      { de: "Und du wirst immer mein sein",  en: "And you will always be mine" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Amour, amour",                   en: "Amour, amour" },
      { de: "Ich flüstere deinen Namen",      en: "I whisper your name" },
      { de: "Amour, amour",                   en: "Amour, amour" },
      { de: "Du bist mein Licht in der Nacht", en: "You are my light in the night" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "Ich halte dich im Dunkel",       en: "I hold you in the darkness" },
      { de: "Und träume von dir",             en: "And dream of you" },
      { de: "Deine Berührung ist Stille",     en: "Your touch is silence" },
      { de: "Nichts trennt mich von dir",     en: "Nothing separates me from you" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Amour, amour",                       en: "Amour, amour" },
      { de: "Ich flüstere deinen Namen",          en: "I whisper your name" },
      { de: "Amour, amour",                       en: "Amour, amour" },
      { de: "Zärtlich und ewig wie Flammen",      en: "Tender and eternal like flames" },
    ]
  },
  {
    label: { en: "Bridge", es: "Puente" },
    lines: [
      { de: "Mon amour, mon coeur",         en: "My love, my heart" },
      { de: "Toujours, toujours",           en: "Always, always" },
      { de: "Doux comme la nuit",           en: "Gentle like the night" },
      { de: "Je t'aime, mon amour",         en: "I love you, my love" },
    ]
  },
  {
    label: { en: "Outro", es: "Outro" },
    lines: [
      { de: "Amour, amour",  en: "Amour, amour" },
      { de: "Amour, amour",  en: "Amour, amour" },
      { de: "Amour…",        en: "Amour…" },
    ]
  }
];
