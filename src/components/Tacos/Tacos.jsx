import React from "react";
import { StyledTacos } from "./StyledTacos";
import handTacos from "../../assets/img/hand-tacos.png";

const Tacos = () => {
  return (
    <StyledTacos>
      <div className="infos">
        <h2>
          <span>Our</span>
          <span>Tacos</span>
        </h2>

        <p>
          Explore our diverse range of tacos, crafted to delight both meat
          enthusiasts and those who crave fresh, flavorful vegetables. Indulge
          in the succulence of our high-quality, savory meat tacos or savor the
          delicate and natural flavors of our vegetable-based creations.
        </p>
        <p>
          Our menu reflects a commitment to celebrating a variety of tastes and
          dietary preferences. Join us for a feast of flavors, where each taco
          invites you on a culinary journey.
        </p>
        <button>Book a Tacos Exploration</button>
      </div>
      <div className="img">
        <img src={handTacos} alt="" />
      </div>
    </StyledTacos>
  );
};

export default Tacos;
