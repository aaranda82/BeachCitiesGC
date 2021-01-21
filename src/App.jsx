import React from "react";
import Main from "./components/Main";
import styled from "styled-components";
import hero from "./assets/hero.jpeg";

const Image = styled.img`
  width: 100%;
  height: 500px;
  background-image: url(/static/media/hero.0e0ef208.jpeg);
  background-size: cover;
  background-attachment: fixed;
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
      <Main />
    </Div>
  );
}

export default App;
