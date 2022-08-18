// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjAskIWqfjmlqjc9uSfnIKpRq9t4KVWyM",
  authDomain: "fir-auth-yt-173df.firebaseapp.com",
  projectId: "fir-auth-yt-173df",
  storageBucket: "fir-auth-yt-173df.appspot.com",
  messagingSenderId: "512338062371",
  appId: "1:512338062371:web:5aebdc5c16834184eb9596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;