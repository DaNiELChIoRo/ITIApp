/**
 * Translations for the Bible Quiz app
 */

export const translations = {
  en: {
    // App
    appName: 'ITIApp',
    appSubtitle: 'Bible Quiz',

    // Common
    exit: 'Exit',

    // Home page
    home: {
      welcomeTitle: 'Old Testament Books',
      welcomeDescription: 'Test your knowledge of the Old Testament! Choose a quiz mode below.',
      booksCount: '39 Books',
      unlimitedTime: 'Unlimited Time',
      orderChallenge: 'Order Challenge',
      startQuiz: 'Start Quiz',
      yourProgress: 'Your Progress',
      attempts: 'Attempts',
      bestScore: 'Best Score',
      average: 'Average',
      footerText: 'Learn the Bible one quiz at a time',
      selectQuizType: 'Select Quiz Type',
      quizTypes: {
        order: {
          title: 'Order the Books',
          description: 'Arrange all 39 books in their correct biblical order',
          icon: '📚'
        },
        complete: {
          title: 'Complete the Names',
          description: 'Books shown in order - type the full name from the first letters',
          icon: '✏️'
        },
        covenants: {
          title: "Jacob's Covenants",
          description: 'Multiple choice questions about the covenants in Genesis',
          icon: '📜'
        }
      },
      oldTestament: 'Old Testament',
      knowledge: 'Knowledge',
      study: 'Study',
      studyTypes: {
        greekFlashCards: {
          title: 'Greek Flashcards',
          description: 'Study New Testament Greek vocabulary with flip cards'
        }
      }
    },

    // Flashcards
    flashcards: {
      title: 'Greek Flashcards',
      tapToFlip: 'Tap to flip',
      next: 'Next',
      previous: 'Previous',
      shuffle: 'Shuffle',
      backToHome: 'Back to Home',
      showAll: 'Show All',
      hideAll: 'Hide All',
      learned: 'learned',
      knowIt: 'Know it',
      all: 'All',
      notLearned: 'Not learned',
      resetProgress: 'Reset Progress'
    },

    // Quiz page (Order mode)
    quiz: {
      title: 'Order the Books',
      instruction: 'Click the books in their correct biblical order',
      selected: 'selected',
      undoLast: 'Undo Last',
      resetAll: 'Reset All',
      submitAnswer: 'Submit Answer',
      confirmTitle: 'Submit Your Answer?',
      confirmText: 'Are you sure you want to submit? You have selected all {count} books.',
      goBack: 'Go Back',
      yesSubmit: 'Yes, Submit',
      searchPlaceholder: 'Search book...'
    },

    // Quiz page (Complete mode)
    completeQuiz: {
      title: 'Complete the Names',
      instruction: 'Type the full book name for each hint',
      progress: '{completed} of {total} completed',
      placeholder: 'Type book name...',
      skip: 'Skip',
      check: 'Check',
      next: 'Next',
      correct: 'Correct!',
      incorrect: 'Incorrect',
      correctAnswer: 'The answer was: {answer}',
      submitAll: 'Submit Quiz',
      confirmTitle: 'Submit Your Answers?',
      confirmText: 'You have completed {completed} of {total} books. Submit now?',
      hint: 'Hint: {hint}'
    },

    // Quiz page (Multiple Choice mode)
    multipleChoice: {
      title: "Jacob's Covenants",
      instruction: 'Select the correct answer for each question',
      question: 'Question {current} of {total}',
      selectAnswer: 'Select your answer',
      next: 'Next',
      finish: 'Finish',
      correct: 'Correct!',
      incorrect: 'Incorrect',
      correctAnswerWas: 'The correct answer was:',
      reference: 'Reference:',
      yourAnswer: 'Your answer:',
      skipped: 'Skipped'
    },

    // Results page
    results: {
      title: 'Quiz Complete!',
      noResults: 'No results available',
      goHome: 'Go Home',
      outOf: '{correct} out of {total} correct',
      correct: 'Correct',
      incorrect: 'Incorrect',
      yourAnswers: 'Your Answers',
      yourAnswer: 'Your answer:',
      correctAnswer: 'Correct:',
      home: 'Home',
      tryAgain: 'Try Again'
    },

    // Score messages
    scores: {
      perfect: 'Perfect Score!',
      excellent: 'Excellent!',
      great: 'Great Job!',
      good: 'Good Work!',
      notBad: 'Not Bad!',
      keepPracticing: 'Keep Practicing!',
      tryAgain: 'Try Again!'
    },

    // Language selector
    language: {
      select: 'Language',
      en: 'English',
      es: 'Spanish'
    },

    // Old Testament books
    books: {
      'Genesis': 'Genesis',
      'Exodus': 'Exodus',
      'Leviticus': 'Leviticus',
      'Numbers': 'Numbers',
      'Deuteronomy': 'Deuteronomy',
      'Joshua': 'Joshua',
      'Judges': 'Judges',
      'Ruth': 'Ruth',
      '1 Samuel': '1 Samuel',
      '2 Samuel': '2 Samuel',
      '1 Kings': '1 Kings',
      '2 Kings': '2 Kings',
      '1 Chronicles': '1 Chronicles',
      '2 Chronicles': '2 Chronicles',
      'Ezra': 'Ezra',
      'Nehemiah': 'Nehemiah',
      'Esther': 'Esther',
      'Job': 'Job',
      'Psalms': 'Psalms',
      'Proverbs': 'Proverbs',
      'Ecclesiastes': 'Ecclesiastes',
      'Song of Solomon': 'Song of Solomon',
      'Isaiah': 'Isaiah',
      'Jeremiah': 'Jeremiah',
      'Lamentations': 'Lamentations',
      'Ezekiel': 'Ezekiel',
      'Daniel': 'Daniel',
      'Hosea': 'Hosea',
      'Joel': 'Joel',
      'Amos': 'Amos',
      'Obadiah': 'Obadiah',
      'Jonah': 'Jonah',
      'Micah': 'Micah',
      'Nahum': 'Nahum',
      'Habakkuk': 'Habakkuk',
      'Zephaniah': 'Zephaniah',
      'Haggai': 'Haggai',
      'Zechariah': 'Zechariah',
      'Malachi': 'Malachi'
    }
  },

  es: {
    // App
    appName: 'ITIApp',
    appSubtitle: 'Quiz Bíblico',

    // Common
    exit: 'Salir',

    // Home page
    home: {
      welcomeTitle: 'Libros del Antiguo Testamento',
      welcomeDescription: '¡Pon a prueba tu conocimiento del Antiguo Testamento! Elige un modo de quiz abajo.',
      booksCount: '39 Libros',
      unlimitedTime: 'Tiempo Ilimitado',
      orderChallenge: 'Desafío de Orden',
      startQuiz: 'Comenzar Quiz',
      yourProgress: 'Tu Progreso',
      attempts: 'Intentos',
      bestScore: 'Mejor Puntaje',
      average: 'Promedio',
      footerText: 'Aprende la Biblia un quiz a la vez',
      selectQuizType: 'Selecciona el Tipo de Quiz',
      quizTypes: {
        order: {
          title: 'Ordenar los Libros',
          description: 'Ordena los 39 libros en su orden bíblico correcto',
          icon: '📚'
        },
        complete: {
          title: 'Completar los Nombres',
          description: 'Libros en orden - escribe el nombre completo desde las primeras letras',
          icon: '✏️'
        },
        covenants: {
          title: 'Pactos de Jacob',
          description: 'Preguntas de opción múltiple sobre los pactos en Génesis',
          icon: '📜'
        }
      },
      oldTestament: 'Antiguo Testamento',
      knowledge: 'Conocimiento',
      study: 'Estudio',
      studyTypes: {
        greekFlashCards: {
          title: 'Tarjetas de Griego',
          description: 'Estudia vocabulario griego del Nuevo Testamento con tarjetas'
        }
      }
    },

    // Flashcards
    flashcards: {
      title: 'Tarjetas de Griego',
      tapToFlip: 'Toca para voltear',
      next: 'Siguiente',
      previous: 'Anterior',
      shuffle: 'Mezclar',
      backToHome: 'Volver al Inicio',
      showAll: 'Mostrar Todo',
      hideAll: 'Ocultar Todo',
      learned: 'aprendidas',
      knowIt: 'La sé',
      all: 'Todas',
      notLearned: 'No aprendidas',
      resetProgress: 'Reiniciar Progreso'
    },

    // Quiz page (Order mode)
    quiz: {
      title: 'Ordena los Libros',
      instruction: 'Haz clic en los libros en su orden bíblico correcto',
      selected: 'seleccionados',
      undoLast: 'Deshacer',
      resetAll: 'Reiniciar',
      submitAnswer: 'Enviar Respuesta',
      confirmTitle: '¿Enviar tu Respuesta?',
      confirmText: '¿Estás seguro de que quieres enviar? Has seleccionado los {count} libros.',
      goBack: 'Volver',
      yesSubmit: 'Sí, Enviar',
      searchPlaceholder: 'Buscar libro...'
    },

    // Quiz page (Complete mode)
    completeQuiz: {
      title: 'Completar los Nombres',
      instruction: 'Escribe el nombre completo del libro para cada pista',
      progress: '{completed} de {total} completados',
      placeholder: 'Escribe el nombre...',
      skip: 'Saltar',
      check: 'Verificar',
      next: 'Siguiente',
      correct: '¡Correcto!',
      incorrect: 'Incorrecto',
      correctAnswer: 'La respuesta era: {answer}',
      submitAll: 'Enviar Quiz',
      confirmTitle: '¿Enviar tus Respuestas?',
      confirmText: 'Has completado {completed} de {total} libros. ¿Enviar ahora?',
      hint: 'Pista: {hint}'
    },

    // Quiz page (Multiple Choice mode)
    multipleChoice: {
      title: 'Pactos de Jacob',
      instruction: 'Selecciona la respuesta correcta para cada pregunta',
      question: 'Pregunta {current} de {total}',
      selectAnswer: 'Selecciona tu respuesta',
      next: 'Siguiente',
      finish: 'Finalizar',
      correct: '¡Correcto!',
      incorrect: 'Incorrecto',
      correctAnswerWas: 'La respuesta correcta era:',
      reference: 'Referencia:',
      yourAnswer: 'Tu respuesta:',
      skipped: 'Omitida'
    },

    // Results page
    results: {
      title: '¡Quiz Completado!',
      noResults: 'No hay resultados disponibles',
      goHome: 'Ir al Inicio',
      outOf: '{correct} de {total} correctos',
      correct: 'Correctos',
      incorrect: 'Incorrectos',
      yourAnswers: 'Tus Respuestas',
      yourAnswer: 'Tu respuesta:',
      correctAnswer: 'Correcto:',
      home: 'Inicio',
      tryAgain: 'Intentar de Nuevo'
    },

    // Score messages
    scores: {
      perfect: '¡Puntaje Perfecto!',
      excellent: '¡Excelente!',
      great: '¡Muy Bien!',
      good: '¡Buen Trabajo!',
      notBad: '¡Nada Mal!',
      keepPracticing: '¡Sigue Practicando!',
      tryAgain: '¡Inténtalo de Nuevo!'
    },

    // Language selector
    language: {
      select: 'Idioma',
      en: 'Inglés',
      es: 'Español'
    },

    // Old Testament books (Spanish names)
    books: {
      'Genesis': 'Génesis',
      'Exodus': 'Éxodo',
      'Leviticus': 'Levítico',
      'Numbers': 'Números',
      'Deuteronomy': 'Deuteronomio',
      'Joshua': 'Josué',
      'Judges': 'Jueces',
      'Ruth': 'Rut',
      '1 Samuel': '1 Samuel',
      '2 Samuel': '2 Samuel',
      '1 Kings': '1 Reyes',
      '2 Kings': '2 Reyes',
      '1 Chronicles': '1 Crónicas',
      '2 Chronicles': '2 Crónicas',
      'Ezra': 'Esdras',
      'Nehemiah': 'Nehemías',
      'Esther': 'Ester',
      'Job': 'Job',
      'Psalms': 'Salmos',
      'Proverbs': 'Proverbios',
      'Ecclesiastes': 'Eclesiastés',
      'Song of Solomon': 'Cantares',
      'Isaiah': 'Isaías',
      'Jeremiah': 'Jeremías',
      'Lamentations': 'Lamentaciones',
      'Ezekiel': 'Ezequiel',
      'Daniel': 'Daniel',
      'Hosea': 'Oseas',
      'Joel': 'Joel',
      'Amos': 'Amós',
      'Obadiah': 'Abdías',
      'Jonah': 'Jonás',
      'Micah': 'Miqueas',
      'Nahum': 'Nahúm',
      'Habakkuk': 'Habacuc',
      'Zephaniah': 'Sofonías',
      'Haggai': 'Hageo',
      'Zechariah': 'Zacarías',
      'Malachi': 'Malaquías'
    }
  }
};

export default translations;
