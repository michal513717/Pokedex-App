import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { SET_DETAILS_POKEMON as SET_DETAILS_POKEMON_ACTION } from "../actions";
import PropTypes from "prop-types";
import { device } from "../utlis/mediaQueries";

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

const StyledBackgroundInfo = styled.div`
  z-index: 9;
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const StyledInfo = styled.div`
  width: 30vw;
  height: 55vh;
  margin: 100px auto;
  background: white;
  position: relative;
  border-radius: 20px;
  border: 5px solid #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const StyledImage = styled.img`
  display: block;

  max-width: 150px;
  max-height: 150px;
  min-width: 100px;
  min-height: 100px;

  @media ${device.tablet} {
    max-width: 200px;
    max-height: 200px;
    min-width: 150px;
    min-height: 150px;
  }
`;

const StyledHeader = styled.h1`
  display: block;
  font-size: 1rem;
  padding-top: 17px;
  &::first-letter {
    text-transform: uppercase;
  }

  @media ${device.tablet} {
    padding-top: 17px;
    font-size: 2rem;
  }
`;

const StyledParagraph = styled.p`
  display: block;
  font-size: 1rem;

  @media ${device.tablet} {
    font-size: 1.6rem;
  }
`;

const StyledButton = styled.button`
  display: block;
  position: absolute;
  right: 10px;
  top: 10px;
  border: none;
  background: white;
  font-size: 20px;
  width: 30px;
  height: 30px;

  @media ${device.tablet} {
    width: 40px;
    height: 40px;
  }
`;

class MainView extends React.Component {
  render() {
    const { pokemonDetail } = this.props;

    return (
      <>
        {pokemonDetail.length > 0 ? (
          <StyledBackgroundInfo>
            <StyledInfo>
              <StyledHeader>{pokemonDetail[0].name}</StyledHeader>
              <StyledImage src={pokemonDetail[0].sprites.front_default} />
              <StyledParagraph>Height: {pokemonDetail[0].height}</StyledParagraph>
              <StyledParagraph>Weight: {pokemonDetail[0].weight}</StyledParagraph>
              <StyledButton onClick={() => this.props.SET_DETAILS_POKEMON()}> X </StyledButton>
            </StyledInfo>
          </StyledBackgroundInfo>
        ) : (
          <></>
        )}
        <StyledWrapper theme={this.props.theme}>{this.props.children}</StyledWrapper>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  pokemonDetail: state.pokemonDetail,
});

const mapDispatchToProps = (dispatch) => ({
  SET_DETAILS_POKEMON: (close_object) => dispatch(SET_DETAILS_POKEMON_ACTION(close_object)),
});

MainView.propTypes = {
  SET_DETAILS_POKEMON: PropTypes.func.isRequired,
  children: PropTypes.element,
};

MainView.defaultProps = {
  children: {},
};

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
