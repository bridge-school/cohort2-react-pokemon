import pokeBall from '../images/pokeball.png';

const initialState = {
  searchTerm: '',
  pokeName: 'No Pokémon Around',
  pokeImage: pokeBall,
  pokeList: [],
  isLoading: false,
  loadingMessage: ''
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
