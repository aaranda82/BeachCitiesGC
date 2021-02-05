import React from "react";
import styled from "styled-components";
import Title from "../components/Title";
import kitchenPic from "../assets/kitchen.jpeg";
import { Div, Container, Paragraph } from "../styledComponents";

const Image = styled.img`
  width: 350px;
  height: 520px;
  border-radius: 10px;
`;

const Kitchen = () => {
  return (
    <>
      <Title text="kitchen" />
      <Container>
        <Div>
          <Image src={kitchenPic} />
        </Div>
        <Div>
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat, quam eget ornare mollis, eros neque dignissim leo, sit
            amet facilisis nisi nisl sed erat. Pellentesque mollis quam vel erat
            faucibus pulvinar. Ut eget nunc congue, tempor nunc quis, malesuada
            diam. Fusce ultricies turpis eget commodo aliquet. Proin ut accumsan
            nulla. Phasellus condimentum felis id lacus luctus cursus. Ut ut
            arcu sodales, venenatis felis et, venenatis nisi. Vivamus gravida
            pharetra tortor eu auctor. Suspendisse scelerisque, magna a auctor
            tincidunt, metus nulla dictum turpis, quis porta augue velit a odio.
            Nullam tempor ante a auctor sagittis. Nulla facilisi. Suspendisse
            vitae venenatis nulla, quis commodo sapien. Morbi eu cursus ex.
          </Paragraph>
        </Div>
      </Container>
    </>
  );
};

export default Kitchen;
