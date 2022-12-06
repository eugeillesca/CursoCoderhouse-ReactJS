// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHw10W4xL_eykXg8TmtkITZAV1TTjbUAw",
  authDomain: "ecommercedb-694ce.firebaseapp.com",
  projectId: "ecommercedb-694ce",
  storageBucket: "ecommercedb-694ce.appspot.com",
  messagingSenderId: "339783964689",
  appId: "1:339783964689:web:95674394a81c57442a39b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);