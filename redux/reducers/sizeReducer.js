import {
    DECREASE_SIZE,
    INCREASE_SIZE,
    RESET_SIZE
} from '../actionTypes';

const initial = {
    size: 40
}

export default function(state = initial, action) {
    if (action.type == DECREASE_SIZE) {
        return {...state, size: state.size - action.payload.decreaseBy};
    } else if (action.type == INCREASE_SIZE) {
        return {...state, size: state.size + action.payload.increaseBy};
    } else if (action.type == RESET_SIZE) {
        return {...state, size: 40};
    }
    return state;
}