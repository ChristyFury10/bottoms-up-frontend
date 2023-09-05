
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDdv_9jCBvio3zxRvwrXx6cbtal6gWPvno",
  authDomain: "bottomsupfrontend.firebaseapp.com",
  projectId: "bottomsupfrontend",
  storageBucket: "bottomsupfrontend.appspot.com",
  messagingSenderId: "620394864109",
  appId: "1:620394864109:web:b4887633e730559d4cdbe4",
  measurementId: "G-NEKNSY7K44"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);