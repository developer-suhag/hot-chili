import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState();

  // auth
  const auth = getAuth();

  //   google sign in
  const signInUsingGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
    });
  };

  //   log out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  // sign in with email and password

  const handleEmailLogin = (name, email, password) => {
    console.log(name, email, password);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      updateProfile(auth.currentUser, {
        displayName: name,
      }).then(() => {});
    });
  };

  const userLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      console.log(result.user);
    });
  };

  //   observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
    return unsubscribe;
  }, [auth]);

  return {
    signInUsingGoogle,
    handleEmailLogin,
    userLogin,
    logOut,
    user,
  };
};

export default useFirebase;
