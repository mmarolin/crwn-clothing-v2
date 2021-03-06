import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  TwitterAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbwE-TnWbQAyi5JWmu_L_ewIiUQujsodA",
  authDomain: "c-clothing-v2.firebaseapp.com",
  projectId: "c-clothing-v2",
  storageBucket: "c-clothing-v2.appspot.com",
  messagingSenderId: "764467968336",
  appId: "1:764467968336:web:650cb7b21af56d5cc05455",
  measurementId: "G-DT3KDS7BZC",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

twitterProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithTwitterPopup = () =>
  signInWithPopup(auth, twitterProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (err) {
      console.log("error: ", err);
    }
  }
  return userDocRef;
};
