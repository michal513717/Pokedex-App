import { Button, Switch, useColorMode, useColorModeValue, Box, Flex } from "@chakra-ui/react";
import React, { useCallback } from "react";
import styled from "styled-components";
import { DefaultCallbackType } from "../../models";
import { useGetPokemons } from "../hooks/useGetPokemons";
import { useStore } from "../store";
import { device } from "../utlis/mediaQueries";
import MainWrapper from "./../Components/organizms/MainWrapper";
import Dialogs from "../Components/dialogs";

const MainView: React.FC = () => {
  const { fetchDataCallback } = useGetPokemons();
  const { toggleColorMode } = useColorMode();
  const { nextPokemonsRequest } = useStore();
  const bg = useColorModeValue("hsl(49, 100%, 58%)", "black");
  
  const getMoreDataCallback = useCallback<DefaultCallbackType>(()=>{
    
    fetchDataCallback(nextPokemonsRequest);
  },[nextPokemonsRequest])

  return(
    <Flex
      fontFamily={"sans-serif"}
      width={"100vw"}
      height={"100vh"}
      background={bg}
      direction={"column"}
      justify={"space-around"}
      align={"center"}
    >
      <MainWrapper/>
      <Button onClick={getMoreDataCallback}> Load more... </Button>
      <Switch onChange={toggleColorMode} position={"absolute"} right={0} top={0}/>
      <Dialogs/>
    </Flex>
  )
}

export default MainView;
