import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDoYXrbEdBLf9evXOUKb2JoPHbUncvZUAE",
  authDomain: "login-e0c81.firebaseapp.com",
  projectId: "login-e0c81",
  storageBucket: "login-e0c81.appspot.com",
  messagingSenderId: "497358508078",
  appId: "1:497358508078:web:7fce464c8c93e153688fbf",
  measurementId: "G-ZETGDWCPXE"
};
  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
   //export const db = getFirestore(app)