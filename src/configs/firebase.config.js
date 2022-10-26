// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1bB87r3vh04H2GfGCfU_YiPYLzhzHfig",
  authDomain: "learning-cse-a8e31.firebaseapp.com",
  projectId: "learning-cse-a8e31",
  storageBucket: "learning-cse-a8e31.appspot.com",
  messagingSenderId: "1024048970521",
  appId: "1:1024048970521:web:f49a15649c9bd3af33e388"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;