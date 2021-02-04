import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Home from "./routes/Home";
import Kitchen from "./routes/Kitchen";
import Bathroom from "./routes/Bathroom";
import Contact from "./routes/Contact";
import Docs from "./routes/Docs";
import styled from "styled-components";
import { Image } from "./components/Image";
import Menu from "./components/Menu";
import Hamburger from "./components/Hamburger";
import ScrollToTop from "./components/Scroll";
import { colorScheme } from "./colorScheme";

const Title = styled.h1<{ top: boolean }>`
  width: 100%;
  text-align: center;
  position: absolute;
  top: ${(props) => (props.top ? "65vh" : "10vh")};
  @media screen and (max-width: 500px) {
    color: ${colorScheme.eggshell};
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
`;

const MenuContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;

function App() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Image />
      <Title top={location.pathname === "/"}>
        Beach Cities General Construction
      </Title>
      <Container id="App">
        <Div>
          <MenuContainer>
            <Menu />
          </MenuContainer>
          <Hamburger />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/bathroom" component={Bathroom} />
            <Route path="/contact" component={Contact} />
            <Route path="/docs" component={Docs} />
          </Switch>
        </Div>
      </Container>
    </>
  );
}

export default App;
