 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoyd2fXcpSTq6ZhJsLP8ZBgmDLxmntq0o",
  authDomain: "appreact-f7905.firebaseapp.com",
  projectId: "appreact-f7905",
  storageBucket: "appreact-f7905.appspot.com",
  messagingSenderId: "100600412173",
  appId: "1:100600412173:web:3a590dd3e13f8c5f6c7d44"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
