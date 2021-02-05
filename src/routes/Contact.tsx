import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { Container } from "../styledComponents";

const Info = styled.div`
  width: 100%;
  font-size: 30px;
  margin: 20px;
`;

const Contact = () => {
  return (
    <Container>
      <Title text="contact us" />
      <Info>Bobby Aranda</Info>
      <Info>Lic# 1068671</Info>
    </Container>
  );
};

export default Contact;
