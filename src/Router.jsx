import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { DataProvider } from './contexts/DataContext';
import { I18nProvider } from './i18n/I18nContext';
import LanguageSelector from './components/common/LanguageSelector';
import App from './App';
import RussianSection from './pages/RussianSection';
import './styles/App.css';

const Router = () => (
  <BrowserRouter basename="/ITIApp">
    <AuthProvider>
      <DataProvider>
        <I18nProvider>
          <div className="app">
            <div className="app-language-selector">
              <LanguageSelector />
            </div>
            <Routes>
              {/* German moved to its own app: https://danielchioro.github.io/deutsch/ */}
              <Route path="/russian/*" element={<RussianSection />} />
              <Route path="/*" element={<App />} />
            </Routes>
          </div>
        </I18nProvider>
      </DataProvider>
    </AuthProvider>
  </BrowserRouter>
);

export default Router;
