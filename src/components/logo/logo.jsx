import React from "react";
import {Link} from "react-router-dom";
import "./logo.scss";

const Logo = () => (
  <Link className="logo header__logo" to="#">
    <img
      className="logo__image"
      src="img/logo.svg"
      width="55"
      height="55"
      alt="Автомобильное колесо – логотип компании AvtoMoto"
    />
    <img
      className="logo__text"
      src="img/logo-text.svg"
      width="55"
      height="36"
      alt="Название компании – AvtoMoto"
    />
  </Link>
);

export default Logo;
