import React from "react";
import { StyledHeader } from "./StyledHeader";
import logo from "../../assets/img/logo.png";

const Header = () => {
  return (
    <StyledHeader>
      <div className="header-left">
        <div className="logo-container">
          <img src={logo} alt="" className="header-logo" />
        </div>
        <div className="header-link-container">
          <a href="/" className="current-page">
            Home
          </a>
          <a href="#">Menu</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </div>
      <div className="header-right">
        <a href="">+10 814 752 3364</a>
        <button>Order online</button>
      </div>
    </StyledHeader>
  );
};

export default Header;
