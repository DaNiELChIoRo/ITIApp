// German adjective declension — present tense
// Three types: weak (definite article), mixed (indefinite), strong (no article)

export const CASES   = ['Nominativ', 'Akkusativ', 'Dativ', 'Genitiv'];
export const GENDERS = ['m', 'f', 'n', 'pl'];

// Adjective endings per type × case × gender
export const DECLENSION_TYPES = [
  {
    id: 'weak',
    label:    { en: 'Weak',  es: 'Débil'  },
    sublabel: { en: 'with definite article (der/die/das)', es: 'con artículo definido (der/die/das)' },
    endings: {
      Nominativ: { m: 'e',  f: 'e',  n: 'e',  pl: 'en' },
      Akkusativ: { m: 'en', f: 'e',  n: 'e',  pl: 'en' },
      Dativ:     { m: 'en', f: 'en', n: 'en', pl: 'en' },
      Genitiv:   { m: 'en', f: 'en', n: 'en', pl: 'en' },
    },
  },
  {
    id: 'mixed',
    label:    { en: 'Mixed', es: 'Mixta'  },
    sublabel: { en: 'with indefinite article (ein/eine)', es: 'con artículo indefinido (ein/eine)' },
    endings: {
      Nominativ: { m: 'er', f: 'e',  n: 'es', pl: 'en' },
      Akkusativ: { m: 'en', f: 'e',  n: 'es', pl: 'en' },
      Dativ:     { m: 'en', f: 'en', n: 'en', pl: 'en' },
      Genitiv:   { m: 'en', f: 'en', n: 'en', pl: 'en' },
    },
  },
  {
    id: 'strong',
    label:    { en: 'Strong', es: 'Fuerte' },
    sublabel: { en: 'no article', es: 'sin artículo' },
    endings: {
      Nominativ: { m: 'er', f: 'e',  n: 'es', pl: 'e'  },
      Akkusativ: { m: 'en', f: 'e',  n: 'es', pl: 'e'  },
      Dativ:     { m: 'em', f: 'er', n: 'em', pl: 'en' },
      Genitiv:   { m: 'en', f: 'er', n: 'en', pl: 'er' },
    },
  },
];

// Case-declined articles for each type (used in Drill table cells)
export const DECLINED_ARTICLES = {
  weak: {
    Nominativ: { m: 'der',  f: 'die',   n: 'das',   pl: 'die'   },
    Akkusativ: { m: 'den',  f: 'die',   n: 'das',   pl: 'die'   },
    Dativ:     { m: 'dem',  f: 'der',   n: 'dem',   pl: 'den'   },
    Genitiv:   { m: 'des',  f: 'der',   n: 'des',   pl: 'der'   },
  },
  mixed: {
    Nominativ: { m: 'ein',   f: 'eine',  n: 'ein',   pl: 'keine'  },
    Akkusativ: { m: 'einen', f: 'eine',  n: 'ein',   pl: 'keine'  },
    Dativ:     { m: 'einem', f: 'einer', n: 'einem', pl: 'keinen' },
    Genitiv:   { m: 'eines', f: 'einer', n: 'eines', pl: 'keiner' },
  },
  strong: {
    Nominativ: { m: '',  f: '',  n: '',  pl: '' },
    Akkusativ: { m: '',  f: '',  n: '',  pl: '' },
    Dativ:     { m: '',  f: '',  n: '',  pl: '' },
    Genitiv:   { m: '',  f: '',  n: '',  pl: '' },
  },
};

// Representative nouns per gender for quiz context
export const SAMPLE_NOUNS = {
  m:  ['Mann', 'Hund', 'Lehrer', 'Tag'],
  f:  ['Frau', 'Katze', 'Stadt', 'Schule'],
  n:  ['Kind', 'Buch', 'Auto', 'Haus'],
  pl: ['Kinder', 'Bücher', 'Männer', 'Autos'],
};

// Adjectives used in drill exercises
export const DRILL_ADJECTIVES = [
  { stem: 'gut',    en: 'good',   es: 'bueno/a'   },
  { stem: 'alt',    en: 'old',    es: 'viejo/a'   },
  { stem: 'neu',    en: 'new',    es: 'nuevo/a'   },
  { stem: 'groß',   en: 'big',    es: 'grande'    },
  { stem: 'klein',  en: 'small',  es: 'pequeño/a' },
  { stem: 'jung',   en: 'young',  es: 'joven'     },
  { stem: 'warm',   en: 'warm',   es: 'cálido/a'  },
  { stem: 'kalt',   en: 'cold',   es: 'frío/a'    },
  { stem: 'schön',  en: 'pretty', es: 'bonito/a'  },
  { stem: 'stark',  en: 'strong', es: 'fuerte'    },
];
