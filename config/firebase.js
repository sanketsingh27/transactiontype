import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2K-M4b6c_PkudqOisbsT2CHN2bR75Lk4",
  authDomain: "next-auth-f175f.firebaseapp.com",
  projectId: "next-auth-f175f",
  storageBucket: "next-auth-f175f.appspot.com",
  messagingSenderId: "1096595844063",
  appId: "1:1096595844063:web:bc3b26aa144d5bb973f26a",
  measurementId: "G-GB5BG63QB3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
