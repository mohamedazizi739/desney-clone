import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEw6Qb7rnGw7fQzFoPdI75O0JQB2-utnI",
  authDomain: "desney-clone-b90b2.firebaseapp.com",
  projectId: "desney-clone-b90b2",
  storageBucket: "desney-clone-b90b2.appspot.com",
  messagingSenderId: "487126755573",
  appId: "1:487126755573:web:500da9d6d750a4cf9e3dbc",
  measurementId: "G-B4ZL9FEZ0H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
