
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDDrB4wIxTGeZMPrNg2vxKNr8T0ZbUOQ7w",
  authDomain: "shorts-4fc4c.firebaseapp.com",
  projectId: "shorts-4fc4c",
  storageBucket: "shorts-4fc4c.appspot.com",
  messagingSenderId: "350888801052",
  appId: "1:350888801052:web:b891c0011fc26165ce00d9",
  measurementId: "G-T4HGWJQGNX",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, analytics, app };