import React from "react";
import { StyledFooter } from "./StyledFooter";
import logo from "../../assets/img/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-left">
        <a href="">+10 814 752 3364</a>
        <button>Order online</button>
      </div>
      <div className="footer-right">
        <div className="footer-link-container">
          <a href="/" className="current-page">
            Home
          </a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="logo-container">
          <img src={logo} alt="" className="footer-logo" href="#" />
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
