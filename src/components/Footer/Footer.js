import { Container, Grid, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import logo from "../../images/logo-2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <Box className="footer-section" sx={{ py: 2 }}>
        <Container>
          <Box className="footer-top">
            <Grid
              sx={{ color: "#fff", alignItems: "center" }}
              container
              columns={{ xs: 2, lg: 12 }}
            >
              <Grid item xs={2} lg={6}>
                <Link to="/">
                  <img className="footer-logo" src={logo} alt="" />
                </Link>
              </Grid>
              <Grid item xs={2} lg={3}>
                <Link className="footer-link">About online food</Link>
                <Link className="footer-link">Read our blog</Link>
                <Link className="footer-link">Sign up to deliver</Link>
                <Link className="footer-link">Add your restaurent</Link>
              </Grid>
              <Grid item xs={2} lg={3}>
                <Link className="footer-link">Get help</Link>
                <Link className="footer-link">Read FAQs</Link>
                <Link className="footer-link">View all cities</Link>
                <Link className="footer-link">Restaurent near me</Link>
              </Grid>
            </Grid>
          </Box>
          <Box
            className="footer-bottom"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              borderTop: "1px solid #FFE6D9",
              pt: 2,
            }}
          >
            <Box>
              <Typography sx={{ color: "#b2bec3" }} variant="p" component="p">
                {" "}
                Copyright &copy; 2021 - Hot Chili
              </Typography>
            </Box>
            <Box>
              <Link sx={{ color: "#b2bec3", mr: 4, cursor: "pointer" }}>
                Privacy Policy
              </Link>
              <Link sx={{ color: "#b2bec3", mr: 4, cursor: "pointer" }}>
                Terms of use
              </Link>
              <Link sx={{ color: "#b2bec3", mr: 4, cursor: "pointer" }}>
                Pricing
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
