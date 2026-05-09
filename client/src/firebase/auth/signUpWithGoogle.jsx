import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { app } from '../firebase.config';
const SignUpWithGoogle = () => {
  let [user,setUser]=useState()
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  const SignUpClickHandler=async()=>{
    await signInWithPopup(auth,provider).then(
      (result)=>{
        setUser(result.user)
        console.log(result.user)
      }

      )
      .catch((error)=>{
        console.log(error)
      })

  }
  return (
    <div>
      <button onClick={SignUpClickHandler}  className="flex items-center gap-2 border p-2 rounded">
      <FontAwesomeIcon icon={faGoogle} />
      Sign in with Google

    </button>
      {user &&
        (
          <>
          <h1>user name : {user.displayName}</h1>
          <h1>user email : {user.email}</h1>
          <img src={user.photoURL} alt="user imgage" />
          </>


        )
      }
    </div>
  );
};

export default SignUpWithGoogle;