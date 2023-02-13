import React from "react";
import { NavLink, useParams, Outlet } from "react-router-dom";
import styled from "styled-components";

export const Param = () => {
  const { id } = useParams();
  return (
    <Container>
      <ContainerTitle>
        <p>Material Details page</p>
        <h4>Material {id}</h4>
      </ContainerTitle>
      <ContainerNav>
        <StyledNavLink to="submitted">Submitted</StyledNavLink>
        <StyledNavLink to="waiting">Waiting</StyledNavLink>
        <StyledNavLink to="late">Late</StyledNavLink>
      </ContainerNav>
      <ContainerOutlet>
        <Outlet />
      </ContainerOutlet>
    </Container>
  );
};
const ContainerOutlet = styled.div`
  background-color: #43b886;
  font-family: cursive;
`;
const Container = styled.div`
  margin: 2rem;
  background-color: #fff;

  font-size: 1.3rem;
  font-weight: 700;
`;

const ContainerNav = styled.div`
  margin-top: 3rem;
  background-color: #076c4f;
  padding: 1rem;
`;
const ContainerTitle = styled.div`
  padding: 2rem;
`;
const StyledNavLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  margin-left: 2.5rem;
  &.active {
    color: black;
    border-bottom: 3px solid yellow;
  }
`;
