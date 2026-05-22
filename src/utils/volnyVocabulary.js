// Vocabulary and lyrics for "Volny" — Molchat Doma
// Russian song — vocabulary taken from the lyrics.

export const VOLNY_VOCAB = [
  // Nouns
  { id: 1,  word: "волна",        ipa: "[vɐlˈna]",           en: "wave",                       es: "ola",                        type: "noun" },
  { id: 2,  word: "земля",        ipa: "[zʲɪmˈlʲa]",         en: "earth / land / ground",      es: "tierra / suelo",             type: "noun" },
  { id: 3,  word: "грохот",       ipa: "[ˈɡroxət]",           en: "rumble / roar / crash",      es: "estruendo / retumbar",       type: "noun" },
  { id: 4,  word: "гром",         ipa: "[ɡrom]",              en: "thunder",                    es: "trueno",                     type: "noun" },
  { id: 5,  word: "смерть",       ipa: "[smʲertʲ]",           en: "death",                      es: "muerte",                     type: "noun" },
  { id: 6,  word: "счастье",      ipa: "[ˈɕːasʲtʲjɪ]",       en: "happiness",                  es: "felicidad",                  type: "noun" },
  { id: 7,  word: "век",          ipa: "[vʲek]",              en: "century / age",              es: "siglo / era",                type: "noun" },
  { id: 8,  word: "быт",          ipa: "[bɨt]",               en: "everyday life / routine",    es: "vida cotidiana / rutina",    type: "noun" },
  { id: 9,  word: "картотека",    ipa: "[kərtɐˈtʲekə]",       en: "card index / file / record", es: "fichero / archivo",          type: "noun" },
  { id: 10, word: "путь",         ipa: "[putʲ]",              en: "path / way / route",         es: "camino / vía",               type: "noun" },
  { id: 11, word: "природа",      ipa: "[prʲɪˈrodə]",         en: "nature",                     es: "naturaleza",                 type: "noun" },
  { id: 12, word: "погода",       ipa: "[pɐˈɡodə]",           en: "weather",                    es: "clima / tiempo",             type: "noun" },
  { id: 13, word: "Бог",          ipa: "[boɡ]",               en: "God",                        es: "Dios",                       type: "noun" },
  { id: 14, word: "нелепица",     ipa: "[nʲɪˈlʲepʲɪt͡sə]",   en: "absurdity / nonsense",       es: "absurdo / disparate",        type: "noun" },
  // Verbs
  { id: 15, word: "показать",     ipa: "[pəkɐˈzatʲ]",         en: "to show",                    es: "mostrar / enseñar",          type: "verb" },
  { id: 16, word: "плакать",      ipa: "[ˈplakətʲ]",          en: "to cry / weep",              es: "llorar",                     type: "verb" },
  { id: 17, word: "разорвать",    ipa: "[rəzɐrˈvatʲ]",        en: "to tear apart / rip",        es: "desgarrar / romper",         type: "verb" },
  { id: 18, word: "хранить",      ipa: "[xrɐˈnʲitʲ]",         en: "to keep / preserve",         es: "guardar / preservar",        type: "verb" },
  { id: 19, word: "пронести",     ipa: "[prənʲɪˈsʲtʲi]",      en: "to carry through",           es: "llevar / transportar",       type: "verb" },
  { id: 20, word: "сохранить",    ipa: "[səxrɐˈnʲitʲ]",       en: "to save / preserve oneself", es: "salvar / conservar",         type: "verb" },
  { id: 21, word: "проложить",    ipa: "[prəlɐˈʐɨtʲ]",        en: "to forge / lay (a path)",    es: "trazar / abrir (camino)",    type: "verb" },
  { id: 22, word: "исчезнуть",    ipa: "[ɪˈɕːeznʊtʲ]",        en: "to disappear / vanish",      es: "desaparecer",                type: "verb" },
  { id: 23, word: "заставлять",   ipa: "[zəstɐˈvlʲatʲ]",      en: "to force / make s.o. do",    es: "obligar / forzar",           type: "verb" },
  { id: 24, word: "петь",         ipa: "[pʲetʲ]",             en: "to sing",                    es: "cantar",                     type: "verb" },
  { id: 25, word: "верить",       ipa: "[ˈvʲerʲɪtʲ]",         en: "to believe",                 es: "creer",                      type: "verb" },
  // Adjectives / adverbs
  { id: 26, word: "нелепый",      ipa: "[nʲɪˈlʲepɨj]",        en: "absurd / ridiculous",        es: "absurdo / ridículo",         type: "adjective" },
  { id: 27, word: "социальный",   ipa: "[sətsɨˈalʲnɨj]",      en: "social",                     es: "social",                     type: "adjective" },
  { id: 28, word: "плохой",       ipa: "[plɐˈxoj]",           en: "bad / poor",                 es: "malo / pésimo",              type: "adjective" },
  { id: 29, word: "насовсем",     ipa: "[nəsɐfˈsʲem]",        en: "for good / permanently",     es: "para siempre / definitivamente", type: "adverb" },
  { id: 30, word: "сейчас",       ipa: "[sʲɪˈt͡ɕas]",          en: "now / right now",            es: "ahora / en este momento",    type: "adverb" },
];

// line.de = Russian text, line.pron = romanization, line.en = English translation
export const VOLNY_LYRICS = [
  {
    label: { en: "Verse 1", es: "Estrofa 1" },
    lines: [
      { de: "И ты покажешь мне, как плачет земля",           pron: "I ty pokazhesh' mne, kak plachet zemlya",          en: "And you'll show me how the earth weeps" },
      { de: "Грохот грома разорвёт нас на части",            pron: "Grokhot groma razorvyot nas na chasti",             en: "The roar of thunder will tear us apart" },
      { de: "Там, где будет смерть — там же буду и я",       pron: "Tam, gde budet smert' — tam zhe budu i ya",        en: "Where there will be death — there I will be too" },
      { de: "Ты за мной не иди, твоё время — сейчас",       pron: "Ty za mnoy ne idi, tvoyo vremya — seychas",        en: "Don't follow me, your time is now" },
    ]
  },
  {
    label: { en: "Verse 2", es: "Estrofa 2" },
    lines: [
      { de: "Наше счастье храня, пронеси в новый век",       pron: "Nashe schast'ye khranya, pronesi v novyy vek",     en: "Preserving our happiness, carry it into the new age" },
      { de: "Сквозь нелепицу быта, социальных проблем",      pron: "Skvoz' nelepitsu byta, sotsial'nykh problem",      en: "Through the absurdity of daily life and social problems" },
      { de: "Сохранив себя в сотнях картотек",               pron: "Sokhraniv sebya v sotnyakh kartotyek",             en: "Having preserved yourself in hundreds of records" },
      { de: "Проложи новый путь и исчезни насовсем",         pron: "Prolozhi novyy put' i ischezni nasovsem",          en: "Forge a new path and disappear for good" },
    ]
  },
  {
    label: { en: "Chorus", es: "Coro" },
    lines: [
      { de: "Ты заставляешь меня петь песни про природу",    pron: "Ty zastavlyayesh' menya pet' pesni pro prirodu",   en: "You make me sing songs about nature" },
      { de: "Ты заставляешь меня верить в своего Бога",      pron: "Ty zastavlyayesh' menya verit' v svoyego Boga",    en: "You make me believe in your God" },
      { de: "На моей земле плохая погода",                   pron: "Na moyey zemle plokhaya pogoda",                   en: "The weather on my land is bad" },
      { de: "Ты заставляешь меня верить в своего Бога",      pron: "Ty zastavlyayesh' menya verit' v svoyego Boga",    en: "You make me believe in your God" },
      { de: "Ты заставляешь меня петь песни про природу",    pron: "Ty zastavlyayesh' menya pet' pesni pro prirodu",   en: "You make me sing songs about nature" },
      { de: "Ты заставляешь меня верить в своего Бога",      pron: "Ty zastavlyayesh' menya verit' v svoyego Boga",    en: "You make me believe in your God" },
      { de: "На моей земле плохая погода",                   pron: "Na moyey zemle plokhaya pogoda",                   en: "The weather on my land is bad" },
      { de: "Ты заставляешь меня верить в своего Бога",      pron: "Ty zastavlyayesh' menya verit' v svoyego Boga",    en: "You make me believe in your God" },
    ]
  },
];
