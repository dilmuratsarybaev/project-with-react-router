import React from "react";
import styled from "styled-components";
import { Button } from "../components/UI/Button";

export const Universal = ({ title, children, onClick }) => {
  return (
    <Container>
      <Paragraph>{title}</Paragraph>
      <div>
        <Button onClick={onClick}>{children}</Button>
      </div>
    </Container>
  );
};

const Container = styled.div`
    margin: 2rem;
    background-color: #fff;
    padding: 2rem;
    height: 30rem;
    font-size: 1.4rem;
`
const Paragraph = styled.p`
    margin-bottom:3rem;
`