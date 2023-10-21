// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6TY_WUb60rf40CldRfFrniczI5Hf2v20",
    authDomain: "automotive-authentication.firebaseapp.com",
    projectId: "automotive-authentication",
    storageBucket: "automotive-authentication.appspot.com",
    messagingSenderId: "793891010541",
    appId: "1:793891010541:web:a1241449061e6a8f8499e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app