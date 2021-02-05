import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import { Container } from "../styledComponents";

const Info = styled.div`
  width: 100%;
  font-size: 25px;
  margin: 20px;
`;

const Contact = () => {
  return (
    <>
      <Title text="contact us" />
      <Container>
        <Info>Bobby Aranda</Info>
        <Info>Email Address coming soon</Info>
        <Info>Phone number coming soon</Info>
      </Container>
    </>
  );
};

export default Contact;
