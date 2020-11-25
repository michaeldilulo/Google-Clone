export const initialState = {
    term: null,
}

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
}

// state is state of data layer, action is what is being dispatched into the state
const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_SEARCH_TERM:
            return {
                // return whatever the state looks like and change the term with whatever action term you dispatch
                ...state,
                term: action.term,
            }
        default:
            return state;
    }
}

export default reducer;