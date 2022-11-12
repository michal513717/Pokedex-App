import React, { useCallback } from "react";
import styled from "styled-components";
import { DefaultCallbackType } from "../../../models";
import { useOpenDialog } from "../../hooks/useOpenDialogs";
import { useStore } from "../../store";
import {useAxios} from './../../hooks/useAxios';

const StyledWrapper = styled.div`
  min-width: 250px;
  min-height: 150px;
  height: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
`;

const StyledImage = styled.img`
  display: block;
  width: 75px;
  height: 75px;
`;

const StyledText = styled.p`
  display: block;

  &::first-letter {
    text-transform: uppercase;
  }
`;

const StyledButton = styled.button`
  display: block;
  background-color: hsl(49, 100%, 58%);
  border-radius: 20px;
  text-align: center;
  width: 50%;
`;

type GetMoreInfoCallbackType = <T>(name:T) => void;

const Card = ({name, imageUrl}:{name:string, imageUrl:string}) => {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
  const { setPokemonsDetailsDialogOpen } = useOpenDialog();
  const { fetchData } = useAxios();
  const { setPokemonDetails } = useStore();

  const getMoreInfoCallback = useCallback<GetMoreInfoCallbackType>( async (name)=>{
    
    const data = await fetchData(baseUrl+name, "GET", "");
    
    if(data[1].isError === false){
      
      setPokemonDetails(data[0]);
      setPokemonsDetailsDialogOpen(true);
    }
  },[])

  return (
    <>
      <StyledWrapper>
        <StyledImage src={imageUrl} />
        <StyledText>{name}</StyledText>
        <StyledButton onClick={()=>getMoreInfoCallback(name)}>See More info ! </StyledButton>
      </StyledWrapper>
    </>
  );
};


export default Card;
