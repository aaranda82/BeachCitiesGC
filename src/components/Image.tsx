import React from "react";
import styled from "styled-components";
import hero from "../assets/hero.jpeg";
import hero2 from "../assets/hero2.jpg";
import heroMobile from "../assets/hero_mobile.jpg";
import heroMobile2 from "../assets/hero_mobile2.jpg";
import { useLocation } from "react-router-dom";

const Img = styled.img<{ home: boolean }>`
  width: 100%;
  height: ${(props) => (props.home ? "90vh" : "30vh")};
  background-image: url(${(props) => (props.home ? hero : hero2)});
  background-size: cover;
  background-attachment: fixed;
  @media screen and (max-width: 600px) {
    background-image: url(${(props) =>
      props.home ? heroMobile : heroMobile2});
  }
`;

export const Image = () => {
  const location = useLocation();
  return <Img home={location.pathname === "/"} />;
};
