import { saveBooks, saveQuiz, saveTranslations } from './firestoreService';
import { OLD_TESTAMENT_BOOKS } from '../utils/constants';
import { GENESIS_COVENANTS_QUIZ } from '../utils/genesisCovenants';
import { translations } from '../i18n/translations';

export async function seedAllData() {
  const results = { books: false, quizzes: false, translations: false };

  try {
    await saveBooks(OLD_TESTAMENT_BOOKS);
    results.books = true;
  } catch (err) {
    console.error('Failed to seed books:', err);
  }

  try {
    await saveQuiz('genesis-covenants', {
      title: {
        en: "Jacob's Covenants",
        es: 'Pactos de Jacob'
      },
      description: {
        en: 'Multiple choice questions about the covenants in Genesis',
        es: 'Preguntas de opcion multiple sobre los pactos en Genesis'
      },
      icon: '\uD83D\uDCDC',
      category: 'knowledge',
      en: GENESIS_COVENANTS_QUIZ.en,
      es: GENESIS_COVENANTS_QUIZ.es
    });
    results.quizzes = true;
  } catch (err) {
    console.error('Failed to seed quizzes:', err);
  }

  try {
    await saveTranslations('en', translations.en);
    await saveTranslations('es', translations.es);
    results.translations = true;
  } catch (err) {
    console.error('Failed to seed translations:', err);
  }

  return results;
}
