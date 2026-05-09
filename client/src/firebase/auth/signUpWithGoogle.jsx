import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { GoogleAuthProvider,signInWithPopup,getAuth } from "firebase/auth";
import { app } from '../firebase.config';
const signUpWithGoogle = () => {
  const auth = getAuth(app)
  const provider = new GoogleAuthProvider();
  return (
    <div>
      <button onClick={()=>signInWithPopup(auth,provider).then((result)=>{
          console.log(result)
      })}  className="flex items-center gap-2 border p-2 rounded">
      <FontAwesomeIcon icon={faGoogle} />
      Sign in with Google
    </button>
    </div>
  );
};

export default signUpWithGoogle;