import GoogleIcon from "@mui/icons-material/Google";
import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import logo from "../../../images/logo.png";
import "./SignUp.css";
import { useHistory, useLocation } from "react-router-dom";

const SignUp = () => {
  // const { signInUsingGoogle, handleEmailLogin } = useAuth();
  const combineContext = useAuth();
  const { allContext } = combineContext;
  const { signInUsingGoogle, handleEmailLogin, setIsLoading } = allContext;

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
    const { Name, Email, Password } = data;
    handleEmailLogin(Name, Email, Password);
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
              type="text"
              placeholder="Name"
              {...register("Name", { required: true, maxLength: 80 })}
            />
            {errors.Name && (
              <span className="field-error">This field is required</span>
            )}
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
            <input
              required
              type="password"
              placeholder="Confrim-Password"
              {...register("ConfrimPassword", {
                required: true,
                pattern:
                  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8})/i,
              })}
            />
            {errors.ConfrimPassword && (
              <span className="field-error">
                Password should have at least 8 chracters, 2 uppercase, 3
                lowercase, 1 special character, 2 numbers.
              </span>
            )}

            <input className="submit-btn" type="submit" value="Sign In" />
          </form>
          <Link to="/login">Already have an account?</Link>
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

export default SignUp;
