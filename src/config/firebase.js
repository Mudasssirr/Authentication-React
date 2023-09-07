import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyANOltrRKlbn7wuhwa7LigZ3GkJZizXGjY",
    authDomain: "login-react-16bb0.firebaseapp.com",
    projectId: "login-react-16bb0",
    storageBucket: "login-react-16bb0.appspot.com",
    messagingSenderId: "770203291788",
    appId: "1:770203291788:web:aa1c5acf645a79cc78eba9",
    measurementId: "G-RRWM3HJDDN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth, createUserWithEmailAndPassword, signInWithEmailAndPassword }; 