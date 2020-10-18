import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAWaOA9N3oj3XefgNfXRA0NkFyy_32xGbM',
  authDomain: 'ecommerce-website-bfd22.firebaseapp.com',
  databaseURL: 'https://ecommerce-website-bfd22.firebaseio.com',
  projectId: 'ecommerce-website-bfd22',
  storageBucket: 'ecommerce-website-bfd22.appspot.com',
  messagingSenderId: '165125023099',
  appId: '1:165125023099:web:2ec6dbca64a0e60a6fc9de',
  measurementId: 'G-XYBZDHQ7D5',
};

export const createUserProfileDocument = async (userAuth, addtionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(snapShot)
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...addtionalData,
    });
  } catch (error) {
    console.log('error creating users', error.messages);
  }
}
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
