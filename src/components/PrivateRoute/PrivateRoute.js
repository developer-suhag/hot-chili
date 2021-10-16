import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/system";

const PrivateRoute = ({ children, ...rest }) => {
  const combineContext = useAuth();
  const { allContext } = combineContext;
  const { user, isLoading } = allContext;
  if (isLoading) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  console.log(user);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user?.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          ></Redirect>
        )
      }
    ></Route>
  );
};

export default PrivateRoute;
