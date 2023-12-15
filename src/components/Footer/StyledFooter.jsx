import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;

  .footer-left {
    width: 50%;
    background-color: var(--redColor);
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 35px;
    padding-top: 10%;

    a {
      font-family: "AlterwaveRegular";
      color: white;
      text-decoration: none;
      margin-right: 5%;
      margin-top: 1.5%;
    }
    :hover {
      color: var(--blackColor);
      transition: ease-in-out 0.2s;
    }
    button {
      text-decoration: none;
      border: none;
      background-color: var(--yellowColor);
      color: var(--whiteColor);
      padding: 5px 25px;
      border-radius: 20px;
      cursor: pointer;
    }
  }
  .footer-right {
    width: 50%;
    background-color: var(--whiteColor);
    display: flex;
    justify-content: right;
    padding-right: 35px;
    padding-top: 10%;

    gap: 5%;

    .logo-container {
      padding: 3% 5%;
      background-color: var(--redColor);
      border-radius: 18% 18% 0 0;
      img {
        max-width: 100%;
        margin: 0 auto;
      }
    }

    .footer-link-container {
      display: flex;
      align-items: center;
      margin: 15px 0 0;
      a {
        margin: 0 10px;
        font-family: "AlterwaveRegular";
        text-decoration: none;
        color: var(--blackColor);
        font-size: 16px;
      }
      :hover {
        color: var(--redColor);
        transition: ease-in-out 0.2s;
      }
      .current-page {
        color: var(--redColor);
      }
    }
  }
  @media (max-width: 800px) {
    .footer-left,
    .footer-right {
      padding-top: 2%;
      background-color: var(--whiteColor);
    }
    .footer-left {
      a {
        color: var(--blackColor);
        text-align: center;
      }
    }
    .footer-right {
      .logo-container {
        background-color: transparent;
      }
    }
  }
  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    .footer-left {
      padding-left: 0;
      display: flex;
      flex-direction: column;
    }
    .footer-right {
      padding-right: 0;
      justify-content: center;
      .logo-container {
        display: none;
      }
    }
  }
`;
