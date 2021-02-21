import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyBtmP3udw1ednwWnrGrv_qnFLjT-wkygfo",
  authDomain: "booksanta-d734f.firebaseapp.com",
  projectId: "booksanta-d734f",
  storageBucket: "booksanta-d734f.appspot.com",
  messagingSenderId: "698483179263",
  appId: "1:698483179263:web:26b224a6522c4e855a16ca"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();




