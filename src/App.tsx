import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Kitchen from "./routes/Kitchen";
import Bathroom from "./routes/Bathroom";
import Contact from "./routes/Contact";
import styled from "styled-components";
import { Image } from "./components/Image";

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

function App() {
  return (
    <Router>
      <Image />
      <Container id="App">
        <Div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/kitchen" component={Kitchen} />
            <Route path="/bathroom" component={Bathroom} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Div>
      </Container>
    </Router>
  );
}

export default App;
