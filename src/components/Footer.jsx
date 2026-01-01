import React from "react";
import Library from "../assets/Library.svg";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom/";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Library} className="footer__logo--img" alt="logo" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <a href="/#features" className="footer__link">
              Features
            </a>
            <a href="/#explore" className="footer__link">
              Explore
            </a>
            <a href="/#cart" className="footer__link">
              Cart
            </a >
          </div>
          <div className="footer__copyright">
            Copyright &copy; 2024 Library Inc.
          </div>
          <span className="footer__logo--ml">
            <img src={logo} className="footer__logo--prsnl" alt="logo" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
