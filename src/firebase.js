// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD1_yik62lSRRARzPPtCo2QDFKNEEgeJSk",
  authDomain: "react-authentication-668ba.firebaseapp.com",
  projectId: "react-authentication-668ba",
  storageBucket: "react-authentication-668ba.appspot.com",
  messagingSenderId: "630839117179",
  appId: "1:630839117179:web:2cbaaf160c5dd8035629de",
  measurementId: "G-DE4PKZ1EWN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
