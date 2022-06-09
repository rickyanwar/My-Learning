import * as TabActionsTypes from './tabActions'

const intialState = {
    selectedTab: ""
}

const tabReducer = (state = intialState, action) => {
    switch (action.type) {
        case TabActionsTypes.SET_SELECTED_TAB:
            return {
                ...state,
                selectedTab: action.payload.selectedTab
            }
        default:
            return state;
    }
}

export default tabReducer;