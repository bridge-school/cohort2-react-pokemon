export const ACTION_TYPES = {
    showError: 'SHOW_ERROR',
    updatePokemon: 'UPDATE_POKEMON'
  };

export const hasError = () => ({
    type: ACTION_TYPES.showError,
    payload: {
        error: "ops... error"
    }
})

export const updatePokemon = (pokemonData) => ({
    type: ACTION_TYPES.updatePokemon,
    payload: {
        pokemon: {
            name: pokemonData.name,
            picture: pokemonData.sprites.front_default
        }
    }
})

const fetchPokemonAction = (searchValue) => dispatch => 
        fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
            .then((response) => response.json())
            .then((items) => dispatch(updatePokemon(items)))
            .catch((error) => dispatch(hasError()));       
    


export default fetchPokemonAction;