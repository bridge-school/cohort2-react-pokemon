import { combineReducers } from 'redux';
import headerReducer from './header-reducer'
import inputSearchReducer from './input-search-reducer'
import pokemonListReducer from './pokemon-list-reducer'

export const INITIAL_STATE = {
    header: '',
    inputSearch: '',
    pokemonList: {}
};

export default combineReducers({
    header: headerReducer,
    inputSearch: inputSearchReducer,
    pokemonList: pokemonListReducer,
});

