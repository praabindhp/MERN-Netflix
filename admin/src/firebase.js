import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAnM67QCdesNqEfv0AFXEtAeqY9FrWzYOM",
  authDomain: "mern-netflix-59716.firebaseapp.com",
  projectId: "mern-netflix-59716",
  storageBucket: "mern-netflix-59716.appspot.com",
  messagingSenderId: "1058839034110",
  appId: "1:1058839034110:web:946b0ab542905763e8cdaf",
  measurementId: "G-5JVF1P5B7S"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;
