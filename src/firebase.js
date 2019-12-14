import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDQEZBHr6I040X8Fi70pa4snvTIg2vhOaY",
  authDomain: "tai-reactjs-511d7.firebaseapp.com",
  databaseURL: "https://tai-reactjs-511d7.firebaseio.com",
  projectId: "tai-reactjs-511d7",
  storageBucket: "tai-reactjs-511d7.appspot.com",
  messagingSenderId: "120898054441",
  appId: "1:120898054441:web:6bbdf2d468dd685bc8af38",
  measurementId: "G-4BDD2VSGF1"
};

function firebaseInit() {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
}

export default firebaseInit
