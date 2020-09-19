import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =  {
    apiKey: "AIzaSyAWaOA9N3oj3XefgNfXRA0NkFyy_32xGbM",
    authDomain: "ecommerce-website-bfd22.firebaseapp.com",
    databaseURL: "https://ecommerce-website-bfd22.firebaseio.com",
    projectId: "ecommerce-website-bfd22",
    storageBucket: "ecommerce-website-bfd22.appspot.com",
    messagingSenderId: "165125023099",
    appId: "1:165125023099:web:2ec6dbca64a0e60a6fc9de",
    measurementId: "G-XYBZDHQ7D5"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;