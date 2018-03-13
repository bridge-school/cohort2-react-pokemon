import { INITIAL_STATE } from ".";

const buttonReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'SHOW_ERROR':
            return payload.error;
        case 'UPDATE_POKEMON':
            return payload.pokemon;
        default:
            return state
    }
}

export default buttonReducer;