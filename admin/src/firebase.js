import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBaQ0szf_gSleqdpEaWqew1luHeRrCiO30",
  authDomain: "netflix-37481.firebaseapp.com",
  projectId: "netflix-37481",
  storageBucket: "netflix-37481.appspot.com",
  messagingSenderId: "1043776395259",
  appId: "1:1043776395259:web:f75c0ae440197d241bdd5e",
  measurementId: "G-WEWKHPG223"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
