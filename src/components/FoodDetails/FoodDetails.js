import { Button, Container, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./FoodDetails.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import FoodSlider from "./FoodSlider/FoodSlider";

const FoodDetails = () => {
  const { foodId } = useParams();
  const { foods } = useAuth();
  const [count, setCount] = useState(1);

  const combineContext = useAuth();
  const { totalQuantity, handleCart } = combineContext;
  // console.log(handleCart);

  const newFood = [];

  for (const food of foods) {
    if (food.id === foodId) {
      newFood.push(food);
    }
  }
  /* 
    const handlePlusClick = () => {
    // const newCount = count + 1;
    setCount(count + 1);
  };
  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
 */

  return (
    <Container sx={{ pt: 20, pb: 18 }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <Typography sx={{ mb: 4 }} variant="h4">
            {newFood[0]?.foodName}
          </Typography>
          <Typography sx={{ mb: 4 }}>{newFood[0]?.description}</Typography>
          {/* <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              sx={{ fontSize: 30, color: "#487E91", mr: 6 }}
              variant="span"
            >
              $ {newFood[0]?.price}
            </Typography>

            <Paper
              sx={{
                px: 4,
                py: 0,
                borderRadius: 50,
                fontSize: 28,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Button
                // onClick={handleMinusClick}
                sx={{ fontSize: 30, color: "#222" }}
              >
                -
              </Button>
              <span className="cart-text">{totalQuantity}</span>
              <Button
                // onClick={handlePlusClick}
                sx={{ fontSize: 30, color: "#F74528" }}
              >
                +
              </Button>
            </Paper>
          </Box> */}
          <Box sx={{ mt: 4 }}>
            <Button
              onClick={() => handleCart(newFood[0])}
              variant="contained"
              sx={{ bgcolor: "#F74528", px: 4, py: 1, borderRadius: 50 }}
              startIcon={<ShoppingCartIcon />}
            >
              Add
            </Button>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img src={newFood[0]?.img} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default FoodDetails;
