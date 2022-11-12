import { Button } from "@chakra-ui/react";
import React, { useCallback } from "react";
import styled from "styled-components";
import { DefaultCallbackType } from "../../models";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { useStore } from "../store";
import { device } from "../utlis/mediaQueries";
import MainWrapper from "./../Components/organizms/MainWrapper";
import Dialogs from "../Components/dialogs";

const StyledWrapper = styled.div`
  font-family: sans-serif;
  width: 100vw;
  height: 100vh;
  background-color: hsl(49, 100%, 58%);
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const MainView: React.FC = () => {
  const { fetchDataCallback } = useGetPokemons();
  const { nextPokemonsRequest } = useStore();

  const getMoreDataCallback = useCallback<DefaultCallbackType>(()=>{
    
    fetchDataCallback(nextPokemonsRequest);
  },[nextPokemonsRequest])

  return(
    <StyledWrapper>
      <MainWrapper/>
      <Button onClick={getMoreDataCallback}> Load more... </Button>
      <Dialogs/>
    </StyledWrapper>
  )
}

export default MainView;
