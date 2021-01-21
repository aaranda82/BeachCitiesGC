import React, { useState } from "react";
import Home from "./components/Home";
import Cabinets from "./components/Cabinets";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

function App() {
  const [view, setView] = useState("HOME");

  function changeView(newView) {
    setView(newView);
  }

  const handleView = () => {
    switch (view) {
      case "HOME":
        return <Home changeView={changeView} />;
      case "CABINETS":
        return <Cabinets changeView={changeView} />;
      default:
        return <Home changeView={changeView} />;
    }
  };

  return <Div>{handleView()}</Div>;
}

export default App;
