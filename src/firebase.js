import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyClzs3qVtZ-i0OG5LsiQiqB-G1qMCzRBcs",
  authDomain: "bike-log-8f1e8.firebaseapp.com",
  databaseURL: "https://bike-log-8f1e8-default-rtdb.firebaseio.com",
  projectId: "bike-log-8f1e8",
  storageBucket: "bike-log-8f1e8.appspot.com",
  messagingSenderId: "139771047939",
  appId: "1:139771047939:web:1e1aea9b60f730da629e36"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)