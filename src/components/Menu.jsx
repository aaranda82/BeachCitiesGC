import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
  return (
    <Container>
      <Item href="#about">ABOUT</Item>
      <Link to="/kitchen">KITCHEN</Link>
      <Link to="/bathroom">BATHROOM</Link>
      <Link to="/contact">CONTACT</Link>
    </Container>
  );
};

export default Menu;
