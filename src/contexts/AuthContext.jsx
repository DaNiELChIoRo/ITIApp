import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut as firebaseSignOut
} from 'firebase/auth';
import { auth } from '../firebase/config';

const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(!!auth);

  useEffect(() => {
    if (!auth) return;
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const signInWithEmail = (email, password) => {
    if (!auth) throw new Error('Firebase is not configured. Set VITE_FIREBASE_* env vars.');
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    if (!auth) throw new Error('Firebase is not configured. Set VITE_FIREBASE_* env vars.');
    return signInWithPopup(auth, googleProvider);
  };

  const signOut = () => {
    if (!auth) return Promise.resolve();
    return firebaseSignOut(auth);
  };

  return (
    <AuthContext.Provider value={{ user, loading, signInWithEmail, signInWithGoogle, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
