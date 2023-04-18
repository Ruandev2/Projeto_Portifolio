
import { initializeApp } from "firebase/app";
import	{getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWfnSmGGMkC_aK5Fu4VyGjbIf66iY3flU",
  authDomain: "portfolio-30cc9.firebaseapp.com",
  projectId: "portfolio-30cc9",
  storageBucket: "portfolio-30cc9.appspot.com",
  messagingSenderId: "240803951121",
  appId: "1:240803951121:web:355fda4c5d88b7ffd337b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export{db};