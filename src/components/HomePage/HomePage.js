import React from "react";
import bgImg from "../../images/home.jpg";

import "./HomePage.css";
import { AppBar, Tabs, Tab, Typography, Box } from "@material-ui/core";
import SearchTemplate from "../SearchTemplate/SearchTemplate";
import SearchCertification from "../SearchCertification/SearchCertification";

function Home() {
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box p={3}>{children}</Box>}
      </Typography>
    );
  }
  // TabPanel.propTypes = {
  //   children: PropTypes.node,
  //   index: PropTypes.any.isRequired,
  //   value: PropTypes.any.isRequired
  // };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  }
  // const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    // <div>
    //   <AppBar position="static">
    //     <Tabs
    //       value={value}
    //       onChange={handleChange}
    //       aria-label="simple tabs example"
    //     >
    //       <Tab label="חיפוש תבניות" {...a11yProps(0)} />
    //       <Tab label="חיפוש הסמכות" {...a11yProps(1)} />
    //     </Tabs>
    //   </AppBar>
    //   <TabPanel index={0}>
    //     <SearchTemplate />
    //   </TabPanel>
    //   <TabPanel index={1}>
    //     <SearchCertification />
    //   </TabPanel>
    // </div>

    <div className="home">
      <img src={bgImg} alt="עמוד הבית" className="home-bg-img" />
      <div className="navy-text">
        זרוע הים<div className="app-text">הדרכה ספינתית</div>
      </div>
    </div>
  );
}

export default Home;
