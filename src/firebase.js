// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { collection, addDoc, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfZb2p5r1KuU8f0WXoz_gIPnMs3rJ_ask",
  authDomain: "portfolio-684f1.firebaseapp.com",
  projectId: "portfolio-684f1",
  storageBucket: "portfolio-684f1.appspot.com",
  messagingSenderId: "436554588918",
  appId: "1:436554588918:web:45ec70e0b8e07d1e7e42d7",
  measurementId: "G-T7MDDETPHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

const firebase = {
  storage,
  db,
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  collection,
  addDoc,
  getDocs,
};

export default firebase;
