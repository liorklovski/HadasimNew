import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import HomePage from "./components/HomePage/HomePage";
import SearchTemplate from "./components/SearchTemplate/SearchTemplate";
import SearchCertification from "./components/SearchCertification/SearchCertification";
import TemplateView from "./components/TemplateView/TemplateView";
import CertificationView from "./components/CertificationView/CertificationView";

import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"} component={HomePage} />
        <Route
          path={process.env.PUBLIC_URL + "/SearchTemplate"}
          component={SearchTemplate}
        />
        <Route
          path={process.env.PUBLIC_URL + "/TemplateView/:id?"}
          component={TemplateView}
        />
        <Route
          path={process.env.PUBLIC_URL + "/TemplateView"}
          component={TemplateView}
        />
        <Route
          path={process.env.PUBLIC_URL + "/SearchCertification"}
          component={SearchCertification}
        />
        <Route
          path={process.env.PUBLIC_URL + "/CertificationView/:id?"}
          component={CertificationView}
        />
        <Route
          path={process.env.PUBLIC_URL + "/CertificationView"}
          component={CertificationView}
        />
        {/* <Route path="/SoldierDialog" component={SoldierDialog} /> */}
        <Route path={process.env.PUBLIC_URL + ""} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
