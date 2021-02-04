import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import AboutImg from "../assets/about.jpeg";

const Container = styled.div`
  text-align: center;
  height: 370px;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const About = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Div = styled.div`
  width: 40%;
  line-height: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  padding: 15px;
  @media screen and (max-width: 500px) {
    width: 100%;
    padding: 0%;
  }
`;

const Image = styled.img`
  height: 300px;
  width: 450px;
  @media screen and (max-width: 500px) {
    height: 250px;
    width: 375px;
  }
`;

const Home = () => {
  return (
    <Container id="App">
      <About id="about">
        <Title text="about" />
        <Div>
          <Image src={AboutImg} />
        </Div>
        <Div>
          <p style={{ padding: "0 5px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            fringilla eget mi nec mattis. Etiam nec porttitor justo. Proin
            congue elementum maximus. Cras blandit nulla libero, id lobortis leo
            hendrerit et. Pellentesque pulvinar molestie velit ac dignissim.
            Cras eget semper metus. Integer tristique urna eros, vitae molestie
            lorem varius ac. Integer rhoncus lorem urna, nec efficitur dui
            volutpat quis. Aenean suscipit et diam vel mollis. Praesent mollis
            purus eros. Phasellus eu dolor fermentum, gravida diam a, fermentum
            metus. Curabitur lobortis vestibulum malesuada. Praesent accumsan
            euismod arcu vel laoreet. Etiam vehicula arcu neque, sed egestas
            lorem varius nec.
          </p>
        </Div>
      </About>
    </Container>
  );
};

export default Home;
