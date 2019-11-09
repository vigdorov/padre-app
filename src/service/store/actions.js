import * as T from './type-list';

export const checkChef = (payload) => {
  return {
      type: T.CHECK_CHEF,
      payload: payload
  }
};
export const checkFood = (payload) => {
    return {
        type: T.CHECK_FOOD,
        payload: payload
    }
};
export const checkOrders = (payload) => {
    return {
        type: T.CHECK_ORDERS,
        payload: payload
    }
};
export const checkBasket = (payload) => {
    return {
        type: T.CHECK_BASKET,
        payload: payload
    }
};
export const changeStyle = (payload) => {
    return {
        type: T.OPTION_STYLE,
        payload: payload
    }
};

export const addChef = (payload) => {
    return {
        type: T.ADD_CHEF,
        payload: payload,
    };
};
export const showModal = (payload) => {
    return {
        type: T.SHOW_MODAL,
        payload: payload,
    };
};
export const hideModal = () => {
    return {
        type: T.HIDE_MODAL,
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
export const editIndex = (payload) => {
    return {
        type: T.EDIT_INDEX,
        payload: payload,
    };
};
export const addOrder = (payload) => {
    return {
        type: T.ADD_ORDER,
        payload: payload,
    };
};
export const addBasket = (payload) => {
    return {
        type: T.ADD_BASKET,
        payload: payload,
    };
};
export const clearBasket = () => {
    return {
        type: T.CLEAR_BASKET
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