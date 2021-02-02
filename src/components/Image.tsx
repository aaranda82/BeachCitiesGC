import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpeg";
import heroMobile from "../assets/hero_mobile.jpg";

const Img = styled.img`
  width: 100%;
  height: 90vh;
  background-image: url(${hero});
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 600px) {
    background-image: url(${heroMobile});
  }
`;

export const Image = () => {
  return <Img />;
};
