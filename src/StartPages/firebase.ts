import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyChZaJ_EyldVzP0tJdkbYuTqK4MOLVlKhE",
  authDomain: "jobinterviewsite-b37e3.firebaseapp.com",
  projectId: "jobinterviewsite-b37e3",
  storageBucket: "jobinterviewsite-b37e3.appspot.com", // Fixed the incorrect domain
  messagingSenderId: "918060926180",
  appId: "1:918060926180:web:c829488df15201bf0a98f1",
  measurementId: "G-55PTKCK8R1"
};

const app = initializeApp(firebaseConfig); // Initialize Firebase
export const auth = getAuth(app); // Initialize Firebase Authentication
export const database = getDatabase(app); // Initialize Firebase Realtime Database