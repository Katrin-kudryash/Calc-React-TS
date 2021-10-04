import React from "react";
import "./App.css";
import Calculator from "./components/calculator";
import styled from "styled-components";

const Container = styled.div`
  align-items: center;
  background: #323232;
  display: flex;
  flex-direction: colomn;
  justify-content: center;
  min-height: 100vh;
  /* width: 100vw; */
`;

const Grid = styled.div`
  display: grid;
`;

function App() {
  return (
    <Container>
      <Calculator />
    </Container>
  );
}

export default App;
