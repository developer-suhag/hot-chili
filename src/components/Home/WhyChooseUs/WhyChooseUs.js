import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import "./WhyChooseUs.css";

import person1 from "../../../images/adult-blur-blurred-background-687824.png";
import person2 from "../../../images/chef-cook-food-33614.png";
import person3 from "../../../images/architecture-building-city-2047397.png";

const WhyChooseUs = () => {
  return (
    <Container sx={{ py: 8 }}>
      <Box sx={{ width: "40%" }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Why you choose us
        </Typography>
        <Typography variant="p" sx={{}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          praesentium explicabo velit! Odit nulla aliquid a libero repellendus
          soluta natus.
        </Typography>
      </Box>

      <Box sx={{ mt: 6 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {
            <Grid item xs={2} sm={4} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
                <CardActionArea>
                  <CardMedia
                    className="food-img"
                    component="img"
                    image={person1}
                  />
                  <CardContent sx={{ py: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <div>
                        <DirectionsBusIcon className="why-icon" />
                      </div>
                      <div>
                        <Typography>Fast Delivery</Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          }
          {
            <Grid item xs={2} sm={4} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 1 }}>
                <CardActionArea>
                  <CardMedia
                    className="food-img"
                    component="img"
                    image={person2}
                  />
                  <CardContent sx={{ py: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <div>
                        <NotificationsIcon className="why-icon" />
                      </div>
                      <div>
                        <Typography>A Good Auto Responder</Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          }
          {
            <Grid item xs={2} sm={4} md={4}>
              <Card sx={{ maxWidth: 345, boxShadow: 0 }}>
                <CardActionArea>
                  <CardMedia
                    className="food-img"
                    component="img"
                    image={person3}
                  />
                  <CardContent sx={{ py: 4 }}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <div>
                        <LocalShippingIcon className="why-icon" />
                      </div>
                      <div>
                        <Typography>Home Delivery</Typography>
                        <Typography>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit.
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          }
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
