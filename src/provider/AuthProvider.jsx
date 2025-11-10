import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.init";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true)

  const createUser = (email, password) => {
        setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithGoogle = () =>{
        // setLoading(true);
    return signInWithPopup(auth, googleProvider)
  }

  const logOut =()=>{
        // setLoading(true);
    return signOut(auth)
  }

  const logIn = (email, password) =>{
        setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }


  const updateUser = (updatedData) =>{
          setLoading(true);
    return updateProfile(auth.currentUser, updatedData)

  }

  const resetPassword = (email) => {
  return sendPasswordResetEmail(auth, email);
};






    useEffect(() =>{

    const unsubscribe =onAuthStateChanged(auth, (currentUser) =>{

      setUser(currentUser)
      setLoading(false)
      
    })

    return () =>{
      unsubscribe()
    }


  }, [])

  const authInfo = {
    setUser,
    createUser,
    signUpWithGoogle,
    user,
    logOut,
    logIn,
    updateUser,
    loading,
    setLoading,
    resetPassword,
    
    

    
  };



  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
