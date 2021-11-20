import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import SingleFood from "../SingleFood/SingleFood";

const Lunch = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch("https://developer-suhag.github.io/hot-chili-json/lunch.json")
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
  return (
    <Box sx={{ py: 2, mt: 4 }}>
      <Grid
        className="food-list"
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {foods.map((food) => (
          <Grid item xs={2} sm={4} md={4} key={food.id}>
            <SingleFood key={food.id} food={food}></SingleFood>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Lunch;
