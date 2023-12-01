// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCFinjd_8JcX7JfT9mPm75AtgkfgOeyD0",
  authDomain: "react-disney-plus-app-9de4e.firebaseapp.com",
  projectId: "react-disney-plus-app-9de4e",
  storageBucket: "react-disney-plus-app-9de4e.appspot.com",
  messagingSenderId: "1095082391516",
  appId: "1:1095082391516:web:bfa0563a93d1a1dd8ec119",
  measurementId: "G-FC36E16BLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;