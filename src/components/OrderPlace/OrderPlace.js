import { Button, Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import rider from "../../images/Group 1151.png";
import helmet from "../../images/Group 1152.png";

const OrderPlace = () => {
  return (
    <Container sx={{ pt: 12, pb: 10 }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gridGap: 4,
          alignItems: "center",
        }}
      >
        <Box sx={{ mt: 2 }}>
          <Box sx={{ boxShadow: 4 }}>
            <iframe
              title="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14609.354899006888!2d90.38799867991975!3d23.735297553547404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x3755b8f812a22ea5%3A0x12b3c3d5537a7e3b!2sGulistan%20Bus%20Stop%2C%20Banga%20Bandhu%20Avenue%2C%20Dhaka!3m2!1d23.7251443!2d90.4118854!4m5!1s0x3755b8b169603469%3A0xbe64ea815aaeecf4!2srestaurant%20in%20dhanmondi!3m2!1d23.7456098!2d90.3843484!5e0!3m2!1sen!2sbd!4v1634384586378!5m2!1sen!2sbd"
              // width="600"
              // height="450"
              // style="border:0;"
              style={{ width: 600, height: 500, border: 0, borderRadius: 5 }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </Box>
        </Box>
        <Box
          sx={{
            bgcolor: "#f5f5f5",
            px: 4,
            py: 2,
            borderRadius: 4,
            boxShadow: 4,
          }}
        >
          <Box>
            <img style={{ width: 100 }} src={rider} alt="" />
            <Typography variant="h6" sx={{ fontSize: 18, mt: 2 }}>
              Your Location
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#7b7b7b" }}>
              107 Rd No 8
            </Typography>
            <Typography variant="h6" sx={{ fontSize: 18, mt: 2 }}>
              Shop Address
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#7b7b7b" }}>
              Gulshan Plaza Restaurent GPR
            </Typography>
            <Typography variant="h4" sx={{ mt: 4 }}>
              09:30
            </Typography>
            <Typography sx={{ fontSize: 14, color: "#7b7b7b" }}>
              Estimated delivery time
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 4,
                bgcolor: "#fff",
                alignItems: "center",
                p: 1,
                my: 3,
                borderRadius: 2,
                boxShadow: 4,
              }}
            >
              <Box>
                <img style={{ width: 100 }} src={helmet} alt="" />
              </Box>
              <Box>
                <Typography variant="h6">Hamim</Typography>
                <Typography variant="p" sx={{ fontSize: 14, color: "#7b7b7b" }}>
                  Your Raider
                </Typography>
              </Box>
            </Box>
            <Button
              variant="contained"
              sx={{ bgcolor: "#F74528", width: "100%", py: 1 }}
            >
              Contact
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default OrderPlace;
