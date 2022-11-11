import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../utlis/mediaQueries";
import Card from "../molecules/Card";
// import CircularProgress from "@mui/material/CircularProgress";
import { useAxios } from "../../hooks/useAxios";
import { useOpenDialog } from "../../hooks/useOpenDialogs";
import { DefaultCallbackType, GetImagesCallbackType, IDataPokemons } from "../../../models";
import { Box } from "@chakra-ui/react";
import { useStore } from "../../store";
import { useGetPokemons } from "../../hooks/useGetPokemons";

const StyledWrapper = styled.div`
  height: 80vh;
  background-color: hsl(100, 100%, 100%);
  border-radius: 30px;
  -webkit-box-shadow: 0px 0px 30px 5px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 30px 5px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 30px 5px rgba(66, 68, 90, 1);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  overflow: auto;

  @media ${device.mobileL} {
    width: 300px;
  }

  @media ${device.tablet} {
    width: 600px;
  }

  @media ${device.laptop} {
    width: 900px;
  }

  @media ${device.laptopL} {
    width: 1100px;
  }

  @media ${device.desktop} {
    width: 1700px;
  }
`;

const StyledButton = styled.button`
  display: block;
  backgorund: white;
  width: 200px;
  heigth: 50px;
  border-radius: 20px;
  font-size: 2rem;
  margin: 0 auto;
  position: relative;
  bottom: 0;
`;



const MainWrapper = () => {
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon');
  // const [isLoading, setIsLoading] = useState<boolean>(true);
  const { fetchDataCallback } = useGetPokemons();
  const { pokemonList } = useStore();

  useEffect(() => {

    fetchDataCallback(url);
  }, [])

  return (
    <>
      <StyledWrapper>
        {/* {
          isLoading ? (
            <Box>
              Loading ....
            </Box>
          ) : (
            pokemonList.map((pokemon) => {
              return (
                <Card
                  key={pokemon.name}
                  name={pokemon.name}
                  imageUrl={pokemon.image}
                />
              )
            })
          )
        } */}

        {
          pokemonList.map((pokemon) => {
            return (
              <Card
                key={pokemon.name}
                name={pokemon.name}
                imageUrl={pokemon.image}
              />
            )
          })
        }
      </StyledWrapper>
    </>
  );
}

export default MainWrapper;
