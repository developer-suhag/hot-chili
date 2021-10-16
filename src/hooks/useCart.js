import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fajedb";

const useCart = (foods) => {
  const [cart, setCart] = useState();
  useEffect(() => {
    const savedCart = getStoredCart();
    const storedCart = [];
    if (foods?.length) {
      for (const key in foods) {
        const addedFood = foods.find((f) => f.id === key);
        if (addedFood) {
          const quantity = savedCart[key];
          addedFood.quantity = quantity;
          storedCart.push(addedFood);
        }
      }
      setCart(storedCart);
    }
  }, [foods]);
  console.log(cart);
  return [cart, setCart];
};

export default useCart;
