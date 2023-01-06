// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQyMYo3S7zzcNkOY1mm7fVT7VlIFz3jlM",
  authDomain: "react-autch.firebaseapp.com",
  projectId: "react-autch",
  storageBucket: "react-autch.appspot.com",
  messagingSenderId: "528309771747",
  appId: "1:528309771747:web:ba7d65ede06a55864d54d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);