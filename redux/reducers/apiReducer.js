import { FETCH_API } from '../actionTypes';

const initialState = {
    data: null,
};

export default function apiReducer(state=initialState, action) {
    if (action.type == FETCH_API) {
        return {...state, data: action.payload}
    }
    return state;
}