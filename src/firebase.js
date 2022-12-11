import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, onAuthStateChanged } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCrW6Y_aD1e3fZcrZt1dA-_Th6xB6n2kC4",
  authDomain: "twitter-clone-fd0f9.firebaseapp.com",
  projectId: "twitter-clone-fd0f9",
  storageBucket: "twitter-clone-fd0f9.appspot.com",
  messagingSenderId: "164362498404",
  appId: "1:164362498404:web:c83a83c3e0e9817b8a4a71",
  measurementId: "G-S4FPPQCHDH"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
onAuthStateChanged(auth, user => {
  // Check for user status
});

// Use these for db & auth
const db = firebaseApp.firestore();



export default db;