import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider } from 'firebase/auth';


import { getFirestore, doc, getDoc, setDoc} from 'firebase/firestore';
import { DocumentSnapshot } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM9HDT4wsRLw8xOYMIdllp2-K_vqbAV0Q",
  authDomain: "crown-clothing-rico.firebaseapp.com",
  projectId: "crown-clothing-rico",
  storageBucket: "crown-clothing-rico.appspot.com",
  messagingSenderId: "690508760523",
  appId: "1:690508760523:web:0dbc579780f93edaa9e24e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const googleSignInWithPopUp = ()=> signInWithPopup(auth, provider);
export const googleSignInWithRedirect = ()=> signInWithRedirect (auth, provider);

// 
export const dp = getFirestore();

export const creatUserFromAuth = async (userAuth)=>{
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
          createdAt
        }
      );
    }
    catch {
      return userDocRef
    }

  }

 
};

