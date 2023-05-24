import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAnRUtbGCwBIBTc0YmYmdXcZ5bjf2fO3As",
    authDomain: "netflix-2e2bc.firebaseapp.com",
    projectId: "netflix-2e2bc",
    storageBucket: "netflix-2e2bc.appspot.com",
    messagingSenderId: "231467084982",
    appId: "1:231467084982:web:1b3f975f182f3fe5528a17"
};

initializeApp(firebaseConfig);

const auth = getAuth();

export {
    auth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
    signOut, onAuthStateChanged
};
