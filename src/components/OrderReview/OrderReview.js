import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import SingleFoodReview from "./SingleFoodReview/SingleFoodReview";

const OrderReview = () => {
  const combineContext = useAuth();
  const { foods } = combineContext;
  const [cart, setCart] = useCart(foods);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // const { allContext } = combineContext;
  // const { user, logOut } = allContext;
  // const { totalQuantity } = combineContext;
  // console.log(totalQuantity);

  // console.log(foods);

  // const storedCart = useCart(foods);

  // const cartFoods = getStoredCart();
  console.log(cart);

  return (
    <Container sx={{ pt: 12, pb: 10, textAlign: "center" }}>
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr", py: 4 }}>
        <Box>
          <Typography sx={{ pb: 2 }} variant="h4">
            Edit Delivery Details
          </Typography>
          <Divider />
          <Box sx={{ mt: 4 }} className="signup-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Address1"
                {...register("Address1", {})}
              />
              <input
                type="text"
                placeholder="Address2"
                {...register("Address2", {})}
              />
              <input type="text" placeholder="Flat" {...register("Flat", {})} />
              <input
                type="text"
                placeholder="BusinessName"
                {...register("BusinessName", {})}
              />
              <input
                type="text"
                placeholder="DeliveryInstructor"
                {...register("DeliveryInstructor", {})}
              />

              <input
                className="submit-btn"
                type="submit"
                value="Save & Continue"
              />
            </form>
          </Box>
        </Box>
        <Box>
          <Typography>
            From <strong>Gulshan plaza restaurent GPR</strong>
          </Typography>
          <Typography>Arriving in 20-30 minutes</Typography>
          <Typography>107 Rd No 8</Typography>
          <Box sx={{ width: "80%", margin: "auto", mt: 4, textAlign: "left" }}>
            {cart.map((food) => (
              <SingleFoodReview key={food.id} food={food}></SingleFoodReview>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderReview;
