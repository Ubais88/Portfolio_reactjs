import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const APIKEY = process.env.REACT_APP_APIKEY;
const AUTHDOMAIN = process.env.REACT_APP_AUTHDOMAIN;
const PROJECTID = process.env.REACT_APP_PROJECTID;
const STORAGEBUCKET = process.env.REACT_APP_STORAGEBUCKET;
const SENDERID = process.env.REACT_APP_SENDERID;
const APPID = process.env.REACT_APP_APPID;


const firebaseConfig = {
  apiKey: APIKEY,
  authDomain: AUTHDOMAIN,
  projectId: PROJECTID,
  storageBucket: STORAGEBUCKET,
  messagingSenderId: SENDERID,
  appId: APPID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
