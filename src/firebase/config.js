// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB_Clom3iW4UMY3XlVNqOTxb9ML6I8mVHQ",
    authDomain: "personal-projects-f6e26.firebaseapp.com",
    projectId: "personal-projects-f6e26",
    storageBucket: "personal-projects-f6e26.appspot.com",
    messagingSenderId: "407924092302",
    appId: "1:407924092302:web:151cee6ebf10e2f17e48df"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const FirebaseDB = getFirestore(FirebaseApp)