import React from "react";
import styled from "styled-components";
import { colorScheme } from "../colorScheme";

const Foot = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Icon = styled.i`
  font-size: 35px;
  padding: 20px;
  color: ${colorScheme.terraCotta};
`;

const Footer = () => {
  return (
    <Foot>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.instagram.com/beachcitiesgc/">
        <Icon className="fab fa-instagram" />
      </a>
      <div
        style={{
          color: colorScheme.independence,
          width: "100%",
          textAlign: "center",
        }}>
        Lic# 1068671
      </div>
    </Foot>
  );
};

export default Footer;
