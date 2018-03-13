export const ACTION_TYPES = {
    updateHeaderAction: 'UPDATE_HEADER_MESSAGE'
  };

const updateHeaderAction = (message) => ({
    type: ACTION_TYPES.updateHeaderAction,
    payload: {
        messsage: message
    }
})

export default updateHeaderAction;