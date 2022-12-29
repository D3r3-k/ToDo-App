// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA_R_Xijy4HP8frTB_04GtAmU9euNoBgFM",
    authDomain: "levelup-9f9a8.firebaseapp.com",
    projectId: "levelup-9f9a8",
    storageBucket: "levelup-9f9a8.appspot.com",
    messagingSenderId: "565324358562",
    appId: "1:565324358562:web:5fccf7da5272fb6c74c8fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
