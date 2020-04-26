import React, { useState } from "react";
import bgImg from "../../images/home.jpg";
import SwipeableViews from "react-swipeable-views";
import "./HomePage.css";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Switch,
  Paper
} from "@material-ui/core";
import SearchTemplate from "../SearchTemplate/SearchTemplate";
import SearchCertification from "../SearchCertification/SearchCertification";
import { BrowserRouter, Route } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

function HomePage() {
  const [value, setVal] = useState(0);
  const handleChange = (event, value) => {
    setVal(value);
  };

  const handleChangeIndex = index => {
    this.setValue(index);
  };

  return (
    // <BrowserRouter>
    <Paper style={{ margin: "1rem 3rem" }}>
      {/* <AppBar position="static" color="default"> */}
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
      >
        <Tab label="תבניות הד״ס" />
        <Tab label="הסמכות" />
        <Tab label="חיילים" />
      </Tabs>
      {/* </AppBar> */}
      <SwipeableViews
        axis={"x-reverse"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {/* <Switch>
          <Route path="/SearchTemplate" component={SearchTemplate} />
          <Route path="/SearchCertification" component={SearchCertification} />
        </Switch> */}
        {/* </div>
    </BrowserRouter>
    // <div className="home">
    //   <img src={bgImg} alt="עמוד הבית" className="home-bg-img" />
    //   <div className="navy-text">
    //     זרוע הים<div className="app-text">הדרכה ספינתית</div>
    //   </div>
    // </div> */}
        <TabPanel value={value} index={0}>
          {SearchTemplate}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {SearchCertification}
        </TabPanel>
        <TabPanel value={value} index={2}>
          חיפוש חיילים
        </TabPanel>
      </SwipeableViews>
    </Paper>
  );
}

export default HomePage;
