import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBSwq8mE9boEsilpSmb20R5744osBzkhFk",
    authDomain: "crwn-db-fa0ff.firebaseapp.com",
    databaseURL: "https://crwn-db-fa0ff.firebaseio.com",
    projectId: "crwn-db-fa0ff",
    storageBucket: "crwn-db-fa0ff.appspot.com",
    messagingSenderId: "274655306292",
    appId: "1:274655306292:web:d1cdc86a35009c79a6a061",
    measurementId: "G-J44HT3TJ0L"
  }

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;