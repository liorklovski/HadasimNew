import React from "react";
import { Link } from "react-router-dom";
import navyImg from "../../images/navy.png";
import burgerImg from "../../images/burger.png";

import "./Header.css";

const links = [
  {
    id: 0,
    to: "/",
    text: "דף הבית"
  },
  {
    id: 1,
    to: "/SearchTemplate",
    text: "חיפוש  תבניות הד״ס"
  },
  {
    id: 2,
    to: "/TemplateView",
    text: "יצירת תבנית הד״ס "
  },
  {
    id: 3,
    to: "/SearchCertification",
    text: "חיפוש  הסמכות "
  }
];

class Header extends React.Component {
  state = {
    navActive: false,
    activeLinkId: 0
  };

  navToggle = () => {
    this.setState(prevState => ({ navActive: !prevState.navActive }));
  };

  onLinkClick = e => {
    this.setState({ navActive: false, activeLinkId: +e.currentTarget.id });
  };

  render() {
    return (
      <header className="header">
        <div className="header-right">
          <img
            src={burgerImg}
            className={this.state.navActive ? "burger toggle-burger" : "burger"}
            onClick={this.navToggle}
            title="תפריט"
            alt="תפריט"
          />
          <div className="app-title">הדרכה ספינתית</div>
        </div>
        <div
          className={this.state.navActive ? "nav-menu toggle-nav" : "nav-menu"}
        >
          <ul className="links">
            {links.map(link => (
              <li key={link.id}>
                <Link
                  id={link.id}
                  onClick={this.onLinkClick}
                  to={link.to}
                  className={
                    this.state.activeLinkId === link.id
                      ? "active-link"
                      : undefined
                  }
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/">
          <img
            src={navyImg}
            alt="דף הבית"
            title="לדף הבית"
            className="navy-logo"
          />
        </Link>
      </header>
    );
  }
}

export default Header;
