import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  // state
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
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

  // go to top
  const gooTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // observer
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, presentUser => {
      const userEmail = presentUser?.email || user?.email;
      const loggedInUser = { email: userEmail };
      //set the user in state
      setUser(presentUser);
      console.log("USER OBSERVED ::>>", presentUser);
      setCooking(false);
      // if user are exist, then execute the code=>
      if (presentUser) {
        axios
          .post("http://localhost:5000/jwt", loggedInUser, {
            withCredentials: true,
          })
          .then(res => {
            console.log("token response:==>", res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    });
    return () => {
      return unSubscribe();
    };
  }, [loading, user?.email]);

  const data = {
    user,
    setLoading,
    loading,
    setCooking,
    cooking,
    createUser,
    logIn,
    googleLogin,
    logOut,
    updateUserData,
    gooTop,
  };

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
    </QueryClientProvider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
