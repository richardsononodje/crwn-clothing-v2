import { async } from '@firebase/util';
import { initializeApp } from 'firebase/app';

// 93. Authenticating With Firebase
import {
   getAuth,
   signInWithPopup, 
   signInWithRedirect, 
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut
  } from 'firebase/auth';


  // 95. Setting Up User Documents

import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import { DocumentSnapshot } from "firebase/firestore";

// 93. Authenticating With Firebase

const firebaseConfig = {
  apiKey: "AIzaSyDM9HDT4wsRLw8xOYMIdllp2-K_vqbAV0Q",
  authDomain: "crown-clothing-rico.firebaseapp.com",
  projectId: "crown-clothing-rico",
  storageBucket: "crown-clothing-rico.appspot.com",
  messagingSenderId: "690508760523",
  appId: "1:690508760523:web:0dbc579780f93edaa9e24e"
};

// 93. Authenticating With Firebase

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const googleSignInWithPopUp = ()=> signInWithPopup(auth, provider);
export const googleSignInWithRedirect = ()=> signInWithRedirect (auth, provider);

// 95. Setting Up User Documents
export const dp = getFirestore();

export const creatUserFromAuth = async (userAuth, additionalInfo = {})=>{
  const userDocRef = doc (dp, 'users', userAuth.uid)

  console.log (userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  console.log (userSnapShot);
  console.log (userSnapShot.exists());


  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();


    try {
      await setDoc (
        userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInfo
        }
        
      );
    }
    catch {
      console.log ('there was an error')
    }
  }
  return userDocRef;
};

export const authCreateUserWithEmailAndPassword = async (email, password)=>{

  if(!email ||!password ) return;

 return await createUserWithEmailAndPassword (auth, email, password);
}

// sign-in with email and password

export const authSignInwithemailAndPassword = async(email, password)=>{

  if (!email || !password) return;

  return await signInWithEmailAndPassword (auth, email, password);

}


export const SignOutUser =()=> signOut(auth)


