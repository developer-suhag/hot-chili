import { Container, Typography } from "@mui/material";
import React from "react";
import BreakFast from "./BreakFast/BreakFast";
import Dinner from "./Dinner/Dinner";
import Lunch from "./Lunch/Lunch";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const FoodTabs = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ py: 8 }}>
      <Typography sx={{ textAlign: "center" }} variant="h4">
        Latest Food
      </Typography>

      <Box sx={{ width: "100%", typography: "body1", mt: 4 }}>
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList
              textColor="secondary"
              indicatorColor="secondary"
              onChange={handleChange}
              aria-label="lab API tabs example"
              centered
            >
              <Tab label="Breakfast" value="1" />
              <Tab label="Lunch" value="2" />
              <Tab label="Dinner" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <BreakFast></BreakFast>
          </TabPanel>
          <TabPanel value="2">
            <Lunch></Lunch>
          </TabPanel>
          <TabPanel value="3">
            <Dinner></Dinner>
          </TabPanel>
        </TabContext>
      </Box>

      {/* <BreakFast></BreakFast>
      <Lunch></Lunch>
      <Dinner></Dinner> */}
    </Container>
  );
};

export default FoodTabs;
