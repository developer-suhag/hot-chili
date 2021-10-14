import { Button, Container } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { user, signInUsingGoogle } = useAuth();
  return (
    <Container sx={{ pt: 12, pb: 10, textAlign: "center" }}>
      <Button
        className="social-login"
        startIcon={<GoogleIcon />}
        variant="contained"
        sx={{ bgcolor: "#F74528" }}
        onClick={signInUsingGoogle}
      >
        Sign In using Google
      </Button>
    </Container>
  );
};

export default Login;
