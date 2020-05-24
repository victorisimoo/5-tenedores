import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCbvIgl9-olgTOIs5bzbqskPqZ5XnnzSL8",
  authDomain: "tenedores-48a69.firebaseapp.com",
  databaseURL: "https://tenedores-48a69.firebaseio.com",
  projectId: "tenedores-48a69",
  storageBucket: "tenedores-48a69.appspot.com",
  messagingSenderId: "37558744214",
  appId: "1:37558744214:web:78cedc4a3af75092d6feb7",
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
