import React, { useEffect, useState } from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  const allContext = useFirebase();
  const combineContext = { allContext, foods };
  return (
    <AuthContext.Provider value={combineContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

// value = {{allconext}, {foods}, {sanji}}
