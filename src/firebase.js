// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFsHXJDnbU8bw3jvpICqZPQNNASDxj7S8",
  authDomain: "react-cart-e3d79.firebaseapp.com",
  projectId: "react-cart-e3d79",
  storageBucket: "react-cart-e3d79.appspot.com",
  messagingSenderId: "201808556435",
  appId: "1:201808556435:web:8c0745f8388b25a0f17866",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const auth = getAuth(app);
export const db = getFirestore(app);
