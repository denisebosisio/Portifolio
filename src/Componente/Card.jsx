import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 17%;
  height: 20%;
`;

export default function Card({ children }) {
  return(
    <Container>
      {children}
    </Container>
  );
}