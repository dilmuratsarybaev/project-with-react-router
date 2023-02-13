import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../UI/Button";

export const MaterialsItem = ({ item }) => {
  const navigate = useNavigate();
  const showDetails = () => {
    navigate(`${item.id}/details`);
  };
  return (
    <Container>
      <p>{item.title}</p>
      <Button onClick={showDetails}>DETAILS</Button>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin-top: 2rem;
  align-items: center;
  font-size: 1.3rem;
  color: #240878;
  font-weight: 600;
  border-radius: 0.5rem;
`;
