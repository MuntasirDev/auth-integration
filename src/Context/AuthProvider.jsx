import React, { use, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase.init.js/Firebase.init";

const AuthProvider = ({ children }) => {
const [user, setUser] = useState (null);


const [loading, setLoading] = useState (true);

if  (loading){
    return <span className="loading loading-spinner loading-xl"></span>
}







  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  const signOutUser = () => {
      setLoading(true);
    return auth.signOut(auth);
  }

  // onAuthStateChanged(auth, (currentUser) => {

  //   if(currentUser){
  //     console.log('has current user', currentUser);
  //   } else {
  //     console.log('Current User', currentUser);
  //   }

  // });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("has current user", currentUser);
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    signInUser,
    signOutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>
      {" "}
     
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
