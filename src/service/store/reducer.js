import * as T from './type-list';

const initState = {
    chef: [
        {
            fullName: 'Ивушкин Александр',
            avatar: '',
            specialDish: '',
            designation: '',
            age: 18,
            experience: '',
            phone: 9999999999,
            address: '',
            aboutMe: '',
            email: '',
            facebookURL: '',
            twitterURL: '',
            linkedInURL: ''
        }
    ],
    food: [
        {
            name: 'Суп из лягушки',
            category: 'первое блюдо',
            structure: "вода, соль, лягушка"
        }
    ],
};

export const reducer =(store = initState, action) => {
  switch (action.type) {
      case T.ADD_CHEF: {
          const chef = [...store.chef];
          chef.push(action.payload);
          return {...store, chef};
      }
      case T.ADD_CHEF_FOOD: {
          const food = [...store.food];
          food.push(action.payload);
          return {...store, food};
      }
      default : {
          return {...store};
      }
  }

};