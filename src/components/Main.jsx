import React from "react";
import styled from "styled-components";
import Menu from "./Menu";

const Container = styled.div`
  text-align: center;
  height: 370px;
  width: 80%;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const CompanyName = styled.h1`
  position: absolute;
  bottom: 370px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: grey;
`;

const About = styled.div`
  width: 100%;
  display: flex;
`;

const Div = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
`;

const Main = () => {
  return (
    <Container>
      <CompanyName>Beach Cities General Construction</CompanyName>
      <Menu />
      <About id="about">
        <Div>
          <h2>About</h2>
        </Div>
        <p style={{ width: "50%", height: "300px" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fringilla eget mi nec mattis. Etiam nec porttitor
          justo. Proin congue elementum maximus. Cras blandit nulla libero, id lobortis leo hendrerit et. Pellentesque
          pulvinar molestie velit ac dignissim. Cras eget semper metus. Integer tristique urna eros, vitae molestie
          lorem varius ac. Integer rhoncus lorem urna, nec efficitur dui volutpat quis. Aenean suscipit et diam vel
          mollis. Praesent mollis purus eros. Phasellus eu dolor fermentum, gravida diam a, fermentum metus. Curabitur
          lobortis vestibulum malesuada. Praesent accumsan euismod arcu vel laoreet. Etiam vehicula arcu neque, sed
          egestas lorem varius nec.
        </p>
      </About>
    </Container>
  );
};

export default Main;
