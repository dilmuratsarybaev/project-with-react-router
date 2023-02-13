import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export const Header = () => {
  return (
    <HeaderContent>
      <nav>
        <StyledLink to={"/courses/materials"}>Materials</StyledLink>
        <StyledLink to={"/courses/students"}>Students</StyledLink>
        <StyledLink to={"/courses/ratings"}>Ratings</StyledLink>
      </nav>
    </HeaderContent>
  );
};

const HeaderContent = styled.header`
  background-color: #1262c3;
  padding: 2rem 0rem;
  width: 100%;
`;
const StyledLink = styled(NavLink)`
  margin-left: 3rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 700;
  color: #fff;
  &.active {
    color: black;
    border-bottom: 3px solid yellow;
  }
`;
