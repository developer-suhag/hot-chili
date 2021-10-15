import { Container, Typography } from "@mui/material";
import React from "react";
import BreakFast from "./BreakFast/BreakFast";
import Dinner from "./Dinner/Dinner";
import Lunch from "./Lunch/Lunch";

const FoodTabs = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Latest Food
      </Typography>

      <BreakFast></BreakFast>
      <Lunch></Lunch>
      <Dinner></Dinner>
    </Container>
  );
};

export default FoodTabs;
