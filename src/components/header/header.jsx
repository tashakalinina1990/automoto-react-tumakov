import React from "react";
import Logo from "../logo/logo";
import Navigation from "../navigation/navigation";
import "./header.scss";

const Header = () => (
  <header className="header">
    <div className="wrapper">
      <div className="header__wrap">
        <Logo />
        <nav className="header__navigation">
          <Navigation />
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
