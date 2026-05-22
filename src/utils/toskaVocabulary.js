// Vocabulary and lyrics for "Toska" — Molchat Doma
// Russian song — vocabulary taken from the lyrics.

export const TOSKA_VOCAB = [
  // Nouns
  { id: 1,  word: "тоска",         ipa: "[tɐˈska]",          en: "longing / anguish",          es: "añoranza / angustia",        type: "noun" },
  { id: 2,  word: "любовь",        ipa: "[lʲʊˈbofʲ]",        en: "love",                       es: "amor",                       type: "noun" },
  { id: 3,  word: "окно",          ipa: "[ɐkˈno]",            en: "window",                     es: "ventana",                    type: "noun" },
  { id: 4,  word: "ключи",         ipa: "[klʲʊˈt͡ɕi]",        en: "keys",                       es: "llaves",                     type: "noun" },
  { id: 5,  word: "преграда",      ipa: "[prʲɪˈɡradə]",       en: "obstacle / barrier",         es: "obstáculo / barrera",        type: "noun" },
  { id: 6,  word: "пора",          ipa: "[pɐˈra]",            en: "it's time",                  es: "es hora",                    type: "noun" },
  // Verbs
  { id: 7,  word: "знать",         ipa: "[znatʲ]",            en: "to know",                    es: "saber / conocer",            type: "verb" },
  { id: 8,  word: "уходить",       ipa: "[ʊxɐˈdʲitʲ]",       en: "to leave / go away",         es: "irse / marcharse",           type: "verb" },
  { id: 9,  word: "возвращаться",  ipa: "[vəzvrɐˈʂat͡sə]",    en: "to return / come back",      es: "volver / regresar",          type: "verb" },
  { id: 10, word: "найти",         ipa: "[nɐjˈtʲi]",          en: "to find",                    es: "encontrar",                  type: "verb" },
  { id: 11, word: "заниматься",    ipa: "[zənʲɪˈmat͡sə]",     en: "to occupy oneself",          es: "ocuparse / entretenerse",    type: "verb" },
  { id: 12, word: "улетать",       ipa: "[ʊlʲɪˈtatʲ]",        en: "to fly away",                es: "volar / alejarse volando",   type: "verb" },
  { id: 13, word: "убегать",       ipa: "[ʊbʲɪˈɡatʲ]",        en: "to run away",                es: "huir / escapar",             type: "verb" },
  { id: 14, word: "потерять",      ipa: "[pətʲɪˈrʲatʲ]",      en: "to lose",                    es: "perder",                     type: "verb" },
  { id: 15, word: "видеть",        ipa: "[ˈvʲidʲɪtʲ]",        en: "to see",                     es: "ver",                        type: "verb" },
  { id: 16, word: "уйти",          ipa: "[ʊjˈtʲi]",           en: "to leave / go",              es: "irse / partir",              type: "verb" },
  { id: 17, word: "поджидать",     ipa: "[pəd͡ʐɨˈdatʲ]",      en: "to wait / lurk",             es: "acechar / esperar",          type: "verb" },
  { id: 18, word: "отдать",        ipa: "[ɐtˈdatʲ]",          en: "to give back / hand over",   es: "devolver / entregar",        type: "verb" },
  { id: 19, word: "убить",         ipa: "[ʊˈbʲitʲ]",          en: "to kill",                    es: "matar",                      type: "verb" },
  { id: 20, word: "вынуждать",     ipa: "[vɨnʊʐˈdatʲ]",       en: "to force / compel",          es: "obligar / forzar",           type: "verb" },
  // Adjectives / adverbs
  { id: 21, word: "рад",           ipa: "[rat]",               en: "glad / happy",               es: "contento / feliz",           type: "adjective" },
  { id: 22, word: "хорошо",        ipa: "[xərɐˈʂo]",          en: "good / well",                es: "bien / bueno",               type: "adverb" },
  { id: 23, word: "лучше",         ipa: "[ˈlut͡ɕɕɪ]",          en: "better",                     es: "mejor",                      type: "adverb" },
  { id: 24, word: "нужный",        ipa: "[ˈnuʐnɨj]",          en: "needed / necessary",         es: "necesario / requerido",      type: "adjective" },
  { id: 25, word: "вновь",         ipa: "[vnofʲ]",             en: "again / anew",               es: "de nuevo / nuevamente",      type: "adverb" },
  // Pronouns / question words / conjunctions
  { id: 26, word: "себя",          ipa: "[sʲɪˈbʲa]",          en: "oneself / yourself",         es: "uno mismo / sí mismo",       type: "pronoun" },
  { id: 27, word: "сама",          ipa: "[sɐˈma]",             en: "herself / itself",           es: "ella misma",                 type: "pronoun" },
  { id: 28, word: "почему",        ipa: "[pɐt͡ɕɪˈmu]",         en: "why",                        es: "por qué",                    type: "question" },
  { id: 29, word: "когда",         ipa: "[kɐɡˈda]",            en: "when",                       es: "cuando",                     type: "question" },
  { id: 30, word: "хотя",          ipa: "[xɐˈtʲa]",            en: "although / though",          es: "aunque / a pesar de",        type: "adverb" },
];

// line.de = Russian text, line.en = English translation
export const TOSKA_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "Я знаю, тебе нужна моя любовь",    pron: "Ya znayu, tebe nuzhna moya lyubov'",  en: "I know, you need my love" },
      { de: "Уходи и не возвращайся вновь",      pron: "Ukhodi i ne vozvrashchaysya vnov'",   en: "Leave and don't come back again" },
      { de: "Я найду чем себя занять",           pron: "Ya naydu chem sebya zanyat'",         en: "I'll find something to keep myself busy" },
      { de: "Улетай, убегай от меня, тоска",     pron: "Uletay, ubegay ot menya, toska",      en: "Fly away, run away from me, longing" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Я буду рад потерять тебя",          pron: "Ya budu rad poteryat' tebya",         en: "I'll be glad to lose you" },
      { de: "Не вижу преград, хотя есть одна",   pron: "Ne vizhu pregrad, khotya est' odna",  en: "I see no obstacles, though there is one" },
      { de: "Когда ты ушла",                     pron: "Kogda ty ushla",                      en: "When you left" },
      { de: "Почему так хорошо, тоска?",         pron: "Pochemu tak khorosho, toska?",        en: "Why does it feel so good, longing?" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "Не поджидай у окна",                pron: "Ne podzhiday u okna",                 en: "Don't wait by the window" },
      { de: "Отдай ключи, мне пора",             pron: "Otday klyuchi, mne pora",             en: "Give back the keys, it's time for me" },
      { de: "Лучше убей сама себя",              pron: "Luchshe ubey sama sebya",             en: "Better kill yourself" },
      { de: "Не вынуждай, тоска",                pron: "Ne vynuzhday, toska",                 en: "Don't force me, longing" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Я буду рад потерять тебя",          pron: "Ya budu rad poteryat' tebya",         en: "I'll be glad to lose you" },
      { de: "Не вижу преград, хотя есть одна",   pron: "Ne vizhu pregrad, khotya est' odna",  en: "I see no obstacles, though there is one" },
      { de: "Когда ты ушла",                     pron: "Kogda ty ushla",                      en: "When you left" },
      { de: "Почему так хорошо?",                pron: "Pochemu tak khorosho?",               en: "Why does it feel so good?" },
      { de: "Я буду рад потерять тебя",          pron: "Ya budu rad poteryat' tebya",         en: "I'll be glad to lose you" },
      { de: "Не вижу преград, хотя есть одна",   pron: "Ne vizhu pregrad, khotya est' odna",  en: "I see no obstacles, though there is one" },
      { de: "Когда ты ушла",                     pron: "Kogda ty ushla",                      en: "When you left" },
      { de: "Почему так хорошо, тоска?",         pron: "Pochemu tak khorosho, toska?",        en: "Why does it feel so good, longing?" },
    ]
  },
];
