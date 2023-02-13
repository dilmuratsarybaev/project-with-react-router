import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export const DetailsStudents = () => {
  const { id } = useParams();

  return (
    <Container>
      <p>Student Details Page</p>
      <p>Student Name {id}</p>
    </Container>
  );
};

const Container = styled.div`
    margin: 2rem;
    background-color: #fff;
    padding: 2rem;
    height: 30rem;
`