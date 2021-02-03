import React from "react";
import styled from "styled-components";
import { NavLink, useLocation } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  position: sticky;
`;

const Item = styled.a`
  width: 15%;
  border: none;
  cursor: pointer;
  text-decoration: none;
  color: black;
  &:hover {
    font-weight: 900;
  }
  @media screen and (max-width: 600px) {
    width: 30%;
  }
`;

const Menu = () => {
  const location = useLocation();

  const handleNavLinks = (text: string) => {
    return (
      <NavLink
        exact
        to={`/${text === "about" ? "" : text}`}
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{ textDecoration: "none", color: "black" }}>
        {text.toUpperCase()}
      </NavLink>
    );
  };

  const handleAbout = () => {
    return location.pathname === "/" ? (
      <Item
        href="#about"
        style={{
          fontWeight: "bold",
          color: "red",
        }}>
        ABOUT
      </Item>
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
    </Container>
  );
};

export default Menu;
