const initialState = {
  pokemons: [],
  pokemonsImage: [],
  pokemonDetail: [],
  nextTwenty: "",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POKEMONS":
      return {
        ...state,
        pokemons: [...state.pokemons, ...action.payload.item.results],
        nextTwenty: action.payload.item.next,
      };
    case "SET_IMAGES":
      return {
        ...state,
        pokemonsImage: [...state.pokemonsImage, ...action.payload.item],
      };
    case "SET_DETAILS_POKEMON":
      if (action.payload.item) {
        return {
          ...state,
          pokemonDetail: [action.payload.item],
        };
      } else {
        return {
          ...state,
          pokemonDetail: [],
        };
      }
    default:
      return state;
  }
};

export default rootReducer;
