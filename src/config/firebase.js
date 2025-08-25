// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAVwmptd_Kfk75LNUrmXc7Rld60eCw84Bc",
    authDomain: "crud-f3183.firebaseapp.com",
    databaseURL: "https://crud-f3183-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "crud-f3183",
    storageBucket: "crud-f3183.appspot.com",
    messagingSenderId: "329048335507",
    appId: "1:329048335507:web:03bd4ebda53268d5ac1966"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);