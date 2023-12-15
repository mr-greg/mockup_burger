import styled from "styled-components";

export const StyledHero = styled.section`
  display: flex;
  .hero-left {
    width: 50%;
    background-color: var(--whiteColor);
    padding: 5% 4%;

    .brush-container {
      position: relative;
      text-align: center;
      color: var(--whiteColor);
      width: 60%;
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
        font-size: 3vw;
      }
    }
    h1 {
      font-size: 112px;
      line-height: 80%;
      margin-top: 20%;
      max-width: 50%;
      opacity: 80%;
    }
    p {
      max-width: 80%;
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
  .hero-right {
    width: 50%;
    background-color: var(--redColor);
    padding: 5% 4%;
    /* position: relative; */
    strong {
      color: white;
      font-size: 48px;
      font-weight: 100;
      display: inline-block;
      margin-left: 25%;
      /* position: absolute;
      top: 50%;
      left: 50%; */
    }
  }
  .centered-image-container {
    position: absolute;
    left: 50%;
    top: 25%;
    transform: translateX(-50%);
    width: 25%; /* Set the width of the container to 25% */
    height: auto; /* Maintain aspect ratio */
    z-index: 1; /* Ensure the image appears above other content */

    img {
      width: 100%; /* Set the width of the image to 100% */
      height: 100%;
      object-fit: cover; /* Maintain image aspect ratio and cover the container */
    }
  }
  @media (max-width: 880px) {
    .centered-image-container {
      width: 15%;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    .hero-right {
      display: none;
    }
    .hero-left {
      width: 100%;
      text-align: center;
      padding: 10% 0;
      .brush-container {
        width: 30%;
        margin: 0 auto;
      }
      h1 {
        text-align: center;
        margin: 10% auto 0;
      }
    }
    .centered-image-container {
      position: relative;
      left: 50%;
      width: 50%;
      margin-bottom: 10%;
    }
    p {
      text-align: center;
      margin: 0 auto;
    }
  }
  @media (max-width: 600px) {
    .hero-left h1 {
      font-size: 64px;
    }
  }
`;
