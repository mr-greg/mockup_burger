import React from "react";
import { StyledHero } from "./StyledHero";
import brush from "../../assets/img/brush.png";
import menuBurger from "../../assets/img/menu-burger.png";

const Hero = () => {
  return (
    <StyledHero>
      <div className="hero-left">
        <div className="brush-container">
          <img src={brush} alt="" />
          <div className="brush-text">All In One</div>
        </div>
        <h1>Fast Food</h1>
        <p>
          The only place you'll need to go
          <br />
          for various and delicious Fast Food meals !
        </p>
        <button>More Deals</button>
      </div>
      <div className="hero-right">
        <strong>
          #1
          <br />
          Best
          <br />
          Seller
        </strong>
      </div>
      <div className="centered-image-container">
        <img src={menuBurger} alt="" />
      </div>
    </StyledHero>
  );
};

export default Hero;
