// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAENMMuHojzChnlRCjCR-1wtZDMf130KWo",
  authDomain: "coldcalls-208a6.firebaseapp.com",
  projectId: "coldcalls-208a6",
  storageBucket: "coldcalls-208a6.appspot.com",
  messagingSenderId: "722065440430",
  appId: "1:722065440430:web:5d5aeceaed9aaa2151773f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }