import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAmogzoyPpn1ZjdBMScSt3VWWiGQ1_KiV4",
  authDomain: "crwn-db-e446d.firebaseapp.com",
  projectId: "crwn-db-e446d",
  storageBucket: "crwn-db-e446d.appspot.com",
  messagingSenderId: "932217290091",
  appId: "1:932217290091:web:c36101f8757770c260e02e",
  measurementId: "G-7LJ00W6DKF",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
