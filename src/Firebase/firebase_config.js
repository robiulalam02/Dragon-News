import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyChWcrGLmU4oaXysJB9d_GmTbijze-FUhI",
  authDomain: "dragon-news-auth-b678e.firebaseapp.com",
  projectId: "dragon-news-auth-b678e",
  storageBucket: "dragon-news-auth-b678e.firebasestorage.app",
  messagingSenderId: "247067680227",
  appId: "1:247067680227:web:bc9d9133d32ea9198214d6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);