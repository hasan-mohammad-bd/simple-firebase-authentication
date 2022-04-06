// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK7CYZLUlPxEuSVYXJbX0iCZ4vxLLTad4",
  authDomain: "simple-firebase-authenti-d9951.firebaseapp.com",
  projectId: "simple-firebase-authenti-d9951",
  storageBucket: "simple-firebase-authenti-d9951.appspot.com",
  messagingSenderId: "1055585642053",
  appId: "1:1055585642053:web:3f63177ccb26623a31e52c",
  measurementId: "G-VMJTDZQWEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app