import { Button, Container, Typography } from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import "./Login.css";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../../../images/logo.png";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  // const { signInUsingGoogle, userLogin } = useAuth();
  const combineContext = useAuth();
  const { allContext } = combineContext;
  const { signInUsingGoogle, userLogin, setIsLoading } = allContext;

  const history = useHistory();
  const location = useLocation();
  const redriect_uri = location.state?.from || "/home";

  const handleGoogleLogin = () => {
    signInUsingGoogle()
      .then((result) => {
        history.push(redriect_uri);
      })
      .finally(() => setIsLoading(false));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { Email, Password } = data;
    userLogin(Email, Password);
  };
  return (
    <Container sx={{ pt: 12, pb: 10, textAlign: "center" }}>
      <Box sx={{ bgcolor: "#fcf4e0", py: 6, boxShadow: 4, borderRadius: 2 }}>
        <Box sx={{}}>
          <img style={{ width: "20%" }} src={logo} alt="" />
        </Box>
        <Box className="signup-form" sx={{ width: "50%", margin: "auto" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              required
              type="email"
              placeholder="Email"
              {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
            />
            {errors.Email && (
              <span className="field-error">This field is required</span>
            )}
            <input
              required
              type="password"
              placeholder="Password"
              {...register("Password", {
                required: true,
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
              })}
            />
            {errors.Password && (
              <span className="field-error">
                Password should have at least 8 chracters, 2 uppercase, 3
                lowercase, 1 special character, 2 numbers.
              </span>
            )}
            <input className="submit-btn" type="submit" value="Sign In" />
          </form>
          <Link to="/signup">New to Hot Chili?</Link>
        </Box>
        <Box sx={{ mt: 4, borderTop: "1px solid #ddd", pt: 2 }}>
          <Typography>Or sign in using</Typography>
          <Button
            className="social-login"
            startIcon={<GoogleIcon />}
            variant="contained"
            sx={{ bgcolor: "#F74528", mt: 2 }}
            onClick={handleGoogleLogin}
          >
            Sign In using Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
