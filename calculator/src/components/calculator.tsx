import React from "react";
import styled from "styled-components";
import Button from "./button";

const Container = styled.div``;

const Grid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 80px);
  grid-template-rows: repeat(4, 80px);
`;

const Calculator: React.FC = () => {
  return (
    <Container>
      <Grid>
        <Button label="AC" position={[0, 0]} width={2} />
        <Button label="Oops" position={[2, 0]} width={2} />
        <Button label="9" />
        <Button label="8" />
        <Button label="7" />
        <Button label="6" />
        <Button label="5" />
        <Button label="4" />
        <Button label="3" />
        <Button label="2" />
        <Button label="1" />
      </Grid>
    </Container>
  );
};

export default Calculator;
