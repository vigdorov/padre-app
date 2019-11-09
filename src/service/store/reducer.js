import * as T from './type-list';

const initState = {
    chef: [],
    food: [],
    orders: [],
    basket: [],
    modalVisible: 0,
    optionStyle: 'page-view__block',
    index: 0,
};

export const reducer =(store = initState, action) => {
  switch (action.type) {
      case T.ADD_CHEF: {
          const chef = [...store.chef];
          chef.push(action.payload);
          return {...store, chef};
      }
      case T.ADD_ORDER: {
          const orders = [...store.orders];
          orders.push(action.payload);
          return {...store, orders};
      }
      case T.DELETE_CHEF: {
          const chef = [...store.chef];
          chef.splice(action.payload, 1);
          return {...store, chef};
      }
      case T.OPTION_STYLE: {
          return {...store, optionStyle: action.payload};
      }
      case T.ADD_FOOD: {
          const food = [...store.food];
          food.push(action.payload);
          return {...store, food};
      }
      case T.ADD_BASKET: {
          const basket = [...store.basket];
          basket.push(action.payload);
          return {...store, basket};
      }
      case T.CLEAR_BASKET: {
          return {...store, basket: []}
      }
      case T.DELETE_FOOD: {
          const food = [...store.food];
          food.splice(action.payload, 1);
          return {...store, food};
      }
      case T.CHECK_CHEF: {
         return {...store, chef: action.payload}
      }
      case T.CHECK_ORDERS: {
          return {...store, orders: action.payload}
      }
      case T.CHECK_BASKET: {
          return {...store, basket: action.payload}
      }
      case T.CHECK_FOOD: {
          return {...store, food: action.payload}
      }
      case T.EDIT_INDEX: {
          return {...store, index: action.payload}
      }
      case T.HIDE_MODAL: {
          return {...store, modalVisible: false}
      }
      case T.SHOW_MODAL: {
          return {...store, modalVisible: action.payload}
      }
      default : {
          return {...store};
      }
  }

};