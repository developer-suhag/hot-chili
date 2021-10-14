import React from "react";
import { IconButton, InputBase, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from "@mui/icons-material/Search";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <Box sx={{ pt: 30, pb: 28 }} className="hero-section">
      <Typography
        sx={{ textAlign: "center", fontWeight: "500" }}
        variant="h3"
        component="h1"
      >
        Best food waiting for your belly!
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            boxShadow: 1,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search food items"
            inputProps={{ "aria-label": "Search food items" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
    </Box>
  );
};

export default HeroSection;
