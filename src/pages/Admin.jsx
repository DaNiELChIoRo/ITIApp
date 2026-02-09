import React, { useState, useEffect } from 'react';
import { useData } from '../contexts/DataContext';
import { saveBooks, saveQuiz, createQuiz, deleteQuiz, saveTranslations } from '../firebase/firestoreService';
import { seedAllData } from '../firebase/seedData';
import Button from '../components/common/Button';
import '../styles/Admin.css';

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';

const Admin = ({ onBack }) => {
  const { books, quizzes, translations, refreshData } = useData();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('books');
  const [status, setStatus] = useState('');
  const [saving, setSaving] = useState(false);

  // --- Books state ---
  const [editBooks, setEditBooks] = useState([]);
  const [newBook, setNewBook] = useState('');

  // --- Quizzes state ---
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [editQuiz, setEditQuiz] = useState(null);
  const [showNewQuiz, setShowNewQuiz] = useState(false);
  const [newQuizForm, setNewQuizForm] = useState({
    id: '',
    titleEn: '',
    titleEs: '',
    descEn: '',
    descEs: '',
    icon: '',
    category: 'knowledge'
  });

  // --- Translations state ---
  const [editLang, setEditLang] = useState('en');
  const [editTranslations, setEditTranslations] = useState({});
  const [newLang, setNewLang] = useState('');

  useEffect(() => {
    setEditBooks([...books]);
  }, [books]);

  useEffect(() => {
    if (translations[editLang]) {
      setEditTranslations(JSON.parse(JSON.stringify(translations[editLang])));
    }
  }, [editLang, translations]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setStatus('');
    } else {
      setStatus('Invalid password');
    }
  };

  const showStatus = (msg) => {
    setStatus(msg);
    setTimeout(() => setStatus(''), 3000);
  };

  // --- Books handlers ---
  const handleSaveBooks = async () => {
    setSaving(true);
    try {
      await saveBooks(editBooks);
      await refreshData();
      showStatus('Books saved successfully!');
    } catch (err) {
      showStatus('Error saving books: ' + err.message);
    }
    setSaving(false);
  };

  const handleAddBook = () => {
    if (newBook.trim() && !editBooks.includes(newBook.trim())) {
      setEditBooks([...editBooks, newBook.trim()]);
      setNewBook('');
    }
  };

  const handleRemoveBook = (index) => {
    setEditBooks(editBooks.filter((_, i) => i !== index));
  };

  const handleMoveBook = (index, direction) => {
    const newBooks = [...editBooks];
    const target = index + direction;
    if (target < 0 || target >= newBooks.length) return;
    [newBooks[index], newBooks[target]] = [newBooks[target], newBooks[index]];
    setEditBooks(newBooks);
  };

  // --- Quiz handlers ---
  const handleSelectQuiz = (quizId) => {
    const quiz = quizzes.find(q => q.id === quizId);
    if (quiz) {
      setSelectedQuizId(quizId);
      setEditQuiz(JSON.parse(JSON.stringify(quiz)));
    }
  };

  const handleSaveQuiz = async () => {
    if (!editQuiz || !selectedQuizId) return;
    setSaving(true);
    try {
      const { id, ...data } = editQuiz;
      await saveQuiz(selectedQuizId, data);
      await refreshData();
      showStatus('Quiz saved successfully!');
    } catch (err) {
      showStatus('Error saving quiz: ' + err.message);
    }
    setSaving(false);
  };

  const handleCreateQuiz = async () => {
    if (!newQuizForm.id.trim()) return;
    setSaving(true);
    try {
      const quizData = {
        title: { en: newQuizForm.titleEn, es: newQuizForm.titleEs },
        description: { en: newQuizForm.descEn, es: newQuizForm.descEs },
        icon: newQuizForm.icon || '📝',
        category: newQuizForm.category,
        en: [],
        es: []
      };
      await createQuiz(newQuizForm.id.trim(), quizData);
      await refreshData();
      setShowNewQuiz(false);
      setNewQuizForm({ id: '', titleEn: '', titleEs: '', descEn: '', descEs: '', icon: '', category: 'knowledge' });
      showStatus('Quiz created successfully!');
    } catch (err) {
      showStatus('Error creating quiz: ' + err.message);
    }
    setSaving(false);
  };

  const handleDeleteQuiz = async (quizId) => {
    if (!window.confirm(`Delete quiz "${quizId}"?`)) return;
    setSaving(true);
    try {
      await deleteQuiz(quizId);
      await refreshData();
      if (selectedQuizId === quizId) {
        setSelectedQuizId(null);
        setEditQuiz(null);
      }
      showStatus('Quiz deleted!');
    } catch (err) {
      showStatus('Error deleting quiz: ' + err.message);
    }
    setSaving(false);
  };

  // Question CRUD within a quiz
  const handleAddQuestion = (lang) => {
    if (!editQuiz) return;
    const newQ = {
      id: (editQuiz[lang]?.length || 0) + 1,
      question: '',
      options: ['', '', '', ''],
      correctIndex: 0,
      reference: ''
    };
    setEditQuiz({
      ...editQuiz,
      [lang]: [...(editQuiz[lang] || []), newQ]
    });
  };

  const handleUpdateQuestion = (lang, qIndex, field, value) => {
    const updated = { ...editQuiz };
    updated[lang] = [...updated[lang]];
    updated[lang][qIndex] = { ...updated[lang][qIndex], [field]: value };
    setEditQuiz(updated);
  };

  const handleUpdateOption = (lang, qIndex, optIndex, value) => {
    const updated = { ...editQuiz };
    updated[lang] = [...updated[lang]];
    const q = { ...updated[lang][qIndex] };
    q.options = [...q.options];
    q.options[optIndex] = value;
    updated[lang][qIndex] = q;
    setEditQuiz(updated);
  };

  const handleDeleteQuestion = (lang, qIndex) => {
    const updated = { ...editQuiz };
    updated[lang] = updated[lang].filter((_, i) => i !== qIndex);
    setEditQuiz(updated);
  };

  // --- Translations handlers ---
  const flattenObj = (obj, prefix = '') => {
    const result = {};
    for (const key of Object.keys(obj)) {
      const path = prefix ? `${prefix}.${key}` : key;
      if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
        Object.assign(result, flattenObj(obj[key], path));
      } else {
        result[path] = obj[key];
      }
    }
    return result;
  };

  const unflattenObj = (flat) => {
    const result = {};
    for (const [path, value] of Object.entries(flat)) {
      const keys = path.split('.');
      let cur = result;
      for (let i = 0; i < keys.length - 1; i++) {
        if (!(keys[i] in cur)) cur[keys[i]] = {};
        cur = cur[keys[i]];
      }
      cur[keys[keys.length - 1]] = value;
    }
    return result;
  };

  const handleSaveTranslations = async () => {
    setSaving(true);
    try {
      await saveTranslations(editLang, editTranslations);
      await refreshData();
      showStatus(`Translations (${editLang}) saved!`);
    } catch (err) {
      showStatus('Error saving translations: ' + err.message);
    }
    setSaving(false);
  };

  const handleUpdateTranslation = (path, value) => {
    const flat = flattenObj(editTranslations);
    flat[path] = value;
    setEditTranslations(unflattenObj(flat));
  };

  const handleAddLanguage = async () => {
    if (!newLang.trim() || translations[newLang.trim()]) return;
    setSaving(true);
    try {
      // Clone English translations as template
      const template = JSON.parse(JSON.stringify(translations.en || {}));
      await saveTranslations(newLang.trim(), template);
      await refreshData();
      setEditLang(newLang.trim());
      setNewLang('');
      showStatus(`Language "${newLang.trim()}" added!`);
    } catch (err) {
      showStatus('Error adding language: ' + err.message);
    }
    setSaving(false);
  };

  // --- Seed ---
  const handleSeed = async () => {
    if (!window.confirm('This will upload all current hardcoded data to Firestore. Continue?')) return;
    setSaving(true);
    try {
      const results = await seedAllData();
      await refreshData();
      showStatus(`Seed complete - Books: ${results.books ? 'OK' : 'FAIL'}, Quizzes: ${results.quizzes ? 'OK' : 'FAIL'}, Translations: ${results.translations ? 'OK' : 'FAIL'}`);
    } catch (err) {
      showStatus('Seed error: ' + err.message);
    }
    setSaving(false);
  };

  // --- Login gate ---
  if (!authenticated) {
    return (
      <div className="admin-container">
        <div className="admin-login">
          <h2>Admin Access</h2>
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="admin-input"
              autoFocus
            />
            <Button type="submit" variant="primary">Login</Button>
          </form>
          {status && <p className="admin-status error">{status}</p>}
          <Button onClick={onBack} variant="secondary" className="admin-back-btn">Back</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Admin Panel</h1>
        <div className="admin-header-actions">
          <Button onClick={handleSeed} variant="secondary" disabled={saving}>
            Seed Data
          </Button>
          <Button onClick={onBack} variant="secondary">Back to App</Button>
        </div>
      </header>

      {status && <div className="admin-status-bar">{status}</div>}

      <nav className="admin-tabs">
        {['books', 'quizzes', 'translations'].map(tab => (
          <button
            key={tab}
            className={`admin-tab ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </nav>

      <div className="admin-content">
        {/* ===== BOOKS TAB ===== */}
        {activeTab === 'books' && (
          <div className="admin-section">
            <h2>Old Testament Books ({editBooks.length})</h2>
            <div className="admin-books-list">
              {editBooks.map((book, index) => (
                <div key={index} className="admin-book-item">
                  <span className="admin-book-number">{index + 1}</span>
                  <span className="admin-book-name">{book}</span>
                  <div className="admin-book-actions">
                    <button onClick={() => handleMoveBook(index, -1)} disabled={index === 0}>↑</button>
                    <button onClick={() => handleMoveBook(index, 1)} disabled={index === editBooks.length - 1}>↓</button>
                    <button onClick={() => handleRemoveBook(index)} className="admin-delete-btn">✕</button>
                  </div>
                </div>
              ))}
            </div>
            <div className="admin-add-row">
              <input
                type="text"
                value={newBook}
                onChange={(e) => setNewBook(e.target.value)}
                placeholder="New book name"
                className="admin-input"
                onKeyDown={(e) => e.key === 'Enter' && handleAddBook()}
              />
              <Button onClick={handleAddBook} variant="secondary">Add</Button>
            </div>
            <Button onClick={handleSaveBooks} variant="primary" disabled={saving}>
              {saving ? 'Saving...' : 'Save Books'}
            </Button>
          </div>
        )}

        {/* ===== QUIZZES TAB ===== */}
        {activeTab === 'quizzes' && (
          <div className="admin-section">
            <h2>Quizzes</h2>
            <div className="admin-quiz-list">
              {quizzes.map(quiz => (
                <div key={quiz.id} className="admin-quiz-item">
                  <button
                    className={`admin-quiz-select ${selectedQuizId === quiz.id ? 'active' : ''}`}
                    onClick={() => handleSelectQuiz(quiz.id)}
                  >
                    <span>{quiz.icon || '📝'}</span>
                    <span>{quiz.title?.en || quiz.id}</span>
                    <span className="admin-quiz-count">
                      {quiz.en?.length || 0} Q
                    </span>
                  </button>
                  <button
                    className="admin-delete-btn"
                    onClick={() => handleDeleteQuiz(quiz.id)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>

            <Button onClick={() => setShowNewQuiz(!showNewQuiz)} variant="secondary">
              {showNewQuiz ? 'Cancel' : '+ New Quiz'}
            </Button>

            {showNewQuiz && (
              <div className="admin-new-quiz-form">
                <input
                  className="admin-input"
                  placeholder="Quiz ID (e.g., exodus-plagues)"
                  value={newQuizForm.id}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, id: e.target.value })}
                />
                <input
                  className="admin-input"
                  placeholder="Title (English)"
                  value={newQuizForm.titleEn}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, titleEn: e.target.value })}
                />
                <input
                  className="admin-input"
                  placeholder="Title (Spanish)"
                  value={newQuizForm.titleEs}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, titleEs: e.target.value })}
                />
                <input
                  className="admin-input"
                  placeholder="Description (English)"
                  value={newQuizForm.descEn}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, descEn: e.target.value })}
                />
                <input
                  className="admin-input"
                  placeholder="Description (Spanish)"
                  value={newQuizForm.descEs}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, descEs: e.target.value })}
                />
                <input
                  className="admin-input"
                  placeholder="Icon emoji"
                  value={newQuizForm.icon}
                  onChange={(e) => setNewQuizForm({ ...newQuizForm, icon: e.target.value })}
                />
                <Button onClick={handleCreateQuiz} variant="primary" disabled={saving}>
                  Create Quiz
                </Button>
              </div>
            )}

            {editQuiz && selectedQuizId && (
              <div className="admin-quiz-editor">
                <h3>Editing: {editQuiz.title?.en || selectedQuizId}</h3>

                <div className="admin-quiz-meta">
                  <label>
                    Title (EN):
                    <input
                      className="admin-input"
                      value={editQuiz.title?.en || ''}
                      onChange={(e) => setEditQuiz({
                        ...editQuiz,
                        title: { ...editQuiz.title, en: e.target.value }
                      })}
                    />
                  </label>
                  <label>
                    Title (ES):
                    <input
                      className="admin-input"
                      value={editQuiz.title?.es || ''}
                      onChange={(e) => setEditQuiz({
                        ...editQuiz,
                        title: { ...editQuiz.title, es: e.target.value }
                      })}
                    />
                  </label>
                  <label>
                    Icon:
                    <input
                      className="admin-input"
                      value={editQuiz.icon || ''}
                      onChange={(e) => setEditQuiz({ ...editQuiz, icon: e.target.value })}
                    />
                  </label>
                </div>

                {['en', 'es'].map(lang => (
                  <div key={lang} className="admin-questions-section">
                    <h4>Questions ({lang.toUpperCase()}) - {editQuiz[lang]?.length || 0}</h4>
                    {editQuiz[lang]?.map((q, qi) => (
                      <div key={qi} className="admin-question-card">
                        <div className="admin-question-header">
                          <span>Q{qi + 1}</span>
                          <button className="admin-delete-btn" onClick={() => handleDeleteQuestion(lang, qi)}>✕</button>
                        </div>
                        <textarea
                          className="admin-textarea"
                          value={q.question}
                          onChange={(e) => handleUpdateQuestion(lang, qi, 'question', e.target.value)}
                          placeholder="Question text"
                        />
                        {q.options.map((opt, oi) => (
                          <div key={oi} className="admin-option-row">
                            <input
                              type="radio"
                              name={`correct-${lang}-${qi}`}
                              checked={q.correctIndex === oi}
                              onChange={() => handleUpdateQuestion(lang, qi, 'correctIndex', oi)}
                            />
                            <input
                              className="admin-input"
                              value={opt}
                              onChange={(e) => handleUpdateOption(lang, qi, oi, e.target.value)}
                              placeholder={`Option ${String.fromCharCode(65 + oi)}`}
                            />
                          </div>
                        ))}
                        <input
                          className="admin-input"
                          value={q.reference || ''}
                          onChange={(e) => handleUpdateQuestion(lang, qi, 'reference', e.target.value)}
                          placeholder="Reference (e.g., Genesis 9:12)"
                        />
                      </div>
                    ))}
                    <Button onClick={() => handleAddQuestion(lang)} variant="secondary">
                      + Add Question ({lang.toUpperCase()})
                    </Button>
                  </div>
                ))}

                <Button onClick={handleSaveQuiz} variant="primary" disabled={saving}>
                  {saving ? 'Saving...' : 'Save Quiz'}
                </Button>
              </div>
            )}
          </div>
        )}

        {/* ===== TRANSLATIONS TAB ===== */}
        {activeTab === 'translations' && (
          <div className="admin-section">
            <h2>Translations</h2>

            <div className="admin-lang-selector">
              {Object.keys(translations).map(lang => (
                <button
                  key={lang}
                  className={`admin-tab ${editLang === lang ? 'active' : ''}`}
                  onClick={() => setEditLang(lang)}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>

            <div className="admin-add-lang">
              <input
                className="admin-input"
                value={newLang}
                onChange={(e) => setNewLang(e.target.value)}
                placeholder="New language code (e.g., fr)"
              />
              <Button onClick={handleAddLanguage} variant="secondary" disabled={saving}>
                Add Language
              </Button>
            </div>

            <div className="admin-translations-editor">
              {Object.entries(flattenObj(editTranslations)).map(([path, value]) => (
                <div key={path} className="admin-translation-row">
                  <label className="admin-translation-key">{path}</label>
                  {typeof value === 'string' && value.length > 60 ? (
                    <textarea
                      className="admin-textarea"
                      value={value}
                      onChange={(e) => handleUpdateTranslation(path, e.target.value)}
                    />
                  ) : (
                    <input
                      className="admin-input"
                      value={typeof value === 'string' ? value : JSON.stringify(value)}
                      onChange={(e) => handleUpdateTranslation(path, e.target.value)}
                    />
                  )}
                </div>
              ))}
            </div>

            <Button onClick={handleSaveTranslations} variant="primary" disabled={saving}>
              {saving ? 'Saving...' : `Save Translations (${editLang.toUpperCase()})`}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
