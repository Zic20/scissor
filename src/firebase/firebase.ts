// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDrB4wIxTGeZMPrNg2vxKNr8T0ZbUOQ7w",
  authDomain: "shorts-4fc4c.firebaseapp.com",
  projectId: "shorts-4fc4c",
  storageBucket: "shorts-4fc4c.appspot.com",
  messagingSenderId: "350888801052",
  appId: "1:350888801052:web:b891c0011fc26165ce00d9",
  measurementId: "G-T4HGWJQGNX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app };