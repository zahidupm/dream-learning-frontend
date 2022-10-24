// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEgL-rT4pNg38Bf9TH1r9JOV1d_Tayb78",
  authDomain: "learning-platform-36621.firebaseapp.com",
  projectId: "learning-platform-36621",
  storageBucket: "learning-platform-36621.appspot.com",
  messagingSenderId: "685528820",
  appId: "1:685528820:web:d3d91d9a4c774df1c9b0a1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;