// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCfGcilMqHUDaLA0IDK8auZD1-axf0T_EU",
  authDomain: "digital-innovation-800b4.firebaseapp.com",
  projectId: "digital-innovation-800b4",
  storageBucket: "digital-innovation-800b4.firebasestorage.app",
  messagingSenderId: "514430166073",
  appId: "1:514430166073:web:2b28db9aa10bcbb40a19e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

