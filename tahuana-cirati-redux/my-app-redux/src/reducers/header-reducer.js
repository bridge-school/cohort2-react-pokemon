
const headerReducer = (state = '', { type, payload }) => {
    switch (type) {
        case 'UPDATE_HEADER_MESSAGE':
            return payload.messsage;
        default:
            return ''
    }
}

export default headerReducer;