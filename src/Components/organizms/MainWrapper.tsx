import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { device } from "../../utlis/mediaQueries";
import Card from "../molecules/Card";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useAxios } from "../../hooks/useAxios";
import { useOpenDialog } from "../../hooks/useOpenDialogs";


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
  scrollbar-color: #6969dd #e0e0e0;
  scrollbar-width: thin;

  &::-webkit-scrollbar {
    width: 16px;
  }

  &::-webkit-scrollbar-track {
    background-color: #e4e4e4;
    border-radius: 100px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d4aa70;
    border-radius: 100px;
  }

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

const MainWrapper: React.FC = () => {
  const [url, setUrl] = useState<string>('https://pokeapi.co/api/v2/pokemon')
  const [pokemonList, setPokemonList] = useState([]);
  const { setIsErrorFetchDialogOpen } = useOpenDialog();
  const { fetchData } = useAxios();
  

      //       let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.name}`);
    // fetchData = async (url = "https://pokeapi.co/api/v2/pokemon?limit=20") => {
  // const {} = useAxios();
  // const getMoreData = async (pokemonName: string) => {
  //   try {
  //     const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  //     if (response.status === 200) {
  //       // await this.props.SET_DETAILS_POKEMON(response.data);
  //     }
  //   } catch (error) {
  //     console.log("Err", error);
  //   }
  // };

  useEffect(()=>{
    fetchDataCallback();
  },[])

  const fetchDataCallback = useCallback( async ()=>{
    const data = await fetchData(url, "GET", '')

    if(data[1].isError === true){
      setIsErrorFetchDialogOpen(true);
    }
  
    if(data[1].isError === false){
      setPokemonList(data[0].results);
    }

    console.log(data[0].results)
  },[url])

  return (
    <>
      <StyledWrapper>

      </StyledWrapper>
      {/* <StyledWrapper>
        {Loading ? (
          <Box style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <CircularProgress color="inherit" />
          </Box>
        ) : (
          this.props.pokemonsImage.map((pokemon) => {
            return (
              <Card
                key={pokemon.pokemonName}
                getMoreData={(pokemonName) => this.getMoreData(pokemonName)}
                name={pokemon.pokemonName}
                url={pokemon.image}
              />
            );
          })
        )}
      </StyledWrapper>
      <StyledButton onClick={() => this.props.getMorePokemons()}>
        Load more data ....
      </StyledButton> */}
    </>
  );

}
// const mapDispatchToProps = (dispatch) => ({
//   SET_DETAILS_POKEMON: (pokemnoDetails) => dispatch(SET_DETAILS_POKEMON_ACTION(pokemnoDetails)),
// });

// const mapStateToProps = (state) => ({
//   pokemonsImage: state.pokemonsImage,
// });

// MainWrapper.propTypes = {
//   pokemonsImage: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string.isRequired,
//       pokemonName: PropTypes.string.isRequired,
//     }),
//   ),

//   SET_DETAILS_POKEMON: PropTypes.func.isRequired,
//   getMorePokemons: PropTypes.func.isRequired,
//   Loading: PropTypes.bool.isRequired,
// };

// MainWrapper.defaultProp = {
//   pokemonsImage: [],
// };

export default MainWrapper;
