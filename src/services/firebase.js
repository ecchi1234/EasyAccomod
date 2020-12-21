// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase';

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAtU6hx6QNEMNsRRcCXpSTuukk-1PeY0sI",
    authDomain: "easy-accommod.firebaseapp.com",
    projectId: "easy-accommod",
    databaseURL: "https://easy-accommod-default-rtdb.firebaseio.com/",
    storageBucket: "easy-accommod.appspot.com",
    messagingSenderId: "989682746699",
    appId: "1:989682746699:web:556a04f9e555e048e294ce"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Get a reference to the database service
  var database = firebase.database();