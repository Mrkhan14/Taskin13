import { DECREASE, INCREASE } from "../types/counter";

const initialState = {
    value1: 0,
    step:4
};

const counterReducer = (state = initialState, { type, payload }) => {
    const { value1, step } = state;

    switch (type) {
        case INCREASE:
            return { ...state, value1: value1 + (payload | step) };
        case DECREASE:
            return{...state, value1: value1 - ( payload | step)}    
        default:
            return state;
    }
}

export default counterReducer