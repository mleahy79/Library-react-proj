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
            <Link to="/#features" className="footer__link">
              Features
            </Link>
            <Link to="/#explore" className="footer__link">
              Explore
            </Link>
            <Link to="/cart" className="footer__link">
              Cart
            </Link>
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
