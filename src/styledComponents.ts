import styled from "styled-components";
import { colorScheme } from "./colorScheme";

export const Div = styled.div`
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

export const Container = styled.div`
  border-radius: 10px;
  background-color: ${colorScheme.deepChampagne};
  text-align: center;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Paragraph = styled.p`
  padding: 0 5px;
`;
