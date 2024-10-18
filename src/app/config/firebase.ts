import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZhlBJRqfhkKNa83HO5Huw-_G0izFaMP8",
  authDomain: "revents-2023-fe3fe.firebaseapp.com",
  projectId: "revents-2023-fe3fe",
  storageBucket: "revents-2023-fe3fe.appspot.com",
  messagingSenderId: "44342985781",
  appId: "1:44342985781:web:8084767f55e25720791d7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);