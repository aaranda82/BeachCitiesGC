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

  const changeView = (newView) => {
    setView(newView);
  };

  const handleView = () => {
    switch (view) {
      case "HOME":
        return <Home ChangeView={changeView} />;
      case "CABINETS":
        return <Cabinets ChangeView={changeView} />;
      default:
        return <Home ChangeView={changeView} />;
    }
  };

  return <Div>{handleView()}</Div>;
}

export default App;
