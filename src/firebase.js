// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjm-GAAXHpUXn7RPA8XbL9IAheyw6focA",
  authDomain: "fb-crud-react-v2-3954e.firebaseapp.com",
  projectId: "fb-crud-react-v2-3954e",
  storageBucket: "fb-crud-react-v2-3954e.appspot.com",
  messagingSenderId: "28773942877",
  appId: "1:28773942877:web:b03a5dd736fb7443592fb4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);