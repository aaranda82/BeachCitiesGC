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
`;

const Shadow = styled.h1`
  position: absolute;
  bottom: 370px;
  padding: 5px 10px;
  border-radius: 10px;
  background-color: grey;
  opacity: 0.6;
  height: 55px;
  width: 510px;
  @media screen and (max-width: 600px) {
    height: 140px;
    width: 225px;
  }
`;

const About = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Div = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: 50px;
  }
`;

const Par = styled.p`
  width: 50%;
  height: 300px;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: fit-content;
  }
`;

const Sub = styled.div`
  font-size: 12px;
`;

const Home = () => {
  return (
    <Container>
      <Shadow />
      <CompanyName>
        Beach Cities General Construction<Sub>WE GOT WOOD</Sub>
      </CompanyName>
      <Menu />
      <About id="about">
        <Div>
          <h2>About</h2>
        </Div>
        <Par>
          At Beach Cities General Construction cabinets give us wood. We will work hard to satisfy your needs. Our team
          will bend over forwards to provide excellent service. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Nam fringilla eget mi nec mattis. Etiam nec porttitor justo. Proin congue elementum maximus. Cras blandit
          nulla libero, id lobortis leo hendrerit et. Pellentesque pulvinar molestie velit ac dignissim. Cras eget
          semper metus. Integer tristique urna eros, vitae molestie lorem varius ac. Integer rhoncus lorem urna, nec
          efficitur dui volutpat quis. Aenean suscipit et diam vel mollis. Praesent mollis purus eros. Phasellus eu
          dolor fermentum, gravida diam a, fermentum metus. Curabitur lobortis vestibulum malesuada. Praesent accumsan
          euismod arcu vel laoreet. Etiam vehicula arcu neque, sed egestas lorem varius nec.
        </Par>
      </About>
    </Container>
  );
};

export default Home;
