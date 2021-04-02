import React from "react";
import {Link} from "react-router-dom";
import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="wrapper">
      <ul className="footer__navigation footer-nav">
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="#">
            Корпоративным клиентам
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="#">
            Клиентам
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="#">
            Аренда авто
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="#">
            Каршеринг
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="#">
            Как продать авто
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="#">
            Traid-in
          </Link>
        </li>
        <li className="footer-nav__item">
          <Link className="footer-nav__link" to="#">
            Test draiv
          </Link>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
