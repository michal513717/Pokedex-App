import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../utlis/mediaQueries";
import Card from "../molecules/Card";
// import CircularProgress from "@mui/material/CircularProgress";
import { useAxios } from "../../hooks/useAxios";
import { useOpenDialog } from "../../hooks/useOpenDialogs";
import { DefaultCallbackType, GetImagesCallbackType, IDataPokemons } from "../../../models";
import { Box } from "@chakra-ui/react";

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
  const [pokemonList, setPokemonList] = useState<IDataPokemons[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { setIsErrorFetchDialogOpen } = useOpenDialog();
  const { fetchData } = useAxios();

  useEffect(() => {

    fetchDataCallback();
  }, [])

  const fetchDataCallback = useCallback<DefaultCallbackType>(async () => {
    const data = await fetchData(url, "GET", '')

    if (data[1].isError === true) {

      setIsErrorFetchDialogOpen(true);
    }

    if (data[1].isError === false) {

      getPokemonImage(data[0].results);
    }

  }, [url])

  const getPokemonImage = useCallback<GetImagesCallbackType>(async(pokemonList) => {
    let pokemonsListDetails: IDataPokemons[] = [];
    let dataResponse = null;
    let pokemonDetails: IDataPokemons;
    let pokemon; 

    for(let i=0;i<pokemonList.length;i++){
      pokemon = pokemonList[i];

      dataResponse = await (fetchData(url + '/' + pokemon.name, "GET", ''));

      if (dataResponse[1].isError === false) {

        pokemonDetails = {
          name: pokemon.name,
          image: dataResponse[0].sprites.front_default,
          weight: dataResponse[0].weight,
          heigth: dataResponse[0].height
        }

        pokemonsListDetails.push(pokemonDetails)
      }
    }
    
    setPokemonList([...pokemonsListDetails]);
    setIsLoading(false);
  }, [url]);

  return (
    <>
      <StyledWrapper>
        {
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
        }
      </StyledWrapper>
    </>
  );
}

export default MainWrapper;
