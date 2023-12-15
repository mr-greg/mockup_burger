import React from "react";
import styled from "styled-components";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Burger from "./components/Burgers/Burger";
import Tacos from "./components/Tacos/Tacos";
import Kebab from "./components/Kebab/Kebab";
import Footer from "./components/Footer/Footer";

const StyledHome = styled.div`
  .header-hero {
    max-width: 100vw;
    max-height: 100vh;
  }
`;

function Home() {
  return (
    <StyledHome>
      <div className="header-hero">
        <Header />
        <Hero />
        <Burger />
        <Tacos />
        <Kebab />
        <Footer />
      </div>
    </StyledHome>
  );
}

export default Home;
