import React from "react";
import styled from "styled-components";

type Props = {
  label: string;
  position?: [x: number, y: number];
  width?: number;
};

const StyledButton = styled.button`
  background: #e48900;
  border: none;
  border-radius: 8px;
  font-size: 28px;
`;

const Button: React.FC<Props> = ({ label, position, width }) => {
  const styles: React.CSSProperties = {};
  if (position) {
    styles.gridColumnStart = position[0] + 1;
    styles.gridRowStart = position[0] + 1;
  }

  return <StyledButton style={styles}>{label}</StyledButton>;
};

export default Button;
