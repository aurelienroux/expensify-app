import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDz32J-Qj6-LgLXan5JgYNg9D20UZzZt0",
  authDomain: "expensify-9deae.firebaseapp.com",
  databaseURL: "https://expensify-9deae.firebaseio.com",
  projectId: "expensify-9deae",
  storageBucket: "expensify-9deae.appspot.com",
  messagingSenderId: "867802824954",
  appId: "1:867802824954:web:caf5e2ce5bca605b"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };