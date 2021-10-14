import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
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
    logOut,
    user,
  };
};

export default useFirebase;
