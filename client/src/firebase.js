// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-7c34b.firebaseapp.com",
  projectId: "mern-estate-7c34b",
  storageBucket: "mern-estate-7c34b.appspot.com",
  messagingSenderId: "949371676859",
  appId: "1:949371676859:web:1a7170ddb69547dedfa19e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);