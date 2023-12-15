import styled from "styled-components";

export const StyledBurger = styled.section`
  display: flex;
  background-color: var(--yellowColor);
  overflow-x: hidden;

  .img {
    width: 50%;
    position: relative;
    img {
      width: 60%;
      position: absolute;
      bottom: 0;
      left: 20%;
    }
  }

  .infos {
    width: 50%;
    padding: 5% 4%;
    h2 {
      font-size: 112px;
      color: white;
      text-align: right;
      text-transform: uppercase;
      line-height: 1;
    }
    h2 span {
      display: block;
    }
    p {
      color: white;
      text-align: right;
      margin-bottom: 40px;
    }
    button {
      border: none;
      color: var(--whiteColor);
      background-color: var(--redColor);
      padding: 15px 60px;
      border-radius: 20px;
      font-size: 16px;
      float: right;
    }
  }

  @media (max-width: 1340px) {
    h2 span {
      font-size: 80px;
    }
  }
  @media (max-width: 850px) {
    h2 span {
      font-size: 60px;
    }
  }
  @media (max-width: 800px) {
    .img {
      display: none;
    }
    .infos {
      margin: 0 auto;

      h2,
      p {
        text-align: center;
      }
      button {
        float: none;
        display: block;
        margin: 0 auto;
      }
    }
  }
  @media (max-width: 600px) {
    h2 span {
      font-size: 32px;
    }
  }
  @media (max-width: 400px) {
    .infos {
      h2 {
        margin-top: 10px;
        span {
          font-size: 24px;
        }
      }
      button {
        width: 100%;
        text-align: center;
        padding: 15px 10px;
      }

      h2 {
      }
    }
  }
`;
