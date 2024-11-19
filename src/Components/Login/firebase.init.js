// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv4M3IEp0siSb1QxunxZ-xqGgmOfRjAv8",
  authDomain: "dream-farm-12eac.firebaseapp.com",
  projectId: "dream-farm-12eac",
  storageBucket: "dream-farm-12eac.firebasestorage.app",
  messagingSenderId: "254587978390",
  appId: "1:254587978390:web:072f062cff2d828a6238b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);;

export default auth;