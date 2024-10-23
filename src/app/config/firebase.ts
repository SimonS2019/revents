import { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";
import { ReCaptchaV3Provider, initializeAppCheck } from "firebase/app-check";

declare global {
  // eslint-disable-next-line no-var
  var FIREBASE_APPCHECK_DEBUG_TOKEN: boolean | string | undefined;
}

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "revents-2023-fe3fe.firebaseapp.com",
  projectId: "revents-2023-fe3fe",
  databaseURL:
    "https://revents-2023-fe3fe-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "revents-2023-fe3fe.appspot.com",
  messagingSenderId: "44342985781",
  appId: "1:44342985781:web:8084767f55e25720791d7c",
};

if (import.meta.env.DEV) {
  self.FIREBASE_APPCHECK_DEBUG_TOKEN = true;
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

initializeAppCheck(app, {
  provider: new ReCaptchaV3Provider("6LdvRmoqAAAAAL1lXlag2tKYSnbI13ZdXKjQTKik"),
  isTokenAutoRefreshEnabled: true,
});

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const fb = getDatabase(app);
