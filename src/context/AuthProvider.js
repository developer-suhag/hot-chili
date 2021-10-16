import React, { useEffect, useState } from "react";
import { createContext } from "react";
import useFirebase from "../hooks/useFirebase";
import { addToDb, getStoredCart } from "../utilities/fakedb";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("./foods.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);

  ////

  // handle add to cart
  const [cart, setCart] = useState([]);
  const handleCart = (food) => {
    const exist = cart.find((f) => f.id === food.id);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((p) => p.id !== food.id);
      food.quantity += 1;
      newCart = [...rest, food];
    } else {
      food.quantity = 1;
      newCart = [...cart, food];
    }
    setCart(newCart);
    addToDb(food.id);
  };

  // handle local storage

  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (foods.length) {
      for (const key in savedCart) {
        const addedProduct = foods.find((food) => food.id === key);
        storedCart.push(addedProduct);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
        }
      }
    }
    setCart(storedCart);
  }, [foods]);

  const totalQuantity = cart.reduce(
    (previous, current) => previous + current.quantity,
    0
  );

  const allContext = useFirebase();
  const combineContext = { allContext, foods, totalQuantity, handleCart };
  return (
    <AuthContext.Provider value={combineContext}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
