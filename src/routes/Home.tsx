import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import AboutImg from "../assets/about.jpeg";
import { Div, Container, Paragraph } from "../styledComponents";

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
    <>
      <Title text="about" />
      <Container id="App">
        <Div>
          <Image src={AboutImg} />
        </Div>
        <Div>
          <Paragraph>
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
          </Paragraph>
        </Div>
      </Container>
    </>
  );
};

export default Home;
