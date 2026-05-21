// Vocabulary and lyrics for "Kletka" — Molchat Doma (2018)
// Russian song — vocabulary taken from the lyrics.

export const KLETKA_VOCAB = [
  // Nouns
  { id: 1,  word: "клетка",      ipa: "[ˈklʲetkə]",        en: "cage / stairwell",           es: "jaula / escalera",           type: "noun" },
  { id: 2,  word: "улица",       ipa: "[ˈulʲɪt͡sə]",        en: "street",                     es: "calle",                      type: "noun" },
  { id: 3,  word: "дом",         ipa: "[dom]",               en: "house / building",           es: "casa / edificio",            type: "noun" },
  { id: 4,  word: "этаж",        ipa: "[ɪˈtaʂ]",            en: "floor / story",              es: "piso / planta",              type: "noun" },
  { id: 5,  word: "звонок",      ipa: "[zvɐˈnok]",           en: "bell / doorbell",            es: "timbre / campana",           type: "noun" },
  { id: 6,  word: "дверь",       ipa: "[dvʲerʲ]",            en: "door",                       es: "puerta",                     type: "noun" },
  { id: 7,  word: "дурак",       ipa: "[dʊˈrak]",            en: "fool",                       es: "tonto / necio",              type: "noun" },
  { id: 8,  word: "лестница",    ipa: "[ˈlʲesʲnʲɪt͡sə]",    en: "staircase",                  es: "escalera",                   type: "noun" },
  { id: 9,  word: "записка",     ipa: "[zɐˈpʲiskə]",         en: "note / message",             es: "nota / mensaje",             type: "noun" },
  { id: 10, word: "стенка",      ipa: "[ˈsʲtʲenkə]",         en: "wall",                       es: "pared / muro",               type: "noun" },
  { id: 11, word: "ожог",        ipa: "[ɐˈʐok]",             en: "burn / scorch mark",         es: "quemadura",                  type: "noun" },
  { id: 12, word: "побелка",     ipa: "[pɐˈbʲelkə]",         en: "whitewash",                  es: "encalado / blanqueado",      type: "noun" },
  { id: 13, word: "привет",      ipa: "[prʲɪˈvʲet]",         en: "hello / hi",                 es: "hola",                       type: "noun" },
  // Verbs
  { id: 14, word: "войти",       ipa: "[vɐjˈtʲi]",           en: "to enter",                   es: "entrar",                     type: "verb" },
  { id: 15, word: "подняться",   ipa: "[pɐdˈnʲat͡sə]",       en: "to go up / climb",           es: "subir",                      type: "verb" },
  { id: 16, word: "позвонить",   ipa: "[pəzvɐˈnʲitʲ]",       en: "to ring / call",             es: "llamar / tocar el timbre",   type: "verb" },
  { id: 17, word: "постучать",   ipa: "[pəstʊˈt͡ɕatʲ]",      en: "to knock",                   es: "golpear / tocar la puerta",  type: "verb" },
  { id: 18, word: "открыть",     ipa: "[ɐtˈkrɨtʲ]",          en: "to open",                    es: "abrir",                      type: "verb" },
  { id: 19, word: "бежать",      ipa: "[bʲɪˈʐatʲ]",          en: "to run",                     es: "correr",                     type: "verb" },
  { id: 20, word: "убежать",     ipa: "[ʊbʲɪˈʐatʲ]",         en: "to run away / flee",         es: "huir / escapar",             type: "verb" },
  { id: 21, word: "позабыть",    ipa: "[pəzɐˈbɨtʲ]",         en: "to forget",                  es: "olvidar",                    type: "verb" },
  { id: 22, word: "ждать",       ipa: "[ʐdatʲ]",             en: "to wait",                    es: "esperar",                    type: "verb" },
  { id: 23, word: "сказать",     ipa: "[skɐˈzatʲ]",          en: "to say",                     es: "decir",                      type: "verb" },
  // Adjectives / adverbs / particles
  { id: 24, word: "восьмой",     ipa: "[vɐsʲˈmoj]",          en: "eighth",                     es: "octavo",                     type: "adjective" },
  { id: 25, word: "навсегда",    ipa: "[nɐfsʲɪˈɡda]",        en: "forever",                    es: "para siempre",               type: "adverb" },
  { id: 26, word: "непонятный",  ipa: "[nʲɪpɐˈnʲatnɨj]",    en: "incomprehensible",           es: "incomprensible",             type: "adjective" },
  { id: 27, word: "позабытый",   ipa: "[pəzɐˈbɨtɨj]",        en: "forgotten",                  es: "olvidado",                   type: "adjective" },
  { id: 28, word: "вниз",        ipa: "[vnʲis]",              en: "down / downward",            es: "abajo / hacia abajo",        type: "adverb" },
  { id: 29, word: "сквозь",      ipa: "[skvosʲ]",             en: "through",                    es: "a través de",                type: "adverb" },
  { id: 30, word: "никто",       ipa: "[nʲɪkˈto]",            en: "nobody / no one",            es: "nadie",                      type: "pronoun" },
];

// Song lyrics — Molchat Doma, "Kletka" (2018)
// Russian originals with English translations.
// line.de = Russian text (primary), line.en = English translation
export const KLETKA_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "И вот, эта улица",                              en: "And so, this street" },
      { de: "Войди в этот дом",                              en: "Enter this house" },
      { de: "Поднимись на восьмой этаж",                     en: "Go up to the eighth floor" },
      { de: "Позвони в звонок",                              en: "Ring the doorbell" },
      { de: "Постучи в эту дверь",                           en: "Knock on this door" },
      { de: "И тебе никто не откроет",                       en: "And no one will open it for you" },
      { de: "Беги, дурак",                                   en: "Run, fool" },
      { de: "Беги, дурак",                                   en: "Run, fool" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Вниз по лестничной клетке, сквозь записки на стенках",  en: "Down the stairwell, through notes on the walls" },
      { de: "Позабытые навсегда",                                      en: "Forgotten forever" },
      { de: "Вниз по лестничной клетке, как ожоги на побелке",        en: "Down the stairwell, like burns on the whitewash" },
      { de: "Непонятны как и я",                                       en: "Incomprehensible, just like me" },
      { de: "Вниз по лестничной клетке",                               en: "Down the stairwell" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "И где та улица?",                               en: "And where is that street?" },
      { de: "И где тот дом?",                                en: "And where is that house?" },
      { de: "На каком этаже ждут нас?",                      en: "On which floor do they wait for us?" },
      { de: "Где откроют без звонка",                        en: "Where they'll open without ringing" },
      { de: "Где без стука войду",                           en: "Where I'll enter without knocking" },
      { de: "Там, где скажут привет и я не убегу",           en: "Where they'll say hello and I won't run away" },
      { de: "Не убегу",                                      en: "I won't run away" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Вниз по лестничной клетке, сквозь записки на стенках",  en: "Down the stairwell, through notes on the walls" },
      { de: "Позабытые навсегда",                                      en: "Forgotten forever" },
      { de: "Вниз по лестничной клетке, как ожоги на побелке",        en: "Down the stairwell, like burns on the whitewash" },
      { de: "Непонятны как и я",                                       en: "Incomprehensible, just like me" },
    ]
  },
  {
    label: { en: "Outro", es: "Outro" },
    lines: [
      { de: "Вниз по лестничной клетке", en: "Down the stairwell" },
      { de: "Вниз по лестничной клетке", en: "Down the stairwell" },
      { de: "Вниз по лестничной клетке", en: "Down the stairwell" },
      { de: "Вниз по лестничной клетке", en: "Down the stairwell" },
      { de: "Вниз по лестничной клетке", en: "Down the stairwell" },
      { de: "Вниз по лестничной клетке", en: "Down the stairwell" },
      { de: "Вниз по лестничной клетке", en: "Down the stairwell" },
    ]
  },
];
