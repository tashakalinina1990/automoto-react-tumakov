import React from "react";
import {Link} from "react-router-dom";
import "./navigation.scss";

const Navigation = () => (
  <ul className="navigation">
    <li className="navigation__item">
      <Link className="navigation__link" to="#">
        Автомобили
      </Link>
    </li>
    <li className="navigation__item">
      <Link className="navigation__link" to="#">
        Контакты
      </Link>
    </li>
    <li className="navigation__item">
      <Link className="navigation__link" to="#">
        Услуги
      </Link>
    </li>
    <li className="navigation__item">
      <Link className="navigation__link" to="#">
        Вакансии
      </Link>
    </li>
  </ul>
);

export default Navigation;
