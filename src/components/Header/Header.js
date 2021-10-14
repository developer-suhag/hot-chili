import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../../images/logo.png";

const Header = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "#f7f7f7",
          borderBottom: "1px solid #ddd",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <Container>
          <Grid
            sx={{ alignItems: "center" }}
            container
            spacing={2}
            columns={{ xs: 4, md: 12 }}
          >
            <Grid item xs={2} md={6}>
              <Link to="/">
                <img className="logo" src={logo} alt="" srcset="" />
              </Link>
            </Grid>
            <Grid sx={{ textAlign: "right" }} item xs={2} md={6}>
              <Button sx={{ color: "#222" }} variant="text">
                <ShoppingCartIcon />
              </Button>
              <Button sx={{ color: "#222", mx: 2 }} variant="text">
                Login
              </Button>
              <Button
                sx={{ bgcolor: "#F74528", borderRadius: 4 }}
                variant="contained"
              >
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
