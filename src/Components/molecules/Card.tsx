import React from "react";
import styled from "styled-components";

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

// const Card:React.FC = ({ name, url, getMoreData } : { name: string, url: string, getMoreData: any}) => { // rewrite
const Card:React.FC = () => {
  return (
    <>
    </>
    // <StyledWrapper>
    //   <StyledImage src={url} />
    //   <StyledText>{name}</StyledText>
    //   <StyledButton onClick={() => getMoreData(name)}>See More info ! </StyledButton>
    // </StyledWrapper>
  );
};

// Card.propTypes = {
//   name: PropTypes.string.isRequired,
//   url: PropTypes.string.isRequired,
//   getMoreData: PropTypes.func.isRequired,
// };

export default Card;
