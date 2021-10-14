import { Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import error from "../../images/404.png";

const PageNotFound = () => {
  return (
    <Box sx={{ bgcolor: "#FFE6D9" }}>
      <Container sx={{ py: 8, textAlign: "center" }}>
        <img style={{ width: "70%" }} src={error} alt="" />
        <div>
          <Link to="/">
            <Button variant="contained">Go Back</Button>
          </Link>
        </div>
      </Container>
    </Box>
  );
};

export default PageNotFound;
