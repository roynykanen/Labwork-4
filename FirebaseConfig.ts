// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvH-y_NGF0Nn4MONfu0P9fuLEpGU1AgUs",
  authDomain: "labwork-4-2e9ea.firebaseapp.com",
  projectId: "labwork-4-2e9ea",
  storageBucket: "labwork-4-2e9ea.firebasestorage.app",
  messagingSenderId: "57568473002",
  appId: "1:57568473002:web:88a7e46125689ec93b45d3",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
