// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7pW48wHy4jknGBTdkNFXNClRnVKxWi_s",
  authDomain: "auth-integration-5431a.firebaseapp.com",
  projectId: "auth-integration-5431a",
  storageBucket: "auth-integration-5431a.firebasestorage.app",
  messagingSenderId: "663814823586",
  appId: "1:663814823586:web:a813e01a2649a485a701fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);