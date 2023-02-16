import {
    DECREASE_SIZE,
    FETCH_API,
    INCREASE_SIZE,
    RESET_SIZE
} from '../actionTypes';

export const increase = (measurement) => {
    return {
        type:
        INCREASE_SIZE,
        payload: {
            increaseBy: measurement
        }
    };
};

export const decrease = (measurement) => {
    return {
        type:
        DECREASE_SIZE,
        payload: {
            decreaseBy: measurement
        }
    };
};

export const reset = () => {
    return {
        type:
        RESET_SIZE,
        payload: {
            
        }
    };
};

export const fetchApi = (data) => {
    return {
        type: FETCH_API,
        payload: data,
    };
};