// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3OYmvWxFNU3DFN16ePzyVPGE1ZZK9XF8",
  authDomain: "aiinterviewplatform-eb9d3.firebaseapp.com",
  projectId: "aiinterviewplatform-eb9d3",
  storageBucket: "aiinterviewplatform-eb9d3.firebasestorage.app",
  messagingSenderId: "399143635601",
  appId: "1:399143635601:web:3a1c00d8c45f2c9ca28d30",
  measurementId: "G-S451H8175C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);