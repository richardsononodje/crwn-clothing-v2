
// import { useEffect} from 'react';
// import { getRedirectResult } from 'firebase/auth';
import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth'


import {
   auth,
   googleSignInWithPopUp,
   creatUserFromAuth, 
   googleSignInWithRedirect,
 } from '../../utills/firebase/firebase';
import { async } from '@firebase/util';


const SignIn =()=>{

  // useEffect(()=>{
  //  const getRes = getRedirectResult(auth)
  //      .then(function(getRes){
  //        console.log(getRes);
  //      })

       

  //      if (getRes){
  //         const response = async ()=>{
  //           const userDocRef = await creatUserFromAuth(getRes.user)
  //         }
  //       }

  // },[])

  useEffect(()=>{
    const fetchData = async()=>{

      try {
        const response = await getRedirectResult(auth);
        console.log (response);

        if (response) {
          const userDocRef = await creatUserFromAuth(response.user)
    
        }

      }

      catch {
        console.log ('error');
      }
    
    }

    fetchData();

   

  },[])

 
const getData = async ()=>{
  const {user} = await googleSignInWithPopUp();
 const userDocRef = await creatUserFromAuth(user)
}




// const getDataFromRedirect = async ()=>{
//   const {user} = await googleSignInWithRedirect();
//  const userDocRef = creatUserFromAuth(user)
// }

  return(
    <div>
    <h1>Sign in Page</h1>
    <button onClick={getData}>sign in</button>
    {/* sign in with redirect */}
    <button onClick={ googleSignInWithRedirect}>sign in with redirect</button>
    </div>
  )
}

export default SignIn