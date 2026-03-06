import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA7sl9Kcocfztv8xnor7fvlvyQFvnDjcmA",
  authDomain: "clickcart-4017d.firebaseapp.com",
  projectId: "clickcart-4017d",
  storageBucket: "clickcart-4017d.firebasestorage.app",
  messagingSenderId: "246206264471",
  appId: "1:246206264471:web:9e0cf80c50b85a6cf525d2",
  
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const provider = new GoogleAuthProvider();
