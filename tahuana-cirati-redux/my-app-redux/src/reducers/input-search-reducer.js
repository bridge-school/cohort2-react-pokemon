import { INITIAL_STATE } from ".";

const inputSearchReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'UPDATE_INPUT_SEARCH':
            return payload.inputSearch;
        default:
            return state
    }
}

export default inputSearchReducer;