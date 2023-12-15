import React from "react";
import { StyledBurger } from "./StyledBurger";
import handBurger from "../../assets/img/hand-burger.png";

const Burger = () => {
  return (
    <StyledBurger>
      <div className="img">
        <img src={handBurger} alt="" />
      </div>
      <div className="infos">
        <h2>
          <span>Our</span>
          <span>Burgers</span>
        </h2>

        <p>
          Explore our diverse range of burgers, crafted to delight both meat
          enthusiasts and those who crave fresh, flavorful vegetables. Indulge
          in the juiciness of our high-quality, savory meat burgers or savor the
          delicate and natural flavors of our vegetable-based creations.
        </p>
        <p>
          Our menu reflects a commitment to celebrating a variety of tastes and
          dietary preferences. Join us for a feast of flavors, where each burger
          invites you on a culinary journey.
        </p>
        <button>Book a Burger Adventure</button>
      </div>
    </StyledBurger>
  );
};

export default Burger;
