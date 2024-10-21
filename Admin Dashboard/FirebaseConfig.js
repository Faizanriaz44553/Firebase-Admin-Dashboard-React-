
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBAxAZAQO0Mc58mnaze5IV4Qv5vEMOJT94",
  authDomain: "react-dashboard-fab98.firebaseapp.com",
  projectId: "react-dashboard-fab98",
  storageBucket: "react-dashboard-fab98.appspot.com",
  messagingSenderId: "53102752758",
  appId: "1:53102752758:web:a53f62a8e27316dc0ccdd7",
  measurementId: "G-PR8390WS6V"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{auth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut}


