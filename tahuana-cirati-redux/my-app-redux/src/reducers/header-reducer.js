import { INITIAL_STATE } from ".";

const headerReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case 'UPDATE_HEADER_MESSAGE':
            return payload.messsage;
        default:
            return state
    }
}

export default headerReducer;