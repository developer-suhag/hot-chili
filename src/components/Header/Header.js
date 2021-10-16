import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useCart from "../../hooks/useCart";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  // const { user, logOut } = useAuth();

  const combineContext = useAuth();
  const { allContext } = combineContext;
  const { user, logOut } = allContext;
  const { totalQuantity } = combineContext;

  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };
  const handleSignUP = () => {
    history.push("/signup");
  };

  const handleCartClick = () => {
    history.push("/order-review");
  };

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
          zIndex: 99,
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
                <img className="logo" src={logo} alt="" />
              </Link>
            </Grid>
            <Grid
              sx={{
                textAlign: "right",
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
              }}
              item
              xs={2}
              md={6}
            >
              <Button
                onClick={handleCartClick}
                sx={{ color: "#222" }}
                variant="text"
              >
                <ShoppingCartIcon /> <span>{totalQuantity}</span>
              </Button>

              {!user?.email && (
                <Button
                  onClick={handleLogin}
                  sx={{ color: "#222", mx: 2 }}
                  variant="text"
                >
                  Login
                </Button>
              )}
              {!user?.email && (
                <Button
                  sx={{ bgcolor: "#F74528", mx: 2, borderRadius: 4 }}
                  variant="contained"
                  onClick={handleSignUP}
                >
                  Sign Up
                </Button>
              )}
              {user?.email && (
                <Button
                  sx={{ bgcolor: "#F74528", mx: 2, borderRadius: 4 }}
                  variant="contained"
                  onClick={logOut}
                >
                  Log Out
                </Button>
              )}

              <span>
                {user?.photoURL ? (
                  <img className="user-img" src={user.photoURL} alt="" />
                ) : (
                  <small>{user?.displayName}</small>
                )}
              </span>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
