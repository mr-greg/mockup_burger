import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;

  .header-left {
    width: 50%;
    background-color: var(--whiteColor);
    display: flex;
    justify-content: left;
    padding-left: 35px;
    gap: 5%;

    .logo-container {
      padding: 3% 5%;
      background-color: var(--redColor);
      border-radius: 0 0 18% 18%;
      cursor: pointer;
      img {
        max-width: 100%;
        margin: 0 auto;
      }
    }

    .header-link-container {
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
  .header-right {
    width: 50%;
    background-color: var(--redColor);
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 35px;

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
  @media (max-width: 800px) {
    .header-left,
    .header-right {
      padding-top: 2%;
      background-color: var(--whiteColor);
    }
    .header-left {
      padding-top: 0;
      .logo-container {
        background-color: var(--whiteColor);
      }
    }
    .header-right {
      padding-top: 0;
      a {
        color: var(--blackColor);
        text-align: center;
      }
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    .header-left {
      padding-left: 0;
      padding-top: 0;
      display: flex;
      flex-direction: column;
      .header-link-container {
        justify-content: center;
      }
      .logo-container {
        display: none;
      }
    }
    .header-right {
      padding-right: 0;
      padding-top: 0;
      justify-content: center;
      flex-direction: column;
    }
  }
`;
