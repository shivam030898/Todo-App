import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAq9AeBV88GLbFY-rp4hVXqkY5zEzkvX64",
  authDomain: "todo-app-77599.firebaseapp.com",
  projectId: "todo-app-77599",
  storageBucket: "todo-app-77599.appspot.com",
  messagingSenderId: "897065525695",
  appId: "1:897065525695:web:30063f3a5ff47f6423010a",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
