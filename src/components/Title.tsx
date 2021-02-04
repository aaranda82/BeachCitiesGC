import React from "react";
import styled from "styled-components";
import { colorScheme } from "../colorScheme";

const TitleDiv = styled.h1`
  width: 100%;
  text-align: center;
  color: ${colorScheme.terraCotta};
`;

const Title = ({ text }: { text: string }) => {
  return <TitleDiv>{text.toUpperCase()}</TitleDiv>;
};

export default Title;
