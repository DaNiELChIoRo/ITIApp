export const RUSSIAN_CASES = [
  {
    id: 'nominative',
    name: { en: 'Nominative', es: 'Nominativo', ru: 'Именительный падеж' },
    question: { en: 'Who? What?', es: '¿Quién? ¿Qué?' },
    usage: {
      en: 'Used for the subject of the sentence — the person or thing performing the action.',
      es: 'Se usa para el sujeto de la oración — la persona o cosa que realiza la acción.'
    },
    endings: {
      en: 'Masculine: –, -й, -ь | Feminine: -а, -я, -ь | Neuter: -о, -е',
      es: 'Masculino: –, -й, -ь | Femenino: -а, -я, -ь | Neutro: -о, -е'
    },
    color: '#4a90d9',
    emoji: '👤',
    examples: [
      {
        ru: 'Студент читает книгу.',
        transliteration: 'Studyent chitayet knigu.',
        en: 'The student reads a book.',
        es: 'El estudiante lee un libro.',
        highlight: 'Студент',
        note: { en: '"Студент" (student) is the subject.', es: '"Студент" (estudiante) es el sujeto.' }
      },
      {
        ru: 'Кошка спит.',
        transliteration: 'Koshka spit.',
        en: 'The cat is sleeping.',
        es: 'El gato está durmiendo.',
        highlight: 'Кошка',
        note: { en: '"Кошка" (cat) is the subject.', es: '"Кошка" (gato) es el sujeto.' }
      },
      {
        ru: 'Россия — большая страна.',
        transliteration: 'Rossiya — bolshaya strana.',
        en: 'Russia is a big country.',
        es: 'Rusia es un país grande.',
        highlight: 'Россия',
        note: { en: '"Россия" (Russia) is the subject.', es: '"Россия" (Rusia) es el sujeto.' }
      }
    ]
  },
  {
    id: 'genitive',
    name: { en: 'Genitive', es: 'Genitivo', ru: 'Родительный падеж' },
    question: { en: 'Whose? Of whom? Of what?', es: '¿De quién? ¿De qué?' },
    usage: {
      en: 'Expresses possession, origin, absence, or quantity. Used after negation and prepositions like "у", "из", "от", "без", "до", "после".',
      es: 'Expresa posesión, origen, ausencia o cantidad. Se usa tras negación y preposiciones como "у", "из", "от", "без", "до", "después".'
    },
    endings: {
      en: 'Masculine: -а, -я | Feminine: -ы, -и | Neuter: -а, -я | Plural: -ов, -ей, –',
      es: 'Masculino: -а, -я | Femenino: -ы, -и | Neutro: -а, -я | Plural: -ов, -ей, –'
    },
    color: '#e84c3d',
    emoji: '🔑',
    examples: [
      {
        ru: 'Это книга студента.',
        transliteration: 'Eto kniga studyenta.',
        en: "This is the student's book.",
        es: 'Este es el libro del estudiante.',
        highlight: 'студента',
        note: { en: '"студента" (of the student) shows possession.', es: '"студента" (del estudiante) indica posesión.' }
      },
      {
        ru: 'У меня нет времени.',
        transliteration: 'U menya nyet vryemeni.',
        en: "I don't have time.",
        es: 'No tengo tiempo.',
        highlight: 'времени',
        note: { en: '"времени" (of time) used after negation "нет".', es: '"времени" (de tiempo) se usa tras "нет" (no hay).' }
      },
      {
        ru: 'Стакан воды, пожалуйста.',
        transliteration: 'Stakan vody, pozhaluysta.',
        en: 'A glass of water, please.',
        es: 'Un vaso de agua, por favor.',
        highlight: 'воды',
        note: { en: '"воды" (of water) expresses quantity/partitive.', es: '"воды" (de agua) expresa cantidad.' }
      }
    ]
  },
  {
    id: 'dative',
    name: { en: 'Dative', es: 'Dativo', ru: 'Дательный падеж' },
    question: { en: 'To whom? For whom?', es: '¿A quién? ¿Para quién?' },
    usage: {
      en: 'Used for the indirect object — the recipient of an action. Also used with prepositions "к", "по" and to express age.',
      es: 'Se usa para el objeto indirecto — el destinatario de una acción. También con preposiciones "к", "по" y para expresar la edad.'
    },
    endings: {
      en: 'Masculine: -у, -ю | Feminine: -е, -и | Neuter: -у, -ю | Plural: -ам, -ям',
      es: 'Masculino: -у, -ю | Femenino: -е, -и | Neutro: -у, -ю | Plural: -ам, -ям'
    },
    color: '#27ae60',
    emoji: '🎁',
    examples: [
      {
        ru: 'Я дал книгу другу.',
        transliteration: 'Ya dal knigu drugu.',
        en: 'I gave the book to a friend.',
        es: 'Le di el libro a un amigo.',
        highlight: 'другу',
        note: { en: '"другу" (to a friend) is the recipient of the action.', es: '"другу" (a un amigo) es el destinatario.' }
      },
      {
        ru: 'Мне двадцать лет.',
        transliteration: 'Mnye dvadtsat let.',
        en: 'I am twenty years old.',
        es: 'Tengo veinte años.',
        highlight: 'Мне',
        note: { en: '"Мне" (to me / dative of я) used to express age.', es: '"Мне" (dativo de я) se usa para expresar la edad.' }
      },
      {
        ru: 'Позвони маме.',
        transliteration: 'Pozvoni mame.',
        en: 'Call mom.',
        es: 'Llama a mamá.',
        highlight: 'маме',
        note: { en: '"маме" (to mom) is the indirect object.', es: '"маме" (a mamá) es el objeto indirecto.' }
      }
    ]
  },
  {
    id: 'accusative',
    name: { en: 'Accusative', es: 'Acusativo', ru: 'Винительный падеж' },
    question: { en: 'Whom? What? (direct object)', es: '¿A quién? ¿Qué? (objeto directo)' },
    usage: {
      en: 'Used for the direct object of a transitive verb — the person or thing directly receiving the action. Also with prepositions "в", "на" for direction and "через", "за".',
      es: 'Se usa para el objeto directo de un verbo transitivo. También con preposiciones "в", "на" para dirección y "через", "за".'
    },
    endings: {
      en: 'Masculine animate: -а, -я | Masculine inanimate: same as nominative | Feminine: -у, -ю | Neuter: same as nominative',
      es: 'Masculino animado: -а, -я | Masculino inanimado: igual al nominativo | Femenino: -у, -ю | Neutro: igual al nominativo'
    },
    color: '#f39c12',
    emoji: '🎯',
    examples: [
      {
        ru: 'Я вижу собаку.',
        transliteration: 'Ya vizhu sobaku.',
        en: 'I see a dog.',
        es: 'Veo un perro.',
        highlight: 'собаку',
        note: { en: '"собаку" (dog, accusative) is the direct object.', es: '"собаку" (perro, acusativo) es el objeto directo.' }
      },
      {
        ru: 'Он читает газету.',
        transliteration: 'On chitayet gazetu.',
        en: 'He reads a newspaper.',
        es: 'Él lee un periódico.',
        highlight: 'газету',
        note: { en: '"газету" (newspaper) is the direct object of "читает".', es: '"газету" (periódico) es el objeto directo de "lee".' }
      },
      {
        ru: 'Мы идём в школу.',
        transliteration: 'My idyom v shkolu.',
        en: 'We are going to school.',
        es: 'Vamos a la escuela.',
        highlight: 'школу',
        note: { en: '"в школу" (to school) shows direction.', es: '"в школу" (a la escuela) indica dirección.' }
      }
    ]
  },
  {
    id: 'instrumental',
    name: { en: 'Instrumental', es: 'Instrumental', ru: 'Творительный падеж' },
    question: { en: 'With whom? With what? By what means?', es: '¿Con quién? ¿Con qué? ¿Por qué medio?' },
    usage: {
      en: 'Indicates the instrument or means by which an action is performed. Used with prepositions "с" (with), "за", "под", "над", "перед", "между". Also used for professions after "быть".',
      es: 'Indica el instrumento o medio con que se realiza una acción. Se usa con "с" (con), "за", "под", "над", "перед", "между". También para profesiones tras "быть".'
    },
    endings: {
      en: 'Masculine/Neuter: -ом, -ем | Feminine: -ой, -ей | Plural: -ами, -ями',
      es: 'Masculino/Neutro: -ом, -ем | Femenino: -ой, -ей | Plural: -ами, -ями'
    },
    color: '#8e44ad',
    emoji: '🔧',
    examples: [
      {
        ru: 'Я пишу ручкой.',
        transliteration: 'Ya pishu ruchkoy.',
        en: 'I write with a pen.',
        es: 'Escribo con un bolígrafo.',
        highlight: 'ручкой',
        note: { en: '"ручкой" (with a pen) — the instrument used.', es: '"ручкой" (con un bolígrafo) — el instrumento usado.' }
      },
      {
        ru: 'Он стал врачом.',
        transliteration: 'On stal vrachom.',
        en: 'He became a doctor.',
        es: 'Él se convirtió en médico.',
        highlight: 'врачом',
        note: { en: '"врачом" (a doctor) — profession after "стал" (became).', es: '"врачом" (médico) — profesión tras "стал" (se convirtió).' }
      },
      {
        ru: 'Я иду с другом.',
        transliteration: 'Ya idu s drugom.',
        en: 'I am going with a friend.',
        es: 'Voy con un amigo.',
        highlight: 'другом',
        note: { en: '"с другом" (with a friend) — accompaniment.', es: '"с другом" (con un amigo) — compañía.' }
      }
    ]
  },
  {
    id: 'prepositional',
    name: { en: 'Prepositional', es: 'Preposicional', ru: 'Предложный падеж' },
    question: { en: 'About whom? About what? Where?', es: '¿Acerca de quién? ¿De qué? ¿Dónde?' },
    usage: {
      en: 'Always used with a preposition — most commonly "в" (in), "на" (on/at), "о/об" (about), "при" (under/during). Used for location and topics of thought or speech.',
      es: 'Siempre se usa con preposición — principalmente "в" (en), "на" (en/sobre), "о/об" (sobre/acerca de), "при". Para ubicación y temas de pensamiento o conversación.'
    },
    endings: {
      en: 'Masculine: -е, -и | Feminine: -е, -и | Neuter: -е, -и | Plural: -ах, -ях',
      es: 'Masculino: -е, -и | Femenino: -е, -и | Neutro: -е, -и | Plural: -ах, -ях'
    },
    color: '#16a085',
    emoji: '📍',
    examples: [
      {
        ru: 'Я живу в Москве.',
        transliteration: 'Ya zhivu v Moskve.',
        en: 'I live in Moscow.',
        es: 'Vivo en Moscú.',
        highlight: 'Москве',
        note: { en: '"в Москве" (in Moscow) — location.', es: '"в Москве" (en Moscú) — ubicación.' }
      },
      {
        ru: 'Мы говорим о погоде.',
        transliteration: 'My govorim o pogode.',
        en: 'We are talking about the weather.',
        es: 'Hablamos del tiempo.',
        highlight: 'погоде',
        note: { en: '"о погоде" (about the weather) — topic.', es: '"о погоде" (sobre el tiempo) — tema.' }
      },
      {
        ru: 'Книга на столе.',
        transliteration: 'Kniga na stole.',
        en: 'The book is on the table.',
        es: 'El libro está sobre la mesa.',
        highlight: 'столе',
        note: { en: '"на столе" (on the table) — location.', es: '"на столе" (sobre la mesa) — ubicación.' }
      }
    ]
  }
];
