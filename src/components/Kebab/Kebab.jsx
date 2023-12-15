import React from "react";
import { StyledKebab } from "./StyledKebab";
import logo from "../../assets/img/logo.png";
import brush from "../../assets/img/brush.png";
import kebab from "../../assets/img/kebab.png";
import stickerBestPrice from "../../assets/img/sticker_best-price.png";

const Kebab = () => {
  return (
    <StyledKebab>
      <div className="left">
        <h2>Kebab</h2>
        <p>
          <span>and much more</span>
          <span> to look for !</span>
        </p>
        <img src={logo} alt="" />
      </div>
      <div className="right">
        <div className="brush-container">
          <img src={brush} alt="" />
          <div className="brush-text">All In One</div>
        </div>
        <h1>Fast Food</h1>
        <p>
          <span>We've got so many more products for you</span>
          <span>Come and try them !</span>
        </p>
        <button>Discover more</button>
      </div>
      <div className="centeredKebab">
        <img src={kebab} alt="" className="kebab" />
      </div>
      <div className="centeredSticker">
        <img src={stickerBestPrice} alt="" className="sticker" />
      </div>
    </StyledKebab>
  );
};

export default Kebab;
