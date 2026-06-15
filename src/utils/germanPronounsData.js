function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ── Personal Pronouns (Nom / Akk / Dat) ──────────────────────────────────────
export const PERSONAL_CASES = ['Nominativ', 'Akkusativ', 'Dativ'];

export const PERSONAL_PERSONS = [
  { key: 'ich',    label: { de: 'ich',       en: '1st Sg.',            es: '1.ª Sg.'          }, forms: ['ich',       'mich',       'mir'          ] },
  { key: 'du',     label: { de: 'du',        en: '2nd Sg.',            es: '2.ª Sg.'          }, forms: ['du',        'dich',       'dir'          ] },
  { key: 'er',     label: { de: 'er',        en: '3rd Sg. M',          es: '3.ª Sg. M'        }, forms: ['er',        'ihn',        'ihm'          ] },
  { key: 'sie_f',  label: { de: 'sie (F)',   en: '3rd Sg. F',          es: '3.ª Sg. F'        }, forms: ['sie',       'sie',        'ihr'          ] },
  { key: 'es',     label: { de: 'es',        en: '3rd Sg. N',          es: '3.ª Sg. N'        }, forms: ['es',        'es',         'ihm'          ] },
  { key: 'wir',    label: { de: 'wir',       en: '1st Pl.',            es: '1.ª Pl.'          }, forms: ['wir',       'uns',        'uns'          ] },
  { key: 'ihr',    label: { de: 'ihr',       en: '2nd Pl.',            es: '2.ª Pl.'          }, forms: ['ihr',       'euch',       'euch'         ] },
  { key: 'sie_pl', label: { de: 'sie / Sie', en: '3rd Pl. / Formal',   es: '3.ª Pl. / formal' }, forms: ['sie / Sie', 'sie / Sie',  'ihnen / Ihnen'] },
];

// ── Possessive Pronouns (Nominativ forms) ─────────────────────────────────────
export const POSSESSIVE_GENDERS = ['M', 'F', 'N', 'Pl'];

export const POSSESSIVE_PERSONS = [
  { key: 'ich',    label: { de: 'ich',       en: 'ich (my)',          es: 'ich (mi)'           }, stems: { M: 'mein',      F: 'meine',       N: 'mein',      Pl: 'meine'       } },
  { key: 'du',     label: { de: 'du',        en: 'du (your)',         es: 'du (tu)'            }, stems: { M: 'dein',      F: 'deine',       N: 'dein',      Pl: 'deine'       } },
  { key: 'er_es',  label: { de: 'er / es',   en: 'er/es (his/its)',   es: 'er/es (su, M/N)'   }, stems: { M: 'sein',      F: 'seine',       N: 'sein',      Pl: 'seine'       } },
  { key: 'sie_f',  label: { de: 'sie (F)',   en: 'sie (her)',         es: 'sie (su, F)'        }, stems: { M: 'ihr',       F: 'ihre',        N: 'ihr',       Pl: 'ihre'        } },
  { key: 'wir',    label: { de: 'wir',       en: 'wir (our)',         es: 'wir (nuestro)'      }, stems: { M: 'unser',     F: 'unsere',      N: 'unser',     Pl: 'unsere'      } },
  { key: 'ihr',    label: { de: 'ihr',       en: 'ihr (your pl.)',    es: 'ihr (vuestro)'      }, stems: { M: 'euer',      F: 'eure',        N: 'euer',      Pl: 'eure'        } },
  { key: 'sie_pl', label: { de: 'sie / Sie', en: 'sie/Sie (their/Your)', es: 'sie/Sie (su/Su)' }, stems: { M: 'ihr / Ihr', F: 'ihre / Ihre', N: 'ihr / Ihr', Pl: 'ihre / Ihre' } },
];

// ── Reflexive Pronouns (Akk / Dat) ───────────────────────────────────────────
export const REFLEXIVE_CASES = ['Akkusativ', 'Dativ'];

export const REFLEXIVE_PERSONS = [
  { key: 'ich',    label: 'ich',        forms: ['mich', 'mir'  ] },
  { key: 'du',     label: 'du',         forms: ['dich', 'dir'  ] },
  { key: 'er',     label: 'er / sie / es', forms: ['sich', 'sich'] },
  { key: 'wir',    label: 'wir',        forms: ['uns',  'uns'  ] },
  { key: 'ihr',    label: 'ihr',        forms: ['euch', 'euch' ] },
  { key: 'sie_pl', label: 'sie / Sie',  forms: ['sich', 'sich' ] },
];

// ── Quiz builder ──────────────────────────────────────────────────────────────
export function buildPronounQuiz() {
  const qs = [];

  PERSONAL_PERSONS.forEach(person => {
    PERSONAL_CASES.forEach((caseLabel, ci) => {
      const answer = person.forms[ci];
      const pool = [...new Set(PERSONAL_PERSONS.map(p => p.forms[ci]).filter(f => f !== answer))];
      qs.push({
        category: 'personal',
        personLabel: person.label.de,
        caseLabel,
        answer,
        distractors: pool,
      });
    });
  });

  REFLEXIVE_PERSONS.forEach(person => {
    REFLEXIVE_CASES.forEach((caseLabel, ci) => {
      const answer = person.forms[ci];
      const pool = [...new Set(REFLEXIVE_PERSONS.map(p => p.forms[ci]).filter(f => f !== answer))];
      qs.push({
        category: 'reflexive',
        personLabel: person.label,
        caseLabel,
        answer,
        distractors: pool,
      });
    });
  });

  return shuffleArray(qs);
}
