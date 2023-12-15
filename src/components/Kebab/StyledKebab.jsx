import styled from "styled-components";

export const StyledKebab = styled.section`
  display: flex;
  position: relative;

  .left {
    width: 50%;
    background-color: var(--redColor);
    padding: 5% 4%;

    h2 {
      font-size: 112px;
      color: white;
      text-transform: uppercase;
      line-height: 1;
    }
    p {
      font-family: "AlterwaveThin";
      font-size: 48px;
      color: var(--whiteColor);
      margin-bottom: 35px;
    }
    p span {
      display: block;
    }
  }
  .right {
    width: 50%;
    border-color: var(--whiteColor);
    padding: 3% 4%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .brush-container {
      position: relative;
      text-align: center;
      color: var(--whiteColor);
      width: 40%;
      max-width: 100%;
      img {
        width: 100%;
      }
      .brush-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: "ZhiMangXing";
        font-size: 2vw;
      }
    }
    h1 {
      font-size: 112px;
      line-height: 80%;
      margin-top: 10%;
      max-width: 50%;
      opacity: 80%;
      text-align: right;
    }
    p {
      text-align: right;
    }
    p span {
      display: block;
    }
    button {
      border: none;
      color: var(--whiteColor);
      background-color: var(--redColor);
      padding: 15px 45px;
      border-radius: 20px;
      margin-top: 5%;
      font-size: 16px;
    }
  }
  .centeredKebab {
    position: absolute;
    left: 50%;
    top: 10%;
    transform: translateX(-50%);
    width: 25%; /* Set the width of the container to 25% */
    height: auto; /* Maintain aspect ratio */
    z-index: 1; /* Ensure the image appears above other content */

    .kebab {
      width: 100%; /* Set the width of the image to 100% */
      height: 100%;
      object-fit: cover; /* Maintain image aspect ratio and cover the container */
    }
  }
  .centeredSticker {
    position: absolute;
    left: 50%;
    top: 70%;
    transform: translateX(-50%);
    width: 10%; /* Set the width of the container to 25% */
    height: auto; /* Maintain aspect ratio */
    z-index: 1; /* Ensure the image appears above other content */
    .sticker {
      width: 100%; /* Set the width of the image to 100% */
      height: 100%;
      object-fit: cover; /* Maintain image aspect ratio and cover the container */
      z-index: 2;
      opacity: 70%;
    }
  }

  @media (max-width: 1340px) {
    .left h2 {
      font-size: 80px;
    }
    .right h1 {
      font-size: 80px;
    }
  }

  @media (max-width: 1100px) {
    .left h2 {
      font-size: 60px;
    }
    .right h1 {
      font-size: 60px;
    }
    .centeredKebab {
      width: 15%;
      top: 20%;
    }
    .centeredSticker {
      top: 60%;
    }
  }
  @media (max-width: 940px) {
    .centeredKebab {
      width: 10%;
      top: 30%;
    }
    .centeredSticker {
      top: 50%;
    }
  }
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    .left,
    .right {
      width: 100%;
      text-align: center;
    }
    .left {
      padding: 4% 5%;
      h2 {
      }
      img {
        display: none;
      }
    }
    .right {
      width: 100%;
      padding: 4% 0;
      align-items: center;
      .brush-container {
        display: none;
      }
      h1 {
      }
      h1,
      p {
        text-align: center;
      }
    }
    .centeredKebab {
      width: 20%;
      top: 32%;
      left: 50%;
    }
    .centeredSticker {
      display: none;
    }
  }
  @media (max-width: 600px) {
    .left h2 {
      font-size: 32px;
    }
    .right h1 {
      font-size: 60px;
    }
  }
  @media (max-width: 400px) {
    .centeredKebab {
      display: none;
    }
    .left {
      h2 {
        margin-top: 15px;
      }
      p {
        margin-bottom: 0;
      }
    }
  }
`;
