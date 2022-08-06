import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGNbAyAKtNUvToFNZHs9wY5FJedkbsvss",
  authDomain: "monkey-blogging-dd1ec.firebaseapp.com",
  projectId: "monkey-blogging-dd1ec",
  storageBucket: "monkey-blogging-dd1ec.appspot.com",
  messagingSenderId: "726166094981",
  appId: "1:726166094981:web:6e06a4135701debd2e55ec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
