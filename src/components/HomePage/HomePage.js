import React from "react";
import bgImg from "../../images/home.jpg";

import "./HomePage.css";

function Home() {
  return (
    <div className="home">
      <img src={bgImg} alt="עמוד הבית" className="home-bg-img" />
      <div className="navy-text">
        זרוע הים<div className="app-text">הדרכה ספינתית</div>
      </div>
    </div>
  );
}

export default Home;
