import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLlCaPgDVLWKMr3Vo6WK-gxYtASvynyIE",
  authDomain: "weddingrsvp-4bac0.firebaseapp.com",
  projectId: "weddingrsvp-4bac0",
  storageBucket: "weddingrsvp-4bac0.appspot.com",
  messagingSenderId: "851746375659",
  appId: "1:851746375659:web:6e83c8db939e6d70173bae",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
