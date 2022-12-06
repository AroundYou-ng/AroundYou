// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'


var firebaseConfig = {
  apiKey: process.env.NEXT_FIREBASE_KEY,
  authDomain: "around-you-7818a.firebaseapp.com",
  projectId: "around-you-7818a",
  storageBucket: "around-you-7818a.appspot.com",
  messagingSenderId: "956668286086",
  appId: "1:956668286086:web:f1a3647cb9662d8ec36d07",
  measurementId: "G-RG3E46N737"
};


const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

export const store = getFirestore(firebaseApp)

export { db }
