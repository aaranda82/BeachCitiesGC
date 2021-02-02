import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./routes/Home";
import Kitchen from "./routes/Kitchen";
import Bathroom from "./routes/Bathroom";
import Contact from "./routes/Contact";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function App() {
  return (
    <Div id="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/kitchen" component={Kitchen} />
          <Route path="/bathroom" component={Bathroom} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </Router>
    </Div>
  );
}

export default App;
