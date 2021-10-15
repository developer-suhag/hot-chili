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
  return (
    <AuthContext.Provider value={({ allContext }, { foods })}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
