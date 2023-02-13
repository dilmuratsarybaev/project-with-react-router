import React from "react";
import styled from "styled-components";

export const Backdrop = () => {
  return <StyledBackdrop></StyledBackdrop>;
};

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(13, 13, 13, 0.7);
  z-index: 2;
`;
