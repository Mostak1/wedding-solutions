import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD2VP4F3Z0rwZe_ygjQmnjxOr4KYDI6Rr0",
  authDomain: "wedding-solutions-6e2d4.firebaseapp.com",
  projectId: "wedding-solutions-6e2d4",
  storageBucket: "wedding-solutions-6e2d4.appspot.com",
  messagingSenderId: "417299750822",
  appId: "1:417299750822:web:63e2d85c57d2b81f483967",
  measurementId: "G-25GRDEGDP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;