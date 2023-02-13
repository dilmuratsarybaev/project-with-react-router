import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const Aside = () => {
  return (
    <AsideContainer>
      <Title>LOGO</Title>
      <NavList>
        <LiItem>
          <StyledLink to="/courses">Courses</StyledLink>
        </LiItem>
        <LiItem>
          <StyledLink to="/anouncements">Anouncements</StyledLink>
        </LiItem>
        <LiItem>
          <StyledLink to="/notifications"> Notifications</StyledLink>
        </LiItem>
        <LiItem>
          <StyledLink to="/schedule"> Schedule</StyledLink>
        </LiItem>
      </NavList>
    </AsideContainer>
  );
};

const AsideContainer = styled.aside`
  width: 20rem;
  background-color: #e3dfaf;
  padding-top: 3rem;
  height: 100vh;
`;
const Title = styled.h2`
  text-align: center;
  color: #6e11ac;
  font-weight: 900;
`;
const NavList = styled.ul`
  margin-top: 5rem;
  background-color: #fff;
`;

const LiItem = styled.li`
  list-style: none;
`;
const StyledLink = styled(NavLink)`
  display: inline-block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  font-size: 1.3rem;
  font-weight: 700;
  color: #176bb4;
  padding: 0.8rem;
  &.active {
    color: black;
    background-color: #7c0e90;
  }
`;
