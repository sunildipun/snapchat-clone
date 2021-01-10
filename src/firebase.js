import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDOrJe991J0OtnDy28ZC6zKO9qXZdxfB0g",
    authDomain: "snapchat-clone-6ee07.firebaseapp.com",
    projectId: "snapchat-clone-6ee07",
    storageBucket: "snapchat-clone-6ee07.appspot.com",
    messagingSenderId: "188916986634",
    appId: "1:188916986634:web:38d2f69869e916f62f00f3"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
