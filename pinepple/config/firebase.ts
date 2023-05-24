// Import the functions you need from the SDKs you need
import  firebase, { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuBf-oxzREHnzHleE_2lQiweyCU7WileU",
  authDomain: "fir-pineapple-feba5.firebaseapp.com",
  projectId: "fir-pineapple-feba5",
  storageBucket: "fir-pineapple-feba5.appspot.com",
  messagingSenderId: "537524425109",
  appId: "1:537524425109:web:a9b613bcac31ecf41ea69c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
// export const firestore = getFirestore();
export const db = getFirestore(app);

