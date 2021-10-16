import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./SingleFoodReview.css";
import DeleteIcon from "@mui/icons-material/Delete";

const SingleFoodReview = ({ food }) => {
  const { img, foodName, price, quantity } = food;

  return (
    <Box sx={{ boxShadow: 4, borderRadius: 2 }} className="single-food-review">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 2fr 1fr 1fr",
          gridGap: 8,
          alignItems: "center",
        }}
      >
        <Box>
          <img src={img} alt="" />
        </Box>
        <Box>
          <Typography variant="h6">{foodName}</Typography>
          <Typography sx={{ color: "#F74528", mt: 1 }}>
            {" "}
            $ <strong>{price}</strong>{" "}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: 24,
              fontWeight: 700,
              color: "#487E91",
              textAlign: "center",
            }}
          >
            {quantity}
          </Typography>
        </Box>
        <Box>
          <IconButton sx={{ color: "#F74528" }} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleFoodReview;
