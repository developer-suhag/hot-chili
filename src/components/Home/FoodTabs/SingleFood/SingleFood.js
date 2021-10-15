import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React from "react";
import "./SingleFood.css";

const SingleFood = ({ food }) => {
  const { foodName, description, img, price } = food;
  const handleClick = () => {
    console.log("object");
  };
  return (
    <div>
      <Card
        onClick={handleClick}
        sx={{ maxWidth: 345, boxShadow: 2, textAlign: "center" }}
      >
        <CardActionArea>
          <CardMedia
            className="food-img"
            component="img"
            height="240"
            image={img}
            alt={foodName}
          />
          <CardContent sx={{ py: 4 }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ color: "#487E91" }}
            >
              {foodName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description.slice(0, 40)}...
            </Typography>
            <Typography sx={{ color: "#F74528", mt: 2 }} variant="h5">
              $ {price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default SingleFood;
