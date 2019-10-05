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
            name: '',
            category: '',
            structure: []
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
      default : {
          return {...store};
      }
  }

};