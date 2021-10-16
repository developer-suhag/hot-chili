import {
  Button,
  Container,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import { deleteFromDb } from "../../utilities/fakedb";
import SingleFoodReview from "./SingleFoodReview/SingleFoodReview";

const OrderReview = () => {
  const combineContext = useAuth();
  const { foods, totalQuantity } = combineContext;
  const [cart, setCart] = useCart(foods);
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  const handleRemoveClick = (id) => {
    const newCart = cart.filter((food) => food.id !== id);
    deleteFromDb(id);
    setCart(newCart);
  };

  const handlePlaceOrderClick = () => {
    history.push("./order-place");
  };

  const subTotal = cart.reduce(
    (previous, current) => previous + current.price,
    0
  );
  const tax = subTotal * 0.1;
  let deliveryFee;

  if (totalQuantity < 2) {
    deliveryFee = totalQuantity * 2.99;
  }
  if (totalQuantity > 2 && totalQuantity < 10) {
    deliveryFee = totalQuantity * 4.99;
  } else {
    deliveryFee = totalQuantity * 6.99;
  }

  const total = subTotal + tax + deliveryFee;

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
              <SingleFoodReview
                key={food.id}
                food={food}
                handleClick={handleRemoveClick}
              ></SingleFoodReview>
            ))}
          </Box>
          <Box sx={{ width: "80%", margin: "auto", mt: 4 }}>
            <TableContainer>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>Subtotal</TableCell>
                    <TableCell>{subTotal.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Tax</TableCell>
                    <TableCell>{tax.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Delivery Fee</TableCell>
                    <TableCell>{deliveryFee.toFixed(2)}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>{total.toFixed(2)}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Button
              onClick={handlePlaceOrderClick}
              sx={{ mt: 3, bgcolor: "#487E91" }}
              variant="contained"
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderReview;
