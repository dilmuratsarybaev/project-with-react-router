import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const StudentItem = ({ student }) => {
  const navigate = useNavigate();
  const showStudentDetails = () => {
    navigate(`${student.id}/details`);
  };
  return (
    <Section>
      <p>{student.title}</p>
      <Button onClick={showStudentDetails}>DETAILS</Button>
    </Section>
  );
};

const Section = styled.section`
  padding: 2rem;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 0.5rem;
`;
