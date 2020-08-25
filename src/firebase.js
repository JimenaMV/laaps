import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuDCG1pjGlbEGmfkjgfMAvLhSqUF5Rj5Y",
  authDomain: "laaps-9b86f.firebaseapp.com",
  databaseURL: "https://laaps-9b86f.firebaseio.com",
  projectId: "laaps-9b86f",
  storageBucket: "laaps-9b86f.appspot.com",
  messagingSenderId: "1069111076896",
  appId: "1:1069111076896:web:16470eca4dcc6f212f3445",
};
// Initialize Firebase
/* firebase.initializeApp(firebaseConfig); */
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
