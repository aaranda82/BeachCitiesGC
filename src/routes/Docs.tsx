import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { Container } from "../styledComponents";

const Info = styled.div`
  width: 100%;
  font-size: 25px;
  margin: 20px;
`;

const Docs = () => {
  return (
    <>
      <Title text="docs" />
      <Container>
        <Info>Docs coming soon</Info>
      </Container>
    </>
  );
};

export default Docs;
