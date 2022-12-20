import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
    apiKey: "AIzaSyBglM2pr3P8i09rt5rfZf8eFmLp_nDC3XE",
    authDomain: "blog-72ff7.firebaseapp.com",
    projectId: "blog-72ff7",
    storageBucket: "blog-72ff7.appspot.com",
    messagingSenderId: "570679362583",
    appId: "1:570679362583:web:46064d80dfafb3675ec852",
    measurementId: "G-YYB3KB8YNE"
  };

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db =getFirestore(app)
const database= getDatabase(app);
export {auth,app,db,database}