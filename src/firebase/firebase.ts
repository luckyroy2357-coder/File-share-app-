// Firebase stub - replace with your config and enable the needed services.
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // TODO: paste your Firebase config here
};

export const initFirebase = () => {
  try {
    const app = initializeApp(firebaseConfig as any);
    return { auth: getAuth(app), db: getFirestore(app), storage: getStorage(app) };
  } catch (e) {
    console.warn('Firebase not configured', e);
    return null;
  }
};
