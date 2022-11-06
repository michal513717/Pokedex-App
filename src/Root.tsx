import React from "react";
import styled from "styled-components";
import MainView from "./Views/MainView";
import MainWrapper from "./Components/organizms/MainWrapper";

const StyledButton = styled.button`
  display: block;
  backgorund: white;
  width: 200px;
  heigth: 50px;
  border-radius: 20px;
  font-size: 2rem;
`;

class Root extends React.Component {
  state = { Loading: false };

  render() {
    const Loading = true;
    //       let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.name}`);
    // fetchData = async (url = "https://pokeapi.co/api/v2/pokemon?limit=20") => {
    //         await this.props.SET_IMAGES([
    //           { image: response.data.sprites.front_default, pokemonName: pokemonName.name },
    //         ]);
    //       }


    return (
      <>
      </>
      // <MainView>
        /* {this.props.pokemons.length > 1 ? (
          <MainWrapper
            Loading={Loading}
            getMorePokemons={() => this.fetchData(this.props.nextTwenty)}
          ></MainWrapper>
        ) : (
          <StyledButton onClick={() => this.fetchData()}>Let&#39;s Start !</StyledButton>
        )} */
      // </MainView>
    );
  }
}

// const mapStateToProps = (state) => ({
//   pokemons: state.pokemons,
//   pokemonsImage: state.pokemonsImage,
//   nextTwenty: state.nextTwenty,
// });

// const mapDispatchToProps = (dispatch) => ({
//   SET_POKEMONS: (pokemons) => dispatch(SET_POKEMONS_ACTION(pokemons)),
//   SET_IMAGES: (images) => dispatch(SET_IMAGES_ACTION(images)),
// });

// Root.propTypes = {
//   SET_IMAGES: PropTypes.func.isRequired,
//   SET_POKEMONS: PropTypes.func.isRequired,
//   nextTwenty: PropTypes.string,
//   pokemonsImage: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string,
//       pokemonName: PropTypes.string,
//     }),
//   ),

//   pokemons: PropTypes.arrayOf(
//     PropTypes.shape({
//       image: PropTypes.string,
//       pokemonName: PropTypes.string,
//     }),
//   ),
// };

// Root.defaultProp = {
//   pokemons: [],
//   nextTwenty: "",
//   pokemonsImage: [],
// };

export default Root;
