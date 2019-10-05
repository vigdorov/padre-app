import * as T from './type-list';

export const addChef = (payload) => {
    return {
        type: T.ADD_CHEF,
        payload: payload,
    };
};

export const deleteChef = (payload) => {
    return {
        type: T.DELETE_CHEF,
        payload: payload,
    };
};

export const editChef = (payload) => {
    return {
        type: T.EDIT_CHEF,
        payload: payload,
    };
};

export const addChefFood = (payload) => {
    return {
        type: T.ADD_CHEF_FOOD,
        payload: payload,
    };
};

export const addFood = (payload) => {
    return {
        type: T.ADD_FOOD,
        payload: payload,
    };
};

export const deleteFood = (payload) => {
    return {
        type: T.DELETE_FOOD,
        payload: payload,
    };
};

export const editFood = (payload) => {
    return {
        type: T.EDIT_FOOD,
        payload: payload,
    };
};