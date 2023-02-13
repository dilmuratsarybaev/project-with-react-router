import React from "react";
import styled from "styled-components";

export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

const StyledButton = styled.button`
  background-color: #5bd489;
  padding: 0.8rem 2rem;
  border: none;
  color: #ffff;
  font-weight: 800;
  border-radius: 0.5rem;
`;
