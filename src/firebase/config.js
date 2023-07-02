// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAH8_DxRbKHM8P-spfCyLjjxDRRkRMGqw",
  authDomain: "e-comm-react-max.firebaseapp.com",
  projectId: "e-comm-react-max",
  storageBucket: "e-comm-react-max.appspot.com",
  messagingSenderId: "128699633822",
  appId: "1:128699633822:web:3112c29818a31e5759ab8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)