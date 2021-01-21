import React from "react";
import Home from "./components/Home";
import styled from "styled-components";
import hero from "./assets/hero.jpeg";
import pic from "./assets/picture3.jpg";
import mobile from "./assets/picture3_mobile.jpg";

const Image = styled.img`
  width: 100%;
  height: 90vh;
  background-image: url(${pic});
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 600px) {
    height: 60vh;
    background-image: url(${mobile});
    background-size: contain;
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Div>
      <Image id="App" />
      <Home />
    </Div>
  );
}

export default App;
