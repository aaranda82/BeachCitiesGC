import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  margin: 10px 0;
  position: sticky;
  top: 0;
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
`;

const Menu = () => {
  return (
    <Container>
      <Item href="#about">ABOUT</Item>
      <Item>CABINETS</Item>
      <Item>DRAWERS</Item>
      <Item>PULLS</Item>
      <Item>Contact</Item>
    </Container>
  );
};

export default Menu;
