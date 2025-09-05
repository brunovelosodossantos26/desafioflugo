import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAc3oOAb0oBkeazDpeHHwUqxntPexcf5ug",
  authDomain: "flugo-bca96.firebaseapp.com",
  projectId: "flugo-bca96",
  storageBucket: "flugo-bca96.firebasestorage.app",
  messagingSenderId: "674184112091",
  appId: "1:674184112091:web:25f692def0a90ef87669fe",
  measurementId: "G-7NP5F91XKW",
};

const fireBaseApp = initializeApp(firebaseConfig);

const db = getFirestore(fireBaseApp);

export { db };
