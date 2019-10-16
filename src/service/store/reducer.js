import * as T from './type-list';

const initState = {
    chef: [],
    food: [
        {
            name: 'Суп из лягушки',
            category: 'первое блюдо',
            structure: "вода, соль, лягушка"
        }
    ],
    modalVisible: false,
    optionStyle: 'page-view__block'
};

export const reducer =(store = initState, action) => {
  switch (action.type) {
      case T.ADD_CHEF: {
          const chef = [...store.chef];
          chef.push(action.payload);
          return {...store, chef};
      }
      case T.OPTION_STYLE: {
          return {...store, optionStyle: action.payload};
      }
      case T.ADD_CHEF_FOOD: {
          const food = [...store.food];
          food.push(action.payload);
          return {...store, food};
      }
      case T.CHECK_CHEF: {
         return {...store, chef: action.payload}
      }
      case T.HIDE_MODAL: {
          return {...store, modalVisible: false}
      }
      case T.SHOW_MODAL: {
          return {...store, modalVisible: true}
      }
      default : {
          return {...store};
      }
  }

};