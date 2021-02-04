import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";
import { colorScheme } from "../colorScheme";

const { independence, terraCotta } = colorScheme;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  margin: 10px 0;
  position: sticky;
`;

const Item = styled.div`
  width: 15%;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${independence};
  &:hover {
    font-weight: bold;
  }
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const About = styled.a`
  width: 15%;
  border: none;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: ${terraCotta};
  font-weight: bold;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const Menu = () => {
  const location = useLocation();

  const handleNavLinks = (text: string) => {
    return (
      <Item>
        <NavLink
          exact
          to={`/${text === "about" ? "" : text}`}
          activeStyle={{
            fontWeight: "bold",
            color: terraCotta,
          }}
          style={{ textDecoration: "none", color: independence }}>
          {text.toUpperCase()}
        </NavLink>
      </Item>
    );
  };

  const handleAbout = () => {
    return location.pathname === "/" ? (
      <About href="#about">ABOUT</About>
    ) : (
      handleNavLinks("about")
    );
  };

  return (
    <Container>
      {handleAbout()}
      {handleNavLinks("kitchen")}
      {handleNavLinks("bathroom")}
      {handleNavLinks("contact")}
      {handleNavLinks("docs")}
    </Container>
  );
};

export default Menu;
