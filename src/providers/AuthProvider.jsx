import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useState } from "react";
import auth from "../config/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // state
  const [loading, setLoading] = useState(null);
  const [cooking, setCooking] = useState(true);

  ////

  /// google Provider
  const googleProvider = new GoogleAuthProvider();

  //   create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   login user
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  /// google user login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out user
  const logOut = () => {
    return signOut(auth);
  };

  // update user
  const updateUserData = (userName, userPhotoUrl) => {
    return updateProfile(auth.currentUser, {
      displayName: userName,
      photoURL: userPhotoUrl,
    });
  };

  const data = {
    user: "moksed ali",
    setLoading,
    loading,
    setCooking,
    cooking,
    createUser,
    logIn,
    googleLogin,
    logOut,
    updateUserData,
  };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
