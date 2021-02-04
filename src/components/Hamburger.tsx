import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import { colorScheme } from "../colorScheme";
import Menu from "./Menu";

const { independence, deepChampagne } = colorScheme;

const Container = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    width: 100%;
    display: flex;
    justify-content: center;
    display: unset;
  }
`;

const IconConatiner = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.i`
  padding: 10px;
  background: ${deepChampagne};
  color: ${independence};
  font-size: 25px;
`;

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setShowMenu(false);
  }, [pathname]);

  const handleMenu = () => {
    return showMenu ? <Menu /> : null;
  };

  return (
    <Container>
      <IconConatiner>
        <Icon
          onClick={() => setShowMenu(!showMenu)}
          className={showMenu ? "fas fa-times" : "fas fa-bars"}
        />
      </IconConatiner>
      {handleMenu()}
    </Container>
  );
};

export default Hamburger;
