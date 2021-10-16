import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = (foods) => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (foods.length) {
      for (const key in savedCart) {
        const addedFood = foods.find((f) => f.id === key);
        console.log(addedFood);
        if (addedFood) {
          const quantity = savedCart[key];
          addedFood.quantity = quantity;
          storedCart.push(addedFood);
        }
      }
      setCart(storedCart);
    }
  }, [foods]);
  return [cart, setCart];
};

export default useCart;
