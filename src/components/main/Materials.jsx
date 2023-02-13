import React from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { Backdrop } from "../UI/Backdrop";
import { Button } from "../UI/Button";
import { MaterialsItem } from "./MaterialsItem";
const material = [
  {
    title: "Material 1",
    id: 1,
  },
  {
    title: "Material 2",
    id: 2,
  },
];
export const Materials = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log([...searchParams.values()]);
  const showModalHandler = () => {
    searchParams.set("showModal", true);
    setSearchParams(searchParams);
  };
  const closeModalHandler = () => {
    searchParams.delete("showModal");
    setSearchParams(searchParams);
  };
  return (
    <>
      {searchParams.has("showModal") ? (
        <>
          <Backdrop />
          <ModalContainer>
            <StyledInput />
            <StyledInput />
            <StyledInput />
            <Button onClick={closeModalHandler}>Close</Button>
          </ModalContainer>
        </>
      ) : null}
      <Container>
        <ContainerButton>
          <ButtonStyled onClick={showModalHandler}>
            ADD NEW MATERIAL
          </ButtonStyled>
        </ContainerButton>
        {material.map((item) => {
          return <MaterialsItem item={item} />;
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 4rem 2rem;
`;

const ButtonStyled = styled.button`
  padding: 0.8rem 2rem;
  background-color: #d2760d;
  font-size: 1.3rem;
  border: none;
  color: #fff;
  font-weight: 900;
  border-radius: 1.5rem;
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const ModalContainer = styled.form`
  width: 25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2em;
  background: white;
  z-index: 3;
  text-align: center;
  border-radius: 0.5rem;
`;

const StyledInput = styled.input`
  padding: 0.5rem;
  width: 15rem;
  margin-bottom: 1rem;
  border: 1.5px solid blue;
  border-radius: 0.2rem;
`;
