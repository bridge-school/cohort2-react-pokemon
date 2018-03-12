export const ACTION_TYPES = {
    updateInputSearchAction: 'UPDATE_INPUT_SEARCH'
  };

const updateInputSearchAction = (searchValue) => ({
    type: ACTION_TYPES.updateInputSearchAction,
    payload: {
        inputSearch: searchValue
    }
})

export default updateInputSearchAction;