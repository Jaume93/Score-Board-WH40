import {
    INCREMENT_CP_PLAYER_2,
    DECREASE_CP_PLAYER_2,
    INCREMENT_CP_PLAYER_1,
    DECREASE_CP_PLAYER_1,
    INCREMENT_BATTLEROUND,
    DECREASE_BATTLEROUND
} from "../actions/actionTypes";

const InitialState = {
    value: 0,
    value1: 0,
    value2: 0
};

function cpReducer(state = InitialState, action) {
    switch (action.type) {
        case INCREMENT_CP_PLAYER_1:
            return { ...state, value1: state.value1 + 1 };
        case DECREASE_CP_PLAYER_1:
            return { ...state, value1: state.value1 - 1 };
        case INCREMENT_CP_PLAYER_2:
            return { ...state, value2: state.value2 + 1 };
        case DECREASE_CP_PLAYER_2:
            return { ...state, value2: state.value2 - 1 };
        case INCREMENT_BATTLEROUND:
            return { ...state, value: state.value + 1 };
        case DECREASE_BATTLEROUND:
            return { ...state, value: state.value - 1 };
        default:
            return state
    }
}

export default cpReducer;