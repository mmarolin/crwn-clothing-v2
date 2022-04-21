import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

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

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
