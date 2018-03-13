import { combineReducers } from 'redux';
import headerReducer from './header-reducer'
import inputSearchReducer from './input-search-reducer'
import buttonReducer from './button-reducer'

export const INITIAL_STATE = {
    header: "",
    inputSearch: "",
    pokemonList: {}
};

const allReducers = combineReducers({
    header: headerReducer,
    inputSearch: inputSearchReducer,
    pokemonList: buttonReducer,
});

export default allReducers;

